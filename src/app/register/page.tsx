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
  Phone,
  TrendingUp,
  UserRound,
} from "lucide-react";

import { registerDemoUser } from "@/lib/demo-auth";

export default function RegisterPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  function update(field: keyof typeof form, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setError("");

    if (form.password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      registerDemoUser({
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
        password: form.password,
      });

      router.push("/investor/dashboard");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to create account.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#06100a] text-white">
      <div className="grid min-h-screen lg:grid-cols-[1fr_560px]">
        <section className="relative hidden overflow-hidden lg:flex lg:flex-col lg:justify-between lg:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(187,151,70,0.17),transparent_34%),radial-gradient(circle_at_65%_70%,rgba(44,91,51,0.35),transparent_38%)]" />

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
              Investor Portal
            </p>

            <h1 className="max-w-xl text-5xl font-semibold leading-[1.08] tracking-tight">
              Build and monitor your investment relationship.
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-[#849589]">
              Access your portfolio information, performance reports,
              transactions and account services from one private portal.
            </p>
          </div>

          <p className="relative text-xs text-[#56685b]">
            © 2026 MANGO&apos;O Asset Management
          </p>
        </section>

        <section className="flex items-center justify-center border-l border-white/[0.06] bg-[#08140c] px-5 py-10 sm:px-10">
          <div className="w-full max-w-[430px]">
            <div className="mb-9 lg:hidden">
              <p className="text-xl font-semibold tracking-[0.08em]">
                MANGO&apos;O
              </p>
              <p className="text-[9px] uppercase tracking-[0.23em] text-[#c0a052]">
                Asset Management
              </p>
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b99a4c]">
              Create investor account
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Get started
            </h2>

            <p className="mt-2 text-sm text-[#748477]">
              Enter your information to create your investor profile.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  icon={<UserRound size={17} />}
                  placeholder="First name"
                  value={form.firstName}
                  onChange={(value) => update("firstName", value)}
                />

                <Input
                  icon={<UserRound size={17} />}
                  placeholder="Last name"
                  value={form.lastName}
                  onChange={(value) => update("lastName", value)}
                />
              </div>

              <Input
                icon={<Mail size={17} />}
                type="email"
                placeholder="Email address"
                value={form.email}
                onChange={(value) => update("email", value)}
              />

              <Input
                icon={<Phone size={17} />}
                type="tel"
                placeholder="Phone number"
                value={form.phone}
                onChange={(value) => update("phone", value)}
              />

              <div className="relative">
                <LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 text-[#647468]" size={17} />

                <input
                  required
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={(event) =>
                    update("password", event.target.value)
                  }
                  placeholder="Password"
                  className="h-14 w-full rounded-2xl border border-white/[0.08] bg-white/[0.03] pl-11 pr-12 text-sm outline-none transition placeholder:text-[#526156] focus:border-[#ad9149]/50"
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

              <Input
                icon={<LockKeyhole size={17} />}
                type={showPassword ? "text" : "password"}
                placeholder="Confirm password"
                value={form.confirmPassword}
                onChange={(value) =>
                  update("confirmPassword", value)
                }
              />

              {error && (
                <div className="rounded-2xl border border-red-400/15 bg-red-500/[0.06] px-4 py-3 text-xs text-red-300">
                  {error}
                </div>
              )}

              <button
                disabled={loading}
                type="submit"
                className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#d1af57] to-[#97752c] text-sm font-semibold text-[#09110b] transition hover:brightness-110 disabled:opacity-60"
              >
                {loading ? "Creating account..." : "Create account"}
                {!loading && <ArrowRight size={17} />}
              </button>
            </form>

            <p className="mt-7 text-center text-sm text-[#758579]">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-[#d1b15f] hover:text-[#e2c779]"
              >
                Sign in
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

function Input({
  icon,
  type = "text",
  placeholder,
  value,
  onChange,
}: {
  icon: React.ReactNode;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#647468]">
        {icon}
      </span>

      <input
        required
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-14 w-full rounded-2xl border border-white/[0.08] bg-white/[0.03] pl-11 pr-4 text-sm outline-none transition placeholder:text-[#526156] focus:border-[#ad9149]/50"
      />
    </div>
  );
}