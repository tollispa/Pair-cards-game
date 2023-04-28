import {images, images2} from "./imagesArray"
import {useState} from "react"

function App() {
const [cards, setCards] = useState([])

const [selectedCard, setSelectedCard] = useState("")
const [selectedCard2, setSelectedCard2] = useState("")
const [game, setGame] = useState(false)
const [chosenCardCount, setChosenCardCount] = useState(0)
const [msg, setMsg] = useState("")
const [wrongGuessCount, setWrongGuessCount] = useState(0)
const [removeItem, setRemoveItem] = useState("")
const [itemToRemove, setItemToRemove] = useState([])
const countingPairs = images.length / 2
const [countPair, setCountPair] = useState(countingPairs)



const shuffleCards = () => {
  const shuffle = [...images]

  .sort(() => Math.random() -0.5)
  .map((card) => ({...card, id: Math.random(), title: card.title}))
  setCards(shuffle)
  setSelectedCard("")
  setSelectedCard2("")
  
  setGame(true)
  setChosenCardCount(0)
  setMsg("")
  
  
}
const shuffleCardsHardGame = () => {
  const shuffle = [...images2]

  .sort(() => Math.random() -0.5)
  .map((card) => ({...card, id: Math.random(), title: card.title}))
  setCards(shuffle)
  setSelectedCard("")
  setSelectedCard2("")
  
  setGame(true)
  setChosenCardCount(0)
  setMsg("")
  
  
}

const chooseCard = (src) => {
  setRemoveItem(src)

  
  if (selectedCard === "" && selectedCard2 === ""){
    setMsg("")
    setSelectedCard(src)
    
    setChosenCardCount(chosenCardCount +1)
  }
  if(selectedCard !== "" && countPair !== 0){
     setSelectedCard2(src)
   
     setMsg("")
  }

  }

  if(countPair === 0){
    return <div className="text-center relative h-screen">
    <h1 className="text-green-400 m-2 font-bold text-xl">Game completed!</h1>
    <p className="text-white">You guessed wrong ({wrongGuessCount}) times! Try again?</p>
    <button className="bg-blue-400 m-2 p-2 rounded text-white font-bold" onClick={() => window.location.reload()}>Back to Home</button>
    <img className="h-[full] sm:hidden" src="https://i.pinimg.com/originals/db/3c/69/db3c6932ab7f48aa37911fa229efa7ba.jpg" alt="/"/>
    <p className="text-gray-300 mt-20 text-sm mr-10">This game was created by Tollis Papadopoulos.</p>
  </div>
  
  }



if(selectedCard === selectedCard2 && selectedCard2 !== "" && selectedCard !== ""){
  setMsg("You guessed right!")
  setChosenCardCount(0)
  setSelectedCard("")
  setSelectedCard2("")
  setCountPair(countPair -1)
  if (!itemToRemove.includes(removeItem)) {
    itemToRemove.push(removeItem);
  }
  
  return
}

const find = itemToRemove.includes(selectedCard)
if(find === true) {
   setMsg("You already paired this card!")
   setSelectedCard("")
   setSelectedCard2("")
   setChosenCardCount(0)
}
console.log(itemToRemove)

if(selectedCard !== "" && selectedCard2 !== ""){
setChosenCardCount(0)
setMsg("Wrong answer!")
setWrongGuessCount(wrongGuessCount +1)
setSelectedCard("")
setSelectedCard2("")
}


console.log(setItemToRemove)


return (
<div className="h-screen w-full relative items-center sm:h-full">
 
  <div className="h-auto flex items-center relative"> 
  {game ?   <button className="w-full sm:w-[200px]  border-2 m-2 p-3 rounded  text-white bg-purple-500 border-white font-bold hover:bg-purple-500 hover:text-white hover:border-white text-xl justify-center align-center items-center"
  onClick={() => window.location.reload()}>Back</button> :
  <div className="w-full h-screen sm:w-auto flex flex-col items-center justify-center sm:justify-start mt-20">
    <p className="text-white font-bold m-2 sha">Choose difficulty</p>
  <div className="flex justify-center gap-2">  
 
  <button className="w-[150px] bg-purple-500 border-2 mx-auto p-3 rounded  text-white border-whitefont-bold hover:bg-purple-500 hover:text-white hover:border-white text-xl justify-center align-center items-center"
  onClick={shuffleCards}>Easy Game</button> 
  <button onClick={shuffleCardsHardGame} className="w-[150px]  border-2 mx-auto p-3 rounded bg-purple-500 text-white border-white  hover:bg-purple-500 hover:text-white hover:border-white text-xl justify-center align-center items-center">Hard Game</button></div>
  <p className="text-gray-300 font-bold ml-3 mt-5 underline">Your task is to find the pairs of pictures that match each other. Goodluck!</p>
  <img className="absolute top-20 sm:hidden" src="https://i.pinimg.com/originals/db/3c/69/db3c6932ab7f48aa37911fa229efa7ba.jpg" alt="/"/>
  </div>
  }
  
 
  </div>

  <p className="text-purple-500 font-bold text-xl m-2 sm:absolute sm:top-2 sm:right-2 transition-all duration-500 ease-in-out">{msg}</p>
  {game? <p className="text-white justify-center  text-xl ml-3">Selected cards: (<span className="text-yellow-400 font-bold transition-all duration-500 ease-in-out">{chosenCardCount}</span>)</p> :null }
  {game? <p className="text-white justify-center text-xl ml-3">Cards left to pair: <span className="text-yellow-400 font-bold transition-all duration-500 ease-in-out">{countPair}</span></p> :null }
  {game? <p className=" text-white justify-center text-xl ml-3">Wrong Guesses: <span className="text-red-400 font-bold transition-all duration-500 ease-in-out">{wrongGuessCount}</span></p> :null }
  {game? <p className="text-gray-400 text-sm ml-3">You win when "Cards left to pair" reaches 0!</p> :null }

  <div className="flex gap-0.5 flex-wrap relative text-center justify-center ">
  {cards.map((card) => {
   return (
    <div key={card.id} className="w-[40%]  sm:w-[20%] p-2">
      <img  onClick={() => chooseCard(card.title)} className="opacity-100 transition-opacity duration-500 ease-in-out hover:opacity-50 active:opacity-5 object-fit cursor-pointer w-full h-[130px] sm:h-[200px] rounded border-4 border-purple-500" src={card.src} alt="/"/>
    </div>
   )
  })
}

  </div>
  

</div>
);
}

export default App;



  
  

