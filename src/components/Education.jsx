const Education = () => {
  return (
    <div className="flex flex-col text-portfolio-white">
      <div className="h-2/5 w-full bg-portfolio-lightgray rounded-xl drop-shadow-lg">
        <div className="pl-3 pt-3 m-0.5">
            <p className="text-3xl">University of California, Riverside</p>
            <p className="text-sm italic">expected graduation: 06/25</p>
            <p className="text-sm italic">GPA: 3.86</p>
        </div>
        <div className="flex justify-evenly m-0.5 pl-3">
            <div className="w-1/2">
                <p className="flex justify-center items-center underline">Relevant Course Work</p>
                <ul className="flex flex-col list-disc pl-5 mb-4 gap-0.5">
                    <li>Computer Science I & II</li>
                    <li>Intermediate Data Structures & Algorithms</li>
                    <li>Software Construction</li>
                    <li>Discrete Structures</li>
                    <li>Formal Language and Automata</li>
                    <li>Machine Organization & Aseembly Programming</li>
                </ul>
            </div>
            <div className="w-1/2">
                <p className="flex justify-center items-center underline">Associated Clubs</p>
                <ul className="flex flex-col list-disc pl-5 mb-4 gap-0.5">
                    <li>ACM@UCR
                        <ul className="list-disc pl-5">
                            <li>Full Stack Developer - Cutie & Citrus Hack</li>
                            <li>Full Stack Developer - bitByBIT</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Education