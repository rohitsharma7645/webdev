import { useEffect, useState } from "react";
import Fuse from "fuse.js";
import students from "./Students";

function App() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [results, setResults] = useState(students);
  const [searchCount, setSearchCount] = useState(0);

  // -------------------------
  // 1. DEBOUNCING
  // -------------------------
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 700);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  // -------------------------
  // 2. FUZZY SEARCH
  // -------------------------
  useEffect(() => {
    if (debouncedSearch.trim() === "") {
      setResults(students);
      return;
    }

    const fuse = new Fuse(students, {
      keys: ["name"],
      threshold: 0.4,
    });

    const fuzzyResults = fuse.search(debouncedSearch);

    const finalResults = fuzzyResults.map((result) => result.item);

    setResults(finalResults);

    setSearchCount((count) => count + 1);
  }, [debouncedSearch]);

  return (
    <div className="container">
      <h1>Student Search</h1>

      <p>Total Students: {students.length}</p>

      <input
        type="text"
        placeholder="Search student name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="info">
        <p>
          Typing: <strong>{search}</strong>
        </p>

        <p>
          Debounced Value: <strong>{debouncedSearch}</strong>
        </p>

        <p>
          Actual Searches: <strong>{searchCount}</strong>
        </p>
      </div>

      <h2>Results: {results.length}</h2>

      {results.length === 0 ? (
        <p>No student found</p>
      ) : (
        results.map((student) => (
          <div className="student" key={student.id}>
            <span>{student.id}</span>
            <strong>{student.name}</strong>
          </div>
        ))
      )}
    </div>
  );
}

export default App;