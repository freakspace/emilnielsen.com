"use client";

import { PopupModal, useCalendlyEventListener } from "react-calendly";

import React from "react";

const Calendly = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  const handleEventScheduled = () => {
    console.log("Scheduled event");
  };
  useCalendlyEventListener({
    onEventScheduled: (e) => handleEventScheduled(),
  });

  return (
    <PopupModal
      url="https://calendly.com/emilnielsen/30min"
      onModalClose={() => setIsOpen(false)}
      open={isOpen}
      rootElement={document.getElementById("root")!}
    />
  );
};

export default Calendly;
