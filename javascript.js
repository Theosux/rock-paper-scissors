let a;
function getComputerChoice()
{
    a=Math.floor(Math.random() * 3);
    if (a == 0) {
        a="rock";
    }
    if (a == 1) {
        a="paper";
    }
    if (a == 2) {
        a="scissors";
    }
    return a;
}
let boolean;
let playerSelection;
let computerSelection;
function playRound(playerSelection, computerSelection)
{
    computerSelection = getComputerChoice();
    playerSelection = prompt("rock, paper, scissors");
  if (playerSelection == "rock" && computerSelection  == "rock")
  {
    console.log("It's a tie between rocks.")
    boolean=2;
  }
  if (playerSelection == "rock" && computerSelection  == "paper")
  {
    console.log("Player loses, rock gets ass beaten by paper.")
    boolean=0;
  }
  if (playerSelection == "rock" && computerSelection  == "scissors")
  {
    console.log("Player wins, rock beats poor scissors.")
    boolean=1;
  }
  if (playerSelection == "paper" && computerSelection  == "rock")
  {
    console.log("Player wins, rock gets ass beaten by paper.")
    boolean=1;
  }
  if (playerSelection == "paper" && computerSelection  == "paper")
  {
    console.log("It's a tie between papers.")
    boolean=2;
  }
  if (playerSelection == "paper" && computerSelection  == "scissors")
  {
    console.log("Player loses, paper got sliced hard.")
    boolean=0;
  }
  if (playerSelection == "scissors" && computerSelection  == "rock")
  {
    console.log("Player loses, rock destroied that pair of scissors.")
    boolean=0;
  }
  if (playerSelection == "scissors" && computerSelection  == "paper")
  {
    console.log("Player wins, paper got sliced hard.")
    boolean=1;
  }
  if (playerSelection == "scissors" && computerSelection  == "scissors")
  {
    console.log("It's a tie between scissors.")
    boolean=2;
  }
}
let plpoints,cppoints;
plpoints=0;
cppoints=0;
let score;
function game()
{
    for(let i=0; i < 5; i++)
    {
        playRound(playerSelection, computerSelection)
        if (boolean == 1)
        {
            plpoints++;
        }
        if(boolean == 0)
        {
            cppoints++;
        }
        score="The score is "+plpoints+" - "+cppoints+" for the player.";
        console.log(score)
    }
    
}
game()
function winner()
{
    if (plpoints < cppoints)
    {
        console.log("The computer is the winner! They will rule the world one day.")
    }
    if (plpoints > cppoints)
    {
        console.log("The player is the winner! Just wait for the AI to get better.")
    }
    if (plpoints == cppoints)
    {
        console.log("It's a tie! Unlike others said, i guess the AI can reach the intelligence of a real person.")
    }
}
winner()
