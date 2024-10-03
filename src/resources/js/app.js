import { createApp, h } from "vue";
import ExampleComponent from "./components/ExampleComponent.vue";
import AnotherComponent from "./components/AnotherComponent.vue";

// コンポーネントのマッピング
const components = [
    {
        id: "example-app",
        component: ExampleComponent,
    },
    {
        id: "another-app",
        component: AnotherComponent,
    },
    // 新しいコンポーネントが必要な場合はここに追加
];

// コンポーネントを動的にマウントする関数
const mountComponent = ({ id, component }) => {
    const element = document.getElementById(id);
    if (element) {
        const props = element.getAttribute("data-props");
        const parsedProps = props ? JSON.parse(props) : {};
        const app = createApp({
            render: () => h(component, { data: parsedProps }),
        });
        app.mount(`#${id}`);
    }
};

// 各コンポーネントをループで処理
components.forEach(mountComponent);
