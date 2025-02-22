import { useEffect, useLayoutEffect, useState } from "react";
import Navbar from "../../component/Navbar";
import API from "../../component/API";

export default function EvertaleStoryList() {
  const [dataChar, setDataChar] = useState();

  useLayoutEffect(() => {
    document.title = "Game Lingo - Story List";
  }, []);

  useEffect(() => {
    API("Evertale Story Info").then((res) => setDataChar(res));
  }, []);

  return (
    <>
      <Navbar />
      <h1 className="text-center">Evertale Story List</h1>
      <div className="container-fluid d-flex flex-row justify-content-around flex-wrap px-5 mt-4">
        {dataChar?.map((data) => (
          <div key={data.id} id={data.id} className="card w-20 my-2 mx-3 p-1">
            <a href={data.url}>
              <img src={data.images[0].url} className="card-img-top" alt={data.title} />
              <div className="card-body">
                <p className="card-text text-primary text-center fw-bolder">{data.title}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
