function match(str) {
  found = false;
  for (let c of str) {
    if (c === "a") found = true;
    else if (found === true && c === "b") return true;
    else found = false;
  }
  return false;
}
