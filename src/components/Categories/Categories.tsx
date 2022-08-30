import ScrollContainer from 'react-indiana-drag-scroll'
import { GiMountainCave, GiPisaTower, GiForestCamp, GiCampingTent, GiPalmTree } from 'react-icons/gi'
import { TbBeach, TbBuildingCastle } from 'react-icons/tb'
import { RiCactusLine } from "react-icons/ri";
import { MdOutlineHouseboat } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";

function Categories() {
  return (
    <div>
      <h2 className="text-4xl font-bold text-white pb-8">Top categories</h2>

      <ScrollContainer className="flex gap-11 justify-between bg-background-categories p-3 rounded-xl">
        <div className="flex flex-col items-center">
          <a href="#" className='pb-4'>
            <TbBeach size={32} className="hover:stroke-white stroke-gray-400" />

          </a>

          <span className="text-gray-400 hover:text-white">Beachs</span>
        </div>

        <div className="flex flex-col items-center">
          <a href="#" className='pb-4'>
            <RiCactusLine size={32} className="hover:fill-white fill-gray-400" />
          </a>

          <span className="text-gray-400 hover:text-white">Deserts</span>
        </div>

        <div className="flex flex-col items-center">
          <a href="#" className='pb-4'>
            <GiMountainCave size={32} className="hover:fill-white fill-gray-400 " />
          </a>

          <span className="text-gray-400 hover:text-white">Mountains</span>
        </div>

        <div className="flex flex-col items-center">
          <a href="#" className='pb-4'>
            <GiPisaTower size={32} className="hover:fill-white fill-gray-400 " />
          </a>

          <span className="text-gray-400 hover:text-white">Iconic Cities</span>
        </div>

        <div className="flex flex-col items-center">
          <a href="#" className='pb-4'>
            <MdOutlineHouseboat size={32} className="hover:fill-white fill-gray-400 " />
          </a>

          <span className="text-gray-400 hover:text-white">Houseboats</span>
        </div>

        <div className="flex flex-col items-center">
          <a href="#" className='pb-4'>
            <GiForestCamp size={32} className="hover:fill-white fill-gray-400 " />
          </a>

          <span className="text-gray-400 hover:text-white">Countryside</span>
        </div>

        <div className="flex flex-col items-center">
          <a href="#" className='pb-4'>
            <GiCampingTent size={32} className="hover:fill-white fill-gray-400 " />
          </a>

          <span className="text-gray-400 hover:text-white">Camping</span>
        </div>

        <div className="flex flex-col items-center">
          <a href="#" className='pb-4'>
            <TbBuildingCastle size={32} className="hover:fill-white fill-gray-400 " />
          </a>

          <span className="text-gray-400 hover:text-white">Castles</span>
        </div>

        <div className="flex flex-col items-center">
          <a href="#" className='pb-4'>
            <FaSkiing size={32} className="hover:fill-white fill-gray-400 " />
          </a>

          <span className="text-gray-400 hover:text-white">Skiing</span>
        </div>

        <div className="flex flex-col items-center">
          <a href="#" className='pb-4'>
            <GiPalmTree size={32} className="hover:fill-white fill-gray-400 " />
          </a>

          <span className="text-gray-400 hover:text-white">Tropical</span>
        </div>
      </ScrollContainer>
    </div>
  )
}

export default Categories