import {useState} from 'react'
import MyBox from './MyBox'
import './App.css'

import Search from './components/Search'
import { data } from './data'
import { debounce } from "lodash";
import Item from './components/Item'


function App(){

  // !Also check out Function, with a capital F
  // const stupidCode = "console.log('I can put whatever I want here')"
  // eval(stupidCode)

  // STATE:
  const [counter, setCounter] = useState(0)
  const [inputValue, setInputValue] = useState("")
  const [dropDownValue, setDropDownValue] = useState("")
  const [textAreaValue, setTextAreaValue] = useState("")
  const [checkbox, setCheckBox] = useState(false)
  const [comboSize, setComboSize] = useState("")

  const [search, setSearch] = useState("");
  const [items] = useState(data);



  // using anonymous arrow function, we can pass an argument inline:
  const changeCounter2 = (num)=>{
    setCounter(prev=>prev+num)
  }

  // using event.target.name:
  const changeCounter = (e)=>{
    if(e.target.name ==="decrement"){
      setCounter(prev=>prev-1)
    }
    if(e.target.name === "increment"){
      setCounter(prev=>prev+1)
    }
  }

  const handleChange = (e)=>{
    // make it easier to deal with name:
    let name = e.target.name

    // handling different targets:
    if(name === "inputValue"){
      setInputValue(e.target.value)
    }
    if(name === "dropDownValue"){
      setDropDownValue(e.target.value)
      console.log(e.target.value)
    }
    if(name === "textArea"){
      setTextAreaValue(e.target.value)
    }
    if(name==="checkbox"){
      setCheckBox(!checkbox)
    }
    if(name === "comboSize"){
      setComboSize(e.target.value)
    }
  }

  const handleSearch = debounce((event) => {
    const searchTerm = event.target.value;
    setSearch(searchTerm.toLowerCase());
  }, 500);

  return(
    <div className = "App">
      <h1>Hello</h1>
      {/* Counter */}
      <h5>
        <button name="decrement" onClick={()=>changeCounter2(-1)}>
          -
        </button>

        {counter}

        <button name = "increment" onClick={changeCounter}>
          +
        </button>
      </h5>

      {/* Input Value */}
      <div>
        <input type = "text" name = "inputValue" onChange = {handleChange} value = {inputValue}></input>
      </div>
      <h4>Text: {inputValue}</h4>

      {/* DROPDOWN: */}
      <div>
        <select name="dropDownValue" onChange={handleChange} value={dropDownValue}>
          <option value="">- select option -</option>
          <option value="burrito">Burrito</option>
          <option value="enchilada">Enchiladas</option>
          <option value="tacos">Tacos</option>
          <option value="nachos">Nachos</option>
          <option value="quesadillas">Quesadillas</option>
          <option value="flautas">Flautas</option>
        </select>
      </div>

      <h4>Food selected: {dropDownValue}</h4>

      {/* TextArea */}
      <div>
        <label htmlFor="specialInstructions">Special cooking instructions: </label>
        <br></br>
        <textarea id="specialInstructions" name="textArea" onChange={handleChange} value={textAreaValue}></textarea>
        
      </div>
      
      <div>
        <h4>Special cooking instructions:  <br></br>{textAreaValue}</h4>
      </div>


      {/* Using values/passing state to another component */}
      <MyBox text={textAreaValue} food={dropDownValue}/>
      {/* remember when using prop components, it's just like calling a function
      and passing arguments */}
      {/* 
        myBasket("text", "food"):
        <MyBasket text="text" food="food" />
      */}


      {/* Checkbox */}
      <div>
        <input
          id="silverware"
          type="checkbox"
          name="checkbox"
          onChange={handleChange}
        />
        <label htmlFor="silverware">Need Silverware </label>
        <h4>{checkbox ? "Yes, provide silverware" : "No, I do not need silverware"}</h4>
      </div>
      
      {/* Radio input: */}
      <div>
        <h3>Select a combo size: </h3>
        <input id='small' value="small" onChange={handleChange} name="comboSize" type="radio"></input>
        <label htmlFor='small'>small</label>
        <input id='medium' value="medium" onChange={handleChange} name="comboSize" type="radio"></input>
        <label htmlFor='medium'>medium</label>
        <input id='large' value="large" onChange={handleChange} name="comboSize" type="radio"></input>
        <label htmlFor='large'>large</label>
        <h3>Your selected combo size is {comboSize}</h3>
      </div>     

      <Search handleSearch={handleSearch} />
      <div className="items">
        {items
          .filter((item) => item.title.toLowerCase().includes(search))
          .map((item, index) => {
            return (
              <Item
                key={index}
                product={item}
              />
            );
          })}
      </div>

    </div>

    
  )
}

export default App