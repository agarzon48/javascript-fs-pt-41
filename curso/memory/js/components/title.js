const title = ({ text }) => {
    const titleComponent = document.createElement('h1');
    titleComponent.textContent = text;

    return titleComponent;
}

export default title;