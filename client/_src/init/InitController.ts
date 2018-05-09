import {GameConfig} from "../game/config/GameConfig";
import {Facade} from "../game/fasade/Facade";
import {ResourceData} from "../load/ResourceData";
import {ResourceLoader} from "../load/ResourceLoader";

export class InitController {

    protected _loader: ResourceLoader;

    constructor() {
        this._loader = new ResourceLoader();
    }

    public init(callBack: () => void) {

        this._loader.loadConfig(ResourceData.gameConfig, () => {
            this.initConfig();
            this._loader.startResourceLoading(callBack);
        })
    }

    private initConfig(): void {
        Facade.config = new GameConfig();
    }


}