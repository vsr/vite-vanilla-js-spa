import init from "./app";

// const app = document.querySelector<HTMLDivElement>("#app")!;

// // app.innerHTML = `
// //   <h1>Hello Vite!</h1>
// //   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// // `

// window.addEventListener("popstate", function (ev) {
//   console.log("popstate", ev);
// });
// app.addEventListener("click", (ev) => {
//   console.log("navigate");
//   ev.preventDefault();
//   const link = ev.target as HTMLElement;
//   history.pushState({}, "", link.getAttribute("href"));
// });

// history.pushState({}, "", "/");

init();
