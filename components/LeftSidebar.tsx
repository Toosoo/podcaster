"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";

const LeftSidebar = () => {
  const pathname = usePathname();

  return (
    <section className="left_sidebar">
      <nav className="flex flex-col gap-6">
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center "
        >
          <Image
            src="/icons/logo.svg"
            alt="logo"
            width={23}
            height={27}
          />
          <h1 className="text-24 font-extrabold capitalize text-white-1 max-lg:hidden">
            podcater
          </h1>
        </Link>

        <div className="">
          {sidebarLinks.map(
            ({ route, label, imgURL }) => {
              const isActive =
                pathname === route ||
                pathname.startsWith(`${route}/`);
              return (
                <Link
                  href={route}
                  key={label}
                  className={cn(
                    "flex gap-3 items-center justify-center lg:justify-start py-5",
                    {
                      "bg-nav-focus border-r-4 border-orange-1":
                        isActive,
                    }
                  )}
                >
                  <Image
                    src={imgURL}
                    alt={label}
                    width={24}
                    height={24}
                  />
                  <p>{label}</p>
                </Link>
              );
            }
          )}
        </div>
      </nav>
    </section>
  );
};

export default LeftSidebar;
