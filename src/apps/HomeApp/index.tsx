import React from 'react';
import { useAppSelector } from '../../redux/store';
import { mediaQuery, useMediaQuery, bgPath, ShowImage } from '../../modules/lib';
import { HomeComp } from '../../comps/home/HomeComp';
import { WorksComp } from '../../comps/home/WorksComp';
import { AboutComp } from '../../comps/home/AboutComp';
import { ContactFormComp } from '../../comps/home/ContactFormComp';

export const HomeApp: React.FC = () => {
  const home = useAppSelector((state) => state.home);
  const contactForm = useAppSelector((state) => state.contactForm);
  const isSp:boolean = useMediaQuery(mediaQuery.sp);

  return (
    <HomeComp>
      <WorksComp works={home.works} isSp={isSp}/>
      <AboutComp about={home.about} isSp={isSp}/>
      <ContactFormComp email={contactForm.email} isSp={isSp}/>
    </HomeComp>
  );
};
