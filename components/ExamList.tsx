import React from "react";
import ExamCard from "./ExamCard";
import { Jee, OtherExams } from "@/lib/examInfo";

export default function ExamList() {
  const commonClasses =
    "scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl text-muted-foreground text-stone-400 px-4 py-2 gap-x-2";
  return (
    <div className="flex items-center flex-col flex-column">
      <h1 className={commonClasses}>
        <mark className="py-1 px-2 text-black rounded-xl bg-orange-300">
          Jee 2024
        </mark>
      </h1>
      <div className="grid xl:grid-cols-3 items-center justify-center py-2 sm:grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
        {Jee.map(({ Title, RedirectValue, Day }) => (
          <ExamCard
            key={Title}
            Day={Day}
            RedirectValue={RedirectValue}
            Title={Title}
          />
        ))}
      </div>

      <h1 className={commonClasses}>
        <mark className="py-1 px-2 text-black rounded bg-teal-400">Misc</mark>
      </h1>
      <div className="grid xl:grid-cols-3 items-center justify-center py-2 sm:grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
        {OtherExams.map(({ Title, RedirectValue, Day }) => (
          <ExamCard
            key={Title}
            Day={Day}
            RedirectValue={RedirectValue}
            Title={Title}
          />
        ))}
      </div>
      <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight  text-muted-foreground text-stone-400 px-2 py-4 items-center justify-center flex gap-x-2">
        Made by{" "}
        <mark className="py-1 px-2 text-black rounded bg-stone-300">Dhruv</mark>
      </h1>
    </div>
  );
}
