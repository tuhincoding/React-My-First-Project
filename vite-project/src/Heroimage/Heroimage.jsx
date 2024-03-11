import React from 'react'

function Heroimage() {
    const data = [
        {
          imageLink:
            "../../public/assets/image/gallery/1.webp",
        },
        {
          imageLink:
            "../../public/assets/image/gallery/2.webp",
        },
        {
          imageLink:
            "../../public/assets/image/gallery/3.webp",
        },
        {
          imageLink:
            "../../public/assets/image/gallery/4.webp",
        },
        {
          imageLink:
            "../../public/assets/image/gallery/5.webp",
        },
        {
          imageLink:
            "../../public/assets/image/gallery/6.webp",
        },
        {
          imageLink:
            "../../public/assets/image/gallery/7.webp",
        },
        
      ];
      return (
        <>
            <div className='container m-auto'>
                <div class="text-left my-5">
                    <h2 className='font-bold text-2xl'>GALLERY</h2>
                    <p className='text-2xl'>Look at our gallery, and see how beautiful Indonesia is.</p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {data.map(({ imageLink }, index) => (
                    <div key={index}>
                    <img
                        className="h-full w-full max-w-full rounded-lg object-cover object-center  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                        src={imageLink}
                        alt="gallery-photo"
                    />
                    </div>
                    ))}
                </div>
            </div>
        </>
        
      );
    }

export default Heroimage