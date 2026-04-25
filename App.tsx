import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Briefcase,
  CheckCircle2,
  Home,
  IndianRupee,
  Landmark,
  PiggyBank,
  Shield,
  TrendingDown,
  Wallet,
  Info,
  Activity,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

export default function App() {
  return (
    <TooltipProvider delayDuration={100}>
      <div className="min-h-screen bg-[#FDFDFD] text-gray-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 pb-20">
        <Header />
        
        <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-12">
          {/* Hero Section */}
          <section className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium mb-2 w-fit">
                <Sparkles className="w-4 h-4" />
                <span>August 2019 Snapshot Processed</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                Your Financial Pulse, <span className="text-indigo-600">Rajesh.</span>
              </h2>
              <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
                We've extracted the core data from your payslip. Explore your clear salary breakdown, hidden tax savings, and real-time loan eligibility below.
              </p>
            </motion.div>
          </section>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="mb-8 w-full sm:w-auto inline-flex h-11 p-1 bg-gray-100/80 rounded-xl overflow-x-auto overflow-y-hidden text-sm relative">
              <TabsTrigger value="overview" className="rounded-lg tracking-wide hover:bg-white data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all px-6">Overview</TabsTrigger>
              <TabsTrigger value="salary" className="rounded-lg tracking-wide hover:bg-white data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all px-6">Salary Breakdown</TabsTrigger>
              <TabsTrigger value="loans" className="rounded-lg tracking-wide hover:bg-white data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all px-6">Loan Eligibility</TabsTrigger>
            </TabsList>

            <AnimatePresence mode="wait">
              <TabsContent value="overview" className="space-y-8 mt-0 border-0 outline-none">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                >
                  {/* Primary Stat Card */}
                  <div className="lg:col-span-1 space-y-6">
                    <Card className="border-gray-200/60 shadow-sm relative overflow-hidden bg-gradient-to-br from-indigo-600 to-violet-700 text-white rounded-2xl">
                      <div className="absolute top-0 right-0 p-6 opacity-10">
                        <Wallet className="w-24 h-24 stroke-[1.5px]" />
                      </div>
                      <CardHeader className="pb-2">
                        <CardDescription className="text-indigo-100 font-medium tracking-wide pb-1">NET TAKE-HOME</CardDescription>
                        <CardTitle className="text-5xl font-bold tracking-tight flex items-baseline">
                          <span className="text-3xl mr-1 opacity-80">₹</span>12,750
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-indigo-100/80 text-sm mt-3 leading-relaxed w-[85%]">
                          The actual spendable amount hitting your bank account this month.
                        </p>
                        <Separator className="bg-indigo-500/30 my-5" />
                        <div className="flex justify-between items-center text-sm font-medium">
                          <span className="text-indigo-100">Gross Earnings</span>
                          <span>₹13,750</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-gray-200/60 shadow-sm rounded-2xl overflow-hidden group">
                      <CardHeader className="bg-gray-50/50 pb-4 border-b border-gray-100 flex flex-row items-center justify-between">
                         <div className="space-y-1">
                          <CardTitle className="text-lg">Tax Headroom</CardTitle>
                          <CardDescription>Remaining sec limits</CardDescription>
                         </div>
                         <div className="p-2 bg-teal-50 text-teal-600 rounded-xl group-hover:bg-teal-100 transition-colors">
                           <Shield className="w-5 h-5" />
                         </div>
                      </CardHeader>
                      <CardContent className="pt-5 space-y-6">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm font-semibold">
                            <span className="text-gray-600">80C Limit</span>
                            <span className="text-teal-700">₹1,50,000 left</span>
                          </div>
                          <Progress value={0} className="h-2 bg-gray-100 [&>div]:bg-teal-500" />
                          <p className="text-xs text-gray-500">Since PF is ₹0, your entire 1.5L quota is ready for ELSS/PPF.</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm font-semibold">
                            <span className="text-gray-600">80D Limit</span>
                            <span className="text-teal-700">₹25,000 left</span>
                          </div>
                          <Progress value={0} className="h-2 bg-gray-100 [&>div]:bg-teal-500" />
                          <p className="text-xs text-gray-500">Full headroom for medical insurance premiums.</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Right side Grid */}
                  <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <SalaryItem 
                        icon={<IndianRupee className="w-5 h-5" />} 
                        label="Basic Pay" 
                        amount="10,000" 
                        description="Your core salary before bonuses or allowances."
                        delay={0.1}
                      />
                     <SalaryItem 
                        icon={<Activity className="w-5 h-5" />} 
                        label="OT Payment" 
                        amount="3,750" 
                        description="50 hours of overtime at ₹75/hr."
                        delay={0.2}
                      />
                     <SalaryItem 
                        icon={<Home className="w-5 h-5" />} 
                        label="HRA" 
                        amount="0" 
                        description="House Rent Allowance. Not included in this slip."
                        delay={0.3}
                      />
                     <SalaryItem 
                        icon={<TrendingDown className="w-5 h-5" />} 
                        label="Salary Advance" 
                        amount="1,000" 
                        description="Deduction recovered from this month's pay."
                        delay={0.4}
                        isDeduction
                      />
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="salary" className="border-0 outline-none">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl border border-gray-200/70 shadow-sm overflow-hidden"
                >
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50/50 border-b border-gray-100">
                        <th className="py-4 px-6 font-semibold text-gray-500 text-xs tracking-wider uppercase">Component</th>
                        <th className="py-4 px-6 font-semibold text-gray-500 text-xs tracking-wider uppercase">Type</th>
                        <th className="py-4 px-6 font-semibold text-gray-500 text-xs tracking-wider uppercase text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <TableRow name="Basic Pay" type="Earning" amount="10,000" />
                      <TableRow name="OT Payment" type="Earning" amount="3,750" />
                      <TableRow name="Salary Advance" type="Deduction" amount="1,000" isNegative />
                      <TableRow name="Provident Fund (PF)" type="Deduction" amount="0" />
                      <TableRow name="TDS" type="Deduction" amount="0" />
                    </tbody>
                    <tfoot className="bg-gray-50/30">
                      <tr>
                        <td colSpan={2} className="py-5 px-6 font-semibold text-gray-900 text-right">Net Take-Home Pay</td>
                        <td className="py-5 px-6 font-bold text-indigo-700 text-right text-lg">₹12,750</td>
                      </tr>
                    </tfoot>
                  </table>
                </motion.div>
              </TabsContent>

              <TabsContent value="loans" className="border-0 outline-none">
                <LoanInteractiveEngine netTakeHome={12750} />
              </TabsContent>
            </AnimatePresence>
          </Tabs>
        </main>
      </div>
    </TooltipProvider>
  );
}

function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/60 sticky top-0 z-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-indigo-600 p-1.5 rounded-lg group-hover:scale-105 transition-transform">
            <PiggyBank className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-gray-900">PaySense</h1>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant="outline" className="text-emerald-700 bg-emerald-50 border-emerald-200 hover:bg-emerald-100 cursor-default px-3 py-1">
            <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
            Verified
          </Badge>
          <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center font-bold text-gray-600 text-sm shadow-sm">
            R
          </div>
        </div>
      </div>
    </header>
  );
}

function SalaryItem({
  icon,
  label,
  amount,
  description,
  isDeduction,
  delay = 0,
}: {
  icon: React.ReactNode;
  label: string;
  amount: string;
  description: string;
  isDeduction?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="border-gray-200/60 shadow-sm h-full hover:shadow-md transition-shadow duration-300 rounded-2xl group">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className={cn(
              "p-2.5 rounded-xl transition-colors",
              isDeduction ? "bg-rose-50 text-rose-600 group-hover:bg-rose-100" : "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100"
            )}>
              {icon}
            </div>
            {isDeduction && (
              <Badge variant="secondary" className="bg-rose-100 text-rose-700 hover:bg-rose-100/80">Deduction</Badge>
            )}
          </div>
          <h4 className="text-gray-500 font-medium text-sm mb-1">{label}</h4>
          <div className="text-2xl font-bold text-gray-900 tracking-tight mb-2">
            {isDeduction ? "-" : ""}₹{amount}
          </div>
          <p className="text-sm text-gray-500 leading-snug">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function TableRow({ name, type, amount, isNegative }: { name: string, type: string, amount: string, isNegative?: boolean }) {
  return (
    <tr className="hover:bg-gray-50/50 transition-colors group">
      <td className="py-4 px-6 font-medium text-gray-900">{name}</td>
      <td className="py-4 px-6">
        <span className={cn(
          "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
          type === 'Earning' ? "bg-emerald-50 text-emerald-700 border border-emerald-100" : "bg-rose-50 text-rose-700 border border-rose-100"
        )}>
          {type}
        </span>
      </td>
      <td className={cn(
        "py-4 px-6 text-right font-medium",
        isNegative ? "text-rose-600" : "text-gray-900"
      )}>
        {isNegative ? "-" : ""}₹{amount}
      </td>
    </tr>
  );
}

function LoanInteractiveEngine({ netTakeHome }: { netTakeHome: number }) {
  const [emiPercent, setEmiPercent] = useState<number[]>([40]);
  
  // Calculate Safe EMI
  const safeEmi = Math.round(netTakeHome * (emiPercent[0] / 100));

  // Personal Loan calculation: 3 years (36 months) @ 12% p.a (1% monthly)
  const calculateLoan = (emi: number, annualRate: number, years: number) => {
    const r = annualRate / 12 / 100;
    const n = years * 12;
    const factor = (Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n));
    return Math.round(emi * factor);
  };

  const personalLoanMax = calculateLoan(safeEmi, 12, 3);
  const homeLoanMax = calculateLoan(safeEmi, 9, 20);

  const formatCurrency = (val: number) => {
    if (val >= 100000) return `₹${(val / 100000).toFixed(2)} Lakhs`;
    return `₹${val.toLocaleString('en-IN')}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-3xl border border-gray-200/70 shadow-sm p-6 sm:p-8 space-y-10 overflow-hidden relative"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-indigo-500" />
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Interactive Loan Engine</h3>
          <p className="text-gray-500 mt-1">Adjust limits to uncover your true borrowing power.</p>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500 font-medium mb-1">Your Safe Monthly EMI</div>
          <div className="text-3xl font-bold text-indigo-700 tracking-tight">₹{safeEmi.toLocaleString('en-IN')}</div>
        </div>
      </div>

      <div className="space-y-6 max-w-3xl">
        <div className="flex items-center justify-between">
          <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            EMI Safety Threshold
            <Tooltip>
              <TooltipTrigger>
                <Info className="w-4 h-4 text-gray-400" />
              </TooltipTrigger>
              <TooltipContent>
                Financial experts recommend keeping total EMIs under 40% of net take-home pay.
              </TooltipContent>
            </Tooltip>
          </label>
          <span className="text-indigo-600 font-bold px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-lg">
            {emiPercent[0]}%
          </span>
        </div>
        <Slider 
          defaultValue={[40]} 
          min={10} 
          max={60} 
          step={5} 
          value={emiPercent}
          onValueChange={setEmiPercent}
          className="w-full" 
        />
        <div className="flex justify-between text-xs font-medium text-gray-400 px-1">
          <span>Conservative (10%)</span>
          <span>Aggressive (60%)</span>
        </div>
      </div>

      <Separator className="bg-gray-100" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        {/* Personal Loan */}
        <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 border border-orange-200/60 rounded-2xl p-6 relative overflow-hidden group">
           <div className="absolute -right-6 -bottom-6 opacity-[0.03] transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
              <Briefcase className="w-48 h-48" />
           </div>
           <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-orange-900">Personal Loan</h4>
              </div>
              <Badge variant="outline" className="bg-white/60 border-orange-200 text-orange-700">12% p.a • 3 yrs</Badge>
           </div>
           <div className="space-y-1">
              <div className="text-sm font-medium text-orange-800/70">Estimated Capacity</div>
              <div className="text-4xl font-bold text-orange-900 tracking-tight">
                {formatCurrency(personalLoanMax)}
              </div>
           </div>
        </div>

        {/* Home Loan */}
        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100/50 border border-indigo-200/60 rounded-2xl p-6 relative overflow-hidden group">
           <div className="absolute -right-6 -bottom-6 opacity-[0.03] transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
              <Home className="w-48 h-48" />
           </div>
           <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
                  <Home className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-indigo-900">Home Loan</h4>
              </div>
              <Badge variant="outline" className="bg-white/60 border-indigo-200 text-indigo-700">9% p.a • 20 yrs</Badge>
           </div>
           <div className="space-y-1">
              <div className="text-sm font-medium text-indigo-800/70">Estimated Capacity</div>
              <div className="text-4xl font-bold text-indigo-900 tracking-tight">
                {formatCurrency(homeLoanMax)}
              </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
}
