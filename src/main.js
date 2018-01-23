import React from 'react';
import ReactDOM from 'react-dom';

const theCards = [];
const randomCard = '';

function RandomEvent() {
  theCards = [
    "Thor blesses you! Vikings gain 1 free loot.",
    "Recruit another captain!",
    "Captains are fired and replaced!",
    "They've added fortified walls, double SKOL to climb over them!",
    "Their armies are terrified, -1 health for the current captain!",
    "Current captain fully recovers from all hits!",
    "Current kingdom's leader has been overthrown and replaced!",
    "An alliance is formed with the kingdom to the right!",
    "NOTHING HAPPENS! 🎉",
    "Food supply is low, their kingdom loses 2 health!",
    "Current captain trains more troops, gains 2 health!",
    "NOTHING HAPPENS! 🎉",
    "Current captain captured more treasure, add 1 loot!",
    "One of the fallen captains returns for vengeance!",
  ];
  randomCard = theCards[Math.floor(Math.random()*theCards.length)];
  return <h1>{randomCard}</h1>;
}

const element = <RandomEvent  />;

ReactDOM.render(
  element,
  document.getElementById('root')
);
