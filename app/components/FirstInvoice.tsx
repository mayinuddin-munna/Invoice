import { useState } from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { Printer, Download, Plus, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { jsPDF } from "jspdf";

interface LineItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

export default function FirstInvoice() {
  const [invoiceNumber, setInvoiceNumber] = useState("INV-2024-001");
  const [invoiceDate, setInvoiceDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [dueDate, setDueDate] = useState(
    new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]
  );

  const [lineItems, setLineItems] = useState<LineItem[]>([
    {
      id: "1",
      description: "Web Development Services",
      quantity: 40,
      rate: 150,
      amount: 6000,
    },
    {
      id: "2",
      description: "UI/UX Design",
      quantity: 20,
      rate: 120,
      amount: 2400,
    },
  ]);

  const addLineItem = () => {
    const newItem: LineItem = {
      id: Date.now().toString(),
      description: "",
      quantity: 1,
      rate: 0,
      amount: 0,
    };
    setLineItems([...lineItems, newItem]);
  };

  const removeLineItem = (id: string) => {
    setLineItems(lineItems.filter((item) => item.id !== id));
  };

  const updateLineItem = (
    id: string,
    field: keyof LineItem,
    value: string | number
  ) => {
    setLineItems(
      lineItems.map((item) => {
        if (item.id === id) {
          const updated = { ...item, [field]: value };
          if (field === "quantity" || field === "rate") {
            updated.amount = updated.quantity * updated.rate;
          }
          return updated;
        }
        return item;
      })
    );
  };

  const subtotal = lineItems.reduce((sum, item) => sum + item.amount, 0);
  const taxRate = 0.1;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const doc = new jsPDF();

    // Example invoice data
    doc.setFontSize(16);
    doc.text("INVOICE", 85, 20);

    doc.setFontSize(12);
    doc.text("Invoice No: #12345", 20, 40);
    doc.text("Date: 15 Oct 2025", 20, 50);
    doc.text("Customer: John Doe", 20, 60);
    doc.text("Item: Web Development Service", 20, 80);
    doc.text("Amount: $500", 20, 90);

    // Add footer
    doc.setFontSize(10);
    doc.text("Thank you for your business!", 70, 280);

    // Download the file
    doc.save("invoice.pdf");
  };

  return (
    <div className="mx-auto max-w-4xl">
      <Card className="overflow-hidden bg-card shadow-lg print:shadow-none">
        {/* Header */}
        <div className="bg-primary p-8 text-primary-foreground print:bg-primary">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">INVOICE</h1>
              <p className="mt-2 text-sm opacity-90">
                Invoice #{invoiceNumber}
              </p>
            </div>
            <div className="text-right">
              <h2 className="text-2xl font-bold">Your Company</h2>
              <p className="mt-2 text-sm opacity-90">123 Business Street</p>
              <p className="text-sm opacity-90">San Francisco, CA 94102</p>
              <p className="text-sm opacity-90">contact@company.com</p>
              <p className="text-sm opacity-90">(555) 123-4567</p>
            </div>
          </div>
        </div>

        {/* Invoice Details */}
        <div className="space-y-8 p-8">
          {/* Bill To & Dates */}
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <Label className="input-label">Bill To</Label>
              <div className="mt-3 space-y-1">
                <Input
                  placeholder="Client Name"
                  defaultValue="Acme Corporation"
                  className="font-medium"
                />
                <Input
                  placeholder="Address Line 1"
                  defaultValue="456 Client Ave"
                />
                <Input
                  placeholder="Address Line 2"
                  defaultValue="New York, NY 10001"
                />
                <Input placeholder="Email" defaultValue="billing@acme.com" />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="invoice-number" className="input-label">
                  Invoice Number
                </Label>
                <Input
                  id="invoice-number"
                  value={invoiceNumber}
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="invoice-date" className="input-label">
                  Invoice Date
                </Label>
                <Input
                  id="invoice-date"
                  type="date"
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="due-date" className="input-label">
                  Due Date
                </Label>
                <Input
                  id="due-date"
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="mt-2"
                />
              </div>
            </div>
          </div>

          <Separator />

          {/* Line Items */}
          <div>
            <div className="mb-4 grid grid-cols-12 gap-4 input-label">
              <div className="col-span-5">Description</div>
              <div className="col-span-2 text-right">Quantity</div>
              <div className="col-span-2 text-right">Rate</div>
              <div className="col-span-2 text-right">Amount</div>
              <div className="col-span-1"></div>
            </div>

            <div className="space-y-3">
              {lineItems.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-12 gap-4 items-center"
                >
                  <div className="col-span-5">
                    <Input
                      value={item.description}
                      onChange={(e) =>
                        updateLineItem(item.id, "description", e.target.value)
                      }
                      placeholder="Item description"
                    />
                  </div>
                  <div className="col-span-2">
                    <Input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateLineItem(
                          item.id,
                          "quantity",
                          Number.parseFloat(e.target.value) || 0
                        )
                      }
                      className="text-right"
                      min="0"
                    />
                  </div>
                  <div className="col-span-2">
                    <Input
                      type="number"
                      value={item.rate}
                      onChange={(e) =>
                        updateLineItem(
                          item.id,
                          "rate",
                          Number.parseFloat(e.target.value) || 0
                        )
                      }
                      className="text-right"
                      min="0"
                      step="0.01"
                    />
                  </div>
                  <div className="col-span-2 text-right font-medium">
                    ${item.amount.toFixed(2)}
                  </div>
                  <div className="col-span-1 flex justify-end print:hidden">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeLineItem(item.id)}
                      className="h-8 w-8 text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <Button
              onClick={addLineItem}
              variant="outline"
              size="sm"
              className="mt-4 print:hidden bg-transparent"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Line Item
            </Button>
          </div>

          <Separator />

          {/* Totals */}
          <div className="flex justify-end">
            <div className="w-full max-w-xs space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tax (10%)</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-primary">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Payment Info */}
          <div>
            <Label className="input-label">Payment Information</Label>
            <div className="mt-3 space-y-1 text-sm text-foreground">
              <p>Bank: First National Bank</p>
              <p>Account Name: Your Company LLC</p>
              <p>Account Number: 1234567890</p>
              <p>Routing Number: 987654321</p>
            </div>
          </div>

          {/* Notes */}
          <div>
            <Label className="input-label">Notes</Label>
            <textarea
              className="mt-3 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              rows={3}
              placeholder="Additional notes or payment terms..."
              defaultValue="Payment is due within 30 days. Thank you for your business!"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="border-t bg-muted/30 px-8 py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              Thank you for your business!
            </p>
            <div className="flex gap-2 print:hidden">
              <Button onClick={handlePrint} variant="outline" size="sm">
                <Printer className="mr-2 h-4 w-4" />
                Print
              </Button>
              <Button onClick={handleDownload} size="sm">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
