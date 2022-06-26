import React from 'react';
import WebpackIcon from "./webpack.png";
import "./App.css";

const App = () => {
    return (
        <div className={"App"}>
            <img className={"icon"} src={WebpackIcon} alt="webpack"/>
            <h1>Hello Webpack-v5 React App</h1>
        </div>
    );
};

export default App;