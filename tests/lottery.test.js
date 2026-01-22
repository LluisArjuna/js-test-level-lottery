// Puedes confirgurar estos casos de test a la tecnología que más te guste, yo te propongo jest
import { expect, describe, test } from "@jest/globals";
import { lottery } from "../src/scripts/lotteryLogic.js"; 

describe('lottery feature tests', () => {
       
        test('returns win when user number equals random number', () => {
        //Gherking test
         /**
         * Scenario: Usuario gana la lotería
         * Given el usuario ingresa el número 7
         * When el sistema genera aleatoriamente el número 7
         * Then se muestra "Win"
         */

        // Arrange
        let userInput = 7;
        let expected = {
            message: "Win", 
            data: {
                userNumber: userInput, 
  		        randomNumber: 7 
            }
        }

        // Act
        let result = lottery(userInput); 
    
        // Assert
        expect(typeof result.data.userNumber).toBe("number");
        expect(Object.keys(result)).toEqual(['message', 'data']);
        expect(result.data.userNumber).toEqual(expected.data.randomNumber);
        expect(result.message).toBe("Win");
    });


        test('returns lose when user number is different from random number', () => {
        //Gherking test
         /**
         * Scenario: Usuario pierde la lotería
         * Given el usuario ingresa el número 4
         * When el sistema genera un número aleatorio distinto, por ejemplo 2
         * Then se muestra "Lose"
         */

            // Arrange
            let userInput = 7;
            let expected = {
                message: "Lose", 
                data: {
                    userNumber: userInput, 
                    randomNumber: 4
                }
            }

            // Act
            let result = lottery(userInput); 
    
            // Assert
            expect(typeof result.data.userNumber).toBe("number");
            expect(Object.keys(result)).toEqual(['message', 'data']);
            expect(result.data.userNumber).not.toEqual(expected.data.randomNumber);
            expect(result.message).toBe("Lose");
    
        })

        test('returns error when input is not a number', () => {
            //Gherking test
            /**
             * Scenario: Entrada no numérica
             * Given la entrada "Hola"
             * When el usuario intenta procesar la jugada
             * Then se muestra un mensaje de error
             */

                // Arrange
                let userInput = "Hola";
                let expected = "The value introduced is not a number!";

                // Act
                let result = lottery(userInput); 
        
                // Assert
                expect(typeof result).not.toBe("number");
                expect(result).toEqual(expected);
                expect(result).toBe("The value introduced is not a number!");
        })

        test('returns error when number is outside valid range', () => {
            //Gherking test
            /**
             * Scenario: Número fuera de rango
             * Given el usuario ingresa el número 20
             * When el sistema valida el número
             * Then se muestra un mensaje indicando que debe ser entre 1 y 10
             */

                // Arrange
                    let userInput = 20;
                    let expected = "You must introduce a number between 1 and 10";

                    // Act
                    let result = lottery(userInput); 
            
                    // Assert
                    expect(typeof result).not.toBe("number");
                    expect(result).toEqual(expected);
                    expect(result).toBe("You must introduce a number between 1 and 10");
        })
    }
)