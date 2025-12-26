type NavItem = {
  label: string;
  href: string;
};

export default function Header({ navItems }: { navItems: NavItem[] }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="flex w-full items-center gap-6 pl-[10px] pr-0 py-0 min-h-[104px]">
        <div className="flex items-center gap-3">
          <div className="flex items-baseline gap-2 leading-tight ml-[10px]">
            <div className="text-[25px] font-bold tracking-tight text-[#1f6bb2]">
              一般社団法人　自然冷媒推進協議会
            </div>
          </div>
        </div>

        <nav className="ml-auto hidden items-center gap-9 text-[15px] font-medium text-neutral-800 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              className="transition-colors hover:text-[#1f6bb2]"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="hidden h-full min-h-[104px] min-w-[144px] items-center justify-center bg-[#1f6bb2] px-8 text-[15px] font-semibold tracking-wide text-white shadow-sm transition-colors hover:bg-[#195c99] md:inline-flex"
          href="#"
        >
          Contact
        </a>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 text-slate-700 md:hidden"
          type="button"
          aria-label="メニューを開く"
        >
          <span className="sr-only">メニュー</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
          </div>
        </button>
      </div>
    </header>
  );
}
