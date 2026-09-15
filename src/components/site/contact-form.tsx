import { useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from "react";
import { company, requirementTypes } from "@/data/site";
import { Btn, BtnLink, Kicker } from "./ui";

export function ContactForm({ initialRequirement = "Aerospace" }: { initialRequirement?: string }) {
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [requirement, setRequirement] = useState(initialRequirement);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const confirmationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sent || !window.matchMedia("(width < 70rem)").matches) return;
    // Replacing the tall mobile form can otherwise leave the viewport in the footer.
    confirmationRef.current?.scrollIntoView({
      block: "start",
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }, [sent]);

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Engineering enquiry — ${requirement}`);
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${org}\nEmail: ${email}\nPhone: ${phone}\nRequirement: ${requirement}\n\n${message}`,
    );
    return `mailto:${company.email}?subject=${subject}&body=${body}`;
  }, [name, org, email, phone, requirement, message]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (name.trim().length < 2) return setError("Please enter your name.");
    if (org.trim().length < 2) return setError("Please enter your company.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError("Please enter a valid email.");
    if (phone.trim().length < 8) return setError("Please enter a phone number.");
    if (message.trim().length < 10)
      return setError("Please describe the requirement in a little more detail.");
    try {
      const prev = JSON.parse(localStorage.getItem("sd-enquiries") || "[]") as unknown[];
      prev.push({
        name,
        company: org,
        email,
        phone,
        requirement,
        message,
        at: new Date().toISOString(),
      });
      localStorage.setItem("sd-enquiries", JSON.stringify(prev));
    } catch {
      /* ignore storage failures */
    }
    setSent(true);
  }

  if (sent) {
    return (
      <div ref={confirmationRef} role="status" className="scroll-mt-20 rounded-2xl bg-navy p-8 text-navy-fg md:p-10">
        <Kicker onDark>Enquiry recorded</Kicker>
        <h3 className="mt-3 font-display text-section uppercase">Thank you, {name}.</h3>
        <p className="mt-4 text-navy-muted">
          Your enquiry has been saved on this device. To transmit it to the engineering team now,
          open your email client or call us directly.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <BtnLink href={mailto} variant="amber">
            Open email client
          </BtnLink>
          <BtnLink href={`tel:${company.phoneTel}`} variant="outlineLight">
            Call {company.phoneDisplay}
          </BtnLink>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-card p-6 hairline md:p-9" noValidate>
      <Kicker>Engineering enquiry</Kicker>
      <h3 className="mt-3 font-display text-section uppercase">Submit enquiry</h3>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name">
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="field"
            required
            suppressHydrationWarning
          />
        </Field>
        <Field label="Company" htmlFor="company">
          <input
            id="company"
            name="company"
            autoComplete="organization"
            value={org}
            onChange={(e) => setOrg(e.target.value)}
            className="field"
            required
            suppressHydrationWarning
          />
        </Field>
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="field"
            required
            suppressHydrationWarning
          />
        </Field>
        <Field label="Phone" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="field"
            required
            suppressHydrationWarning
          />
        </Field>
      </div>
      <Field label="Requirement type" htmlFor="requirement" className="mt-5">
        <select
          id="requirement"
          name="requirement"
          value={requirement}
          onChange={(e) => setRequirement(e.target.value)}
          className="field"
          suppressHydrationWarning
        >
          {requirementTypes.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Message" htmlFor="message" className="mt-5">
        <textarea
          id="message"
          name="message"
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="field min-h-36 resize-y"
          required
          suppressHydrationWarning
        />
      </Field>
      {error ? (
        <p className="mt-4 text-sm text-signal" role="alert">
          {error}
        </p>
      ) : null}
      <Btn type="submit" variant="amber" className="mt-6">
        Submit enquiry
      </Btn>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`min-w-0 ${className ?? ""}`} htmlFor={htmlFor}>
      <span className="kicker text-ink-subtle">{label}</span>
      <span className="mt-2 block">{children}</span>
    </label>
  );
}
