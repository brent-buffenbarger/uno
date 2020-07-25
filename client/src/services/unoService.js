import BaseService from "./baseService";

export default {
    async login(gameId, userName) {
        return BaseService.post(`/login/${gameId}/${userName}`);
    },

    async newGame() {
        return BaseService.get("/newgame");
    },

    // TODO authorize game routes with token
    update() {
        return BaseService.get(`/update`);
    },

    startGame() {
        return BaseService.post(`/startgame`);
    },

    playCard(cardNumber, cardColor) {
        return BaseService.post(`/play/${cardNumber}/${cardColor}`);
    },

    drawCard() {
        return BaseService.post(`/draw`);
    }
}