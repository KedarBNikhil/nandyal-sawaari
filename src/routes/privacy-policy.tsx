import { createFileRoute } from "@tanstack/react-router";
import { LegalDocumentContent } from "@/components/LegalDocumentContent";
import { LegalLayout } from "@/components/LegalLayout";
import { legalDocuments } from "@/legal/legalDocuments";

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
    <LegalLayout title={legalDocuments.privacy.title} lastUpdated="31 August 2026">
      <LegalDocumentContent content={legalDocuments.privacy.content} />
    </LegalLayout>
  );
}
