let video;

const waitForVideo = setInterval(() => {
  video = document.querySelector("video");
  if (video) {
    clearInterval(waitForVideo);

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        video.pause();
      } else if (document.visibilityState === "visible") {
        video.play();
      }
    });
  }
}, 1000);
