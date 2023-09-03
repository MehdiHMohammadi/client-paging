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

// const usePaginatedFetch = (url, pageSize) => {
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error(`HTTP Error! Status: ${response.status}`);
//         }

//         const responseData = await response.json();
//         const paginatedData = responseData.slice(0, pageSize);

//         setData(paginatedData);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [url, pageSize]);

//   return [loading, data];
// };

// export default usePaginatedFetch;
