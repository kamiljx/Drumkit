const clap = document.querySelector('#aClap');
const chanel1 = [];
document.body.addEventListener('keypress', playClap);
function playClap(e){
    if(e.code === "KeyA"){
        clap.currentTime = 0;
        clap.play();
        const time = Date.now();
        chanel1.push({
            key: e.code, 
            time: time 
        }); 
    }
    console.log(chanel1);
}