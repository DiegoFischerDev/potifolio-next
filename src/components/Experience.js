import ExperienceDetails from './ExperienceDetails';
import ExperienceLine from './ExperienceLine';


export default function Experience() {
  return (
    <div className='my-28 tablet:my-24 mobile:my-20'>
      <h2 className='font-bold text-6xl desktop:text-5xl tablet:text-4xl mobile:text-3xl mb-24 tablet:mb-20 mobile:mb-14 w-full text-center'>
        Experience
      </h2>

      <div className='w-[75%] tablet:w-[90%] mobile:w-[95%] mx-auto relative'>

        <ExperienceLine />
        <ul className='w-full flex flex-col items-start justify-between ml-4 tablet:ml-6'>
          <ExperienceDetails
            position="Junior Frontend Developer (Part-time)"
            company="Arsenal Tecnologia"
            time="from Jan-2023 until now"
            address="Évora, Portugal · On-site"
            work="Arsenal is a software development company that operates in Brazil and Portugal. As a junior front-end developer, I contribute to the development of Evo, an application designed specifically for doctors to streamline patient visits. In my role, I focus on building the user interface and user experience for the new version of Evo. By utilizing my front-end development skills, I work closely with the team to create visually appealing and user-friendly designs."
          />
          <ExperienceDetails
            position="Engineer Officer"
            company="PETROBRAS PETROLEO BRASILEIRO"
            time="2017 - 2022"
            address="Brazil"
            work="PETROBRAS is one of the largest oil exploration and production companies in the world. As first engineer officer, I was team leader and managed the services of operation and maintenance of equipment in the engine room aboard the LPG ship Jorge Amado (Transpetro). Planning, checking, and acting to ensure continuous improvements and develop more efficient problem-solving strategies. One of my main responsibilities was to always provide a safe work environment to the crew with a collaborative, flexible, respectful attitude."
          />
          <ExperienceDetails
            position="Marine Consultant"
            company="Bureau Veritas "
            time="2016 - 2017"
            address="Brazil"
            work="Bureau Veritas is a French company specialized in testing, inspection and certification. As a ship inspector, I performed inspections and tests of equipment on board offshore vessels. I also performed document audits, investigations, classification and treatment of marine accidents; Proposals for contractual safety attachments; Development of safety procedures; Visits to vessels for HSE meetings with captains."
          />

        </ul>
      </div>

    </div>
  );
}