import { createFileRoute } from "@tanstack/react-router";
import { CategoryHero } from "../components/category/CategoryHero";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Leaf, ShieldCheck, Truck, Sparkles } from "lucide-react";

import storyFarmer from "@/assets/story-farmer.jpg";

export const Route = createFileRoute("/our-promise")({
  head: () => ({
    meta: [{ title: "Our Promise — Quality & Sourcing — Red B" }],
  }),
  component: OurPromise,
});

function OurPromise() {
  return (
    <div className="pb-20">
      <CategoryHero title="Quality We Stake Our Name On" image={storyFarmer} theme="burgundy" />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              eyebrow="The Journey"
              title="From farm to your door in 18 hours"
              copy="We control every step of the cold chain, ensuring what arrives on your table is as fresh as when it was harvested."
            />

            <div className="mt-12 space-y-8">
              {[
                {
                  time: "05:00 AM",
                  title: "Harvest",
                  desc: "Picked at peak ripeness before the sun warms the fields.",
                },
                {
                  time: "07:30 AM",
                  title: "Quality Grading",
                  desc: "Only the top 15% of the yield makes it into a Red B crate.",
                },
                {
                  time: "09:00 AM",
                  title: "Ozone Washing",
                  desc: "A natural process that removes 99.9% of surface pathogens.",
                },
                {
                  time: "11:00 AM",
                  title: "Cold Chain Transit",
                  desc: "Maintained at exactly 4°C to halt the aging process.",
                },
              ].map((step, i) => (
                <div key={i} className="flex gap-6 relative">
                  {i !== 3 && (
                    <div className="absolute left-[23px] top-12 bottom-[-32px] w-px bg-parchment" />
                  )}
                  <div className="w-12 h-12 rounded-full border border-parchment bg-cream flex items-center justify-center shrink-0 text-burgundy font-display font-medium text-sm relative z-10">
                    {i + 1}
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-gold uppercase tracking-wider">
                      {step.time}
                    </span>
                    <h4 className="font-display text-xl font-medium text-burgundy-dark mt-1">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-cream-warm rounded-[2rem] p-8 md:p-12">
            <h3 className="font-display text-3xl font-medium text-burgundy-dark mb-8">
              Our Standards
            </h3>
            <ul className="space-y-6">
              {[
                { icon: Leaf, text: "Strictly residue-free produce" },
                { icon: ShieldCheck, text: "FSSAI & ISO Certified facilities" },
                { icon: Truck, text: "Unbroken cold chain delivery" },
                { icon: Sparkles, text: "Plastic-neutral packaging" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-foreground font-medium">
                  <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-burgundy shrink-0 shadow-sm">
                    <item.icon className="w-5 h-5" />
                  </div>
                  {item.text}
                </li>
              ))}
            </ul>

            <div className="mt-12 bg-burgundy-dark text-cream p-8 rounded-2xl">
              <h4 className="font-display text-xl font-medium">100% Money-Back Guarantee</h4>
              <p className="text-sm mt-3 text-cream/80 leading-relaxed">
                If something isn't perfect, we refund it immediately. No photos required, no
                questions asked. We trust you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
