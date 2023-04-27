import wand from "./images/wand.jpg"
import hat from "./images/wizardhat.webp"
import potion from "./images/Potion.png"
import space from "./images/space.jpg"
import austronaut from "./images/autstronaut.png"
import witch from "./images/aWitch.jpg"
import football from "./images/football.png"
import footballPlayer from "./images/footballplayer.jpg"
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


     



    const images = [
      {
        "src": wand,
        "title": "wand"
      },
      {
        "src": hat,
        "title": "wand"
      },
      {
        "src": potion,
        "title": "potion"
      },{

        "src": witch,
        "title": "potion"
      },
      {

        "src": space,
        "title": "space"
      },
      {

        "src": austronaut,
        "title": "space"
      }
      ,
      {

        "src": football,
        "title": "football"
      }
      ,
      {

        "src": footballPlayer,
        "title": "football"
      }
    ]
  
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
      onClick={shuffleCards}>Shuffle Cards</button> :<button className="w-[200px] border-2 mx-auto p-3 rounded  text-purple-500 border-purple-500 font-bold hover:bg-purple-500 hover:text-white hover:border-white text-xl justify-center align-center items-center"
      onClick={shuffleCards}>Start Game</button>
      }
      
     
      </div>
      <p className="text-white font-bold ml-3 underline">Your task is to find the pairs of pictures that match each other. Goodluck!</p>
      <p className="text-purple-500 font-bold text-xl m-2 sm:absolute sm:top-2 sm:left-2">{msg}</p>
      {game? <p className="text-white justify-center  text-xl ml-3">Selected cards: <span className="text-green-400 font-bold">{chosenCardCount}</span> </p> :null }
      {game? <p className="text-white justify-center text-xl ml-3">Cards left to pair: <span className="text-green-400 font-bold">{countPair}</span></p> :null }
      <div className="flex gap-0.5 flex-wrap relative text-center justify-center">
      {cards.map((card) => {
       return (
        <div key={card.id} className="w-[40%]  sm:w-[20%] p-2">
          <img  onClick={() => chooseCard(card.title)} className="object-fit cursor-pointer w-full h-[130px] sm:h-[200px] rounded border-4 border-purple-500" src={card.src} alt="/"/>
        </div>
       )
      })
}

      </div>
      
  
    </div>
  );
}

export default App;
