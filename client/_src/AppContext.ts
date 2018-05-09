import {GameInit} from "./GameInit";

export class AppContext {

    public initialize(): void {
        let gameInit = new GameInit();
        gameInit.activate();
    }
}