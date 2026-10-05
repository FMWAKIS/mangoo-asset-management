import InvestorShell from "@/components/investor/InvestorShell";

export default function InvestorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <InvestorShell>{children}</InvestorShell>;
}