const channels = {
  stopMotion: {
    title: 'Channel 1',
    videoIds: ['araFF9plBHQ', 'tUPOCu6pj8M', 'DpefYPLH67A']
  },
  turntable: {
    title: 'Channel 2',
    videoIds: ['FTJd_WbEhEs', 'zGM5OG-_cvs', 'H9YhOHoJ9-Q']
  },
  wave: {
    title: 'Channel 3',
    videoIds: ['3EOY3RL_lZg', 'CLk7A7HXhYQ', 'THfL_OI1qt4']
  }
};

const stopMotionButton = document.getElementById("stop-motion");
const turntableButton = document.getElementById("turntable");
const waveButton = document.getElementById("wave");
const tvElement = document.getElementById("tv");

stopMotionButton.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * channels.stopMotion.videoIds.length);
  const randomVideoId = channels.stopMotion.videoIds[randomIndex];
  const iframe = createIframe(randomVideoId);
  tvElement.innerHTML = "";
  tvElement.appendChild(iframe);
});

turntableButton.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * channels.turntable.videoIds.length);
  const randomVideoId = channels.turntable.videoIds[randomIndex];
  const iframe = createIframe(randomVideoId);
  tvElement.innerHTML = "";
  tvElement.appendChild(iframe);
});

waveButton.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * channels.wave.videoIds.length);
  const randomVideoId = channels.wave.videoIds[randomIndex];
  const iframe = createIframe(randomVideoId);
  tvElement.innerHTML = "";
  tvElement.appendChild(iframe);
});

function createIframe(videoId) {
  const iframe = document.createElement("iframe");
  iframe.setAttribute("src", "https://www.youtube.com/embed/" + videoId);
  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("frameborder", "0");
  return iframe;
}