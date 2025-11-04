import type { CardcomponentType } from "../types/CardComponentType";

interface CardComponentProps {
    user:CardcomponentType;
}

const CardComponent = ({user}:CardComponentProps) => {
  return (
    <div className="h-screen">
      <div className="bg-white h-120 w-72 rounded-xl shadow-xl ">
        <img
          className="w-72 h-52 object-cover rounded-xl"
          src={user.image}
          alt={user.name}
        />

        <h1 className="text-left font-bold mt-5 pl-4 text-xl">{user.name} </h1>
        <p className="text-center mt-5 text-gray-400">{user.profession}</p>
        <p className="text-left px-4 mt-5">
          {user.description}
        </p>
        <p className="font-semibold mt-5 text-lg text-left pl-4">Salary: {user.salary}</p>
        <button className="border bg-blue-600 px-5 py-1 rounded-xl text-white w-52 mt-5">Contact Me</button>
      </div>
    </div>
  );
};

export default CardComponent;
