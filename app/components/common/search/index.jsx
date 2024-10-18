"use client";

import ListBox from "@/app/components/common/headlessui/ListBox";
import { Book, GraduationCap, MapPin } from "lucide-react";
import { useState } from "react";
import Autocomplete from "react-google-autocomplete";

const gradeItems = [
  { id: 0, name: "Select a grade" },
  { id: 1, name: "K-5" },
  { id: 2, name: "6-8" },
  { id: 3, name: "9-12" },
];

const subjectsItems = [
  { id: 0, name: "Select a subject" },
  { id: 1, name: "Science" },
  { id: 2, name: "Math" },
  { id: 3, name: "English" },
];

const Search = () => {
  const [searchValues, setSearchValues] = useState({
    address: "",
    grade: "",
    subject: "",
  });

  const addressHandler = (place) => {
    setSearchValues({
      ...searchValues,
      address: place,
    });
  };

  return (
    <div className="flex items-center justify-between flex-wrap gap-x-2 gap-y-6 bg-white shadow rounded px-5 py-5 md:py-2">
      <div className="flex items-center gap-x-2">
        <div>
          <MapPin className="text-gray-700 size-6" />
        </div>
        <Autocomplete
          apiKey={process.env.GOOGLE_MAPS_API_KEY}
          onPlaceSelected={(place) => addressHandler(place.formatted_address)}
          className="outline-0 text-gray-700 font-outfit"
          
        />
      </div>
      <div className="flex items-center gap-x-2">
        <div>
          <GraduationCap className="text-gray-700 size-6" />
        </div>
        <ListBox items={gradeItems} />
      </div>
      <div className="flex items-center gap-x-2">
        <div>
          <Book className="text-gray-700 size-6" />
        </div>
        <ListBox items={subjectsItems} />
      </div>
      <button className="btn linearBtn text-white w-full md:w-auto">Search</button>
    </div>
  );
};

export default Search;
