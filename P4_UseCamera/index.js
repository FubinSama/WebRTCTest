// (async function () { 
//     document.querySelector("video").srcObject = await navigator.mediaDevices.getUserMedia({
//         audio: false,
//         video: true
//     });
//  })();
new Vue({
    el: "#vueapp",
    methods: {
        btnTakePhotoClicked(){
            this._context2d.drawImage(this.$refs.video, 0, 0, 400, 300);
        },
        async _initAueApp(){
            this.$refs.video.srcObject = await navigator.mediaDevices.getUserMedia({
                audio: false,
                video: true
            });
            this._context2d = this.$refs.canvas.getContext("2d");
        }
    },
    mounted () {
        this._initAueApp();
    }
})