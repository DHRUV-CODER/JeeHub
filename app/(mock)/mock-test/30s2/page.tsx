import React from "react";
import ExamQuestion from "@/components/ExamQuestion";
import examData from "../../../../public/30s2.json";

export default function Page() {
  return (
    <div>
      <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl text-muted-foreground py-10 px-2">
        Enjoy , Isme percentile nahi milegi :)
      </h1>
      {examData.map((question) => (
        <ExamQuestion
          key={question.qid}
          QuestionId={question.qid} // Assuming qid is unique
          Question={question.question_value}
          QuestionNumber={question.question_number}
          Options={question.options || {}} // Handle empty options
          CorrectAnswer={question.correct_answer ?question.correct_answer : 0 }
        />
      ))}
    </div>
  );
}
