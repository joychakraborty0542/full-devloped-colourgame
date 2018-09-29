var colors = randomColors(6)
      var square=document.querySelectorAll(".square");
      var b=pickcolor();
      var colordisplay=document.getElementById("colordisplay");
      var output=document.querySelector("#outcome");
      var resetbuttton=document.querySelector("#reset");
      var easy=document.querySelector("#easy");
      var hard=document.querySelector("#hard");
     colordisplay.textContent=b;
       easy.addEventListener("click",function(){
         easy.classList.add("selected");
         hard.classList.remove("selected");
          colors=randomColors(3);
          b=pickcolor();
      for (var i=0; i<square.length; i++)
       { if(colors[i]){
        square[i].style.background=colors[i];}else{

            square[i].style.background="none";
        }
       }

       });
       hard.addEventListener("click",function(){
         hard.classList.add("selected");
         easy.classList.remove("selected")
         colors=randomColors(6);
          b=pickcolor();
       for (var i=0; i<square.length; i++)
       {
        square[i].style.background=colors[i];
       }
       });
      resetbuttton.addEventListener("click" ,function(){
        colors= randomColors(6);
        b= pickcolor();
        colordisplay.textContent=b;
        for(var i=0; i<square.length; i++){
        square[i].style.background=colors[i];
      }
         
     
      });
      for(var i=0; i<square.length; i++){
      	square[i].style.background=colors[i];

      	square[i].addEventListener("click",function(){
      		var clickedColor =this.style.background;
      
      	  if(clickedColor===b){
            output.textContent="Correct!"
            resetbuttton.textContent="play again!!"
            changeColors(clickedColor);
            h1.style.background=clickedColor;
      	  }else{
              this.style.background="#232323";
              output.textContent="try agin";
      	}

      });
      }
      function changeColors(col){
            for(i=0; i<square.length; i++){
                  square[i].style.background=col;
            }
      }
      function pickcolor(){
            var random = Math.floor(Math.random()*colors.length);
            return colors[random]

      }
      function randomColors(num){
            var arr=[];
            for (i=0; i<num; i++){
              arr.push(Randomcolors());
            }
            return arr;
      }
      function Randomcolors(){
            var r =Math.floor(Math.random()*256);
            var g =Math.floor(Math.random()*256);
            var b =Math.floor(Math.random()*256);
            return "rgb(" + r + ", " + g + ", "+ b +")";

      }
