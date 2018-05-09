import Dictionary from "../../core/Dictionary";
import {AnimationConfig} from "./AnimationConfig";
import {ConfigParser} from "./ConfigParser";
import {ScreenConfig} from "./ScreenConfig";

export class GameConfig {
    private configParser: ConfigParser;
    private _animationMap = new Dictionary<string, AnimationConfig>();
    private _resourceArray: string[];
    private _screenConfig = new ScreenConfig();

    constructor() {
        this.configParser = new ConfigParser(this);
    }

    get animationMap(): Dictionary<string, AnimationConfig> {
        return this._animationMap;
    }

    set animationMap(value: Dictionary<string, AnimationConfig>) {
        this._animationMap = value;
    }

    get resourceArray(): string[] {
        return this._resourceArray;
    }

    set resourceArray(value: string[]) {
        this._resourceArray = value;
    }

    get screenConfig(): ScreenConfig {
        return this._screenConfig;
    }

    set screenConfig(value: ScreenConfig) {
        this._screenConfig = value;
    }
}