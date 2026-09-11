import { createFileRoute } from "@tanstack/react-router";
import { Kicker, PageHero, Section } from "@/components/site/ui";
import { company } from "@/data/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Sree Dakssnaa Aerospace & Defence" },
      { name: "description", content: "Privacy policy for the Sree Dakssnaa website." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero
        kicker="Legal"
        title="Privacy Policy"
        copy="How this website handles information submitted through the enquiry form."
      />
      <Section>
        <Kicker>Scope</Kicker>
        <div className="mt-6 max-w-2xl space-y-4 text-ink-muted">
          <p>
            {company.legalName} operates this website to present manufacturing capabilities
            and to receive engineering enquiries.
          </p>
          <p>
            If you submit the enquiry form, the details you enter (name, company, email,
            phone, requirement type and message) are stored in your browser on this device
            so that you can open an email to {company.email}. They are not transmitted to a
            server by this website unless you send that email or contact us by phone.
          </p>
          <p>
            We do not sell personal information. This page does not describe a customer,
            employee or supplier data-processing programme beyond the public website.
          </p>
          <p>
            For any privacy request, write to {company.email} or call {company.phoneDisplay}.
          </p>
        </div>
      </Section>
    </>
  );
}
