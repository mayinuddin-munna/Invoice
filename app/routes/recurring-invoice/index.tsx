import { Calendar, CheckCircle2 } from "lucide-react";

export default function RecurringInvoice() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Main Invoice Card */}
      <div className="bg-card border border-border rounded-lg shadow-sm p-8 mb-6">
        {/* Invoice Header */}
        <div className="flex justify-between items-start mb-8 pb-8 border-b border-border">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-1">INVOICE</h2>
            <p className="text-sm text-muted-foreground">Recurring • Monthly</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground mb-1">Invoice #</p>
            <p className="text-lg font-semibold text-foreground">
              REC-2024-001
            </p>
          </div>
        </div>

        {/* Company & Client Info */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase mb-3">
              From
            </p>
            <div>
              <p className="font-semibold text-foreground mb-1">Your Company</p>
              <p className="text-sm text-muted-foreground">
                123 Business Street
              </p>
              <p className="text-sm text-muted-foreground">
                New York, NY 10001
              </p>
              <p className="text-sm text-muted-foreground">
                contact@company.com
              </p>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase mb-3">
              Bill To
            </p>
            <div>
              <p className="font-semibold text-foreground mb-1">
                Acme Corporation
              </p>
              <p className="text-sm text-muted-foreground">456 Client Avenue</p>
              <p className="text-sm text-muted-foreground">
                Los Angeles, CA 90001
              </p>
              <p className="text-sm text-muted-foreground">billing@acme.com</p>
            </div>
          </div>
        </div>

        {/* Invoice Details */}
        <div className="grid grid-cols-4 gap-4 mb-8 p-4 bg-secondary rounded-lg">
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">
              Invoice Date
            </p>
            <p className="font-semibold text-foreground flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Oct 19, 2024
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">
              Due Date
            </p>
            <p className="font-semibold text-foreground">Nov 19, 2024</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">
              Frequency
            </p>
            <p className="font-semibold text-foreground">Monthly</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">
              Status
            </p>
            <p className="font-semibold text-foreground flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              Active
            </p>
          </div>
        </div>

        {/* Line Items */}
        <div className="mb-8">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Description
                </th>
                <th className="text-right py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Quantity
                </th>
                <th className="text-right py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Rate
                </th>
                <th className="text-right py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border hover:bg-secondary transition-colors">
                <td className="py-4 px-4">
                  <p className="font-medium text-foreground">
                    Premium Subscription
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Monthly recurring service
                  </p>
                </td>
                <td className="text-right py-4 px-4 text-foreground">1</td>
                <td className="text-right py-4 px-4 text-foreground">
                  $999.00
                </td>
                <td className="text-right py-4 px-4 font-semibold text-foreground">
                  $999.00
                </td>
              </tr>
              <tr className="border-b border-border hover:bg-secondary transition-colors">
                <td className="py-4 px-4">
                  <p className="font-medium text-foreground">
                    Additional Support
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Priority support add-on
                  </p>
                </td>
                <td className="text-right py-4 px-4 text-foreground">1</td>
                <td className="text-right py-4 px-4 text-foreground">
                  $299.00
                </td>
                <td className="text-right py-4 px-4 font-semibold text-foreground">
                  $299.00
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="flex justify-end mb-8">
          <div className="w-full md:w-80">
            <div className="flex justify-between py-2 px-4 border-b border-border">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="text-foreground font-medium">$1,298.00</span>
            </div>
            <div className="flex justify-between py-2 px-4 border-b border-border">
              <span className="text-muted-foreground">Tax (10%)</span>
              <span className="text-foreground font-medium">$129.80</span>
            </div>
            <div className="flex justify-between py-3 px-4 bg-primary rounded-lg">
              <span className="font-semibold text-primary-foreground">
                Total Due
              </span>
              <span className="text-lg font-bold text-primary-foreground">
                $1,427.80
              </span>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="mb-8 p-4 bg-secondary rounded-lg">
          <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">
            Notes
          </p>
          <p className="text-sm text-foreground">
            This is a recurring invoice that will be automatically generated and
            sent on the 19th of each month. Payment is due within 30 days of
            invoice date.
          </p>
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Thank you for your business. For questions, contact us at
            billing@company.com
          </p>
        </div>
      </div>
    </div>
  );
}
