"use client";
import React from "react";
import { ICardProps } from "typings";
import Card from "../Components/Card";

const CardSection = (props: {
  cards: ICardProps[];
  title: string;
  description: string;
}) => {
  return (
    <section className="h-[100vh] flex items-center">
      <div className="container mx-auto py-6">
        <div className="flex gap-6">
          <div className="w-1/4">
            <h2 className="text-7xl font-bold mb-4">{props.title}</h2>
            <br />
            <p>{props.description}</p>
          </div>
          <div className="w-3/4 grid grid-cols-3 gap-6">
            {props.cards.map((card) => (
              <Card {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
