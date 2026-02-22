import { features } from "../../data/features";

export default function FeaturesSection() {
  return (
    <section className="container py-12 border-t border-b border-gray-200 mb-16">
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feat) => (
          <div key={feat.title} className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-100 text-primary flex items-center justify-center flex-none">
              {feat.icon}
            </div>
            <div>
              <h3 className="text-[0.9375rem] font-bold mb-1">{feat.title}</h3>
              <p className="text-[0.8125rem] text-gray-400">{feat.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
