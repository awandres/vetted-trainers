import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Dumbbell, Home, Video, ChevronRight } from "lucide-react";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { GoogleReviews } from "@/components/GoogleReviews";

const CALENDLY_URL = "https://calendly.com/vetted-health/vetted-trainers-disco";

// Services ordered: Private Gym first, In-Home second, Virtual last
const services = [
  {
    icon: Dumbbell,
    title: "Private Gym Personal Training",
    description: "Experience our award-winning In-Gym Personal Training at our private facility. We combine fascial techniques with tailored workouts to enhance your functional strength.",
    image: "/images/Personal Training Service/personal-training-1.JPG",
    cta: "BOOK NOW",
  },
  {
    icon: Home,
    title: "In-Home Personal Training",
    description: "Get fit with Vetted Trainers' In-Home Personal Training in Frederick, Maryland. We bring tissue work and dynamic, equipment-free workouts to your location.",
    image: "/images/Personal Training Service/personal-training-2.JPG",
    cta: "SCHEDULE",
  },
  {
    icon: Video,
    title: "Virtual Training",
    description: "Can't make it to our gym? Join remotely for a mobility, flexibility, and strength workout guided by your Vetted Trainer from anywhere in the world.",
    image: "/images/VT-33.jpg",
    cta: "SIGN UP",
  },
];

const stats = [
  { value: "11+", label: "Years Experience" },
  { value: "500+", label: "Clients Trained" },
  { value: "3", label: "Training Options" },
  { value: "100%", label: "Dedication" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image - Reverted to original */}
        <div className="absolute inset-0">
          <Image
            src="/images/get-to-work.jpg"
            alt="Personal training at Vetted Trainers"
            fill
            className="object-cover object-center"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#181818]/70 via-[#181818]/50 to-[#181818]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 drop-shadow-2xl">
            Are you ready to<br />
            <span className="text-[#50BFF4]">FEEL</span> better,<br />
            <span className="text-[#50BFF4]">MOVE</span> better,<br />
            and <span className="text-[#50BFF4]">BE</span> better?
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
            Train at our private, members-only gym in Frederick, Maryland. Vetted Trainers are dedicated to your success with personalized programs that get results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#50BFF4] hover:bg-[#3DAEE3] text-black px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-lg hover:shadow-[#50BFF4]/30 hover:scale-105 flex items-center justify-center gap-2"
            >
              Get Vetted!
              <ArrowRight className="h-5 w-5" />
            </a>
            <Link
              href="/services/"
              className="w-full sm:w-auto border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-white/5 text-center"
            >
              View Services
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* What is Vetted Trainers Section */}
      <section className="py-20 bg-[#181818]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              WHAT IS <span className="text-[#50BFF4]">VETTED TRAINERS</span>?
            </h2>
            <div className="w-24 h-1 bg-[#50BFF4] mx-auto mb-8" />
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Vetted Trainers is a team of top-notch trainers who combine the best of strength training, 
              mobility, and tissue work to optimize your human movement. Train at our private, 
              appointment-only gym in Frederick, MD, or let us bring the workout to you with 
              in-home and virtual options.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-[#50BFF4] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Our Mission - same heading style as What is VT */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              OUR <span className="text-[#50BFF4]">MISSION</span>
            </h2>
            <div className="w-24 h-1 bg-[#50BFF4] mx-auto mb-8" />
            <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
              At Vetted Trainers, our mission is to ignite a global revolution of health and well-being 
              through comprehensive movement and nutrition education which will empower individuals 
              to reclaim their lives and create lasting change.
            </p>
          </div>
        </div>
      </section>

      {/* Full Width Gym Image */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <Image
          src="/images/Building images/gym-room.JPG"
          alt="Vetted Trainers private gym facility in Frederick, MD"
          fill
          className="object-cover object-center"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#181818] via-transparent to-[#181818]" />
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#252525]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              Personal Training <span className="text-[#50BFF4]">Services</span>
            </h2>
            <div className="w-24 h-1 bg-[#50BFF4] mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <a
                key={i}
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-[#181818] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-[#50BFF4]/10 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Service Image - no hover zoom */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181818] to-transparent" />
                  <div className="absolute top-4 left-4 p-3 bg-[#50BFF4] rounded-xl">
                    <service.icon className="h-6 w-6 text-black" />
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-[#50BFF4] font-bold group-hover:gap-3 transition-all">
                    {service.cta}
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services/"
              className="inline-flex items-center gap-2 text-white border-2 border-white/30 hover:border-[#50BFF4] hover:text-[#50BFF4] px-8 py-4 rounded-full font-bold transition-all"
            >
              View All Services
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Vetted Nutrition Section */}
      <section className="py-20 bg-[#181818]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
                Vetted <span className="text-[#50BFF4]">Nutrition</span>
              </h2>
              <blockquote className="text-xl text-gray-300 italic mb-8 border-l-4 border-[#50BFF4] pl-6">
                &ldquo;Vetted Nutrition Philosophy: We teach people to feed their body and good bacteria 
                in a sustainable way that promotes a healthy gut which promotes fat loss and lean muscle growth.&rdquo;
              </blockquote>
              <a
                href="https://www.vettednutrition.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#50BFF4] hover:bg-[#3DAEE3] text-black px-8 py-4 rounded-full font-bold transition-all hover:shadow-lg"
              >
                Learn More
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#181818]">
              <Image
                src="/images/Weight Loss Service/IMG_1220.JPG"
                alt="Vetted Nutrition - Weight Loss and Body Composition"
                fill
                className="object-contain"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#50BFF4] rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-20 bg-[#252525]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              What Our <span className="text-[#50BFF4]">Clients Say</span>
            </h2>
            <div className="w-24 h-1 bg-[#50BFF4] mx-auto" />
          </div>
          <GoogleReviews />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#181818]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              More <span className="text-[#50BFF4]">Reviews</span>
            </h2>
            <div className="w-24 h-1 bg-[#50BFF4] mx-auto" />
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section - Reverted to chalk-hands background */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/images/chalk-hands.png')" }}
        />
        <div className="absolute inset-0 bg-[#181818]/90" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
            Ready to <span className="text-[#50BFF4]">Transform</span> Your Fitness?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join our private, members-only gym and start training with Frederick&apos;s premier personal trainers.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#50BFF4] hover:bg-[#3DAEE3] text-black px-10 py-5 rounded-full font-bold text-lg transition-all hover:shadow-lg hover:shadow-[#50BFF4]/30 hover:scale-105 animate-pulse-glow"
          >
            Get Vetted!
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </>
  );
}
