"use client";

import Image from "next/image";
import ContactSection from "../../components/ContactSection";
import FooterSection from "../../components/FooterSection";
import Header from "../../components/Header";
import { navItems } from "../../components/navItems";

export default function CompanyPage() {
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
                src="/global-climate-concept-photo-symbolizing-joint-efforts-address-climate-change-promote-sustainable-practices 1.png"
                alt="地球と植物のイメージ"
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
                Campany
              </h1>
              <p className="text-[28px] font-semibold sm:text-[30px]">
                Natural Refrigerants Promotion Council
              </p>
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

          <div className="relative mx-auto flex w-full max-w-[1100px] flex-col items-center gap-10 px-4 sm:px-6 mt-14 sm:mt-16 lg:mt-20">
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-[44px] font-semibold leading-tight text-neutral-900 sm:text-[48px]">
                一般社団法人　自然冷媒推進協議会
              </h2>
              <p className="text-[18px] font-semibold text-[#1f6bb2] text-center sm:text-[25px]">
                Natural Refrigerants Promotion Council
                <br />
                (General Incorporated Association)
              </p>
            </div>

            <div className="w-full max-w-[940px] text-left">
              <div className="grid grid-cols-[140px_1fr] items-start gap-5 border-b border-slate-200 py-6 text-[14px] text-neutral-700 sm:text-[15px]">
                <span className="text-neutral-500">代表者名</span>
                <span className="text-neutral-900">野元一臣</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] items-start gap-5 border-b border-slate-200 py-6 text-[14px] text-neutral-700 sm:text-[15px]">
                <span className="text-neutral-500">設立</span>
                <span className="text-neutral-900">2025年8月</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] items-start gap-5 py-6 text-[14px] text-neutral-700 sm:text-[15px]">
                <span className="text-neutral-500">目的</span>
                <div className="flex flex-col gap-2 text-neutral-800">
                  <p>
                    当法人は、炭化水素冷媒を社会に普及することを目的とし、その目的に資するため、次の事業を行う。
                  </p>
                  <ol className="ml-1 list-decimal space-y-1 pl-5 text-neutral-800">
                    <li>炭化水素冷媒に関する輸入、生産、流通、入替技術及び貿易についての調査、研究</li>
                    <li>炭化水素冷媒の普及促進に関する関係機関への建議・意見具申</li>
                    <li>
                      炭化水素冷媒の入替技術に関する標準化及び規格化、及び導入機器の効果検証、調査統計
                    </li>
                    <li>
                      炭化水素冷媒に関する社員相互の交流及び内外関係機関、団体との連携並びに国際協力の推進
                    </li>
                    <li>炭化水素冷媒に関する市場動向、技術開発、利用等に関するシンポジウム・セミナー等の開催</li>
                    <li>炭化水素冷媒に関する広報・啓発</li>
                    <li>炭化水素冷媒に関する需要家又は消費者との相談等に関する業務</li>
                    <li>地球温暖化に関する冷媒の調査・破壊推進促進</li>
                    <li>その他全各号に掲げる事業に附帯又は関連する事業</li>
                  </ol>
                </div>
              </div>
              <div className="h-px w-full bg-slate-200" />
            </div>
          </div>
        </section>
        <section className="relative w-full bg-white py-16 sm:py-20">
          <div className="pointer-events-none absolute inset-x-0 top-0">
            <Image
              src="/Vector (3).png"
              alt="2斜めの青背景"
              width={1920}
              height={260}
              className="w-full object-cover"
              priority
            />
          </div>

          <div className="relative mx-auto flex w-full max-w-[1100px] flex-col items-center gap-6 px-4 sm:px-6 mt-14 sm:mt-16 lg:mt-20">
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-[44px] font-semibold text-neutral-900 sm:text-[48px]">
              HyChill社について
              </h2>
              <p className="text-[22px] font-semibold text-[#1f6bb2] text-center sm:text-[25px]">company</p>
            </div>
          </div>
        </section>

        <section className="w-full bg-white pb-20">
          <div className="mx-auto flex w-full max-w-[1100px] flex-col items-start gap-10 px-4 sm:px-6">
            <div className="w-full max-w-[360px]">
              <Image
                src="/image 3.png"
                alt="HyChill ロゴ"
                width={720}
                height={240}
                className="h-auto w-full object-contain"
                priority
              />
            </div>

            <div className="w-full max-w-[900px] text-left space-y-4">
              <div className="grid grid-cols-1 items-center gap-4 border-b border-slate-200 pb-5 text-[15px] text-neutral-800 sm:grid-cols-[140px_1fr] sm:gap-6 sm:text-[16px]">
                <span className="text-neutral-500">名称</span>
                <span>HyChill Australia Pty Ltd</span>
              </div>
              <div className="grid grid-cols-1 items-center gap-4 border-b border-slate-200 pb-5 text-[15px] text-neutral-800 sm:grid-cols-[140px_1fr] sm:gap-6 sm:text-[16px]">
                <span className="text-neutral-500">設立</span>
                <span>1995年</span>
              </div>
              <div className="grid grid-cols-1 items-center gap-4 border-b border-slate-200 pb-5 text-[15px] text-neutral-800 sm:grid-cols-[140px_1fr] sm:gap-6 sm:text-[16px]">
                <span className="text-neutral-500">本社</span>
                <span>オーストラリア　メルボルン</span>
              </div>
            </div>

            <div className="grid w-full max-w-[1100px] grid-cols-1 gap-10 sm:grid-cols-[1.1fr_1fr] items-start">
              <div className="w-full">
                <Image
                  src="/Mask group (3).png"
                  alt="HyChill チーム写真"
                  width={1200}
                  height={700}
                  className="h-auto w-full rounded-md object-cover shadow-sm"
                  priority
                />
              </div>
              <div className="text-[15px] leading-7 text-neutral-800 sm:text-[16px] sm:leading-8">
                元々微量ガスの計測器を製造していたが、その技術を応用し、炭化水素冷媒ガスを1999年よりハイチルガスとして製造開始。
                以後、炭化水素冷媒の開発と普及を世界でリードし、オーストラリアではAmazonやホームセンターなどで一般販売もしている。
                現在までに、70か国以上に販売実績がある。（日本、台湾、マレーシア、タイ、フィリピン、フランス、スペイン、ニュージーランドなどに代理店がある）
                <div className="mt-4 text-[#1f6bb2]">
                  https://hychill.com.au/
                </div>
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
