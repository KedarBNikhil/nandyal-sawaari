import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/delete-account")({
  head: () => ({
    meta: [
      { title: "Delete Your Sawaari Account | Sawaari" },
      {
        name: "description",
        content:
          "Request deletion of your Sawaari customer or captain account. Learn how to delete your account from the app or by email.",
      },
      { property: "og:title", content: "Delete Your Sawaari Account | Sawaari" },
      {
        property: "og:description",
        content:
          "Request deletion of your Sawaari customer or captain account. Learn how to delete your account from the app or by email.",
      },
      { property: "og:url", content: "/delete-account" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/delete-account" }],
  }),
  component: DeleteAccountPage,
});

function DeleteAccountPage() {
  return (
    <LegalLayout title="Delete Your Sawaari Account" lastUpdated="31 August 2026">
      <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <p>
            This page explains how Sawaari customers and captains can delete their account. If you
            no longer wish to use Sawaari, you can request account deletion using the options below.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Delete account from the app</h2>
          <p className="mt-2">
            If the in-app option is available on your version of Sawaari, you can delete your
            account directly from the app:
          </p>
          <p className="mt-2 font-medium text-foreground">Profile → About → Delete Account</p>
          <p className="mt-2">
            Follow the on-screen instructions to confirm the deletion. Once confirmed, your account
            deletion request will be processed.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            Request account deletion outside the app
          </h2>
          <p className="mt-2">
            You can also request account deletion by emailing us. Please send your request from the
            email address associated with your Sawaari account, if possible.
          </p>
          <p className="mt-2">
            Email:{" "}
            <a
              href="mailto:kedbnik@gmail.com"
              className="font-medium text-primary underline underline-offset-2 transition-colors hover:text-primary/80"
            >
              kedbnik@gmail.com
            </a>
          </p>
          <p className="mt-2">Please include the following details in your request:</p>
          <ul className="mt-2 list-outside list-disc space-y-1 pl-5 marker:text-muted-foreground">
            <li>Full name</li>
            <li>Registered phone number</li>
            <li>Account type: Customer or Captain</li>
            <li>A clear statement requesting deletion of your Sawaari account</li>
          </ul>
          <p className="mt-2">
            For your safety, do not share OTPs, passwords, UPI PINs, bank PINs, or any other
            sensitive credentials in your email.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">What happens after deletion</h2>
          <p className="mt-2">
            After we receive and verify your request, we will delete or anonymise your personal
            information that is no longer required.
          </p>
          <p className="mt-2">
            However, certain limited records may still be retained where reasonably necessary for:
          </p>
          <ul className="mt-2 list-outside list-disc space-y-1 pl-5 marker:text-muted-foreground">
            <li>Fraud and promotional-abuse prevention</li>
            <li>Ride or payment disputes</li>
            <li>Accounting or transaction records</li>
            <li>Safety investigations</li>
            <li>Legal or regulatory obligations</li>
          </ul>
          <p className="mt-2">
            Any information we retain will not be used as an active Sawaari account or to provide
            ride services to you.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Contact details</h2>
          <dl className="mt-2 space-y-1">
            <div>
              <dt className="inline font-medium text-foreground">Operator:</dt>{" "}
              <dd className="inline">Kedar Nikhil</dd>
            </div>
            <div>
              <dt className="inline font-medium text-foreground">Support / Privacy Email:</dt>{" "}
              <dd className="inline">
                <a
                  href="mailto:kedbnik@gmail.com"
                  className="font-medium text-primary underline underline-offset-2 transition-colors hover:text-primary/80"
                >
                  kedbnik@gmail.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="inline font-medium text-foreground">Contact Number:</dt>{" "}
              <dd className="inline">
                <a
                  href="tel:+919030279703"
                  className="font-medium text-primary underline underline-offset-2 transition-colors hover:text-primary/80"
                >
                  9030279703
                </a>
              </dd>
            </div>
          </dl>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Privacy Policy</h2>
          <p className="mt-2">
            For more information about how we handle your data, please read our{" "}
            <Link
              to="/privacy-policy"
              className="font-medium text-primary underline underline-offset-2 transition-colors hover:text-primary/80"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
