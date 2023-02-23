import React from 'react';
import "./main.css";
import {createRoot} from "react-dom/client";
import {MapElement} from "./components/map";
import {Footer} from "./components/footer";

function App() {
    return (
        <div className="h-screen max-h-screen">
            <MapElement className="w-full max-h-screen h-5/6" />
            <Footer className="w-full bg-gray-600 text-white h-1/6" />
        </div>
    );
}

const root = createRoot(document.getElementById('app'));
root.render(<App />)