import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface NumericalBoxProps {
  RightAns: number;
}

export function NumericalBox({ RightAns }: NumericalBoxProps) {
  const [NumValue, setNumValue] = useState<number | "">("");
  const [checkNow, setcheckNow] = useState(false);
  const [isRight, setisRight] = useState(false);

  const handleSubmit = () => {
    console.log("triggered");
    setcheckNow(true);
    console.log(NumValue,RightAns);
    if (NumValue === RightAns) {
      console.log("Correct");
      setisRight(true);
    } else {
      setisRight(false);
    }
  };

  return (
    <div>
      <div className="flex items-center space-x-2">
        <Input
          type="number"
          placeholder="Enter your answer :"
          className="sm:w-5/9 lg:w-full"
          value={NumValue}
          onChange={(e) => {
            setNumValue(parseFloat(e.target.value));
            setcheckNow(false);
          }}
        />
        <Button type="button" variant="ghost" className="w-2/3" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
      {isRight ? (
        <h1 className="text-green-400 text-xl font-bold px-2 py-2">Correct</h1>
      ) : (
        NumValue &&
        checkNow ? (
          <h1 className="text-red-400 font-bold px-1 py-1">Wrong ,<span className="text-green-400"> The Right Answer is : &quot;{RightAns}&quot;</span></h1>
        ) : ("")
      )}
    </div>
  );
}
