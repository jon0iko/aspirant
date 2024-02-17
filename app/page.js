import Image from "next/image";

export default function Home() {
  return (
    <div className='w-screen h-screen bg-black flex justify-center items-center text-white'>
      <div className='w-full max-w-[600px] mx-auto'>
        <h1 className='text-7xl mb-4'>Aspirant</h1>
        <p className='text-2xl text-white/60 mb-4'>Discover your potential. Find your perfect path.
</p>
        <div>
          <a href='/journal'>
          <button className='bg-red-500 px-4 py-2 mr-4 rounded-lg text-xl'>Get Recommendation</button>
          <button className='bg-red-500 px-4 py-2 rounded-lg text-xl'>View Subjects</button>
          </a>
        </div>
      </div>
    </div>
  );
}
