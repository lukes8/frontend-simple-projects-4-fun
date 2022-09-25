const imgs = document.getElementById('imgs')
const left = document.getElementById('left')
const right = document.getElementById('right')
const middle = document.getElementById('middle')

const imgList = document.querySelectorAll('#imgs div')

let idx = 0

let interval = setInterval(run, 2000)


const list = [
    {   
        label: 'Kopřiva dvoudomá', 
        imgUrl: 'https://www.uniprosta.cz/wp-content/uploads/2021/03/kopriva-dvoudoma.jpg',
        desc: 'Kopřiva dvoudomá patří mezi naše nejlepší léčivé rostliny. Jak kdysi napsala rakousko-česká bylinářka ve své knize Zdraví z boží lékárny...', 
        resourceUrl: 'https://www.pharmapoint.cz/herbar/kopriva-dvoudoma/'
    },
    {
        label: 'Lípa srdčitá', 
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Tilia-cordata2.JPG',
        desc: 'Lípa srdčitá je velmi užitečný strom. Vysazuje se pro dřevo, jako okrasný a stínící strom, jako medonosný strom nebo pro své květy, které jsou vysoce ceněné v lidovém léčitelství. ', 
        resourceUrl: ''
    },
    {
        label: 'Smetanka lékařská', 
        imgUrl: 'http://www.pharmapoint.cz/wp-content/uploads/2016/02/pampeli%C5%A1ka-%C3%BAprava.jpg',
        desc: 'Pampeliška neboli smetanka lékařská je často vnímána jako dotěrný plevel a také mezi plevelné byliny patří. Svými zářivě žlutými květy každoročně rozveseluje jarní a letní louky a malé holčičky si z nich s oblibou splétají princeznovské věnečky. Kromě veselé barvy se však jedná o cennou léčivku, která pomáhá léčit nemoci jater a žlučníku. ', 
        resourceUrl: ''
    },
    {
        label: 'Benedikt lékařský', 
        imgUrl: 'https://www.zdravimkuspechu.cz/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/v/n/vn-benedikt__1.jpg',
        desc: `
                Musíme zaklepat, ale hlavní důvod užívání čubetu už nám v naší kotlině nehrozí. Rostlina, jež získala své jméno po sv. Benediktu, byla totiž uznávanou bojovnicí proti dýmějovému moru.
                Ovšem další benefity pro zdraví, které přináší, se hodí i dnes.
        `, 
        resourceUrl: ''
    }
]


function showList() {

    let id = 1
    list.forEach((item) => {
        const { label, imgUrl, desc, resourceUrl } = item

    
        const imgcEl = document.createElement('div')
        imgcEl.classList.add('imgc__item')
        const imgEl = document.createElement('img')
        imgcEl.innerHTML = `
                        <img src="${imgUrl}"
                        alt="">
                        <div class="imgc__overview${id}">
                        <h3>${label}</h3>
                        <p class="imgc__overview--text">
                            ${desc}
                            <a href="${resourceUrl}" target="_blank">Cely prispevek <span class="meta-nav">→</span></a>
                        </p>
                        </div>
        `
        imgs.appendChild(imgcEl)
        id++
    })
}




middle.innerHTML = 'Resume'
resetInterval()

showList()


function run () {
    
    changeImage()
    idx++
}

function changeImage() {
    if (idx > list.length - 1) {
        idx = 0
    } else if (idx < 0) {
        idx = list.length - 1
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
    
    if (middle.innerHTML === 'Pause') {
        middle.innerHTML = 'Resume'
    } else {
        middle.innerHTML = 'Pause'
    }
    resetInterval()
})

function resetInterval() {
    if (middle.innerHTML === 'Pause') {
        clearInterval(interval)
        interval = setInterval(run, 2000)    
    } else {
        clearInterval(interval)
    }
}