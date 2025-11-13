import React, { useState, useMemo } from "react";
import Card from "./ui/Card";
import Button from "./ui/Button";
import useFetch from "../hooks/useFetch";

const POSTS_API = "https://jsonplaceholder.typicode.com/posts";

const ApiDataFetcher = () => {
  const { data: posts, loading, error } = useFetch(POSTS_API);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const filteredPosts = useMemo(() => {
    return posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [posts, search]);

  const totalPages = Math.ceil(filteredPosts.length / pageSize);
  const paginatedPosts = filteredPosts.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <Card className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
        API Data (JSONPlaceholder)
      </h2>

      {/* 🔍 Search Bar */}
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-grow border rounded-l px-3 py-2 focus:outline-none"
        />
        <Button variant="primary" className="rounded-l-none">
          Search
        </Button>
      </div>

      {/* 🔄 Loading and Error States */}
      {loading && <p className="text-center text-blue-500">Loading posts...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* 📋 Data List */}
      {!loading && !error && paginatedPosts.length > 0 && (
        <div className="grid sm:grid-cols-2 gap-4">
          {paginatedPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-50 dark:bg-gray-700 p-4 rounded shadow hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {post.body}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* 🚫 No Results */}
      {!loading && !error && paginatedPosts.length === 0 && (
        <p className="text-center text-gray-500">No posts found.</p>
      )}

      {/* ⏩ Pagination */}
      {!loading && !error && totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          <Button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            variant="secondary"
          >
            Prev
          </Button>
          <span className="px-3 py-2 text-gray-700 dark:text-gray-200">
            Page {page} of {totalPages}
          </span>
          <Button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            variant="secondary"
          >
            Next
          </Button>
        </div>
      )}
    </Card>
  );
};

export default ApiDataFetcher;
