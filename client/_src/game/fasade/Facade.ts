import {GameConfig} from "../config/GameConfig";

export class Facade {
    private static _instance: Facade = new Facade();
    private static _config: GameConfig;

    constructor() {
        if (Facade._instance)
            throw new Error("FuFishFacade is singleton class");
    }

    static get config(): GameConfig {
        return this._config;
    }

    static set config(value: GameConfig) {
        this._config = value;
    }
}