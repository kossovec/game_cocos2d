import {ResizeService} from "./game/servise/ResizeService";
import {MainScene} from "./game/view/MainScene";
import {InitController} from "./init/InitController";

export class GameInit {

    protected _initController: InitController;
    protected _resizeService: ResizeService;

    public activate(): void {

        this.setupStartGameHandler();
        this.runGame()
    }

    private runGame() {
        cc.game.run();
    }

    private setupStartGameHandler() {
        cc.game.onStart = this.notifyStartGame.bind(this);
    }

    private notifyStartGame(): void {

        this._initController = new InitController();
        this._initController.init(() => {
            this.initService();
            let mainScene = new MainScene();
            this._resizeService.resizeCallBack = () => {
                mainScene.onResize()
            };
            cc.director.runScene(mainScene);
        });
    }

    private initService(): void {
        this._resizeService = new ResizeService().setup()
    }

}