import { useState } from "react";
import { Download, Printer } from "lucide-react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Button } from "~/components/ui/button";

export interface InvoiceData {
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  companyName: string;
  companyAddress: string;
  companyPhone: string;
  companyEmail: string;
  customerName: string;
  customerAddress: string;
  customerEmail: string;
  items: Array<{
    description: string;
    quantity: number;
    unitPrice: number;
  }>;
  notes: string;
}

const defaultInvoiceData: InvoiceData = {
  invoiceNumber: "CN-2025-001",
  issueDate: new Date().toISOString().split("T")[0],
  dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0],
  companyName: "Your Company Inc.",
  companyAddress: "123 Business Street, Suite 100, New York, NY 10001",
  companyPhone: "+1 (555) 123-4567",
  companyEmail: "billing@yourcompany.com",
  customerName: "John Smith",
  customerAddress: "456 Customer Ave, Los Angeles, CA 90001",
  customerEmail: "john@customer.com",
  items: [
    { description: "Product Return - Refund", quantity: 1, unitPrice: 500 },
    { description: "Service Discount Applied", quantity: 1, unitPrice: 150 },
  ],
  notes:
    "This credit memo is issued to adjust the customer account balance. Please apply this credit to future invoices.",
};

export function CreditInvoice() {
  const [invoiceData] = useState<InvoiceData>(defaultInvoiceData);

  const handlePrint = () => {
    const printWindow = window.open("", "", "width=800,height=600");
    if (printWindow) {
      const invoiceElement = document.getElementById("invoice-template");
      if (invoiceElement) {
        printWindow.document.write(invoiceElement.innerHTML);
        printWindow.document.close();
        printWindow.print();
      }
    }
  };

  const handleDownloadPDF = async () => {
    try {
      const invoiceElement = document.getElementById("invoice-template");
      if (!invoiceElement) return;

      const canvas = await html2canvas(invoiceElement, {
        scale: 2,
        useCORS: true,
        logging: false,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save(`credit-invoice-${invoiceData.invoiceNumber}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  const totalAmount = invoiceData.items.reduce(
    (sum, item) => sum + item.quantity * item.unitPrice,
    0
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div id="invoice-template" className="bg-white">
        <div className="p-8 md:p-12 print:p-0">
          {/* Header */}
          <div className="mb-8 pb-8 border-b-2 border-gray-200">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {invoiceData.companyName}
                </h1>
                <p className="text-sm text-gray-600">
                  {invoiceData.companyAddress}
                </p>
                <p className="text-sm text-gray-600">
                  {invoiceData.companyPhone}
                </p>
                <p className="text-sm text-gray-600">
                  {invoiceData.companyEmail}
                </p>
              </div>
              <div className="text-right">
                <div className="inline-block bg-red-50 border-2 border-red-200 px-4 py-2 rounded">
                  <p className="text-sm font-semibold text-red-700">
                    CREDIT MEMO
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Invoice Details */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Bill To
              </h3>
              <p className="font-semibold text-gray-900 mb-1">
                {invoiceData.customerName}
              </p>
              <p className="text-sm text-gray-600">
                {invoiceData.customerAddress}
              </p>
              <p className="text-sm text-gray-600">
                {invoiceData.customerEmail}
              </p>
            </div>
            <div className="text-right">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-semibold text-gray-600">
                    Invoice Number:
                  </span>
                  <span className="text-sm text-gray-900 font-mono">
                    {invoiceData.invoiceNumber}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-semibold text-gray-600">
                    Issue Date:
                  </span>
                  <span className="text-sm text-gray-900">
                    {new Date(invoiceData.issueDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-semibold text-gray-600">
                    Due Date:
                  </span>
                  <span className="text-sm text-gray-900">
                    {new Date(invoiceData.dueDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Items Table */}
          <div className="mb-8">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 text-sm">
                    Description
                  </th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-900 text-sm">
                    Quantity
                  </th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-900 text-sm">
                    Unit Price
                  </th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-900 text-sm">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {invoiceData.items.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="py-4 px-4 text-sm text-gray-900">
                      {item.description}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900 text-right">
                      {item.quantity}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900 text-right">
                      ${item.unitPrice.toFixed(2)}
                    </td>
                    <td className="py-4 px-4 text-sm font-semibold text-gray-900 text-right">
                      ${(item.quantity * item.unitPrice).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Totals Section */}
          <div className="flex justify-end mb-8">
            <div className="w-full md:w-80">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="flex justify-between mb-4 pb-4 border-b border-gray-300">
                  <span className="text-sm font-semibold text-gray-600">
                    Subtotal:
                  </span>
                  <span className="text-sm text-gray-900">
                    ${totalAmount.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between mb-4 pb-4 border-b border-gray-300">
                  <span className="text-sm font-semibold text-gray-600">
                    Tax (0%):
                  </span>
                  <span className="text-sm text-gray-900">$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-lg font-bold text-gray-900">
                    Credit Amount:
                  </span>
                  <span className="text-lg font-bold text-red-600">
                    ${totalAmount.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Notes Section */}
          {invoiceData.notes && (
            <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">
                Notes:
              </h4>
              <p className="text-sm text-gray-700">{invoiceData.notes}</p>
            </div>
          )}

          {/* Footer */}
          <div className="pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
            <p>
              Thank you for your business. This credit memo is valid for 12
              months from the issue date.
            </p>
            <p className="mt-2">
              For questions, please contact us at {invoiceData.companyEmail}
            </p>
          </div>

          <div className="flex justify-end mt-10 gap-3 mb-6 print:hidden">
            <Button
              onClick={handlePrint}
              variant="outline"
              className="flex items-center gap-2 bg-transparent"
            >
              <Printer className="w-4 h-4" />
              Print Invoice
            </Button>
            {/* <Button
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
