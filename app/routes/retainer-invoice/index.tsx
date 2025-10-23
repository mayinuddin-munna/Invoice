import { useState } from "react";

interface InvoiceItem {
  description: string;
  quantity: number;
  rate: number;
}

export default function RetainerInvoice() {
  const [items] = useState<InvoiceItem[]>([
    { description: "Web Development Services", quantity: 1, rate: 5000 },
    { description: "UI/UX Design", quantity: 1, rate: 2500 },
    { description: "Project Management", quantity: 1, rate: 1500 },
  ]);

  const subtotal = items.reduce(
    (sum, item) => sum + item.quantity * item.rate,
    0
  );
  const taxRate = 0.1;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Invoice Container */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-8 py-12 text-white">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">INVOICE</h1>
              <p className="text-slate-300">Retainer Billing</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-300">Invoice #</p>
              <p className="text-2xl font-bold">INV-2024-001</p>
            </div>
          </div>

          {/* Company Info */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">
                From
              </p>
              <p className="font-semibold text-lg">Your Company Name</p>
              <p className="text-slate-300 text-sm">123 Business Street</p>
              <p className="text-slate-300 text-sm">New York, NY 10001</p>
              <p className="text-slate-300 text-sm">contact@company.com</p>
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">
                Bill To
              </p>
              <p className="font-semibold text-lg">Client Company</p>
              <p className="text-slate-300 text-sm">456 Client Avenue</p>
              <p className="text-slate-300 text-sm">Los Angeles, CA 90001</p>
              <p className="text-slate-300 text-sm">billing@client.com</p>
            </div>
          </div>
        </div>

        {/* Invoice Details */}
        <div className="px-8 py-6 bg-slate-50 border-b border-slate-200">
          <div className="grid grid-cols-4 gap-4 text-sm">
            <div>
              <p className="text-slate-600 font-semibold mb-1">Invoice Date</p>
              <p className="text-slate-900">October 23, 2024</p>
            </div>
            <div>
              <p className="text-slate-600 font-semibold mb-1">Due Date</p>
              <p className="text-slate-900">November 23, 2024</p>
            </div>
            <div>
              <p className="text-slate-600 font-semibold mb-1">
                Project Period
              </p>
              <p className="text-slate-900">Oct 1 - Oct 31, 2024</p>
            </div>
            <div>
              <p className="text-slate-600 font-semibold mb-1">Status</p>
              <p className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-semibold">
                Pending
              </p>
            </div>
          </div>
        </div>

        {/* Line Items Table */}
        <div className="px-8 py-6">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-slate-300">
                <th className="text-left py-3 px-4 font-semibold text-slate-700">
                  Description
                </th>
                <th className="text-center py-3 px-4 font-semibold text-slate-700">
                  Quantity
                </th>
                <th className="text-right py-3 px-4 font-semibold text-slate-700">
                  Rate
                </th>
                <th className="text-right py-3 px-4 font-semibold text-slate-700">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-slate-200 hover:bg-slate-50"
                >
                  <td className="py-4 px-4 text-slate-900">
                    {item.description}
                  </td>
                  <td className="py-4 px-4 text-center text-slate-900">
                    {item.quantity}
                  </td>
                  <td className="py-4 px-4 text-right text-slate-900">
                    ${item.rate.toLocaleString()}
                  </td>
                  <td className="py-4 px-4 text-right font-semibold text-slate-900">
                    ${(item.quantity * item.rate).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals Section */}
        <div className="px-8 py-6 bg-slate-50 border-t border-slate-200">
          <div className="flex justify-end mb-4">
            <div className="w-80">
              <div className="flex justify-between py-2 border-b border-slate-300 mb-2">
                <span className="text-slate-700">Subtotal</span>
                <span className="font-semibold text-slate-900">
                  ${subtotal.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-300 mb-3">
                <span className="text-slate-700">Tax (10%)</span>
                <span className="font-semibold text-slate-900">
                  ${tax.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between py-3 bg-slate-900 text-white px-4 rounded-lg">
                <span className="font-bold">Total Due</span>
                <span className="text-xl font-bold">
                  ${total.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Notes Section */}
        <div className="px-8 py-6 border-t border-slate-200">
          <h3 className="font-semibold text-slate-900 mb-3">Payment Terms</h3>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            This retainer invoice represents the final billing for services
            rendered during the project period. Payment is due within 30 days of
            invoice date. Please make payment to the account details provided
            below.
          </p>

          <h3 className="font-semibold text-slate-900 mb-3">Bank Details</h3>
          <div className="grid grid-cols-2 gap-4 text-sm text-slate-700">
            <div>
              <p className="text-slate-600 font-semibold mb-1">
                Account Holder
              </p>
              <p>Your Company Name</p>
            </div>
            <div>
              <p className="text-slate-600 font-semibold mb-1">
                Account Number
              </p>
              <p>1234567890</p>
            </div>
            <div>
              <p className="text-slate-600 font-semibold mb-1">
                Routing Number
              </p>
              <p>021000021</p>
            </div>
            <div>
              <p className="text-slate-600 font-semibold mb-1">Bank Name</p>
              <p>First National Bank</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 bg-slate-900 text-white text-center text-sm">
          <p>
            Thank you for your business. For questions, contact us at
            contact@company.com or (555) 123-4567
          </p>
        </div>
      </div>

      {/* Print Button */}
      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={() => window.print()}
          className="px-6 py-2 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
        >
          Print Invoice
        </button>
        <button
          onClick={() =>
            alert("Download functionality would be implemented here")
          }
          className="px-6 py-2 bg-slate-200 text-slate-900 rounded-lg font-semibold hover:bg-slate-300 transition-colors"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
}
