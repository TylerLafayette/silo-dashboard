import React, { ReactNode } from "react";
import Navbar from "../Navbar";

interface IProps {
  children?: ReactNode;
}

const MainLayout = ({ children }: IProps) => (
  <>
    <Navbar />
    {children}
  </>
);

export default MainLayout;
