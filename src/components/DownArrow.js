import { useEffect } from "react"

const DownArrow = () => {
    useEffect(() => {
        const animatedDownArrow = document.querySelector("#down_arrow");
        animatedDownArrow.classList.add("animate__animated", "animate__flip", "animate__slow", "animate__infinite");
    }, []);

    const scrollToBottom = () => {
        window.scrollTo( {
            top: document.body.scrollHeight,
            behavior: "smooth",
        });
    }

    return <p id="down_arrow" style={{fontSize: "14px"}} onClick={ scrollToBottom }>▼</p>
}

export default DownArrow
