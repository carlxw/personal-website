const off = () => {
    document.getElementById("overlay").style.display = "none";
}

const on = () => {
    document.getElementById("overlay").style.display = "block";
}

const Overlay = ({ data }) => {
    return (
        <div id="overlay" onClick={ off }>
            <p>{ data?.a }</p>
            <p>{ data?.b }</p>
            <p>{ data?.c }</p>
        </div>
    );
}

export { Overlay, off, on };