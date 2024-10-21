"use client";

import ListBox from "@/app/components/common/headlessui/ListBox";
import { Book, GraduationCap, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Autocomplete from "react-google-autocomplete";

const Search = ({ searchValue }) => {
  const [searchValues, setSearchValues] = useState({
    address: "",
    grade: "",
    subject: "",
  });

  const [grades, setGrades] = useState([]);
  const [subjects, setSubjects] = useState([]);

  const router = useRouter();

  const addressHandler = (place) => {
    setSearchValues((prevValues) => ({
      ...prevValues,
      address: place,
    }));
  };

  const gradeHandler = (grade) => {
    setSearchValues({
      ...searchValues,
      grade: grade?.item,
    });
  };

  const subjectHandler = (subject) => {
    setSearchValues({
      ...searchValues,
      subject: subject?.item,
    });
  };

  useEffect(() => {
    async function fetchGrades() {
      const result = await fetch("/api/grade", {
        method: "GET",
      });
      const temp = [...(await result.json())];
      temp.unshift({
        _id: 0,
        item: "Select a grade",
      });
      setGrades(temp);
    }
    fetchGrades();
  }, []);

  useEffect(() => {
    async function fetchGrades() {
      const result = await fetch("/api/subject", {
        method: "GET",
      });
      const temp = [...(await result.json())];
      temp.unshift({
        _id: 0,
        item: "Select a subject",
      });
      setSubjects(temp);
    }
    fetchGrades();
  }, []);

  const searchHandler = () => {
    const queryParams = { ...searchValue };
    if (searchValues?.address) {
      queryParams.address = searchValues?.address;
    } else {
      delete queryParams.address;
    }
    if (searchValues?.grade) {
      queryParams.grade = searchValues?.grade;
    } else {
      delete queryParams.grade;
    }
    if (searchValues?.subject) {
      queryParams.subject = searchValues?.subject;
    } else {
      delete queryParams.subject;
    }
    const queryString = new URLSearchParams(queryParams).toString();
    router.push(`/tutors?${queryString}`);
  };

  useEffect(() => {
    if (
      !searchValues?.grade &&
      !searchValues?.subject &&
      !searchValues?.address
    ) {
      setSearchValues(searchValue);
    }
  }, [searchValue, searchValues]);

  return (
    <div className="flex items-center justify-between flex-wrap gap-x-2 gap-y-6 bg-white shadow rounded px-5 py-5 md:py-2">
      <div className="flex items-center gap-x-2">
        <div>
          <MapPin className="text-gray-700 size-6" />
        </div>
        <Autocomplete
          apiKey={process.env.GOOGLE_MAPS_API_KEY}
          onPlaceSelected={(place) => addressHandler(place?.formatted_address)}
          className="outline-0 text-gray-700 font-outfit"
          defaultValue={searchValues?.address}
        />
      </div>
      <div className="flex items-center gap-x-2">
        <div>
          <GraduationCap className="text-gray-700 size-6" />
        </div>
        <ListBox
          items={grades}
          onChange={gradeHandler}
          value={searchValues?.grade}
        />
      </div>
      <div className="flex items-center gap-x-2">
        <div>
          <Book className="text-gray-700 size-6" />
        </div>
        <ListBox
          items={subjects}
          onChange={subjectHandler}
          value={searchValues?.subject}
        />
      </div>
      <button
        className="btn linearBtn text-white w-full md:w-auto"
        onClick={searchHandler}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
