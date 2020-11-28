function addToOutput(outputField, text) {
  const p = document.createElement("p");
  p.innerText = text;
  outputField.append(p);
}

function cleanOutput(outputField) {
  if (outputField.childNodes.length > 5) {
    outputField.childNodes[0].remove();
  }
}

export function addForm(el) {
  const button = document.createElement("button");
  const inputField = document.createElement("input");
  const outputField = document.createElement("div");

  button.className = "btn";
  button.innerText = "Click me!";
  button.style.margin = "4px";
  button.hidden = true;
  button.addEventListener("click", () => {
    addToOutput(outputField, inputField.value);
    inputField.value = "";
    button.hidden = true;
    cleanOutput(outputField);
  });

  inputField.className = "input-field";
  inputField.id = "input-field";
  inputField.style.margin = "4px";
  inputField.addEventListener("input", () => {
    if (inputField.value.length === 0) {
      button.hidden = true;
    } else {
      button.hidden = false;
    }
  });

  outputField.className = "output-field";
  for (let i = 0; i < 3; i++) {
    outputField.appendChild(document.createElement("p"));
  }

  el.appendChild(inputField);
  el.appendChild(button);
  el.appendChild(document.createElement("br"));
  el.appendChild(outputField);
}
