// Blue bar
import BlueBar from "./BlueBar";
// Comics.js
import comics from "../assets/comics";

export default function Main() {

  {/* Array di oggetti comics */}
  <comics />

  return (
    <>
      <main>

        {/* Jumbotron */}
        <div id="jumbotron"></div>

        <div className="bg-black py-5">
          <div id="currentSeriesField" className="container">
            <button id="currentSeries" className="btn btn-primary fw-bold text-uppercase">
              current series
            </button>
          </div>
        </div>

        <BlueBar />
      </main>
    </>
  );
}
