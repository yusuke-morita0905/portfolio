import React from 'react';
import { useAppSelector } from '../../redux/store';
import { HomeComp } from "../../comps/home/HomeComp";

export const HomeApp: React.FC = () => {
  const d = useAppSelector((state) => state.header);

  return (
    <HomeComp>
      <>home</>
    </HomeComp>
  );
}