import React from "react";
import BotCard from "./BotCard";


function BotCollection({add, bots, fullDelete}) {

  function handleClick (bot) {
    add(bot)
  }

    let mappedBots = bots.map((bot)=> {
     return <BotCard fullDelete={fullDelete} handleClick={handleClick} key={bot.id} bot={bot}/>
      
    })

  return (
    <div className="ui four column grid">
      <div className="row">
        {mappedBots}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;



// "id": 101,
// "name": "wHz-93",
// "health": 94,
// "damage": 20,
// "armor": 63,
// "bot_class": "Support",
// "catchphrase": "1010010101001101100011000111101",
// "avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1",
// "created_at": "2018-10-02T19:55:10.800Z",
// "updated_at": "2018-10-02T19:55:10.800Z"
