// About Section component for rendering organizational details.

const executiveTeam = [
  { role: "President", name: "John Doe" },
  { role: "Vice President", name: "Jane Smith" },
  { role: "Secretary", name: "Alice Johnson" },
  { role: "Treasurer", name: "Bob Williams" },
];

const coreValues = [
  "Innovation",
  "Collaboration",
  "Excellence",
  "Integrity",
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#121212] w-full relative overflow-hidden font-sans text-white py-24 px-6 md:px-12 lg:px-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <div className="text-xl md:text-2xl font-light text-white/80 mb-4 font-heading tracking-wider">
              \\ 02
            </div>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-display font-light tracking-[0.15em] leading-[1] uppercase text-white">
              About<br />Us
            </h2>
          </div>
          <p className="text-sm md:text-base text-white/70 leading-relaxed font-sans max-w-md">
            We are the driving force behind the college&apos;s technological advancement, uniting passionate minds to build a smarter future.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl md:text-3xl font-heading font-light tracking-[0.2em] uppercase text-white/90">
              Mission
            </h3>
            <p className="text-sm md:text-base text-white/60 leading-relaxed font-sans">
              To empower students with cutting-edge technical skills, foster a culture of continuous learning, and provide a platform for collaborative innovation that addresses real-world challenges.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl md:text-3xl font-heading font-light tracking-[0.2em] uppercase text-white/90">
              Vision
            </h3>
            <p className="text-sm md:text-base text-white/60 leading-relaxed font-sans">
              To be the premier recognized student organization that cultivates the next generation of tech leaders, renowned for excellence, creativity, and impactful technological solutions.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="flex flex-col gap-12">
          <h3 className="text-2xl md:text-3xl font-heading font-light tracking-[0.2em] uppercase text-white/90">
            Core Values
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="flex flex-col gap-4 group">
                <div className="text-3xl md:text-4xl text-white/20 group-hover:text-white transition-colors duration-500 font-heading font-light">
                  0{index + 1}
                </div>
                <div className="text-lg md:text-xl font-display uppercase tracking-[0.15em] text-white/80 group-hover:text-white transition-colors duration-300">
                  {value}
                </div>
                <div className="w-full h-[1px] bg-white/10 group-hover:bg-white/50 transition-colors duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Team */}
        <div className="flex flex-col gap-12">
          <div className="flex justify-between items-end">
            <h3 className="text-2xl md:text-3xl font-heading font-light tracking-[0.2em] uppercase text-white/90">
              Executive Team
            </h3>
            <div className="hidden md:flex gap-2 text-white/40">
              ✦ ✦ ✦
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {executiveTeam.map((member, index) => (
              <div key={index} className="flex flex-col gap-3 p-6 border border-white/10 hover:border-white/30 transition-colors bg-white/[0.02]">
                <div className="text-xs uppercase tracking-[0.3em] text-white/50 font-heading font-bold">
                  {member.role}
                </div>
                <div className="text-xl font-display uppercase tracking-[0.1em] text-white">
                  {member.name}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
