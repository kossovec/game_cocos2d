import {GameConfig} from "../config/GameConfig";
import {Facade} from "../fasade/Facade";
import SpriteFrame = cc.SpriteFrame;
import Widget = ccui.Widget;


export class MainScene extends cc.Scene {
    protected _gameLayer: cc.Layer;
    protected _background: cc.LayerColor;
    protected _gameConfig: GameConfig;
    protected _isButtonPressed = true;
    protected _animationContainer: cc.Sprite;
    protected _playFromBeginButton: ccui.Button;
    protected _playResumeButton: ccui.Button;
    private ANIMATION_NAME = "anticipation";

    public onEnter(): void {
        super.onEnter();
        this._gameConfig = Facade.config;

        this._background = new cc.LayerColor(cc.color(144, 192, 248), this._gameConfig.screenConfig.size.x, this._gameConfig.screenConfig.size.y);
        this._background.anchorX = 0.5;
        this._background.anchorY = 0.5;
        this._gameLayer = new cc.Layer();
        this.addChild(this._background);
        this.addChild(this._gameLayer);

        let animation = cc.animationCache.getAnimation(this.ANIMATION_NAME);
        this._animationContainer = this.setupAnimationContainer(animation);

        this._gameLayer.addChild(this._animationContainer);
        let animationAction = cc.repeatForever(cc.animate(animation));
        this._animationContainer.runAction(animationAction);


        this._playFromBeginButton = this.setupButton("button.png", "Play from Begin", () => {
            this._animationContainer.stopAction(animationAction);
            this._animationContainer.runAction(animationAction);
        });

        this._playResumeButton = this.setupButton("button.png", "Play/Resume", () => {
            let actionManager = cc.director.getActionManager();
            this._isButtonPressed ? actionManager.pauseTarget(this._animationContainer) : actionManager.resumeTarget(this._animationContainer);
            this._isButtonPressed = !this._isButtonPressed;
        });
        this._gameLayer.addChild(this._playFromBeginButton);
        this._gameLayer.addChild(this._playResumeButton);

        this.onResize();
    }

    private setupButton(buttonImage: string, buttonText: string, buttonCallBack: () => void): ccui.Button {
        let button = new ccui.Button(buttonImage, buttonImage, buttonImage, Widget.PLIST_TEXTURE);
        button.setTitleText(buttonText);
        button.addClickEventListener(buttonCallBack.bind(this));
        return button;
    }

    private setupAnimationContainer(animation: cc.Animation): cc.Sprite {
        let firstFrame: cc.AnimationFrame = animation.getFrames()[0];
        let firstSpriteFrame: SpriteFrame = firstFrame.getSpriteFrame();
        return new cc.Sprite(firstSpriteFrame);
    }

    public onResize() {
        this._background.setScaleX(this._gameConfig.screenConfig.size.x * this._gameConfig.screenConfig.divergence.x);
        this._background.setScaleY(this._gameConfig.screenConfig.size.y * this._gameConfig.screenConfig.divergence.y);

        this._animationContainer.x = this._gameConfig.screenConfig.size.x * 0.5;
        this._animationContainer.y = this._gameConfig.screenConfig.size.y * 0.5;
        this._animationContainer.scale = this._gameConfig.screenConfig.scale;

        this._playFromBeginButton.x = this._gameConfig.screenConfig.size.x * 0.7;
        this._playFromBeginButton.y = this._gameConfig.screenConfig.size.y * 0.6;
        this._playFromBeginButton.scale = this._gameConfig.screenConfig.scale * 0.5;

        this._playResumeButton.x = this._gameConfig.screenConfig.size.x * 0.7;
        this._playResumeButton.y = this._gameConfig.screenConfig.size.y * 0.4;
        this._playResumeButton.scale = this._gameConfig.screenConfig.scale * 0.5;
    }

}