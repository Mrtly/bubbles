function bubbles() {
  var bub = document.createElement("div");
  bub.className = "bubbles";
  bub.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
  bub.style.animationDelay = Math.floor(Math.random() * 20) + "s";
  bub.style.width = Math.floor(Math.random() * 80) + "px";
  bub.style.height = bub.style.width;
  if (parseInt(bub.style.width) < 25) {
    bub.style.zIndex = "-1";
    bub.style.filter = "blur(1px)";
  }
  document.body.appendChild(bub);

  bub.addEventListener("click", function(e) {
    e.target.remove();
  });

  if (document.getElementsByClassName("bubbles").length > 50) {
    clearInterval(bubbles);
  }
}

var bubbles = setInterval(bubbles, 10);

function seaweed() {
  var seaweed = document.createElement("div");
  seaweed.className = "seaweed";
  seaweed.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
  seaweed.style.animationDelay = Math.floor(Math.random() * 5) + "s";
  seaweed.style.height = Math.floor(Math.random() * 180) + 50 + "px";
  document.body.appendChild(seaweed);
  if (
    document.getElementsByClassName("seaweed").length >
    window.innerWidth / 5
  ) {
    clearInterval(seaweedy);
  }
}

var seaweedy = setInterval(seaweed, 10);

//eyes
var pupils = document.querySelectorAll(".pupil");

for (var i = 0; i < pupils.length; i++) {
  var offset = pupils[i].getBoundingClientRect();
  (pupils[i]["centerX"] = offset.left + offset.width / 2),
    (pupils[i]["centerY"] = offset.bottom);
}

function goGoogly(e) {
  var pointerEvent = e;
  if (e.targetTouches && e.targetTouches[0]) {
    e.preventDefault();
    pointerEvent = e.targetTouches[0];
    mouseX = pointerEvent.pageX;
    mouseY = pointerEvent.pageY;
  } else {
    (mouseX = e.clientX + window.pageXOffset),
      (mouseY = e.clientY + window.pageYOffset);
  }
  for (var i = 0; i < pupils.length; i++) {
    (pupils[i]["radians"] = Math.atan2(
      mouseX - pupils[i]["centerX"],
      mouseY - pupils[i]["centerY"]
    )),
      (pupils[i]["degree"] = pupils[i]["radians"] * (180 / Math.PI) * -1);
    pupils[i].style.transform =
      "rotate(" + (pupils[i]["degree"] + 180) + "deg)";
  }
}

window.addEventListener("mousemove", goGoogly);
window.addEventListener("touchstart", goGoogly);
window.addEventListener("touchmove", goGoogly);
