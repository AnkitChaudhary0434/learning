// break v/s continue

//break

for (let i = 1; i <= 10; i++) {
  if (i === 0) {
    break;
  }
  document.write(`${i}<br>`);
}

//continue

for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    continue;
  }
  document.write(`${i}<br>`);
}

for (let i = 1; i <= 10; i++) {
  if (i%2===0) {
    continue;
  }
  document.write(`${i}<br>`);
}
