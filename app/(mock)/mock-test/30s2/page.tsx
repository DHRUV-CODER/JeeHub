import React from "react";
import ExamQuestion from "@/components/ExamQuestion";
import examData from "../../../../public/30s2.json";

export default function Page() {
  return (
    <div>
      <div className="py-2 px-2 gap-y-2 gap-x-2 grid grid-cols-1">
        {examData.map((question) => (
          <ExamQuestion
            key={question.qid}
            QuestionId={question.qid} // Assuming qid is unique
            Question={question.question_value}
            QuestionNumber={question.question_number}
            Options={question.options || {}} // Handle empty options
            CorrectAnswer={question.correct_answer ? question.correct_answer :0}
          />
        ))}
      </div>
    </div>
  );
}
