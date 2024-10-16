"use client";

import Item from "@/app/components/qualifiedTutors/Item";
import Student1 from "@/public/images/students/student1.png";
import Student2 from "@/public/images/students/student2.png";
import Student3 from "@/public/images/students/student3.png";
import Slider from "react-slick";

const items = [
  {
    itemImage: Student1,
    name: "Michael Mueller",
    jobTitle: "New york, US",
    startingFrom: "69",
    grade: "K-5",
    subject: "Math",
  },
  {
    itemImage: Student2,
    name: "Michael Mueller",
    jobTitle: "New york, US",
    startingFrom: "69",
    grade: "K-5",
    subject: "Math",
  },
  {
    itemImage: Student3,
    name: "Michael Mueller",
    jobTitle: "New york, US",
    startingFrom: "69",
    grade: "K-5",
    subject: "Math",
  },
  {
    itemImage: Student1,
    name: "Michael Mueller",
    jobTitle: "New york, US",
    startingFrom: "69",
    grade: "K-5",
    subject: "Math",
  },
  {
    itemImage: Student2,
    name: "Michael Mueller",
    jobTitle: "New york, US",
    startingFrom: "69",
    grade: "K-5",
    subject: "Math",
  },
  {
    itemImage: Student3,
    name: "Michael Mueller",
    jobTitle: "New york, US",
    startingFrom: "69",
    grade: "K-5",
    subject: "Math",
  },
];

const Slide = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 10000,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    cssEase: "linear",
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
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <Item
          image={item.itemImage}
          name={item.name}
          jobTitle={item.jobTitle}
          startingFrom={item.startingFrom}
          grade={item.grade}
          subject={item.subject}
          key={index}
        />
      ))}
    </Slider>
  );
};

export default Slide;
