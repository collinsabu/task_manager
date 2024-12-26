// pages/career/page.js

export const metadata = {
  title: "Careers - Join Ziprus",
  description:
    "Explore exciting career opportunities at Ziprus. Visit our website to view current job openings.",
  openGraph: {
    title: "Careers - Join Ziprus",
    description:
      "Explore exciting career opportunities at Ziprus. Visit our website to view current job openings.",
    url: "https://www.zipruschemicals.com/career",
    images: [
      {
        url: "https://www.ziprus.com/images/career-banner.jpg", // Replace with a suitable image
        width: 800,
        height: 600,
        alt: "Careers at Ziprus",
      },
    ],
    siteName: "Ziprus",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ziprus",
    title: "Careers - Join Ziprus",
    description:
      "Explore exciting career opportunities at Ziprus. Visit our website to view current job openings.",
    images: ["https://www.ziprus.com/images/career-banner.jpg"], // Replace with a suitable image
  },
};

export default function CareerPage() {
  return (
    <section className="min-h-screen bg-base_color flex items-center justify-center px-4 py-16 my-10">
      <div className="bg-white p-8 shadow-lg rounded-lg max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-base_text mb-4">
          Explore Careers at Ziprus Chemicals
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          We&apos;re always looking for talented individuals to join our team. Visit
          our official careers page to explore current job openings and apply.
        </p>
        <a
          href="https://www.zipruschemicals.com/career"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-base_two text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-base_text transition duration-300"
        >
          View Job Openings
        </a>
      </div>
    </section>
  );
}
