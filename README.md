# Sawaari Public Presence

Create a clean, production-ready public website for Sawaari, a local ride service app for Nandyal.

Purpose

This website is informational only for now.

Do NOT build:

Ride booking

Login/signup

Customer dashboard

Captain dashboard

Payments

Live ride tracking

Account management

Any backend functionality

The main purpose of this website is to:

Give Sawaari a professional public web presence.

Briefly explain the services offered by Sawaari.

Provide publicly accessible URLs for:

Privacy Policy

Terms & Conditions

These legal pages will be linked from the Sawaari mobile apps and submitted where required for Google Play.

Branding and design

Follow the existing Sawaari mobile app visual identity and theme colour.

Use the app's primary theme colour as the main brand colour throughout the website for:

Header highlights

Buttons

Icons

Section accents

Footer accents

Links and active states

Use a clean, modern, mobile-first design appropriate for a ride-hailing/local mobility service.

Visual direction:

Friendly and local

Trustworthy

Modern but simple

Spacious layouts

Rounded cards where appropriate

Good readability

White/light neutral backgrounds with the Sawaari theme colour as the primary accent

Fully responsive on phone, tablet and desktop

Do not introduce a completely different colour palette.

Site structure

Create these pages/routes:

1. Home

Route: /

Sections:

Hero

Display:
Sawaari

Suggested headline:
Your local ride, made simple.

Supporting text:
Sawaari connects customers with local captains for convenient rides around Nandyal.

Add a simple CTA such as:
Coming soon on mobile

Do NOT add a Book Ride button.

Our Services

Use simple cards explaining:

Local Rides
Convenient point-to-point rides within supported Sawaari service areas.

Customer App
Customers can request rides, communicate with their captain and manage their ride experience through the Sawaari mobile app.

Captain App
Local captains can receive ride requests, complete trips and manage their ride activity through the Sawaari Captain app.

How Sawaari Works

Simple 3-step visual explanation:

Request a ride in the Sawaari app.

A nearby captain accepts the request.

Travel to your destination and complete the ride.

Make it very clear that rides cannot currently be booked through this website.

Add a small message:
Ride booking is available through the Sawaari mobile application only.

Service Area

For now mention:
Launching in Nandyal, Andhra Pradesh

Avoid making claims about coverage outside areas actually supported.

Safety / Trust

Add a lightweight section around:

Transparent ride information

In-app communication

Ride history

Support and issue reporting

Do not make absolute guarantees such as "100% safe".

Legal

Include prominent links to:

Privacy Policy

Terms & Conditions

2. Privacy Policy

Route:
/privacy-policy

Create a professional long-form legal-page layout.

For now, create a clearly structured placeholder/document container where the final Sawaari Privacy Policy can be inserted.

Use headings suitable for a mobility application, including:

Introduction

Information We Collect

Account and Contact Information

Location Information

Ride and Transaction Information

Device and Technical Information

How We Use Information

How We Share Information

Location Data

Data Retention

Account Deletion

Security

Children's Privacy

User Rights

Third-Party Services

Changes to This Policy

Contact Us

Do not invent legal commitments that have not been provided.

Make this page directly accessible without login.

3. Terms & Conditions

Route:
/terms-and-conditions

Create a professional long-form legal-page layout.

Create structured placeholders/headings for:

Introduction

Acceptance of Terms

Eligibility

Sawaari Platform

Customer Accounts

Captain Accounts

Ride Requests

Fares and Payments

Promotions and Free Rides

Cancellations

User Conduct

Communication Between Customers and Captains

Safety

Prohibited Activities

Suspension and Termination

Intellectual Property

Third-Party Services

Disclaimers

Limitation of Liability

Indemnity

Governing Law

Changes to Terms

Contact Us

Do not fabricate regulatory approvals, licences, insurance coverage or legal guarantees.

Make this page directly accessible without login.

Header

Desktop navigation:

Sawaari logo/name

Home

Services

Privacy Policy

Terms & Conditions

On mobile, use a simple hamburger menu.

The Sawaari logo/name should return to Home.

Footer

Include:

Sawaari

Local mobility for Nandyal.

Links:

Home

Privacy Policy

Terms & Conditions

Add:
© 2026 Sawaari. All rights reserved.

Optionally leave placeholders for:

Support email

Contact information

Do not invent contact information.

SEO and metadata

Add suitable metadata for each page.

Home title:
Sawaari | Local Rides in Nandyal

Privacy Policy title:
Privacy Policy | Sawaari

Terms title:
Terms & Conditions | Sawaari

Add sensible descriptions.

Ensure /privacy-policy and /terms-and-conditions are normal public URLs that can be opened directly and shared externally.

Technical requirements

Responsive design

Fast-loading

Semantic HTML

Accessible colour contrast

Proper heading hierarchy

No authentication required

No database required

No Supabase integration required

No API integrations

No unnecessary packages

Keep the implementation simple and maintainable

Legal-page content should be easy to edit later

Do not over-engineer the project.

The website should primarily function as a polished public informational site and permanent public host for Sawaari's Privacy Policy and Terms & Conditions.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://nandyal-sawaari.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f0807f3c-0329-4d69-940c-cc1f23eac0ec).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
