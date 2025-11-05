//Blue bar
import BlueBar from "./BlueBar";

export default function Main() {
  
  return (
    <>
      <main>

        {/* Jumbotron */}
        <div id="jumbotron"></div>

        <div className="bg-black py-5">
          <div className="container">
            <a
              className="text-white text-decoration-none fw-bold fs-4"
              href="#"
            >
              --&gt;Content goes here&lt;--
            </a>
          </div>
        </div>

        <BlueBar />
      </main>
    </>
  );
}
