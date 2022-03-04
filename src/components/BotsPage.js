import React, {useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [faves, setFaves] =useState([]);

  useEffect(()=> {
    fetch('http://localhost:3000/bots')
    .then(resp => resp.json())
    .then(data => {
      setBots(data)
    })
  },[])

  function add (bot) {
    // set the faves and tell it to add the 'bot'
    if(faves.includes(bot) == false) 
    return setFaves([...faves, bot])
    }

    function remove (bot) {
      setFaves(faves.filter((i)=> {
       return i !== bot
      }))
    }

    function fullDelete (bot) {
      
      fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: 'DELETE',
      header: {
        'Content-Type': 'application/json'
      }
      })

      setFaves(faves.filter((i)=> {
        return i !== bot
       }))

       setBots(bots.filter((i)=> {
        return i !== bot
       }))


      console.log('remove from server and from rendering');
    }

  return (
    <div>
      <YourBotArmy fullDelete={fullDelete} remove={remove} faves={faves} />
      <BotCollection fullDelete={fullDelete} add={add} bots={bots} />
    </div>
  )
}

export default BotsPage;
