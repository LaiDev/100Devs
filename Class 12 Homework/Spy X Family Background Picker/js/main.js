
let gifHolder = document.querySelector(".gifHolder")
let background = document.querySelector(".contentWrapper")

document.querySelector("#loidButton").addEventListener("click", loidGif)
document.querySelector("#yorButton").addEventListener("click", yorGif)
document.querySelector("#anyaButton").addEventListener("click", anyaGif)
document.querySelector("#bondButton").addEventListener("click", bondGif)
document.querySelector("#frankyButton").addEventListener("click", frankyGif)
document.querySelector("#henryButton").addEventListener("click", henryGif)
document.querySelector("#fionaButton").addEventListener("click", fionaGif)


function loidGif()
{
    gifHolder.style.backgroundImage = "url(/img/loid-spyxfamily.gif)"

    background.style.backgroundColor = "lightGray"
}

function yorGif()
{
    gifHolder.style.backgroundImage = "url(/img/yor-spyxfamily.gif)"

    background.style.backgroundColor = "#ff5345"
}

function anyaGif()
{
    gifHolder.style.backgroundImage = "url(/img/anya-spyxfamily.gif)"

    background.style.backgroundColor = "#ffada6"
}

function bondGif()
{
    gifHolder.style.backgroundImage = "url(/img/bond-spyxfamily.gif)"

    background.style.backgroundColor = "#fff7db"
}

function frankyGif()
{
    gifHolder.style.backgroundImage = "url(/img/franky-spyxfamily.gif)"

    background.style.backgroundColor = "#DAA06D"
}

function henryGif()
{
    gifHolder.style.backgroundImage = "url(/img/elegance-spyxfamily.gif)"

    background.style.backgroundColor = "lightGray"
}

function fionaGif()
{
    gifHolder.style.backgroundImage = "url(/img/nightfall-spyxfamily.gif)"

    background.style.backgroundColor = "#b0f2ff"
}