import {addScore} from "./api";

export const addGameScore = (currentUserId, game, score) => {
    const body = {
        userId: currentUserId,
        game: game,
        score: score
    }
    addScore(`scores`, body).then()
}
