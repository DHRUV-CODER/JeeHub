import ExamList from "@/components/ExamList";
import Header from "@/components/Header";
import { ModeToggle } from "@/components/ModeToggle";
import Footer from "@/components/ui/footer";

export default function Page() {
  return (
    <div>
      <Header />
      <ExamList />
      <Footer />
    </div>
  );
}
