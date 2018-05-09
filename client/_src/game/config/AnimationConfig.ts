export class AnimationConfig {

    private _animationSpeed;
    private _spriteArray: string[] = [];


    get animationSpeed() {
        return this._animationSpeed;
    }

    set animationSpeed(value) {
        this._animationSpeed = value;
    }

    get spriteArray(): string[] {
        return this._spriteArray;
    }

    set spriteArray(value: string[]) {
        this._spriteArray = value;
    }
}