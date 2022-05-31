import { useEffect, useState } from "react";

const useFind = (url, token) => {
  const controller = new AbortController();
  const signal = controller.signal;
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          signal,
        });
        if (!res.ok) {
          throw Error("Cannot be reach the server");
        }
        const data = await res.json();
        setdata(data);
        setloading(false);
        seterror(null);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log();
        } else {
          setloading(false);
          seterror(err.message);
        }
      }
    };
    fetchData();
    return () => controller.abort();
  }, [url]);
  return { data, loading, error, setdata };
};

export default useFind;
