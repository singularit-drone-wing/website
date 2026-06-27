// ============================================================
// Members — Team members grid section
// Responsive grid of MemberCards with staggered entrance.
// ============================================================

"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import MemberCard from "@/components/cards/MemberCard";
import { members } from "@/data/members";

export default function Members() {
  return (
    <SectionWrapper
      id="members"
      title="Our Team"
      subtitle="The engineers, designers, and researchers behind SINGULARIT."
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {members.map((member, i) => (
          <MemberCard key={member.id} member={member} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
