function action() //Main function called bt html and player controller
{
    let value = document.getElementById("Inpu").value;

    if (gameOver == false)
    {
        if (value == "1")
        {
            enemy.damage();
            pAtacc = true;
        }
        if (value == "2")
        {
            if (pVas == 90)
            {
                //heal
                pVas -= 10;
                player.heal();
                pHeal = true; 
            }
            if (pVas == 100)
            {
                //atacc
                enemy.damage();
                pAtacc = true;
            }
            if (pVas < 90)
            {
                //heal
                player.heal();
                pHeal = true;
            }
        }
    }

    enemyAction();

    log();

    pVas = player.health;
    eVas = enemy.health;

    let header = document.querySelector("#PlayerHealth");
    header.innerText = "Player health: " + pVas;
    let headerr = document.querySelector("#EnemyHealth");
    headerr.innerText = "Enemy health: " + eVas;

    if (pVas <= 0)
    {
        console.log("over");
        gameOver = true;
        enemyWin = true;
        gameEnded();
    }
    if (eVas <= 0)
    {
        console.log("over");
        gameOver = true;
        playerWin = true;
        gameEnded();
    }
}

function enemyAction() //Enemy moves
{
    if (gameOver == false)
    {
        min = 1;
        max = 3;

        var Vastus = Math.random() * (max - min) + min;
        vastus = parseInt(Vastus)
        Math.trunc(vastus);

        if (vastus == 1)
        {
            //atacc
            player.damage();
            eAtacc = true;
        }
        if (vastus == 2)
        {
            if (eVas == 100)
            {
                //heal
                eVas -= 10;
                enemy.heal();
                eHeal = true; 
            }
            if (eVas == 110)
            {
                //atacc
                player.damage();
                eAtacc = true;
            }
            if (eVas < 90)
            {
                //heal
                enemy.heal();
                eHeal = true;
            }
        }
    }
}

function log() //Round activity log
{
    console.log("----------");
    console.log("Player health: " + pVas);
    console.log("Enemy health: " + eVas);
    if (pAtacc == true)
    {
        console.log("Player atacc");
        eTotalHealth.push(10);
        pTotalDamage.push(10);
    }
    if (pHeal == true)
    {
        console.log("Player heal");
    }
    if (eAtacc == true)
    {
        console.log("Enemy atacc");
        pTotalHealth.push(10);
        eTotalDamage.push(10);
    }
    if (eHeal == true)
    {
        console.log("Enemy heal");
    }
    console.log("----------");

    pAtacc = false;
    eAtacc = false
    pHeal = false;
    eHeal = false;
}

function gameEnded() //Game ended scores
{
    pToatalHealthAdded = 0; 
    eToatalHealthAdded = 0; 
    pToataldamageAdded = 0; 
    eToatalDamageAdded = 0; 
    winner = "none";

    pHealthAdded = pTotalHealth.forEach(function(add){pToatalHealthAdded += add});
    eHealthAdded = eTotalHealth.forEach(function(add){eToatalHealthAdded += add});
    pDamageAdded = pTotalDamage.forEach(function(add){pToataldamageAdded += add});
    eDamageAdded = eTotalDamage.forEach(function(add){eToatalDamageAdded += add});

    if (playerWin == true)
    {
        winner = "player"
    }
    if (enemyWin == true)
    {
        winner = "enemy"
    }

    console.log("----------");
    console.log("The game was won by: " + winner)
    console.log("Player total health used: " + pToatalHealthAdded);
    console.log("Enemy total health used: " + eToatalHealthAdded);
    console.log("Player total damage given: " + pToataldamageAdded);
    console.log("Enemy total damage given: " + eToatalDamageAdded);
    console.log("----------");

    document.getElementById("gameScreen").style.display = "none";
    document.getElementById("endScreen").style.display = "block";

    document.getElementById("GameWinner").innerHTML = "Winner: " + winner;
    document.getElementById("PlayerScoreHealth").innerHTML = "Player total health used: " + pToatalHealthAdded;
    document.getElementById("EnemyScoreHealth").innerHTML = "Enemy total health used: " + eToatalHealthAdded;
    document.getElementById("PlayerScoreDamage").innerHTML = "Player total damage given: " + pToataldamageAdded;
    document.getElementById("EnemyScoreDamage").innerHTML = "Enemy total damage given: " + eToatalDamageAdded;
}

function playAgain()
{
    gameOver = false; //Game over
    playerWin = false; //Player won
    enemyWin = false; //Enemy won

    pAtacc = false; //Player used atacc
    eAtacc = false; //Enemy used atacc
    pHeal = false; //Player used heal
    eHeal = false; //Enemy used heal

    eVas = 110; //Enemy health
    pVas = 100; //Player health
    player.health = 100; //Player health
    enemy.health = 110; //Enemy health

    pTotalHealth.length = 0; //Total health used by player
    eTotalHealth.length = 0; //Total health used by enemy
    pTotalDamage.length = 0; //Todal damage done by player
    eTotalDamage.length = 0; //Total damage done by enemy

    pToatalHealthAdded = 0; //Player total health math done (Used for game end screen)
    eToatalHealthAdded = 0; //Enemy total health math done (Used for game end screen)
    pToataldamageAdded = 0; //Player total damage math done (Used for game end screen)
    eToatalDamageAdded = 0; //Enemy total damaSge math done (Used for game end screen)
    winner = "none"; //Winner of the game (Used for game end screen)

    let header = document.querySelector("#PlayerHealth");
    header.innerText = "Player health: " + pVas;
    let headerr = document.querySelector("#EnemyHealth");
    headerr.innerText = "Enemy health: " + eVas;

    document.getElementById("endScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";
}

gameOver = false; //Game over
playerWin = false; //Player won
enemyWin = false; //Enemy won

pAtacc = false; //Player used atacc
eAtacc = false; //Enemy used atacc
pHeal = false; //Player used heal
eHeal = false; //Enemy used heal

eVas = 110; //Enemy health
pVas = 100; //Player health

var pTotalHealth = []; //Total health used by player
var eTotalHealth = []; //Total health used by enemy
var pTotalDamage = []; //Todal damage done by player
var eTotalDamage = []; //Total damage done by enemy

pToatalHealthAdded = 0; //Player total health math done (Used for game end screen)
eToatalHealthAdded = 0; //Enemy total health math done (Used for game end screen)
pToataldamageAdded = 0; //Player total damage math done (Used for game end screen)
eToatalDamageAdded = 0; //Enemy total damage math done (Used for game end screen)
winner = "none"; //Winner of the game (Used for game end screen)

player = {
    health: 100,

    damage: function()
    {
        this.health -= 10;
        pVas = JSON.stringify(this.health)
    },

    heal: function()
    {
        this.health += 20;
        pVas = JSON.stringify(this.health)
    }
}

enemy = {
    health: 110,

    damage: function()
    {
        this.health -= 10;
        eVas = JSON.stringify(this.health)
    },

    heal: function()
    {
        this.health += 20;
        eVas = JSON.stringify(this.health)
    }
}