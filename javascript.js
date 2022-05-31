let container = document.querySelector(`#container`)


let content = document.createElement(`p`)
content.classList.add(`content`)
content.textContent = `Hey im red!`
content.style.color = `red`
container.appendChild(content)

let content2 = document.createElement(`h3`)
content2.classList.add(`h3`)
content2.textContent= `I’m a blue h3!`
content2.style.color = `blue`
container.appendChild(content2)

let div = document.createElement(`div`)
div.classList.add(`div`)
div.style.cssText = `border: 1px solid black; background-color: pink;`

let h1 = document.createElement(`h1`)
let p = document.createElement(`p`)
h1.textContent = `I’m in a div`
p.textContent = `ME TOO!`

container.appendChild(div)
div.appendChild(h1)
div.appendChild(p)


const btn = document.querySelector(`#btn`)
btn.onclick = () => alert(`Hello World`)

const butn = document.querySelector(`.btn`)
butn.addEventListener(`click`,() =>{
  alert(`Hello World`)
})

btn.addEventListener('click', function (e) {
  e.target
});
