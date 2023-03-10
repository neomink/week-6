const stopMotion = {
  stopMotion: [
    {
      title: 'MITOSIS',
      videoIds: ["https://www.youtube.com/embed/araFF9plBHQ"]
    },
    {
      title: 'FOIL',
      videoIds: ["https://www.youtube.com/embed/tUPOCu6pj8M"]
    },
    {
      title: 'HIDARI',
      videoIds: ["https://www.youtube.com/embed/DpefYPLH67A"]
    }

  ]
}

function showStopMotion() {
  const showStopMotion = [stopMotion];
  showStopMotion.forEach(function (showStopMotion) {
    console.log(showStopMotion);
  })

}
function addElement() {
  // create a new div element
  const newButton = document.createElement("button");

  // and give it some content
  const newContent = document.createTextNode("This is a new Button");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("stop-motion");
  document.body.insertBefore(newButton, currentDiv);
}

const turntable = {
  turntable: [
    {
      title: 'BELT',
      videoIds: ["https://www.youtube.com/embed/FTJd_WbEhEs"]
    },
    {
      title: 'CALIBRATION',
      videoIds: ["https://www.youtube.com/embed/zGM5OG-_cvs"]
    },
    {
      title: 'AIWA-PX-E85',
      videoIds: ["https://www.youtube.com/embed/H9YhOHoJ9-Q"]
    }

  ]
}


const wave = {
  wave: [
    {
      title: '30SEC',
      videoIds: ["https://www.youtube.com/embed/3EOY3RL_lZg"]
    },
    {
      title: 'CINEMATIC',
      videoIds: ["https://www.youtube.com/embed/CLk7A7HXhYQ"]
    },
    {
      title: 'ATLANTIC',
      videoIds: ["https://www.youtube.com/embed/THfL_OI1qt4"]
    }

  ]
}