
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Card from './components/Header/Card/Card';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('blogs.json')
      .then(res => res.json())
      .then(data => setCards(data))
  }, [])

  return (
    <>

      <Header></Header>
      <div className='flex flex-col justify-center space-y-5 items-center max-w-7xl mx-auto mt-14'>
        <h3 className='text-4xl font-bold text-black'>Our Recipes</h3>
        <p className='text-xl w-2/3 text-center'>Find yummy recipes here. From simple dishes to tasty treats, get cooking ideas that make your kitchen fun and delicious.</p>
      </div>

      <div className='max-w-7xl mx-auto mt-7'>
        <div className='w-[59%] grid lg:grid-cols-2 grid-cols-1 gap-5'>
          {
            cards.map(card => <Card key={card.id} card={card}></Card>)
          }
        </div>

        <div className='w-[40%]'>

        </div>
      </div>

    </>
  )
}

export default App
