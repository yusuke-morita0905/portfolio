import React, { useState } from 'react';
import { useAppSelector } from '../../redux/store';
import { HeaderComp } from '../../comps/headers/HeaderComp';

export const HeaderApp: React.FC = () => {
  const d = useAppSelector((state) => state.header);

  return (
    <HeaderComp>
      <>header</>
    </HeaderComp>
  );
};