import { useState } from "react";
import { Printer, Download } from "lucide-react";

interface LineItem {
  id: string;
  description: string;
  quantity: number;
  price: number;
}

export function SecondInvoice() {
  const [reservationNo, setReservationNo] = useState("CAT37562");
  const [issueDate, setIssueDate] = useState("25 Feb 2025");
  const [rentalDays, setRentalDays] = useState(15);

  // Pick-up details
  const [pickupDate, setPickupDate] = useState("20 Feb 2022");
  const [pickupLocation, setPickupLocation] = useState(
    "33 Bluebird Road, North York, Ontario, Australia"
  );

  // Drop-off details
  const [dropoffDate, setDropoffDate] = useState(
    "21 Boulevard Cremazie, North York, Ontario, Australia"
  );
  const [dropoffLocation, setDropoffLocation] = useState(
    "377 Avenue Laval, Ontario, Australia"
  );

  // Driver information
  const [driverName, setDriverName] = useState("Jennifer Richards");
  const [passportNo, setPassportNo] = useState("M325462");
  const [licenseNo, setLicenseNo] = useState("T-234-25-89-12");
  const [address, setAddress] = useState(
    "4517 Ellington Road East, Oshawa, Ontario, Australia"
  );

  // Car information
  const [carModel, setCarModel] = useState("Volkswagen Passat");
  const [carType, setCarType] = useState("Automatic");
  const [seats, setSeats] = useState("4 Seats");
  const [licensePlate, setLicensePlate] = useState("L-2345");
  const [expireDate, setExpireDate] = useState("27 Feb 2025");
  const [drivingLicense, setDrivingLicense] = useState("L-2345");
  const [drivingExpire, setDrivingExpire] = useState("27 Feb 2025");
  const [contact, setContact] = useState("invoice@email.com");

  // Line items
  const [lineItems, setLineItems] = useState<LineItem[]>([
    {
      id: "1",
      description: "Lamborghini Aventador - 15 Days - Driver Services Included",
      quantity: 1,
      price: 3000,
    },
    { id: "2", description: "Insurance", quantity: 1, price: 200 },
  ]);

  const [taxRate, setTaxRate] = useState(3.3);

  // Calculate totals
  const subtotal = lineItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  const tax = (subtotal * taxRate) / 100;
  const total = subtotal + tax;

  const addLineItem = () => {
    setLineItems([
      ...lineItems,
      {
        id: Date.now().toString(),
        description: "",
        quantity: 1,
        price: 0,
      },
    ]);
  };

  const updateLineItem = (
    id: string,
    field: keyof LineItem,
    value: string | number
  ) => {
    setLineItems(
      lineItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const removeLineItem = (id: string) => {
    if (lineItems.length > 1) {
      setLineItems(lineItems.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="p-8 shadow-lg bg-white rounded-lg border">
        {/* Header */}
        <div className="flex justify-between items-start mb-8 pb-6 border-b">
          <div>
            <label className="text-xs text-gray-500 block">
              Reservation No.
            </label>
            <input
              value={reservationNo}
              onChange={(e) => setReservationNo(e.target.value)}
              className="font-mono text-sm mt-1 max-w-[200px] px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <div className="mt-4">
              <label className="text-xs text-gray-500 block">Issue Date</label>
              <input
                value={issueDate}
                onChange={(e) => setIssueDate(e.target.value)}
                className="text-sm mt-1 max-w-[200px] px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          <div className="text-right">
            <div className="text-3xl font-bold text-teal-500 mb-2">invoice</div>
            <div className="text-sm text-gray-500 mb-4">invoice RENT CAR</div>
            <input
              value={dropoffDate}
              onChange={(e) => setDropoffDate(e.target.value)}
              className="text-sm text-right mb-2 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 w-full"
            />
            <input
              value={dropoffLocation}
              onChange={(e) => setDropoffLocation(e.target.value)}
              className="text-sm text-right px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 w-full"
            />
          </div>
        </div>

        {/* Rental Days Badge */}
        <div className="flex items-center gap-4 mb-8">
          <div>
            <label className="text-xs text-gray-500 block">No. Of Days</label>
            <div className="text-sm mt-1">{pickupDate}</div>
          </div>
          <div className="bg-teal-50 text-teal-600 px-6 py-3 rounded-lg">
            <input
              type="number"
              value={rentalDays}
              onChange={(e) => setRentalDays(Number(e.target.value))}
              className="text-2xl font-bold bg-transparent border-none p-0 h-auto text-center w-20 focus:outline-none"
            />
            <div className="text-xs font-medium mx-5">Days</div>
          </div>
        </div>

        {/* Pick-up and Drop-off */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="font-semibold mb-3 block">Drop-off</label>
            <div className="space-y-2">
              <input
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="text-sm px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 w-full"
              />
            </div>
          </div>
          <div>
            <label className="font-semibold mb-3 block">Drop-off</label>
            <div className="space-y-2">
              <input
                value={dropoffDate}
                onChange={(e) => setDropoffDate(e.target.value)}
                className="text-sm px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 w-full"
              />
            </div>
          </div>
        </div>

        {/* Driver and Car Information */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Driver Information */}
          <div className="space-y-4">
            <label className="font-semibold block">Driver's Name</label>
            <input
              value={driverName}
              onChange={(e) => setDriverName(e.target.value)}
              className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 w-full"
            />

            <div>
              <label className="text-sm text-gray-500 block">
                Passport No.
              </label>
              <input
                value={passportNo}
                onChange={(e) => setPassportNo(e.target.value)}
                className="mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 w-full"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500 block">License No.</label>
              <input
                value={licenseNo}
                onChange={(e) => setLicenseNo(e.target.value)}
                className="mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 w-full"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500 block">Address</label>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 w-full"
              />
            </div>
          </div>

          {/* Car Information */}
          <div className="space-y-4">
            <label className="font-semibold block">Car Information</label>

            <div>
              <label className="text-sm text-gray-500 block">Car Model</label>
              <input
                value={carModel}
                onChange={(e) => setCarModel(e.target.value)}
                className="mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 w-full"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-sm text-gray-500 block">Type</label>
                <input
                  value={carType}
                  onChange={(e) => setCarType(e.target.value)}
                  className="mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 w-full"
                />
              </div>
              <div>
                <label className="text-sm text-gray-500 block">
                  License Plate
                </label>
                <input
                  value={licensePlate}
                  onChange={(e) => setLicensePlate(e.target.value)}
                  className="mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 w-full"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-500 block">Expire Date</label>
              <input
                value={expireDate}
                onChange={(e) => setExpireDate(e.target.value)}
                className="mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 w-full"
              />
            </div>
          </div>
        </div>

        {/* Driver Information Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <label className="font-semibold block">Driver Information</label>

            <div>
              <label className="text-sm text-gray-500 block">
                Driving License
              </label>
              <input
                value={drivingLicense}
                onChange={(e) => setDrivingLicense(e.target.value)}
                className="mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 w-full"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500 block">Expire Date</label>
              <input
                value={drivingExpire}
                onChange={(e) => setDrivingExpire(e.target.value)}
                className="mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 w-full"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500 block">Contact</label>
              <input
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 w-full"
              />
            </div>
          </div>
        </div>

        {/* Item Details Table */}
        <div className="mb-8">
          <label className="font-semibold mb-4 block">Item Details</label>
          <div className="border rounded-lg overflow-hidden">
            <div className="grid grid-cols-12 gap-4 bg-gray-100 p-3 text-sm font-medium">
              <div className="col-span-6">Description</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-right">Price</div>
              <div className="col-span-2 text-right">Total</div>
            </div>

            {lineItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-12 gap-4 p-3 border-t items-center"
              >
                <div className="col-span-6">
                  <input
                    value={item.description}
                    onChange={(e) =>
                      updateLineItem(item.id, "description", e.target.value)
                    }
                    className="text-sm px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 w-full"
                    placeholder="Item description"
                  />
                </div>
                <div className="col-span-2">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      updateLineItem(
                        item.id,
                        "quantity",
                        Number(e.target.value)
                      )
                    }
                    className="text-sm text-center px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 w-full"
                    min="1"
                  />
                </div>
                <div className="col-span-2">
                  <input
                    type="number"
                    value={item.price}
                    onChange={(e) =>
                      updateLineItem(item.id, "price", Number(e.target.value))
                    }
                    className="text-sm text-right px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 w-full"
                    min="0"
                    step="0.01"
                  />
                </div>
                <div className="col-span-1 text-right text-sm font-medium">
                  ${(item.quantity * item.price).toFixed(2)}
                </div>
                <div className="col-span-1 text-right">
                  <button
                    onClick={() => removeLineItem(item.id)}
                    className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50 rounded transition-colors"
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={addLineItem}
            className="mt-3 px-4 py-2 border rounded-md text-sm hover:bg-gray-50 transition-colors"
          >
            + Add Line Item
          </button>
        </div>

        {/* Totals */}
        <div className="flex justify-end mb-8">
          <div className="w-full max-w-sm space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Subtotal:</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Tax Rate (%):</span>
                <input
                  type="number"
                  value={taxRate}
                  onChange={(e) => setTaxRate(Number(e.target.value))}
                  className="w-20 h-7 text-sm px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  min="0"
                  step="0.1"
                />
              </div>
              <span className="font-medium">${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold pt-3 border-t">
              <span>Total Amount:</span>
              <span className="text-teal-500">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6 text-sm text-gray-500">
          <p>
            Thank you very much for additional notes for this invoice to get a
            better understanding of this invoice.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 justify-end">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 border rounded-md hover:bg-gray-50 transition-colors flex items-center gap-2"
          >
            <Printer className="w-4 h-4" />
            Print
          </button>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
