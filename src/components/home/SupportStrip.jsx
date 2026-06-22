import {
  Globe,
  BookOpen,
  ShieldCheck,
  FileCheck,
  BadgeCheck,
  Edit3,
  MessageSquare,
  Layers,
  CheckCircle,
} from "lucide-react";

const featureCards = [
  {
    icon: BookOpen,
    title: "Ethical Publishing",
    desc: "Committed to integrity and transparency.",
  },
  {
    icon: FileCheck,
    title: "DOI Registration",
    desc: "Crossref DOI and metadata management.",
  },
  {
    icon: MessageSquare,
    title: "Editorial Support",
    desc: "Professional editorial and peer review assistance.",
  },
  {
    icon: Globe,
    title: "Open Access",
    desc: "Promoting accessible scholarly communication.",
  },
  {
    icon: BadgeCheck,
    title: "Author Focused",
    desc: "Support at every stage of your publication.",
  },
  {
    icon: ShieldCheck,
    title: "Global Reach",
    desc: "Serving researchers worldwide.",
  },
];

const stats = [
  {
    icon: BookOpen,
    value: "12K+",
    label: "Researchers Assisted",
  },
  {
    icon: BadgeCheck,
    value: "2.5K+",
    label: "Books Published",
  },
  {
    icon: Layers,
    value: "320+",
    label: "Conferences Supported",
  },
  {
    icon: Edit3,
    value: "Multidisciplinary",
    label: "Research Support",
  },
  {
    icon: CheckCircle,
    value: "DOI",
    label: "Assistance Provided",
  },
];

const SupportStrip = () => {
  return (
    <section className="w-full bg-slate-50">
  <div className="w-full px-4 sm:px-5">
        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2 lg:grid-cols-6 lg:p-4">
            {featureCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex w-full items-start gap-4 rounded-[20px] border border-slate-100 bg-white p-4 text-sm text-slate-700"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                    <Icon size={16} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[13px] leading-5 text-slate-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-4 overflow-hidden rounded-[28px] bg-gradient-to-r from-[#3b0712] via-[#5b0f1d] to-[#071739] text-white shadow-xl">
          <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-5">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex min-h-[100px] items-center gap-4 px-4 py-5 sm:px-5 lg:px-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white">
                    <Icon size={16} />
                  </div>

                  <div>
                    <p className="text-xl font-semibold tracking-tight text-white">
                      {item.value}
                    </p>
                    <p className="mt-0.5 text-[12px] text-white/80 text-justify">
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportStrip;
