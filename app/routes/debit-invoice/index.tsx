import { Download, Printer } from "lucide-react";

export default function DebitInvoice() {
  const invoiceData = {
    invoiceNumber: "DI-2025-001",
    invoiceDate: "October 20, 2025",
    dueDate: "November 3, 2025",
    company: {
      name: "Tech Solutions",
      address: "123 Business Ave, Suite 100",
      city: "San Francisco, CA 94105",
      phone: "(555) 123-4567",
      email: "billing@techcorp.com",
    },
    customer: {
      name: "Acme Industries",
      address: "456 Commerce Street",
      city: "New York, NY 10001",
      contact: "John Smith",
    },
    items: [
      {
        description: "Additional Software Licenses (5 units)",
        quantity: 5,
        unitPrice: 299.99,
        amount: 1499.95,
      },
      {
        description: "Premium Support Services - Q4 2025",
        quantity: 1,
        unitPrice: 2500.0,
        amount: 2500.0,
      },
      {
        description: "Custom Integration Development",
        quantity: 40,
        unitPrice: 150.0,
        amount: 6000.0,
      },
    ],
    notes:
      "These charges are for additional services rendered beyond the original contract. Payment is due within 14 days of invoice date.",
  };

  const subtotal = invoiceData.items.reduce(
    (sum, item) => sum + item.amount,
    0
  );
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-lg p-8 md:p-12">
      {/* Header */}
      <div className="flex justify-between items-start mb-8 pb-8 border-b-2 border-border">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {invoiceData.company.name}
          </h1>
          <p className="text-muted-foreground text-sm">
            {invoiceData.company.address}
          </p>
          <p className="text-muted-foreground text-sm">
            {invoiceData.company.city}
          </p>
          <p className="text-muted-foreground text-sm">
            {invoiceData.company.phone}
          </p>
          <p className="text-muted-foreground text-sm">
            {invoiceData.company.email}
          </p>
        </div>
        <div className="text-right">
          <div className="inline-block bg-destructive text-destructive-foreground px-4 py-2 rounded-md font-bold text-lg">
            DEBIT INVOICE
          </div>
        </div>
      </div>

      {/* Invoice Details */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div>
          <p className="text-muted-foreground text-xs font-semibold uppercase">
            Invoice Number
          </p>
          <p className="text-foreground font-semibold">
            {invoiceData.invoiceNumber}
          </p>
        </div>
        <div>
          <p className="text-muted-foreground text-xs font-semibold uppercase">
            Invoice Date
          </p>
          <p className="text-foreground font-semibold">
            {invoiceData.invoiceDate}
          </p>
        </div>
        <div>
          <p className="text-muted-foreground text-xs font-semibold uppercase">
            Due Date
          </p>
          <p className="text-fore ground font-semibold text-destructive">
            {invoiceData.dueDate}
          </p>
        </div>
        <div>
          <p className="text-muted-foreground text-xs font-semibold uppercase">
            Invoice Type
          </p>
          <p className="text-foreground font-semibold">Additional Charges</p>
        </div>
      </div>

      {/* Customer Info */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <p className="text-muted-foreground text-xs font-semibold uppercase mb-2">
            Bill To
          </p>
          <p className="text-foreground font-semibold">
            {invoiceData.customer.name}
          </p>
          <p className="text-muted-foreground text-sm">
            {invoiceData.customer.address}
          </p>
          <p className="text-muted-foreground text-sm">
            {invoiceData.customer.city}
          </p>
          <p className="text-muted-foreground text-sm">
            Contact: {invoiceData.customer.contact}
          </p>
        </div>
        <div>
          <p className="text-muted-foreground text-xs font-semibold uppercase mb-2">
            Payment Terms
          </p>
          <p className="text-foreground">Net 14 Days</p>
          <p className="text-muted-foreground text-sm mt-4">
            Bank Transfer or Credit Card
          </p>
        </div>
      </div>

      {/* Line Items Table */}
      <div className="mb-8 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-border">
              <th className="text-left py-3 px-4 text-muted-foreground text-xs font-semibold uppercase">
                Description
              </th>
              <th className="text-right py-3 px-4 text-muted-foreground text-xs font-semibold uppercase">
                Quantity
              </th>
              <th className="text-right py-3 px-4 text-muted-foreground text-xs font-semibold uppercase">
                Unit Price
              </th>
              <th className="text-right py-3 px-4 text-muted-foreground text-xs font-semibold uppercase">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {invoiceData.items.map((item, index) => (
              <tr
                key={index}
                className="border-b border-border hover:bg-muted/50 transition-colors"
              >
                <td className="py-4 px-4 text-foreground">
                  {item.description}
                </td>
                <td className="text-right py-4 px-4 text-foreground">
                  {item.quantity}
                </td>
                <td className="text-right py-4 px-4 text-foreground">
                  ${item.unitPrice.toFixed(2)}
                </td>
                <td className="text-right py-4 px-4 text-foreground font-semibold">
                  ${item.amount.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Totals */}
      <div className="flex justify-end mb-8">
        <div className="w-full md:w-80">
          <div className="flex justify-between py-3 px-4 border-b border-border">
            <span className="text-foreground">Subtotal</span>
            <span className="text-foreground font-semibold">
              ${subtotal.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between py-3 px-4 border-b border-border">
            <span className="text-foreground">Tax (10%)</span>
            <span className="text-foreground font-semibold">
              ${tax.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between py-3 px-4 bg-destructive text-destructive-foreground rounded-md font-bold text-lg">
            <span>Total Due</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Notes */}
      <div className="bg-muted/50 rounded-md p-4 mb-8">
        <p className="text-muted-foreground text-xs font-semibold uppercase mb-2">
          Notes
        </p>
        <p className="text-foreground text-sm leading-relaxed">
          {invoiceData.notes}
        </p>
      </div>

      {/* Footer */}
      <div className="border-t-2 border-border pt-6 text-center text-muted-foreground text-xs">
        <p>Thank you for your business!</p>
        <p className="mt-2">
          For questions regarding this invoice, please contact us at{" "}
          {invoiceData.company.email}
        </p>
      </div>

      <div className="flex gap-3 justify-end">
        <button
          onClick={() => window.print()}
          className="px-4 py-2 border rounded-md hover:bg-gray-50 transition-colors flex items-center gap-2"
        >
          <Printer className="w-4 h-4" />
          Print
        </button>
        {/* <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2">
          <Download className="w-4 h-4" />
          Download
        </button> */}
      </div>
    </div>
  );
}
