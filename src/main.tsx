import React from 'react';
import "./main.css";
import {createRoot} from "react-dom/client";
import {MapElement} from "./map";

function App() {
    return (
        <div className="h-full">
            <MapElement />
        </div>
    );
}

const root = createRoot(document.getElementById('app'));
root.render(<App />)