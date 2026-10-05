"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowDownToLine,
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  ChartNoAxesCombined,
  ChevronRight,
  CircleDollarSign,
  FileText,
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

/* =========================================================
   DEMO DATA
   Plus tard ces valeurs viendront de PostgreSQL.
========================================================= */

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
    status: "Completed",
  },
  {
    id: "MAM-00943",
    type: "Investment Deposit",
    date: "01 Sep 2026",
    amount: "+$10,000.00",
    status: "Completed",
  },
  {
    id: "MAM-00881",
    type: "Withdrawal",
    date: "31 Aug 2026",
    amount: "-$250.00",
    status: "Completed",
  },
];

/* =========================================================
   SMALL COMPONENT
========================================================= */

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
      className={`relative overflow-hidden rounded-[25px] border p-5 transition duration-300 hover:-translate-y-1 ${
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

          <p className="mt-4 text-2xl font-semibold tracking-tight">
            {value}
          </p>

          <p className="mt-2 text-xs text-[#718276]">
            {subtitle}
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#c8a75d]/15 bg-[#c8a75d]/10 text-[#d8b75f]">
          <Icon size={20} />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   DASHBOARD
========================================================= */

export default function InvestorDashboardPage() {
  const [session, setSession] = useState<DemoSession | null>(null);

  useEffect(() => {
    setSession(getDemoSession());
  }, []);

  const firstName = session?.firstName || "Investor";

  return (
    <div className="mx-auto max-w-[1600px] p-5 sm:p-7 xl:p-10">
      {/* =====================================================
          WELCOME
      ====================================================== */}

      <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="mb-2 text-sm text-[#718276]">
            Sunday, 27 September 2026
          </p>

          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Welcome back, {firstName}
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#758579]">
            Here&apos;s an overview of your MANGO&apos;O Asset
            Management portfolio and recent account activity.
          </p>
        </div>

        <Link
          href="/investor/investments"
          className="flex w-fit items-center gap-2 rounded-2xl bg-gradient-to-r from-[#d0ad56] to-[#98762d] px-5 py-3 text-sm font-semibold text-[#09110b] transition hover:brightness-110"
        >
          View Investment
          <ArrowUpRight size={17} />
        </Link>
      </div>

      {/* =====================================================
          PORTFOLIO STATUS
      ====================================================== */}

      <div className="mb-5 flex flex-col justify-between gap-4 rounded-[26px] border border-[#31583a]/30 bg-gradient-to-r from-[#112a18] via-[#0d2113] to-[#08180d] p-5 sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/[0.08] text-emerald-300">
            <ShieldCheck size={22} />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <p className="font-semibold">
                Portfolio Active
              </p>

              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            </div>

            <p className="mt-1 text-xs text-[#718276]">
              Your investment account is active and included in the
              current reporting cycle.
            </p>
          </div>
        </div>

        <Link
          href="/investor/profile"
          className="flex w-fit items-center gap-2 text-xs font-medium text-[#c8a752] hover:text-[#e2c677]"
        >
          Account details
          <ChevronRight size={15} />
        </Link>
      </div>

      {/* =====================================================
          STATS
      ====================================================== */}

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

      {/* =====================================================
          CHARTS
      ====================================================== */}

      <div className="mt-5 grid gap-5 xl:grid-cols-[1.6fr_1fr]">
        {/* PORTFOLIO EVOLUTION */}

        <div className="rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-5 sm:p-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <div>
              <p className="text-lg font-semibold">
                Portfolio Evolution
              </p>

              <p className="mt-1 text-xs text-[#718276]">
                Investment value over the last six months
              </p>
            </div>

            <Link
              href="/investor/performance"
              className="flex items-center gap-1 text-xs font-medium text-[#c7a653]"
            >
              Full performance
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="mt-7 h-[330px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={portfolioData}>
                <defs>
                  <linearGradient
                    id="dashboardPortfolioGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="#d0ad56"
                      stopOpacity={0.38}
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
                      "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "14px",
                    color: "#ffffff",
                  }}
                  formatter={(value) => [
                    `$${Number(value).toLocaleString()}`,
                    "Portfolio Value",
                  ]}
                />

                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#d0ad56"
                  strokeWidth={2.7}
                  fill="url(#dashboardPortfolioGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* MONTHLY PERFORMANCE */}

        <div className="rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-5 sm:p-6">
          <div>
            <p className="text-lg font-semibold">
              Monthly Performance
            </p>

            <p className="mt-1 text-xs text-[#718276]">
              Portfolio return by reporting month
            </p>
          </div>

          <div className="mt-7 h-[330px]">
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
                      "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "14px",
                    color: "#ffffff",
                  }}
                  formatter={(value) => [
                    `${Number(value).toFixed(2)}%`,
                    "Return",
                  ]}
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

      {/* =====================================================
          QUICK MODULES
      ====================================================== */}

      <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {/* INVESTMENT */}

        <div className="rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-lg font-semibold">
                My Investment
              </p>

              <p className="mt-1 text-xs text-[#718276]">
                Portfolio account summary
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#c4a14e]/10 text-[#d1b15e]">
              <BriefcaseBusiness size={20} />
            </div>
          </div>

          <div className="mt-7 space-y-4">
            <SummaryRow
              label="Initial Investment"
              value="$10,000.00"
            />

            <SummaryRow
              label="Start Date"
              value="01 Apr 2026"
            />

            <SummaryRow
              label="Portfolio Type"
              value="Managed"
            />

            <SummaryRow
              label="Status"
              value="Active"
              positive
            />
          </div>

          <Link
            href="/investor/investments"
            className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-sm text-[#bbc5bd] transition hover:border-[#b79648]/30 hover:text-white"
          >
            Investment Details
            <ArrowUpRight size={15} />
          </Link>
        </div>

        {/* WITHDRAW */}

        <div className="relative overflow-hidden rounded-[28px] border border-[#b39347]/20 bg-gradient-to-br from-[#1a321e] to-[#0b1d10] p-6">
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#d1ae55]/10 blur-3xl" />

          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d0ae58]/20 bg-[#d0ae58]/10 text-[#dcbd70]">
              <ArrowDownToLine size={21} />
            </div>

            <p className="mt-6 text-lg font-semibold">
              Withdraw Funds
            </p>

            <p className="mt-2 text-sm leading-6 text-[#829185]">
              Submit and monitor withdrawal requests from your
              investor account.
            </p>

            <p className="mt-6 text-xs text-[#718276]">
              Available Balance
            </p>

            <p className="mt-1 text-3xl font-semibold text-[#dfc77f]">
              $2,500.00
            </p>

            <Link
              href="/investor/withdraw"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#c8a452] px-4 py-3 text-sm font-semibold text-[#09110b] transition hover:bg-[#d6b45e]"
            >
              Request Withdrawal
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* NEXT REPORT */}

        <div className="rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-lg font-semibold">
                Next Reporting Date
              </p>

              <p className="mt-1 text-xs text-[#718276]">
                Portfolio reporting cycle
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#c9a552]/10 text-[#c9a552]">
              <CalendarDays size={20} />
            </div>
          </div>

          <div className="mt-7 rounded-2xl border border-white/[0.06] bg-[#07140b] p-5">
            <p className="text-[10px] uppercase tracking-[0.14em] text-[#748478]">
              Scheduled
            </p>

            <p className="mt-2 text-2xl font-semibold">
              30 September 2026
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Reporting active
            </div>
          </div>

          <Link
            href="/investor/performance"
            className="mt-5 flex items-center justify-center gap-2 text-sm font-medium text-[#c5a452]"
          >
            Performance Reports
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>

      {/* =====================================================
          RECENT TRANSACTIONS
      ====================================================== */}

      <div className="mt-5 overflow-hidden rounded-[28px] border border-white/[0.07] bg-white/[0.025]">
        <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-5 sm:px-6">
          <div>
            <p className="text-lg font-semibold">
              Recent Transactions
            </p>

            <p className="mt-1 text-xs text-[#718276]">
              Latest investor account activity
            </p>
          </div>

          <Link
            href="/investor/transactions"
            className="flex items-center gap-1 text-xs font-medium text-[#c5a351] transition hover:text-[#e0c275]"
          >
            View all
            <ChevronRight size={15} />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px]">
            <thead>
              <tr className="text-left text-[10px] uppercase tracking-[0.14em] text-[#637267]">
                <th className="px-6 py-4 font-medium">
                  Transaction
                </th>

                <th className="px-6 py-4 font-medium">
                  Reference
                </th>

                <th className="px-6 py-4 font-medium">
                  Date
                </th>

                <th className="px-6 py-4 font-medium">
                  Status
                </th>

                <th className="px-6 py-4 text-right font-medium">
                  Amount
                </th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="border-t border-white/[0.05] text-sm transition hover:bg-white/[0.015]"
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

                  <td className="px-6 py-5 font-mono text-xs text-[#718276]">
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

      {/* =====================================================
          REPORT + SUPPORT
      ====================================================== */}

      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <div className="flex items-center justify-between gap-5 rounded-[26px] border border-white/[0.07] bg-white/[0.025] p-5">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#c5a14e]/10 text-[#d1b15d]">
              <FileText size={19} />
            </div>

            <div>
              <p className="text-sm font-medium">
                September Performance Report
              </p>

              <p className="mt-1 text-xs text-[#6e7f73]">
                Latest portfolio report
              </p>
            </div>
          </div>

          <Link
            href="/investor/performance"
            className="text-[#c6a451]"
          >
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="flex flex-col justify-between gap-4 rounded-[26px] border border-white/[0.07] bg-white/[0.025] p-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium">
              Need assistance?
            </p>

            <p className="mt-1 text-xs text-[#708175]">
              Contact MANGO&apos;O Asset Management support.
            </p>
          </div>

          <Link
            href="/investor/support"
            className="flex w-fit items-center gap-2 rounded-xl border border-white/[0.08] px-4 py-2.5 text-xs text-[#b8c3ba] hover:text-white"
          >
            Contact Support
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="mt-8 flex flex-col justify-between gap-3 border-t border-white/[0.05] py-6 text-[11px] text-[#59685d] sm:flex-row">
        <span>
          © 2026 MANGO&apos;O Asset Management
        </span>

        <span>
          Private Investor Portal
        </span>
      </footer>
    </div>
  );
}

/* =========================================================
   SUMMARY ROW
========================================================= */

function SummaryRow({
  label,
  value,
  positive = false,
}: {
  label: string;
  value: string;
  positive?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/[0.05] pb-4 last:border-0 last:pb-0">
      <span className="text-xs text-[#718276]">
        {label}
      </span>

      <div className="flex items-center gap-2">
        {positive && (
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        )}

        <span
          className={`text-sm font-medium ${
            positive
              ? "text-emerald-300"
              : "text-[#d8e1da]"
          }`}
        >
          {value}
        </span>
      </div>
    </div>
  );
}