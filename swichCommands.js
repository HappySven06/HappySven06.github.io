function normalPlay()
{
    document.getElementById("mainMenue").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";
}

function playerVplayer()
{
    document.getElementById("mainMenue").style.display = "none";
    document.getElementById("twoPlayerScreen").style.display = "block";
}

function mainMenue()
{
    document.getElementById("mainMenue").style.display = "block";
    document.getElementById("gameScreen").style.display = "none";
    document.getElementById("twoPlayerScreen").style.display = "none";
    document.getElementById("endScreen").style.display = "none";
}