let items = document.getElementsByClassName("itemAdd");
let point = document.getElementsByClassName("pointer");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let index = 0;
let timer = 0;

let clearIndex = function() {
  for (let i = 0; i < items.length; i++) {
    items[i].className = "itemAdd";
    point[i].className = "pointer";
  }
};

let starIndex = function() {
  clearIndex();
  items[index].className = "itemAdd active";
  point[index].className = "pointer active";
};

let goNext = function() {
  index++;
  if (index === 5) {
    index = 0;
  }
  starIndex();
};

let goPrev = function() {
  if (index === 0) {
    index = 5;
  }
  index--;
  starIndex();
};

next.onclick = function() {
  goNext();
};
prev.onclick = function() {
  goPrev();
};

for (let i = 0; i < point.length; i++) {
  point[i].onclick = function() {
    index = i;
    starIndex();
    timer = 0;
  };
}

setInterval(function() {
  timer++;
  if (timer === 20) {
    starIndex();
    timer = 0;
  }
}, 100);
