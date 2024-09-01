const Education = ({ university, expectedGrad, gpa, courses, clubs }) => {
  return (
    <div className="flex flex-col text-portfolio-white">
      <div className="h-2/5 w-full bg-portfolio-lightgray rounded-xl drop-shadow-lg">
        <div className="px-3 pt-3 m-0.5">
          <p className="text-xl text-center md:text-3xl">{university}</p>
          <div className="flex justify-between px-10 text-sm italic md:text-lg">
            <p>expected graduation: {expectedGrad}</p>
            <p>GPA: {gpa}</p>
          </div>
        </div>
        <div className="flex justify-evenly m-0.5 pl-3">
          <div className="w-1/2 text-xs py-3 md:text-lg">
            <p className="flex justify-center items-center underline">
              Relevant Course Work
            </p>
            <ul className="flex flex-col list-disc pl-5 mb-4 gap-0.5">
              {courses.map((course, idx) => (
                <li key={idx}>{course}</li>
              ))}
            </ul>
          </div>

          <div className="w-1/2 text-xs py-3 md:text-lg">
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
