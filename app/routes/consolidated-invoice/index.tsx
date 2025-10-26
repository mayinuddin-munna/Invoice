// import { format } from "date-fns";

// interface InvoiceItem {
//   description: string;
//   quantity: number;
//   rate: number;
//   amount: number;
// }

// interface InvoiceData {
//   invoiceNumber: string;
//   invoiceDate: Date;
//   dueDate: Date;
//   projectName: string;
//   clientName: string;
//   clientEmail: string;
//   clientAddress: string;
//   companyName: string;
//   companyEmail: string;
//   companyPhone: string;
//   companyAddress: string;
//   items: InvoiceItem[];
//   subtotal: number;
//   tax: number;
//   total: number;
//   notes?: string;
// }

// const invoiceData: InvoiceData = {
//   invoiceNumber: "INV-2025-001",
//   invoiceDate: new Date("2025-10-23"),
//   dueDate: new Date("2025-11-23"),
//   projectName: "Website Redesign & Development",
//   clientName: "Acme Corporation",
//   clientEmail: "billing@acmecorp.com",
//   clientAddress: "123 Business Ave, New York, NY 10001",
//   companyName: "Creative Studios Inc.",
//   companyEmail: "hello@creativestudios.com",
//   companyPhone: "+1 (555) 123-4567",
//   companyAddress: "456 Design Street, San Francisco, CA 94105",
//   items: [
//     {
//       description: "UI/UX Design - 40 hours",
//       quantity: 40,
//       rate: 150,
//       amount: 6000,
//     },
//     {
//       description: "Frontend Development - 60 hours",
//       quantity: 60,
//       rate: 175,
//       amount: 10500,
//     },
//     {
//       description: "Backend Integration - 30 hours",
//       quantity: 30,
//       rate: 175,
//       amount: 5250,
//     },
//     {
//       description: "Testing & QA - 20 hours",
//       quantity: 20,
//       rate: 125,
//       amount: 2500,
//     },
//     {
//       description: "Deployment & Setup",
//       quantity: 1,
//       rate: 1500,
//       amount: 1500,
//     },
//   ],
//   subtotal: 25750,
//   tax: 2575,
//   total: 28325,
//   notes:
//     "Thank you for your business! Payment is due within 30 days of invoice date. Please reference invoice number with payment.",
// };

// export default function ConsolidatedInvoice() {
//   const handlePrintInvoice = () => {
//     const invoice = document.getElementById("invoice");
//     const printWindow = window.open("", "_blank");
//     printWindow.document.write(`
//     <html>
//       <head>
//         <title>Invoice</title>
//         <style>
//           @media print {
//             * {
//               -webkit-print-color-adjust: exact !important;
//               print-color-adjust: exact !important;
//             }
//             body {
//               margin: 0;
//               padding: 0;
//             }
//           }
//         </style>
//       </head>
//       <body>${invoice.innerHTML}</body>
//     </html>
//   `);
//     printWindow.document.close();
//     printWindow.focus();
//     printWindow.print();
//     printWindow.close();
//   };

//   return (
//     <div className="max-w-4xl mx-auto">
//       <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//         {/* Header */}
//         <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-8 py-12 text-white">
//           <div className="flex justify-between items-start mb-8">
//             <div>
//               <h1 className="text-4xl font-bold mb-2">INVOICE</h1>
//               <p className="text-slate-300">Consolidated Project Invoice</p>
//             </div>
//             <div className="text-right">
//               <p className="text-sm text-slate-300">Invoice #</p>
//               <p className="text-2xl font-bold">{invoiceData.invoiceNumber}</p>
//             </div>
//           </div>

//           {/* Company Info */}
//           <div className="grid grid-cols-2 gap-8">
//             <div>
//               <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">
//                 From
//               </p>
//               <p className="font-semibold text-lg mb-1">
//                 {invoiceData.companyName}
//               </p>
//               <p className="text-sm text-slate-300">
//                 {invoiceData.companyAddress}
//               </p>
//               <p className="text-sm text-slate-300">
//                 {invoiceData.companyEmail}
//               </p>
//               <p className="text-sm text-slate-300">
//                 {invoiceData.companyPhone}
//               </p>
//             </div>
//             <div>
//               <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">
//                 Bill To
//               </p>
//               <p className="font-semibold text-lg mb-1">
//                 {invoiceData.clientName}
//               </p>
//               <p className="text-sm text-slate-300">
//                 {invoiceData.clientAddress}
//               </p>
//               <p className="text-sm text-slate-300">
//                 {invoiceData.clientEmail}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Invoice Details */}
//         <div className="px-8 py-6 bg-slate-50 border-b border-slate-200">
//           <div className="grid grid-cols-3 gap-6">
//             <div>
//               <p className="text-xs text-slate-600 uppercase tracking-wide mb-1">
//                 Invoice Date
//               </p>
//               <p className="text-lg font-semibold text-slate-900">
//                 {format(invoiceData.invoiceDate, "MMM dd, yyyy")}
//               </p>
//             </div>
//             <div>
//               <p className="text-xs text-slate-600 uppercase tracking-wide mb-1">
//                 Due Date
//               </p>
//               <p className="text-lg font-semibold text-slate-900">
//                 {format(invoiceData.dueDate, "MMM dd, yyyy")}
//               </p>
//             </div>
//             <div>
//               <p className="text-xs text-slate-600 uppercase tracking-wide mb-1">
//                 Project
//               </p>
//               <p className="text-lg font-semibold text-slate-900">
//                 {invoiceData.projectName}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Items Table */}
//         <div className="px-8 py-8">
//           <table className="w-full">
//             <thead>
//               <tr className="border-b-2 border-slate-900">
//                 <th className="text-left py-3 px-4 font-semibold text-slate-900">
//                   Description
//                 </th>
//                 <th className="text-right py-3 px-4 font-semibold text-slate-900">
//                   Qty
//                 </th>
//                 <th className="text-right py-3 px-4 font-semibold text-slate-900">
//                   Rate
//                 </th>
//                 <th className="text-right py-3 px-4 font-semibold text-slate-900">
//                   Amount
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {invoiceData.items.map((item, index) => (
//                 <tr
//                   key={index}
//                   className="border-b border-slate-200 hover:bg-slate-50 transition-colors"
//                 >
//                   <td className="py-4 px-4 text-slate-700">
//                     {item.description}
//                   </td>
//                   <td className="text-right py-4 px-4 text-slate-700">
//                     {item.quantity}
//                   </td>
//                   <td className="text-right py-4 px-4 text-slate-700">
//                     ${item.rate.toFixed(2)}
//                   </td>
//                   <td className="text-right py-4 px-4 font-semibold text-slate-900">
//                     ${item.amount.toFixed(2)}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Summary Section */}
//         <div className="px-8 py-8 bg-slate-50 border-t border-slate-200">
//           <div className="flex justify-end mb-6">
//             <div className="w-80">
//               {/* Subtotal */}
//               <div className="flex justify-between items-center py-3 border-b border-slate-200">
//                 <span className="text-slate-700">Subtotal</span>
//                 <span className="font-semibold text-slate-900">
//                   ${invoiceData.subtotal.toFixed(2)}
//                 </span>
//               </div>

//               {/* Tax */}
//               <div className="flex justify-between items-center py-3 border-b border-slate-200">
//                 <span className="text-slate-700">Tax (10%)</span>
//                 <span className="font-semibold text-slate-900">
//                   ${invoiceData.tax.toFixed(2)}
//                 </span>
//               </div>

//               {/* Total */}
//               <div className="flex justify-between items-center py-4 bg-slate-900 text-white px-4 rounded-lg mt-4">
//                 <span className="font-bold text-lg">Total Due</span>
//                 <span className="font-bold text-2xl">
//                   ${invoiceData.total.toFixed(2)}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Notes Section */}
//         {invoiceData.notes && (
//           <div className="px-8 py-6 border-t border-slate-200">
//             <p className="text-xs text-slate-600 uppercase tracking-wide mb-2 font-semibold">
//               Notes
//             </p>
//             <p className="text-slate-700 leading-relaxed">
//               {invoiceData.notes}
//             </p>
//           </div>
//         )}

//         {/* Footer */}
//         <div className="px-8 py-6 bg-slate-900 text-white text-center text-sm">
//           <p>Thank you for your business!</p>
//           <p className="text-slate-400 mt-1">
//             © 2025 {invoiceData.companyName}. All rights reserved.
//           </p>
//         </div>
//       </div>

//       {/* Print Button */}
//       <div className="mt-6 flex justify-center gap-4">
//         <button
//           onClick={handlePrintInvoice}
//           className="px-6 py-2 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
//         >
//           Print Invoice
//         </button>
//         <button className="px-6 py-2 bg-white text-slate-900 border-2 border-slate-900 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
//           Download PDF
//         </button>
//       </div>
//     </div>
//   );
// }

import React from 'react'

export default function ConsolidatedInvoice() {
  return (
    <div>Consolidated Invoice</div>
  )
}

