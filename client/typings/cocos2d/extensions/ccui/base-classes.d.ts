/**
 * Created by Anton.Tomko on 02.09.2016.
 */
declare namespace ccui
{
	import Node = cc.Node;
	import Size = cc.Size;
	import Point = cc.Point;
	import Touch = cc.Touch;
	import Event = cc.Event;
	
	export class ProtectedNode extends Node
	{
		static create():ProtectedNode;
		addProtectedChild(child:Node, localZOrder?:number, tag?:number):void;
		getProtectedChildByTag(tag:number):Node;
		removeProtectedChild(child:Node, cleanup?:boolean):void;
		removeAllProtectedChildren():void;
		removeAllProtectedChildrenWithCleanup(cleanup?:boolean):void;
		reorderProtectedChild(child:Node, localZOrder:number):void;
		sortAllProtectedChildren():void;
	}

	export namespace Widget
	{
		/**
		 * None bright style of export const 
		 * @constant
		 * @type {number}
		 */
		export const BRIGHT_STYLE_NONE:number;
		/**
		 * Normal bright style of export const 
		 * @constant
		 * @type {number}
		 */
		export const BRIGHT_STYLE_NORMAL:number;
		/**
		 * Light bright style of export const 
		 * @constant
		 * @type {number}
		 */
		export const BRIGHT_STYLE_HIGH_LIGHT:number;

//widget type
		/**
		 * The type code of Widget for ccui controls.
		 * @constant
		 * @type {number}
		 */
		export const TYPE_WIDGET:number;
		/**
		 * The type code of Container for ccui controls.
		 * @constant
		 * @type {number}
		 */
		export const TYPE_CONTAINER:number;

//Focus Direction
		/**
		 * The left of Focus direction for ccui.Widget
		 * @constant
		 * @type {number}
		 */
		export const LEFT:number;
		/**
		 * The right of Focus direction for ccui.Widget
		 * @constant
		 * @type {number}
		 */
		export const RIGHT:number;
		/**
		 * The up of Focus direction for ccui.Widget
		 * @constant
		 * @type {number}
		 */
		export const UP:number;
		/**
		 * The down of Focus direction for ccui.Widget
		 * @constant
		 * @type {number}
		 */
		export const DOWN:number;

//texture resource type
		/**
		 * The image file texture type of ccui.Widget loads.
		 * @constant
		 * @type {number}
		 */
		export const LOCAL_TEXTURE:number;
		/**
		 * The sprite frame texture type of ccui.Widget loads.
		 * @constant
		 * @type {number}
		 */
		export const PLIST_TEXTURE:number;

//touch event type
		/**
		 * The touch began type of ccui.Widget's touch event
		 * @constant
		 * @type {number}
		 */
		export const TOUCH_BEGAN:number;
		/**
		 * The touch moved type of ccui.Widget's touch event
		 * @constant
		 * @type {number}
		 */
		export const TOUCH_MOVED:number;
		/**
		 * The touch end type of ccui.Widget's touch event
		 * @constant
		 * @type {number}
		 */
		export const TOUCH_ENDED:number;
		/**
		 * The touch canceled type of ccui.Widget's touch event
		 * @constant
		 * @type {number}
		 */
		export const TOUCH_CANCELED:number;

//size type
		/**
		 * The absolute of ccui.Widget's size type.
		 * @constant
		 * @type {number}
		 */
		export const SIZE_ABSOLUTE:number;
		/**
		 * The percent of ccui.Widget's size type.
		 * @constant
		 * @type {number}
		 */
		export const SIZE_PERCENT:number;

//position type
		/**
		 * The absolute of ccui.Widget's position type.
		 * @constant
		 * @type {number}
		 */
		export const POSITION_ABSOLUTE:number;
		/**
		 * The percent of ccui.Widget's position type.
		 * @constant
		 * @type {number}
		 */
		export const POSITION_PERCENT:number;
	}

	/**
	 * The base class for ccui controls and layout
	 * @sample
	 * var uiWidget = new ccui.Widget();
	 * this.addChild(uiWidget);
	 * @class
	 * @extends ccui.ProtectedNode
	 *
	 * @property {Number}           xPercent        - Position x in percentage of width
	 * @property {Number}           yPercent        - Position y in percentage of height
	 * @property {Number}           widthPercent    - Width in percentage of parent width
	 * @property {Number}           heightPercent   - Height in percentage of parent height
	 * @property {ccui.Widget}      widgetParent    - <@readonly> The direct parent when it's a widget also, otherwise equals null
	 * @property {Boolean}          enabled         - Indicate whether the widget is enabled
	 * @property {Boolean}          focused         - Indicate whether the widget is focused
	 * @property {export const SIZE_ABSOLUTE|export const SIZE_PERCENT}     sizeType        - The size type of the widget
	 * @property {export const TYPE_WIDGET|export const TYPE_CONTAINER}   widgetType      - <@readonly> The type of the widget
	 * @property {Boolean}          touchEnabled    - Indicate whether touch events are enabled
	 * @property {Boolean}          updateEnabled   - Indicate whether the update function is scheduled
	 * @property {Boolean}          bright          - Indicate whether the widget is bright
	 * @property {String}           name            - The name of the widget
	 * @property {Number}           actionTag       - The action tag of the widget
	 */
	export class Widget extends ProtectedNode
	{
		xPercent:number;
		yPercent:number;
		widthPercent:number;
		heightPercent:number;
		widgetParent:Widget;
		enabled:boolean;
		focused:boolean;
		sizeType:number;
		widgetType:number;
		private _touchEnabled:boolean;
		updateEnabled:boolean;
		bright:boolean;
		name:string;
		actionTag:number;
		/**
		 * <p>
		 *    When a widget lose/get focus, this method will be called. Be Caution when you provide your own version,       <br/>
		 *    you must call widget.setFocused(true/false) to change the focus state of the current focused widget;
		 * </p>
		 */
		onFocusChanged:Function;
		/**
		 * use this function to manually specify the next focused widget regards to each direction
		 */
		onNextFocusedWidget:Function;

		static create():Widget
		static enableDpadNavigation(enable:boolean):void;
		static getCurrentFocusedWidget():Widget;

		getTouchEnabled(): boolean;

		setTouchEnabled(value: boolean) : void;

		getWidgetParent():Widget;
		/**
		 * Allow widget touch events to propagate to its parents. Set false will disable propagation
		 * @since v3.2
		 * @param {Boolean} isPropagate
		 */
		setPropagateTouchEvents(isPropagate:boolean):void;
		/**
		 * Return whether the widget is propagate touch events to its parents or not
		 * @since v3.2
		 * @returns {boolean}
		 */
		isPropagateTouchEvents():boolean;
		/**
		 * Specify widget to swallow touches or not
		 * @since v3.2
		 * @param {Boolean} swallow
		 */
		setSwallowTouches(swallow:boolean):void;
		/**
		 * Return whether the widget is swallowing touch or not
		 * @since v3.2
		 * @returns {boolean}
		 */
		isSwallowTouches():boolean;
		/**
		 * <p>
		 *     Sets whether the widget is enabled                                                                                    <br/>
		 *     true if the widget is enabled, widget may be touched , false if the widget is disabled, widget cannot be touched.     <br/>
		 *     The default value is true, a widget is default to enabled
		 * </p>
		 * @param {Boolean} enabled
		 */
		setEnabled(enabled:boolean):void;
		getEnabled():boolean;
		/**
		 * Sets _customSize of ccui.Widget, if ignoreSize is true, the content size is its renderer's contentSize, otherwise the content size is parameter.
		 * and updates size percent by parent content size. At last, updates its children's size and position.
		 * @param {cc.Size|Number} contentSize content size or width of content size
		 * @param {Number} [height]
		 * @override
		 */
		setContentSize(contentSize:Size|number, height?:number):void;
		/**
		 * Changes the percent that is widget's percent size
		 * @param {cc.Point} percent that is widget's percent size, width and height value from 0 to 1.
		 */
		setSizePercent(percent:Point):void;
		/**
		 * updates its size by size type and its position by position type.
		 * @param {cc.Size} [parentSize] parent size
		 */
		updateSizeAndPosition(parentSize:Size):void;
		/**TEXTURE_RES_TYPE
		 * Changes the size type of widget.
		 * @param {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} type that is widget's size type
		 */
		setSizeType(type:number):void;
		/**
		 * Gets the size type of widget.
		 * @returns {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} that is widget's size type
		 */
		getSizeType():number;
		/**
		 * Ignore the widget size
		 * @param {Boolean} ignore true that widget will ignore it's size, use texture size, false otherwise. Default value is true.
		 */
		ignoreContentAdaptWithSize(ignore:boolean):void;
		/**
		 * Gets whether ignore the content size (custom size)
		 * @returns {boolean}  true that widget will ignore it's size, use texture size, false otherwise.
		 */
		isIgnoreContentAdaptWithSize():boolean;
		/**
		 * Get custom size of ccui.Widget
		 * @returns {cc.Size}
		 */
		getCustomSize():Size;
		/**
		 * Gets layout size of ccui.Widget.
		 * @returns {cc.Size}
		 */
		getLayoutSize():Size;
		/**
		 * Returns size percent of ccui.Widget
		 * @returns {cc.Point}
		 */
		getSizePercent():Point;
		/**
		 *  Gets world position of ccui.Widget.
		 * @returns {cc.Point} world position of ccui.Widget.
		 */
		getWorldPosition():Point;
		/**
		 * Gets the Virtual Renderer of widget.
		 * @returns {ccui.Widget}
		 */
		getVirtualRenderer():Widget;
		/**
		 * Gets the content size of widget.  Content size is widget's texture size.
		 */
		getVirtualRendererSize():Size;
		/**
		 * Sets whether the widget is touch enabled. The default value is false, a widget is default to touch disabled
		 * @param {Boolean} enable  true if the widget is touch enabled, false if the widget is touch disabled.
		 */
		setTouchEnabled(enable:boolean):void;
		/**
		 * Returns whether or not touch is enabled.
		 * @returns {boolean} true if the widget is touch enabled, false if the widget is touch disabled.
		 */
		isTouchEnabled():boolean;
		/**
		 * Determines if the widget is highlighted
		 * @returns {boolean} true if the widget is highlighted, false if the widget is not highlighted .
		 */
		isHighlighted():boolean;
		/**
		 * Sets whether the widget is highlighted. The default value is false, a widget is default to not highlighted
		 * @param highlight true if the widget is highlighted, false if the widget is not highlighted.
		 */
		setHighlighted(highlight:boolean):void;
		/**
		 * Determines if the widget is on focused
		 * @returns {boolean} whether the widget is focused or not
		 */
		isFocused():boolean;
		/**
		 * Sets whether the widget is on focused
		 * The default value is false, a widget is default to not on focused
		 * @param {boolean} focus  pass true to let the widget get focus or pass false to let the widget lose focus
		 */
		setFocused(focus:boolean):void;
		/**
		 * returns whether the widget could accept focus.
		 * @returns {boolean} true represent the widget could accept focus, false represent the widget couldn't accept focus
		 */
		isFocusEnabled():boolean;
		/**
		 * sets whether the widget could accept focus.
		 * @param {Boolean} enable true represent the widget could accept focus, false represent the widget couldn't accept focus
		 */
		setFocusEnabled(enable:boolean):void;
		/**
		 * <p>
		 *     When a widget is in a layout, you could call this method to get the next focused widget within a specified direction. <br/>
		 *     If the widget is not in a layout, it will return itself
		 * </p>
		 * @param direction the direction to look for the next focused widget in a layout
		 * @param current  the current focused widget
		 * @return  the next focused widget in a layout
		 */
		findNextFocusedWidget(direction:any, current:Widget):Widget;
		/**
		 * when a widget calls this method, it will get focus immediately.
		 */
		requestFocus():void;
		/**
		 * no matter what widget object you call this method on , it will return you the exact one focused widget
		 */
		getCurrentFocusedWidget():Widget;
		/**
		 * Sends the touch event to widget's parent, its subclass will override it, e.g. ccui.ScrollView, ccui.PageView
		 * @param {Number}  eventType
		 * @param {ccui.Widget} sender
		 * @param {cc.Touch} touch
		 */
		interceptTouchEvent(eventType:number, sender:Widget, touch:Touch):void;
		/**
		 * This method is called when a focus change event happens
		 * @param {ccui.Widget} widgetLostFocus
		 * @param {ccui.Widget} widgetGetFocus
		 */
		onFocusChange(widgetLostFocus:Widget, widgetGetFocus:Widget):void;
		/**
		 * Dispatch a EventFocus through a EventDispatcher
		 * @param {ccui.Widget} widgetLostFocus
		 * @param {ccui.Widget} widgetGetFocus
		 */
		dispatchFocusEvent(widgetLostFocus:Widget, widgetGetFocus:Widget):void;
		/**
		 *  Sets whether the widget is bright. The default value is true, a widget is default to bright
		 * @param {Boolean} bright true if the widget is bright, false if the widget is dark.
		 */
		setBright(bright:boolean):void;
		/**
		 * To set the bright style of ccui.Widget.
		 * @param {Number} style BRIGHT_NORMAL the widget is normal state, BRIGHT_HIGHLIGHT the widget is height light state.
		 */
		setBrightStyle(style:number):void;
		/**
		 * A call back function when widget lost of focus.
		 */
		didNotSelectSelf():void;
		/**
		 * <p>
		 *    The callback of touch began event.                                                               <br/>
		 *    If the bounding box of ccui.Widget contains the touch point, it will do the following things:    <br/>
		 *      1. sets highlight state,                                                                       <br/>
		 *      2. sends event to parent widget by interceptTouchEvent                                         <br/>
		 *      3. calls the callback of touch began event.                                                    <br/>
		 *      4. returns true,                                                                               <br/>
		 *    otherwise returns false directly.                                                                <br/>
		 * </p>
		 * @override
		 * @param {cc.Touch} touch
		 * @param {cc.Event} event
		 * @returns {boolean}
		 */
		onTouchBegan(touch:Touch, event:Event):boolean;

		propagateTouchEvent(event:Event, sender:Widget, touch:Touch):void;
		/**
		 * <p>
		 *    The callback of touch moved event.                                                                                                <br/>
		 *    It sets the highlight state by touch, sends event to parent widget by interceptTouchEvent and calls the callback of touch moved event.
		 * </p>
		 * @param {cc.Touch} touch
		 * @param {cc.Event} event
		 */
		onTouchMoved(touch:Touch, event:Event):void;
		/**
		 * <p>
		 *      The callback of touch end event
		 *      It sends event to parent widget by interceptTouchEvent,
		 *      calls the callback of touch end event (highlight= true) or touch canceled event (highlight= false).
		 *      sets the highlight state to false ,
		 * </p>
		 * @param touch
		 * @param event
		 */
		onTouchEnded(touch:Touch, event:Event):void;
		/**
		 * A call back function called when widget is selected, and on touch canceled.
		 * @param {cc.Point} touchPoint
		 */
		onTouchCancelled(touchPoint:Point):void;
		/**
		 * A call back function called when widget is selected, and on touch long clicked.
		 * @param {cc.Point} touchPoint
		 */
		onTouchLongClicked(touchPoint:Point):void;
		/**
		 * Sets the touch event target/selector of the ccui.Widget
		 * @param {Function} selector
		 * @param {Object} target
		 */
		addTouchEventListener(selector:(obj:Widget,type:number)=>void, target:any):void;

		addClickEventListener(callback:Function):void;

		/**
		 * Checks a point if is in widget's space
		 * @param {cc.Point} pt
		 * @returns {boolean} true if the point is in widget's space, false otherwise.
		 */
		hitTest(pt:Point):boolean

		/**
		 * returns whether clipping parent widget contains point.
		 * @param {cc.Point} pt location point
		 * @returns {Boolean}
		 */
		isClippingParentContainsPoint(pt:Point):boolean

		/**
		 * Calls the checkChildInfo of widget's parent, its subclass will override it.
		 * @param {number} handleState
		 * @param {ccui.Widget} sender
		 * @param {cc.Point} touchPoint
		 */
		checkChildInfo(handleState:number, sender:Widget, touchPoint:Point):void

		/**
		 * Changes the position (x,y) of the widget .
		 * The original point (0,0) is at the left-bottom corner of screen.
		 * @override
		 * @param {cc.Point|Number} pos
		 * @param {Number} [posY]
		 */
		setPosition(pos:Point|number, posY?:number):void;

		setPositionX(x:number):void;
		setPositionY(y:number):void;

		/**
		 * Changes the position (x,y) of the widget
		 * @param {cc.Point} percent
		 */
		setPositionPercent(percent:Point):void;
		/**
		 * Gets the percent (x,y) of the widget
		 * @returns {cc.Point} The percent (x,y) of the widget in OpenGL coordinates
		 */
		getPositionPercent():Point;
		/**
		 * Changes the position type of the widget
		 * @param {Number} type  the position type of widget
		 */
		setPositionType(type:number):void;
		/**
		 * Gets the position type of the widget
		 * @returns {Number} the position type of widget
		 */
		getPositionType():number;

		/**
		 * Sets whether the widget should be flipped horizontally or not.
		 * @param {Boolean} flipX true if the widget should be flipped horizontally, false otherwise.
		 */
		setFlippedX(flipX:boolean):void;

		/**
		 * <p>
		 *   Returns the flag which indicates whether the widget is flipped horizontally or not.             <br/>
		 *   It only flips the texture of the widget, and not the texture of the widget's children.          <br/>
		 *   Also, flipping the texture doesn't alter the anchorPoint.                                       <br/>
		 *   If you want to flip the anchorPoint too, and/or to flip the children too use:                   <br/>
		 *   widget.setScaleX(sprite.getScaleX() * -1);
		 * </p>
		 * @returns {Boolean} true if the widget is flipped horizontally, false otherwise.
		 */
		isFlippedX():boolean;

		/**
		 * Sets whether the widget should be flipped vertically or not.
		 * @param {Boolean} flipY  true if the widget should be flipped vertically, false otherwise.
		 */
		setFlippedY(flipY:boolean):void;

		/**
		 * <p>
		 *     Return the flag which indicates whether the widget is flipped vertically or not.                <br/>
		 *     It only flips the texture of the widget, and not the texture of the widget's children.          <br/>
		 *     Also, flipping the texture doesn't alter the anchorPoint.                                       <br/>
		 *     If you want to flip the anchorPoint too, and/or to flip the children too use:                   <br/>
		 *     widget.setScaleY(widget.getScaleY() * -1);
		 * </p>
		 * @returns {Boolean} true if the widget is flipped vertically, false otherwise.
		 */
		isFlippedY():boolean;
		/**
		 * Determines if the widget is bright
		 * @returns {boolean} true if the widget is bright, false if the widget is dark.
		 */
		isBright():boolean;

		/**
		 * Determines if the widget is enabled
		 * @returns {boolean}
		 */
		isEnabled():boolean;

		/**
		 * Gets the left boundary position of this widget.
		 * @returns {number}
		 */
		getLeftBoundary():number;

		/**
		 * Gets the bottom boundary position of this widget.
		 * @returns {number}
		 */
		getBottomBoundary():number;

		/**
		 * Gets the right boundary position of this widget.
		 * @returns {number}
		 */
		getRightBoundary():number;

		/**
		 * Gets the top boundary position of this widget.
		 * @returns {number}
		 */
		getTopBoundary():number;

		/**
		 * Gets the position of touch began event.
		 * @returns {cc.Point}
		 */
		getTouchBeganPosition():Point;

		/**
		 * Gets the position of touch moved event
		 * @returns {cc.Point}
		 */
		getTouchMovePosition():Point;

		/**
		 * Gets the position of touch end event
		 * @returns {cc.Point}
		 */
		getTouchEndPosition():Point;

		/**
		 * get widget type
		 * @returns {ccui.Widget.TYPE_WIDGET|ccui.Widget.TYPE_CONTAINER}
		 */
		getWidgetType():number;

		/**
		 * Gets LayoutParameter of widget.
		 * @param {ccui.LayoutParameter} parameter
		 */
		setLayoutParameter(parameter:LayoutParameter):void;

		/**
		 * Gets layout parameter
		 * @param {ccui.LayoutParameter.NONE|ccui.LayoutParameter.LINEAR|ccui.LayoutParameter.RELATIVE} type
		 * @returns {ccui.LayoutParameter}
		 */
		getLayoutParameter(type:number):LayoutParameter

		/**
		 * Returns the "class name" of widget.
		 * @returns {string}
		 */
		getDescription():string;

		/**
		 * Clones a new widget.
		 * @returns {ccui.Widget}
		 */
		clone():Widget;
		/*temp action*/
		setActionTag(tag:number):void;

		getActionTag():number;

		/**
		 * Gets the left boundary position of this widget.
		 * @deprecated since v3.0, please use getLeftBoundary instead.
		 * @returns {number}
		 */
		getLeftInParent():number;

		/**
		 * Gets the bottom boundary position of this widget.
		 * @deprecated since v3.0, please use getBottomBoundary instead.
		 * @returns {number}
		 */
		getBottomInParent():number;

		/**
		 * Gets the right boundary position of this widget.
		 * @deprecated since v3.0, please use getRightBoundary instead.
		 * @returns {number}
		 */
		getRightInParent():number;

		/**
		 * Gets the top boundary position of this widget.
		 * @deprecated since v3.0, please use getTopBoundary instead.
		 * @returns {number}
		 */
		getTopInParent():number;

		/**
		 * Gets the touch end point of widget when widget is selected.
		 * @deprecated since v3.0, please use getTouchEndPosition instead.
		 * @returns {cc.Point} the touch end point.
		 */
		getTouchEndPos():Point;

		/**
		 *Gets the touch move point of widget when widget is selected.
		 * @deprecated since v3.0, please use getTouchMovePosition instead.
		 * @returns {cc.Point} the touch move point.
		 */
		getTouchMovePos():Point;

		/**
		 * Checks a point if in parent's area.
		 * @deprecated since v3.0, please use isClippingParentContainsPoint instead.
		 * @param {cc.Point} pt
		 * @returns {Boolean}
		 */
		clippingParentAreaContainPoint(pt:Point):boolean;

		/**
		 * Gets the touch began point of widget when widget is selected.
		 * @deprecated since v3.0, please use getTouchBeganPosition instead.
		 * @returns {cc.Point} the touch began point.
		 */
		getTouchStartPos():Point;

		/**
		 * @since v3.2
		 * @returns {boolean} true represent the widget use Unify Size, false represent the widget couldn't use Unify Size
		 */
		isUnifySizeEnabled():boolean

		/**
		 * @since v3.2
		 * @param {Boolean} enable enable Unify Size of a widget
		 */
		setUnifySizeEnabled(enable:boolean):void;
		/**
		 * Set a event handler to the widget in order to use cocostudio editor and framework
		 * @since v3.3
		 * @param {function} callback
		 */
		addCCSEventListener(callback:Function):void;


		/**
		 * Sets callback name to widget.
		 * @since v3.3
		 * @param {String} callbackName
		 */
		setCallbackName(callbackName:string):void;

		/**
		 * Gets callback name of widget
		 * @since v3.3
		 * @returns {String|Null}
		 */
		getCallbackName():string;

		/**
		 * Sets callback type to widget
		 * @since v3.3
		 * @param {String} callbackType
		 */
		setCallbackType(callbackType:string):void;

		/**
		 * Gets callback type of widget
		 * @since v3.3
		 * @returns {String|null}
		 */
		getCallbackType():string;

		/**
		 * Whether enable layout component of a widget
		 * @since v3.3
		 * @param {Boolean} enable enable layout Component of a widget
		 */
		setLayoutComponentEnabled(enable:boolean):void;

		/**
		 * Returns whether enable layout component of a widget
		 * @return {Boolean} true represent the widget use Layout Component, false represent the widget couldn't use Layout Component.
		 */
		isLayoutComponentEnabled():boolean;
	}
}


// TODO: move to external *.d.ts file
declare var io: SocketIOClientStatic;

declare module 'socket.io-client' {
	export = io;
}

interface SocketIOClientStatic {

	/**
	 * Looks up an existing 'Manager' for multiplexing. If the user summons:
	 * 	'io( 'http://localhost/a' );'
	 * 	'io( 'http://localhost/b' );'
	 *
	 * We reuse the existing instance based on the same scheme/port/host, and
	 * we initialize sockets for each namespace. If autoConnect isn't set to
	 * false in the options, then we'll automatically connect
	 * @param uri The uri that we'll connect to, including the namespace, where '/' is the default one (e.g. http://localhost:4000/somenamespace)
	 * @opts Any connect options that we want to pass along
	 * @return A Socket object
	 */
	( uri: string, opts?: SocketIOClient.ConnectOpts ): SocketIOClient.Socket;

	/**
	 * Auto-connects to the window location and defalt namespace.
	 * E.g. window.protocol + '//' + window.host + ':80/'
	 * @opts Any connect options that we want to pass along
	 * @return A Socket object
	 */
	( opts?: SocketIOClient.ConnectOpts ): SocketIOClient.Socket;

	/**
	 * @see the default constructor (io(uri, opts))
	 */
	connect( uri: string, opts?: SocketIOClient.ConnectOpts ): SocketIOClient.Socket;

	/**
	 * @see the default constructor (io(opts))
	 */
	connect( opts?: SocketIOClient.ConnectOpts ): SocketIOClient.Socket;

	/**
	 * The socket.io protocol revision number this client works with
	 * @default 4
	 */
	protocol: number;

	/**
	 * Socket constructor - exposed for the standalone build
	 */
	Socket: SocketIOClient.Socket;

	/**
	 * Manager constructor - exposed for the standalone build
	 */
	Manager: SocketIOClient.ManagerStatic;
}

declare namespace SocketIOClient {

	/**
	 * The base emiter class, used by Socket and Manager
	 */
	interface Emitter {
		/**
		 * Adds a listener for a particular event. Calling multiple times will add
		 * multiple listeners
		 * @param event The event that we're listening for
		 * @param fn The function to call when we get the event. Parameters depend on the
		 * event in question
		 * @return This Emitter
		 */
		on( event: string, fn: Function ):Emitter;

		/**
		 * @see on( event, fn )
		 */
		addEventListener( event: string, fn: Function ):Emitter;

		/**
		 * Adds a listener for a particular event that will be invoked
		 * a single time before being automatically removed
		 * @param event The event that we're listening for
		 * @param fn The function to call when we get the event. Parameters depend on
		 * the event in question
		 * @return This Emitter
		 */
		once( event: string, fn: Function ):Emitter;

		/**
		 * Removes a listener for a particular type of event. This will either
		 * remove a specific listener, or all listeners for this type of event
		 * @param event The event that we want to remove the listener of
		 * @param fn The function to remove, or null if we want to remove all functions
		 * @return This Emitter
		 */
		off( event: string, fn?: Function ):Emitter;

		/**
		 * @see off( event, fn )
		 */
		removeListener( event: string, fn?: Function ):Emitter;

		/**
		 * @see off( event, fn )
		 */
		removeEventListener( event: string, fn?: Function ):Emitter;

		/**
		 * Removes all event listeners on this object
		 * @return This Emitter
		 */
		removeAllListeners():Emitter;

		/**
		 * Emits 'event' with the given args
		 * @param event The event that we want to emit
		 * @param args Optional arguments to emit with the event
		 * @return Emitter
		 */
		emit( event: string, ...args: any[] ):Emitter;

		/**
		 * Returns all the callbacks for a particular event
		 * @param event The event that we're looking for the callbacks of
		 * @return An array of callback Functions, or an empty array if we don't have any
		 */
		listeners( event: string ):Function[];

		/**
		 * Returns if we have listeners for a particular event
		 * @param event The event that we want to check if we've listeners for
		 * @return True if we have listeners for this event, false otherwise
		 */
		hasListeners( event: string ):boolean;
	}

	/**
	 * The Socket static interface
	 */
	interface SocketStatic {

		/**
		 * Creates a new Socket, used for communicating with a specific namespace
		 * @param io The Manager that's controlling this socket
		 * @param nsp The namespace that this socket is for (@default '/')
		 * @return A new Socket
		 */
		( io: SocketIOClient.Manager, nsp: string ): Socket;

		/**
		 * Creates a new Socket, used for communicating with a specific namespace
		 * @param io The Manager that's controlling this socket
		 * @param nsp The namespace that this socket is for (@default '/')
		 * @return A new Socket
		 */
		new ( url: string, opts: any ): SocketIOClient.Manager;
	}

	/**
	 * The Socket that we use to connect to a Namespace on the server
	 */
	interface Socket extends Emitter {

		/**
		 * The Manager that's controller this socket
		 */
		io: SocketIOClient.Manager;

		/**
		 * The namespace that this socket is for
		 * @default '/'
		 */
		nsp: string;

		/**
		 * The ID of the socket; matches the server ID and is set when we're connected, and cleared
		 * when we're disconnected
		 */
		id: string;

		/**
		 * Are we currently connected?
		 * @default false
		 */
		connected: boolean;

		/**
		 * Are we currently disconnected?
		 * @default true
		 */
		disconnected: boolean;

		/**
		 * Opens our socket so that it connects. If the 'autoConnect' option for io is
		 * true (default), then this is called automatically when the Socket is created
		 */
		open(): Socket;

		/**
		 * @see open();
		 */
		connect(): Socket;

		/**
		 * Sends a 'message' event
		 * @param args Any optional arguments that we want to send
		 * @see emit
		 * @return This Socket
		 */
		send( ...args: any[] ):Socket;

		/**
		 * An override of the base emit. If the event is one of:
		 * 	connect
		 * 	connect_error
		 * 	connect_timeout
		 * 	connecting
		 * 	disconnect
		 * 	error
		 * 	reconnect
		 * 	reconnect_attempt
		 * 	reconnect_failed
		 * 	reconnect_error
		 * 	reconnecting
		 * 	ping
		 * 	pong
		 * then the event is emitted normally. Otherwise, if we're connected, the
		 * event is sent. Otherwise, it's buffered.
		 *
		 * If the last argument is a function, then it will be called
		 * as an 'ack' when the response is received. The parameter(s) of the
		 * ack will be whatever data is returned from the event
		 * @param event The event that we're emitting
		 * @param args Optional arguments to send with the event
		 * @return This Socket
		 */
		emit( event: string, ...args: any[] ):Socket;

		/**
		 * Disconnects the socket manually
		 * @return This Socket
		 */
		close():Socket;

		/**
		 * @see close()
		 */
		disconnect():Socket;

		/**
		 * Sets the compress flag.
		 * @param compress If `true`, compresses the sending data
		 * @return this Socket
		 */
		compress(compress: boolean):Socket;
	}

	/**
	 * The Manager static interface
	 */
	interface ManagerStatic {
		/**
		 * Creates a new Manager
		 * @param uri The URI that we're connecting to (e.g. http://localhost:4000)
		 * @param opts Any connection options that we want to use (and pass to engine.io)
		 * @return A Manager
		 */
		( uri: string, opts?: SocketIOClient.ConnectOpts ): SocketIOClient.Manager;

		/**
		 * Creates a new Manager with the default URI (window host)
		 * @param opts Any connection options that we want to use (and pass to engine.io)
		 */
		( opts: SocketIOClient.ConnectOpts ):SocketIOClient.Manager;

		/**
		 * @see default constructor
		 */
		new ( uri: string, opts?: SocketIOClient.ConnectOpts ): SocketIOClient.Manager;

		/**
		 * @see default constructor
		 */
		new ( opts: SocketIOClient.ConnectOpts ):SocketIOClient.Manager;
	}

	/**
	 * The Manager class handles all the Namespaces and Sockets that we're using
	 */
	interface Manager extends Emitter {

		/**
		 * All the namespaces currently controlled by this Manager, and the Sockets
		 * that we're using to communicate with them
		 */
		nsps: { [namespace:string]: Socket };

		/**
		 * The connect options that we used when creating this Manager
		 */
		opts: SocketIOClient.ConnectOpts;

		/**
		 * The state of the Manager. Either 'closed', 'opening', or 'open'
		 */
		readyState: string;

		/**
		 * The URI that this manager is for (host + port), e.g. 'http://localhost:4000'
		 */
		uri: string;

		/**
		 * The currently connected sockets
		 */
		connecting: Socket[];

		/**
		 * If we should auto connect (also used when creating Sockets). Set via the
		 * opts object
		 */
		autoConnect: boolean;

		/**
		 * Gets if we should reconnect automatically
		 * @default true
		 */
		reconnection(): boolean;

		/**
		 * Sets if we should reconnect automatically
		 * @param v True if we should reconnect automatically, false otherwise
		 * @default true
		 * @return This Manager
		 */
		reconnection( v: boolean ): Manager;

		/**
		 * Gets the number of reconnection attempts we should try before giving up
		 * @default Infinity
		 */
		reconnectionAttempts(): number;

		/**
		 * Sets the number of reconnection attempts we should try before giving up
		 * @param v The number of attempts we should do before giving up
		 * @default Infinity
		 * @return This Manager
		 */
		reconnectionAttempts( v: number ): Manager;

		/**
		 * Gets the delay in milliseconds between each reconnection attempt
		 * @default 1000
		 */
		reconnectionDelay(): number;

		/**
		 * Sets the delay in milliseconds between each reconnection attempt
		 * @param v The delay in milliseconds
		 * @default 1000
		 * @return This Manager
		 */
		reconnectionDelay( v: number ): Manager;

		/**
		 * Gets the max reconnection delay in milliseconds between each reconnection
		 * attempt
		 * @default 5000
		 */
		reconnectionDelayMax(): number;

		/**
		 * Sets the max reconnection delay in milliseconds between each reconnection
		 * attempt
		 * @param v The max reconnection dleay in milliseconds
		 * @return This Manager
		 */
		reconnectionDelayMax( v: number ): Manager;

		/**
		 * Gets the randomisation factor used in the exponential backoff jitter
		 * when reconnecting
		 * @default 0.5
		 */
		randomizationFactor(): number;

		/**
		 * Sets the randomisation factor used in the exponential backoff jitter
		 * when reconnecting
		 * @param The reconnection randomisation factor
		 * @default 0.5
		 * @return This Manager
		 */
		randomizationFactor( v: number ): Manager;

		/**
		 * Gets the timeout in milliseconds for our connection attempts
		 * @default 20000
		 */
		timeout(): number;

		/**
		 * Sets the timeout in milliseconds for our connection attempts
		 * @param The connection timeout milliseconds
		 * @return This Manager
		 */
		timeout(v: boolean): Manager;

		/**
		 * Sets the current transport socket and opens our connection
		 * @param fn An optional callback to call when our socket has either opened, or
		 * failed. It can take one optional parameter of type Error
		 * @return This Manager
		 */
		open( fn?: (err?: any) => void ): Manager;

		/**
		 * @see open( fn );
		 */
		connect( fn?: (err?: any) => void ): Manager;

		/**
		 * Creates a new Socket for the given namespace
		 * @param nsp The namespace that this Socket is for
		 * @return A new Socket, or if one has already been created for this namespace,
		 * an existing one
		 */
		socket( nsp: string ): Socket;
	}

	/**
	 * Options we can pass to the socket when connecting
	 */
	export interface ConnectOpts {

		/**
		 * Should we force a new Manager for this connection?
		 * @default false
		 */
		forceNew?: boolean;

		/**
		 * Should we multiplex our connection (reuse existing Manager) ?
		 * @default true
		 */
		multiplex?: boolean;

		/**
		 * The path to get our client file from, in the case of the server
		 * serving it
		 * @default '/socket.io'
		 */
		path?: string;

		/**
		 * Should we allow reconnections?
		 * @default true
		 */
		reconnection?: boolean;

		/**
		 * How many reconnection attempts should we try?
		 * @default Infinity
		 */
		reconnectionAttempts?: number;

		/**
		 * The time delay in milliseconds between reconnection attempts
		 * @default 1000
		 */
		reconnectionDelay?: number;

		/**
		 * The max time delay in milliseconds between reconnection attempts
		 * @default 5000
		 */
		reconnectionDelayMax?: number;

		/**
		 * Used in the exponential backoff jitter when reconnecting
		 * @default 0.5
		 */
		randomizationFactor?: number;

		/**
		 * The timeout in milliseconds for our connection attempt
		 * @default 20000
		 */
		timeout?: number;

		/**
		 * Should we automically connect?
		 * @default true
		 */
		autoConnect?: boolean;

		/**
		 * The host that we're connecting to. Set from the URI passed when connecting
		 */
		host?: string;

		/**
		 * The hostname for our connection. Set from the URI passed when connecting
		 */
		hostname?: string;

		/**
		 * If this is a secure connection. Set from the URI passed when connecting
		 */
		secure?: boolean;

		/**
		 * The port for our connection. Set from the URI passed when connecting
		 */
		port?: string;

		/**
		 * Any query parameters in our uri. Set from the URI passed when connecting
		 */
		query?: Object;

		/**
		 * `http.Agent` to use, defaults to `false` (NodeJS only)
		 */
		agent?: string|boolean;

		/**
		 * Whether the client should try to upgrade the transport from
		 * long-polling to something better.
		 * @default true
		 */
		upgrade?: boolean;

		/**
		 * Forces JSONP for polling transport.
		 */
		forceJSONP?: boolean;

		/**
		 * Determines whether to use JSONP when necessary for polling. If
		 * disabled (by settings to false) an error will be emitted (saying
		 * "No transports available") if no other transports are available.
		 * If another transport is available for opening a connection (e.g.
		 * WebSocket) that transport will be used instead.
		 * @default true
		 */
		jsonp?: boolean;

		/**
		 * Forces base 64 encoding for polling transport even when XHR2
		 * responseType is available and WebSocket even if the used standard
		 * supports binary.
		 */
		forceBase64?: boolean;

		/**
		 * Enables XDomainRequest for IE8 to avoid loading bar flashing with
		 * click sound. default to `false` because XDomainRequest has a flaw
		 * of not sending cookie.
		 * @default false
		 */
		enablesXDR?: boolean;

		/**
		 * The param name to use as our timestamp key
		 * @default 't'
		 */
		timestampParam?: string;

		/**
		 * Whether to add the timestamp with each transport request. Note: this
		 * is ignored if the browser is IE or Android, in which case requests
		 * are always stamped
		 * @default false
		 */
		timestampRequests?: boolean;

		/**
		 * A list of transports to try (in order). Engine.io always attempts to
		 * connect directly with the first one, provided the feature detection test
		 * for it passes.
		 * @default ['polling','websocket']
		 */
		transports?: string[];

		/**
		 * The port the policy server listens on
		 * @default 843
		 */
		policyPost?: number;

		/**
		 * If true and if the previous websocket connection to the server succeeded,
		 * the connection attempt will bypass the normal upgrade process and will
		 * initially try websocket. A connection attempt following a transport error
		 * will use the normal upgrade process. It is recommended you turn this on
		 * only when using SSL/TLS connections, or if you know that your network does
		 * not block websockets.
		 * @default false
		 */
		rememberUpgrade?: boolean;

		/**
		 * Are we only interested in transports that support binary?
		 */
		onlyBinaryUpgrades?: boolean;

		/**
		 * (SSL) Certificate, Private key and CA certificates to use for SSL.
		 * Can be used in Node.js client environment to manually specify
		 * certificate information.
		 */
		pfx?: string;

		/**
		 * (SSL) Private key to use for SSL. Can be used in Node.js client
		 * environment to manually specify certificate information.
		 */
		key?: string;

		/**
		 * (SSL) A string or passphrase for the private key or pfx. Can be
		 * used in Node.js client environment to manually specify certificate
		 * information.
		 */
		passphrase?: string

		/**
		 * (SSL) Public x509 certificate to use. Can be used in Node.js client
		 * environment to manually specify certificate information.
		 */
		cert?: string;

		/**
		 * (SSL) An authority certificate or array of authority certificates to
		 * check the remote host against.. Can be used in Node.js client
		 * environment to manually specify certificate information.
		 */
		ca?: string|string[];

		/**
		 * (SSL) A string describing the ciphers to use or exclude. Consult the
		 * [cipher format list]
		 * (http://www.openssl.org/docs/apps/ciphers.html#CIPHER_LIST_FORMAT) for
		 * details on the format.. Can be used in Node.js client environment to
		 * manually specify certificate information.
		 */
		ciphers?: string;

		/**
		 * (SSL) If true, the server certificate is verified against the list of
		 * supplied CAs. An 'error' event is emitted if verification fails.
		 * Verification happens at the connection level, before the HTTP request
		 * is sent. Can be used in Node.js client environment to manually specify
		 * certificate information.
		 */
		rejectUnauthorized?: boolean;

	}
}
