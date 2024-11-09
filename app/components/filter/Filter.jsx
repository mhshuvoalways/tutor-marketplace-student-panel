"use client";

import Button from "@/app/components/common/button/Button1";
import Button2 from "@/app/components/common/button/Button2";
import ListBox from "@/app/components/common/headlessui/ListBox";
import Input from "@/app/components/common/input/Input";
import Rating from "@/app/components/common/rating";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const gradeItems = [
  { _id: 0, item: "Select for sort" },
  { _id: 1, item: "Price high to low" },
  { _id: 2, item: "Price low to high" },
];

const methodItem = [
  { _id: 0, item: "Select a method" },
  { _id: 1, item: "Online" },
  { _id: 2, item: "In-Person" },
];

const Filter = ({ searchValue }) => {
  const [priceSort, setPriceSort] = useState("");
  const [priceRange, setPriceRange] = useState({
    minValue: "",
    maxValue: "",
  });
  const [method, setMethod] = useState("");
  const [miles, setMiles] = useState("");
  const [rating, setRating] = useState();
  const [methodError, setMethodError] = useState("");

  const router = useRouter();

  const sortHandler = (value) => {
    setPriceSort(value.item);
  };

  const priceRangeHandler = (event) => {
    setPriceRange({
      ...priceRange,
      [event.target.name]: event.target.value,
    });
  };

  const methodHandler = (value) => {
    setMethodError("");
    setMethod(value.item);
  };

  const milesHandler = (event) => {
    setMethodError("");
    setMiles(event.target.value);
  };

  const ratingHandler = (value) => {
    setRating(value);
  };

  const searchHandler = () => {
    setMethodError("");
    const queryParams = { ...searchValue };
    if (priceSort) {
      queryParams.sort = priceSort;
    } else {
      delete queryParams.sort;
    }
    if (priceRange.minValue) {
      queryParams.minRange = priceRange.minValue;
    } else {
      delete queryParams.minRange;
    }
    if (priceRange.maxValue) {
      queryParams.maxRange = priceRange.maxValue;
    } else {
      delete queryParams.maxRange;
    }
    if (method) {
      if (method === "In-Person") {
        if (miles) {
          queryParams.method = method;
          queryParams.miles = miles;
        } else {
          delete queryParams.miles;
          setMethodError("Miles is required for in-person tutoring");
        }
      } else {
        queryParams.method = method;
        delete queryParams.miles;
      }
    } else {
      delete queryParams.method;
      delete queryParams.miles;
    }

    if (rating) {
      queryParams.rating = rating;
    } else {
      delete queryParams.rating;
    }
    const queryString = new URLSearchParams(queryParams).toString();
    router.push(`/tutors?${queryString}`);
  };

  const clearFilter = () => {
    router.push(`/tutors`);
  };

  useEffect(() => {
    setPriceSort(searchValue?.sort);
    setPriceRange({
      minValue: searchValue?.minRange,
      maxValue: searchValue?.maxRange,
    });
    setMethod(searchValue?.method);
    setRating(searchValue?.rating || 0);
  }, [searchValue]);

  return (
    <>
      <p>More Filter</p>
      <div className="space-y-3 pt-5">
        <p className="text-xl">Sort</p>
        <ListBox
          items={gradeItems}
          filter={true}
          onChange={sortHandler}
          value={priceSort}
        />
      </div>
      <div className="space-y-3">
        <p className="text-xl">Method</p>
        <ListBox
          items={methodItem}
          filter={true}
          onChange={methodHandler}
          value={method}
        />
      </div>
      {method === "In-Person" && (
        <div>
          <div className="space-y-3">
            <p className="text-xl">Miles</p>
            <Input
              type="text"
              placeholder="Miles"
              name={"miles"}
              changeHandler={milesHandler}
              value={miles}
            />
          </div>
          {methodError && (
            <p className="text-red-400 text-left">{methodError}</p>
          )}
        </div>
      )}

      <div className="space-y-3">
        <p className="text-xl">Price range</p>
        <div className="flex items-center gap-2">
          <Input
            type="number"
            placeholder="Min"
            name={"minValue"}
            changeHandler={priceRangeHandler}
            value={Number(priceRange.minValue)}
          />
          <Input
            type="number"
            placeholder="Max"
            name={"maxValue"}
            changeHandler={priceRangeHandler}
            value={Number(priceRange.maxValue)}
          />
        </div>
      </div>
      <div className="space-y-3">
        <p className="text-xl">Rating</p>
        <div className="flex items-center gap-2">
          <Rating edit={true} value={rating} ratingChanged={ratingHandler} />
          <div className="flex items-center gap-0.5">
            <p className="font-medium">5.0</p>
            <p>/</p>
            <p className="text-gray-400">{`${
              rating >= 5 ? rating : `${rating} and up`
            }`}</p>
          </div>
        </div>
      </div>
      <div>
        <Button title={"Apply filter"} onClick={searchHandler} />
        <Button2
          title={"Clear all filter"}
          className={"hover:bg-slate-100 hover:text-gray-500"}
          onClick={clearFilter}
        />
      </div>
    </>
  );
};

export default Filter;
