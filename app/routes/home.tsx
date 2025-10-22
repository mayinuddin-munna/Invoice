import type { Route } from "./+types/home";
import { Link } from "react-router";

import GeneralInvoice from "../../public/images/general-invoice.png";
import CarInvoice from "../../public/images/car-invoice.png";
import StandardInvoice from "../../public/images/standard-invoice.png";
import RecurringInvoice from "../../public/images/recurring-invoice.png";
import CreditInvoice from "../../public/images/credit-invoice.png";
import DebitInvoice from "../../public/images/debit-invoice.png";
import CommercialInvoice from "../../public/images/commercial-invoice.png";
import TimesheetInvoice from "../../public/images/timesheet-invoice.png";
import InterimInvoice from "../../public/images/interim-invoice.png";

import FinalInvoice from "../../public/images/car-invoice.png";
import RetainerInvoice from "../../public/images/car-invoice.png";
import ConsolidatedInvoice from "../../public/images/car-invoice.png";
import CollectiveInvoice from "../../public/images/car-invoice.png";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Invoice Generator" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

type DataInvoice = {
  id: number;
  url: string;
  image: string;
  category: string;
};

const invoiceData: DataInvoice[] = [
  {
    id: 1,
    url: "/general-invoice",
    image: GeneralInvoice,
    category: "General Invoice",
  },
  {
    id: 2,
    url: "/car-invoice",
    image: CarInvoice,
    category: "Car Invoice",
  },
  {
    id: 3,
    url: "/standard-invoice",
    image: StandardInvoice,
    category: "Standard Invoice",
  },
  {
    id: 4,
    url: "/recurring-invoice",
    image: RecurringInvoice,
    category: "Recurring Invoice",
  },
  {
    id: 5,
    url: "/credit-invoice",
    image: CreditInvoice,
    category: "Credit Invoice",
  },
  {
    id: 6,
    url: "/debit-invoice",
    image: DebitInvoice,
    category: "Debit Invoice",
  },
  {
    id: 7,
    url: "/commercial-invoice",
    image: CommercialInvoice,
    category: "Commercial Invoice",
  },
  {
    id: 8,
    url: "/timesheet-invoice",
    image: TimesheetInvoice,
    category: "Timesheet Invoice",
  },
  {
    id: 9,
    url: "/interim-invoice",
    image: InterimInvoice,
    category: "Interim Invoice",
  },
  {
    id: 10,
    url: "/final-invoice",
    image: FinalInvoice,
    category: "Final Invoice",
  },
  {
    id: 11,
    url: "/retainer-invoice",
    image: RetainerInvoice,
    category: "Retainer Invoice",
  },
  {
    id: 12,
    url: "/consolidated-invoice",
    image: ConsolidatedInvoice,
    category: "Consolidated Invoice",
  },
  {
    id: 13,
    url: "/collective-invoice",
    image: CollectiveInvoice,
    category: "Collective Invoice",
  },
];

export default function Home() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {invoiceData.map((data, index) => (
            <div key={data?.id} className="p-4 lg:w-1/3 md:w-1/2 w-full">
              <Link
                to={data?.url}
                className="block relative group rounded-md overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={data?.image}
                  alt="invoice"
                  className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-all duration-300 flex items-center justify-center">
                  <h2 className="tracking-widest text-xs title-font font-medium text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    {data?.category}
                  </h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
