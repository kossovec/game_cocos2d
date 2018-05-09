import {GameConfig} from "../config/GameConfig";
import {Facade} from "../fasade/Facade";

export class ResizeService {
    private resizeTimeout;
    private _config: GameConfig;
    private _canvas = document.getElementById("gameCanvas");
    private _resizeCallBack: () => void;

    public setup(): ResizeService {
        this._config = Facade.config;
        window.addEventListener("resize", this.notifyResize.bind(this), false);
        this.notifyResize();
        return this
    }

    private notifyResize(): void {
        this.doResize(this.getScreenResolution())
    }

    public getScreenResolution(): IResolution {
        return {
            width: cc.sys.os == cc.sys.OS_IOS ? document.body.clientWidth : window.innerWidth,
            height: cc.sys.os == cc.sys.OS_IOS ? document.body.clientHeight : window.innerHeight
        };
    }

    private doResize(resolution: IResolution) {
        cc.view.setFrameSize(resolution.width, resolution.height);
        this._canvas.style.width = resolution.width + "px";
        this._canvas.style.height = resolution.height + "px";
        this._canvas.style.left = "0px";
        this._canvas.style.right = "0px";
        this.updateDesignResolutionSize(resolution.width, resolution.height);
        this._resizeCallBack && this._resizeCallBack();
    }

    private updateDesignResolutionSize(width: number, height: number): void {
        let designWidth = this._config.screenConfig.DESKTOP_DESIGN_WIDTH;
        let designHeight = this._config.screenConfig.DESKTOP_DESIGN_HEIGHT;
        let designRatio = designWidth / designHeight;

        if (!cc.sys.isMobile) {
            if (width > height) {
                this._config.screenConfig.size.x = Math.round(Math.min(height * designRatio, width));
                this._config.screenConfig.size.y = Math.round(Math.min(this._config.screenConfig.size.x / designRatio, height));
            } else {
                this._config.screenConfig.size.y = Math.round(Math.min(width / designRatio, height));
                this._config.screenConfig.size.x = Math.round(this._config.screenConfig.size.y * designRatio);
            }
        } else {
            this._config.screenConfig.size.x = width;
            this._config.screenConfig.size.y = height;
        }

        this._config.screenConfig.scale = Math.min(this._config.screenConfig.size.x / this._config.screenConfig.BASE_GAME_WIDTH, this._config.screenConfig.size.y / this._config.screenConfig.BASE_GAME_HEIGHT);
        this._config.screenConfig.divergence.x = this._config.screenConfig.size.x / this._config.screenConfig.scale / designWidth;
        this._config.screenConfig.divergence.y = this._config.screenConfig.size.y / this._config.screenConfig.scale / designHeight;
        cc.view.setDesignResolutionSize(this._config.screenConfig.size.x, this._config.screenConfig.size.y, cc.sys.isMobile ? cc.ResolutionPolicy.NO_BORDER : cc.ResolutionPolicy.SHOW_ALL);
    }

    set resizeCallBack(value: () => void) {
        this._resizeCallBack = value;
    }
}

export interface IResolution {
    width: number;
    height: number;
}
