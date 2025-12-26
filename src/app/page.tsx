"use client";
import Image from "next/image";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";
import Header from "../components/Header";
import { navItems } from "../components/navItems";
import { newsItems } from "../data/news";
import { papers } from "../data/papers";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header navItems={navItems} />

      <main className="flex w-full flex-col px-0 pb-16">
        <section className="relative w-full overflow-hidden bg-white shadow-sm">
          <div className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 z-30">
            <Image
              src="/Vector.png"
              alt="白いライン"
              width={2}
              height={92}
              priority
              className="block"
            />
          </div>
          <div className="relative h-auto w-full flex justify-end">
            <div className="relative w-full max-w-[2100px] ml-auto mr-0 pr-0 h-[640px] sm:h-[700px] md:h-[780px] lg:h-[820px]">
              <div className="relative h-full w-full translate-x-0 scale-x-100 origin-center">
                <Image
                  src="/スクリーンショット 2025-11-05 21.06.40 1 (1) (1).png"
                  alt="湖と山々の風景"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1280px) 2100px, 100vw"
                />
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 sm:h-22 md:h-24 bg-gradient-to-t from-black/20 via-black/10 to-transparent" />
              <div className="absolute left-4 bottom-10 w-[88%] max-w-[760px] sm:left-6 sm:w-[82%] sm:bottom-14 md:left-10 md:w-[70%] md:bottom-16 lg:left-12 lg:w-[60%] lg:bottom-20">
                <div className="relative w-full aspect-[661/260] shadow-xl">
                  <Image
                    src="/Rectangle 731.png"
                    alt="青いグラデーションの背景"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 600px, 80vw"
                    priority
                  />
                  <div className="absolute inset-0 flex items-center px-8 md:px-10">
                    <p className="text-[30px] font-bold leading-tight text-white drop-shadow-sm sm:text-[34px] md:text-[42px] md:leading-[1.3] lg:text-[46px] lg:leading-[1.35]">
                      <span className="block mb-10 sm:mb-12">社会の安心とエネルギーの</span>
                      <span className="block">調和を目指しています</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative w-full px-0">
          <div className="pointer-events-none absolute left-1/2 -top-[1px] -translate-x-1/2">
            <Image
              src="/Vector (2).png"
              alt="黒いライン"
              width={2}
              height={92}
              priority
              className="block"
            />
          </div>
          <div className="relative mx-auto flex w-full max-w-[2100px] justify-end pl-6 pr-0 md:pl-10 md:pr-0 -mt-14">
            {newsItems.length > 0 && (
              <div className="flex w-full max-w-[700px] overflow-hidden rounded-md border border-slate-200 bg-white shadow-[0_6px_24px_rgba(0,0,0,0.12)]">
                <div className="flex flex-1 flex-col gap-3 px-6 py-8">
                  <div className="flex items-center gap-3 text-[13px] text-slate-500">
                    <span>{newsItems[0].date}</span>
                    <span className="h-4 w-px bg-slate-300" />
                    <span className="rounded-sm bg-[#2a7bc1] px-3 py-1 text-xs font-semibold text-white">
                      {newsItems[0].tag}
                    </span>
                  </div>
                  <a
                    href={newsItems[0].href}
                    className="text-[14px] text-slate-700 hover:underline"
                  >
                    {newsItems[0].title}
                  </a>
                </div>
                <a
                  href="/news"
                  className="flex w-48 items-center justify-between bg-[#f3f3f3] px-5 py-6 hover:bg-[#e9eef3] transition-colors"
                >
                  <span className="text-sm text-slate-700">Read More</span>
                  <Image
                    src="/Group 43.png"
                    alt="Read more arrow"
                    width={49}
                    height={38}
                    priority
                  />
                </a>
              </div>
            )}
          </div>
        </section>
        <section className="relative w-full overflow-hidden bg-white px-4 py-16 sm:px-8 md:px-12 lg:px-16 mt-12 min-h-[860px]">
          <div className="absolute inset-0">
            <Image
              src="/hand-holding-tray-with-creative-eco-globe-sketch-blurry-city-background-ecofriendly-environment-concept-double-exposure 1.png"
              alt="エコをテーマにした背景"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-white/65" />
          <div className="relative mx-auto flex w-full max-w-[1200px] items-start gap-10 lg:gap-14 pt-10 px-4 sm:px-8 md:pt-14 md:pl-8 md:-translate-x-10">
            <div className="flex max-w-[760px] flex-col gap-9 md:-translate-x-20">
              <h2 className="text-[55px] font-bold text-slate-900 md:text-[44px]">
                一般社団法人　自然冷媒推進協議会
              </h2>
              <p className="text-[15px] leading-[1.9] text-slate-900 md:text-[22px] md:leading-[2] max-w-[660px]">
              エアコンに使用される冷媒ガスは、化学物質であるフッ素の利用が始まりフロンガスが開発されるとその利便性と冷媒性能から多くのフロンガス冷媒が開発され使用されてきました。ところがフロンガスが地球温暖化に大きな影響を及ぼしていることが判明し、徐々にフロンガス冷媒の使用が見直され始めています。 我々は、フロンガス冷媒が普及する以前から使用されていた自然冷媒ガスの一つである炭化水素冷媒を、フロンガス冷媒機器にそのまま使えるように製造しているHyChill AUS社の製品ハイチルガスを使用することで、脱フロンガス、地球温暖化対策を目指しています。
              </p>
              <div className="pt-4">
                <a
                  href="/company"
                  className="inline-flex items-center gap-8 rounded-full bg-[#1f6bb2] px-24 py-7 text-white shadow-md transition-colors hover:bg-[#195fa0]"
                >
                  <span className="text-[18px] font-semibold">Read More</span>
                  <span className="h-px w-14 bg-white/80" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="relative w-full overflow-hidden bg-white px-6 py-24 sm:px-10 md:px-14 lg:px-20 min-h-[720px]">
          <div className="pointer-events-none absolute right-0 bottom-0 h-[85%] w-[65%] min-w-[560px] bg-[#eaf4ff]" />
          <div className="pointer-events-none absolute right-0 bottom-0 h-[85%] w-[65%] min-w-[560px]">
            <Image
              src="/Group 5271.png"
              alt="薄い青の壁紙"
              fill
              className="object-cover object-right"
              priority
              sizes="(min-width: 1280px) 600px, 40vw"
            />
          </div>

          <div className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-10">
            <div className="flex flex-col gap-3 -translate-x-6 -translate-y-4 md:-translate-x-8 md:-translate-y-5">
              <div className="flex items-baseline gap-6">
                <h2 className="text-[52px] font-semibold text-slate-900">Info</h2>
              </div>
              <div className="flex items-center gap-3 text-[22px] text-slate-800">
                <span className="h-px w-8 bg-slate-500" aria-hidden="true" />
                <span>炭化水素冷媒に関する論文</span>
              </div>
            </div>

            <div className="relative mt-4 flex flex-wrap justify-center gap-10 lg:gap-16">
              {papers.slice(0, 3).map((paper) => (
                <a
                  key={paper.src}
                  href={paper.href}
                  className="group relative h-[360px] w-[240px] overflow-hidden rounded-md border border-slate-200 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-transform hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f6bb2]"
                >
                  <Image
                    src={paper.src}
                    alt={paper.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    sizes="240px"
                    priority
                  />
                </a>
              ))}
            </div>

            <div className="flex justify-center mt-16">
              <a
                href="/info"
                className="inline-flex items-center gap-8 rounded-full bg-[#1f6bb2] px-24 py-7 text-white shadow-md transition-colors hover:bg-[#195fa0]"
              >
                <span className="text-[18px] font-semibold">Read More</span>
                <span className="h-px w-14 bg-white/80" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
        <section className="relative w-full overflow-hidden bg-white px-6 py-24 sm:px-10 md:px-14 lg:px-20 min-h-[620px]">
          <div className="absolute inset-0 min-h-[600px]">
            <Image
              src="/Group.png"
              alt="Board for Members 背景"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
          <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-start gap-10 mt-16 px-4 sm:px-0">
            <div className="flex flex-col gap-4 text-white">
              <h2 className="text-[48px] font-semibold leading-[1.1] sm:text-[65px]">Board for Members</h2>
              <div className="flex items-center gap-3 text-[20px] sm:text-[22px]">
                <span className="h-px w-12 bg-white/70" aria-hidden="true" />
                <span>会員向け掲示板</span>
              </div>
            </div>
            <div className="flex justify-center pt-6 sm:pt-10 w-full">
              <a
                href="#"
                className="inline-flex items-center gap-8 rounded-full bg-white px-24 py-7 text-[#1f6bb2] shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-colors hover:bg-[#f1f5f9]"
              >
                <span className="text-[18px] font-semibold">Read More</span>
                <span className="h-px w-14 bg-[#1f6bb2]/80" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
        <ContactSection />
        <FooterSection />
      </main>
    </div>
  );
}
