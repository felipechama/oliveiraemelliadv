"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Logo from "./logo";
import Dropdown from "@/components/utils/dropdown";
import MobileMenu from "./mobile-menu";

export default function Contato() {
  return (
    <nav className="hidden md:flex md:grow">
      {/* Desktop sign in links */}
      <ul className="flex grow justify-end flex-wrap items-center">
        <li>
          <Link
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5511940205632"
            className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
          >
            (11) 94020-5632
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5511998151675"
            className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
          >
            (11) 99815-1675
          </Link>
        </li>

        <li>
          <Link
            target="_blank"
            href="mailto:contato@oliveiraemelliadv.com.br"
            className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
          >
            contato@oliveiraemelliadv.com.br
          </Link>
        </li>
      </ul>
    </nav>
  );
}
