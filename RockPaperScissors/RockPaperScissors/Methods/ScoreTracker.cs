using System;
using System.Collections.Generic;
using System.Text;

namespace RockPaperScissors.Methods
{
    public static class ScoreTracker
    {
        public static int PlayerWins { get; set; } = 0;
        public static int ComputerWins { get; set; } = 0;
        public static int TieScore { get; set; } = 0;
        public static int GamesPlayed { get; set; } = 0;
        public static string PlayerName { get; set; }

        public static void PlayerWon()
        {
            PlayerWins++;
        }

        public static void ComputerWon()
        {
            ComputerWins++;
        }

        public static void TiedGame()
        {
            TieScore++;
        }

        public static void PlayedGames()
        {
            GamesPlayed++;
        }

        public static void ActivePlayer(string name)
        {
            PlayerName = name;
        }
    }
}
