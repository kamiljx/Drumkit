

const clap = document.querySelector('#aClap');
        const chanel1 = [];
        document.body.addEventListener('keypress', playClap);
        function playClap(e){
            if(e.code === "KeyW" || document.getElementById("aClap").click()){
                clap.currentTime = 0;
                clap.play();
                const time = Date.now();
                chanel1.push({
                    key: e.code, 
                    time: time 
                },
                document.getElementsByClassName("top2")[0].style.backgroundColor = "red"); 
            }
             console.log(chanel1);
            
        }

const chanel2 = [];
const boom = document.querySelector('#aBoom');
document.body.addEventListener('keypress', playBoom);
    function playBoom(e){
        if(e.code === "KeyQ" || document.getElementById('aBoom').clicked == true){
            boom.currentTime = 0;
            boom.play();
            const time = Date.now();
            chanel2.push({
                key: e.code, 
                time: time 
            },
            document.getElementsByClassName("top1")[0].style.backgroundColor = "red");         }
        console.log(chanel2);
    
}
const chanel3 = [];
 const hihat = document.querySelector('#aHihat');
 document.body.addEventListener('keypress', playHihat);
      function playHihat(e){
         if(e.code === "KeyE" || event.click === 'hihat'){
             hihat.currentTime = 0;
             hihat.play();
             const time = Date.now();
             chanel3.push({
                 key: e.code,
                 time: time 
             },
             document.getElementsByClassName("top3")[0].style.backgroundColor = "purple"); 
            }
         console.log(chanel3);
     }

//RECORD//     

if(document.getElementById('recordButton').clicked == true)
{
    document.addEventListener('DOMContentLoaded', () => {
        'use strict';
    
        document.addEventListener('keydown', event => {
            const charList = 'qweasdzxc';
            const key = event.key.toLowerCase();
    
            // we are only interested in alphanumeric keys
            if (charList.indexOf(key) === -1) return;
    
            console.log(key);
        });
    });
    
}



