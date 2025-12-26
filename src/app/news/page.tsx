"use client";

import Image from "next/image";
import Header from "../../components/Header";
import ContactSection from "../../components/ContactSection";
import FooterSection from "../../components/FooterSection";
import { navItems } from "../../components/navItems";

export default function NewsPage() {
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
                src="/skyscraper-building 1.png"
                alt="高層ビルの風景"
                fill
                className="object-cover origin-center"
                priority
                sizes="100vw"
              />
            </div>
          </div>
          <div className="absolute left-0 top-0 h-full w-[25%] min-w-[120px] bg-[#1263AB]" />
          <div className="relative mx-auto flex h-full w-full max-w-[1600px] items-end px-0 pt-56 pb-36 sm:px-4 lg:px-4">
            <div className="flex flex-col gap-5 text-white">
              <h1 className="text-[68px] font-semibold leading-[1.05] sm:text-[78px]">
                News
              </h1>
              <p className="text-[38px] sm:text-[42px]">お知らせ</p>
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

          <div className="relative mx-auto flex w-full max-w-[1100px] flex-col items-center gap-6 px-4 sm:px-6 mt-14 sm:mt-16 lg:mt-20">
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-[px] font-semibold text-neutral-900 sm:text-[30px]">
                お知らせ一覧
              </h2>
              <p className="text-[16px] font-semibold text-[#1f6bb2]">News</p>
            </div>

            <div className="relative mt-4 w-full rounded-lg bg-white px-6 pb-12 pt-10 shadow-[0_10px_30px_rgba(0,0,0,0.1)] sm:mt-6 sm:px-10">
              <div className="flex items-center justify-start gap-3 border-b border-slate-200 px-2 py-4 text-[14px] text-neutral-700">
                <span className="inline-flex items-center rounded-full border border-slate-400 px-3 py-1 text-[12px]">
                  お知らせ
                </span>
              </div>

              <div className="space-y-8 py-6">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-[140px_1fr] items-start gap-6 border-b border-dashed border-slate-200 pb-6 last:border-b-0"
                  >
                    <div className="h-[100px] w-full rounded-sm bg-slate-300" />
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3 text-[13px] text-neutral-500">
                        <span>2025.10.10</span>
                        <span className="inline-flex items-center rounded-full border border-slate-400 px-2 py-1 text-[11px]">
                          お知らせ
                        </span>
                      </div>
                      <div className="text-[16px] font-semibold text-neutral-900">
                        タイトル
                      </div>
                    </div>
                  </div>
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
