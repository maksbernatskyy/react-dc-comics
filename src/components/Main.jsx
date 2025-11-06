import Card from "./Card";

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
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-6">
              
              {
                comics.map((thisComic) => (
                  <Card 
                     key={thisComic.id}
                     thumb={thisComic.thumb}
                     title={thisComic.title}
                  />
                ))
              }

            </div>

            {/* Bottone load more */}
            <div className="text-center">
              <button className="btn btn-primary fw-bold text-uppercase px-5">
                load more
              </button>
            </div>


          </div>
        </div>

        <BlueBar />
      </main>
    </>
  );
}
