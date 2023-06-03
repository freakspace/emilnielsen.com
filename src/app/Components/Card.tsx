import React from "react";
import { ICardProps } from "typings";

const Card = (props: ICardProps) => {
  return (
    <div className="relative bg-white m-4 border border-blue-500/30 rounded-lg p-6 flex items-center shadow-xl shadow-blue-500/15">
      {props.barWidth && (
        <div
          className={
            "absolute bg-blue-600 bottom-0 left-0 rounded-lg h-2 " +
            props.barWidth
          }
        ></div>
      )}
      <div className="flex-1 text-center">
        <h2 className="font-extrabold text-2xl text-blue-600">{props.title}</h2>
        {props.link && (
          <a
            className="underline decoration-2 decoration-dotted underline-offset-4 decoration-blue-500 text-lg text-black font-bold mb-2"
            href="https://www.google.dk"
          >
            {props.link}
          </a>
        )}
        {props.description && <p>{props.description}</p>}
        {props.stringList.length > 0 && (
          <p className="mt-4">
            {props.stringList.map((item, id) => {
              if (id === props.stringList.length - 1) {
                return <span>{item}</span>;
              }

              if (props.stringList.length - 1 - id === 1) {
                return <span>{item} & </span>;
              }

              return <span>{item}, </span>;
            })}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
