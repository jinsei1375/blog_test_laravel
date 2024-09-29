import React from "react";
import { createRoot } from "react-dom/client";
import ExampleComponent from "./components/ExampleComponent";
import AnotherComponent from "./components/AnotherComponent";

// コンポーネントと対応するDOM要素のマッピング
const components = [
    { id: "example", component: ExampleComponent },
    { id: "another", component: AnotherComponent },
    // 新しいコンポーネントが必要な場合は追加していく
];

components.forEach(({ id, component }) => {
    const container = document.getElementById(id);
    if (container) {
        const props = container.getAttribute("data-props");
        console.log(props);
        const parsedProps = props ? JSON.parse(props) : {};
        console.log(parsedProps);
        const root = createRoot(container);
        root.render(React.createElement(component, parsedProps));
    }
});
