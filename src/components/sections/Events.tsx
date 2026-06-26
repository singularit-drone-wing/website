// ============================================================
// Events — Past events grid section
// Displays event cards in a responsive grid layout.
// ============================================================

"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import EventCard from "@/components/cards/EventCard";
import { events } from "@/data/events";

export default function Events() {
  return (
    <SectionWrapper
      id="events"
      title="Past Events"
      subtitle="Competitions, workshops, and symposiums organized and participated in by SingularIT."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        {events.map((event, i) => (
          <EventCard key={event.id} event={event} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
