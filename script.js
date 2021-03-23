const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Propmpt user to selevt a media stream then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log(error);
    }
}

button.addEventListener('click', async () => {
    // Disable the button
    button.disabled = true;
    // Start PiP
    await videoElement.requestPictureInPicture();
    // Reset the button
    button.disabled = false;
});

// On Load
selectMediaStream();