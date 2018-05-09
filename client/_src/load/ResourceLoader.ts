import {GameConfig} from "../game/config/GameConfig";
import {Facade} from "../game/fasade/Facade";
import SpriteFrame = cc.SpriteFrame;

export class ResourceLoader {
    private _loadCompleteCount: number = 0;
    protected _resourceArray: string[];
    protected _gameConfig: GameConfig;


    public startResourceLoading(callback: () => void): void {
        this._gameConfig = Facade.config;
        this._resourceArray = this._gameConfig.resourceArray;
        cc.loader.load(this._resourceArray, () => {
        }, (err: any) => {
            if (err) {
                console.log("Resource loading error");
                return;
            }
            this.onLoadComplete(callback);
        });
    }

    private onLoadComplete(callback: () => void): void {
        for (let i = 0; i < this._resourceArray.length; i++) {
            let resourceName = this._resourceArray[i];
            let plist = cc.loader.getRes(resourceName)["metadata"]["textureFileName"];
            let extension = (plist as string).split(".")[1];
            let textureName = resourceName.replace("plist", extension);
            cc.textureCache.addImage(textureName, this.createSpriteFrameCash.bind(this, this._resourceArray, resourceName, callback), this);
        }
    }

    private createAnimationCash(resources: string[]): void {

        let animationMap = this._gameConfig.animationMap;

        for (var animationName of animationMap.keys()) {
            var spriteFrames: SpriteFrame[] = [];
            for (var frame of animationMap.getValue(animationName).spriteArray) {
                var spriteFrame = cc.spriteFrameCache.getSpriteFrame(frame);
                if (spriteFrame == null) {
                    throw new Error("SpriteFrame: " + frame + " is null!");
                }
                spriteFrames.push(spriteFrame);
            }
            var animation: cc.Animation = new cc.Animation();
            animation.initWithSpriteFrames(spriteFrames, animationMap.getValue(animationName).animationSpeed, 1);
            cc.animationCache.addAnimation(animation, animationName);
        }
    }


    private createSpriteFrameCash(resource: string[], resourceName: string, callBack: () => void): void {
        cc.spriteFrameCache.addSpriteFrames(resourceName);
        this._loadCompleteCount++;
        if (this._loadCompleteCount == resource.length) {
            this.createAnimationCash(this._resourceArray);
            callBack();
        }
    }

    loadConfig(config: string, callback: () => void) {
        cc.loader.load(config, () => {
        }, (err: any) => {
            if (err) {
                console.log("config loading error");
                return;
            }
            callback();
        });
    }
}