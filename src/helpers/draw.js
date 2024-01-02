import checkWinner from "./winner";

const isGameDraw = (box, symbol) => {
    const isBoxFilled = box.every((cell) => cell !== '');
    const noWinner = checkWinner(box, symbol)
    return isBoxFilled && noWinner.symbol === '';
}

export default isGameDraw;