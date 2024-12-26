import React from "react";

import Image from "next/image";
import Link from "next/link";

//internal import
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import banner from "./banner.jpg";

export default function Impact() {
  return (
    <section className=" bg-base_color poppins mb-10 sm:mb-16 mt-10">
      <div className="banner relative ">
        <Image class="img-container" src={banner} alt="donation" />
        <div class="overlay"></div>
        <div className="absolute top-40  left-16">
          <h4 className="text-3xl font-semibold text-white tracking-wides mb-2 ">
            Our <span className="text-base_text">Reaching</span> Arms <br /> to
            Africa
          </h4>
          <p className="text-white mb-4">
            Join us to share Love and <br /> raech as many people possible
          </p>
          <Link
            href="/partnership"
            className="bg-base_text  px-5 py-2 mt-6 font-semibold hover:bg-base_color ease-in-out duration-75 hover:text-white"
          >
            Find Out More
          </Link>
        </div>
      </div>
      <div className="container sm:w-3/4 w-[79%] mx-auto">
        <div className=" ">
          <div className="text text-white pt-20 text-sm font-extralight leading-loose">
            <div>
              

              <p class="text-sm font-extralight leading-loose">
                At Ziprus Chemical, we believe that a successful business is one
                that gives back to the community and makes a positive impact
                beyond its core operations. As a leading provider of industrial
                solid minerals, our growth and success go hand in hand with our
                commitment to sharing these successes with the communities that
                support us, particularly in Africa.
                While our charitable initiatives are in the planning stages, we
                are dedicated to launching impactful projects that reflect our
                values. Our aim is to uplift communities by contributing not
                just to economic growth, but also to social and environmental
                well-being.
              </p><br/>

              <h4 className="text-xl font-semibold">Upcoming Projects</h4>

              <h4>1. Providing Clean Drinking Water in Ikpeshi</h4>

              <p class="text-sm font-extralight leading-loose">
                Many communities in Africa still face challenges in accessing
                clean water, a fundamental human right. We are committed to
                addressing this issue by providing clean and safe drinking water
                to the people of Ikpeshi. This project will include the
                installation of water purification systems and the construction
                of wells, ensuring a sustainable and reliable source of water
                for the community.
              </p>

              <h4>2. School Uniforms for Auchi Village</h4>

              <p class="text-sm font-extralight leading-loose">
                Education is the key to a brighter future, and we believe in
                removing barriers to learning. We plan to provide school
                uniforms to students in Auchi Village, helping alleviate the
                financial burden on families. By doing so, we aim to encourage
                school attendance and allow students to focus on their
                education, giving them the best chance for success.
              </p>

              <h4>3. Reaching Out to the Needy</h4>

              <p class="text-sm font-extralight leading-loose">
                Our commitment extends beyond specific projects to a broader
                mission of supporting the most vulnerable. Whether through food
                donations, healthcare support, or other forms of assistance, we
                are dedicated to reaching out to those in need. We are actively
                exploring partnerships and initiatives that will enable us to
                make a meaningful difference in the lives of those who need it
                most.
              </p><br/>

              <h4 className="text-xl font-semibold">Our Vision for the Future</h4>

              <p class="text-sm font-extralight leading-loose">
                Our &quot;Reaching Arm to Africa&quot; initiative is guided by our core
                values of compassion, integrity, and responsibility. As we move
                forward, we envision a future where Ziprus Chemical not only
                thrives but also plays a pivotal role in fostering positive
                change across Africa.
             

             

               
                We invite our customers, partners, and stakeholders to join us
                in this journey of giving back. Together, we can make a lasting
                impact on countless lives and build stronger, healthier
                communities.
             </p>

              <p class="text-sm font-extralight leading-loose">
                Stay tuned for updates on our projects as we work to bring these
                initiatives to life and create a better tomorrow for all.
              </p>
            </div>
          </div>

          <div className="sm:flex pb-10 pt-20 gap-5">
            <div className="sm:w-1/3 mb-4 sm:mb-0">
              <Image src={img1}  alt="charity donation"/>
            </div>
            <div className="sm:w-1/3 mb-4 sm:mb-0">
              <Image src={img2} alt="charity donation" />
            </div>
            <div className="sm:w-1/3">
              <Image src={img3}  alt="charity donation"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
