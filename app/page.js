"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [search,setSearch]=useState(false)
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/posts");
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);
  const inputRef = useRef();

  const searchPost = async (e) => {
    if (e.type == 'keydown' && e.key !== 'Enter') {
      return;
  }
    try {
      setSearch(true);
      const searchPosts = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/posts?q=" + inputRef.current.value
      );
      const searchData = await searchPosts.json();
      setPosts(searchData);
    } catch (error) {
      console.log(error.message);
    } finally {
      setSearch(false)
    }
  };
  return (
    <div>
      <main className="container mx-auto px-4 py-6">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Blog</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </main>

      <div className="flex justify-end px-4">
        <input
          type="text"
          onKeyDown={searchPost} 
          disabled={search}
          ref={inputRef}
          className="px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Search..."
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md ml-4" disabled={search}
          onClick={searchPost}
        >
          {search?'...':'Search'}
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.isArray(posts) && posts.map((post) => (
          <Link href={"/post/" + post._id} key={post._id}>
            <div>
              <div className="border border-gray-200 p-4">
                <img
                  className="w-full h-48 object-cover mb-4"
                  src={post.imageUrl}
                  alt="Post Image"
                />
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600">{post.shortDescription}</p>
              </div>
            </div>
          </Link>
        ))}
        
      </div>
      
    </div>
  );
}