document.body.addEventListener('keypress', onKeyPress)
document.querySelector('#channel1Rec')
    .addEventListener('click', btnChannel1Click)
    document.querySelector("#channel1Play").addEventListener("click",playChannel1)
let channel1Start
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

function playChannel1(){
    channel1.forEach((el) => {
        setTimeout(() => {
            playSound(kKey[el.sound])
        }, el.time);
        console.log(channel1)
    })
}
function playChannel2(){
    channel1.forEach((el) => {
        setTimeout(() => {
            playSound(kKey[el.sound])
        }, el.time);
        console.log(channel2)
    })
}
function playChannel3(){
    channel1.forEach((el) => {
        setTimeout(() => {
            playSound(kKey[el.sound])
        }, el.time);
        console.log(channel3)
    })
}
function playChannel4(){
    channel1.forEach((el) => {
        setTimeout(() => {
            playSound(kKey[el.sound])
        }, el.time);
        console.log(channel4)
    })
}

function onKeyPress(e) {
    playSound(kKey[e.code]);
    const time = Date.now() - channel1Start;
    const sound = {
        sound: e.code,
        time: time
    }
    channel1.push(sound)
}

function playSound(id) {
    const audioTag = document.querySelector(id)
    audioTag.currentTime = 0
    audioTag.play()
}
function btnChannel1Click() {
    channel1Start = Date.now()
}



var checkBox = document.getElementById("#formChannel");
var channelCheckbox = {
  channel11: document.getElementById("1").value,
  channel12: document.getElementById("2").value,
  channel13: document.getElementById("3").value,
  channel14: document.getElementById("4").value,
}
function myFunction() {
      if (document.getElementById('1').value) 
      {
          return channel1
      } if  (document.getElementById('2').value){
          return channel2;
      }if(document.getElementById('3').value)
      {
          return channel3;
      }if(document.getElementById('4').value){
          return channel4;
      }
      else{
          alert("You didn't select channel")
      }
}