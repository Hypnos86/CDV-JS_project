export function menu() {
    const $body = document.querySelector("body");
    const $div = document.createElement("div");
    $div.innerHTML = `
      <nav>
        <ul>
          <li>menu tutaj</li>
        </ul>
      </nav>`;
    $body.insertBefore($div, $body.firstChild);
  }