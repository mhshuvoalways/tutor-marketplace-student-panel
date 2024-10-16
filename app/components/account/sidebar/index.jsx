"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  {
    name: "My Account",
    url: "/my-account",
  },
  {
    name: "All booking",
    url: "/all-booking",
  },
];

const Account = () => {
  const pathname = usePathname();

  return (
    <div className="bg-white rounded shadow-sm w-full lg:w-2/12 py-5 lg:py-10 px-0 sm:px-5">
      <div className="space-y-0 lg:space-y-5 flex flex-wrap items-center lg:block">
        {menus.map((menu) => {
          const isActive =
            menu.url === "/"
              ? pathname === menu.url
              : pathname.includes(menu.url);
          return (
            <div key={menu.name}>
              <Link href={menu.url}>
                <p
                  className={`cursor-pointer hover:bg-slate-100 py-1 px-5 rounded transition text-lg text-nowrap ${
                    isActive ? "text-primary" : ""
                  }`}
                >
                  {menu.name}
                </p>
              </Link>
            </div>
          );
        })}
        <div>
          <Link href={"/login"}>
            <p className="cursor-pointer hover:bg-slate-100 py-1 px-5 rounded transition text-lg text-nowrap">
              Logout
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Account;
