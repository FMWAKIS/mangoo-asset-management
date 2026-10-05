"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  ArrowDownToLine,
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  ChartNoAxesCombined,
  ChevronRight,
  CircleDollarSign,
  ReceiptText,
  ShieldCheck,
  TrendingUp,
  WalletCards,
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

import {
  DemoSession,
  getDemoSession,
} from "@/lib/demo-auth";

const portfolioData = [
  { month: "Apr", value: 10000 },
  { month: "May", value: 10400 },
  { month: "Jun", value: 10900 },
  { month: "Jul", value: 11450 },
  { month: "Aug", value: 11900 },
  { month: "Sep", value: 12500 },
];

const performanceData = [
  { month: "Apr", value: 2.4 },
  { month: "May", value: 4.0 },
  { month: "Jun", value: 4.8 },
  { month: "Jul", value: 5.0 },
  { month: "Aug", value: 3.9 },
  { month: "Sep", value: 5.0 },
];

const transactions = [
  {
    id: "MAM-00987",
    type: "Performance Credit",
    date: "27 Sep 2026",
    amount: "+$500.00",
  },
  {
    id: "MAM-00943",
    type: "Investment Deposit",
    date: "01 Sep 2026",
    amount: "+$10,000.00",
  },
  {
    id: "MAM-00881",
    type: "Withdrawal",
    date: "31 Aug 2026",
    amount: "-$250.00",
  },
];

function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  featured = false,
}: {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ElementType;
  featured?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[24px] border p-5 ${
        featured
          ? "border-[#b89546]/35 bg-gradient-to-br from-[#1b371f] via-[#122a18] to-[#0b1f10]"
          : "border-white/[0.07] bg-white/[0.025]"
      }`}
    >
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#c7a052]/10 blur-3xl" />

      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#77887c]">
            {title}
          </p>

          <p className="mt-4 text-2xl font-semibold">
            {value}
          </p>

          <p className="mt-2 text-xs text-[#718276]">
            {subtitle}
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#c8a75d]/10 text-[#d8b75f]">
          <Icon size={20} />
        </div>
      </div>
    </div>
  );
}

export default function InvestorDashboardPage() {
  const [session, setSession] =
    useState<DemoSession | null>(null);

  useEffect(() => {
    setSession(getDemoSession());
  }, []);

  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-[1600px] p-5 sm:p-7 xl:p-10">
        {/* HEADER */}

        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm text-[#718276]">
              Investor Dashboard
            </p>

            <h1 className="mt-2 text-3xl font-semibold tracking-tight">
              Welcome back, {session?.firstName || "Investor"}
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#758579]">
              Monitor your MANGO&apos;O Asset Management portfolio,
              performance and account activity.
            </p>
          </div>

          <Link
            href="/investor/investments"
            className="flex w-fit items-center gap-2 rounded-2xl bg-gradient-to-r from-[#d0ad56] to-[#98762d] px-5 py-3 text-sm font-semibold text-[#09110b]"
          >
            View Investment
            <ArrowUpRight size={17} />
          </Link>
        </div>

        {/* STATUS */}

        <div className="mb-5 flex flex-col justify-between gap-4 rounded-[26px] border border-[#31583a]/30 bg-gradient-to-r from-[#112a18] to-[#08180d] p-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/[0.08] text-emerald-300">
              <ShieldCheck size={22} />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <p className="font-semibold">
                  Portfolio Active
                </p>

                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>

              <p className="mt-1 text-xs text-[#718276]">
                Your investment account is currently active.
              </p>
            </div>
          </div>

          <Link
            href="/investor/profile"
            className="flex items-center gap-1 text-xs text-[#c8a752]"
          >
            Account details
            <ChevronRight size={15} />
          </Link>
        </div>

        {/* STATS */}

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Current Value"
            value="$12,500.00"
            subtitle="+$2,500.00 since inception"
            icon={CircleDollarSign}
            featured
          />

          <StatCard
            title="Total Profit"
            value="$2,500.00"
            subtitle="Portfolio gain"
            icon={TrendingUp}
          />

          <StatCard
            title="Monthly Return"
            value="5.00%"
            subtitle="+$500.00 this period"
            icon={ChartNoAxesCombined}
          />

          <StatCard
            title="Available Balance"
            value="$2,500.00"
            subtitle="Available account balance"
            icon={WalletCards}
          />
        </div>

        {/* CHARTS */}

        <div className="mt-5 grid gap-5 xl:grid-cols-[1.6fr_1fr]">
          <div className="rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold">
                  Portfolio Evolution
                </p>

                <p className="mt-1 text-xs text-[#718276]">
                  Last six months
                </p>
              </div>

              <Link
                href="/investor/performance"
                className="flex items-center gap-1 text-xs text-[#c7a653]"
              >
                Details
                <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="mt-7 h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={portfolioData}>
                  <defs>
                    <linearGradient
                      id="dashboardGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="5%"
                        stopColor="#d0ad56"
                        stopOpacity={0.4}
                      />

                      <stop
                        offset="95%"
                        stopColor="#d0ad56"
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
                    tick={{
                      fill: "#708175",
                      fontSize: 11,
                    }}
                  />

                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fill: "#708175",
                      fontSize: 11,
                    }}
                    tickFormatter={(value) =>
                      `$${Number(value) / 1000}k`
                    }
                  />

                  <Tooltip
                    contentStyle={{
                      background: "#0b1910",
                      border:
                        "1px solid rgba(255,255,255,.1)",
                      borderRadius: 14,
                    }}
                  />

                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#d0ad56"
                    strokeWidth={2.6}
                    fill="url(#dashboardGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-6">
            <p className="text-lg font-semibold">
              Monthly Performance
            </p>

            <p className="mt-1 text-xs text-[#718276]">
              Return per month
            </p>

            <div className="mt-7 h-[320px]">
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
                    tick={{
                      fill: "#708175",
                      fontSize: 11,
                    }}
                  />

                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fill: "#708175",
                      fontSize: 11,
                    }}
                    tickFormatter={(value) =>
                      `${Number(value)}%`
                    }
                  />

                  <Tooltip
                    contentStyle={{
                      background: "#0b1910",
                      border:
                        "1px solid rgba(255,255,255,.1)",
                      borderRadius: 14,
                    }}
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

        {/* ACTIONS */}

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          <Link
            href="/investor/investments"
            className="group rounded-[26px] border border-white/[0.07] bg-white/[0.025] p-6 transition hover:border-[#b79648]/30"
          >
            <BriefcaseBusiness
              size={22}
              className="text-[#c6a34f]"
            />

            <p className="mt-5 text-lg font-semibold">
              My Investment
            </p>

            <p className="mt-2 text-sm text-[#718276]">
              View your capital, portfolio and account details.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-[#d0af5a]">
              Open
              <ArrowUpRight size={15} />
            </div>
          </Link>

          <Link
            href="/investor/performance"
            className="group rounded-[26px] border border-white/[0.07] bg-white/[0.025] p-6 transition hover:border-[#b79648]/30"
          >
            <ChartNoAxesCombined
              size={22}
              className="text-[#c6a34f]"
            />

            <p className="mt-5 text-lg font-semibold">
              Performance
            </p>

            <p className="mt-2 text-sm text-[#718276]">
              Review portfolio performance and reports.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-[#d0af5a]">
              Open
              <ArrowUpRight size={15} />
            </div>
          </Link>

          <Link
            href="/investor/withdraw"
            className="group rounded-[26px] border border-[#ad8d42]/20 bg-gradient-to-br from-[#19321e] to-[#0a1c0f] p-6"
          >
            <ArrowDownToLine
              size={22}
              className="text-[#d2b15d]"
            />

            <p className="mt-5 text-lg font-semibold">
              Withdraw
            </p>

            <p className="mt-2 text-sm text-[#7e8f82]">
              Submit a withdrawal request.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-[#d0af5a]">
              Request withdrawal
              <ArrowUpRight size={15} />
            </div>
          </Link>
        </div>

        {/* TRANSACTIONS */}

        <div className="mt-5 overflow-hidden rounded-[28px] border border-white/[0.07] bg-white/[0.025]">
          <div className="flex items-center justify-between border-b border-white/[0.06] p-6">
            <div>
              <p className="text-lg font-semibold">
                Recent Transactions
              </p>

              <p className="mt-1 text-xs text-[#718276]">
                Latest account activity
              </p>
            </div>

            <Link
              href="/investor/transactions"
              className="flex items-center gap-1 text-xs text-[#c5a351]"
            >
              View all
              <ChevronRight size={15} />
            </Link>
          </div>

          <div className="divide-y divide-white/[0.05]">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex flex-col justify-between gap-4 px-6 py-5 sm:flex-row sm:items-center"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1a3020] text-[#c3a04c]">
                    <ReceiptText size={17} />
                  </div>

                  <div>
                    <p className="text-sm font-medium">
                      {transaction.type}
                    </p>

                    <p className="mt-1 text-xs text-[#68796d]">
                      {transaction.id} • {transaction.date}
                    </p>
                  </div>
                </div>

                <p
                  className={`font-semibold ${
                    transaction.amount.startsWith("+")
                      ? "text-emerald-300"
                      : "text-[#d6bc77]"
                  }`}
                >
                  {transaction.amount}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* REPORTING */}

        <div className="mt-5 flex flex-col justify-between gap-4 rounded-[26px] border border-white/[0.07] bg-white/[0.025] p-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#c5a14e]/10 text-[#d1b15d]">
              <CalendarDays size={19} />
            </div>

            <div>
              <p className="text-sm font-medium">
                Next Reporting Date
              </p>

              <p className="mt-1 text-xs text-[#708175]">
                30 September 2026
              </p>
            </div>
          </div>

          <Link
            href="/investor/performance"
            className="flex items-center gap-2 text-sm text-[#c5a451]"
          >
            View reports
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}