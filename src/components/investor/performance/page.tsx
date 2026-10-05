"use client";

import Link from "next/link";

import {
  ArrowDownRight,
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  FileText,
  Info,
  LineChart,
  PieChart,
  ShieldCheck,
  TrendingDown,
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

/* =========================================================
   DEMO DATA
   Ces données seront plus tard reliées à PostgreSQL.
========================================================= */

const portfolioPerformance = [
  { month: "Apr", portfolio: 10000, benchmark: 10000 },
  { month: "May", portfolio: 10400, benchmark: 10180 },
  { month: "Jun", portfolio: 10900, benchmark: 10300 },
  { month: "Jul", portfolio: 11450, benchmark: 10420 },
  { month: "Aug", portfolio: 11900, benchmark: 10570 },
  { month: "Sep", portfolio: 12500, benchmark: 10700 },
];

const monthlyReturns = [
  { month: "Apr", return: 2.4 },
  { month: "May", return: 4.0 },
  { month: "Jun", return: 4.8 },
  { month: "Jul", return: 5.0 },
  { month: "Aug", return: 3.9 },
  { month: "Sep", return: 5.0 },
];

const reportingPeriods = [
  {
    period: "September 2026",
    opening: "$11,900.00",
    closing: "$12,500.00",
    change: "+$600.00",
    return: "+5.04%",
    status: "Available",
  },
  {
    period: "August 2026",
    opening: "$11,450.00",
    closing: "$11,900.00",
    change: "+$450.00",
    return: "+3.93%",
    status: "Available",
  },
  {
    period: "July 2026",
    opening: "$10,900.00",
    closing: "$11,450.00",
    change: "+$550.00",
    return: "+5.05%",
    status: "Available",
  },
  {
    period: "June 2026",
    opening: "$10,400.00",
    closing: "$10,900.00",
    change: "+$500.00",
    return: "+4.81%",
    status: "Available",
  },
];

const highlights = [
  {
    title: "Best Month",
    value: "5.05%",
    subtitle: "July 2026",
    icon: TrendingUp,
  },
  {
    title: "Average Monthly Return",
    value: "4.19%",
    subtitle: "Last 6 months",
    icon: BarChart3,
  },
  {
    title: "Portfolio Growth",
    value: "+25.00%",
    subtitle: "Since inception",
    icon: LineChart,
  },
  {
    title: "Current Value",
    value: "$12,500.00",
    subtitle: "As of 27 Sep 2026",
    icon: CircleDollarSign,
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function PerformancePage() {
  return (
    <div className="mx-auto max-w-[1600px] p-5 sm:p-7 xl:p-10">
      {/* HEADER */}

      <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#b89a4d]">
            <LineChart size={15} />
            Portfolio Analytics
          </div>

          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Performance
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#758579]">
            Review historical portfolio performance, reporting periods
            and investment results.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/investor/investments"
            className="flex items-center gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.025] px-5 py-3 text-sm text-[#b4c0b7] transition hover:border-[#b59649]/30 hover:text-white"
          >
            <ArrowLeft size={17} />
            My Investment
          </Link>

          <Link
            href="/investor/withdraw"
            className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#d0ad56] to-[#98762d] px-5 py-3 text-sm font-semibold text-[#09110b] transition hover:brightness-110"
          >
            Withdraw
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>

      {/* PERFORMANCE SUMMARY */}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {highlights.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-[25px] border border-white/[0.07] bg-white/[0.025] p-5"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#c4a04d]/10 blur-3xl" />

              <div className="relative flex items-start justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#748579]">
                    {item.title}
                  </p>

                  <p className="mt-4 text-2xl font-semibold">
                    {item.value}
                  </p>

                  <p className="mt-2 text-xs text-[#6f8074]">
                    {item.subtitle}
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#c4a04d]/15 bg-[#c4a04d]/10 text-[#d0b15e]">
                  <Icon size={20} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* MAIN CHARTS */}

      <div className="mt-5 grid gap-5 xl:grid-cols-[1.6fr_1fr]">
        {/* PORTFOLIO VS BENCHMARK */}

        <div className="rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-5 sm:p-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <div>
              <p className="text-lg font-semibold">
                Portfolio Growth
              </p>

              <p className="mt-1 text-xs text-[#718276]">
                Portfolio value versus reference benchmark
              </p>
            </div>

            <div className="flex items-center gap-4 text-[11px]">
              <div className="flex items-center gap-2 text-[#cdb063]">
                <span className="h-2 w-2 rounded-full bg-[#d0ad56]" />
                Portfolio
              </div>

              <div className="flex items-center gap-2 text-[#77887c]">
                <span className="h-2 w-2 rounded-full bg-[#5f7064]" />
                Benchmark
              </div>
            </div>
          </div>

          <div className="mt-7 h-[340px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={portfolioPerformance}>
                <defs>
                  <linearGradient
                    id="portfolioPerformanceGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="#d0ad56"
                      stopOpacity={0.35}
                    />

                    <stop
                      offset="95%"
                      stopColor="#d0ad56"
                      stopOpacity={0}
                    />
                  </linearGradient>

                  <linearGradient
                    id="benchmarkGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="#6f8074"
                      stopOpacity={0.18}
                    />

                    <stop
                      offset="95%"
                      stopColor="#6f8074"
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
                    color: "#ffffff",
                  }}
                  formatter={(value, name) => [
                    `$${Number(value).toLocaleString()}`,
                    name === "portfolio"
                      ? "Portfolio"
                      : "Benchmark",
                  ]}
                />

                <Area
                  type="monotone"
                  dataKey="benchmark"
                  stroke="#6f8074"
                  strokeWidth={2}
                  fill="url(#benchmarkGradient)"
                />

                <Area
                  type="monotone"
                  dataKey="portfolio"
                  stroke="#d0ad56"
                  strokeWidth={2.7}
                  fill="url(#portfolioPerformanceGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* MONTHLY RETURNS */}

        <div className="rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-5 sm:p-6">
          <div>
            <p className="text-lg font-semibold">
              Monthly Returns
            </p>

            <p className="mt-1 text-xs text-[#718276]">
              Performance by reporting month
            </p>
          </div>

          <div className="mt-7 h-[340px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyReturns}>
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
                  tickFormatter={(value) => `${value}%`}
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
                  dataKey="return"
                  fill="#b99a4c"
                  radius={[8, 8, 3, 3]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* PERFORMANCE INSIGHTS */}

      <div className="mt-5 grid gap-5 xl:grid-cols-[1.15fr_1fr_1fr]">
        {/* SINCE INCEPTION */}

        <div className="relative overflow-hidden rounded-[28px] border border-[#ad8e42]/20 bg-gradient-to-br from-[#1a351f] to-[#091b0e] p-6">
          <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#c9a44d]/10 blur-3xl" />

          <div className="relative">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#819185]">
              Since Inception
            </p>

            <p className="mt-5 text-sm text-[#87978b]">
              Net Portfolio Growth
            </p>

            <div className="mt-2 flex items-end gap-3">
              <p className="text-4xl font-semibold tracking-tight">
                +25.00%
              </p>

              <div className="mb-1 flex items-center gap-1 text-sm text-emerald-300">
                <TrendingUp size={15} />
                Positive
              </div>
            </div>

            <p className="mt-3 text-sm text-[#758579]">
              $10,000.00 → $12,500.00
            </p>

            <div className="my-7 h-px bg-white/[0.07]" />

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/[0.06] bg-black/10 p-4">
                <p className="text-[10px] uppercase tracking-[0.12em] text-[#65766a]">
                  Gain
                </p>

                <p className="mt-2 text-lg font-semibold text-[#d9bf75]">
                  +$2,500
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-black/10 p-4">
                <p className="text-[10px] uppercase tracking-[0.12em] text-[#65766a]">
                  Period
                </p>

                <p className="mt-2 text-lg font-semibold">
                  5 Months
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BEST PERIOD */}

        <div className="rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-lg font-semibold">
                Strongest Period
              </p>

              <p className="mt-1 text-xs text-[#718276]">
                Highest reported monthly return
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400/[0.08] text-emerald-300">
              <TrendingUp size={20} />
            </div>
          </div>

          <p className="mt-8 text-sm text-[#7a8a7e]">
            July 2026
          </p>

          <p className="mt-1 text-3xl font-semibold text-emerald-300">
            +5.05%
          </p>

          <p className="mt-3 text-sm text-[#738378]">
            Portfolio value increased from $10,900.00 to
            $11,450.00 during the period.
          </p>

          <div className="mt-6 rounded-2xl border border-white/[0.06] bg-[#07140b] p-4">
            <p className="text-[10px] uppercase tracking-[0.15em] text-[#617166]">
              Period Gain
            </p>

            <p className="mt-2 text-lg font-semibold">
              +$550.00
            </p>
          </div>
        </div>

        {/* RISK / STATUS */}

        <div className="rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-lg font-semibold">
                Reporting Status
              </p>

              <p className="mt-1 text-xs text-[#718276]">
                Current reporting information
              </p>
            </div>

            <ShieldCheck
              size={20}
              className="text-[#c5a451]"
            />
          </div>

          <div className="mt-7 space-y-5">
            <StatusRow
              label="Portfolio Status"
              value="Active"
              success
            />

            <Separator />

            <StatusRow
              label="Last Reporting Date"
              value="27 Sep 2026"
            />

            <Separator />

            <StatusRow
              label="Next Reporting Date"
              value="30 Sep 2026"
            />

            <Separator />

            <StatusRow
              label="Reporting Frequency"
              value="Monthly"
            />
          </div>
        </div>
      </div>

      {/* REPORTING TABLE */}

      <div className="mt-5 overflow-hidden rounded-[28px] border border-white/[0.07] bg-white/[0.025]">
        <div className="flex flex-col justify-between gap-4 border-b border-white/[0.06] px-5 py-5 sm:flex-row sm:items-center sm:px-6">
          <div>
            <p className="text-lg font-semibold">
              Performance History
            </p>

            <p className="mt-1 text-xs text-[#718276]">
              Historical reporting periods
            </p>
          </div>

          <Link
            href="/investor/transactions"
            className="flex w-fit items-center gap-2 text-xs font-medium text-[#c5a351] transition hover:text-[#e0c275]"
          >
            View transactions
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px]">
            <thead>
              <tr className="text-left text-[10px] uppercase tracking-[0.14em] text-[#637267]">
                <th className="px-6 py-4 font-medium">
                  Reporting Period
                </th>

                <th className="px-6 py-4 font-medium">
                  Opening Value
                </th>

                <th className="px-6 py-4 font-medium">
                  Closing Value
                </th>

                <th className="px-6 py-4 font-medium">
                  Change
                </th>

                <th className="px-6 py-4 font-medium">
                  Return
                </th>

                <th className="px-6 py-4 font-medium">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {reportingPeriods.map((item) => (
                <tr
                  key={item.period}
                  className="border-t border-white/[0.05] text-sm transition hover:bg-white/[0.015]"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1a3020] text-[#c3a04c]">
                        <CalendarDays size={16} />
                      </div>

                      <span className="font-medium text-[#dce5de]">
                        {item.period}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-5 text-[#87978b]">
                    {item.opening}
                  </td>

                  <td className="px-6 py-5 text-[#d7e0d9]">
                    {item.closing}
                  </td>

                  <td className="px-6 py-5 font-medium text-emerald-300">
                    {item.change}
                  </td>

                  <td className="px-6 py-5 font-medium text-[#ddc477]">
                    {item.return}
                  </td>

                  <td className="px-6 py-5">
                    <span className="rounded-full bg-emerald-400/[0.08] px-3 py-1.5 text-[11px] text-emerald-300">
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* REPORT DOCUMENTS */}

      <div className="mt-5 grid gap-5 xl:grid-cols-[1.25fr_1fr]">
        <div className="rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-6">
          <div>
            <p className="text-lg font-semibold">
              Performance Reports
            </p>

            <p className="mt-1 text-xs text-[#718276]">
              Available investor reporting documents
            </p>
          </div>

          <div className="mt-6 space-y-3">
            <ReportItem
              title="September 2026 Performance Report"
              description="Monthly portfolio performance"
            />

            <ReportItem
              title="August 2026 Performance Report"
              description="Monthly portfolio performance"
            />

            <ReportItem
              title="Portfolio Overview"
              description="Investment performance since inception"
            />
          </div>
        </div>

        {/* NOTE */}

        <div className="rounded-[28px] border border-[#b29348]/15 bg-[#0d1f12] p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#c5a14e]/10 text-[#d0b15e]">
              <Info size={19} />
            </div>

            <div>
              <p className="text-lg font-semibold">
                Performance Information
              </p>

              <p className="mt-3 text-sm leading-6 text-[#819185]">
                Performance figures shown in this development
                interface are demonstration data. Once the platform
                is connected to the production database, figures will
                be generated from the actual portfolio records linked
                to the investor account.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-white/[0.06] bg-black/10 p-4">
            <div className="flex items-center gap-3">
              <CheckCircle2
                size={17}
                className="text-emerald-300"
              />

              <div>
                <p className="text-sm font-medium">
                  Reporting cycle active
                </p>

                <p className="mt-1 text-xs text-[#697a6e]">
                  Next reporting date: 30 September 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM ACTIONS */}

      <div className="mt-5 flex flex-col justify-between gap-4 rounded-[26px] border border-white/[0.07] bg-white/[0.025] p-5 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-medium">
            Continue managing your investor account
          </p>

          <p className="mt-1 text-xs text-[#708175]">
            Review your portfolio details or account transactions.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/investor/investments"
            className="flex items-center gap-2 rounded-2xl border border-white/[0.09] px-5 py-3 text-sm text-[#a8b5aa] transition hover:text-white"
          >
            <PieChart size={16} />
            My Investment
          </Link>

          <Link
            href="/investor/transactions"
            className="flex items-center gap-2 rounded-2xl bg-[#1b3520] px-5 py-3 text-sm font-medium text-[#dbc67f] transition hover:bg-[#23442a]"
          >
            Transactions
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

function StatusRow({
  label,
  value,
  success = false,
}: {
  label: string;
  value: string;
  success?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-xs text-[#6f8074]">
        {label}
      </span>

      <div className="flex items-center gap-2">
        {success && (
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        )}

        <span
          className={`text-sm font-medium ${
            success
              ? "text-emerald-300"
              : "text-[#d7e0d9]"
          }`}
        >
          {value}
        </span>
      </div>
    </div>
  );
}

function Separator() {
  return <div className="h-px bg-white/[0.06]" />;
}

function ReportItem({
  title,
  description,
}: {
  title: string;
  description: string;
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

      <ArrowUpRight
        size={16}
        className="shrink-0 text-[#728276] transition group-hover:text-[#d1b15d]"
      />
    </button>
  );
}