const createDiv = (id: string, color: string) => {
  const div = document.createElement("div");
  div.id = `d${id}`;

  div.style.width = "100px";
  div.style.height = "50px";
  div.style.backgroundColor = color;
  div.append(id);
  return div;
};

const addDiv = () => {
  for (var i = 1; i <= 8; i++) {
    const element: HTMLElement = createDiv(
      `faca e bolo`,
      `rgba(0, 47, 255, 0.333)`
    );
    /* const elementChild: HTMLElement = createDiv(
      `block${i}`,
      "rgba(0, 255, 50, 0.633)"
    );

    elementChild.style.width = "80px";
    elementChild.style.height = "80px"; */
    const doc = document.querySelector(".div1");

    doc?.append(element);

    /* const docChild = document.getElementById(`${i}`);

    docChild?.append(elementChild); */
  }
};

addDiv();
