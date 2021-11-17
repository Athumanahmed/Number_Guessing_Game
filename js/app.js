// game values.........
let min = 1,
    max = 25,
    winningNum = getwinningnum(min ,  max),
    guessesleft = 3;

    // UI Elements............
    const game = document.querySelector('#game'),
          minNum = document.querySelector('.min-num'),
          maxNum = document.querySelector('.max-num'),
          guessbtn = document.querySelector('#guess-btn'),
          guessinput = document.querySelector('#guess-input'),
          message = document.querySelector('.message');


        //   Assing UI min and max numbers
            minNum.textContent = min;
            maxNum.textContent = max;

            // play again event listener.
            game.addEventListener('mousedown' , function(e){
                if(e.target.className === 'play-again'){
                    window.location.reload();
                }
            })

            // listen for guess......
            guessbtn.addEventListener('click', function(){

                let guess = parseInt(guessinput.value);
            

                // validate input
                if(isNaN(guess) || guess < min || guess > max) {
                    setmessage(`please enter a number between ${min} and ${max}` , 'red');

                    setmessage(msg);
                }
                
               

                // check if won........
                if(guess === winningNum){

                   // game over - won
                   gameover(true , `${winningNum} is the correct number... congratulations correct guess... Take a screenshot and submit via WhatsApp Button above`);
                } else{
                    // wrong number
                    guessesleft -= 1;

                    if(guessesleft === 0){
                        // game over - lost

                             gameover(false , `Game Over, You lost The correct number was ${winningNum}. you may play again to try your luck....`)
                    }else{
                        // game continues - answer wrong

                          // change color 
                          guessinput.style.borderColor = 'red';

                        //   clear input
                        guessinput.value = '';

                        // tell user it's wrong number
                        setmessage(`${guess} is not the correct number,   ${guessesleft} guesses left` , 'red');
                    }
    
                }

            });


            // game over
            function gameover(won , msg ){

                let color;
                won === true ? color = 'green': color = 'red';
                  //disabled input
                  guessinput.disabled = true;

                  // change color 
                  guessinput.style.borderColor = color;

                //   set text color
                message.style.color = color;

                  // set message
                  setmessage(msg);

                //   play again
                guessbtn.value = 'play again';
                guessbtn.className += 'play-again';
                  
            }

            //get winning number
            function getwinningnum(min , max){
                return Math.floor(Math.random() * (max - min + 1) + min);
            }

            // set message
            function setmessage(msg , color){
                message.style.color = color;
                message.textContent = msg; 
            }