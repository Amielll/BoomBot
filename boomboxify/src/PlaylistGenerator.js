function PlaylistGenerator(props) {
    const setPlaylistActive = props.setPlaylistActive;
    const setAppActive = props.setAppActive;

    const handleBackButtonClick = () => {
        setPlaylistActive(false);
        setAppActive(true);
    }

    return (
        <div>
            <button onClick={() => handleBackButtonClick()}>You are at PlaylistGenerator page. click to back to main page</button>
        </div>
    )

}

export default PlaylistGenerator