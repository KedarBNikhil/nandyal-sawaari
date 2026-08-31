import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Smartphone, Users, Shield, MessageSquare, History, HeadphonesIcon } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sawaari | Local Rides in Nandyal" },
      {
        name: "description",
        content:
          "Sawaari connects customers with local captains for convenient rides around Nandyal. Your local ride, made simple.",
      },
      { property: "og:title", content: "Sawaari | Local Rides in Nandyal" },
      {
        property: "og:description",
        content: "Sawaari connects customers with local captains for convenient rides around Nandyal.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Services />
      <HowItWorks />
      <ServiceArea />
      <Safety />
      <Legal />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary/5 px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-primary sm:text-6xl lg:text-7xl">
          Sawaari
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-2xl font-semibold text-foreground sm:text-3xl">
          Your local ride, made simple.
        </p>
        <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
          Sawaari connects customers with local captains for convenient rides around Nandyal.
        </p>
        <div className="mt-10">
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary">
            Coming soon on mobile
          </span>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: MapPin,
      title: "Local Rides",
      description:
        "Convenient point-to-point rides within supported Sawaari service areas.",
    },
    {
      icon: Smartphone,
      title: "Customer App",
      description:
        "Customers can request rides, communicate with their captain and manage their ride experience through the Sawaari mobile app.",
    },
    {
      icon: Users,
      title: "Captain App",
      description:
        "Local captains can receive ride requests, complete trips and manage their ride activity through the Sawaari Captain app.",
    },
  ];

  return (
    <section id="services" className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Services</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Everything you need for easy, local travel in Nandyal.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { step: "1", title: "Request a ride", description: "Open the Sawaari app and request a ride when you need it." },
    { step: "2", title: "Captain accepts", description: "A nearby captain accepts your request and heads your way." },
    { step: "3", title: "Travel", description: "Travel to your destination and complete the ride in the app." },
  ];

  return (
    <section id="how-it-works" className="bg-secondary/30 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">How Sawaari Works</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Getting around Nandyal is easy in three simple steps.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((item) => (
            <div key={item.step} className="relative text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                {item.step}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-primary/20 bg-primary/5 p-4 text-center">
          <p className="text-sm font-medium text-primary">
            Ride booking is available through the Sawaari mobile application only.
          </p>
        </div>
      </div>
    </section>
  );
}

function ServiceArea() {
  return (
    <section id="service-area" className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm sm:p-12">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Service Area</h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                We are starting local and focused. Sawaari is launching in Nandyal, Andhra Pradesh.
              </p>
            </div>
            <div className="inline-flex items-center gap-3 rounded-xl bg-primary/10 px-5 py-3 text-primary">
              <MapPin className="h-5 w-5" aria-hidden="true" />
              <span className="font-semibold">Nandyal, Andhra Pradesh</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Safety() {
  const features = [
    {
      icon: Shield,
      title: "Transparent ride information",
      description: "See ride details clearly before and during your trip.",
    },
    {
      icon: MessageSquare,
      title: "In-app communication",
      description: "Connect with your captain through the Sawaari app.",
    },
    {
      icon: History,
      title: "Ride history",
      description: "Review past rides and activity from within the app.",
    },
    {
      icon: HeadphonesIcon,
      title: "Support and issue reporting",
      description: "Reach out for help and report issues when needed.",
    },
  ];

  return (
    <section id="safety" className="bg-secondary/30 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Safety & Trust</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Features designed to keep every ride clear and supported.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="mt-4 text-base font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Legal() {
  return (
    <section id="legal" className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Legal</h2>
        <p className="mt-4 text-muted-foreground">
          Review our policies to understand how Sawaari handles your information and governs use of the platform.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/privacy-policy"
            className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-and-conditions"
            className="inline-flex w-full items-center justify-center rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent sm:w-auto"
          >
            Terms & Conditions
          </a>
        </div>
      </div>
    </section>
  );
}
