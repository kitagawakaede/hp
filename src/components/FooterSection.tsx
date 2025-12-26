import React from "react";

export default function FooterSection() {
  return (
    <section className="w-full bg-white px-0 py-16">
      <div className="flex w-full flex-col px-8 md:px-12">
        <div className="grid w-full items-center gap-14 text-slate-800 sm:grid-cols-[1.2fr_1fr] md:grid-cols-[1.2fr_1fr]">
          <div className="flex justify-start">
            <span className="text-[28px] font-bold text-[#1f6bb2]">
              一般社団法人　自然冷媒推進協議会
            </span>
          </div>
          <div className="grid grid-cols-2 gap-y-8 text-[16px] text-neutral-800 pr-16 md:pr-24 justify-self-end">
            <a className="hover:text-[#1f6bb2]" href="/">
              Home
            </a>
            <a className="hover:text-[#1f6bb2]" href="/news">
              News
            </a>
            <a className="hover:text-[#1f6bb2]" href="/company">
              Company
            </a>
            <a className="hover:text-[#1f6bb2]" href="#">
              Board for Members
            </a>
            <a className="hover:text-[#1f6bb2]" href="/info">
              Info
            </a>
            <a className="hover:text-[#1f6bb2]" href="#">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
