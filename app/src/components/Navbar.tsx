"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const [input, setInput] = useState("");
  const router = useRouter();

  const searchMovie = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`?movie=${input}`);
    setInput("");
  };

  return (
    <div className="bg-primary pt-4 px-4 md:px-0">
      <div className="container mx-auto flex justify-between items-center py-2">
        <Link href="/">
          <div className="text-[30px] font-medium text-white">Logo</div>
        </Link>

        <form onSubmit={searchMovie} className="flex gap-2">
          <input
            type="text"
            placeholder="Search a Movie..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="px-3 py-2 rounded-md bg-white text-black w-60"
          />
          <button
            type="submit"
            className="bg-white text-black px-4 py-2 rounded-md font-medium"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;