import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";

// Lazy load components that are below the fold
const TestimonialsSection = dynamic(() => import("@/components/testimonials-section"), {
  loading: () => <div className="h-96 bg-surface-muted animate-pulse rounded-lg" />,
});

const OffersSection = dynamic(() => import("@/components/offers-section"), {
  loading: () => <div className="h-96 bg-surface-muted animate-pulse rounded-lg" />,
});

const MethodSection = dynamic(() => import("@/components/method-section"), {
  loading: () => <div className="h-96 bg-surface-muted animate-pulse rounded-lg" />,
});

const PhilosophySection = dynamic(() => import("@/components/philosophy-section"), {
  loading: () => <div className="h-96 bg-surface-muted animate-pulse rounded-lg" />,
});

const AppointmentSection = dynamic(() => import("@/components/appointment-section"), {
  loading: () => <div className="h-96 bg-surface-muted animate-pulse rounded-lg" />,
});

const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <div className="h-32 bg-surface-muted animate-pulse" />,
});

const Squares = dynamic(() => import("@/components/Squares"), {
  loading: () => <div className="w-full h-full bg-gray-100 animate-pulse" />,
});

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
