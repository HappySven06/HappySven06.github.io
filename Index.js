let gameOver = false; //Game over
playerWin = false; //Player won
enemyWin = false; //Enemy won

pAtacc = false; //Player used atacc
eAtacc = false; //Enemy used atacc
pHeal = false; //Player used heal
eHeal = false; //Enemy used heal
eSkip = false;

eVas = 110; //Enemy health
pVas = 100; //Player health
healsUsed = 0; //Executive enemy heals

let pTotalHealth = []; //Total health used by player
let eTotalHealth = []; //Total health used by enemy
let pTotalDamage = []; //Todal damage done by player
let eTotalDamage = []; //Total damage done by enemy

let pToatalHealthAdded = 0; //Player total health math done (Used for game end screen)
let eToatalHealthAdded = 0; //Enemy total health math done (Used for game end screen)
let pToataldamageAdded = 0; //Player total damage math done (Used for game end screen)
let eToatalDamageAdded = 0; //Enemy total damage math done (Used for game end screen)

let pHealthAdded = 0;
let eHealthAdded = 0;
let pDamageAdded = 0;
let eDamageAdded = 0;

let LogTimes = 0;

winner = "none"; //Winner of the game (Used for game end screen)

function heal()
{
    if (gameOver == false)
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

    action();
}

function eheal()
{
    if (eVas == 100)
    {
        //heal
        eVas -= 10;
        enemy.heal();
        eHeal = true;
        healsUsed ++;
    }
    if (eVas == 110)
    {
        //atacc
        player.damage();
        eAtacc = true;
        healsUsed ++;
    }
    if (eVas <= 90)
    {
        //heal
        enemy.heal();
        eHeal = true;
        healsUsed ++;
    }
}

function attack()
{
    if (gameOver == false)
    {
        enemy.damage();
        pAtacc = true;
    }

    action();
}

function action() //Main function called bt html and player controller
{
    enemyMediun();

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

function enemyEasy()
{
    if (gameOver == false)
    {
        min = 1;
        max = 10;

        var Rand = Math.random() * (max - min) + min;
        Rand = parseInt(Rand)
        Math.trunc(Rand);

        vastus = Rand % 2;
        console.log(vastus);

        if (vastus == 1)
        {
            //atacc
            player.damage();
            eAtacc = true;

            if (healsUsed == 2)
            {
                healsUsed = 0;
            }
        }
        if (vastus == 0)
        {
            if (healsUsed !== 2)
            {
                if (pHeal == true)
                {
                    min = 1;
                    max = 10;

                    var Rand2 = Math.random() * (max - min) + min;
                    Rand2 = parseInt(Rand2)
                    Math.trunc(Rand2);

                    vastus2 = Rand2 % 2;

                    if (vastus2 == 1)
                    {
                        //atacc
                        player.damage();
                        eAtacc = true;
                        healsUsed ++;
                    }
                    if (vastus2 == 0)
                    {
                        eheal();
                    }
                }
                else 
                {
                    eheal();
                    
                }
            }
            else
            {
                healsUsed = 0;
            }
        }
    }
}

function enemyMediun()
{
    if (gameOver == false)
    {
        min = 1;
        max = 10;

        var Rand = Math.random() * (max - min) + min;
        Rand = parseInt(Rand)
        Math.trunc(Rand);

        vastus = Rand % 2;
        console.log(vastus);

        setTimeout(5000);

        if (vastus == 1)
        {
            //atacc
            player.damage();
            eAtacc = true;

            if (healsUsed == 2)
            {
                healsUsed = 0;
            }
        }
        if (vastus == 0)
        {
            if (healsUsed !== 2)
            {
                if (pHeal == true)
                {
                    min = 1;
                    max = 10;

                    var Rand2 = Math.random() * (max - min) + min;
                    Rand2 = parseInt(Rand2)
                    Math.trunc(Rand2);

                    vastus2 = Rand2 % 2;

                    if (vastus2 == 1)
                    {
                        //atacc
                        player.damage();
                        eAtacc = true;
                        healsUsed ++;
                    }
                    if (vastus2 == 0)
                    {
                        eheal();
                        healsUsed ++;
                    }
                }
                else 
                {
                    eheal();
                    healsUsed ++;
                }
            }
            else
            {
                healsUsed = 0;
            }
        }
    }
}

function enemyHard()
{
    
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

        printAction = "<Player> Player attacked";
        logPrompt(printAction);
    }
    if (pHeal == true)
    {
        console.log("Player heal");

        printAction = "<Enemy> Enemy healed";
        logPrompt(printAction);
    }
    if (eAtacc == true)
    {
        console.log("Enemy atacc");
        pTotalHealth.push(10);
        eTotalDamage.push(10);

        printAction = "<Enemy> Enemy attacked"
        logPrompt(printAction);
    }
    if (eHeal == true)
    {
        console.log("Enemy heal");

        printAction = "<Enemy> Enemy healed";
        logPrompt(printAction);
    }
    if (eSkip == true)
    {
        console.log("Enemy skiped")

        printAction = "<Enemy> Enemy skiped";
        logPrompt(printAction);
    }
    console.log("Enemy heals used: " + healsUsed)
    console.log("----------");

    pAtacc = false;
    eAtacc = false
    pHeal = false;
    eHeal = false;
    pSkip = false;
}

function logPrompt(printAction)
{
    if (document.getElementById("LogPrompt").children.length > 3)
    {
        document.getElementById("LogPrompt").firstElementChild.remove()
    }

    const slot = document.createElement("p");
    slot.setAttribute("id", "Slot"+LogTimes)
    const slotInf = document.createTextNode(printAction);
    slot.appendChild(slotInf);
    const element = document.getElementById("LogPrompt");
    element.appendChild(slot);
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
    while (document.getElementById("LogPrompt").children.length > 0)
    {
        document.getElementById("LogPrompt").firstElementChild.remove()
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
    player.health = 100; //Player health
    enemy.health = 110; //Enemy health
    healsUsed = 0;

    LogTimes = 0;

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