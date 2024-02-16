import ExamCard from "@/components/ExamCard";
import React from "react";

export default function Page() {
  return (
    <div>
      <div className="grid xl:grid-cols-3 gap-x-2 gap-y-2 items-center justify-center py-2 sm:grid-cols-1 md:grid-cols-2">
        <ExamCard
          TitleValue="Bitsat 2022"
          RedirectValue="bitsat-2022"
          Day={true}
        />
              <ExamCard
          TitleValue="Neet 2022 , May 7"
          RedirectValue="neet-2023"
          Day={true}
        />
      </div>
      <div className="grid xl:grid-cols-3 gap-x-2 gap-y-2 items-center justify-center py-2 sm:grid-cols-1 md:grid-cols-2">

        <ExamCard
          TitleValue="27th Shift 1 Morning"
          RedirectValue="27s1"
          Day={true}
        />
        <ExamCard
          TitleValue="29th Shift 1 Morning"
          RedirectValue="29s1"
          Day={true}
        />
        <ExamCard
          TitleValue="30th Shift 1 Morning"
          RedirectValue="30s1"
          Day={true}
        />
        <ExamCard
          TitleValue="31th Shift 1 Morning"
          RedirectValue="31s1"
          Day={true}
        />
        <ExamCard
          TitleValue="1st Shift 1 Morning"
          RedirectValue="1s1"
          Day={true}
        />
        <ExamCard
          TitleValue="27th Shift 2 Evening"
          RedirectValue="27s2"
          Day={false}
        />
        <ExamCard
          TitleValue="29th Shift 2 Evening"
          RedirectValue="29s2"
          Day={false}
        />
        <ExamCard
          TitleValue="30th Shift 2 Evening"
          RedirectValue="30s2"
          Day={false}
        />
        <ExamCard
          TitleValue="31th Shift 2 Evening"
          RedirectValue="31s2"
          Day={false}
        />
                <ExamCard
          TitleValue="1st Shift 2 Evening"
          RedirectValue="1s2"
          Day={false}
        />
      </div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-muted-foreground text-orange-100 px-2 py-2 items-center justify-center flex">
        Made by Brexy :)
      </h1>
    </div>
  );
}
