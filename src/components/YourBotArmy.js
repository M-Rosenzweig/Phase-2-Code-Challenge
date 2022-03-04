import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({remove, faves, fullDelete}) {

  function handleClick (bot) {
    remove(bot)

  }

  let mappedFaves = faves.map((bot)=> {
    return <BotCard fullDelete={fullDelete} handleClick={handleClick} key={bot.id} bot={bot}/>
  })

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {mappedFaves}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
