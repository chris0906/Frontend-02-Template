function match(selector, element) {
  if (element.querySelector(selector)) return true;
  return false;
}

match("div #id.class", document.getElementById("id"));
