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



if(selectedCard === selectedCard2 && selectedCard2 !== "" && selectedCard !== ""){
  setMsg("Correct!")
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
setMsg("Wrong answer! Try again!")
setWrongGuessCount(wrongGuessCount +1)
setSelectedCard("")
setSelectedCard2("")
}


console.log(setItemToRemove)

const backHomeBtn = () => {
  setGame(false)
  setMsg("")
  setCountPair(countingPairs)
  setWrongGuessCount(0)
  setItemToRemove([])
}

return (
<div className="h-screen w-full relative items-center sm:h-full">
 
  <div className="h-auto flex items-center relative"> 
  {game ?   <button className="w-full sm:w-[200px]  border-2 m-2 p-3 rounded  text-white bg-[#ab1fc1] border-[#ab1fc1] font-bold hover:bg-[#c43cd8] text-xl justify-center align-center items-center"
  onClick={backHomeBtn}>Back</button> :
  <div className="w-full h-screen sm:w-auto flex flex-col items-center justify-center sm:justify-start mt-20">
    <h1 className="text-white font-bold text-xl sm:text-3xl mb-4 sm:block border-b-4 border-[#2c80b8] p-3 rounded">Welcome to the Pair Picker! 🌀</h1>
    <p className="text-white font-bold m-2 sha">Choose difficulty</p>
  <div className="flex justify-center gap-2">  
 
  <button className="w-[150px] bg-[#228cb0] border-2 mx-auto p-3 rounded  text-white font-bold hover:bg-green-500 hover:text-white hover:border-white text-xl justify-center align-center items-center"
  onClick={shuffleCards}>Easy Game</button> 
  <button onClick={shuffleCardsHardGame} className="w-[150px]  border-2 mx-auto p-3 rounded bg-[#228cb0] text-white border-white  hover:bg-red-500 hover:text-white hover:border-white text-xl justify-center align-center items-center">Hard Game</button></div>
  <p className="text-gray-300 font-bold ml-3 mt-5 underline">Your task is to find the pairs of pictures that match each other. Goodluck!</p>
  <img className="absolute top-20 sm:relative sm:w-[50%]" src="https://i.pinimg.com/originals/db/3c/69/db3c6932ab7f48aa37911fa229efa7ba.jpg" alt="/"/>
  </div>
  }
  
 
  </div>

  <p className="text-white  border-b-2 border-[#ab1fc1] inline-block p-auto font-bold text-xl m-2 sm:absolute sm:top-2 sm:right-2 transition-all duration-500 ease-in-out">{msg}</p>
  {game? <p className="text-white justify-center  text-xl ml-3">Selected cards: (<span className="text-yellow-400 font-bold transition-all duration-500 ease-in-out">{chosenCardCount}</span>)</p> :null }
  {game? <p className="text-white justify-center text-xl ml-3">Cards left to pair: <span className="text-yellow-400 font-bold transition-all duration-500 ease-in-out">{countPair}</span></p> :null }
  {game? <p className=" text-white justify-center text-xl ml-3">Wrong Guesses: <span className="text-red-400 font-bold transition-all duration-500 ease-in-out">{wrongGuessCount}</span></p> :null }
  {game? <p className="text-gray-400 text-sm ml-3">You win when "Cards left to pair" reaches 0!</p> :null }
 {game && countPair !== 0 ?  <div className="flex gap-0.5 flex-wrap relative text-center justify-center ">
  {cards.map((card) => {
   return (
    <div key={card.id} className="w-[40%]  sm:w-[20%] p-2">
      <img  onClick={() => chooseCard(card.title)} className="opacity-100 transition-opacity duration-500 ease-in-out hover:opacity-50 active:opacity-5 active:border-red-800 object-fit cursor-pointer w-full h-[130px] sm:h-[200px] rounded border-4 border-[#ab1fc1]" src={card.src} alt="/"/>
    </div>
   )
  })
}

  </div> : null}
 
{countPair === 0 && game ? <div className="sm:flex sm:flex-col justify-center text-center items-center h-screen">
  <h1 className="text-green-400 m-2 font-bold text-xl">Game completed!</h1>
  <p className="text-white m-2">You guessed wrong ({wrongGuessCount}) times! Try again?</p>
  
  <div className="flex justify-center items-center">
    <img className="h-[full] sm:w-[50%]" src="https://i.pinimg.com/originals/db/3c/69/db3c6932ab7f48aa37911fa229efa7ba.jpg" alt="/" />
  </div>
  
  <p className="text-gray-300 mt-20 text-sm mr-10">This game was created by Tollis Papadopoulos.</p>
</div>

  : null

}

</div>
);
}

export default App;



  
  

