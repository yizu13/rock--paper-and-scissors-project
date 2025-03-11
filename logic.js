"use strict"
class Random_generation{
    static Genertation(){
      let min = 1;
      let max = 3;
      let random = Math.floor(Math.random()* (max - min + 1) + min)
      return random;  
    }
}

class bot_reaction{
    static scissors = document.getElementById("bot_scissors_reaction");
    static paper = document.getElementById("bot_paper_reaction");
    static rock = document.getElementById("bot_rock_reaction");

    static Reaction_bot(random_number){
    
        if(random_number === 1){
            this.scissors.classList.add("bot_scissors_animation");
        }

        else if(random_number === 2){
            this.paper.classList.add("bot_paper_animation");
        }

        else if(random_number === 3){
            this.rock.classList.add("bot_rock_animation");
        }

        setTimeout(Restore_all, 1500)
    }
}

function Scissors_button(){

}

function Rock_button(){
    
}

function Paper_button(){
    
}

function Restore_all(){
    bot_reaction.scissors.classList.remove("bot_scissors_animation");
    bot_reaction.paper.classList.remove("bot_paper_animation");
    bot_reaction.rock.classList.remove("bot_rock_animation");
    console.log("im here")
}

console.log(Random_generation.Genertation())
bot_reaction.Reaction_bot(Random_generation.Genertation());