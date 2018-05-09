/**
 * Created by Anton.Tomko on 10.10.2016.
 */
declare namespace cc 
{
	export namespace ParticleSystem
	{
		/**
		 * Shape Mode of Particle Draw
		 * @constant
		 * @type Number
		 */
		export const SHAPE_MODE:number;

		/**
		 * Texture Mode of Particle Draw
		 * @constant
		 * @type Number
		 */
		export const TEXTURE_MODE:number;

		/**
		 * Star Shape for ShapeMode of Particle
		 * @constant
		 * @type Number
		 */
		export const STAR_SHAPE:number;

		/**
		 * Ball Shape for ShapeMode of Particle
		 * @constant
		 * @type Number
		 */
		export const BALL_SHAPE:number;

		/**
		 * The Particle emitter lives forever
		 * @constant
		 * @type Number
		 */
		export const DURATION_INFINITY:number;

		/**
		 * The starting size of the particle is equal to the ending size
		 * @constant
		 * @type Number
		 */
		export const START_SIZE_EQUAL_TO_END_SIZE:number;

		/**
		 * The starting radius of the particle is equal to the ending radius
		 * @constant
		 * @type Number
		 */
		export const START_RADIUS_EQUAL_TO_END_RADIUS:number;

		/**
		 * Gravity mode (A mode)
		 * @constant
		 * @type Number
		 */
		export const MODE_GRAVITY:number;

		/**
		 * Radius mode (B mode)
		 * @constant
		 * @type Number
		 */
		export const MODE_RADIUS:number;

		/**
		 * Living particles are attached to the world and are unaffected by emitter repositioning.
		 * @constant
		 * @type Number
		 */
		export const TYPE_FREE:number;

		/**
		 * Living particles are attached to the world but will follow the emitter repositioning.<br/>
		 * Use case: Attach an emitter to an sprite, and you want that the emitter follows the sprite.
		 * @constant
		 * @type Number
		 */
		export const TYPE_RELATIVE:number;

		/**
		 * Living particles are attached to the emitter and are translated along with it.
		 * @constant
		 * @type Number
		 */
		export const TYPE_GROUPED:number;
	}

	export class ParticleSystem extends Node
	{
		constructor(plistFile:string|number)

		static create(plistFile:string|number):ParticleSystem
		static createWithTotalParticles(plistFile:string|number):ParticleSystem

		public setDuration(duration:number):void;

		// set gravity mode.
		public setEmitterMode(emitterMode:number):void;

		// Gravity Mode: gravity
		public setGravity(gravity:Point):void;

		// Gravity Mode: speed of particles
		public setSpeed(speed:number):void;
		public setSpeedVar(speedVar:number):void;

		// Gravity Mode: radial
		public setRadialAccel(value:number):void;
		public setRadialAccelVar(value:number):void;

		// Gravity mode: tangential
		public setTangentialAccel(value:number):void;
		public setTangentialAccelVar(value:number):void;
		public setPosVar(value:Point):void;

		// angle
		public setAngle(value:number):void;
		public setAngleVar(value:number):void;

		// life of particles
		public setLife(value:number):void;
		public setLifeVar(value:number):void;

		// size, in pixels
		public setStartSize(value:number):void;
		public setStartSizeVar(value:number):void;
		public setEndSize(value:number):void;

		// emits per second
		public setEmissionRate(value:number):void;

		// color of particles
		public setStartColor(value:Color):void;
		public setStartColorVar(value:Color):void;
		public setEndColor(value:Color):void;
		public setEndColorVar(value:Color):void;

		// additive
		public setBlendAdditive(value:boolean):void;

		public setTexture(value:Texture2D):void;

		public setTotalParticles(tp:number):void;
	}

	export class ParticleFire extends ParticleSystem
	{

	}

	export class ParticleFireworks extends ParticleSystem
	{

	}

	export class ParticleSun extends ParticleSystem
	{

	}

	export class ParticleGalaxy extends ParticleSystem
	{

	}

	export class ParticleFlower extends ParticleSystem
	{

	}

	export class ParticleMeteor extends ParticleSystem
	{

	}

	export class ParticleSpiral extends ParticleSystem
	{

	}

	export class ParticleExplosion extends ParticleSystem
	{

	}

	export class ParticleSmoke extends ParticleSystem
	{

	}

	export class ParticleSnow extends ParticleSystem
	{

	}

	export class ParticleRain extends ParticleSystem
	{

	}
}