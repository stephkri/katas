const checkAir = function (samples, threshold) {
  let dirtySamples = 0;
  for (let i = 0; i < samples.length; i ++) {
    if (samples[i] === 'dirty') {
      dirtySamples += 1;
    }
  }
  let dirtyPercent = dirtySamples / samples.length;
  if (dirtyPercent < threshold) {
    return "Clean";
  } else {
    return "Polluted";
  }
};

/*
Total number of samples: samples.length
Variable to keep track of how many samples? and use += 1 or smth
*/

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
) + "=? Polluted");

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
) + "=? Polluted");

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
) + "=? Clean")