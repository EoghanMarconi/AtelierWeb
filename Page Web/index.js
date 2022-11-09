const logocube = document.getElementById('logocube')
const facebicycle = document.getElementById('facebicycle')
const facetrain = document.getElementById('facetrain')
const arrayBox = [logocube,facebicycle,facetrain]
const button = document.getElementById('button')
let i = 0;
button.onclick=()=>{
if (i<arrayBox.length-1){
    i++
    arrayBox[i].style.visibility = "visible"
} else {
        for (let x = 1;x<arrayBox.length;x++) {
            arrayBox[x].style.visibility = "hidden"
        }
        if (i == arrayBox.length-1) {
            i = 0
        }
    }
}

