"use client";

import Link from "next/link";

import {
  ArrowDownToLine,
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  ChartNoAxesCombined,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  FileText,
  Landmark,
  PieChart,
  ShieldCheck,
  TrendingUp,
  WalletCards,
} from "lucide-react";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

/* =========================================================
   DEMO DATA
   Ces données seront remplacées plus tard par PostgreSQL.
========================================================= */

const portfolioHistory = [
  { month: "Apr", value: 10000 },
  { month: "May", value: 10400 },
  { month: "Jun", value: 10900 },
  { month: "Jul", value: 11450 },
  { month: "Aug", value: 11900 },
  { month: "Sep", value: 12500 },
];

const allocation = [
  {
    name: "Trading Portfolio",
    percentage: 55,
    amount: "$6,875.00",
  },
  {
    name: "Liquidity Reserve",
    percentage: 25,
    amount: "$3,125.00",
  },
  {
    name: "Strategic Allocation",
    percentage: 20,
    amount: "$2,500.00",
  },
];

const activity = [
  {
    title: "Portfolio valuation updated",
    description: "Current portfolio value recorded at $12,500.00",
    date: "27 Sep 2026",
    type: "update",
  },
  {
    title: "Monthly report generated",
    description: "September performance report available",
    date: "26 Sep 2026",
    type: "report",
  },
  {
    title: "Investment activated",
    description: "Initial capital successfully allocated",
    date: "01 Apr 2026",
    type: "investment",
  },
];

/* =========================================================
   COMPONENTS
========================================================= */

function MetricCard({
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
      className={`relative overflow-hidden rounded-[25px] border p-5 ${
        featured
          ? "border-[#b9974a]/30 bg-gradient-to-br from-[#1c3821] via-[#102817] to-[#091b0e]"
          : "border-white/[0.07] bg-white/[0.025]"
      }`}
    >
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#c5a14e]/10 blur-3xl" />

      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#78897c]">
            {title}
          </p>

          <p className="mt-4 text-2xl font-semibold tracking-tight">
            {value}
          </p>

          <p className="mt-2 text-xs text-[#718276]">
            {subtitle}
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#c6a554]/15 bg-[#c6a554]/10 text-[#d3b25d]">
          <Icon size={20} />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function MyInvestmentPage() {
  return (
    <div className="mx-auto max-w-[1600px] p-5 sm:p-7 xl:p-10">
      {/* =====================================================
          PAGE HEADER
      ====================================================== */}

      <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#b89a4d]">
            <BriefcaseBusiness size={15} />
            Investment Portfolio
          </div>

          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            My Investment
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#758579]">
            Review your investment capital, portfolio value,
            allocation, performance and account information.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/investor/performance"
            className="flex items-center gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.025] px-5 py-3 text-sm text-[#b4c0b7] transition hover:border-[#b59649]/30 hover:text-white"
          >
            <ChartNoAxesCombined size={17} />
            View Performance
          </Link>

          <Link
            href="/investor/withdraw"
            className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#d0ad56] to-[#98762d] px-5 py-3 text-sm font-semibold text-[#09110b] transition hover:brightness-110"
          >
            <ArrowDownToLine size={17} />
            Withdraw
          </Link>
        </div>
      </div>

      {/* =====================================================
          STATUS BANNER
      ====================================================== */}

      <div className="relative mb-5 overflow-hidden rounded-[28px] border border-[#355d3c]/30 bg-gradient-to-r from-[#112b18] via-[#0d2414] to-[#09190e] p-6">
        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#d1ad55]/10 blur-[60px]" />

        <div className="relative flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.08] text-emerald-300">
              <ShieldCheck size={22} />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold">
                  Investment Active
                </h2>

                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              </div>

              <p className="mt-1 max-w-2xl text-sm leading-6 text-[#809184]">
                Your investment account is active and currently
                included in the MANGO&apos;O Asset Management
                reporting cycle.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/[0.06] bg-black/10 px-5 py-3">
            <p className="text-[10px] uppercase tracking-[0.16em] text-[#68796d]">
              Investment ID
            </p>

            <p className="mt-1 font-mono text-sm font-medium text-[#d9c17c]">
              MAM-INV-2026-001
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          METRICS
      ====================================================== */}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          title="Initial Capital"
          value="$10,000.00"
          subtitle="Capital invested"
          icon={Landmark}
        />

        <MetricCard
          title="Current Value"
          value="$12,500.00"
          subtitle="+ $2,500.00 since inception"
          icon={CircleDollarSign}
          featured
        />

        <MetricCard
          title="Net Performance"
          value="+25.00%"
          subtitle="Since investment start"
          icon={TrendingUp}
        />

        <MetricCard
          title="Available Balance"
          value="$2,500.00"
          subtitle="Eligible account balance"
          icon={WalletCards}
        />
      </div>

      {/* =====================================================
          CHART + DETAILS
      ====================================================== */}

      <div className="mt-5 grid gap-5 xl:grid-cols-[1.6fr_1fr]">
        {/* CHART */}

        <div className="rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-5 sm:p-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <div>
              <p className="text-lg font-semibold">
                Portfolio Value
              </p>

              <p className="mt-1 text-xs text-[#718276]">
                Evolution of your portfolio since inception
              </p>
            </div>

            <div className="rounded-xl border border-[#b99a4c]/15 bg-[#b99a4c]/[0.07] px-3 py-2 text-xs font-medium text-[#d0b15f]">
              +25.00%
            </div>
          </div>

          <div className="mt-7 h-[330px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={portfolioHistory}>
                <defs>
                  <linearGradient
                    id="investmentGradient"
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
                    `$${value / 1000}k`
                  }
                />

                <Tooltip
                  contentStyle={{
                    background: "#0b1910",
                    border:
                      "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "14px",
                    color: "white",
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
                  strokeWidth={2.6}
                  fill="url(#investmentGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* INVESTMENT DETAILS */}

        <div className="rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold">
                Investment Details
              </p>

              <p className="mt-1 text-xs text-[#718276]">
                Account information
              </p>
            </div>

            <BriefcaseBusiness
              size={20}
              className="text-[#c3a14e]"
            />
          </div>

          <div className="mt-7 space-y-5">
            <DetailRow
              icon={CalendarDays}
              label="Start Date"
              value="01 April 2026"
            />

            <Separator />

            <DetailRow
              icon={Clock3}
              label="Investment Duration"
              value="5 months"
            />

            <Separator />

            <DetailRow
              icon={PieChart}
              label="Portfolio Type"
              value="Managed Portfolio"
            />

            <Separator />

            <DetailRow
              icon={ShieldCheck}
              label="Account Status"
              value="Active"
              success
            />

            <Separator />

            <DetailRow
              icon={CalendarDays}
              label="Next Reporting Date"
              value="30 September 2026"
            />
          </div>
        </div>
      </div>

      {/* =====================================================
          ALLOCATION + SUMMARY
      ====================================================== */}

      <div className="mt-5 grid gap-5 xl:grid-cols-[1.25fr_1fr]">
        {/* ALLOCATION */}

        <div className="rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold">
                Portfolio Allocation
              </p>

              <p className="mt-1 text-xs text-[#718276]">
                Current account allocation overview
              </p>
            </div>

            <PieChart
              size={20}
              className="text-[#c3a14e]"
            />
          </div>

          <div className="mt-8 space-y-7">
            {allocation.map((item) => (
              <div key={item.name}>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-[#dce5de]">
                      {item.name}
                    </p>

                    <p className="mt-1 text-xs text-[#65766a]">
                      {item.amount}
                    </p>
                  </div>

                  <span className="text-sm font-semibold text-[#d2b25f]">
                    {item.percentage}%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/[0.05]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#856826] to-[#d0ad56]"
                    style={{
                      width: `${item.percentage}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="mt-7 text-[11px] leading-5 text-[#5f7064]">
            Portfolio allocation shown here is demonstration data
            and will later be synchronized with the actual managed
            investment records.
          </p>
        </div>

        {/* ACCOUNT VALUE SUMMARY */}

        <div className="relative overflow-hidden rounded-[28px] border border-[#ad8e42]/20 bg-gradient-to-br from-[#19321e] to-[#091b0e] p-6">
          <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#cba74f]/10 blur-3xl" />

          <div className="relative">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8c9c90]">
              Portfolio Summary
            </p>

            <p className="mt-5 text-sm text-[#819185]">
              Current Portfolio Value
            </p>

            <p className="mt-2 text-4xl font-semibold tracking-tight text-white">
              $12,500.00
            </p>

            <div className="mt-3 flex items-center gap-2 text-sm text-emerald-300">
              <TrendingUp size={16} />
              +$2,500.00 since inception
            </div>

            <div className="my-7 h-px bg-white/[0.07]" />

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/[0.06] bg-black/10 p-4">
                <p className="text-[10px] uppercase tracking-[0.13em] text-[#66776b]">
                  Initial
                </p>

                <p className="mt-2 text-lg font-semibold">
                  $10,000
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-black/10 p-4">
                <p className="text-[10px] uppercase tracking-[0.13em] text-[#66776b]">
                  Gain
                </p>

                <p className="mt-2 text-lg font-semibold text-[#d9bf75]">
                  +25%
                </p>
              </div>
            </div>

            <Link
              href="/investor/performance"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#c6a24e] px-5 py-3.5 text-sm font-semibold text-[#08100a] transition hover:bg-[#d4b15b]"
            >
              Detailed Performance
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* =====================================================
          DOCUMENTS + ACTIVITY
      ====================================================== */}

      <div className="mt-5 grid gap-5 xl:grid-cols-[1fr_1.4fr]">
        {/* DOCUMENTS */}

        <div className="rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-6">
          <div>
            <p className="text-lg font-semibold">
              Investment Documents
            </p>

            <p className="mt-1 text-xs text-[#718276]">
              Portfolio and account documents
            </p>
          </div>

          <div className="mt-6 space-y-3">
            <DocumentItem
              title="Investment Summary"
              description="Portfolio overview"
              status="Available"
            />

            <DocumentItem
              title="September Report"
              description="Monthly performance report"
              status="Available"
            />

            <DocumentItem
              title="Account Statement"
              description="Latest investor statement"
              status="Available"
            />
          </div>
        </div>

        {/* ACTIVITY */}

        <div className="rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-6">
          <div>
            <p className="text-lg font-semibold">
              Investment Activity
            </p>

            <p className="mt-1 text-xs text-[#718276]">
              Recent portfolio events
            </p>
          </div>

          <div className="mt-7 space-y-1">
            {activity.map((item, index) => (
              <div
                key={item.title}
                className="relative flex gap-4 pb-7"
              >
                {index !== activity.length - 1 && (
                  <div className="absolute left-[19px] top-10 h-[calc(100%-25px)] w-px bg-white/[0.06]" />
                )}

                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#b99a4c]/15 bg-[#192d1d] text-[#c5a552]">
                  {item.type === "report" ? (
                    <FileText size={16} />
                  ) : item.type === "investment" ? (
                    <Landmark size={16} />
                  ) : (
                    <CheckCircle2 size={16} />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                    <p className="text-sm font-medium text-[#dce4de]">
                      {item.title}
                    </p>

                    <p className="text-[11px] text-[#637469]">
                      {item.date}
                    </p>
                  </div>

                  <p className="mt-1 text-xs leading-5 text-[#708175]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM ACTIONS
      ====================================================== */}

      <div className="mt-5 flex flex-col justify-between gap-4 rounded-[26px] border border-white/[0.07] bg-white/[0.025] p-5 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-medium">
            Need information about your investment?
          </p>

          <p className="mt-1 text-xs text-[#708175]">
            Contact MANGO&apos;O Asset Management support from
            your investor portal.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/investor/support"
            className="rounded-2xl border border-white/[0.09] px-5 py-3 text-sm text-[#a8b5aa] transition hover:text-white"
          >
            Contact Support
          </Link>

          <Link
            href="/investor/transactions"
            className="flex items-center gap-2 rounded-2xl bg-[#1b3520] px-5 py-3 text-sm font-medium text-[#dbc67f] transition hover:bg-[#23442a]"
          >
            View Transactions
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function DetailRow({
  icon: Icon,
  label,
  value,
  success = false,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  success?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-[#b99a4c]">
        <Icon size={17} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-xs text-[#6e7f73]">
          {label}
        </p>

        <div className="mt-1 flex items-center gap-2">
          {success && (
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          )}

          <p
            className={`truncate text-sm font-medium ${
              success
                ? "text-emerald-300"
                : "text-[#dbe4dd]"
            }`}
          >
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

function Separator() {
  return <div className="h-px bg-white/[0.06]" />;
}

function DocumentItem({
  title,
  description,
  status,
}: {
  title: string;
  description: string;
  status: string;
}) {
  return (
    <button className="group flex w-full items-center justify-between gap-4 rounded-2xl border border-white/[0.06] bg-[#08150c] p-4 text-left transition hover:border-[#b99a4c]/25">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1a3020] text-[#c3a04c]">
          <FileText size={17} />
        </div>

        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-[#dce4de]">
            {title}
          </p>

          <p className="mt-1 truncate text-xs text-[#68796d]">
            {description}
          </p>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <span className="hidden rounded-full bg-emerald-400/[0.08] px-3 py-1 text-[10px] text-emerald-300 sm:block">
          {status}
        </span>

        <ArrowUpRight
          size={16}
          className="text-[#728276] transition group-hover:text-[#d1b15d]"
        />
      </div>
    </button>
  );
}