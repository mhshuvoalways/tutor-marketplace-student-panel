"use client";

import ListBox from "@/app/components/common/headlessui/ListBox";
import { Book, GraduationCap, MapPin, Video } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Autocomplete from "react-google-autocomplete";

const methods = [
  {
    _id: 0,
    item: "Select a method",
  },
  {
    _id: 1,
    item: "Online",
  },
  {
    _id: 2,
    item: "In-Person",
  },
];

const Search = ({ searchValue, tutorPage }) => {
  const [searchValues, setSearchValues] = useState({
    address: "",
    method: "",
    lat: "",
    lng: "",
    grade: "",
    subject: "",
  });
  const [methodError, setMethodError] = useState("");

  const [grades, setGrades] = useState([]);
  const [subjects, setSubjects] = useState([]);

  const router = useRouter();

  const addressHandler = (value) => {
    setMethodError("");
    setSearchValues((prevValues) => ({
      ...prevValues,
      address: value?.formatted_address,
      lat: value?.geometry?.location.lat(),
      lng: value?.geometry?.location.lng(),
    }));
  };

  const methodHander = (method) => {
    setMethodError("");
    setSearchValues({
      ...searchValues,
      method: method?.item,
    });
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
    setMethodError("");
    const queryParams = { ...searchValue };
    if (searchValues?.method === "In-Person") {
      if (
        searchValues?.address &&
        searchValues?.lat &&
        searchValues?.lng &&
        searchValues?.method
      ) {
        queryParams.method = searchValues.method;
        queryParams.address = searchValues.address;
        queryParams.lat = searchValues.lat;
        queryParams.lng = searchValues.lng;
      } else {
        delete queryParams.method;
        delete queryParams.address;
        delete queryParams.lat;
        delete queryParams.lng;
        setMethodError("Address is required for in-person tutoring");
      }
    } else {
      queryParams.method = searchValues?.method;
      if (searchValues?.address && searchValues?.lat && searchValues?.lng) {
        queryParams.address = searchValues.address;
        queryParams.lat = searchValues.lat;
        queryParams.lng = searchValues.lng;
      } else {
        delete queryParams.address;
        delete queryParams.lat;
        delete queryParams.lng;
      }
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
      !searchValues?.address &&
      !searchValues?.method
    ) {
      setSearchValues(searchValue);
    }
  }, [searchValue, searchValues]);

  return (
    <div
      className={`grid grid-cols-1 items-center gap-x-2 gap-y-6 bg-white shadow rounded px-5 py-5 md:py-2 ${
        tutorPage ? "md:grid-cols-5" : "md:grid-cols-2"
      }`}
    >
      <div className="flex items-center gap-x-2">
        <div>
          <Video className="text-gray-700 size-6" />
        </div>
        <ListBox
          items={methods}
          onChange={methodHander}
          value={searchValues?.method}
        />
      </div>
      <div>
        <div className="flex items-center gap-x-2">
          <div>
            <MapPin className="text-gray-700 size-6" />
          </div>
          <Autocomplete
            apiKey={process.env.GOOGLE_MAPS_API_KEY}
            onPlaceSelected={(place) => addressHandler(place)}
            className={`outline-0 text-gray-700 font-outfit `}
            defaultValue={searchValues?.address}
          />
        </div>
        {methodError && <p className="text-red-400">{methodError}</p>}
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
        className={`btn linearBtn text-white ${tutorPage ? "" : " col-span-2"}`}
        onClick={searchHandler}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
