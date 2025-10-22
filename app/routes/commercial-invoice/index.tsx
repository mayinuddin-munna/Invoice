import React, { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

interface InvoiceItem {
  description: string;
  price: number;
  weight: number;
  qty: number;
  total: number;
}

interface InvoiceData {
  vendor: {
    name: string;
    consignee: string;
    invoiceNumber: string;
    letterOfCredit: string;
  };
  shipment: {
    date: string;
    country: string;
    importer: string;
    currency: string;
  };
  transportation: {
    to: string;
    from: string;
    packages: string;
    netWeight: string;
    grossWeight: string;
    totalInvoice: string;
  };
  items: InvoiceItem[];
  summary: {
    subtotal: number;
    taxRate: number;
    taxDue: number;
    total: number;
  };
}

const CommercialInvoice: React.FC = () => {
  const invoiceRef = useRef<HTMLDivElement>(null);

  const invoiceData: InvoiceData = {
    vendor: {
      name: "Vendor/Exporter:",
      consignee: "Consignee",
      invoiceNumber: "Invoice Number",
      letterOfCredit: "Letter of Credit Number:",
    },
    shipment: {
      date: "Date of Shipment:",
      country: "Country of Origin:",
      importer: "Importer:",
      currency: "Currency:",
    },
    transportation: {
      to: "To:",
      from: "From:",
      packages: "Number of Packages:",
      netWeight: "Net Weight:",
      grossWeight: "Gross Weight:",
      totalInvoice: "Total Invoice:",
    },
    items: [
      { description: "Car Tyres", price: 25, weight: 25, qty: 1, total: 25.0 },
      { description: "Engine Oil", price: 50, weight: 50, qty: 1, total: 50.0 },
      { description: "Vipers", price: 35, weight: 35, qty: 1, total: 35.0 },
    ],
    summary: {
      subtotal: 110.0,
      taxRate: 5,
      taxDue: 2,
      total: 112.0,
    },
  };

  const handlePrint = () => window.print();

  const handleDownload = async () => {
    if (!invoiceRef.current) return;

    const input = invoiceRef.current;
    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pdfHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;
    }

    pdf.save("Commercial_Invoice.pdf");
  };

  return (
    <div className="relative">
      <div className="max-w-4xl mx-auto bg-white shadow-lg" ref={invoiceRef}>
        {/* Header */}
        <div
          className="text-white py-6 px-8"
          style={{ backgroundColor: "#1f2937", color: "#fff" }}
        >
          <h1 className="text-3xl font-bold text-center tracking-wide">
            COMMERCIAL INVOICE
          </h1>
        </div>

        <div className="h-1 bg-blue-600"></div>

        {/* Invoice Content */}
        <div className="p-8">
          {/* Vendor & Shipment */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="space-y-2 text-sm">
              <p className="font-semibold text-gray-700">
                {invoiceData.vendor.name}
              </p>
              <p className="text-gray-600">{invoiceData.vendor.consignee}</p>
              <p className="text-gray-600">
                {invoiceData.vendor.invoiceNumber}
              </p>
              <p className="text-gray-600">
                {invoiceData.vendor.letterOfCredit}
              </p>
            </div>
            <div className="space-y-2 text-sm">
              <p className="font-semibold text-gray-700">
                {invoiceData.shipment.date}
              </p>
              <p className="text-gray-600">{invoiceData.shipment.country}</p>
              <p className="text-gray-600">{invoiceData.shipment.importer}</p>
              <p className="text-gray-600">{invoiceData.shipment.currency}</p>
            </div>
          </div>

          <div className="border-b-2 border-gray-300 mb-8"></div>

          {/* Transportation */}
          <div className="grid grid-cols-3 gap-8 mb-8 text-sm">
            <div className="space-y-2">
              <p className="font-semibold text-gray-700">
                {invoiceData.transportation.to}
              </p>
              <p className="text-gray-600">{invoiceData.transportation.from}</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-gray-700">
                {invoiceData.transportation.packages}
              </p>
              <p className="text-gray-600">
                {invoiceData.transportation.netWeight}
              </p>
              <p className="text-gray-600">
                {invoiceData.transportation.grossWeight}
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-gray-700">
                {invoiceData.transportation.totalInvoice}
              </p>
            </div>
          </div>

          <div className="border-b-2 border-gray-300 mb-8"></div>

          {/* Items Table */}
          <div className="mb-8">
            <div className="grid grid-cols-5 gap-4 bg-gray-200 px-4 py-3 font-semibold text-gray-800 text-sm mb-4">
              <div>Description</div>
              <div className="text-right">Price</div>
              <div className="text-right">Weight</div>
              <div className="text-right">Qty</div>
              <div className="text-right">Total</div>
            </div>

            {invoiceData.items.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-5 gap-4 px-4 py-3 border-b border-gray-300 text-sm"
              >
                <div className="text-gray-700">{item.description}</div>
                <div className="text-right text-gray-700">${item.price}</div>
                <div className="text-right text-gray-700">${item.weight}</div>
                <div className="text-right text-gray-700">{item.qty}</div>
                <div className="text-right text-gray-700">
                  ${item.total.toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="text-sm">
              <p className="font-semibold text-gray-700 mb-2">
                Thank you for your business
              </p>
              <p className="font-semibold text-gray-700 mb-1">Payment Info:</p>
              <p className="text-gray-600">Enter Payment terms here</p>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${invoiceData.summary.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax Rate</span>
                <span>{invoiceData.summary.taxRate}%</span>
              </div>
              <div className="flex justify-between">
                <span>Tax Due</span>
                <span>{invoiceData.summary.taxDue}%</span>
              </div>
              <div className="border-t-2 border-gray-800 pt-2 flex justify-between font-bold">
                <span>Total</span>
                <span>${invoiceData.summary.total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="border-b-2 border-gray-300 my-12"></div>

          {/* Signature */}
          <div className="grid grid-cols-3 gap-8 text-center text-sm">
            {["Signature", "Name", "Date"].map((label) => (
              <div key={label}>
                <div className="border-t-2 border-gray-800 pt-4 font-semibold text-gray-700">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 h-8"></div>
      </div>

      {/* Floating Buttons */}
      <div className="absolute top-4 right-4 flex gap-2">
        <button
          onClick={handleDownload}
          className="py-1 px-4 bg-green-600 text-white text-sm rounded hover:bg-green-700"
        >
          Download PDF
        </button>
        <button
          onClick={handlePrint}
          className="py-1 px-4 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
        >
          Print Invoice
        </button>
      </div>
    </div>
  );
};

export default CommercialInvoice;
