const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02108 11.3363C2.16237 9.18455 2.99447 7.13504 4.39452 5.49221C5.79457 3.84939 7.68506 2.70117 9.7704 2.2206C11.8558 1.74003 14.0253 1.95203 15.96 2.82"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 4L12 14.01L9 11.01"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "100% Authentic",
    desc: "Sourced directly from official club suppliers.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M1 3H15V17H1"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 8H20L23 12V17H15V8Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="5.5"
          cy="18.5"
          r="2.5"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="18.5"
          cy="18.5"
          r="2.5"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
    title: "Fast Global Shipping",
    desc: "Tracked delivery to over 150 countries.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M6 9H18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 15H18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 21V10C4 8.93913 4.42143 7.92172 5.17157 7.17157C5.92172 6.42143 6.93913 6 8 6H16C17.0609 6 18.0783 6.42143 18.8284 7.17157C19.5786 7.92172 20 8.93913 20 10V21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 2L12 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Pro Customization",
    desc: "Official league fonts and badges available.",
  },
];

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
