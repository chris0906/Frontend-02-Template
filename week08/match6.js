function match(str) {
  state = start;
  for (let c of str) {
    state = state(c);
  }
  return state === end;
}

function start(c) {
  if (c === "a") return foundA;
  return start;
}

function foundA(c) {
  if (c === "b") return foundB;
  return start(c);
}

function foundB(c) {
  if (c === "a") return found2A;
  return start(c);
}

function found2A(c) {
  if (c === "b") return found2B;
  return start(c);
}

function found2B(c) {
  if (c === "a") return found3A;
  return start(c);
}

function found3A(c) {
  if (c === "b") return found3B;
  return start(c);
}

function found3B(c) {
  if (c === "x") return end;
  return found2B(c);
}

function end(c) {
  return end;
}

console.log(match("lafdsfababababxfx13"));
