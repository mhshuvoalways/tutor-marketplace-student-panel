import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "@/app/components/motionPrimitivesComponent/carousel";
import Item from "@/app/components/reviews/Item";
import Student1 from "@/public/images/students/student1.png";
import Student2 from "@/public/images/students/student2.png";
import Student3 from "@/public/images/students/student3.png";

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

const Slide = () => {
  return (
    <Carousel>
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem className="basis-1/1 md:basis-2/3 xl:basis-1/3" key={index}>
            <Item
              title={item.title}
              des={item.des}
              image={item.itemImage}
              name={item.name}
              jobTitle={item.jobTitle}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNavigation
        className="absolute -top-20 left-auto w-full justify-end gap-2"
        classNameButton="bg-white hover:bg-primary transition border cursor-pointer hover:text-white"
        alwaysShow
      />
    </Carousel>
  );
};

export default Slide;
