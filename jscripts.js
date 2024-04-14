let userscore=0;
let compscore=0;
const Choices=document.querySelectorAll(".Choice");
const msg  = document.querySelector("#msg");
const userScorepara=document.querySelector("#userScore");
const compScorepara=document.querySelector("#compScore");
const playgame=(userchoice)=>{
    console.log("User choice =",userchoice); //to take and print user choice
    const compchoice=getCompChoice();    //to take computer choice
    console.log("computer choice =",compchoice);
    
    
    const showWinner=(userwin,userchoice,compchoice)=>{   //fun to deside winner
        if(userwin){
            userscore++; //if user wins increse counter of user
            userScorepara.innerText= userscore; //and update value on page
            
           
            msg.innerText= `You win! your ${userchoice} beats  ${compchoice}` ; //to change the text in msg in our page
            msg.style.backgroundColor="green"; //to change into green color when u win
    }else{
        compscore++; //if compuer wins increse counter of comp
        compScorepara.innerText= compscore; //and update score on web page
        
        msg.innerText=`You lose.${compchoice} beats your ${userchoice} `;
        msg.style.backgroundColor="red"; //to change into red color when u lose
    }
    }
    
    
    if(userchoice===compchoice){
       
        msg.innerText="The game is Draw.Play again";//to change text in our page when game is draw
    
        msg.style.backgroundColor="#eab676"; //to change color  when game is draw
    }else{
        let  userwin=true;               //check conditions who wins
        if(userchoice==="rock"){
            userwin=compchoice=="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="scissor"? false:true;
        }
        else  {
            userwin=compchoice==="rock" ?false:true;
        }
        showWinner(userwin,userchoice,compchoice)  //call to showwinnwer fun

    }
}
 //function to generate computer choice
 const getCompChoice=()=>{
    const options=["rock", "paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
 }
 
 
 
//function to take user choice
Choices.forEach((Choice)=>{
    Choice.addEventListener("click" , ()=>{
    const userchoice=Choice.getAttribute("id");
    console.log("The choice was clicked and your choice is:",userchoice);
    playgame(userchoice)
});
});
