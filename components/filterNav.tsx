import { Combobox } from "@headlessui/react";
import {
  BanknotesIcon,
  BriefcaseIcon,
  CheckIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useState, MouseEvent } from "react";
// -[305px]

interface Props {
  location?: string;
  jobTypes?: { id: number; name: string }[];
  jobCategories?: { id: number; name: string }[];
  salaryRanges?: string;
}

export default function FilterNav({ location, jobTypes, jobCategories }: Props) {
  const [selectedType, setSelectedType] = useState({});
  const [selectedLocation, setSelectedLocation] = useState({});
  const [selectedCategory, setSelectedCategory] = useState({});

  const [query, setQuery] = useState("");

  const locations = [
    { id: 1, name: "Anywhere" },
    { id: 2, name: "Europe" },
    { id: 3, name: "Asia" },
    { id: 4, name: "Americas" },
  ];

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  // const filteredPeople =
  //   query === ""
  //     ? jobCategories
  //     : jobCategories.filter((person) => {
  //         return person.name.toLowerCase().includes(query.toLowerCase());
  //       });


  const handleSearch = (e: MouseEvent): void => {
    e.preventDefault();
    // Make the job search request here
    console.log("clicked");
  };

  return (
    <div className="search-menu h-14 whitespace-nowrap flex flex-shrink-0 items-center bg-header-bg-color rounded-lg w-full pl-5">
      <div className="search-bar h-[55px] w-full relative max-2xl:w-auto max-md:flex-grow">
        <Combobox value={selectedCategory} onChange={setSelectedCategory}>
          <span className="absolute top-4 font-extrabold text-active-color">
            <MagnifyingGlassIcon className="text-xs  w-5" />
          </span>
          <Combobox.Input
            onChange={(event) => setQuery(event.target.value)}
            displayValue={(category) => category.name}
            className="search-box w-full h-full block bg-transparent border-none pr-6 pl-9 outline-none max-md:p-0 max-md:pl-[30px]"
            placeholder="Categories"
            autoFocus
          />
          <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
            {jobCategories?.map((category) => (
              <Combobox.Option
                key={category["id"]}
                value={category}
                className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black w-full text-sm px-2"
              >
                {/* <CheckIcon className="hidden ui-selected:block" /> */}
                {category["name"]}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Combobox>
        {/* <div className="search item absolute top-[10px] left-6 text-[13px] text-active-color border border-search-border-color py-2 px-[10px] rounded-lg flex items-center max-md:hidden"> */}
        {/*   Product Designer */}
        {/*   <XMarkIcon className="w-6 h-6" /> */}
        {/* </div> */}
        {/* <div className="search item item absolute top-[10px] left-[189px] text-[13px] text-active-color border border-search-border-color py-2 px-[10px] rounded-lg flex items-center max-md:hidden"> */}
        {/*   UI Designer */}
        {/*   <XMarkIcon className="w-6 h-6" /> */}
        {/* </div> */}
      </div>
      <div className="search-location relative flex items-center w-[50%] text-xs font-medium px-6 h-full max-xs:hidden">
        <Combobox value={selectedLocation} onChange={setSelectedLocation}>
          <MapPinIcon className="w-6 h-6 mr- text-active-color flex-shrink-0" />
          <Combobox.Input
            onChange={(event) => handleChange(event)}
            value={query}
            displayValue={(location) => location.name}
            className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 outline-none"
            placeholder="Location"
          />
          <Combobox.Options className="absolute mt-36 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
            {locations?.map((location) => (
              <Combobox.Option
                key={location.id}
                value={location}
                className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black w-full text-sm px-2"
              >
                <CheckIcon className="hidden ui-selected:block" />
                {location.name}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Combobox>
      </div>
      <div className="search-job relative flex items-center w-[50%] text-xs font-medium px-6 h-full max-2xl:hidden">
        <Combobox value={selectedType} onChange={setSelectedType}>
          <BriefcaseIcon className="w-6 h-6 mr-2  text-active-color flex-shrink-0" />
          <Combobox.Input
            onChange={(event) => setQuery(event.target.value)}
            displayValue={(type) => type.name}
            className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 outline-none"
            placeholder="Job Type"
          />
          <Combobox.Options className="absolute mt-24 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {jobTypes?.map((type) => (
              <Combobox.Option
                key={type["id"]}
                value={type}
                className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black w-full  text-sm px-2"
              >
                {/* <CheckIcon className="hidden ui-selected:block" /> */}
                {type["name"]}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Combobox>
      </div>
      <div className="search-salary flex items-center w-[50%] text-xs font-medium px-6 h-full max-2xl:hidden ">
        <BanknotesIcon className="w-6 h-6 mr-2 text-active-color flex-shrink-0" />
        <input
          type="text"
          placeholder="Salary Range"
          className="w-full h-full block bg-transparent border-none outline-none"
        />
      </div>
      <button
        type="button"
        onClick={(e) => handleSearch(e)}
        className="search-button bg-active-color h-[55px] border-none font-semibold text-xs px-4 rounded-r-lg text-button-color cursor-pointer ml-auto max-md:ml-4"
      >
        Find Job
      </button>
    </div>
  );
}
