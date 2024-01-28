

export default function Chat() {
  return <div class="App">
  <div id="page-container">
      <div id="content-wrap">  
          <div>{popupToggle ? <Popup handleUserAgeInput={handleUserAgeInput}></Popup> : <p></p>}</div>
          <div class="my-style">
              BOOMBOT
          </div>
          <div class='subheader'>
              Your Retro AI Boombox, Bringing Nostalgia to the Digital Era!
          </div>
          <div class="button-container">
              <a href={loginUrl} class="button-link">
                  <button id="button1">Get started with Spotify!</button>
              </a>
              <button id="button2" onClick={() => handleChatbotButtonClick()}>Talk to our boombot!</button>
          </div>            
      </div>
  </div>
  <div class="corner-border top-right"></div>
  <div class="corner-border bottom-left"></div>
  <div class="image-container"><img src={boombox} alt="boombox" class="boombox"/></div>
</div>
}