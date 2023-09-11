import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

const myApi = import.meta.env;

console.log(myApi);

const appName = import.meta.env.local;
console.log(appName);

const myName = import.meta.env.development;
console.log(myName);

const myApiKey = import.meta.env.production;
console.log(myApiKey);

const myDiv = document.createElement("div");
myDiv.setAttribute("id", "app");
document.body.appendChild(myDiv);

myDiv.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));

console.log("");
console.log("");
console.log("TO CHECK WHICH MODE THE SERVER IS RUNNING ON");
console.log(`The server is running on ${import.meta.env.MODE} mode`);
