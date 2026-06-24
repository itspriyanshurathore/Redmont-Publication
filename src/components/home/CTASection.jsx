import { Link } from "react-router-dom";

import {
  GraduationCap,
  BadgeCheck,
  ShieldCheck,
  Clock3,
  Users,
  Send,
  Mail,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12">
      <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl">
        {/* Background Glow */}
        <div className="absolute -left-20 bottom-0 h-52 w-52 rounded-full bg-red-100/40 blur-3xl" />
        <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-purple-100/40 blur-3xl" />

        <div className="grid lg:grid-cols-[1.5fr_1.2fr_0.9fr]">
          {/* LEFT SECTION */}
          <div className="flex items-center gap-5 p-6 lg:p-8">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-slate-50 shadow-md">
              <GraduationCap size={34} className="text-[#071739]" />
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-red-500">
                Academic Publishing Support
              </p>

              <h2 className="mt-2 text-[28px] font-bold leading-[1.2] text-[#071739]">
                Need Guidance for Academic
                <span className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Publishing
                </span>{" "}
                or Research Support?
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Connect with our experts for manuscript submission, editorial
                support and academic consultation services.
              </p>
            </div>
          </div>

          {/* CENTER FEATURES */}
          <div className="border-y border-slate-200 lg:border-x lg:border-y-0">
            <div className="grid h-full grid-cols-2">
              <div className="flex gap-3 border-b border-r border-slate-100 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50">
                  <BadgeCheck size={18} className="text-red-500" />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-[#071739]">
                    Expert Guidance
                  </h4>

                  <p className="text-xs text-slate-500">
                    Support at every step
                  </p>
                </div>
              </div>

              <div className="flex gap-3 border-b border-slate-100 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                  <ShieldCheck size={18} className="text-blue-500" />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-[#071739]">
                    Quality Assurance
                  </h4>

                  <p className="text-xs text-slate-500">
                    High standards ensured
                  </p>
                </div>
              </div>

              <div className="flex gap-3 border-r border-slate-100 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50">
                  <Clock3 size={18} className="text-green-500" />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-[#071739]">
                    Timely Support
                  </h4>

                  <p className="text-xs text-slate-500">
                    Prompt & reliable help
                  </p>
                </div>
              </div>

              <div className="flex gap-3 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50">
                  <Users size={18} className="text-purple-500" />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-[#071739]">
                    Author Focused
                  </h4>

                  <p className="text-xs text-slate-500">
                    Solutions tailored for you
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT BUTTONS */}
          <div className="flex flex-col justify-center gap-3 p-6">
            <Link to="/contact">
              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-red-500/20">
                <Send size={16} />
                Submit Manuscript
              </button>
            </Link>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@redmontpublications.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-[#071739] transition-all hover:bg-slate-50"
            >
              <Mail size={16} />
              Submission & Consultation
            </a>

            <a
              href="https://wa.me/919711052076"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-green-200 bg-white px-5 py-3 text-sm font-medium text-green-600 transition-all hover:bg-green-50"
            >
              <FaWhatsapp size={16} />
              WhatsApp Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
