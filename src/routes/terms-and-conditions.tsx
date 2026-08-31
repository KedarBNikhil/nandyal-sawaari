import { createFileRoute } from "@tanstack/react-router";
import { LegalDocumentContent } from "@/components/LegalDocumentContent";
import { LegalLayout } from "@/components/LegalLayout";
import { legalDocuments } from "@/legal/legalDocuments";

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
    <LegalLayout title={legalDocuments.terms.title} lastUpdated="31 August 2026">
      <LegalDocumentContent content={legalDocuments.terms.content} />
    </LegalLayout>
  );
}
