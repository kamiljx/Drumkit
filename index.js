document.body.addEventListener('keypress', onKeyPress)
document.querySelector('#channel1Rec')
    .addEventListener('click', btnChannel1Click)
    document.querySelector("#channel1Play").addEventListener("click",playChannel)
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
const pickChannel={
    C1: document.getElementById('1').value,
    C2: document.getElementById('2').value,
    C3: document.getElementById('3').value,
    C4: document.getElementById('4').value
}
function playChannel(){
    if(pickChannel.C1 == true)
    {channel1.forEach((el) => {
        setTimeout(() => {
            playSound(kKey[el.sound])
        }, el.time);
        console.log(channel1)
    })}
    if(pickChannel.C2 == true)
    {channel2.forEach((el) => {
        setTimeout(() => {
            playSound(kKey[el.sound])
        }, el.time);
        console.log(channel2)
    })}
    if(pickChannel.C3== true)
    {channel3.forEach((el) => {
        setTimeout(() => {
            playSound(kKey[el.sound])
        }, el.time);
        console.log(channel3)
    })}
    if(pickChannel.C4== true)
    {channel4.forEach((el) => {
        setTimeout(() => {
            playSound(kKey[el.sound])
        }, el.time);
        console.log(channel4)
    })}
}

function onKeyPress(e) {
    playSound(kKey[e.code]);
    const time = Date.now() - pickCorrectChannel();
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
    pickCorrectChannel();
    console.log(channel3);
    console.log(channel4);
    console.log(channel2);
    console.log(channel1);

}

function pickCorrectChannel() {
      if (pickChannel.C1.checked == true) 
      {
          channel1.push(sound)
          return channel1= Date.now();
      } if  (pickChannel.C2.checked== true){
        channel2.push(sound)
          return channel2 = Date.now();
      }if(pickChannel.C3.checked== true)
      {channel3.push(sound)
          return channel3= Date.now();
      }if(pickChannel.C4.checked== true){
        channel4.push(sound)
          return channel4= Date.now();
      }
      
}