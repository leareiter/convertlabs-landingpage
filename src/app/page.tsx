import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import TestimonialsSection from "@/components/testimonials-section";
import OffersSection from "@/components/offers-section";
import AppointmentSection from "@/components/appointment-section";
import Footer from "@/components/footer";
import Squares from "@/components/Squares";
import MethodSection from "@/components/method-section";
import PhilosophySection from "@/components/philosophy-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative font-be-vietnam-pro tracking-tight">
      <Navbar />
      <div className="w-full">
        <div className="flex">
          <div className="hidden lg:block w-[10%] bg-white items-center justify-center border-r border-gray-200">
            <Squares
              speed={0.1}
              squareSize={20}
              direction='down'
              borderColor='#f3f4f6'
            />
          </div>

          <div className="w-full lg:w-[80%] flex flex-col gap-16">
            <HeroSection />
            <TestimonialsSection />
            <OffersSection />
            <MethodSection />
            <PhilosophySection />
            <AppointmentSection />
          </div>

          <div className="hidden lg:block w-[10%] items-center justify-center border-l border-gray-200">
            <Squares
              speed={0.1}
              squareSize={20}
              direction='down'
              borderColor='#f3f4f6'
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
