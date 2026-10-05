"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  ArrowDownToLine,
  ReceiptText,
  UserRound,
  LifeBuoy,
  LogOut,
  Bell,
  TrendingUp,
  ShieldCheck,
  CalendarDays,
  DollarSign,
  ArrowUpRight,
  Menu,
  X,
  ChevronRight,
  CircleDollarSign,
} from "lucide-react";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const portfolioData = [
  { month: "Jan", value: 10000 },
  { month: "Feb", value: 10250 },
  { month: "Mar", value: 10750 },
  { month: "Apr", value: 11150 },
  { month: "May", value: 11650 },
  { month: "Jun", value: 12500 },
];

const performanceData = [
  { month: "Jan", value: 2.5 },
  { month: "Feb", value: 3.2 },
  { month: "Mar", value: 4.1 },
  { month: "Apr", value: 3.8 },
  { month: "May", value: 4.6 },
  { month: "Jun", value: 5 },
];

const transactions = [
  {
    id: "TX-00987",
    type: "Monthly Profit",
    date: "27 Sep 2026",
    amount: "+$500.00",
    status: "Completed",
  },
  {
    id: "TX-00943",
    type: "Investment Deposit",
    date: "01 Sep 2026",
    amount: "+$10,000.00",
    status: "Completed",
  },
  {
    id: "TX-00881",
    type: "Profit Withdrawal",
    date: "31 Aug 2026",
    amount: "-$250.00",
    status: "Completed",
  },
];

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    title: "My Investment",
    icon: BriefcaseBusiness,
  },
  {
    title: "Performance",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Withdraw",
    icon: ArrowDownToLine,
  },
  {
    title: "Transactions",
    icon: ReceiptText,
  },
];

const accountMenu = [
  {
    title: "Profile",
    icon: UserRound,
  },
  {
    title: "Support",
    icon: LifeBuoy,
  },
];

function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  accent = false,
}: {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ElementType;
  accent?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[24px] border p-5 transition duration-300 hover:-translate-y-1 ${
        accent
          ? "border-[#b79548]/40 bg-gradient-to-br from-[#1b371f] via-[#122a18] to-[#0c1f11]"
          : "border-white/10 bg-white/[0.035]"
      }`}
    >
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#c7a052]/10 blur-2xl" />

      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8fa092]">
            {title}
          </p>

          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
            {value}
          </h3>

          <p className="mt-2 text-sm text-[#91a395]">{subtitle}</p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#c8a75d]/20 bg-[#c8a75d]/10 text-[#d9b96b]">
          <Icon size={20} />
        </div>
      </div>
    </div>
  );
}

export default function InvestorDashboard() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <main className="min-h-screen bg-[#06100a] text-white">
      <div className="flex min-h-screen">
        {/* SIDEBAR DESKTOP */}
        <aside className="fixed left-0 top-0 hidden h-screen w-[270px] border-r border-white/[0.07] bg-[#08140c] lg:flex lg:flex-col">
          <div className="border-b border-white/[0.07] px-7 py-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d2b15e] to-[#80621e] text-[#071009] shadow-[0_0_30px_rgba(210,177,94,0.18)]">
                <TrendingUp size={22} strokeWidth={2.3} />
              </div>

              <div>
                <h1 className="text-[18px] font-semibold tracking-[0.06em]">
                  MANGO&apos;O
                </h1>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.27em] text-[#b59449]">
                  Investment
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 px-4 py-7">
            <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#596b5d]">
              Investment
            </p>

            <nav className="space-y-1.5">
              {menuItems.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.title}
                    className={`group flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 text-left text-sm transition ${
                      item.active
                        ? "bg-gradient-to-r from-[#2a472c] to-[#142a19] text-[#e8d395]"
                        : "text-[#839487] hover:bg-white/[0.035] hover:text-white"
                    }`}
                  >
                    <Icon
                      size={18}
                      className={
                        item.active
                          ? "text-[#d2b15e]"
                          : "text-[#718174] group-hover:text-[#d2b15e]"
                      }
                    />

                    <span className="flex-1">{item.title}</span>

                    {item.active && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#d2b15e]" />
                    )}
                  </button>
                );
              })}
            </nav>

            <p className="mb-3 mt-9 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#596b5d]">
              Account
            </p>

            <nav className="space-y-1.5">
              {accountMenu.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.title}
                    className="group flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 text-left text-sm text-[#839487] transition hover:bg-white/[0.035] hover:text-white"
                  >
                    <Icon
                      size={18}
                      className="text-[#718174] group-hover:text-[#d2b15e]"
                    />
                    {item.title}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="border-t border-white/[0.07] p-4">
            <div className="mb-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25432a] text-sm font-semibold text-[#d8ba6e]">
                  FM
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-white">
                    Francis M.
                  </p>
                  <p className="truncate text-xs text-[#697b6d]">
                    Premium Investor
                  </p>
                </div>
              </div>
            </div>

            <button className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm text-[#748578] transition hover:bg-red-500/10 hover:text-red-300">
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </aside>

        {/* MOBILE SIDEBAR */}
        {mobileMenu && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <button
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setMobileMenu(false)}
            />

            <div className="relative h-full w-[285px] border-r border-white/10 bg-[#08140c] p-5 shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold tracking-wider">MANGO&apos;O</p>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-[#b59449]">
                    Investment
                  </p>
                </div>

                <button
                  onClick={() => setMobileMenu(false)}
                  className="rounded-xl border border-white/10 p-2 text-[#a1afa4]"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="mt-8 space-y-2">
                {[...menuItems, ...accountMenu].map((item) => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.title}
                      className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 text-left text-sm ${
                        "active" in item && item.active
                          ? "bg-[#1b3420] text-[#e3ca83]"
                          : "text-[#839487]"
                      }`}
                    >
                      <Icon size={18} />
                      {item.title}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* MAIN CONTENT */}
        <section className="min-w-0 flex-1 lg:ml-[270px]">
          {/* HEADER */}
          <header className="sticky top-0 z-30 border-b border-white/[0.06] bg-[#06100a]/90 backdrop-blur-xl">
            <div className="flex h-[78px] items-center justify-between px-5 sm:px-7 xl:px-10">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setMobileMenu(true)}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-[#a3b1a5] lg:hidden"
                >
                  <Menu size={20} />
                </button>

                <div>
                  <p className="text-xs text-[#708174]">
                    Investor Portal
                  </p>
                  <h2 className="text-lg font-semibold tracking-tight">
                    Dashboard
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden items-center gap-2 rounded-full border border-[#30533a] bg-[#0c2112] px-3 py-2 text-[11px] font-medium text-[#93c59e] sm:flex">
                  <ShieldCheck size={14} />
                  Secured account
                </div>

                <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-[#a0afa3] transition hover:text-white">
                  <Bell size={18} />
                  <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#d1ac52]" />
                </button>

                <div className="hidden h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#2d5032] to-[#132d19] text-xs font-semibold text-[#e0c579] sm:flex">
                  FM
                </div>
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-[1600px] p-5 sm:p-7 xl:p-10">
            {/* WELCOME */}
            <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="mb-2 text-sm text-[#718276]">
                  Sunday, 27 September 2026
                </p>

                <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Welcome back, Francis
                </h1>

                <p className="mt-2 max-w-xl text-sm leading-6 text-[#728175]">
                  Here&apos;s an overview of your investment portfolio and latest
                  account activity.
                </p>
              </div>

              <button className="flex w-fit items-center gap-2 rounded-2xl bg-gradient-to-r from-[#d0ad56] to-[#9a792e] px-5 py-3 text-sm font-semibold text-[#0a120c] shadow-[0_12px_35px_rgba(192,153,66,0.12)] transition hover:brightness-110">
                View Investment
                <ArrowUpRight size={17} />
              </button>
            </div>

            {/* STATS */}
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <StatCard
                title="Current Value"
                value="$12,500.00"
                subtitle="+ $2,500.00 (+25%)"
                icon={CircleDollarSign}
                accent
              />

              <StatCard
                title="Total Profit"
                value="$2,500.00"
                subtitle="Since initial investment"
                icon={TrendingUp}
              />

              <StatCard
                title="Monthly Return"
                value="5.00%"
                subtitle="+ $500.00 this month"
                icon={ChartNoAxesCombined}
              />

              <div className="relative overflow-hidden rounded-[24px] border border-[#32653d]/30 bg-gradient-to-br from-[#102c18] to-[#0a1d10] p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8fa092]">
                      Investment Status
                    </p>

                    <div className="mt-4 flex items-center gap-2">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                      <span className="text-2xl font-semibold text-white">
                        ACTIVE
                      </span>
                    </div>

                    <p className="mt-2 text-sm text-[#91a395]">
                      Portfolio operating normally
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                    <ShieldCheck size={20} />
                  </div>
                </div>
              </div>
            </div>

            {/* CHARTS */}
            <div className="mt-5 grid gap-5 xl:grid-cols-[1.65fr_1fr]">
              <div className="rounded-[26px] border border-white/[0.07] bg-white/[0.025] p-5 sm:p-6">
                <div className="mb-7 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold">Portfolio Evolution</p>
                    <p className="mt-1 text-xs text-[#718276]">
                      Investment value over the last 6 months
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#c9a552]/15 bg-[#c9a552]/[0.07] px-3 py-2 text-xs text-[#ceb264]">
                    +25.0%
                  </div>
                </div>

                <div className="h-[310px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={portfolioData}>
                      <defs>
                        <linearGradient
                          id="portfolioGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#c9a552"
                            stopOpacity={0.38}
                          />
                          <stop
                            offset="95%"
                            stopColor="#c9a552"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>

                      <CartesianGrid
                        stroke="rgba(255,255,255,0.05)"
                        vertical={false}
                      />

                      <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#718276", fontSize: 11 }}
                      />

                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#718276", fontSize: 11 }}
                        tickFormatter={(value) => `$${value / 1000}k`}
                      />

                      <Tooltip
                        contentStyle={{
                          background: "#0b1910",
                          border: "1px solid rgba(255,255,255,.1)",
                          borderRadius: 14,
                          color: "#fff",
                        }}
                        formatter={(value) => [
                          `$${Number(value).toLocaleString()}`,
                          "Portfolio",
                        ]}
                      />

                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#d3b25f"
                        strokeWidth={2.5}
                        fill="url(#portfolioGradient)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="rounded-[26px] border border-white/[0.07] bg-white/[0.025] p-5 sm:p-6">
                <div>
                  <p className="text-lg font-semibold">Monthly Performance</p>
                  <p className="mt-1 text-xs text-[#718276]">
                    Monthly return percentage
                  </p>
                </div>

                <div className="mt-7 h-[310px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={performanceData}>
                      <CartesianGrid
                        stroke="rgba(255,255,255,0.05)"
                        vertical={false}
                      />

                      <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#718276", fontSize: 11 }}
                      />

                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#718276", fontSize: 11 }}
                        tickFormatter={(value) => `${value}%`}
                      />

                      <Tooltip
                        contentStyle={{
                          background: "#0b1910",
                          border: "1px solid rgba(255,255,255,.1)",
                          borderRadius: 14,
                          color: "#fff",
                        }}
                        formatter={(value) => [`${value}%`, "Return"]}
                      />

                      <Bar
                        dataKey="value"
                        fill="#b99a4c"
                        radius={[8, 8, 3, 3]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* BOTTOM */}
            <div className="mt-5 grid gap-5 xl:grid-cols-[1fr_1fr_1.35fr]">
              {/* ACCOUNT SUMMARY */}
              <div className="rounded-[26px] border border-white/[0.07] bg-white/[0.025] p-6">
                <p className="text-lg font-semibold">Account Summary</p>

                <div className="mt-6 space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-[#b89a4e]">
                        <DollarSign size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-[#728175]">
                          Initial Investment
                        </p>
                        <p className="mt-1 text-sm font-medium">$10,000.00</p>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-white/[0.06]" />

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-[#b89a4e]">
                      <CalendarDays size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-[#728175]">Start Date</p>
                      <p className="mt-1 text-sm font-medium">01 April 2026</p>
                    </div>
                  </div>

                  <div className="h-px bg-white/[0.06]" />

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-[#b89a4e]">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-[#728175]">Account Tier</p>
                      <p className="mt-1 text-sm font-medium">
                        Premium Investor
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WITHDRAW */}
              <div className="relative overflow-hidden rounded-[26px] border border-[#b39347]/20 bg-gradient-to-br from-[#1a321e] to-[#0b1d10] p-6">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#d1ae55]/10 blur-3xl" />

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d0ae58]/20 bg-[#d0ae58]/10 text-[#dcbd70]">
                    <ArrowDownToLine size={21} />
                  </div>

                  <p className="mt-6 text-lg font-semibold">Withdraw Profit</p>

                  <p className="mt-2 text-sm leading-6 text-[#829185]">
                    Available profit can be requested securely from your
                    investor account.
                  </p>

                  <div className="mt-5">
                    <p className="text-xs text-[#718276]">Available balance</p>
                    <p className="mt-1 text-2xl font-semibold text-[#dfc77f]">
                      $2,500.00
                    </p>
                  </div>

                  <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#c8a452] px-4 py-3 text-sm font-semibold text-[#09110b] transition hover:bg-[#d6b45e]">
                    Request Withdrawal
                    <ArrowUpRight size={16} />
                  </button>

                  <p className="mt-3 text-center text-[10px] text-[#657569]">
                    Requests are subject to account verification.
                  </p>
                </div>
              </div>

              {/* NEXT PAYOUT */}
              <div className="rounded-[26px] border border-white/[0.07] bg-white/[0.025] p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold">Next Payout</p>
                    <p className="mt-1 text-xs text-[#718276]">
                      Estimated reporting date
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#c9a552]/10 text-[#c9a552]">
                    <CalendarDays size={20} />
                  </div>
                </div>

                <div className="mt-7 rounded-2xl border border-white/[0.06] bg-[#07140b] p-5">
                  <p className="text-xs uppercase tracking-[0.14em] text-[#748478]">
                    Scheduled
                  </p>

                  <p className="mt-2 text-2xl font-semibold">
                    30 September 2026
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Portfolio active
                  </div>
                </div>
              </div>
            </div>

            {/* TRANSACTIONS */}
            <div className="mt-5 overflow-hidden rounded-[26px] border border-white/[0.07] bg-white/[0.025]">
              <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-5 sm:px-6">
                <div>
                  <p className="text-lg font-semibold">Recent Transactions</p>
                  <p className="mt-1 text-xs text-[#718276]">
                    Latest financial activity
                  </p>
                </div>

                <button className="flex items-center gap-1 text-xs font-medium text-[#c5a351] transition hover:text-[#e0c275]">
                  View all
                  <ChevronRight size={15} />
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px]">
                  <thead>
                    <tr className="text-left text-[10px] uppercase tracking-[0.14em] text-[#637267]">
                      <th className="px-6 py-4 font-medium">Transaction</th>
                      <th className="px-6 py-4 font-medium">Reference</th>
                      <th className="px-6 py-4 font-medium">Date</th>
                      <th className="px-6 py-4 font-medium">Status</th>
                      <th className="px-6 py-4 text-right font-medium">Amount</th>
                    </tr>
                  </thead>

                  <tbody>
                    {transactions.map((transaction) => (
                      <tr
                        key={transaction.id}
                        className="border-t border-white/[0.05] text-sm"
                      >
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1a3020] text-[#c3a04c]">
                              <ReceiptText size={16} />
                            </div>

                            <span className="font-medium text-[#dce5de]">
                              {transaction.type}
                            </span>
                          </div>
                        </td>

                        <td className="px-6 py-5 text-[#718276]">
                          {transaction.id}
                        </td>

                        <td className="px-6 py-5 text-[#718276]">
                          {transaction.date}
                        </td>

                        <td className="px-6 py-5">
                          <span className="rounded-full bg-emerald-400/[0.08] px-3 py-1.5 text-[11px] font-medium text-emerald-300">
                            {transaction.status}
                          </span>
                        </td>

                        <td
                          className={`px-6 py-5 text-right font-semibold ${
                            transaction.amount.startsWith("+")
                              ? "text-emerald-300"
                              : "text-[#d6bc77]"
                          }`}
                        >
                          {transaction.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <footer className="mt-8 flex flex-col justify-between gap-3 border-t border-white/[0.05] py-6 text-[11px] text-[#59685d] sm:flex-row">
              <span>© 2026 MANGO&apos;O Investment</span>
              <span>Investor Portal • Secure environment</span>
            </footer>
          </div>
        </section>
      </div>
    </main>
  );
}