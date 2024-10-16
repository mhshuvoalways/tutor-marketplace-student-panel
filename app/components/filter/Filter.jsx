import Button from "@/app/components/common/button/Button1";
import Button2 from "@/app/components/common/button/Button2";
import ListBox from "@/app/components/common/headlessui/ListBox";
import Input from "@/app/components/common/input/Input";
import Rating from "@/app/components/common/rating";

const gradeItems = [
  { id: 0, name: "Select for sort" },
  { id: 1, name: "Price high to low" },
  { id: 2, name: "Price low to high" },
];

const genderItems = [
  { id: 0, name: "Select a gender" },
  { id: 1, name: "Male" },
  { id: 2, name: "Female" },
  { id: 3, name: "Both" },
];

const Filter = () => {
  return (
    <>
      <div className="space-y-3">
        <p className="text-xl">Sort</p>
        <ListBox items={gradeItems} filter={true} />
      </div>
      <div className="space-y-3">
        <p className="text-xl">Price range</p>
        <div className="flex items-center gap-2">
          <Input type="number" placeholder="Min" />
          <Input type="number" placeholder="Max" />
        </div>
      </div>
      <div className="space-y-3">
        <p className="text-xl">Gender</p>
        <ListBox items={genderItems} filter={true} />
      </div>
      <div className="space-y-3">
        <p className="text-xl">Rating</p>
        <div className="flex items-center gap-2">
          <Rating edit={true} activeColor="#facc15" size={30} value={4.5} />
          <div className="flex items-center">
            <p className="font-medium">5.0</p>
            <p>/</p>
            <p className="text-gray-400">4.5 and up</p>
          </div>
        </div>
      </div>
      <div>
        <Button title={"Apply filter"} />
        <Button2
          title={"Clear all filter"}
          className={"hover:bg-slate-100 hover:text-gray-500"}
        />
      </div>
    </>
  );
};

export default Filter;
