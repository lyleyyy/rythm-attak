import MainContentFooterCategory from "./MainContentFooterCategory/MainContentFooterCategory";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";

function MainContentFooter() {
  return (
    <div className="mx-4 mb-10 p-4">
      <div className="flex justify-between border-b border-zinc-600 pb-8">
        <div className="flex w-3/4 justify-between">
          <MainContentFooterCategory
            label="Company"
            list={["About", "Jobs", "For the Record"]}
          />
          <MainContentFooterCategory
            label="Communities"
            list={[
              "For Artists",
              "Developers",
              "Advertising",
              "Investors",
              "Vendors",
            ]}
          />
          <MainContentFooterCategory
            label="Useful links"
            list={["Support", "Free Mobile App"]}
          />
          <MainContentFooterCategory
            label="RA Plans"
            list={["Subscription", "Purchasing", "Payments"]}
          />
        </div>
        <div className="flex gap-4 self-start">
          <Link
            href="#"
            className="rounded-full text-3xl hover:bg-white hover:text-blue-600"
          >
            <FaFacebook />
          </Link>
          <Link
            href="#"
            className="rounded-sm text-3xl hover:bg-white hover:text-purple-500"
          >
            <FaInstagramSquare />
          </Link>
          <Link
            href="#"
            className="rounded-sm text-3xl hover:bg-white hover:text-black"
          >
            <FaSquareXTwitter />
          </Link>
        </div>
      </div>
      <div className="pt-8 text-zinc-400">
        ©2024 RythmAttak Inc. All trademarks referenced herein are the
        properties of their respective owners.
      </div>
    </div>
  );
}

export default MainContentFooter;
