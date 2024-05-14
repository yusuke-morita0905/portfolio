import React from 'react';
import { useAppSelector } from '../../redux/store';
import { ContainerBodyComp } from '../../comps/containers/ContainerBodyComp';
import { ContactFormBodyComp } from "../../comps/contactForm/ContactFormBodyComp";

export const ContactFormApp: React.FC = () => {
  const d = useAppSelector((state) => state.contactForm);
  
  return (
    <ContainerBodyComp
      main={
          <>body</>
      }
    />
  );
};
