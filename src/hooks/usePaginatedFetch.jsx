import { useEffect, useState } from "react";
import _ from "lodash";

const usePaginatedFetch = (url, pageSize) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();

    const paginatedData = _.chunk(data, pageSize);

    setData([...paginatedData]);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return [loading, data];
};

export default usePaginatedFetch;

// function chunkArray(data, chunkSize) {
//   const chunkedArray = [];
//   for (let i = 0; i < data.length; i += chunkSize) {
//     chunkedArray.push(data.slice(i, i + chunkSize));
//   }
//   return chunkedArray;
// }

// // مثال استفاده:
// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const pageSize =3;
// const paginatedData = chunkArray(data, pageSize);

// console.log(paginatedData); //Array [Array [1, 2, 3], Array [4, 5, 6], Array [7, 8, 9]]
