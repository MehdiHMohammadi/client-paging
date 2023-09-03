import { useEffect, useState } from "react";
import _ from "lodash";

const usePaginatedFetch = (url, pageSize) => {
  const [loding, setLoding] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();

    const paginatedData = _.chunk(data, pageSize);
    // console.log(paginatedData);

    setData([...paginatedData]);
    setLoding(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return [loding, data];
};

export default usePaginatedFetch;
