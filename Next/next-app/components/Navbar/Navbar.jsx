import React from "react";
import Link from "next/link";

const Navbar = () => {
  const links = [
    { href: "/client", label: "Client" },
    { href: "/drinks", label: "Drinks" },
    { href: "/prisma", label: "Prisma" },
    { href: "/tasks", label: "Tasks" },
  ];
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <h1 className='btn btn-ghost text-xl'>
          <Link href='/'>Next JS</Link>
        </h1>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          {/* <details className='m-4'>
              <summary>Options</summary>
              <ul className='p-2 bg-base-100 rounded-t-none'> */}
          {links.map((link) => {
            return (
              <>
                <li>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              </>
            );
          })}
          {/* </ul>
            </details> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
