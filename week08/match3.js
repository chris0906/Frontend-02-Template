function match(str) {
  foundA = false;
  foundB = false;
  foundC = false;
  foundD = false;
  foundE = false;
  foundF = false;
  for (let c of str) {
    if (c === "a") foundA = true;
    else if (foundA === true && c === "b") foundB = true;
    else if (foundB === true && c === "c") foundC = true;
    else if (foundC === true && c === "d") foundD = true;
    else if (foundD === true && c === "e") foundE = true;
    else if (foundE === true && c === "f") return true;
    else {
      foundA = false;
      foundB = false;
      foundC = false;
      foundD = false;
      foundE = false;
      foundF = false;
    }
  }
  return false;
}
console.log(match("ffdksaabcdefwelj123e"));
