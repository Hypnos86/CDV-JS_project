export function titlePage() {
  let title = document.title;
  title = "Drifter Shop";
}

export function menu() {
  const $body = document.querySelector("body");
  const $div = document.createElement("div");
  $div.innerHTML = `
  <header class="header-color flex">
    <img src="static/assets/logo.png" alt="Logo firmy">
    <h1>D r i f t e r - S h o p</h1>
  </header>`;
  $body.insertBefore($div, $body.firstChild);
}
