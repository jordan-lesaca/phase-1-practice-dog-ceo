console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
    let selector = document.getElementById('breed-dropdown')
    
    fetchImg()
    fetchBreed()


    selector.onchange = () => dropDown()
})

function fetchImg(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
    return fetch(imgUrl)
        .then(response => response.json())
        .then(results => {
            console.log(results.message)
            results.message.forEach(image => addImg(image))
    })
}

function addImg(imgUrl){
    const container = document.getElementById('dog-image-container')
    const newImg = document.createElement('img')
    newImg.src = imgUrl
    container.appendChild(newImg)
}

function fetchBreed(){
    return fetch('https://dog.ceo/api/breeds/list/all')
        .then(resp => resp.json())
        .then(data => {
            const breed = Object.keys(data.message)
            appendBreeds(breed)
        })
}

function appendBreeds(breed){
    const ul = document.getElementById('dog-breeds')
    
    breed.forEach(breed =>{
        const li = document.createElement('li')
        li.innerHTML = breed
        ul.appendChild(li)
        li.addEventListener("click", () => {
            li.style.color = "blue"
        })
    })
}

function dropDown(){
    let select = document.getElementById('breed-dropdown').value 
    let newLi = document.getElementsByTagName('li')
    let array = Array.from(newLi) // method that creates a new shallow-copied Array instance from an array-like or iterable object
    
    array.forEach(function (li){
        if (li.innerHTML.charAt(0) == select){
            li.style.display = 'block'
        } else {
            li.style.display = 'none'
        }
    })
}