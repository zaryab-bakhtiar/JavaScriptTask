
function generateCat() {
    
    let image = document.createElement('img')
    let div = document.getElementById('flex-cat-gen')

    image.src = "../cat generator/cat.jpg" 
    div.appendChild(image)

}

function reset() {

    document.getElementById('flex-cat-gen').innerHTML = "" 
}
