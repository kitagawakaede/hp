"use client";

import Image from "next/image";
import ContactSection from "../../components/ContactSection";
import FooterSection from "../../components/FooterSection";
import Header from "../../components/Header";
import { navItems } from "../../components/navItems";
import { useState } from "react";
import { papers } from "../../data/papers";

export default function InfoPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const PaperCard = ({ paper, index }: { paper: (typeof papers)[number]; index: number }) => {
    const isOpen = openIndex === index;
    const toggle = () => setOpenIndex(isOpen ? null : index);

    return (
      <div className="flex items-start gap-4">
        <a
          href={paper.href ?? "#"}
          className="group block h-[150px] w-[110px] flex-shrink-0 overflow-hidden transition hover:-translate-y-1"
        >
          <Image
            src={paper.src}
            alt={paper.title}
            width={220}
            height={300}
            className="h-full w-full object-contain"
          />
        </a>
        <div className="flex flex-col gap-2">
          <a
            href={paper.href ?? "#"}
            className="text-[14px] font-semibold leading-5 text-[#1f6bb2] hover:underline"
          >
            {paper.title}
          </a>
          <div className="text-[12px] text-neutral-600">{paper.size}</div>
          <div className="flex flex-col gap-1">
            <button
              type="button"
              onClick={toggle}
              className="inline-flex w-fit items-center rounded-full border border-slate-400 px-3 py-1 text-[12px] font-semibold text-neutral-700 transition hover:bg-slate-50"
            >
              日本語要約
            </button>
            <div className="min-h-[16px]" />
            {isOpen && (
              <div className="text-[12px] leading-6 text-neutral-700">
                （日本語要約がここに入ります）
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header navItems={navItems} />

      <main className="flex w-full flex-col px-0 pb-16">
        <section className="relative w-full overflow-hidden bg-white min-h-[660px]">
          <div className="absolute inset-0">
            <div
              className="absolute inset-y-0"
              style={{ left: "25%", width: "75%", minWidth: "calc(100% - 120px)" }}
            >
              <Image
                src="/Mask group (6).png"
                alt="情報ページ背景"
                fill
                className="object-cover origin-center"
                priority
                sizes="100vw"
              />
            </div>
          </div>
          <div className="absolute left-0 top-0 h-full w-[25%] min-w-[120px] bg-[#1263AB]" />
          <div className="relative mx-auto flex h-full w-full max-w-[1600px] items-end px-0 pt-56 pb-36 sm:px-4 lg:px-4">
            <div className="flex flex-col gap-5 text-white ">
              <h1 className="text-[68px] font-semibold leading-[1.05] sm:text-[78px]">
                Info
              </h1>
              <p className="text-[38px] sm:text-[42px]">製品情報</p>
            </div>
          </div>
        </section>

        <section className="relative w-full bg-white py-16 sm:py-20">
          <div className="pointer-events-none absolute inset-x-0 top-0">
            <Image
              src="/Vector (3).png"
              alt="斜めの青背景"
              width={1920}
              height={260}
              className="w-full object-cover"
              priority
            />
          </div>

          <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center gap-14 px-4 sm:px-6 mt-14 sm:mt-16 lg:mt-20">
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-[44px] font-semibold text-neutral-900 sm:text-[48px]">
                炭化水素冷媒に関する論文など
              </h2>
              <p className="text-[22px] font-semibold text-[#1f6bb2] text-center sm:text-[25px]">
                Info
              </p>
            </div>

            <div className="relative w-full">
              <div className="grid gap-10 sm:grid-cols-2">
                {papers.map((paper, idx) => (
                  <PaperCard key={paper.src} paper={paper} index={idx} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
        <FooterSection />
      </main>
    </div>
  );
}
