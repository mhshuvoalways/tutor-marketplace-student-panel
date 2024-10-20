import Button from "@/app/components/common/button/Button1";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function DropDown({ menuButton, menus, session }) {
  const pathname = usePathname();

  return (
    <Menu>
      <MenuButton>{menuButton}</MenuButton>
      <MenuItems
        transition
        anchor="bottom"
        className="w-full origin-top-right rounded bg-white shadow transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 mt-7"
      >
        {menus.map((menu, index) => {
          const isActive =
            menu.url === "/"
              ? pathname === menu.url
              : pathname.includes(menu.url);
          return (
            <div
              key={index}
              className="py-3 px-5 border-y border-gray-100 transition font-outfit"
            >
              <MenuItem>
                <Link
                  href={menu.url}
                  className={`hover:text-primary transition ${
                    isActive ? "text-primary" : ""
                  }`}
                >
                  {menu.name}
                </Link>
              </MenuItem>
            </div>
          );
        })}
        <div className="m-5">
          {session.status === "authenticated" ? (
            <Link href={"/my-account"}>
              <Button title="My Account" />
            </Link>
          ) : (
            <Link href={"/login"}>
              <Button title="Login" />
            </Link>
          )}
        </div>
      </MenuItems>
    </Menu>
  );
}

export default DropDown;
