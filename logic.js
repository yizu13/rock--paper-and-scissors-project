"use strict"
class Button_states{

    static sc_button = document.getElementById("scissors_but");
    static ro_button = document.getElementById("rock_but");
    static pa_button = document.getElementById("paper_but");

    static sc_message = document.getElementById("tooltipIDSCISSORS");
    static ro_message = document.getElementById("tooltipIDROCK");
    static pa_message = document.getElementById("tooltipIDPAPER");

    static Disabled_components(){
        this.sc_button.disabled = true;
        this.ro_button.disabled = true;
        this.pa_button.disabled = true;

        this.sc_button.classList.add("faq-button_disable"); this.sc_button.classList.remove("faq-button");
        this.ro_button.classList.add("faq-button_disable"); this.ro_button.classList.remove("faq-button");
        this.pa_button.classList.add("faq-button_disable"); this.pa_button.classList.remove("faq-button");

        this.sc_message.classList.add("tooltip_disable"); this.sc_message.classList.remove("tooltip"); 
        this.ro_message.classList.add("tooltip_disable"); this.ro_message.classList.remove("tooltip"); 
        this.pa_message.classList.add("tooltip_disable"); this.pa_message.classList.remove("tooltip"); 
    }

    static Enabled_component(){
        this.sc_button.disabled = false;
        this.ro_button.disabled = false;
        this.pa_button.disabled = false;

        this.sc_button.classList.remove("faq-button_disable"); this.sc_button.classList.add("faq-button");
        this.ro_button.classList.remove("faq-button_disable"); this.ro_button.classList.add("faq-button");
        this.pa_button.classList.remove("faq-button_disable"); this.pa_button.classList.add("faq-button");

        this.sc_message.classList.remove("tooltip_disable"); this.sc_message.classList.add("tooltip"); 
        this.ro_message.classList.remove("tooltip_disable"); this.ro_message.classList.add("tooltip"); 
        this.pa_message.classList.remove("tooltip_disable"); this.pa_message.classList.add("tooltip"); 
    }
}

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

    }
}

class Who_win{
    
    static moment_text = document.getElementById("text_result");

    static Winner(human,bot){
        let moment_text = Who_win.moment_text;
        if(human === 1 && bot === 3){
            //lose
            moment_text.innerText = "Game Over";
            moment_text.classList.add("result_gameover");
            return "gameover";
        }
        else if (human === 2 && bot === 1){
            //lose
            moment_text.innerText = "Game Over";
            moment_text.classList.add("result_gameover");
            return "gameover";
        }
        else if (human === 3 && bot === 2){
            //lose
            moment_text.innerText = "Game Over";
            moment_text.classList.add("result_gameover");
            return "gameover";
        }
        else if (bot === 1 && human === 3){
            //win
            moment_text.innerText = "You win";
            moment_text.classList.add("result_win");
            return "winner";
        }
        else if (bot === 2 && human === 1){
            //win
            moment_text.innerText = "You win";
            moment_text.classList.add("result_win");
            return "winner";
        }
        else if (bot === 3 && human === 2){
            //win
            moment_text.innerText = "You win";
            moment_text.classList.add("result_win");
            return "winner";
        }
        else if (human === 1 && bot === 1){
            moment_text.innerText = "Tie";
            return "tie";
        }
        else if (human === 2 && bot === 2){
            moment_text.innerText = "Tie";
            return "tie";
        }
        else if (human === 3 && bot === 3){
            moment_text.innerText = "Tie";
            return "tie";
        }

    }
}

function Scissors_button(){
    let bot_response = Random_generation.Genertation();
    Button_states.Disabled_components();
    bot_reaction.Reaction_bot(bot_response);
    let result = Who_win.Winner(1,bot_response);
    setTimeout(Restore_all, 2500, result);

}

function Rock_button(){
    let bot_response = Random_generation.Genertation();
    Button_states.Disabled_components();
    bot_reaction.Reaction_bot(bot_response);
    let result = Who_win.Winner(3,bot_response);
    setTimeout(Restore_all, 2500, result);

}

function Paper_button(){
    let bot_response = Random_generation.Genertation();
    Button_states.Disabled_components();
    bot_reaction.Reaction_bot(bot_response);
    let result = Who_win.Winner(2,bot_response);
    setTimeout(Restore_all, 2500, result);
    
}

function Restore_all(who){
    bot_reaction.scissors.classList.remove("bot_scissors_animation");
    bot_reaction.paper.classList.remove("bot_paper_animation");
    bot_reaction.rock.classList.remove("bot_rock_animation");
    Who_win.moment_text.innerText = "";
    if(who === "gameover"){
    Who_win.moment_text.classList.remove("result_gameover");
}
    else if(who === "winner"){
    Who_win.moment_text.classList.remove("result_win");
}
Button_states.Enabled_component();
}

