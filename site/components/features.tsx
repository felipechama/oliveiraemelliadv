"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import FeaturesBg from "@/public/images/features-bg.png";
import FeaturesElement from "@/public/images/features-element.png";
import Link from "next/link";

export default function Features() {
  const [tab, setTab] = useState<number>(1);

  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      {/* <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div> */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <br />
          <br />

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <p className="text-xl text-gray-600">
              Soluções jurídicas completas
            </p>
            <h1 className="h2 mb-4">
              Todo o suporte jurídico que o seu negócio precisa em um só lugar
            </h1>

            <img src="/images/oliveira-melli.png" alt="Oliveira & Melli" />
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h4 mb-3">Pessoa Física (PF):</h3>
                {/* <p className="text-xl text-gray-600">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa.
                </p> */}
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <div
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${"bg-white shadow-md border-gray-200 hover:shadow-lg"}`}
                >
                  <ul>
                    <li className="text-gray-600">Direito Civil</li>
                    <li className="text-gray-600">Criminal</li>
                    <li className="text-gray-600">Direito Civil</li>
                    <li className="text-gray-600">Criminal</li>
                    <li className="text-gray-600">Direito Civil</li>
                    <li className="text-gray-600">Criminal</li>
                    <li className="text-gray-600">Direito Civil</li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              <div className="mb-8">
                <h3 className="h4 mb-3">Pessoa Jurídica (PJ):</h3>
                {/* <p className="text-xl text-gray-600">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa.
                </p> */}
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <div
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${"bg-white shadow-md border-gray-200 hover:shadow-lg"}`}
                >
                  <ul>
                    <li className="text-gray-600">Ambiental</li>
                    <li className="text-gray-600">Trabalhista</li>
                    <li className="text-gray-600">Ambiental</li>
                    <li className="text-gray-600">Trabalhista</li>
                    <li className="text-gray-600">Ambiental</li>
                    <li className="text-gray-600">Trabalhista</li>
                    <li className="text-gray-600">Ambiental</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center my-12">
            <Link
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5511998151675"
            >
              <button
                type="button"
                className="rounded-md bg-custom-100 px-8 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
              >
                Entrar em contato
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
