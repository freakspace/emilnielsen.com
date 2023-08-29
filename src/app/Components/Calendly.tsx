"use client";

import { PopupModal } from "react-calendly";

import React from "react";

const Calendly = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
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
