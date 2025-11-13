export const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) throw new Error("Failed to fetch posts");
    return res.json();
  };  

export const fetchStudents = async () => {
    // mock API
    return [
      { id: 1, name: "Alice", course: "Computer Science" },
      { id: 2, name: "Bob", course: "Information Technology" },
    ];
  };
  