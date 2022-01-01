export class Voice
{
    oscillator: any;
    oscillatorGain: any;
    filter: any;
    envelope: any;
    envelopeGain: any;
    compressor: any;

    constructor(note: number, velocity: number, audioCtx: AudioContext, volumeNode: any) 
    {
        // Oscillator
        this.oscillator = audioCtx.createOscillator();
        this.oscillator.frequency.value = this.frequencyFromNoteNumber(note)
        this.oscillator.type = 'square';

        // Oscillator Gain 'VCA'
        this.oscillatorGain = audioCtx.createGain();
        this.oscillatorGain.gain.value = 0.05 + (0.33 * velocity);
        this.oscillator.connect(this.oscillatorGain);

        // filter
        this.filter = audioCtx.createBiquadFilter();
        this.filter.type = 'lowpass';
        this.filter.Q.value = 10;
        this .filter.frequency.value = 400;
        this.oscillatorGain.connect(this.filter);

        // Envelope
        this.envelope = {
            attack: 0.01,
            decay: 0.1,
            velocity: velocity,
            sustain: 0.1,
            release: 0.05,
        };
        this.envelopeGain = audioCtx.createGain();
        this.filter.connect(this.envelopeGain);

        // compressor
        let now = audioCtx.currentTime;
        this.compressor = audioCtx.createDynamicsCompressor();
        this.compressor.threshold.setValueAtTime(-50, audioCtx.currentTime);
        this.compressor.knee.setValueAtTime(30, audioCtx.currentTime);
        this.compressor.ratio.setValueAtTime(12, audioCtx.currentTime);
        this.compressor.attack.setValueAtTime(0, audioCtx.currentTime);
        this.compressor.release.setValueAtTime(0.25, audioCtx.currentTime);

        this.envelopeGain.connect(this.compressor);
        this.compressor.connect(volumeNode)
        this.oscillator.start(now);
    }

    frequencyFromNoteNumber(note:number): number
    {
        return 440 * Math.pow(2, (note - 69) / 12);
    }

    public noteOn(audioCtx: AudioContext) 
    {
        let now = audioCtx.currentTime;
        const easing: number = 0.005;

        this.envelope.gain.cancelScheduledValues(now)
        this.envelope.gain.setValueAtTime(0, now + easing);
        this.envelope.gain.linearRampToValueAtTime(
            this.envelope.velocity,
            now + this.envelope.attack + easing
        );
        this.envelope.gain.linearRampToValueAtTime(
            this.envelope.velocity - this.envelope.sustain,
            now + this.envelope.attack + this.envelope.decay + easing
        );
    }

    public noteOff(audioCtx: AudioContext)
    {
        const easing: number = 0.005;
        let now = audioCtx.currentTime;

        this.envelopeGain.gain.cancelScheduledValues(now);
        this.envelopeGain.gain.setTargetAtTime(0, now, easing + this.envelope.release);
        setTimeout(() =>
        {
            this.oscillator.disconnect();
        }, 10000);
    }
    
}