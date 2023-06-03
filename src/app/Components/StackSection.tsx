"use client";
import React from "react";
import { ICardProps } from "typings";
import Card from "../Components/Card";

const StackSection = (props: {}) => {
  return (
    <section className="h-[100vh] flex items-center">
      <div className="container mx-auto py-6">
        <div className="flex gap-6">
          <div className="w-1/4">
            <h2 className="text-7xl font-bold mb-4">Title</h2>
            <br />
            <p>Description</p>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold">Sprog</h2>
            <div className="w-3/4 grid grid-cols-3 gap-6">
              <div className="relative bg-white border border-blue-500/30 rounded-lg p-6 flex items-center shadow-xl shadow-blue-500/15">
                <div className="flex-1 text-center">
                  <h2 className="font-extrabold text-2xl text-blue-600">
                    Card Title
                  </h2>
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-bold">Frameworks</h2>
            <div className="w-3/4 grid grid-cols-3 gap-6">
              <div className="relative bg-white border border-blue-500/30 rounded-lg p-6 flex items-center shadow-xl shadow-blue-500/15">
                <div className="flex-1 text-center">
                  <h2 className="font-extrabold text-2xl text-blue-600">
                    Card Title
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackSection;
