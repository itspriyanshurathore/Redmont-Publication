import {
  Cookie,
  Settings,
  BarChart3,
  ShieldCheck,
  Globe,
  Lock,
  RefreshCcw,
  FileText,
  CheckCircle2,
} from "lucide-react";

const CookiePolicy = () => {
  return (
    <section className="bg-[#f8fafc] py-16 lg:py-30">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#071739] sm:text-4xl">
            Cookie Policy
          </h1>

          <p className="mx-auto mt-5 max-w-4xl text-[15px] leading-7 text-slate-600">
          This Cookie Policy explains how Redmont Publications ("Redmont Publications," "we," "our," or "us") uses cookies and similar technologies when you visit our website, publication platforms, and related online services.
          </p>

          <p className="mx-auto mt-4 max-w-4xl text-[15px] leading-7 text-slate-600">
          By continuing to use our website, you consent to the use of cookies in accordance with this Cookie Policy.
          </p>
        </div>

        <div className="mt-12 space-y-8">
         {/* Section 1 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">


<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
  <Cookie size={18} className="text-blue-600" />
</div>

<div>
  <h2 className="text-lg font-bold text-[#071739]">
    1. What Are Cookies?
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Cookies are small text files that are stored on your computer,
    mobile device, or other internet-enabled device when you visit a
    website.
  </p>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Cookies help websites recognize users, remember preferences,
    improve functionality, enhance security, and provide a better
    browsing experience.
  </p>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Cookies do not typically contain information that personally
    identifies users directly; however, they may be linked to
    information you voluntarily provide to us.
  </p>
</div>


  </div>
</div>

{/* Section 2 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">


<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50">
  <Settings size={18} className="text-green-600" />
</div>

<div className="w-full">
  <h2 className="text-lg font-bold text-[#071739]">
    2. How We Use Cookies
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Redmont Publications uses cookies and similar technologies to:
  </p>

  <div className="mt-5 space-y-3">
    {[
      "Ensure proper website functionality;",
      "Improve website performance and user experience;",
      "Remember user preferences and settings;",
      "Analyze website traffic and visitor behavior;",
      "Maintain website security;",
      "Detect and prevent fraudulent activities;",
      "Improve publishing and submission platform performance;",
      "Monitor and optimize website content and services.",
    ].map((item) => (
      <div key={item} className="flex gap-2">
        <CheckCircle2
          size={16}
          className="mt-1 text-green-600"
        />
        <span className="text-sm text-slate-600">
          {item}
        </span>
      </div>
    ))}
  </div>
</div>


  </div>
</div>

{/* Section 3 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">


<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50">
  <Cookie size={18} className="text-red-600" />
</div>

<div className="w-full">
  <h2 className="text-lg font-bold text-[#071739]">
    3. Types of Cookies We Use
  </h2>

  {/* Essential Cookies */}
  <div className="mt-6 rounded-xl border border-red-100 bg-red-50/50 p-5">
    <h3 className="text-base font-semibold text-[#071739]">
      Essential Cookies
    </h3>

    <p className="mt-3 text-[15px] leading-7 text-slate-600">
      These cookies are necessary for the operation of our website
      and cannot be disabled in our systems.
    </p>

    <p className="mt-4 text-[15px] leading-7 text-slate-600">
      They help with:
    </p>

    <div className="mt-4 space-y-3">
      {[
        "Website navigation",
        "Secure access",
        "Session management",
        "Form submissions",
        "Security functions",
      ].map((item) => (
        <div key={item} className="flex gap-2">
          <CheckCircle2
            size={16}
            className="mt-1 text-red-600"
          />
          <span className="text-sm text-slate-600">
            {item}
          </span>
        </div>
      ))}
    </div>

    <p className="mt-5 text-[15px] leading-7 text-slate-600">
      Without these cookies, certain parts of the website may not
      function properly.
    </p>
  </div>

  {/* Performance and Analytics Cookies */}
  <div className="mt-6 rounded-xl border border-purple-100 bg-purple-50/50 p-5">
    <h3 className="text-base font-semibold text-[#071739]">
      Performance and Analytics Cookies
    </h3>

    <p className="mt-3 text-[15px] leading-7 text-slate-600">
      These cookies help us understand how visitors interact with
      our website by collecting anonymous statistical information.
    </p>

    <p className="mt-4 text-[15px] leading-7 text-slate-600">
      They may be used to:
    </p>

    <div className="mt-4 space-y-3">
      {[
        "Measure website traffic",
        "Identify popular pages",
        "Monitor website performance",
        "Improve user experience",
        "Analyze visitor behavior trends",
      ].map((item) => (
        <div key={item} className="flex gap-2">
          <CheckCircle2
            size={16}
            className="mt-1 text-purple-600"
          />
          <span className="text-sm text-slate-600">
            {item}
          </span>
        </div>
      ))}
    </div>

    <p className="mt-5 text-[15px] leading-7 text-slate-600">
      Information collected through these cookies is generally
      aggregated and anonymized.
    </p>
  </div>
</div>


  </div>
</div>


       {/* Functional Cookies */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">


<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50">
  <Settings size={18} className="text-amber-600" />
</div>

<div className="w-full">
  <h2 className="text-lg font-bold text-[#071739]">
    4. Functional Cookies
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    These cookies allow the website to remember choices made by
    users, such as:
  </p>

  <div className="mt-5 space-y-3">
    {[
      "Language preferences",
      "Region settings",
      "User preferences",
      "Customized website features",
    ].map((item) => (
      <div key={item} className="flex gap-2">
        <CheckCircle2
          size={16}
          className="mt-1 text-amber-600"
        />
        <span className="text-sm text-slate-600">
          {item}
        </span>
      </div>
    ))}
  </div>

  <p className="mt-5 text-[15px] leading-7 text-slate-600">
    These cookies help provide a more personalized browsing
    experience.
  </p>
</div>


  </div>
</div>

{/* Security Cookies */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">


<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50">
  <ShieldCheck size={18} className="text-indigo-600" />
</div>

<div className="w-full">
  <h2 className="text-lg font-bold text-[#071739]">
    5. Security Cookies
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Security cookies help us:
  </p>

  <div className="mt-5 space-y-3">
    {[
      "Detect suspicious activity",
      "Prevent unauthorized access",
      "Protect user accounts",
      "Enhance website security measures",
    ].map((item) => (
      <div key={item} className="flex gap-2">
        <CheckCircle2
          size={16}
          className="mt-1 text-indigo-600"
        />
        <span className="text-sm text-slate-600">
          {item}
        </span>
      </div>
    ))}
  </div>

  <p className="mt-5 text-[15px] leading-7 text-slate-600">
    These cookies are essential for maintaining the integrity and
    safety of our online services.
  </p>
</div>


  </div>
</div>

{/* Section 6 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">


<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50">
  <Globe size={18} className="text-cyan-600" />
</div>

<div className="w-full">
  <h2 className="text-lg font-bold text-[#071739]">
    6. Third-Party Cookies
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Our website may utilize services provided by trusted third-party
    providers, including:
  </p>

  <div className="mt-5 space-y-3">
    {[
      "Analytics providers",
      "Payment processors",
      "Hosting providers",
      "Content delivery services",
      "Website performance tools",
    ].map((item) => (
      <div key={item} className="flex gap-2">
        <CheckCircle2
          size={16}
          className="mt-1 text-cyan-600"
        />
        <span className="text-sm text-slate-600">
          {item}
        </span>
      </div>
    ))}
  </div>

  <p className="mt-5 text-[15px] leading-7 text-slate-600">
    These third parties may place cookies on your device in
    accordance with their own privacy and cookie policies.
  </p>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Redmont Publications does not control the operation of
    third-party cookies.
  </p>
</div>


  </div>
</div>

{/* Section 7 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">


<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50">
  <Settings size={18} className="text-orange-600" />
</div>

<div className="w-full">
  <h2 className="text-lg font-bold text-[#071739]">
    7. Managing Cookies
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Most web browsers automatically accept cookies.
  </p>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Users may modify browser settings to:
  </p>

  <div className="mt-5 space-y-3">
    {[
      "Block cookies;",
      "Delete stored cookies;",
      "Receive notifications when cookies are being used;",
      "Restrict certain categories of cookies.",
    ].map((item) => (
      <div key={item} className="flex gap-2">
        <CheckCircle2
          size={16}
          className="mt-1 text-orange-600"
        />
        <span className="text-sm text-slate-600">
          {item}
        </span>
      </div>
    ))}
  </div>

  <p className="mt-5 text-[15px] leading-7 text-slate-600">
    Please note that disabling cookies may affect website
    functionality and user experience.
  </p>
</div>


  </div>
</div>

{/* Section 8 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">


<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-50">
  <BarChart3 size={18} className="text-pink-600" />
</div>

<div className="w-full">
  <h2 className="text-lg font-bold text-[#071739]">
    8. Data Collected Through Cookies
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Depending on the type of cookie used, information collected may
    include:
  </p>

  <div className="mt-5 grid gap-3 sm:grid-cols-2">
    {[
      "IP address",
      "Browser type",
      "Device information",
      "Operating system",
      "Referral source",
      "Pages visited",
      "Date and time of visits",
      "Website interaction statistics",
    ].map((item) => (
      <div key={item} className="flex gap-2">
        <CheckCircle2
          size={16}
          className="mt-1 text-pink-600"
        />
        <span className="text-sm text-slate-600">
          {item}
        </span>
      </div>
    ))}
  </div>

  <p className="mt-5 text-[15px] leading-7 text-slate-600">
    Such information is generally used for analytical, security, and
    operational purposes.
  </p>
</div>


  </div>
</div>


         {/* Section 9 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">


<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
  <Lock size={18} className="text-emerald-600" />
</div>

<div>
  <h2 className="text-lg font-bold text-[#071739]">
    9. Data Protection
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Information collected through cookies is handled in accordance
    with our Privacy Policy and applicable data protection
    requirements.
  </p>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    We implement reasonable safeguards to protect information
    collected through website technologies.
  </p>
</div>


  </div>
</div>

{/* Section 10 */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">


<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50">
  <RefreshCcw size={18} className="text-violet-600" />
</div>

<div>
  <h2 className="text-lg font-bold text-[#071739]">
    10. Updates to This Cookie Policy
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Redmont Publications reserves the right to update or modify this
    Cookie Policy at any time.
  </p>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Any changes will be posted on this page with an updated
    effective date.
  </p>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    Continued use of the website following any changes constitutes
    acceptance of the revised Cookie Policy.
  </p>
</div>


  </div>
</div>

{/* Section 11 */}

<div className="rounded-2xl border border-red-100 bg-red-50 p-6 shadow-sm sm:p-7">
  <div className="flex items-start gap-4">


<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white">
  <FileText size={18} className="text-red-600" />
</div>

<div className="w-full">
  <h2 className="text-lg font-bold text-[#071739]">
    11. Contact Information
  </h2>

  <p className="mt-4 text-[15px] leading-7 text-slate-600">
    If you have any questions regarding this Cookie Policy or our
    use of cookies, please contact:
  </p>

  <div className="mt-5 space-y-3 text-[15px] text-slate-700">
    <p>
      <span className="font-semibold text-[#071739]">
        Redmont Publications
      </span>
    </p>

    <p>
      <span className="font-semibold text-[#071739]">
        Email:
      </span>{" "}
      support@redmontpublications.com
    </p>

    <p>
      <span className="font-semibold text-[#071739]">
        Phone:
      </span>{" "}
      +91 9711052076
    </p>

    <p>
      <span className="font-semibold text-[#071739]">
        Website:
      </span>{" "}
      www.redmontpublications.com
    </p>
  </div>
</div>


  </div>
</div>

{/* Closing Statement */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <p className="text-[15px] leading-7 text-slate-600">
  
By using the Redmont Publications website, you acknowledge that you have read and understood this Cookie Policy and consent to the use of cookies as described herein.
  </p>
</div>

</div>



         
        </div>
    </section>
  );
};

export default CookiePolicy;
