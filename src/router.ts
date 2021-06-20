export interface Route {
  path: string;
  name: string;
  controller: Function;
}
export interface RouterOption {
  routes: Route[];
  container: HTMLElement;
}

export default class Router {
  private _options: RouterOption;
  constructor(options: RouterOption) {
    this._options = options;
  }
  init() {
    console.log(this._options);
    window.addEventListener("popstate", (ev) => {
      console.log("popstate", ev);
    });
    this.captureNavigation();
    this.go(window.location.pathname);
  }
  go(path: string) {
    window.history.pushState({}, "", path);
    let currentRoute = this._options.routes.find(
      (route: Route) => route.path === path
    );
    if (!currentRoute) {
      currentRoute = this._options.routes[0];
    }
    currentRoute.controller({
      container: this._options.container,
      router: this,
    });
  }
  captureNavigation() {
    this._options.container.addEventListener("click", (ev) => {
      const el = ev.target as HTMLAnchorElement;
      if (el && el.tagName === "A" && el.hasAttribute("href")) {
        const href = el.getAttribute("href");
        if (
          el.origin === window.location.origin &&
          href &&
          window.location.pathname !== href
        ) {
          ev.preventDefault();
          this.go(href);
        }
      }
    });
  }
}
