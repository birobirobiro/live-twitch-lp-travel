import ScrollContainer from 'react-indiana-drag-scroll'

function Gallery() {
  return (
    <ScrollContainer className='flex gap-6 pt-8 max-w-full'>
      <div className='relative min-w-[300px] min-h-[300px]'>
        <img className="rounded-lg object-cover w-72 h-72" src="https://source.unsplash.com/random/landscape/?landscape,beach" alt="" />

        <p className='absolute text-xl left-[25%]  mx-auto bottom-10 text-white font-bold'>Lorem ipsum</p>
      </div>

      <div className='relative min-w-[300px] min-h-[300px]'>
        <img className="absolute rounded-lg object-cover w-72 h-72" src="https://source.unsplash.com/random/landscape/?landscape,road-trip" alt="" />

        <p className='absolute text-xl left-[25%]  mx-auto bottom-10 text-white font-bold'>Lorem ipsum</p>
      </div>

      <div className='relative min-w-[300px] min-h-[300px]'>
        <img className="rounded-lg object-cover w-72 h-72" src="https://source.unsplash.com/random/landscape/?landscape,brazil" alt="" />

        <p className='absolute text-xl left-[25%]  mx-auto bottom-10 text-white font-bold'>Lorem ipsum</p>
      </div>

      <div className='relative min-w-[300px] min-h-[300px]'>
        <img className=" rounded-lg object-cover w-72 h-72" src="https://source.unsplash.com/random/landscape/?landscape,travel" alt="" />

        <p className='absolute text-xl left-[25%]  mx-auto bottom-10 text-white font-bold'>Lorem ipsum</p>
      </div>

      <div className='relative min-w-[300px] min-h-[300px]'>
        <img className=" rounded-lg object-cover w-72 h-72" src="https://source.unsplash.com/random/landscape/?landscape,airplane" alt="" />

        <p className='absolute text-xl left-[25%]  mx-auto bottom-10 text-white font-bold'>Lorem ipsum</p>
      </div>

      <div className='relative min-w-[300px] min-h-[300px]'>
        <img className=" rounded-lg object-cover w-72 h-72" src="https://source.unsplash.com/random/landscape/?landscape,desert" alt="" />

        <p className='absolute text-xl left-[25%]  mx-auto bottom-10 text-white font-bold'>Lorem ipsum</p>
      </div>

      <div className='relative min-w-[300px] min-h-[300px]'>
        <img className=" rounded-lg object-cover w-72 h-72" src="https://source.unsplash.com/random/landscape/?landscape,swiss" alt="" />

        <p className='absolute text-xl left-[25%]  mx-auto bottom-10 text-white font-bold'>Lorem ipsum</p>
      </div>

      <div className='relative min-w-[300px] min-h-[300px]'>
        <img className=" rounded-lg object-cover w-72 h-72" src="https://source.unsplash.com/random/landscape/?landscape,paris" alt="" />

        <p className='absolute text-xl left-[25%]  mx-auto bottom-10 text-white font-bold'>Lorem ipsum</p>
      </div>
    </ScrollContainer >
  )
}

export default Gallery