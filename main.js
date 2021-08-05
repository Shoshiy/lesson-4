"use strict"

let text = document.querySelector(".text");

text.textContent = text.textContent.replace(/\B'|'\B/g, '"')