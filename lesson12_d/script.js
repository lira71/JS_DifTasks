let  btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random()*(number+1));
}

btn.onclick = function() {

    let r = Math.floor(Math.random() * (256)),
                g = Math.floor(Math.random() * (256)),
                b = Math.floor(Math.random() * (256));

  let rndCol = '#' + r.toString(16) + g.toString(16) + b.toString(16);
  document.body.style.backgroundColor = rndCol;
}