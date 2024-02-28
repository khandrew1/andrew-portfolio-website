import Education from "@/components/education/Education";
import { EDUCATION } from "@/data/education/Education";

const Page = () => {
  return (
    <Education
      university={EDUCATION.university}
      expectedGrad={EDUCATION.expectedGrad}
      gpa={EDUCATION.gpa}
      courses={EDUCATION.courses}
      clubs={EDUCATION.clubs}
    />
  );
};

export default Page;
