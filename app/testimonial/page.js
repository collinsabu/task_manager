export const metadata = {
  title: "Testimonials - Ziprus",
  description: "Read what our clients have to say about Ziprus. Discover the experiences of our satisfied customers.",
  openGraph: {
    title: "Testimonials - Ziprus",
    description: "Read what our clients have to say about Ziprus. Discover the experiences of our satisfied customers.",
    url: "https://www.ziprus.com/testimonials",
    images: [
      {
        url: "https://www.ziprus.com/images/testimonial-banner.jpg", // replace with a relevant image
        width: 800,
        height: 600,
        alt: "Happy Ziprus clients",
      },
    ],
    siteName: "Ziprus",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ziprus",
    title: "Testimonials - Ziprus",
    description: "Read what our clients have to say about Ziprus. Discover the experiences of our satisfied customers.",
    images: ["https://www.ziprus.com/images/testimonial-banner.jpg"], // replace with a relevant image
  },
};

import React from "react";
import Image from "next/image";
import img from "./img.jpg";

export default function Testimonial() {
  return (
    <section className="bg-base_color mt-10 mb-10 sm:mb-16 poppins">
      <div className="container w-3/4 mx-auto sm:flex">
        <div className="sm:w-6/12 bg-black">
          <Image src={img} alt="Happy client" className="img-container" />
        </div>

        <div className="sm:w-6/12 sm:p-14 text-center py-10 text-white">
          
          <div>
    <h4 className=" text-xl mb-6">Testimonial</h4>

    <p class="text-sm font-extralight leading-loose">
        &quot;As a long-standing partner of Ziprus Chemical, I can confidently say that their products have consistently exceeded our expectations. At Agro Feed, we rely on high-quality minerals for our animal feed production, and Ziprus Chemical has been our go-to supplier for years. Their calcium and other minerals are of exceptional quality, which has significantly contributed to the efficiency and effectiveness of our feed formulations.
    </p>

    <p class="text-sm font-extralight leading-loose">
        Beyond the products, their customer service is outstanding. The team at Ziprus Chemical is always responsive, professional, and committed to ensuring timely deliveries, even when unexpected challenges arise. Their dedication to maintaining high standards in both product quality and service has made a real difference to our business. I highly recommend Ziprus Chemical to any company seeking reliable and top-grade mineral supplies.&quot;
    </p>

    <p class="text-sm font-semibold leading-loose text-green-500">
        — Earnest, Agro Feed, Lagos, Nigeria
    </p>
</div>

        </div>
      </div>
    </section>
  );
}
