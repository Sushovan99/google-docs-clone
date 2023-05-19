import React from "react";
import Header from "@/components/Header";
import Layout from "./components/Layout";

const App: React.FunctionComponent = () => {
    return (
        <div className="flex flex-col">
            {/* Main component related to doc formatting & editing */}
            <Header />
            <Layout />
        </div>
    );
};

export default App;
