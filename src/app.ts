import Router, { Route } from "./router";
import "./style.css";

const linkHtml = `
    <a href="/hello">Hello</a>
    <a href="/there">There</a>
    <a href="/">Home</a>
`;

const home = ({ container }: { container: HTMLElement }) => {
  console.log("Home", container);
  container.innerHTML = "Home page" + linkHtml;
};

const hello = ({ container }: { container: HTMLElement }) => {
  console.log("hello");
  container.innerHTML = "Hello page" + linkHtml;
};

const there = ({ container }: { container: HTMLElement }) => {
  console.log("there");
  container.innerHTML = "There page" + linkHtml;
};

const routes: Route[] = [
  {
    name: "home",
    path: "/",
    controller: home,
  },
  {
    name: "hello",
    path: "/hello",
    controller: hello,
  },
  {
    name: "there",
    path: "/there",
    controller: there,
  },
];

const init = () => {
  console.log("initialize app");
  const container = document.querySelector<HTMLDivElement>("#app");
  if (container !== null) {
    const router = new Router({ routes, container });
    router.init();
  }
};

export default init;
