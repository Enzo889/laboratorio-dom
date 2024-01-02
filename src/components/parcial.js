const myWord = ["B", "u", "s", "t", "a", "m", "a", "n", "t", "e"];
const myMatrix = [
    [[], [], [], [], [], []],
    [[], [], [], [], [], []],
    [[], [], [], [], [], []],
    [[], [], [], [], [], []],
    [[], [], [], [], [], []],
    [[], [], [], [], [], []]
];

const myAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function LetterAlphabet() {
    let t;
    let index = 0;
    while (myAlphabet[index] == "*" && index < myAlphabet.length) {
        index++;
    }
    t += myAlphabet
    return t
}

function GetSetLetter(k) {
    let letter = myWord[k];
    myWord[k] = "@";
    return letter;
}

function FillMatrix(row, col, z) {
    if (row >= 0 && col >= 0) {
        myMatrix[row][col] = GetSetLetter(z);
    } else {
        myMatrix[row][col] = LetterAlphabet();
    }

    if (row > col) {
        row--;
    } else {
        col++;
        if (col === myMatrix.length) {
            col = row - 1;
            row = myMatrix.length - 1;
        }
    }

    if (z > 0) {
        FillMatrix(row, col, z - 1);
    }
}

FillMatrix(myMatrix.length - 1, myMatrix.length - 1, myWord.length - 1);

console.log(myWord);
console.log(myAlphabet);
console.table(myMatrix);
