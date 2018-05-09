import {AppContext} from "./AppContext";

export class GameEngineActivator {
    public static activate() {
        window['launchGame'] = () => {
            let a = new AppContext();
            a.initialize();
        };
    }
}