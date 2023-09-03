import { useState, useEffect } from "react";
import usePaginatedFetch from "./hooks/usePaginatedFetch";
import Card from "./components/card";
import Paginnation from "./components/pagination.jsx";

const url =
  "https://react-mini-projects-api.classbon.com/Programmer/programmers";

function App() {
  const [loading, data] = usePaginatedFetch(url, 3);
  const [page, setPage] = useState(1);
  const [programmers, setProgrammers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setProgrammers(data[page - 1]);
  }, [data, loading, page]);

  return (
    <>
      <div className="container pt-5">
        {loading && (
          <div className="d-flex justify-content-center">
            <div className="spinner-border"></div>
          </div>
        )}
      </div>
      {!loading && (
        <div className="row d-flex justify-content-center ">
          {programmers.map(({ id, ...programmer }) => {
            return (
              <div className="col-3" key={id}>
                {/* <Card programmer={programmer} /> */}
                <Card {...programmer} />
              </div>
            );
          })}
        </div>
      )}
      <div className="row">
        <Paginnation pages={data.length} setPage={setPage} activePage={page} />
      </div>
    </>
  );
}

export default App;
