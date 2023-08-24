const Heading1 = React.createElement(
    "h1",
    {
      id: "title"
    },
    "Heading1"
);
const Heading2=React.createElement(
    "h1",
    {
        id:"title",
    },
    "Heading2"
)
const Container=React.createElement(
    "div",
    {
        id:"container",
    },
    [Heading1,Heading2]
)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(Container);
