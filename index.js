

const chanel1 = [];
const clap = document.querySelector('#aClap');
const boom = document.querySelector('#aBoom');
const ride = document.querySelector('#aRide');
const openhat = document.querySelector('#aOpenhat');
const kick = document.querySelector('#aKick');
const snare = document.querySelector('#aSnare');
const hihat = document.querySelector('#aHihat');
const tom = document.querySelector('#aTom');
const tink = document.querySelector('#aTink');
document.body.addEventListener('keypress', playTink);
document.body.addEventListener('keypress', playTom);
document.body.addEventListener('keypress', playHihat);
document.body.addEventListener('keypress', playClap);
document.body.addEventListener('keypress', playSnare);
document.body.addEventListener('keypress', playBoom);
document.body.addEventListener('keypress', playRide);
document.body.addEventListener('keypress', playOpenhat);
document.body.addEventListener('keypress', playKick);

    function playClap(e){
        if(e.code === "KeyW" || e === "clap"){
            clap.currentTime = 0;
             clap.play();
             const time = Date.now();
             chanel1.push({
                 key: e.code, 
                 time: time 
             },
             document.getElementsByClassName("top2")[0].style.backgroundColor = "red"); 
         }
         else{
                document.getElementsByClassName("top2")[0].style.backgroundColor = "white" 
        }
             console.log(chanel1);
        }

    function playBoom(e){
        if(e.code === "KeyQ" || e === 'boom'){
            boom.currentTime = 0;
            boom.play();
            const time = Date.now();
            chanel1.push({
                key: e.code, 
                time: time 
            },
            
            document.getElementsByClassName("top1")[0].style.backgroundColor = "blue" 
            );    
        }
        else{
                document.getElementsByClassName("top1")[0].style.backgroundColor = "white" 
        }
    }
      function playHihat(e){
         if(e.code === "KeyE" || e === 'hihat'){
             hihat.currentTime = 0;
             hihat.play();
             const time = Date.now();
             chanel1.push({
                 key: e.code,
                 time: time 
             },
             document.getElementsByClassName("top3")[0].style.backgroundColor = "purple"); 
            }
            else{
                document.getElementsByClassName("top3")[0].style.backgroundColor = "white" 
        }
     }
     function playRide(e){
        if(e.code === "KeyD" || e === 'ride'){
            ride.currentTime = 0;
            ride.play();
            const time = Date.now();
            chanel1.push({
                key: e.code,
                time: time 
            },
            document.getElementsByClassName("mid3")[0].style.backgroundColor = "orange"); 
           }
           else{
               document.getElementsByClassName("mid3")[0].style.backgroundColor = "white" ;
       }
   }
      function playOpenhat(e){
         if(e.code === "KeyS" || e === 'openhat'){
             openhat.currentTime = 0;
             openhat.play();
             const time = Date.now();
             chanel1.push({
                 key: e.code,
                 time: time 
             },
             document.getElementsByClassName("mid2")[0].style.backgroundColor = "yellow"); 
            }
            else{
                document.getElementsByClassName("mid2")[0].style.backgroundColor = "white" ;
        }
     }         
      function playKick(e){
         if(e.code === "KeyA" || e === 'kick'){
             kick.currentTime = 0;
             kick.play();
             const time = Date.now();
             chanel1.push({
                 key: e.code,
                 time: time 
             },
             document.getElementsByClassName("mid1")[0].style.backgroundColor = "lime"); 
            }
            else{
                document.getElementsByClassName("mid1")[0].style.backgroundColor = "white" ;
        }
     }  

      function playTom(e){
         if(e.code === "KeyC" || e === 'tom'){
             tom.currentTime = 0;
             tom.play();
             const time = Date.now();
             chanel1.push({
                 key: e.code,
                 time: time 
             },
             document.getElementsByClassName("bottom3")[0].style.backgroundColor = "green"); 
            }
            else{
                document.getElementsByClassName("bottom3")[0].style.backgroundColor = "white" ;
        }
     }  
      function playTink(e){
         if(e.code === "KeyX" || e === 'tink'){
             tink.currentTime = 0;
             tink.play();
             const time = Date.now();
             chanel1.push({
                 key: e.code,
                 time: time 
             },
             document.getElementsByClassName("bottom2")[0].style.backgroundColor = "brown"); 
            }
            else{
                document.getElementsByClassName("bottom2")[0].style.backgroundColor = "white" ;
        }
     }  
      function playSnare(e){
         if(e.code === "KeyZ" || e === 'snare'){
             snare.currentTime = 0;
             snare.play();
             const time = Date.now();
             chanel1.push({
                 key: e.code,
                 time: time 
             },
             document.getElementsByClassName("bottom1")[0].style.backgroundColor = "black"); 
            }
            else{
                document.getElementsByClassName("bottom1")[0].style.backgroundColor = "white" ;
        }
     }  









