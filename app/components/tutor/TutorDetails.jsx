import Parse from "html-react-parser";

const TutorDetails = ({ result }) => {
  return (
    <div className="bg-white shadow rounded p-5 mt-10 font-outfit">
      <p className="text-2xl">A brief introduction</p>
      <p className="mt-5 text-gray-600 text-lg">
        {result.bio && Parse(result.bio)}
      </p>
    </div>
  );
};

export default TutorDetails;
