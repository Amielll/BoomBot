import { useState } from "react";
import "./popup.css"

function Popup(props) {
    //value={username} onChange={e => setUsername(e.target.value)}
    // value={password} onChange={e => setPassword(e.target.value)} 
    //onSubmit={handleLogin}
    const setUserAge = props.setUserAge;
    const [age, setAge] = useState("");
    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Login</h2>
                <form>
                    <label>
                        Please type your age
                        <input type="text" onChange={e => setAge(e.target.value)}/>
                    </label>
                    <button type="submit" onSubmit={() => setUserAge(age)}>Submit!</button>
                </form>
            </div>
        </div>
    )
}

export default Popup;