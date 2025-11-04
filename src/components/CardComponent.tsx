interface CardComponentProps {
    hobbies:string[];
}

const CardComponent = ({hobbies}:CardComponentProps) => {
  return (
    <div className="h-screen">
      <div className="h-72 w-72 bg-white shadow-2xl">
        
        <h1 className="font-bold text-xl">My Hobbies:</h1>
        <div className="flex flex-col gap-2 mt-5 items-start px-5">

        <p>{hobbies[0]}</p>
        <p>{hobbies[1]}</p>
        <p>{hobbies[2]}</p>
        <p>{hobbies[3]}</p>
        </div>
            
      </div>
    </div>
  );
};

export default CardComponent;
