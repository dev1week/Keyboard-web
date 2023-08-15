export class Keyboard {
  //#을 붙이게 될 경우 private 변수처럼 사용 가능
  #switchEl;
  #fontSelectEl;

  constructor() {
    this.#assignElement();
    this.#addEvent();
  }

  #assignElement() {
    this.#switchEl = document.getElementById("switch");
    this.#fontSelectEl = document.getElementById("font");
  }

  #addEvent() {
    this.#switchEl.addEventListener("change", (event) => {
      document.documentElement.setAttribute(
        "theme",
        event.target.checked ? "dark-mode" : "",
      );
      console.log(event.target.checked);
    });

    this.#fontSelectEl.addEventListener("change", (event) => {
      console.log(event.target.value);
      document.body.style.fontFamily = event.target.value;
    });
  }
}
