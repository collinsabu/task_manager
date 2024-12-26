export const metadata = {
  title: "Contact Us - Ziprus",
  description:
    "Get in touch with Ziprus, your trusted mineral producers. Contact us for inquiries, orders, or support.",
  openGraph: {
    title: "Contact Us - Ziprus",
    description:
      "Get in touch with Ziprus, your trusted mineral producers. Contact us for inquiries, orders, or support.",
    url: "https://www.ziprus.com/contact",
    images: [
      {
        url: "https://www.ziprus.com/images/contact-us-banner.jpg", // Replace with a relevant image
        width: 800,
        height: 600,
        alt: "Contact Ziprus",
      },
    ],
    siteName: "Ziprus",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ziprus",
    title: "Contact Us - Ziprus",
    description:
      "Get in touch with Ziprus, your trusted mineral producers. Contact us for inquiries, orders, or support.",
    images: ["https://www.ziprus.com/images/contact-us-banner.jpg"], // Replace with a relevant image
  },
};

// React icons import
import { MdLocationPin } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { IoPhonePortrait } from "react-icons/io5";

export default function Contact() {
  return (
    <section className="bg-base_color my-10  py-16 px-4">
      {/* Header Section */}
      <div className="container mx-auto max-w-5xl text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-base_text mb-4">
          Get in Touch
        </h1>
        <p className="text-white sm:text-lg">
          We&apos;d love to hear from you! Reach out to us via email, phone, or visit
          our location.
        </p>
      </div>

      {/* Contact Info and Map Section */}
      <div className="container mx-auto max-w-6xl mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Contact Information
          </h2>
          <div className="space-y-6">
            {/* Location */}
            <div className="flex items-center space-x-4">
              <div className="text-base_text">
                <MdLocationPin size={28} />
              </div>
              <div>
                <p className="font-medium text-gray-700">
                  Km 102 Auchi Igarra Road, Ikpeshi,
                </p>
                <p className="text-gray-600">Edo State, Nigeria</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="text-base_text">
                <FaEnvelope size={24} />
              </div>
              <div>
                <p className="font-medium text-gray-700">
                  info@Zipruschemicals.com
                </p>
                <p className="font-medium text-gray-700">
                  sales@Zipruschemicals.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4">
              <div className="text-base_text">
                <IoPhonePortrait size={24} />
              </div>
              <div>
                <p className="font-medium text-gray-700">+2342018870085</p>
                <p className="font-medium text-gray-700">+2347085544340</p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <iframe
            className="w-full h-72 sm:h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31587.123456!2d5.845847!3d7.379992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d2cf01e12345%3A0x234567890abcdef!2sIkpeshi%2C+Edo+State%2C+Nigeria!5e0!3m2!1sen!2s!4v1674456767234"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
