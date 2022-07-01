const playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

console.log(playerName, playerHealth, playerAttack);

const enemyName = 'Roborto';
let enemyHealth = 50;
let enemyAttack = 12;

const fight = function () {
  //Alert the player that they are starting the round
  window.alert('Welcome to Robot Gladiators!');
  const promptFight = window.prompt(
    "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose "
  );
  console.log(promptFight);

  //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the 'enemyHealth' variable

  //if player choose to fight, then fight
  if (promptFight === 'fight' || promptFight === 'FIGHT') {
    //remove the enemyHealth by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;

    //Log a resulting message to the console so we know that it worked
    console.log(
      playerName +
        ' attacked ' +
        enemyName +
        '. ' +
        enemyName +
        ' now has ' +
        enemyHealth +
        ' health remaining'
    );

    //Check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left');
    }

    //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the 'playerHealth' variable
    playerHealth = playerHealth - enemyAttack;

    //Log a resulting message to the console so we know that it worked
    console.log(
      enemyName +
        ' attacked ' +
        playerName +
        '. ' +
        playerName +
        ' now has ' +
        playerHealth +
        ' health remaining.'
    );

    //Check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left ');
    }
  } else if (promptFight === 'skip' || promptFight === 'SKIP') {
    //confirm player wants to skip the game
    const confirmSkip = window.confirm(
      "Are you sure you'd like to quit the game?"
    );

    //if yes then leave the game
    if (confirmSkip) {
      window.alert(playerName + ' has decided to skip the game, Goodbye!');
      //subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;
    } else {
      fight();
    }
  }
  //if no, ask question again by running fight() again
  else {
    window.alert('You need to choose a valid option.Try again!');
  }
};

fight();
