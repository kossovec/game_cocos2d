/**
 * Created by Anton.Tomko on 02.09.2016.
 */
declare namespace ccui
{
	import Color = cc.Color;
	import Size = cc.Size;
	import Rect = cc.Rect;
	import Node = cc.Node;
	import LabelTTF = cc.LabelTTF;
	import Layer = cc.Layer;
	import extend = cc.extend;
	import Point = cc.Point;
	import Label = cc.Label;
	export namespace Button
	{
		/**
		 * The normal renderer's zOrder value of export const 
		 * @constant
		 * @type {number}
		 */
		export const NORMAL_RENDERER_ZORDER:number;
		/**
		 * The pressed renderer's zOrder value export const 
		 * @constant
		 * @type {number}
		 */
		export const PRESSED_RENDERER_ZORDER:number;
		/**
		 * The disabled renderer's zOrder value of export const 
		 * @constant
		 * @type {number}
		 */
		export const DISABLED_RENDERER_ZORDER:number;
		/**
		 * The title renderer's zOrder value of export const 
		 * @constant
		 * @type {number}
		 */
		export const TITLE_RENDERER_ZORDER:number;

		/**
		 * the zoom action time step of ccui.Button
		 * @constant
		 * @type {number}
		 */
		export const ZOOM_ACTION_TIME_STEP:number;

		/**
		 * @ignore
		 */
		export const SYSTEM:number;
		export const TTF:number;
	}

	/**
	 * The button controls of Cocos UI.
	 * @class
	 * @extends ccui.Widget
	 *`1
	 * @property {String}   titleText               - The content string of the button title
	 * @property {String}   titleFont               - The content string font of the button title
	 * @property {Number}   titleFontSize           - The content string font size of the button title
	 * @property {String}   titleFontName           - The content string font name of the button title
	 * @property {cc.Color} titleFontColor          - The content string font color of the button title
	 * @property {Boolean}  pressedActionEnabled    - Indicate whether button has zoom effect when clicked
	 */
	export class Button extends Widget
	{
		titleText:string;
		titleFont:string;
		titleFontSize:number;
		titleFontName:string;
		titleFontColor:Color;
		pressedActionEnabled:boolean;

		/**
		 * Allocates and initializes a UIButton.
		 * Constructor of ccui.Button. override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
		 * @param {String} normalImage
		 * @param {String} [selectedImage=""]
		 * @param {String} [disableImage=""]
		 * @param {Number} [texType=ccui.Widget.LOCAL_TEXTURE]
		 * @example
		 * // example
		 * var uiButton = new ccui.Button();
		 */
		constructor(normalImage?:string, selectedImage?:string, disableImage?:string, texType?:number);
		/**
		 * Sets if button is using scale9 renderer.
		 * @param {Boolean} able true that using scale9 renderer, false otherwise.
		 */
		setScale9Enabled(able:boolean):void;
		/**
		 *  Returns button is using scale9 renderer or not.
		 * @returns {Boolean}
		 */
		isScale9Enabled():boolean;

		/**
		 * Sets whether ignore the widget size
		 * @param {Boolean} ignore true that widget will ignore it's size, use texture size, false otherwise. Default value is true.
		 * @override
		 */
		ignoreContentAdaptWithSize(ignore:boolean):void;

		_updateTitleLocation():void;

		/**
		 * Returns the renderer size.
		 * @returns {cc.Size}
		 */
		getVirtualRendererSize():Size;

		/**
		 * Load textures for button.
		 * @param {String} normal normal state of texture's filename.
		 * @param {String} selected  selected state of texture's filename.
		 * @param {String} disabled  disabled state of texture's filename.
		 * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
		 */
		loadTextures(normal:string, selected?:string, disabled?:string, texType?:number):void;

		/**
		 * Load normal state texture for button.
		 * @param {String} normal normal state of texture's filename.
		 * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
		 */
		loadTextureNormal(normal:string, texType:number):void;

		/**
		 * Load selected state texture for button.
		 * @param {String} selected selected state of texture's filename.
		 * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
		 */
		loadTexturePressed(selected:string, texType:number):void;

		/**
		 * Load dark state texture for button.
		 * @param {String} disabled disabled state of texture's filename.
		 * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
		 */
		loadTextureDisabled(disabled:string, texType:number):void;

		/**
		 * Sets capinsets for button, if button is using scale9 renderer.
		 * @param {cc.Rect} capInsets
		 */
		setCapInsets(capInsets:Rect):void;

		/**
		 * Sets capinsets for button, if button is using scale9 renderer.
		 * @param {cc.Rect} capInsets
		 */
		setCapInsetsNormalRenderer(capInsets:Rect):void;

		/**
		 *  Returns normal renderer cap insets.
		 * @returns {cc.Rect}
		 */
		getCapInsetsNormalRenderer():Rect;

		/**
		 * Sets capinsets for button, if button is using scale9 renderer.
		 * @param {cc.Rect} capInsets
		 */
		setCapInsetsPressedRenderer(capInsets:Rect):void;

		/**
		 *  Returns pressed renderer cap insets.
		 * @returns {cc.Rect}
		 */
		getCapInsetsPressedRenderer():Rect;

		/**
		 * Sets capinsets for button, if button is using scale9 renderer.
		 * @param {cc.Rect} capInsets
		 */
		setCapInsetsDisabledRenderer(capInsets:Rect):void;

		/**
		 * Returns disable renderer cap insets.
		 * @returns {cc.Rect}
		 */
		getCapInsetsDisabledRenderer():Rect;

		/**
		 * Changes if button can be clicked zoom effect.
		 * @param {Boolean} enabled
		 */
		setPressedActionEnabled(enabled:boolean):void;

		/**
		 * Sets title text to ccui.Button
		 * @param {String} text
		 */
		setTitleText(text:string):void;

		/**
		 * Returns title text of ccui.Button
		 * @returns {String} text
		 */
		getTitleText():string;

		/**
		 * Sets title color to ccui.Button.
		 * @param {cc.Color} color
		 */
		setTitleColor(color:Color):void;

		/**
		 * Returns title color of ccui.Button
		 * @returns {cc.Color}
		 */
		getTitleColor():Color;

		/**
		 * Sets title fontSize to ccui.Button
		 * @param {cc.Size} size
		 */
		setTitleFontSize(size: number):void;

		/**
		 * Returns title fontSize of ccui.Button.
		 * @returns {Number}
		 */
		getTitleFontSize():number;

		/**
		 * When user pressed the button, the button will zoom to a scale.
		 * The final scale of the button  equals (button original scale + _zoomScale)
		 * @since v3.2
		 * @param scale
		 */
		setZoomScale(scale:number):void;

		/**
		 * Returns a zoom scale
		 * @since v3.2
		 * @returns {number}
		 */
		getZoomScale():number;

		/**
		 * Returns the normalize of texture size
		 * @since v3.3
		 * @returns {cc.Size}
		 */
		getNormalTextureSize():Size;

		/**
		 * Sets title fontName to ccui.Button.
		 * @param {String} fontName
		 */
		setTitleFontName(fontName:string):void;

		/**
		 * Get the title renderer.
		 * title ttf object.
		 * @returns {cc.LabelTTF}
		 */
		getTitleRenderer():LabelTTF;

		/**
		 * Gets title fontName of ccui.Button.
		 * @returns {String}
		 */
		getTitleFontName():string;

		/**
		 * Returns the "class name" of widget.
		 * @override
		 * @returns {string}
		 */
		getDescription():string;
	}

	export namespace ScrollView {
		export const SCROLLVIEW_DIRECTION_NONE:number;
		export const SCROLLVIEW_DIRECTION_HORIZONTAL:number;
		export const SCROLLVIEW_DIRECTION_VERTICAL:number;
		export const SCROLLVIEW_DIRECTION_BOTH:number;
		export const SCROLL_DEACCEL_RATE:number;
		export const SCROLL_DEACCEL_DIST:number;
		export const BOUNCE_DURATION:number;
		export const INSET_RATIO:number;
		export const MOVE_INCH:number;
		export const BOUNCE_BACK_FACTOR:number;
	}

	export class ScrollView extends Layer {
		public constructor();

		public setDirection(direction:number):void;

		public setTouchEnabled(enabled:boolean):void;

		public setMouseEnabled(enabled:boolean):void;

		public setInnerContainerSize(size: Size):void;

		public getInnerContainerPosition(): cc.Point;

		public setInnerContainerPosition(position: cc.Point): void;

		public getInnerContainerSize(): cc.Size;

		public setScrollBarEnabled(flag: boolean):void;

		public scrollToBottom(time: number, attenuated: boolean):void;

		public scrollToTop(time: number, attenuated: boolean):void;
		
		public scrollToPercentVertical(percent:number, time:number, attenuated:boolean):void;
	}

	export class CheckBox extends Widget {
		public constructor();

		/**
		 * Loads textures for checkbox.
		 * @param {String} backGround
		 * @param {String} backGroundSelected
		 * @param {String} cross
		 * @param {String} backGroundDisabled
		 * @param {String} frontCrossDisabled
		 * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
		 */
		loadTextures(backGround:string, backGroundSelected:string, cross:string, backGroundDisabled:string, frontCrossDisabled:string, texType:number):void;

	}
	export namespace TextField {
		export const EVENT_ATTACH_WITH_IME: number;
		export const EVENT_DETACH_WITH_IME: number;
		export const EVENT_INSERT_TEXT: number;
		export const EVENT_DELETE_BACKWARD: number;
	}
	export  class TextField extends Widget {
		fontName: string;
		maxLength: number;
		maxLengthEnabled: boolean;
		fontSize: number;
		placeHolder: string;
		public setFontName(name: string):void;
		public addEventListenerTextField(selector: ()=> void, target: any): void;
		public setFontSize(fontSize: number): void;
		public isMaxLengthEnabled(): boolean;
		public getString(): string;
		public setString(text: string):void;
		public setTouchSize(size: Size): void;
		public setText(text: string) : void;
		public setPlaceHolder(text: string): void;
		public setMaxLength(length: number): void;
		public setMaxLengthEnabled(enable: boolean): void;
	}

	export class LoadingBar extends Widget
	{
		/**
		 * allocates and initializes a UILoadingBar.                                                        <br/>
		 * Constructor of ccui.LoadingBar, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
		 * @param {string} textureName
		 * @param {Number} percentage
		 * @example
		 * // example
		 * var uiLoadingBar = new ccui.LoadingBar;
		 */
		public constructor();

		/**
		 * The current progress of loadingBar
		 * @param {number} percent   percent value from 1 to 100.
		 */
		public setPercent(percent: number): void;

		/**
		 * Loads texture for LoadingBar.
		 * @param {String} texture
		 * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
		 */
		public loadTexture(texture: string, texType: number): void;

		/**
		 * Returns the progress direction of LoadingBar.
		 * @returns {number} percent value from 1 to 100.
		 */
		public getPercent(): number;
	}

	export class Scale9Sprite extends cc.Node
	{
		constructor();
	}
}