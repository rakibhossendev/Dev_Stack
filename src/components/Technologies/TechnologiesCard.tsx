import { CiStar } from "react-icons/ci"
import type { TechnologiesDataType } from "../../TypeScript/TechnologyDataType"

interface TechnologiesDataProp{
    data: TechnologiesDataType
}

export default function TechnologiesCard({data}: TechnologiesDataProp){

    return (
        <div className="border-2 px-4 bg-[#FFFFFF] border-[#F1F5F9] rounded-2xl shadow-sm hover:shadow-lg transition-y-1 duration-100 ease-in-out">
            <div className="flex justify-between p-3">
                <img className="w-7 h-7" src={data.icon}  alt={`${data.name} icon`} />
                <h3 className="font-semibold text-xs p-2 border rounded-2xl" style={{color: data.color, backgroundColor: `${data.color}30`}}>{data.badge}</h3>
            </div>

            <div className="p-3">
                <h1 className="font-bold text-[#0F172A] text-xl">{data.name}</h1>
                <p className="mt-3 text-[#64748B] text-sm">{data.description}</p>
                <hr className="mt-3 text-[#F1F5F9]" />
            </div>

            <div className="p-3 flex justify-between">
                <p className="font-semibold p-1 text-[#475569] bg-[#F1F5F9] rounded text-xs">{data.category}</p>
                <p className="text-[#64748B] p-1 font-semibold text-xs"> {data.difficulty}</p>
                <p className="text-xs font-semibold text-[#334155]"><CiStar className="text-[#FBBF24] w-3 h-3 inline m-1"/>{data.rating}</p>
            </div>

            <div className="p-3 flex justify-center">

                <button className="px-10 w-[90%] bg-[#0A0F1D] py-2 text-white rounded-lg text-sm cursor-pointer">Add To Stack</button>
            </div>


        </div>
    )
}