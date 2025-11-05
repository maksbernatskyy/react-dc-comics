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

            {/* Bottone current series */}
            <button id="currentSeries" className="btn btn-primary fw-bold text-uppercase">
              current series
            </button>

            {/* Comics grid */}
            <div className="row row-cols-6">
              
              {
                comics.map((thisComic) => (
                  <div key={thisComic.id} className="col">
                    <div className="card bg-black">
                      <img src={thisComic.thumb} className="card-img-top" alt="" />
                      <div className="card-body">
                        <p className="card-text text-white">{thisComic.title}</p>
                      </div>
                    </div>
                  </div>
                ))
              }

            </div>


          </div>
        </div>

        <BlueBar />
      </main>
    </>
  );
}
