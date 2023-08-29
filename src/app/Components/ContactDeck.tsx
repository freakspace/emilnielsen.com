"use client";

import ContactButton from "./ContactButton";

const ContactDeck = () => {
  return (
    <section className="p-4 md:p-10 bg-white">
      <div className="container mx-auto border border-neutral-300 rounded-3xl p-8 md:p-20 bg-blue-600 shadow-xl md:flex md:justify-between">
        <h3 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-0">
          Schedule a{" "}
          <span className="underline decoration-2 md:decoration-4 underline-offset-4 md:underline-offset-8">
            free
          </span>{" "}
          consultation
        </h3>
        <ContactButton />
      </div>
    </section>
  );
};

export default ContactDeck;
