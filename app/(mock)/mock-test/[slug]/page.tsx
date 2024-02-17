"use client";
import React, { useEffect, useState } from "react";
import ExamQuestion from "@/components/ExamQuestion";
import Loader from "@/components/ui/loader";

export default function Page({ params }: { params: { slug: string } }) {
  async function fetchData() {
    try {
      const response = await fetch(`/${params.slug}.json`);
      if (response.ok) {
        const data = await response.json();
        console.log("Fetched data:", data);
        setExamData(data);
      } else {
        console.error("Failed to fetch data:", response.status);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  const [examData, setExamData] = useState<any[]>([]); // Initialize with an empty array
  useEffect(() => {
    fetchData(); // Call fetchData inside useEffect
  }, [params.slug]); // Add params.slug to the dependency array

  return (
    <div>
      <div className="py-2 px-2 gap-y-2 gap-x-2 grid grid-cols-1">
        <h1>
          {examData.length === 0 && (
            <div className="min-h-screen flex justify-center items-center overscroll-none">
              <Loader />
            </div>
          ) }
        </h1>
        {examData.map((question) => (
          <ExamQuestion
            key={question.qid}
            QuestionId={question.qid} // Assuming qid is unique
            Question={question.question_value}
            QuestionNumber={question.question_number}
            Options={question.options || {}} // Handle empty options
            CorrectAnswer={question.correct_answer}
          />
        ))}
      </div>
    </div>
  );
}
