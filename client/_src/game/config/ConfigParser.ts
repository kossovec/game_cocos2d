import {ResourceData} from "../../load/ResourceData";
import {AnimationConfig} from "./AnimationConfig";
import {GameConfig} from "./GameConfig";

export class ConfigParser {
    private _config: GameConfig;
    private readonly _gameConfigData: any;

    constructor(gameConfig: GameConfig) {
        this._config = gameConfig;
        this._gameConfigData = cc.loader.getRes(ResourceData.gameConfig);
        this.parseAnimationConfig(this._gameConfigData['animations']);
        this.parseResource(this._gameConfigData['resource']);
    }

    parseAnimationConfig(data: any) {
        let animationList: any[] = data;
        for (let animation of animationList) {
            let animationConfig = new AnimationConfig();
            animationConfig.animationSpeed = animation['animationSpeed'];
            animationConfig.spriteArray = animation['data'];
            this._config.animationMap.setValue(animation['name'], animationConfig);
        }
    }

    parseResource(data: any) {
        this._config.resourceArray = data as string[]
    }
}