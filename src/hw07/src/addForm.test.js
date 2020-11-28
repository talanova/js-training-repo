import { addForm } from "./addForm";

describe("addForm", () => {
  let el;

  beforeEach(() => {
    el = document.createElement("div");
  });

  it("creates basic markup", () => {
    addForm(el);

    const button = el.querySelector(".btn");
    const inputField = el.querySelector(".input-field");
    const outputField = el.querySelector(".output-field");

    expect(button).not.toBe(null);
    expect(inputField).not.toBe(null);
    expect(outputField).not.toBe(null);
    expect(outputField.childNodes.length).toBe(3);
  });

  it("shows button if input not empty", () => {
    addForm(el);

    const inputField = el.querySelector(".input-field");
    const button = el.querySelector(".btn");

    inputField.value = "123";
    inputField.dispatchEvent(new window.Event("input"));
    expect(button.hidden).toBe(false);

    inputField.value = "";
    inputField.dispatchEvent(new window.Event("input"));
    expect(button.hidden).toBe(true);
  });

  it("add new p on button click", () => {
    addForm(el);

    const button = el.querySelector(".btn");
    const inputField = el.querySelector(".input-field");
    const outputField = el.querySelector(".output-field");

    const text = `${Math.random()}`;

    inputField.value = text;
    inputField.dispatchEvent(new window.Event("input"));

    button.dispatchEvent(new window.Event("click"));

    expect(inputField.value).toBe("");
    expect(button.hidden).toBe(true);
    expect(outputField.childNodes.length).toBe(4);
    expect(outputField.childNodes[3].innerText).toBe(text);
  });

  it("only 5 p is enabled", () => {
    addForm(el);

    const button = el.querySelector(".btn");
    const inputField = el.querySelector(".input-field");
    const outputField = el.querySelector(".output-field");

    let text;
    for (let i = 0; i < 7; i++) {
      text = `${Math.random()}`;

      inputField.value = text;
      inputField.dispatchEvent(new window.Event("input"));

      button.dispatchEvent(new window.Event("click"));
    }

    expect(inputField.value).toBe("");
    expect(button.hidden).toBe(true);
    expect(outputField.childNodes.length).toBe(5);
    expect(outputField.childNodes[4].innerText).toBe(text);
  });
});
