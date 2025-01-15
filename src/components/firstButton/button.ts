import "./button.scss";

const firstButton = (title: string) => {
    const m = document.createElement("div");
    m.innerHTML = title;
    m.classList.add("firstButton");
    return m;
};

export default firstButton;