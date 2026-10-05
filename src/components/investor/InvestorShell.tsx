"use client";

import {
  Bell,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  LayoutDashboard,
  LifeBuoy,
  LogOut,
  Menu,
  ReceiptText,
  TrendingUp,
  UserRound,
  WalletCards,
  X,
} from "lucide-react";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

import {
  DemoSession,
  getDemoSession,
  logoutDemoUser,
} from "@/lib/demo-auth";

const navigation = [
  {
    label: "Dashboard",
    href: "/investor/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "My Investment",
    href: "/investor/investments",
    icon: BriefcaseBusiness,
  },
  {
    label: "Performance",
    href: "/investor/performance",
    icon: ChartNoAxesCombined,
  },
  {
    label: "Withdraw",
    href: "/investor/withdraw",
    icon: WalletCards,
  },
  {
    label: "Transactions",
    href: "/investor/transactions",
    icon: ReceiptText,
  },
];

const account = [
  {
    label: "Profile",
    href: "/investor/profile",
    icon: UserRound,
  },
  {
    label: "Support",
    href: "/investor/support",
    icon: LifeBuoy,
  },
];

export default function InvestorShell({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [session, setSession] = useState<DemoSession | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const current = getDemoSession();

    if (!current) {
      router.replace("/login");
      return;
    }

    setSession(current);
    setChecking(false);
  }, [router]);

  function logout() {
    logoutDemoUser();
    router.replace("/login");
  }

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#06100a] text-[#c8a552]">
        Loading investor portal...
      </div>
    );
  }

  if (!session) return null;

  const initials =
    `${session.firstName[0] || ""}${session.lastName[0] || ""}`.toUpperCase();

  return (
    <main className="min-h-screen bg-[#06100a] text-white">
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[285px] border-r border-white/[0.07] bg-[#08140c] lg:flex lg:flex-col">
        <Brand />

        <div className="flex-1 overflow-y-auto px-4 py-7">
          <p className="mb-3 px-3 text-[10px] uppercase tracking-[0.18em] text-[#596b5d]">
            Portfolio
          </p>

          <Navigation
            items={navigation}
            pathname={pathname}
          />

          <p className="mb-3 mt-9 px-3 text-[10px] uppercase tracking-[0.18em] text-[#596b5d]">
            Account
          </p>

          <Navigation
            items={account}
            pathname={pathname}
          />
        </div>

        <div className="border-t border-white/[0.07] p-4">
          <div className="mb-2 flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25432a] text-sm font-semibold text-[#d8ba6e]">
              {initials}
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-medium">
                {session.firstName} {session.lastName}
              </p>

              <p className="truncate text-xs text-[#697b6d]">
                Investor Account
              </p>
            </div>
          </div>

          <button
            onClick={logout}
            className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm text-[#748578] transition hover:bg-red-500/10 hover:text-red-300"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            className="absolute inset-0 bg-black/75"
            onClick={() => setMobileOpen(false)}
          />

          <aside className="relative h-full w-[290px] bg-[#08140c]">
            <div className="flex items-center justify-between border-b border-white/[0.07] p-5">
              <Brand compact />

              <button
                onClick={() => setMobileOpen(false)}
                className="rounded-xl border border-white/10 p-2 text-[#9cab9f]"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-4">
              <Navigation
                items={[...navigation, ...account]}
                pathname={pathname}
                onClick={() => setMobileOpen(false)}
              />

              <button
                onClick={logout}
                className="mt-6 flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm text-red-300"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </aside>
        </div>
      )}

      <section className="min-w-0 lg:ml-[285px]">
        <header className="sticky top-0 z-30 border-b border-white/[0.06] bg-[#06100a]/90 backdrop-blur-xl">
          <div className="flex h-[78px] items-center justify-between px-5 sm:px-7 xl:px-10">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setMobileOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-[#a3b1a5] lg:hidden"
              >
                <Menu size={20} />
              </button>

              <div>
                <p className="text-xs text-[#708174]">
                  MANGO&apos;O Asset Management
                </p>

                <p className="font-semibold">
                  Investor Portal
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/investor/notifications"
                className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-[#a0afa3] transition hover:text-white"
              >
                <Bell size={18} />
                <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#d1ac52]" />
              </Link>

              <Link
                href="/investor/profile"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#2d5032] to-[#132d19] text-xs font-semibold text-[#e0c579]"
              >
                {initials}
              </Link>
            </div>
          </div>
        </header>

        {children}
      </section>
    </main>
  );
}

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "" : "border-b border-white/[0.07] px-7 py-7"}>
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d5b45e] to-[#80611f] text-[#071009]">
          <TrendingUp size={21} />
        </div>

        <div>
          <p className="font-semibold tracking-[0.08em]">
            MANGO&apos;O
          </p>

          <p className="text-[8px] uppercase tracking-[0.2em] text-[#bd9b4e]">
            Asset Management
          </p>
        </div>
      </div>
    </div>
  );
}

function Navigation({
  items,
  pathname,
  onClick,
}: {
  items: typeof navigation;
  pathname: string;
  onClick?: () => void;
}) {
  return (
    <nav className="space-y-1.5">
      {items.map((item) => {
        const Icon = item.icon;
        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClick}
            className={`flex items-center gap-3 rounded-2xl px-4 py-3.5 text-sm transition ${
              active
                ? "bg-gradient-to-r from-[#29462c] to-[#142a19] text-[#e6cf8e]"
                : "text-[#839487] hover:bg-white/[0.035] hover:text-white"
            }`}
          >
            <Icon size={18} />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}