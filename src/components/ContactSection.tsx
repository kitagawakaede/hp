"use client";

import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="relative w-full overflow-visible bg-white px-6 py-28 sm:px-10 md:px-14 lg:px-20 min-h-[720px]">
      <div className="absolute inset-0 min-h-[720px]">
        <Image
          src="/Group 5264.png"
          alt="お問い合わせ 背景"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-16 px-4 sm:px-6">
        <div className="flex flex-col items-center gap-2 text-white pt-6 sm:pt-0">
          <h2 className="text-[44px] font-semibold">お問い合わせ</h2>
          <p className="text-[18px]">contact</p>
        </div>

        <div className="mx-auto w-full max-w-[1080px] bg-white shadow-[0_16px_48px_rgba(0,0,0,0.18)]">
          <div className="grid items-center gap-0 md:grid-cols-[1fr_auto]">
            <div className="px-8 py-10 text-[15px] leading-7 text-slate-800 sm:px-12 sm:py-12 md:px-16 md:py-16 md:text-[17px] md:leading-8">
              <p className="mb-4">ご依頼・ご質問はお問い合わせページからお願いいたします。</p>
              <p>会員の皆様は、会員向け掲示板を情報交換の場としてご利用ください。</p>
            </div>
            <div className="flex h-full min-h-[80px] w-full items-center justify-center px-8 py-10 sm:px-10 sm:py-12 md:px-12 md:py-14">
              <a
                href="#"
                className="inline-flex items-center justify-center bg-[#1f6bb2] px-14 py-6 text-[17px] font-semibold text-white shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition-opacity hover:opacity-90"
              >
                お問い合わせフォーム
              </a>
            </div>
          </div>
        </div>

        <div className="pointer-events-auto fixed right-6 bottom-12 sm:right-10 sm:bottom-16 lg:right-14 lg:bottom-20 z-[20000]">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="relative h-12 w-12 rounded-full transition-transform hover:-translate-y-1"
            aria-label="ページトップへ戻る"
          >
            <Image
              src="/Group 5277 (2).png"
              alt="トップへ"
              fill
              className="object-contain"
              sizes="48px"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
