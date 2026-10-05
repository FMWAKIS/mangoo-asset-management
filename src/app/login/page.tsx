"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import { loginDemoUser } from "@/lib/demo-auth";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    try {
      setError("");
      setLoading(true);

      loginDemoUser(email, password);

      router.push("/investor/dashboard");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to sign in.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#06100a] text-white">
      <div className="grid min-h-screen lg:grid-cols-[1.15fr_560px]">
        <section className="relative hidden overflow-hidden lg:flex lg:flex-col lg:justify-between lg:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(195,160,77,0.18),transparent_32%),radial-gradient(circle_at_65%_72%,rgba(37,82,44,0.38),transparent_40%)]" />

          <div className="relative flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d5b45e] to-[#876822] text-[#071009]">
              <TrendingUp size={24} />
            </div>

            <div>
              <p className="text-xl font-semibold tracking-[0.08em]">
                MANGO&apos;O
              </p>
              <p className="text-[9px] uppercase tracking-[0.23em] text-[#c0a052]">
                Asset Management
              </p>
            </div>
          </div>

          <div className="relative max-w-2xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#c2a45b]">
              Private Investor Access
            </p>

            <h1 className="max-w-xl text-5xl font-semibold leading-[1.08] tracking-tight">
              Your portfolio.
              <br />
              One clear view.
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-[#849589]">
              Follow portfolio information, performance reports,
              transactions and account activity through your investor
              portal.
            </p>

            <div className="mt-9 flex items-center gap-3 text-sm text-[#8da091]">
              <ShieldCheck size={18} className="text-[#c5a654]" />
              Private investor portal
            </div>
          </div>

          <p className="relative text-xs text-[#56685b]">
            © 2026 MANGO&apos;O Asset Management
          </p>
        </section>

        <section className="flex items-center justify-center border-l border-white/[0.06] bg-[#08140c] px-5 py-10 sm:px-10">
          <div className="w-full max-w-[420px]">
            <div className="mb-9 lg:hidden">
              <p className="text-xl font-semibold tracking-[0.08em]">
                MANGO&apos;O
              </p>
              <p className="text-[9px] uppercase tracking-[0.23em] text-[#c0a052]">
                Asset Management
              </p>
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b99a4c]">
              Investor Portal
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Welcome back
            </h2>

            <p className="mt-2 text-sm text-[#748477]">
              Sign in to access your account.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="relative">
                <Mail
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#647468]"
                />

                <input
                  required
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="h-14 w-full rounded-2xl border border-white/[0.08] bg-white/[0.03] pl-11 pr-4 text-sm outline-none placeholder:text-[#526156] focus:border-[#ad9149]/50"
                />
              </div>

              <div className="relative">
                <LockKeyhole
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#647468]"
                />

                <input
                  required
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(event) =>
                    setPassword(event.target.value)
                  }
                  className="h-14 w-full rounded-2xl border border-white/[0.08] bg-white/[0.03] pl-11 pr-12 text-sm outline-none placeholder:text-[#526156] focus:border-[#ad9149]/50"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#69786d]"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>

              {error && (
                <div className="rounded-2xl border border-red-400/15 bg-red-500/[0.06] px-4 py-3 text-xs text-red-300">
                  {error}
                </div>
              )}

              <button
                disabled={loading}
                className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#d1af57] to-[#97752c] text-sm font-semibold text-[#09110b] transition hover:brightness-110 disabled:opacity-60"
              >
                {loading ? "Signing in..." : "Sign in"}
                {!loading && <ArrowRight size={17} />}
              </button>
            </form>

            <p className="mt-7 text-center text-sm text-[#758579]">
              New to MANGO&apos;O?{" "}
              <Link
                href="/register"
                className="font-medium text-[#d1b15f] hover:text-[#e2c779]"
              >
                Create account
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}