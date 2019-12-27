(async function () { 
    // let devices = await navigator.mediaDevices.enumerateDevices();
    // console.log(devices);
    let stream = await navigator.mediaDevices.getUserMedia({
        video: false,
        audio: true
    });
    document.querySelector("audio").srcObject = stream;
 })();
new Vue({
    el: "#vueapp",
    data: {
       audioInputDevices: [],
       selectAudioDeviceIndex: 0  
    },
    mounted () {
        this._initVueApp();
    },

    methods: {
        async _initVueApp(){
            let devices = await navigator.mediaDevices.enumerateDevices();
            let audioInputDevices = devices.filter(value => value.kind === 'audioinput');
            this.audioInputDevices.length = 0;
            this.audioInputDevices.push(...audioInputDevices);
            console.log(this.audioInputDevices);
        },

        async showSelectDevice(){
            let deviceInfo = this.audioInputDevices[this.selectAudioDeviceIndex];
            let stream = await navigator.mediaDevices.getUserMedia({video: false, audio: deviceInfo});
            this.$refs.audio.srcObject = stream;
        }
    },

    watch: {
        selectAudioDeviceIndex(){
            this.showSelectDevice();
        }
    }
})