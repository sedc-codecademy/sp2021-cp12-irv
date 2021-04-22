using RockPaperScissors.Enums;
using System;
using System.Collections.Generic;
using System.Text;
using RockPaperScissors.Methods;

namespace RockPaperScissors.Methods
{
    public static class Menu
    {
        public static void MainMenu()
        {
            Console.WriteLine("Rock Paper Scissors Game");
            Console.WriteLine("------------------------");
            

            bool checkChocie = true;
            while (checkChocie)
            {
                Console.WriteLine("Choose an option:\n[1] - Play\n[2] - Stats\n[3] - Exit");
                checkChocie = int.TryParse(Console.ReadLine(), out int choice);
                switch (choice)
                {
                    case 1:
                        Play();
                        break;
                    case 2:
                        Stats();
                        break;
                    case 3:
                        Console.WriteLine("Thanks for playing. Press enter to exit...");
                        Console.ReadLine();
                        checkChocie = false;
                        break;
                    default:
                        Console.Clear();
                        checkChocie = true;
                        break;
                }
            }
        }

        public static void Play()
        {

            bool player = true;
            while (player)
            {
                Console.WriteLine("Enter your name:");
                string playerName = Console.ReadLine();
                if (playerName.Length < 2)
                {
                    Console.WriteLine("Enter a valid name");
                    continue;
                }
                else
                {
                    Console.Clear();
                    Console.WriteLine($"Welcome {playerName}");
                    ScoreTracker.ActivePlayer(playerName);
                    player = false;
                }
            }

            bool repeatGame = true;
            while (repeatGame)
            {
                Console.WriteLine("Please choose:\n1. Rock\n2. Paper\n3. Scissors");
                Console.WriteLine("----------------------------------------------");
                Console.WriteLine("When done playing, enter X");
                bool playerChoice = true;
                Choices playerWeapon = Choices.NoChoice;
                while (playerChoice)
                {
                    string choice = Console.ReadLine();
                    switch (choice.ToLower())
                    {
                        case "1":
                            playerWeapon = Choices.Rock;
                            Console.WriteLine($"You chose {playerWeapon}");
                            playerChoice = false;
                            break;
                        case "2":
                            playerWeapon = Choices.Paper;
                            Console.WriteLine($"You chose {playerWeapon}");
                            playerChoice = false;
                            break;
                        case "3":
                            playerWeapon = Choices.Scissors;
                            Console.WriteLine($"You chose {playerWeapon}");
                            playerChoice = false;
                            break;
                        case "x":
                            playerChoice = false;
                            repeatGame = false;
                            break;
                        default:
                            Console.WriteLine("Try entering a valid choice: 1, 2 or 3 allowed only!");
                            Console.ReadLine();
                            playerChoice = true;
                            break;
                    }
                }

                if (repeatGame == true)
                {
                    //Console.WriteLine("Press enter to make your opponent choose:");
                    //Console.ReadLine();
                    Random randomChoice = new Random();
                    int computerRandomChoice = randomChoice.Next(1, 4);
                    Choices computerWeapon = (Choices)computerRandomChoice;
                    Console.WriteLine($"Computer chose {computerWeapon}");
                    ScoreTracker.PlayedGames();

                    switch (playerWeapon, computerWeapon)
                    {
                        case (Choices.Rock, Choices.Rock):
                            Console.WriteLine("It's a tie!");
                            Console.WriteLine($"Games played: {ScoreTracker.GamesPlayed}");
                            ScoreTracker.TiedGame();
                            break;
                        case (Choices.Paper, Choices.Paper):
                            Console.WriteLine("It's a tie!");
                            Console.WriteLine($"Games played: {ScoreTracker.GamesPlayed}");
                            ScoreTracker.TiedGame();
                            break;
                        case (Choices.Scissors, Choices.Scissors):
                            Console.WriteLine("It's a tie!");
                            Console.WriteLine($"Games played: {ScoreTracker.GamesPlayed}");
                            ScoreTracker.TiedGame();
                            break;
                        case (Choices.Rock, Choices.Paper):
                            Console.WriteLine($"Paper beats Rock, Computer wins!");
                            Console.WriteLine($"Games played: {ScoreTracker.GamesPlayed}");
                            ScoreTracker.ComputerWon();
                            break;
                        case (Choices.Rock, Choices.Scissors):
                            Console.WriteLine($"Rock beats Scissors, {ScoreTracker.PlayerName}");
                            Console.WriteLine($"Games played: {ScoreTracker.GamesPlayed}");
                            ScoreTracker.PlayerWon();
                            break;
                        case (Choices.Paper, Choices.Rock):
                            Console.WriteLine($"Paper beats Rock, {ScoreTracker.PlayerName} wins!");
                            Console.WriteLine($"Games played: {ScoreTracker.GamesPlayed}");
                            ScoreTracker.PlayerWon();
                            break;
                        case (Choices.Paper, Choices.Scissors):
                            Console.WriteLine($"Scissors beat Paper, Computer wins!");
                            Console.WriteLine($"Games played: {ScoreTracker.GamesPlayed}");
                            ScoreTracker.ComputerWon();
                            break;
                        case (Choices.Scissors, Choices.Rock):
                            Console.WriteLine($"Rock beats Scissors, Computer wins");
                            Console.WriteLine($"Games played: {ScoreTracker.GamesPlayed}");
                            ScoreTracker.ComputerWon();
                            break;
                        case (Choices.Scissors, Choices.Paper):
                            Console.WriteLine($"Scissors beat Paper, {ScoreTracker.PlayerName} wins!");
                            Console.WriteLine($"Games played: {ScoreTracker.GamesPlayed}");
                            ScoreTracker.PlayerWon();
                            break;
                        default:
                            break;
                    }
                } 
            }            
        }

        public static void Stats()
        {   
            try
            {
                Console.WriteLine($" {ScoreTracker.PlayerName} has wins: {ScoreTracker.PlayerWins}, Computer has: {ScoreTracker.ComputerWins}, number of ties: {ScoreTracker.TieScore}");
                Console.ReadLine();

                double playerWins = (double)ScoreTracker.PlayerWins / ScoreTracker.GamesPlayed * 100;
                Math.Round(playerWins, 2);
                double playerLosses = (double)(ScoreTracker.GamesPlayed - ScoreTracker.PlayerWins - ScoreTracker.TieScore) / ScoreTracker.GamesPlayed * 100;
                Math.Round(playerLosses, 2);

                Console.WriteLine($"{ScoreTracker.PlayerName} has a {playerWins}% of wins, and a {playerLosses}% losses");

                Console.WriteLine("Press enter to go back to main menu...");
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
        }
  

    }
}
