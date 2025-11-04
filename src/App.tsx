
import './App.css'
import CardComponent from './components/CardComponent'
import type { CardcomponentType } from './types/CardComponentType'

function App() {

  const user1:CardcomponentType = {
    image:"https://images.unsplash.com/photo-1761576474603-57831333bd33?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500",
    name:"Aqsa Fatima",
    profession:"Website Developer",
    description:"Lorem ipsum dolor sit amet consec adipisicing elit.",
    salary:5000000,
  };

  const user2:CardcomponentType = {
    image:"https://images.unsplash.com/photo-1762006211581-3c705aba617b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500",
    name:"Manahil Fatima",
    profession:"Software Developer",
    description:"Lorem ipsum dolor sit amet consec adipisicing elit.",
    salary:50000,
  
  };


  const user3:CardcomponentType = {
    image:"https://images.unsplash.com/photo-1756982784258-0fa7595fa3a8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500",
    name:"Huma Nawaz",
    profession:"Project Manager",
    description:"Lorem ipsum dolor sit amet consec adipisicing elit.",
    salary:50000,
  
  };

  const user4:CardcomponentType = {
    image:"https://images.unsplash.com/photo-1750857740591-ee1cdcad78ff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500",
    name:"Huma Nawaz",
    profession:"Project Manager",
    description:"Lorem ipsum dolor sit amet consec adipisicing elit.",
    salary:700000,
  
  };
  return (
    <>
    <div className='flex gap-2'>

      <CardComponent user={user1}  />
      <CardComponent user={user2}  />
      <CardComponent user={user3}  />
      <CardComponent user={user4}  />
    </div>
    </>
  )
}

export default App
