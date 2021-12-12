const HTML = () => {
  const root = document.getElementById("root");
  root.insertAdjacentHTML(
    "beforeend",
    `
    <h1>Jelentkezés</h1>
    <input placeholder="Név">
    <input placeholder="Email cím">
    <div id="elfogad">
    <input type="checkbox" id="cb"> 
    <label for="cb">Elolvastam és elfogadom az <a href='#'>Adatkezelési Tájékoztatót.</a></label>
    </div>
    <button>Elküld</button>
    `
  );
};

function loadEvent() {
  console.log("the page has loaded");
  HTML();
}

window.addEventListener("load", loadEvent);
