import { useEffect, useState } from "react";
import Image from 'next/image';
import {getPosts} from '../services/Posts';
import { Link } from "react-admin";

interface Post {
  id: number
  title: string
  slug: string
  category: string
}

export default function Posts() {

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts()
      .then(r => r.json())
      .then( data => {
        setPosts(data['hydra:member']);
    });
  }, [])


  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 gap-10`}
    >
      <h1 className='text-4xl'>Posts</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {posts.map(post => (
          <div key={post.id} className="flex flex-col w-1/3 overflow-hidden shadow-md rounded-2xl bg-[#ECE9E6] transition duration-200 ease-in-out hover:scale-105">
            <a href={`post/${post.id}`}>
              <div className="card__header">
                <Image src="/thumb.jpg" alt="card__image" width="600" height="150" className="w-full h-44 block object-cover"/>
              </div>
              <div className="p-4 flex flex-col gap-2">
                <span className="self-start py-1 px-3 rounded-2xl text-xs bg-pink-700 text-white">{post.category}</span>
                <h4 className="text-2xl capitalize text-black">{post.title}</h4>
                <p className="text-base text-black font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </main>
  )
}