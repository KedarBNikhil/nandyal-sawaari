import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Sawaari" },
      {
        name: "description",
        content:
          "Read the Sawaari Privacy Policy to understand how we collect, use, and protect your information.",
      },
      { property: "og:title", content: "Privacy Policy | Sawaari" },
      {
        property: "og:description",
        content: "Read the Sawaari Privacy Policy to understand how we collect, use, and protect your information.",
      },
      { property: "og:url", content: "/privacy-policy" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="[Date to be inserted]">
      <Section title="Introduction">
        <Placeholder />
      </Section>

      <Section title="Information We Collect">
        <Placeholder />
      </Section>

      <Section title="Account and Contact Information">
        <Placeholder />
      </Section>

      <Section title="Location Information">
        <Placeholder />
      </Section>

      <Section title="Ride and Transaction Information">
        <Placeholder />
      </Section>

      <Section title="Device and Technical Information">
        <Placeholder />
      </Section>

      <Section title="How We Use Information">
        <Placeholder />
      </Section>

      <Section title="How We Share Information">
        <Placeholder />
      </Section>

      <Section title="Location Data">
        <Placeholder />
      </Section>

      <Section title="Data Retention">
        <Placeholder />
      </Section>

      <Section title="Account Deletion">
        <Placeholder />
      </Section>

      <Section title="Security">
        <Placeholder />
      </Section>

      <Section title="Children's Privacy">
        <Placeholder />
      </Section>

      <Section title="User Rights">
        <Placeholder />
      </Section>

      <Section title="Third-Party Services">
        <Placeholder />
      </Section>

      <Section title="Changes to This Policy">
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
      This section is a placeholder. The final Sawaari Privacy Policy content will be inserted here before
      publication.
    </p>
  );
}
