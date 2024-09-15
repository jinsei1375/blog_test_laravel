import { createApp } from "vue";
import ExampleComponent from "./components/ExampleComponent.vue";
import AnotherComponent from "./components/AnotherComponent.vue";

// ExampleComponentを表示するページ
if (document.getElementById("example-app")) {
    const exampleApp = createApp({});
    exampleApp.component("example-component", ExampleComponent);
    exampleApp.mount("#example-app");
}

// AnotherComponentを表示するページ
if (document.getElementById("another-app")) {
    const anotherApp = createApp({});
    anotherApp.component("another-component", AnotherComponent);
    anotherApp.mount("#another-app");
}
