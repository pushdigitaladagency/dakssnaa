import { createFileRoute } from "@tanstack/react-router";
import { Kicker, PageHero, Section } from "@/components/site/ui";
import { company } from "@/data/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms | Sree Dakssnaa Aerospace & Defence" },
      { name: "description", content: "Website terms for Sree Dakssnaa Aerospace & Defence." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero
        kicker="Legal"
        title="Terms of use"
        copy="This website is an information and enquiry channel, not a contractual offer."
      />
      <Section>
        <Kicker>Terms</Kicker>
        <div className="mt-6 max-w-2xl space-y-4 text-ink-muted">
          <p>
            Content on this site is drawn from the company profile of {company.legalName} and
            is provided for general information. It does not constitute a bid, quotation,
            certification claim or commitment to supply.
          </p>
          <p>
            Equipment specifications are reproduced from that profile. Where a value is not
            stated, it is omitted rather than estimated. Capability-enhancement items are
            identified as such and are not represented as currently operational.
          </p>
          <p>
            Programme names, customers and partners appear only where the source material
            names them. Logos under “customers / industry ecosystem” are presented as they
            appear in the profile and do not by themselves prove a current direct contract.
          </p>
          <p>
            Use of this website is at your own discretion. For a binding discussion, contact
            the company using the details on the Contact page.
          </p>
        </div>
      </Section>
    </>
  );
}
