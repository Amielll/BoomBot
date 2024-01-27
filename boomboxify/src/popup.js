import "./popup.css"

function Popup() {
    //value={username} onChange={e => setUsername(e.target.value)}
    // value={password} onChange={e => setPassword(e.target.value)} 
    //onSubmit={handleLogin}
    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Login</h2>
                <form>
                    <label>
                        Username:
                        <input type="text"/>
                    </label>
                    <label>
                        Password:
                        <input type="password"/>
                    </label>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Popup;