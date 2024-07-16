let _box = document.getElementById('_box')
let _sec = document.getElementById('_sec')
let flag2 = 1
let _div = document.querySelectorAll('._div')
let _topNew = 0
let _mobMenu = document.getElementById('_mobMenu')
let _barMenuOnMob = document.getElementById('_barMenuOnMob')
let mySubMenuMob = document.getElementById('mySubMenuMob')
let _li = document.querySelectorAll('._li')
let _ul = document.getElementById('_ul')
let flag1 = 0
let _arrowDown = document.getElementById('_arrowDown')
let _arrowUp = document.getElementById('_arrowUp')
let _myDeskMenu2 = document.getElementById('_myDeskMenu2')
let _myDeskMenu3 = document.getElementById('_myDeskMenu3')
let _mouse =  document.getElementById('_mouse')


function myScaleImg() {
    //animation
    _div.forEach(val => {
        val.classList.add('scale-[0.5]')
        setTimeout(() => {
            val.classList.remove('scale-[0.5]')
        }, 2000);
    })
}

// part1*******************

_box.addEventListener('wheel', (event) => {
    myFunc(event)
})

function myFunc(event) {

    //reset
    if ((_topNew == 0)) {
        flag2 = 1
        if (event.deltaY <= 0) {
            return
        }
    }
    //reset
    if ((_topNew <= -300)) {
        flag2 = 1
        if (event.deltaY > 0) {
            return
        }
    }
    //up
    if (event.deltaY > 0) {
        _sec.style.top = `${-100*flag2}vh`
        flag2++
    } else {
        //down            
        _sec.style.top = Number(_topNew) + 100 + 'vh'
    }
    _topNew = (_sec.style.top).slice(0, (_sec.style.top.length) - 2)

    myScaleImg()
}

// part2*******************
function myMobMenu1() {
    _barMenuOnMob.style.right = 0
    _box.style.right = '70%'
    _barMenuOnMob.children[0].children[0].classList.add('menuAnimation')
}

function myMobMenu2() {
    _barMenuOnMob.style.right = '-100%'
    _box.style.right = '0'
}

function mySubMenu(s) {
    if (flag1 == 0) {
        flag1++
        mySubMenuMob.style.height = '80%'
        _ul.classList.remove('hidden')
        _ul.classList.add('flex')
        _li.forEach((val, index) => {
            if (index == 2) {
                val.style.height = '40%'
            } else {
                val.style.height = '15%'
            }
        })
    } else {
        mySubMenuMob.style.height = '60%'
        _ul.classList.add('hidden')
        _li.forEach((val, index) => {
            val.style.height = '15%'
            flag1 = 0
        })
    }
}

function myUpFun() {   
    _topNew = (_sec.style.top).slice(0, (_sec.style.top.length) - 2)  
     myScaleImg() 
    if ((_topNew == 0)) {       
        _sec.style.top = Number(_topNew) - 300 + 'vh'       
        console.log(2);      
    }else{
        _sec.style.top = Number(_topNew) + 100 + 'vh' 
    }
}

function myDownFun() {
    _topNew = (_sec.style.top).slice(0, (_sec.style.top.length) - 2)  
     myScaleImg() 
     if ((_topNew == -300)) {       
        _sec.style.top = 0 + 'vh'       
        console.log(2);      
    }else{
        _sec.style.top = Number(_topNew) - 100 + 'vh' 
    }
}

// part3*******************
function _myDeskMenu1() {
    _myDeskMenu2.classList.remove('right-[-100%]')
    _myDeskMenu2.classList.add('right-0')
}
function _myClose() {
    _myDeskMenu2.classList.add('right-[-100%]')
    _myDeskMenu2.classList.remove('right-0')
}

function _myDeskPage1() {
    _myDeskMenu3.classList.remove('right-[-100%]')
    _myDeskMenu3.classList.add('right-0')
}

function _myClose2() {
    _myDeskMenu3.classList.add('right-[-100%]')
    _myDeskMenu3.classList.remove('right-0')
}



