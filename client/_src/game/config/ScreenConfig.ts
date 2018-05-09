export class ScreenConfig {
    public DESKTOP_DESIGN_WIDTH: number = 1536;
    public DESKTOP_DESIGN_HEIGHT: number = 768;
    public BASE_GAME_WIDTH: number = 1136;
    public BASE_GAME_HEIGHT: number = 640;

    private _scale: number = 1;
    public size: { x: number, y: number } = {x: 0, y: 0};
    public divergence: { x: number, y: number } = {x: 0, y: 0};

    get scale(): number {
        return this._scale;
    }

    set scale(value: number) {
        this._scale = value;
    }
}