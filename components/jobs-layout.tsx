import Head from "next/head";
import Aside from "./aside";
import FilterNav from "./filterNav";

export default function JobsLayout({ children }) {
  
  return (
    <div className="wrapper w-full flex flex-col flex-grow scroll-smooth py-8 px-10 overflow-auto max-sm:p-5">
      <FilterNav jobCategories={children.props.categories} jobTypes={children.props.types} />
      <div className="main-container flex flex-grow pt-8">
        <Aside />
        {children}
      </div>
    </div>
  );
}
