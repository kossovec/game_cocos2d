import TrackEntry = sp.Spine.TrackEntry;
declare namespace sp {
    import Size = cc.Size;
    import AnimationState = sp.Spine.AnimationState;

    export class Spine{

    }
    module Spine {
        class Animation {
            name: string;
            timelines: Array<Timeline>;
            duration: number;
            constructor(name: string, timelines: Array<Timeline>, duration: number);
            apply(skeleton: Skeleton, lastTime: number, time: number, loop: boolean, events: Array<Event>, alpha: number, setupPose: boolean, mixingOut: boolean): void;
            static binarySearch(values: ArrayLike<number>, target: number, step?: number): number;
            static linearSearch(values: ArrayLike<number>, target: number, step: number): number;
        }
        interface Timeline {
            apply(skeleton: Skeleton, lastTime: number, time: number, events: Array<Event>, alpha: number, setupPose: boolean, mixingOut: boolean): void;
            getPropertyId(): number;
        }
        enum TimelineType {
            rotate = 0,
            translate = 1,
            scale = 2,
            shear = 3,
            attachment = 4,
            color = 5,
            deform = 6,
            event = 7,
            drawOrder = 8,
            ikConstraint = 9,
            transformConstraint = 10,
            pathConstraintPosition = 11,
            pathConstraintSpacing = 12,
            pathConstraintMix = 13,
        }
        class TrackEntry {
            animation: Animation;
            next: TrackEntry;
            mixingFrom: TrackEntry;
            listener: AnimationStateAdapter2;
            trackIndex: number;
            loop: boolean;
            eventThreshold: number;
            attachmentThreshold: number;
            drawOrderThreshold: number;
            animationStart: number;
            animationEnd: number;
            animationLast: number;
            nextAnimationLast: number;
            delay: number;
            trackTime: number;
            trackLast: number;
            nextTrackLast: number;
            trackEnd: number;
            timeScale: number;
            alpha: number;
            mixTime: number;
            mixDuration: number;
            mixAlpha: number;
            timelinesFirst: boolean[];
            timelinesRotation: number[];
        }

        abstract class AnimationStateAdapter2{
            start?(entry: TrackEntry): void;
            interrupt?(entry: TrackEntry): void;
            end?(entry: TrackEntry): void;
            dispose?(entry: TrackEntry): void;
            complete?(entry: TrackEntry): void;
            event?(entry: TrackEntry, event: Event): void;
        }
        class AnimationState{
            addListener(listner: AnimationStateAdapter2): void;
            getCurrent(trackIndex: number): TrackEntry;
            addEmptyAnimation(trackIndex: number, mixDuration: number, delay: number): TrackEntry;
            clearTracks(): void;

        }

        enum EventType {
            start = 0,
            interrupt = 1,
            end = 2,
            dispose = 3,
            complete = 4,
            event = 5,
        }
    }

    export class Skeleton extends cc.Node {
        constructor(skeletonURL: string, atlasURL: string);
        constructor(skeletonURL: string, atlasURL: string, scale: number);
        setTimeScale(scale: number):void;
        setDebugBones(enable: boolean): void;
        setDebugSlots(enable: boolean): void;
        updateWorldTransform(): void;
        setSlotsToSetupPose(): void;
    }
    export class SkeletonAnimation extends Skeleton {
        setMix(fromAnimation: string, toAnimation: string, duration: number): void;
        setAnimation(trackIndex: number, animation: string, loop: boolean): TrackEntry;
        addAnimation(trackIndex: number, animation: string, loop: boolean, delay: number): TrackEntry;
        setAnimationListener(target: any, callback: Function): void;
        setEndListener(listner :()=>{}): void;
        setTrackEndListener(entry: TrackEntry, listener: any): void;
        getState(): AnimationState;
        getCurrent(trackIndex: any): TrackEntry;
    }
    const enum ANIMATION_EVENT_TYPE  {
        START = 0,
        INTERRUPT = 1,
        END = 2,
        DISPOSE = 3,
        COMPLETE = 4,
        EVENT = 5
    }
    export class TrackEntryListeners{
    }
}