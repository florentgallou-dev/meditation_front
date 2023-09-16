import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main className={`flex min-h-screen flex-col items-center justify-between p-24 bg-home bg-no-repeat bg-cover`}>
        <h1 className="text-4xl">Mon tout premier site de méditations</h1>
        <p className="text-center">Une nouvelle vision de la spiritualité</p>
      </main>
    </>
  )
}
