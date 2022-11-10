import { useState,useEffect } from "react"
import pauseMobile from "./images/pattern-divider-mobile.svg"
import pauseDesktop from "./images/pattern-divider-mobile.svg"
import dice from "./images/icon-dice.svg"
function App() {
  const[text, setText] = useState([])
  const fetchAdvice = async () => { 
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()
   
    console.log(data)
    setText(data)
  }
  useEffect(()=>{
    fetchAdvice()
  },[])
  return (
    <div className="container">
      <h1>apppf</h1>
      <p>{text.slip.advice}</p>
      <picture>
        <source media="(min-width:768px)" srcSet={pauseDesktop}/>
        <img src={pauseMobile} alt="" />
      </picture>
      <div>
        <button onClick={fetchAdvice}>
          <img src={dice} alt="" />
        </button>
      </div>
    </div>
  )
}

export default App;
// Advice #{text.slip.id}