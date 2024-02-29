import React from 'react';
import CaseStudyCard from './CaseStudyCard';
import { images } from '@/exports/images';
import { ICaseStudy } from '@/Types/types';

const CaseStudy = () => {
  const CaseStudyData: ICaseStudy[] = [
    {
      id: 1,
      title: 'HeculeX',
      url: '/cases-study/herculex',
      imageUrl: images.caseStudy1,
    },
    {
      id: 2,
      title: 'PyraQiN',
      url: '/cases-study/herculex',
      imageUrl: images.caseStudy2,
    },
    {
      id: 3,
      title: 'Saruya',
      url: '/cases-study/herculex',
      imageUrl: images.caseStudy3,
    },
    {
      id: 4,
      title: 'PyraQiN',
      url: '/cases-study/herculex',
      imageUrl: images.caseStudy4,
    },
    {
      id: 5,
      title: 'Airborne',
      url: '/cases-study/herculex',
      imageUrl: images.caseStudy5,
    },
    {
      id: 6,
      title: 'Vortex',
      url: '/cases-study/herculex',
      imageUrl: images.caseStudy6,
    },
  ];

  return (
    <section className='my-[100px]'>
      <div className=' my-10'>
        <h2 className='text-center my-2'>Case Studies</h2>
        <hr />
      </div>

      <section className='container w-full md:w-[75%] '>
        <CaseStudyCard data={CaseStudyData} />
      </section>
    </section>
  );
};

export default CaseStudy;
