import _ from "lodash";

const Paginnation = ({ pages, setPage, activePage }) => {
  const PreviousPage = (prev) => {
    let previous = prev - 1;
    if (previous === 0) {
      previous = pages;
    }

    setPage(previous);
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let newPage = oldPage + 1;
      if (newPage > pages) {
        newPage = 1;
      }
      return newPage;
    });
  };

  return (
    <div>
      <ul className="pagination d-flex justify-content-center mt-5" dir="rtl">
        <li className="page-item" onClick={() => PreviousPage(activePage)}>
          <a href="#" className="page-link">
            قبلی
          </a>
        </li>
        {_.times(pages, (index) => (
          <li
            key={`pagination-` + index}
            className={`page-item ${index + 1 === activePage ? "active" : ""}`}
            onClick={() => setPage(index + 1)}
          >
            <a href="#" className="page-link">
              {index + 1}
            </a>
          </li>
        ))}
        <li className="page-item" onClick={() => nextPage(activePage)}>
          <a href="#" className="page-link">
            بعدی
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Paginnation;
