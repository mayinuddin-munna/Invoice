export default function ProFormaInvoice() {
  // Sample data - replace with your actual data
  const invoiceData = {
    invoiceNumber: "PF-2025-001",
    date: "October 16, 2025",
    validUntil: "November 16, 2025",
    company: {
      name: "Your Company Name",
      address: "123 Business Street",
      city: "New York, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "info@yourcompany.com",
    },
    billTo: {
      name: "Client Company Inc.",
      contact: "John Smith",
      address: "456 Client Avenue",
      city: "Los Angeles, CA 90001",
      phone: "+1 (555) 987-6543",
      email: "john@clientcompany.com",
    },
    items: [
      {
        id: 1,
        description: "Professional Consulting Services",
        quantity: 40,
        unit: "hours",
        rate: 150.0,
        amount: 6000.0,
      },
      {
        id: 2,
        description: "Software Development",
        quantity: 80,
        unit: "hours",
        rate: 120.0,
        amount: 9600.0,
      },
      {
        id: 3,
        description: "Project Management",
        quantity: 20,
        unit: "hours",
        rate: 100.0,
        amount: 2000.0,
      },
    ],
    subtotal: 17600.0,
    taxRate: 8.5,
    tax: 1496.0,
    total: 19096.0,
  };

  return (
    <div className="mx-auto max-w-4xl bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="border-b border-border p-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              {invoiceData.company.name}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {invoiceData.company.address}
            </p>
            <p className="text-sm text-muted-foreground">
              {invoiceData.company.city}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {invoiceData.company.phone}
            </p>
            <p className="text-sm text-muted-foreground">
              {invoiceData.company.email}
            </p>
          </div>
          <div className="text-right">
            <div className="inline-block rounded-md bg-primary/10 px-4 py-2">
              <h2 className="text-2xl font-bold text-primary">
                PRO FORMA INVOICE
              </h2>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Invoice #:{" "}
              <span className="font-semibold text-foreground">
                {invoiceData.invoiceNumber}
              </span>
            </p>
            <p className="text-sm text-muted-foreground">
              Date:{" "}
              <span className="font-semibold text-foreground">
                {invoiceData.date}
              </span>
            </p>
            <p className="text-sm text-muted-foreground">
              Valid Until:{" "}
              <span className="font-semibold text-foreground">
                {invoiceData.validUntil}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Bill To Section */}
      <div className="border-b border-border p-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Bill To
            </h3>
            <div className="mt-3">
              <p className="font-semibold text-foreground">
                {invoiceData.billTo.name}
              </p>
              <p className="text-sm text-muted-foreground">
                Attn: {invoiceData.billTo.contact}
              </p>
              <p className="text-sm text-muted-foreground">
                {invoiceData.billTo.address}
              </p>
              <p className="text-sm text-muted-foreground">
                {invoiceData.billTo.city}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {invoiceData.billTo.phone}
              </p>
              <p className="text-sm text-muted-foreground">
                {invoiceData.billTo.email}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Items Table */}
      <div className="p-8">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="pb-3 text-left text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Description
                </th>
                <th className="pb-3 text-right text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Qty
                </th>
                <th className="pb-3 text-right text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Unit
                </th>
                <th className="pb-3 text-right text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Rate
                </th>
                <th className="pb-3 text-right text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.items.map((item, index) => (
                <tr
                  key={item.id}
                  className={
                    index !== invoiceData.items.length - 1
                      ? "border-b border-border"
                      : ""
                  }
                >
                  <td className="py-4 text-sm text-foreground">
                    {item.description}
                  </td>
                  <td className="py-4 text-right text-sm text-foreground">
                    {item.quantity}
                  </td>
                  <td className="py-4 text-right text-sm text-muted-foreground">
                    {item.unit}
                  </td>
                  <td className="py-4 text-right text-sm text-foreground">
                    ${item.rate.toFixed(2)}
                  </td>
                  <td className="py-4 text-right text-sm font-semibold text-foreground">
                    ${item.amount.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="mt-8 flex justify-end">
          <div className="w-full max-w-xs space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal:</span>
              <span className="font-semibold text-foreground">
                ${invoiceData.subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                Tax ({invoiceData.taxRate}%):
              </span>
              <span className="font-semibold text-foreground">
                ${invoiceData.tax.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between border-t-2 border-border pt-2">
              <span className="text-lg font-bold text-foreground">Total:</span>
              <span className="text-lg font-bold text-primary">
                ${invoiceData.total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Terms and Notes */}
      <div className="border-t border-border bg-muted/30 p-8">
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Important Notice
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              This is a Pro Forma Invoice and is not a demand for payment. This
              document is provided as an estimate only and is subject to change.
              Final invoice will be issued upon delivery of goods or completion
              of services.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Payment Terms
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Payment is due within 30 days of final invoice date. Accepted
              payment methods include bank transfer, credit card, or check.
              Please reference invoice number on all payments.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Notes
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Thank you for your business. If you have any questions about this
              pro forma invoice, please contact us at{" "}
              {invoiceData.company.email} or {invoiceData.company.phone}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
