

$(function(){
  var str = '#len'; //increment by 1 up to 1-nelemnts
  $(document).ready(function(){
    var i, stop;
    i = 1;
    stop = 4; //num elements
    setInterval(function(){
      if (i > stop){
        return;
      }
      $('#len'+(i++)).toggleClass('bounce');
    }, 500)
  });
});




// our drum kit code
for (var i=0 ; i<document.querySelectorAll(".drum").length ; i++){
	document.querySelectorAll(".drum")[i].addEventListener("click",function () {
	
	var buttonInnerHTML=this.innerHTML;
	sound(buttonInnerHTML);	
	buttonAnimation(buttonInnerHTML);
	});
}


document.addEventListener("keypress", function(event) {
	
	sound(event.key);
	buttonAnimation(event.key);
	//alert("key is pressed");
});

function sound(key){
	
	switch (key){
		case "w": 
			var tom1= new Audio('sounds/tom-1.mp3');
			tom1.play();
			break;
		
		case "a":
			var tom2= new Audio('sounds/tom-2.mp3');
			tom2.play();
			break;
		
		case "s":
			var tom3= new Audio('sounds/tom-3.mp3');
			tom3.play();
			break;
			
		case "d":
			var tom4= new Audio('sounds/tom-4.mp3');
			tom4.play();
			break;
			
		case "j":
			var crash= new Audio('sounds/crash.mp3');
			crash.play();
			break;
			
		case "k":
			var kick= new Audio('sounds/kick-bass.mp3');
			kick.play();
			break;
		
		case "l":
			var snare= new Audio('sounds/snare.mp3');
			snare.play();
			break;
		
		default: alert(letter);
		
	}
}

function buttonAnimation(currentKey){
	
	var activeButton=document.querySelector("." + currentKey);
	
	    activeButton.classList.add("pressed");
	
	setTimeout(function(){
		activeButton.classList.remove("pressed");
	}, 100 );
	
}