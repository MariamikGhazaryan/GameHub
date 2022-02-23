export const HEIGHT = 20;
export const WIDTH = 12;

export const Tetrominoes = {
    0: {shape: [[0]], color: "black"},
    SQ: {
        matrix: [
            ["SQ", "SQ"],
            ["SQ", "SQ"],
        ],
        color: "red",
    },
    LG: {
        matrix: [
            [0, 0, "LG"],
            [0, 0, "LG"],
            [0, "LG", "LG"],
        ],
        color: "blue",
    },
    RG: {
        matrix: [
            ["RG", 0, 0],
            ["RG", 0, 0],
            ["RG", "RG", 0],
        ],
        color: "green",
    },
    LS: {
        matrix: [
            [0, 0, "LS"],
            ["LS", "LS", "LS"],
            ["LS", 0, 0],
        ],
        color: "yellow",
    },
    RS: {
        matrix: [
            ["RS", 0, 0],
            ["RS", "RS", "RS"],
            [0, 0, "RS"],
        ],
        color: "pink",
    },
    I: {
        matrix: [
            [0, "I", 0, 0],
            [0, "I", 0, 0],
            [0, "I", 0, 0],
            [0, "I", 0, 0],
        ],
        color: "orange",
    },
    T: {
        matrix: [
            [0, 0, 0],
            ["T", "T", "T"],
            [0, "T", 0],
        ],
        color: "purple",
    },
};

export function getRandomTetromino() {
    let keys = Object.keys(Tetrominoes).filter((item) => item !== "0");
    return Tetrominoes[keys[(keys.length * Math.random()) << 0]];
}

export const createPlayGround = () =>
    Array.from(Array(HEIGHT), () => new Array(WIDTH).fill([0, "clear"]));

export const isMoveInCorrect = (tetromino, position, playGround, move) => {
    for (let y = 0; y < tetromino?.length; y += 1) {
        for (let x = 0; x < tetromino[y].length; x += 1) {
            if (tetromino[y][x] !== 0) {
                if (
                    !playGround[y + position.y + move.y] ||
                    !playGround[y + position.y + move.y][x + position.x + move.x] ||
                    playGround[y + position.y + move.y][x + position.x + move.x][1] !==
                    "clear"
                ) {
                    return true;
                }
            }
        }
    }
    return false;
};
