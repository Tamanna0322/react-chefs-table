
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Card from './components/Header/Card/Card';
import Cooking from './components/Cooking/Cooking';


function App() {
  const [cards, setCards] = useState([]);
  const [cooking, setCooking] = useState([]);

  useEffect(() => {
    fetch('blogs.json')
      .then(res => res.json())
      .then(data => setCards(data))
  }, [])

  const handleWantToCook = cook =>{
    const wantToCook = [...cooking, cook];
    setCooking(wantToCook);
  }

  return (
    <>

      <Header></Header>
      <div className='flex flex-col justify-center space-y-5 items-center max-w-7xl mx-auto mt-14'>
        <h3 className='lg:text-4xl text-2xl font-bold text-black'>Our Recipes</h3>
        <p className='lg:text-xl w-2/3 text-center'>Find yummy recipes here. From simple dishes to tasty treats, get cooking ideas that make your kitchen fun and delicious.</p>
      </div>

      <div className='max-w-7xl mx-auto flex lg:mt-14 mt-9'>
        <div className='lg:w-[59%] m-6 grid lg:grid-cols-2 grid-cols-1 gap-5'>
          {
            cards.map(card => <Card key={card.id} card={card} handleWantToCook = {handleWantToCook}></Card>)
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
                cooking.map((cook, idx) => <Cooking key={idx} idx={idx} cooking={cook}>
                </Cooking>)
          }        

        </div>
      </div>

    </>
  )
}

export default App
