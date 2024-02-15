import { CornerDownRight, Sun } from "lucide-react"


import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"



type CardProps = React.ComponentProps<typeof Card>

export default function ExamCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle className="flex gap-1">27th Shift 1 Morning <Sun  className="text-yellow-500" fill="white" /></CardTitle>
        <CardDescription>Attempt this paper as mock test.</CardDescription>
      </CardHeader>
      <CardFooter>
        <Link href="\mock-test" className="w-full">
        <Button className="w-full font-bold">
          <CornerDownRight className="mr-2 h-4 w-4" /> Solve
        </Button></Link>
      </CardFooter>
    </Card>
  )
}
