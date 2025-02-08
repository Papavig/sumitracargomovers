import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Briefcase, Building, Truck, Users } from "lucide-react";

const stats = [
  { icon: Briefcase, value: 10, label: "Years of Experience", suffix: "+" },
  { icon: Truck, value: 1000, label: "Successful Moves", suffix: "+" },
  { icon: Building, value: 50, label: "Branch Offices", suffix: "+" },
  {
    icon: Users,
    value: 250,
    label: "Professional Courier Partners",
    suffix: "+",
  },
];

export default function StatsCounter() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const target = document.querySelector("#stats-section");
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <section
      id="stats-section"
      className="py-20 bg-primary-foreground text-primary"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-primary/5 rounded-lg p-6 text-center"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">
                {inView && (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <p className="text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
