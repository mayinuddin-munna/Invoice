// import { useState } from "react";

// interface InvoiceItem {
//   description: string;
//   quantity: number;
//   rate: number;
// }

// export default function FinalInvoice() {
//   const [items] = useState<InvoiceItem[]>([
//     { description: "Web Development Services", quantity: 40, rate: 150 },
//     { description: "UI/UX Design", quantity: 20, rate: 125 },
//     { description: "Project Management", quantity: 10, rate: 100 },
//   ]);

//   const subtotal = items.reduce(
//     (sum, item) => sum + item.quantity * item.rate,
//     0
//   );
//   const tax = subtotal * 0.1;
//   const total = subtotal + tax;

//   const invoiceDate = new Date();
//   const dueDate = new Date(invoiceDate.getTime() + 30 * 24 * 60 * 60 * 1000);

//   return (
//     <div className="max-w-4xl mx-auto">
//       <div className="bg-card border border-border rounded-lg shadow-lg p-8 md:p-12">
//         {/* Header */}
//         <div className="flex justify-between items-start mb-12 pb-8 border-b border-border">
//           <div>
//             <h1 className="text-3xl font-bold text-foreground mb-2">INVOICE</h1>
//             <p className="text-muted-foreground text-sm">Final Invoice</p>
//           </div>
//           <div className="text-right">
//             <p className="text-2xl font-bold text-primary">Your Company</p>
//             <p className="text-muted-foreground text-sm mt-1">
//               123 Business St
//             </p>
//             <p className="text-muted-foreground text-sm">City, State 12345</p>
//           </div>
//         </div>

//         {/* Invoice Details */}
//         <div className="grid grid-cols-2 gap-8 mb-12">
//           <div>
//             <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
//               Bill To
//             </h3>
//             <p className="font-semibold text-foreground mb-1">Client Name</p>
//             <p className="text-muted-foreground text-sm">456 Client Avenue</p>
//             <p className="text-muted-foreground text-sm">
//               Client City, State 67890
//             </p>
//             <p className="text-muted-foreground text-sm">client@example.com</p>
//           </div>
//           <div className="text-right">
//             <div className="mb-4">
//               <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
//                 Invoice Number
//               </p>
//               <p className="text-lg font-semibold text-foreground">
//                 INV-2025-001
//               </p>
//             </div>
//             <div className="mb-4">
//               <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
//                 Invoice Date
//               </p>
//               <p className="text-foreground">
//                 {invoiceDate.toLocaleDateString()}
//               </p>
//             </div>
//             <div>
//               <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
//                 Due Date
//               </p>
//               <p className="text-foreground font-semibold">
//                 {dueDate.toLocaleDateString()}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Items Table */}
//         <div className="mb-8 overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="border-b-2 border-border">
//                 <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
//                   Description
//                 </th>
//                 <th className="text-right py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
//                   Quantity
//                 </th>
//                 <th className="text-right py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
//                   Rate
//                 </th>
//                 <th className="text-right py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
//                   Amount
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {items.map((item, index) => (
//                 <tr
//                   key={index}
//                   className="border-b border-border hover:bg-muted/50 transition-colors"
//                 >
//                   <td className="py-4 px-4 text-foreground">
//                     {item.description}
//                   </td>
//                   <td className="text-right py-4 px-4 text-foreground">
//                     {item.quantity}
//                   </td>
//                   <td className="text-right py-4 px-4 text-foreground">
//                     ${item.rate.toFixed(2)}
//                   </td>
//                   <td className="text-right py-4 px-4 font-semibold text-foreground">
//                     ${(item.quantity * item.rate).toFixed(2)}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Totals Section */}
//         <div className="flex justify-end mb-12">
//           <div className="w-full md:w-80">
//             <div className="flex justify-between py-3 px-4 bg-muted/50 rounded-t-lg">
//               <span className="text-foreground font-medium">Subtotal</span>
//               <span className="text-foreground font-medium">
//                 ${subtotal.toFixed(2)}
//               </span>
//             </div>
//             <div className="flex justify-between py-3 px-4 border-b border-border">
//               <span className="text-foreground font-medium">Tax (10%)</span>
//               <span className="text-foreground font-medium">
//                 ${tax.toFixed(2)}
//               </span>
//             </div>
//             <div className="flex justify-between py-4 px-4 bg-primary rounded-b-lg">
//               <span className="text-primary-foreground font-bold text-lg">
//                 Total Due
//               </span>
//               <span className="text-primary-foreground font-bold text-lg">
//                 ${total.toFixed(2)}
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Notes Section */}
//         <div className="border-t border-border pt-8">
//           <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
//             Payment Terms
//           </h3>
//           <p className="text-foreground text-sm leading-relaxed mb-6">
//             Payment is due within 30 days of invoice date. Please make checks
//             payable to Your Company. For wire transfers, please contact us for
//             banking details. Thank you for your business!
//           </p>

//           <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
//             Contact Information
//           </h3>
//           <p className="text-foreground text-sm">
//             Email: billing@yourcompany.com | Phone: (555) 123-4567
//           </p>
//         </div>

//         {/* Footer */}
//         <div className="mt-12 pt-8 border-t border-border text-center">
//           <p className="text-xs text-muted-foreground">
//             This is a final invoice. Please retain for your records.
//           </p>
//         </div>
//       </div>

//       {/* Print Button */}
//       <div className="mt-6 flex justify-center gap-4">
//         <button
//           onClick={() => window.print()}
//           className="px-6 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
//         >
//           Print Invoice
//         </button>
//         <button
//           onClick={() => window.print()}
//           className="px-6 py-2 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
//         >
//           Download PDF
//         </button>
//       </div>
//     </div>
//   );
// }

import React from 'react'

export default function FinalInvoice() {
  return (
    <div>Final Invoice</div>
  )
}

