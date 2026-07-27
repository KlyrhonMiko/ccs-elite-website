"use client";

export default function BudgetSection() {
  const budgetStats = [
    { label: "Total Budget (2026)", amount: "$50,000", percentage: 100 },
    { label: "Project Expenses", amount: "$32,500", percentage: 65 },
    { label: "Operational Costs", amount: "$8,000", percentage: 16 },
    { label: "Remaining Cash Flow", amount: "$9,500", percentage: 19 },
  ];

  const recentExpenses = [
    {
      date: "OCT 12",
      title: "Tech Horizon Summit Venue",
      category: "Event",
      amount: "-$4,500",
    },
    {
      date: "OCT 05",
      title: "Server Infrastructure",
      category: "Operations",
      amount: "-$850",
    },
    {
      date: "SEP 28",
      title: "HackTheFuture Prizes",
      category: "Project",
      amount: "-$3,000",
    },
  ];

  return (
    <section id="budget" className="bg-[#121212] w-full relative overflow-hidden font-sans text-white py-24 px-6 md:px-12 lg:px-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <div className="text-xl md:text-2xl font-light text-white/80 mb-4 font-heading tracking-wider">
              \\ 04
            </div>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-display font-light tracking-[0.15em] leading-[1] uppercase text-white">
              Budget &<br />Transparency
            </h2>
          </div>
          <p className="text-sm md:text-base text-white/70 leading-relaxed font-sans max-w-md">
            Foster trust and accountability within the student body by making Comsoc’s budget, cash flow, and project expenses fully visible.
          </p>
        </div>

        {/* Budget Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          
          <div className="flex flex-col gap-12">
            <div className="flex justify-between items-end">
              <h3 className="text-2xl md:text-3xl font-heading font-light tracking-[0.2em] uppercase text-white/90">
                Financial Overview
              </h3>
            </div>
            
            <div className="flex flex-col gap-8 border-t border-white/10 pt-8">
              {budgetStats.map((stat, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div className="flex justify-between items-end">
                    <span className="text-sm md:text-base font-sans text-white/70 uppercase tracking-wider">{stat.label}</span>
                    <span className="text-xl md:text-2xl font-display text-white">{stat.amount}</span>
                  </div>
                  <div className="w-full bg-white/5 h-1 relative overflow-hidden">
                    <div 
                      className="absolute top-0 left-0 h-full bg-white/40 transition-all duration-1000"
                      style={{ width: `${stat.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Expenses */}
          <div className="flex flex-col gap-12">
             <div className="flex justify-between items-end">
              <h3 className="text-2xl md:text-3xl font-heading font-light tracking-[0.2em] uppercase text-white/90">
                Recent Outflows
              </h3>
            </div>
            
            <div className="flex flex-col border-t border-white/10">
              {recentExpenses.map((expense, index) => (
                <div 
                  key={index} 
                  className="group flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-300 px-4"
                >
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 items-start sm:items-center mb-4 sm:mb-0">
                    <div className="text-lg font-display uppercase tracking-[0.1em] text-white/40 group-hover:text-white transition-colors duration-300 w-20">
                      {expense.date}
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-lg font-heading font-light tracking-wide text-white group-hover:text-white/90">
                        {expense.title}
                      </div>
                      <div className="text-xs text-white/50 tracking-wider uppercase font-sans">
                        {expense.category}
                      </div>
                    </div>
                  </div>
                  <div className="text-xl font-display text-white/80 shrink-0">
                    {expense.amount}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
        
        {/* Full Report Link / CTA */}
        <div className="flex justify-center mt-8">
           <button className="group relative px-8 py-4 overflow-hidden border border-white/20 hover:border-white/40 transition-colors duration-300">
             <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
             <span className="relative z-10 font-heading tracking-[0.2em] uppercase text-sm group-hover:text-black transition-colors duration-300 mix-blend-difference">
               Download Full Report
             </span>
           </button>
        </div>

      </div>
    </section>
  );
}
