const Education = ({ university, expectedGrad, gpa, courses, clubs }) => {
  return (
    <div className="flex flex-col text-portfolio-white">
      <div className="h-2/5 w-full bg-portfolio-lightgray rounded-xl drop-shadow-lg">
        <div className="pl-3 pt-3 m-0.5">
          <p className="text-3xl">{university}</p>
          <p className="text-sm italic">expected graduation: {expectedGrad}</p>
          <p className="text-sm italic">GPA: {gpa}</p>
        </div>
        <div className="flex justify-evenly m-0.5 pl-3">
          <div className="w-1/2">
            <p className="flex justify-center items-center underline">
              Relevant Course Work
            </p>
            <ul className="flex flex-col list-disc pl-5 mb-4 gap-0.5">
              {courses.map((course, idx) => (
                <li key={idx}>{course}</li>
              ))}
            </ul>
          </div>
          <div className="w-1/2">
            <p className="flex justify-center items-center underline">
              Associated Clubs
            </p>
            <ul className="flex flex-col list-disc pl-5 mb-4 gap-0.5">
              {clubs.map((club, idx) => (
                <li key={idx}>
                  {club.name}
                  <ul className="list-disc pl-5">
                    {club.roles.map((role, idx) => (
                      <li key={idx}>{role}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
