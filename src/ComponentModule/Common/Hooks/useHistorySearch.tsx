import { useState, useEffect } from 'react';

const useHistorySearch = () => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const checkPathName = search === ""
      ? window.location.pathname
      : `?search=${search}`;

    window.history.pushState({}, "", checkPathName);
  }, [search]);

  return { search, handleSearchChange };
};

export default useHistorySearch;