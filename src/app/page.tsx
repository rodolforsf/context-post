"use client"

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PostList } from "@/components/PostList";
import { PostProvider } from "@/constexts/PostContext";

const Page = () => {
  return (
    <PostProvider>
      <div className="conatiner mx-auto">
        <Header />
        <PostList />
        <Footer />
      </div>
    </PostProvider>
  );
}

export default Page;