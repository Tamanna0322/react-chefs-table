
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Card from './components/Header/Card/Card';
import Cooking from './components/Cooking/Cooking';
import Preparing from './components/Preparing/Preparing';


function App() {
  const [cards, setCards] = useState([]);
  const [cooking, setCooking] = useState([]);
  const [preparing, setPreparing] =useState([]);

  useEffect(() => {
    fetch('blogs.json')
      .then(res => res.json())
      .then(data => setCards(data))
  }, [])

  const handleWantToCook = cook => {
    const isExist = cooking.find(card => card.id == cook.id);
    if(!isExist){
      const wantToCook = [...cooking, cook];
      setCooking(wantToCook);
    }
    else{
      alert('already exist');
    }
    
  }

  
  const handlePreparing = (id) =>{
    const newCooking = cooking.filter(item => item.id !== id);
    setCooking(newCooking);
  }

  const preparingButton = item =>{
    const preparingBtn = [...preparing, item];
    setPreparing(preparingBtn);
  }


  return (
    <>

      <Header></Header>
      <div className='flex flex-col justify-center space-y-5 items-center max-w-7xl mx-auto mt-14'>
        <h3 className='lg:text-4xl text-2xl font-bold text-black'>Our Recipes</h3>
        <p className='lg:text-xl w-2/3 text-center'>Find yummy recipes here. From simple dishes to tasty treats, get cooking ideas that make your kitchen fun and delicious.</p>
      </div>

      <div className='max-w-7xl mx-auto lg:flex lg:mt-14 mt-9'>
        <div className='lg:w-[59%] m-6 grid lg:grid-cols-2 grid-cols-1 gap-5'>
          {
            cards.map(card => <Card key={card.id} card={card} handleWantToCook={handleWantToCook}></Card>)
          }
        </div>

        <div className='lg:w-[40%] m-6 border-2 rounded-xl p-5'>
          <h3 className='text-3xl font-bold text-center mb-3'>Want To Cook: {cooking.length} </h3>
          <hr />
          <div className='w-[80%] flex justify-around my-4 font-semibold'>
            <h3>Name</h3>
            <h3>Time</h3>
            <h3>Calories</h3>
          </div>
          {
            cooking.map((cook, idx) => <Cooking key={idx} idx={idx} handlePreparing={handlePreparing} preparingButton={preparingButton} cooking={cook}>
            </Cooking>)
          }

          <h3 className='text-3xl font-bold text-center mb-3 mt-7'>Currently Cooking: {preparing.length}</h3>
          <hr />
          <div className=' flex justify-around my-4 font-semibold'>
            <h3>Name</h3>
            <h3>Time</h3>
            <h3>Calories</h3>
          </div>
          {
          preparing.map((cook, idx) => <Preparing key={idx} idx={idx} preparing={cook}></Preparing>)
          }

        </div>


      </div>

    </>
  )
}

export default App
