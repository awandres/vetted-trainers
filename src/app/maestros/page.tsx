import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Maestros",
  description: "Meet the Movement Maestros at Vetted Trainers - our team of expert personal trainers in Frederick, Maryland. Schedule your session with our skilled professionals.",
  openGraph: {
    title: "Movement Maestros | Vetted Trainers",
    description: "Meet our team of expert personal trainers. Schedule your personalized training session today.",
    url: "https://www.vettedtrainers.com/maestros/",
  },
};

const CALENDLY_URL = "https://calendly.com/vetted-health/vetted-trainers-disco";

// Vagaro scheduling links for each trainer
const VAGARO_BASE = "https://www.vagaro.com//Users/BusinessWidget.aspx?enc=";

const maestros = [
  {
    name: "Jose",
    fullName: "Jose Recio",
    image: "/images/Trainer Headshots/Jose Recio Headshot.png",
    scheduleUrl: CALENDLY_URL,
  },
  {
    name: "Kade",
    fullName: "Kade Arrington",
    image: "/images/Trainer Headshots/Kade Arrington(1).png",
    scheduleUrl: CALENDLY_URL,
  },
  {
    name: "Michael",
    fullName: "Michael Coleman",
    image: "/images/Trainer Headshots/Michael Coleman Head Shot.png",
    scheduleUrl: CALENDLY_URL,
  },
  {
    name: "Youssef",
    fullName: "Youssef Salem",
    image: "/images/Trainer Headshots/Youssef Salem Headshot.png",
    scheduleUrl: CALENDLY_URL,
  },
  {
    name: "Lex",
    fullName: "Lex Titus",
    image: "/images/Trainer Headshots/Lex Titus headshot.png",
    scheduleUrl: CALENDLY_URL,
  },
  {
    name: "Shane",
    fullName: "Shane Mullen",
    image: "/images/Trainer Headshots/Shane Mullen Headshot.png",
    scheduleUrl: CALENDLY_URL,
  },
  {
    name: "Ben",
    fullName: "Ben Sicat",
    image: "/images/Trainer Headshots/Ben Sicat headshot.png",
    scheduleUrl: CALENDLY_URL,
  },
  {
    name: "Nick",
    fullName: "Nick Rispoli",
    image: "/images/Trainer Headshots/Nick Rispoli Headshot.png",
    scheduleUrl: CALENDLY_URL,
  },
  {
    name: "Jae",
    fullName: "Jaelyn Blanc",
    image: "/images/Trainer Headshots/Jaelyn Blanc headshot.png",
    scheduleUrl: CALENDLY_URL,
  },
  {
    name: "Luke",
    fullName: "Luke Boyd",
    image: "/images/Trainer Headshots/Luke Boyds headshot.png",
    scheduleUrl: CALENDLY_URL,
  },
  {
    name: "Tony",
    fullName: "Tony Bianchini",
    image: "/images/Trainer Headshots/Tony Bianchini(2).png",
    scheduleUrl: CALENDLY_URL,
  },
  {
    name: "Will",
    fullName: "Will Albritton",
    image: "/images/Trainer Headshots/Will Albritton .png",
    scheduleUrl: CALENDLY_URL,
  },
];

export default function MaestrosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-[#181818]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Movement <span className="text-[#50BFF4]">Maestros</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Our team of expert trainers is ready to guide you on your fitness journey. 
              Click on any trainer to schedule your session.
            </p>
            <div className="w-24 h-1 bg-[#50BFF4] mx-auto" />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 bg-[#252525]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/hE06nPdwIpM"
              title="The greatest group of men ever assembled - Vetted Trainers"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Maestros Grid */}
      <section className="py-20 bg-[#181818]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Row 1 - 3 trainers */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {maestros.slice(0, 3).map((maestro) => (
              <MaestroCard key={maestro.name} maestro={maestro} />
            ))}
          </div>

          {/* Row 2 - 3 trainers */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {maestros.slice(3, 6).map((maestro) => (
              <MaestroCard key={maestro.name} maestro={maestro} />
            ))}
          </div>

          {/* Row 3 - 3 trainers */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {maestros.slice(6, 9).map((maestro) => (
              <MaestroCard key={maestro.name} maestro={maestro} />
            ))}
          </div>

          {/* Row 4 - 3 trainers */}
          <div className="grid md:grid-cols-3 gap-8">
            {maestros.slice(9, 12).map((maestro) => (
              <MaestroCard key={maestro.name} maestro={maestro} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#252525]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Not Sure Who to Train With?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Request a consultation and we&apos;ll match you with the perfect Maestro for your goals.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#50BFF4] hover:bg-[#3DAEE3] text-black px-10 py-5 rounded-full font-bold text-lg transition-all hover:shadow-lg hover:shadow-[#50BFF4]/30 hover:scale-105"
          >
            Request Consultation
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </>
  );
}

function MaestroCard({ maestro }: { maestro: typeof maestros[0] }) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Card with image only */}
      <div className="bg-[#252525] rounded-2xl overflow-hidden w-full">
        {/* Image - no gradient overlay */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={maestro.image}
            alt={`${maestro.fullName} - Vetted Trainer`}
            fill
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* Name below the card */}
      <h3 className="text-2xl font-bold text-white mt-4">{maestro.name}</h3>

      {/* Button below the name */}
      <a
        href={maestro.scheduleUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center justify-center gap-2 bg-[#50BFF4] hover:bg-[#3DAEE3] text-black px-6 py-3 rounded-full font-bold transition-all hover:shadow-lg w-full"
      >
        <Calendar className="h-4 w-4" />
        Schedule with {maestro.name}
      </a>
    </div>
  );
}

