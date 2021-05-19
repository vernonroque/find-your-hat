const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field{
    constructor(field){
        this._field = field;
        this._horizPosition = 0;
        this._vertPosition = 0;
        this._move = '';
        this._height= 0;
         this._width = 0;
    }

    print() {
        for(let i = 0; i<this._height; i++){
                console.log(this._field[i].join(''));
        }
        
    }
    playGame () {
        this._height = prompt('Choose height: ');
        this._width = prompt('Choose width: ');
        let percent = prompt('Choose percentage of holes(ex:50 or .50): ');

        this.generateField(percent);

    }

    generateField (percent) {
        const fieldArray = [ ];
        let area = this._width * this._height;
        let convertedPercent = percent;
            if(percent > 1)
            convertedPercent = .01* percent;
        console.log('converted percent is ' + convertedPercent);
        let numOfHoles = area * convertedPercent;
        console.log('number of holes is ' + numOfHoles);
        let xPosHat = 0;
        let yPosHat = 0;
        
        for(let i = 0; i< this._height; i++){
            fieldArray.push([]);
            for(let b = 0; b <this._width;b++){
                fieldArray[i].push(1);
            }
        };
        //set position of path character
        fieldArray[0][0] = pathCharacter;
        //find the position of hat
        do{
            xPosHat= Math.floor(Math.random() * this._width);
            yPosHat= Math.floor(Math.random() * this._height);
            } while(xPosHat===0 && yPosHat===0);
           // console.log( 'x position: ' + xPosHat + ' y position: ' + yPosHat);
            

        fieldArray[yPosHat][xPosHat] = hat;
        //find the position of holes
        for(let i = 0; i<Math.floor(numOfHoles); i++){
            console.log(`i counter is ${i}`);
            let xPos = 0;
            let yPos = 0;
            do{
                xPos= Math.floor(Math.random() * this._width);
                yPos= Math.floor(Math.random() * this._height);
                //console.log('y position of hole: ' + yPos + ' x position of hole: ' + xPos );

            } while(fieldArray[yPos][xPos]=== hat || fieldArray[yPos][xPos]===pathCharacter 
                || fieldArray[yPos][xPos] === hole);
        fieldArray[yPos][xPos] = hole ;
        console.log(`field array position: y pos is ${yPos} and x pos is ${xPos}`);
        }
        //find the position of fieldCharacter
            for (let i = 0; i < this._height; i++){
                for (let j = 0; j < this._width; j++){
                    if( fieldArray[i][j]===1)
                    fieldArray[i][j] = fieldCharacter;
                }
            }  

            console.log(fieldArray);

        this._field = fieldArray;
        //this.print();  
}
    userInput() {
        this._move = prompt('Which way?');
        this._move.toLowerCase();
        this.outOfBounds();
  

    }
    outOfBounds () {
          //testing for out of bounds
        if (this._move ==='u' && this._vertPosition === 0)
        console.log('not a valid move. game over.');
        else if(this._move ==='l' && this._horizPosition === 0)
        console.log('not a valid move. game over.');
        else if(this._move==='d' && this._vertPosition === this._height)
        console.log('not a valid move. game over.');
        else if(this._move==='r' && this._vertPosition === this._width)
        console.log('not a valid move. game over.');
    }



    moveUp () {
        console.log('hello world');

    }
    moveDown() {

    }
    moveLeft() {

    }
    moveRight() {

    }

}
const myField = new Field;
 // myField.print();
  myField.playGame();
  myField.print();
  myField.userInput();
