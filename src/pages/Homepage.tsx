import { CTASection } from "./Home/CTASection";
import { FAQSection } from "./Home/FAQSection";
import { FeaturesSection } from "./Home/FeaturesSection";
import { HeroSection } from "./Home/HeroSection";
import { HowItWorks } from "./Home/HowItWorks";
import { SecuritySection } from "./Home/SecuritySection";
import { StatsSection } from "./Home/StatsSection";

export default function HomePage() {
    return (
        <main className="min-h-screen bg-background transition-colors overflow-hidden relative">
            {/* Background Decorative Orbs */}
            <div className="absolute top-0 -left-[10%] w-[50%] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute bottom-[20%] -right-[10%] w-[40%] h-[500px] bg-purple-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="flex flex-col gap-y-24 md:gap-y-32">
                <HeroSection />

                {/* Main Scoped Container for all sections */}
                <div className="max-w-7xl mx-auto w-full px-6 space-y-32 pb-24 container">
                    <StatsSection />
                    <FeaturesSection />
                    <HowItWorks />
                    <SecuritySection />
                    <FAQSection />
                    <CTASection />
                </div>
            </div>
        </main>
    );
}
