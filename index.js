document.body.addEventListener('keypress', onKeyPress)
document.querySelector('#channel1Rec').addEventListener('click', btnChannel1Click)
document.querySelector("#channel1Play").addEventListener("click",playChannel1)

document.querySelector('#channel2Rec').addEventListener('click', btnChannel2Click)
document.querySelector("#channel2Play").addEventListener("click",playChannel2)

document.querySelector('#channel3Rec').addEventListener('click', btnChannel3Click)
document.querySelector("#channel3Play").addEventListener("click",playChannel3)

document.querySelector('#channel4Rec').addEventListener('click', btnChannel4Click)
document.querySelector("#channel4Play").addEventListener("click",playChannel4)
let channel1Start
let channel2Start
let channel3Start
let channel4Start
const channel1 = []
const channel2 = []
const channel3 = []
const channel4 = []
const kKey = {
    KeyQ: '#boom',
    KeyW: '#clap',
    KeyE: '#hihat',
    KeyA: '#kick',
    KeyS: '#openhat',
    KeyD: '#ride',
    KeyZ: '#snare',
    KeyX: '#tink',
    KeyC: '#tom' 
}
let recBtn = "";
function playChannel1(){
    channel1.forEach((el) => {
        setTimeout(() => {
            playSound(kKey[el.sound])
        }, el.time);
    })

}
function playChannel2(){
    channel2.forEach((el) => {
        setTimeout(() => {
            playSound(kKey[el.sound])
        }, el.time);
    })
}
function playChannel3(){
    channel3.forEach((el) => {
        setTimeout(() => {
            playSound(kKey[el.sound])
        }, el.time);
    })
}
function playChannel4(){
    channel4.forEach((el) => {
        setTimeout(() => {
            playSound(kKey[el.sound])
        }, el.time);
    })
}
function onKeyPress(e) {
    if(recBtn=="channel1"){
        playSound(kKey[e.code]);
        const time = Date.now() -  channel1Start;
        const sound = {
            sound: e.code,
            time: time
        }
        channel1.push(sound)
    }

    if(recBtn=="channel2"){
        playSound(kKey[e.code]);
        const time = Date.now() -  channel2Start;
        const sound = {
            sound: e.code,
            time: time
        }
        channel2.push(sound)
    }

    if(recBtn=="channel3"){
        playSound(kKey[e.code]);
        const time = Date.now() -  channel3Start;
        const sound = {
            sound: e.code,
            time: time
        }
        channel3.push(sound)
    }

    if(recBtn=="channel4"){
        playSound(kKey[e.code]);
        const time = Date.now() -  channel4Start;
        const sound = {
            sound: e.code,
            time: time
        }
        channel4.push(sound)
    }
}

function playSound(id) {
    const audioTag = document.querySelector(id)
    audioTag.currentTime = 0
    audioTag.play()
}
function btnChannel1Click() {
    channel1Start = Date.now()
    recBtn = "channel1";
}
function btnChannel2Click() {
    channel2Start = Date.now()
    recBtn = "channel2";
}
function btnChannel3Click() {
    channel3Start = Date.now()
    recBtn = "channel3";
}
function btnChannel4Click() {
    channel4Start = Date.now()
    recBtn = "channel4";
}