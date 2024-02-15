"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import axios from "axios";

import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import { sendResponse } from "next/dist/server/image-optimizer";
import { NumericalBox } from "./NumericalBox";

interface ExamQuestionProps {
  Question: string;
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
  QuestionId,
  Question,
  QuestionNumber,
  Options,
  CorrectAnswer,
}) => {
  function rectifyLatex(latexString: string): string {
    // Replace $$...$$ with \(...\)
    latexString = latexString.replace(/\$\$(.*?)\$\$/g, "\\($1\\)");

    return latexString;
  }

  const [qid, setQuestionId] = useState("");
  const [RightAnswer, setCorrectAnswer] = useState("");
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [SelectedButtonIndex, setSelectedButtonIndex] = useState<number | null>(
    0
  );

  useEffect(() => {
    setQuestionId(QuestionId);
  }, [SelectedButtonIndex, RightAnswer]);

  const handleOptionClick = (value: string, index: number) => {
    setSelectedValue(value);

    console.log(index, CorrectAnswer);
    if (index === CorrectAnswer) {
      console.log("correct");
      setSelectedButtonIndex(index);
      setCorrectAnswer("Correct");
    } else {
      console.log("wrong");
      setSelectedButtonIndex(index);
      setCorrectAnswer("Wrong");
    }
  };

  return (
    <div>
      <div className="px-1 py-2">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-5xl text-zinc-300">
          Question {QuestionNumber} :
        </h1>
        <p className="text-xl py-2 px-1 font-sans text-muted-foreground font-bold ">
          <Latex>{rectifyLatex(Question)}</Latex>
        </p>
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
                    className={`w-full font-sans font-semibold text-left sm:text-xs lg:text-lg overflow-hidden overflow-ellipsis whitespace-nowrap ${
                      RightAnswer === "Correct" && SelectedButtonIndex === index
                        ? "bg-green-500 text-black"
                        : RightAnswer === "Wrong" &&
                          SelectedButtonIndex === index
                        ? "bg-red-500 text-black"
                        : ""
                    }`}
                    onClick={() => handleOptionClick(option, index)}
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
                      onClick={() => handleOptionClick(option.img_url, index)}
                    >
                      <img
                        src={option.img_url}
                        alt={`Option ${optionKey}`}
                        width="150px"
                        height="150px"
                        className="sepia"
                      />
                    </Button>
                  )
                )}
              </div>
            ))
          )}
        </div>
        {/* {selectedValue && (
          <p>
            You have selected:{" "}
            <strong>
              {RightAnswer}, {SelectedButtonIndex}
            </strong>
          </p>
        )} */}
      </div>
    </div>
  );
};

export default ExamQuestion;
