const imgs = document.getElementById('imgs')
const left = document.getElementById('left')
const right = document.getElementById('right')
const middle = document.getElementById('middle')

const imgList = document.querySelectorAll('#imgs img')

let idx = 0

let interval = setInterval(run, 2000)

function run () {
    
    changeImage()
    idx++
}

function changeImage() {
    if (idx > imgList.length - 1) {
        idx = 0
    } else if (idx < 0) {
        idx = imgList.length - 1
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
}

left.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})

right.addEventListener('click', ()=> {
    idx++
    changeImage()
    resetInterval()
})

middle.addEventListener('click', ()=> {
    clearInterval(interval)
})

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)

}