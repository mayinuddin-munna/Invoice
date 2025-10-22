import { useState } from "react";

interface LineItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

interface InvoiceData {
  invoiceNumber: string;
  invoiceDate: string;
  dueDate: string;
  projectName: string;
  clientName: string;
  clientEmail: string;
  companyName: string;
  companyAddress: string;
  companyEmail: string;
  lineItems: LineItem[];
  subtotal: number;
  tax: number;
  total: number;
  stage: number;
  totalStages: number;
  notes: string;
}

const defaultInvoiceData: InvoiceData = {
  invoiceNumber: "INV-2025-001",
  invoiceDate: "2025-10-22",
  dueDate: "2025-11-22",
  projectName: "Website Redesign Project",
  clientName: "Acme Corporation",
  clientEmail: "billing@acme.com",
  companyName: "Design Studio Inc.",
  companyAddress: "123 Creative Lane, Design City, DC 12345",
  companyEmail: "invoices@designstudio.com",
  lineItems: [
    {
      id: "1",
      description: "UI/UX Design - Phase 1",
      quantity: 40,
      rate: 150,
      amount: 6000,
    },
    {
      id: "2",
      description: "Frontend Development - Phase 1",
      quantity: 60,
      rate: 125,
      amount: 7500,
    },
    {
      id: "3",
      description: "Project Management & Coordination",
      quantity: 20,
      rate: 100,
      amount: 2000,
    },
  ],
  subtotal: 15500,
  tax: 1550,
  total: 17050,
  stage: 1,
  totalStages: 3,
  notes:
    "This is an interim invoice for work completed during Stage 1 of the project. Final invoice will be issued upon project completion.",
};

export default function InterimInvoice() {
  const [invoiceData] = useState<InvoiceData>(defaultInvoiceData);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="mx-auto max-w-4xl">
      {/* Invoice Container */}
      <div className="bg-white p-8 shadow-lg md:p-12">
        {/* Header */}
        <div className="mb-8 flex items-start justify-between border-b-2 border-slate-200 pb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">INVOICE</h1>
            <p className="mt-2 text-sm text-slate-600">
              Interim Invoice - Stage {invoiceData.stage} of{" "}
              {invoiceData.totalStages}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-slate-600">Invoice #</p>
            <p className="text-lg font-bold text-slate-900">
              {invoiceData.invoiceNumber}
            </p>
            <p className="mt-4 text-sm text-slate-600">
              <span className="font-semibold">Date:</span>{" "}
              {formatDate(invoiceData.invoiceDate)}
            </p>
            <p className="text-sm text-slate-600">
              <span className="font-semibold">Due Date:</span>{" "}
              {formatDate(invoiceData.dueDate)}
            </p>
          </div>
        </div>

        {/* Company & Client Info */}
        <div className="mb-8 grid grid-cols-2 gap-8">
          {/* From */}
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-600">
              From
            </p>
            <p className="text-lg font-semibold text-slate-900">
              {invoiceData.companyName}
            </p>
            <p className="mt-2 text-sm text-slate-600">
              {invoiceData.companyAddress}
            </p>
            <p className="text-sm text-slate-600">{invoiceData.companyEmail}</p>
          </div>

          {/* Bill To */}
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-600">
              Bill To
            </p>
            <p className="text-lg font-semibold text-slate-900">
              {invoiceData.clientName}
            </p>
            <p className="mt-2 text-sm text-slate-600">
              {invoiceData.clientEmail}
            </p>
            <p className="mt-4 text-sm font-semibold text-slate-700">
              Project: {invoiceData.projectName}
            </p>
          </div>
        </div>

        {/* Line Items Table */}
        <div className="mb-8">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-600">
                  Description
                </th>
                <th className="px-4 py-3 text-right text-xs font-bold uppercase tracking-wide text-slate-600">
                  Qty
                </th>
                <th className="px-4 py-3 text-right text-xs font-bold uppercase tracking-wide text-slate-600">
                  Rate
                </th>
                <th className="px-4 py-3 text-right text-xs font-bold uppercase tracking-wide text-slate-600">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.lineItems.map((item) => (
                <tr key={item.id} className="border-b border-slate-100">
                  <td className="px-4 py-4 text-sm text-slate-700">
                    {item.description}
                  </td>
                  <td className="px-4 py-4 text-right text-sm text-slate-700">
                    {item.quantity}
                  </td>
                  <td className="px-4 py-4 text-right text-sm text-slate-700">
                    {formatCurrency(item.rate)}
                  </td>
                  <td className="px-4 py-4 text-right text-sm font-semibold text-slate-900">
                    {formatCurrency(item.amount)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals Section */}
        <div className="mb-8 flex justify-end">
          <div className="w-full max-w-xs">
            <div className="flex justify-between border-b border-slate-200 py-2">
              <span className="text-sm text-slate-600">Subtotal</span>
              <span className="text-sm font-semibold text-slate-900">
                {formatCurrency(invoiceData.subtotal)}
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-sm text-slate-600">Tax (10%)</span>
              <span className="text-sm font-semibold text-slate-900">
                {formatCurrency(invoiceData.tax)}
              </span>
            </div>
            <div className="flex justify-between border-t-2 border-slate-900 bg-slate-50 py-3">
              <span className="font-bold text-slate-900">Total Due</span>
              <span className="text-lg font-bold text-slate-900">
                {formatCurrency(invoiceData.total)}
              </span>
            </div>
          </div>
        </div>

        {/* Notes Section */}
        <div className="mb-8 rounded-lg bg-blue-50 p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-blue-900">
            Notes
          </p>
          <p className="mt-2 text-sm text-blue-800">{invoiceData.notes}</p>
        </div>

        {/* Footer */}
        <div className="border-t-2 border-slate-200 pt-6 text-center">
          <p className="text-xs text-slate-600">
            Thank you for your business. Please remit payment by the due date.
          </p>
          <p className="mt-2 text-xs text-slate-500">
            For questions regarding this invoice, please contact{" "}
            {invoiceData.companyEmail}
          </p>
        </div>
      </div>

      {/* Print Button */}
      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={() => window.print()}
          className="rounded-lg bg-slate-900 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
        >
          Print Invoice
        </button>
        <button
          onClick={() => window.print()}
          className="rounded-lg border-2 border-slate-900 px-6 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
}
