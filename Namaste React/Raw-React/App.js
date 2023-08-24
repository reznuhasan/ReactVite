import React from "react";
import ReactDOM from "react-dom/client";

const Heading=React.createElement(
    "h1",
    {
        id:"title",
    },
    "This is my heading"
)
const Main=React.createElement(
    "p",
    {
        id:"para"
    },
    "my name is rizwan.i'm student of shanto-mariam university"
)
const Footer=React.createElement(
    "h1",
    {
        id:"footer"
    },
    "This is my footer part"
)

const container=React.createElement(
    "div",
    {
        id:"container"
    },
    [Heading,Main,Footer]
)

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(container)