import {useEffect, useState} from 'react';
import { useRouter } from "next/router";
import { getPost } from '../../services/Posts';

export default function DynamicPage () {

    const router = useRouter()
    const {
        query: { id },
    } = router

    const [post, setPost] = useState([]);
    useEffect(() => {
        if (id) {
            getPost(id)
                .then(r => r.json())
                .then( data => {
                    setPost(data);
                });
        }
    }, [id]);

    function UnsafeComponent({ html }) {
        return <div dangerouslySetInnerHTML={{ __html: html }} />;
      }

  return (
    <main
      className={`flex min-h-screen bg-white flex-col items-center p-24 gap-10`}
    >
        <h1 className='text-4xl text-black'>{post.title}</h1>
        <div className="flex flex-wrap justify-center gap-8">
            <span className="self-start py-1 px-3 rounded-2xl text-xs bg-pink-700 text-white">{post.category}</span>
            <h4 className="text-2xl capitalize text-black">{post.publishedAtFr}</h4>
            <div className="article" dangerouslySetInnerHTML={{ __html: post.content }} ></div>
        </div>
    </main>
  )
}