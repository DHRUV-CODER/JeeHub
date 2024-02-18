"use client";

import React, { useEffect, useState } from "react";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";

import { Button } from "./ui/button";
import { NumericalBox } from "./NumericalBox";

interface ExamQuestionProps {
  Question: {
    text: string | null;
    img_url: string;
  };
  QuestionId: string;
  QuestionNumber: number;
  Options: {
    [key: string]:
      | string
      | { text: string | null; img_url: string }
      | undefined;
  };
  CorrectAnswer: number;
}

const ExamQuestion: React.FC<ExamQuestionProps> = ({
  Question,
  QuestionNumber,
  Options,
  CorrectAnswer,
}) => {
  function rectifyLatex(latexString: string): string {
    // Replaces $$...$$ with \(...\)
    latexString = latexString.replace(/\$\$(.*?)\$\$/g, "\\($1\\)");

    return latexString;
}

  const [RightAnswer, setCorrectAnswer] = useState("");
  const [SelectedButtonIndex, setSelectedButtonIndex] = useState<number | null>(
    0
  );

  useEffect(() => {}, [SelectedButtonIndex, RightAnswer]);

  const handleOptionClick = (index: number) => {
    console.log(index, CorrectAnswer);
    if (index === CorrectAnswer) {
      setSelectedButtonIndex(index);
      setCorrectAnswer("Correct");
    } else {
      setSelectedButtonIndex(index);
      setCorrectAnswer("Wrong");
    }
  };

  return (
    <div>
      <div className={"px-1 py-2 border-2 border-stone-900 "}>
        <h1
          className={`scroll-m-20 text-xl font-extrabold tracking-tight  text-zinc-300 border-4 inline-block max-content items-center justify-center bg-stone-900 rounded-md px-1 py-1 hover:text-zinc-400  hover:border-dashed ${
            RightAnswer === "Correct"
              ? "border-green-500 text-black"
              : RightAnswer === "Wrong"
              ? "border-red-500 text-black"
              : ""
          }`}
        >
          Question {QuestionNumber} :
        </h1>
        <p className="text-xl py-2 px-1 font-sans text-muted-foreground font-bold ">
          <Latex>{rectifyLatex(Question.text ? Question.text : "N.A")}</Latex>
        </p>
        {Question.img_url && (
          <img
            src={Question.img_url}
            alt={`Ques ${QuestionNumber}`}
            className="grayscale brightness-200"
          />
        )}

        <div className="grid grid-cols-2 gap-4 w-full py-5">
          {Object.entries(Options).length === 0 ? (
            <NumericalBox RightAns={CorrectAnswer} />
          ) : (
            Object.entries(Options).map(([optionKey, option], index) => (
              <div key={optionKey}>
                {typeof option === "string" ? (
                  // Render the option text directly
                  <Button
                    variant="ghost"
                    className={`w-full font-sans font-semibold text-left sm:text-xs lg:text-lg overflow-hidden overflow-ellipsis whitespace-nowrap px-3 py-2 ${
                      RightAnswer === "Correct" && SelectedButtonIndex === index
                        ? "bg-green-500 text-black"
                        : RightAnswer === "Wrong" &&
                          SelectedButtonIndex === index
                        ? "bg-red-500 text-black"
                        : ""
                    }`}
                    onClick={() => handleOptionClick(index)}
                  >
                    <Latex strict>{rectifyLatex(option)}</Latex>
                  </Button>
                ) : (
                  option && (
                    <Button
                      variant="outline"
                      className={`w-full h-full border-4 ${
                        RightAnswer === "Correct" &&
                        SelectedButtonIndex === index
                          ? "border-green-500"
                          : RightAnswer === "Wrong" &&
                            SelectedButtonIndex === index
                          ? "border-red-500"
                          : ""
                      }`}
                      onClick={() => handleOptionClick(index)}
                    >
                      <img
                        src={option.img_url}
                        alt={`Option ${optionKey}`}
                        width="150px"
                        height="150px"
                        className="brightness-200"
                      />
                    </Button>
                  )
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ExamQuestion;
