// https://www.w3schools.com/howto/howto_css_switch.asp
import "../css/ToggleSwitch.css";

const ToggleSwitch = () => {
    return (
        <div>
            {/* <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
            </label> */}

            <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
            </label>
        </div>
    );
}

export default ToggleSwitch;