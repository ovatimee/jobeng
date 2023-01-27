import Head from "next/head";
import Aside from "./aside";
import FilterNav from "./filterNav";

type Props = {
  children?: React.ReactNode;
};

export default function JobsLayout({ children }: Props) {
  
  return (
    <div className="wrapper w-full flex flex-col flex-grow scroll-smooth py-8 px-10 overflow-auto max-sm:p-5">
      <FilterNav jobCategories={(children as any)?.props?.categories as any} jobTypes={(children as any)?.props?.types as any} /> 
      <div className="main-container flex flex-grow pt-8">
        <Aside />
        {children}
      </div>
    </div>
  );
}

