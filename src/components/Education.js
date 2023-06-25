import EducationDetails from './EducationDetails';
import ExperienceDetails from './ExperienceDetails';
import ExperienceLine from './ExperienceLine';


export default function Education() {
  return (
    <div className='mb-28 w-full'>
      <h2 className='font-bold text-6xl mb-24 w-full text-center'>
        Education
      </h2>

      <div className='w-[75%] mx-auto relative'>

        <ExperienceLine />
        <ul className='w-full flex flex-col items-end justify-between ml-4'>
          <EducationDetails
            course="Software Development"
            place="Estácio University"
            time="2023 - 2025"
            info="Bachelor's degree"
          />
            <EducationDetails
            course="React Js Bootcamp"
            place="Treina Recife"
            time="2023"
            info="Presential Course"
          />
            <EducationDetails
            course="React Native Bootcamp"
            place="Treina Recife"
            time="2022"
            info="Presential Course"
          />
          <EducationDetails
            course="Nautical Science (Engineer Officer)"
            place="Brazilian Merchant Navy Officers School"
            time="2011 - 2015"
            info="Bachelor's degree"
          />

        </ul>
      </div>

    </div>
  );
}