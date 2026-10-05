import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function SectionPage({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto w-full max-w-[1600px] p-5 sm:p-7 xl:p-10">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b89a4d]">
          MANGO&apos;O Asset Management
        </p>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#758579]">
          {description}
        </p>
      </div>

      <div className="rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-6 sm:p-8">
        <p className="text-lg font-semibold text-white">
          {title}
        </p>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#78887c]">
          This module is connected to your investor portal. We will now
          progressively connect its actions and financial information to
          the application database.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/investor/dashboard"
            className="flex items-center gap-2 rounded-2xl border border-white/10 px-5 py-3 text-sm text-[#a8b4aa] transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Dashboard
          </Link>

          <Link
            href="/investor/profile"
            className="flex items-center gap-2 rounded-2xl bg-[#c5a14e] px-5 py-3 text-sm font-semibold text-[#09110b]"
          >
            Account Profile
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
