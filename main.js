let button = document.querySelector('button')
let tag = document.querySelector('h5')
let quote = document.querySelector('p')
let authr = document.querySelector('h6')
let container = document.querySelector('.container-fluid')


const getquote = (async (e)=>{
    e.preventDefault();
    const res = await fetch("https://quotable.io/random")
    const data = await res.json()
    console.log(data)
    container.style.backgroundImage = `url("https://source.unsplash.com/random/?${data.content})`
    container.style.backgoundPosition = `center`
    tag.innerText = data.tags
    quote.innerText = `"${data.content}"`
    authr.innerText = `~${data.author}`
})
button.addEventListener('click', getquote)