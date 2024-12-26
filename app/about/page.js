export const metadata = {
  title: "About Ziprus - Your Trusted Mineral Producers",
  description: "Learn more about Ziprus, a leading mineral production company in Africa. Discover our vision, mission, and values.",
  openGraph: {
    title: "About Ziprus - Your Trusted Mineral Producers",
    description: "Learn more about Ziprus, a leading mineral production company in Africa. Discover our vision, mission, and values.",
    url: "https://www.ziprus.com/about",
    images: [
      {
        url: "https://www.ziprus.com/images/about-us-banner.jpg", // replace with a relevant image
        width: 800,
        height: 600,
        alt: "Ziprus About Us",
      },
    ],
    siteName: "Ziprus",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ziprus",
    title: "About Ziprus - Your Trusted Mineral Producers",
    description: "Learn more about Ziprus, a leading mineral production company in Africa. Discover our vision, mission, and values.",
    images: ["https://www.ziprus.com/images/about-us-banner.jpg"], // replace with a relevant image
  },
};

import Image from "next/image";
import Image1 from "./img1.jpg";

export default function About() {
  return (
    <main className="mt-5 mb-10 sm:mb-16 bg-base_color poppins">
      <div className="container flex flex-col justify-center items-center m-auto w-4/5">
        <div className="sm:flex">
          <div className="sm:w-2/4">
            <Image src={Image1} alt="About Us Image" width={800} />
          </div>
          <div className="sm:pr-20 sm:pl-9 mt-12 sm:w-2/4">
            <h2 className="text-base_text text-2xl font-semibold mb-6">About Us</h2>
            <div className="text-white font-extralight text-sm">
              <p className="mb-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eligendi totam voluptatum obcaecati autem vel est optio id. Magni consectetur similique ex. Magnam fugiat dolor rerum minima tenetur.
              </p>
              <p className="mb-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eligendi totam voluptatum obcaecati autem vel est optio id. Magni consectetur similique ex. Magnam fugiat dolor rerum minima tenetur.
              </p>
              <p className="mb-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eligendi totam voluptatum obcaecati autem vel est optio id. Magni consectetur similique ex. Magnam fugiat dolor rerum minima tenetur.
              </p>
            </div>
          </div>
        </div>

        <div className="sm:flex mt-20">
          <div className="sm:hidden">
            <Image src={Image1} alt="Our Vision Image" width={800} />
          </div>
          <div className="sm:pr-14 sm:pl-9 mt-12 sm:w-2/4">
            <h2 className="text-base_text text-2xl font-semibold mb-6">Our Vision</h2>
            <div className="text-white font-extralight text-sm">
              <p className="mb-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eligendi totam voluptatum obcaecati autem vel est optio id. Magni consectetur similique ex. Magnam fugiat dolor rerum minima tenetur.
              </p>
              <p className="mb-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eligendi totam voluptatum obcaecati autem vel est optio id. Magni consectetur similique ex. Magnam fugiat dolor rerum minima tenetur.
              </p>
              <p className="mb-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eligendi totam voluptatum obcaecati autem vel est optio id. Magni consectetur similique ex. Magnam fugiat dolor rerum minima tenetur.
              </p>
            </div>
          </div>
          <div className="hidden sm:block w-2/4">
            <Image src={Image1} alt="Our Vision Image" width={800} />
          </div>
        </div>
      </div>
    </main>
  );
}
