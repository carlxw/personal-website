// https://www.w3schools.com/howto/howto_css_switch.asp
import "../css/ToggleSwitch.css";
import { useState } from "react";
const ToggleSwitch = ({ func }) => {
    const [checked, setChecked] = useState(false);

    return (
        <div>
            <label className="switch">
                <input 
                    type="checkbox"
                    checked={ checked }
                    onChange={() => {
                        setChecked(!checked);
                        func(checked);
                    }}
                />
                <span className="slider round"></span>
            </label>
        </div>
    );
}

export default ToggleSwitch;