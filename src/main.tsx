import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { store } from "./store/store.ts";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        {/* Sharing redux store state using Provider context */}
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
