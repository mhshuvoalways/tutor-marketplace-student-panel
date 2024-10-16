const Time = () => {
  return (
    <div className="flex items-center justify-center text-center gap-2">
      <p className="border cursor-pointer rounded hover:border-primary p-2 w-full">
        6:00am
      </p>
      <p className="border cursor-pointer rounded hover:border-primary p-2 w-full">
        9:00am
      </p>
      <p className="border cursor-pointer rounded hover:border-primary p-2 w-full">
        7:00pm
      </p>
      <p className="border cursor-pointer rounded hover:border-primary p-2 w-full">
        10:00pm
      </p>
    </div>
  );
};

export default Time;
