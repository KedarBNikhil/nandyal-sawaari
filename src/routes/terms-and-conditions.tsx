import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Sawaari" },
      {
        name: "description",
        content: "Read the Sawaari Terms & Conditions that govern use of the platform and services.",
      },
      { property: "og:title", content: "Terms & Conditions | Sawaari" },
      {
        property: "og:description",
        content: "Read the Sawaari Terms & Conditions that govern use of the platform and services.",
      },
      { property: "og:url", content: "/terms-and-conditions" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms-and-conditions" }],
  }),
  component: TermsAndConditionsPage,
});

function TermsAndConditionsPage() {
  return (
    <LegalLayout title="Terms & Conditions" lastUpdated="[Date to be inserted]">
      <Section title="Introduction">
        <Placeholder />
      </Section>

      <Section title="Acceptance of Terms">
        <Placeholder />
      </Section>

      <Section title="Eligibility">
        <Placeholder />
      </Section>

      <Section title="Sawaari Platform">
        <Placeholder />
      </Section>

      <Section title="Customer Accounts">
        <Placeholder />
      </Section>

      <Section title="Captain Accounts">
        <Placeholder />
      </Section>

      <Section title="Ride Requests">
        <Placeholder />
      </Section>

      <Section title="Fares and Payments">
        <Placeholder />
      </Section>

      <Section title="Promotions and Free Rides">
        <Placeholder />
      </Section>

      <Section title="Cancellations">
        <Placeholder />
      </Section>

      <Section title="User Conduct">
        <Placeholder />
      </Section>

      <Section title="Communication Between Customers and Captains">
        <Placeholder />
      </Section>

      <Section title="Safety">
        <Placeholder />
      </Section>

      <Section title="Prohibited Activities">
        <Placeholder />
      </Section>

      <Section title="Suspension and Termination">
        <Placeholder />
      </Section>

      <Section title="Intellectual Property">
        <Placeholder />
      </Section>

      <Section title="Third-Party Services">
        <Placeholder />
      </Section>

      <Section title="Disclaimers">
        <Placeholder />
      </Section>

      <Section title="Limitation of Liability">
        <Placeholder />
      </Section>

      <Section title="Indemnity">
        <Placeholder />
      </Section>

      <Section title="Governing Law">
        <Placeholder />
      </Section>

      <Section title="Changes to Terms">
        <Placeholder />
      </Section>

      <Section title="Contact Us">
        <Placeholder />
      </Section>
    </LegalLayout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      <div className="mt-3 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

function Placeholder() {
  return (
    <p>
      This section is a placeholder. The final Sawaari Terms & Conditions content will be inserted here before
      publication.
    </p>
  );
}
