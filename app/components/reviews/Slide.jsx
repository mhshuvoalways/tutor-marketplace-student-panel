"use client";

import Item from "@/app/components/reviews/Item";
import Student1 from "@/public/images/students/student1.png";
import Student2 from "@/public/images/students/student2.png";
import Student3 from "@/public/images/students/student3.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";

const items = [
  {
    title:
      "I highly recommend this platform, amazing experience with fast delivery",
    des: `"We love the drink of tincidunts in the mass of the house, the evils of the euada ineaieler, and the very diam in the heart of the crime."`,
    itemImage: Student1,
    name: "Michael Mueller",
    jobTitle: "5th Standard, Dubai UAE",
  },
  {
    title:
      "I highly recommend this platform, amazing experience with fast delivery",
    des: `"We love the drink of tincidunts in the mass of the house, the evils of the euada ineaieler, and the very diam in the heart of the crime."`,
    itemImage: Student2,
    name: "Michael Mueller",
    jobTitle: "5th Standard, Dubai UAE",
  },
  {
    title:
      "I highly recommend this platform, amazing experience with fast delivery",
    des: `"We love the drink of tincidunts in the mass of the house, the evils of the euada ineaieler, and the very diam in the heart of the crime."`,
    itemImage: Student3,
    name: "Michael Mueller",
    jobTitle: "5th Standard, Dubai UAE",
  },
  {
    title:
      "I highly recommend this platform, amazing experience with fast delivery",
    des: `"We love the drink of tincidunts in the mass of the house, the evils of the euada ineaieler, and the very diam in the heart of the crime."`,
    itemImage: Student1,
    name: "Michael Mueller",
    jobTitle: "5th Standard, Dubai UAE",
  },
  {
    title:
      "I highly recommend this platform, amazing experience with fast delivery",
    des: `"We love the drink of tincidunts in the mass of the house, the evils of the euada ineaieler, and the very diam in the heart of the crime."`,
    itemImage: Student2,
    name: "Michael Mueller",
    jobTitle: "5th Standard, Dubai UAE",
  },
  {
    title:
      "I highly recommend this platform, amazing experience with fast delivery",
    des: `"We love the drink of tincidunts in the mass of the house, the evils of the euada ineaieler, and the very diam in the heart of the crime."`,
    itemImage: Student3,
    name: "Michael Mueller",
    jobTitle: "5th Standard, Dubai UAE",
  },
];

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`absolute -top-24 right-20 bg-white p-1 size-14 flex items-center justify-center rounded-full text-black cursor-pointer hover:bg-primary hover:text-white transition border`}
    >
      <ChevronLeft />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute -top-24 right-0 bg-white p-1 size-14 flex items-center justify-center rounded-full text-black cursor-pointer hover:bg-primary hover:text-white transition border"
    >
      <ChevronRight />
    </div>
  );
}

const Slide = () => {
  let settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <Item
          title={item.title}
          des={item.des}
          image={item.itemImage}
          name={item.name}
          jobTitle={item.jobTitle}
          key={index}
        />
      ))}
    </Slider>
  );
};

export default Slide;
