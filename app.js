const colors = ["red","green","blue","pink","yellow","orange"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", function(){
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = colors[randomColor]
    console.log(randomColor)

    color.innerHTML = colors[randomColor]
})

function getRandomColor(){
    return Math.floor(Math.random() * colors.length)
}