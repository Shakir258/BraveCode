package Java.CodeWithHarry.code;

import java.util.Random;
import java.util.Scanner;

public class C041_RockPaperSiser {
    public static void main(String[] args) {
        
        Scanner input = new Scanner(System.in);
        Random random = new Random();

        int userScore = 0;
        int computerScore = 0;
        int exit = 0;

        while(exit != 3){
            System.out.print("Enter your input (0-Rock ; 1-Paper ; 2-Scissors ; 3-Exit)= ");
            int userInput =  input.nextInt();
            int computerInput = random.nextInt(3);
            if(userInput==0 && computerInput == 2 ){
                System.out.println("You Win");
                System.out.println("scissor");
                userScore++;
            }
            else if(userInput==1 && computerInput == 0){
                System.out.println("You Win");
                System.out.println("Rock");
                userScore++;
            }
            else if(userInput==2 && computerInput == 1){
                System.out.println("You Win");
                System.out.println("Paper");
                userScore++;
            }
            else if(userInput==computerInput){
                System.out.println("Drow");
            }
            else{
                System.out.println("You lose");
                computerScore++;
            }
            exit = userInput;
            System.out.println("User "+userScore+ " computer "+ computerScore);
        }
        input.close();
    }
    
}
