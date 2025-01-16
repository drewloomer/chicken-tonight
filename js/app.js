const shuffle = (array) => {
  const clonedArray = Array.from(array);
  let currentIndex = clonedArray.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [clonedArray[currentIndex], clonedArray[randomIndex]] = [
      clonedArray[randomIndex],
      clonedArray[currentIndex],
    ];
  }

  return clonedArray;
};

const videoIds = ["OhD2mTxyUaE", "_GdiNk3-IPE", "x1veMqaPOxo", "kOVBXL3Jcz4"];

const loadYouTube = (cb) => {
  const script = document.createElement("script");
  script.src = "https://www.youtube.com/iframe_api";
  document.body.appendChild(script);
  window.onYouTubeIframeAPIReady = cb;
};

const main = () => {
  const shuffledIds = shuffle(videoIds);

  new YT.Player("video", {
    height: "390",
    width: "640",
    videoId: shuffledIds[0],
    playerVars: {
      autoplay: 1,
      controls: 0,
      fs: 0,
      enablejsapi: 1,
      playsinline: 1,
      rel: 0,
      playlist: shuffledIds.slice(1).join(","),
    },
    events: {
      onReady(event) {
        event.target.playVideo();
      }
    },
  });
};

loadYouTube(main);
