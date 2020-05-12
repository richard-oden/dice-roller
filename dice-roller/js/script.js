function roll(die) {
  var multiplier = parseInt(document.getElementById("multi").value);
  var modifier = parseInt(document.getElementById("mod").value);

  var result = multiplier * Math.floor(Math.random() * die) + 1 + modifier;
  if (result === 1) {
    document.querySelector(".result").innerHTML = `<h2>Oh no! You rolled a <strong>${result}</strong>! (${multiplier}d${die}+${modifier})</h2>`;
  } else if (result === multiplier * die + modifier) {
    document.querySelector(".result").innerHTML = `<h2>Woo! You rolled a natural <strong>${result}</strong>! (${multiplier}d${die}+${modifier})</h2>`;
  } else {
    document.querySelector(".result").innerHTML = `<h2>You rolled a <strong>${result}</strong>! (${multiplier}d${die}+${modifier})</h2>`;
  }
}
