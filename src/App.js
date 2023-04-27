import {images, images2} from "./imagesArray"
import {useState} from "react"

function App() {
const [cards, setCards] = useState([])

const [selectedCard, setSelectedCard] = useState("")
const [selectedCard2, setSelectedCard2] = useState("")
const [game, setGame] = useState(false)
const [chosenCardCount, setChosenCardCount] = useState(0)
const [msg, setMsg] = useState("")

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
    return <div className="text-center">
    <h1 className="text-green-400 m-2 font-bold text-xl">Game completed!</h1>
    <button className="text-purple-400 border border-purple-400 rounded m-1 p-1 font-bold" onClick={() => window.location.reload()}>Back to Home</button>
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
setSelectedCard("")
setSelectedCard2("")
}


console.log(setItemToRemove)


return (
<div className="h-screen w-full bg-black relative items-center sm:h-full">
 
  <div className="h-[100px] flex items-center"> 
  {game ?   <button className="w-[200px] border-2 mx-auto p-3 rounded  text-purple-500 border-purple-500 font-bold hover:bg-purple-500 hover:text-white hover:border-white text-xl justify-center align-center items-center"
  onClick={() => window.location.reload()}>Back</button> :
  <div className="w-full sm:w-auto text-center">
    <p className="text-white font-bold m-2 sha">Choose difficulty</p>
  <div className="flex justify-center gap-2">  
 
  <button className="w-[200px] border-2 mx-auto p-3 rounded  text-purple-500 border-purple-500 font-bold hover:bg-purple-500 hover:text-white hover:border-white text-xl justify-center align-center items-center"
  onClick={shuffleCards}>Easy Game</button> 
  <button onClick={shuffleCardsHardGame} className="w-[200px]  border-2 mx-auto p-3 rounded  text-purple-500 border-purple-500 font-bold hover:bg-purple-500 hover:text-white hover:border-white text-xl justify-center align-center items-center">Hard Game</button></div>
  </div>
  }
  
 
  </div>
  <p className="text-white font-bold ml-3 underline">Your task is to find the pairs of pictures that match each other. Goodluck!</p>
  <p className="text-purple-500 font-bold text-xl m-2 sm:absolute sm:top-2 sm:left-2 transition-all duration-500 ease-in-out">{msg}</p>
  {game? <p className="text-white justify-center  text-xl ml-3">Selected cards: <span className="text-green-400 font-bold transition-all duration-500 ease-in-out">{chosenCardCount}</span> </p> :null }
  {game? <p className="text-white justify-center text-xl ml-3">Cards left to pair: <span className="text-green-400 font-bold transition-all duration-500 ease-in-out">{countPair}</span></p> :null }
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



  
  

