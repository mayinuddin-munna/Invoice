import { useState } from "react";

interface TimeEntry {
  id: string;
  date: string;
  description: string;
  hours: number;
}

export default function TimesheetInvoice() {
  const [entries, setEntries] = useState<TimeEntry[]>([
    { id: "1", date: "2025-10-15", description: "Web Development", hours: 8 },
    { id: "2", date: "2025-10-16", description: "UI Design", hours: 6 },
    { id: "3", date: "2025-10-17", description: "Testing & QA", hours: 4 },
  ]);

  const [hourlyRate, setHourlyRate] = useState(75);
  const [newEntry, setNewEntry] = useState({
    date: "",
    description: "",
    hours: 0,
  });

  const totalHours = entries.reduce((sum, entry) => sum + entry.hours, 0);
  const subtotal = totalHours * hourlyRate;
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const addEntry = () => {
    if (newEntry.date && newEntry.description && newEntry.hours > 0) {
      setEntries([
        ...entries,
        {
          id: Date.now().toString(),
          date: newEntry.date,
          description: newEntry.description,
          hours: newEntry.hours,
        },
      ]);
      setNewEntry({ date: "", description: "", hours: 0 });
    }
  };

  const removeEntry = (id: string) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">
                INVOICE
              </h1>
              <p className="text-slate-600">Timesheet & Service Invoice</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-600">Invoice #</p>
              <p className="text-2xl font-bold text-slate-900">INV-2025-001</p>
            </div>
          </div>

          {/* Service Provider Info */}
          <div className="grid grid-cols-2 gap-8 mb-8 pb-8 border-b border-slate-200">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                From
              </p>
              <p className="text-lg font-semibold text-slate-900">
                Service Provider
              </p>
              <p className="text-slate-600">123 Business Street</p>
              <p className="text-slate-600">New York, NY 10001</p>
              <p className="text-slate-600">contact@provider.com</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                Bill To
              </p>
              <p className="text-lg font-semibold text-slate-900">
                Client Company
              </p>
              <p className="text-slate-600">456 Client Avenue</p>
              <p className="text-slate-600">Los Angeles, CA 90001</p>
              <p className="text-slate-600">billing@client.com</p>
            </div>
          </div>

          {/* Invoice Details */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                Invoice Date
              </p>
              <p className="text-lg font-semibold text-slate-900">
                Oct 17, 2025
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                Due Date
              </p>
              <p className="text-lg font-semibold text-slate-900">
                Nov 17, 2025
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                Hourly Rate
              </p>
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold text-slate-900">$</span>
                <input
                  type="number"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-20 px-2 py-1 border border-slate-300 rounded text-lg font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-slate-600">/hr</span>
              </div>
            </div>
          </div>
        </div>

        {/* Time Entries Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Description
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold">
                    Hours
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold">
                    Amount
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {entries.map((entry) => (
                  <tr
                    key={entry.id}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-slate-900 font-medium">
                      {entry.date}
                    </td>
                    <td className="px-6 py-4 text-slate-700">
                      {entry.description}
                    </td>
                    <td className="px-6 py-4 text-right text-slate-900 font-medium">
                      {entry.hours}h
                    </td>
                    <td className="px-6 py-4 text-right text-slate-900 font-semibold">
                      ${(entry.hours * hourlyRate).toFixed(2)}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => removeEntry(entry.id)}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors font-bold"
                      >
                        ×
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add New Entry */}
          <div className="bg-slate-50 p-6 border-t border-slate-200">
            <p className="text-sm font-semibold text-slate-700 mb-4">
              Add New Time Entry
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input
                type="date"
                value={newEntry.date}
                onChange={(e) =>
                  setNewEntry({ ...newEntry, date: e.target.value })
                }
                className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
              />
              <input
                type="text"
                placeholder="Description"
                value={newEntry.description}
                onChange={(e) =>
                  setNewEntry({ ...newEntry, description: e.target.value })
                }
                className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 placeholder-slate-500"
              />
              <input
                type="number"
                placeholder="Hours"
                value={newEntry.hours || ""}
                onChange={(e) =>
                  setNewEntry({ ...newEntry, hours: Number(e.target.value) })
                }
                className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 placeholder-slate-500"
              />
              <button
                onClick={addEntry}
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Add Entry
              </button>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-end mb-6">
            <div className="w-full md:w-96">
              {/* Subtotal */}
              <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-200">
                <span className="text-slate-700 font-medium">Subtotal</span>
                <span className="text-slate-900 font-semibold">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              {/* Tax */}
              <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-200">
                <span className="text-slate-700 font-medium">Tax (10%)</span>
                <span className="text-slate-900 font-semibold">
                  ${tax.toFixed(2)}
                </span>
              </div>

              {/* Total Hours */}
              <div className="flex justify-between items-center mb-6 pb-6 border-b border-slate-200">
                <span className="text-slate-700 font-medium">Total Hours</span>
                <span className="text-slate-900 font-semibold">
                  {totalHours}h
                </span>
              </div>

              {/* Total Amount */}
              <div className="flex justify-between items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg">
                <span className="text-lg font-bold">Total Due</span>
                <span className="text-3xl font-bold">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Footer Notes */}
          <div className="mt-8 pt-8 border-t border-slate-200">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
              Notes
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Thank you for your business. Payment is due within 30 days of
              invoice date. Please make checks payable to Service Provider. For
              questions, contact us at contact@provider.com.
            </p>
          </div>

          {/* Print Button */}
          <div className="mt-8 flex gap-4">
            <button
              onClick={() => window.print()}
              className="flex-1 px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
            >
              Print Invoice
            </button>
            <button className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
