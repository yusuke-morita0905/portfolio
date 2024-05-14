import React from 'react';
import { useAppSelector } from '../../redux/store';
import { FooterComp } from '../../comps/footers/FooterComp';

export const FooterApp: React.FC = () => {
  const d = useAppSelector((state) => state.footer);

  return (
    <FooterComp>
      <>footer</>
    </FooterComp>
  );
};
