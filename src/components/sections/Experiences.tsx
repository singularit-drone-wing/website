// ============================================================
// Experiences — Timeline of achievements and experiences
// Uses ExperienceCard in a vertical timeline layout.
// ============================================================

"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import ExperienceCard from "@/components/cards/ExperienceCard";
import { experiences } from "@/data/experiences";

export default function Experiences() {
  return (
    <SectionWrapper
      id="experiences"
      title="Experiences"
      subtitle="Milestones that define our journey — competitions won, systems deployed, and breakthroughs achieved."
    >
      <div className="max-w-2xl">
        {experiences.map((exp, i) => (
          <ExperienceCard key={exp.id} experience={exp} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
