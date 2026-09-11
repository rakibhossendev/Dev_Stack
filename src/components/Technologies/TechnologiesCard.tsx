import { CiStar } from "react-icons/ci"
import type { TechnologiesDataType } from "../../TypeScript/TechnologyDataType"
import { toast } from "react-toastify";
import type { AddedStackType } from "../../TypeScript/AddedStackType";


interface TechnologiesDataProp{
    data: TechnologiesDataType;
    updateStackData: React.Dispatch<React.SetStateAction<AddedStackType[]>>;
    addedStackData: AddedStackType[];
}

export default function TechnologiesCard({data,updateStackData,addedStackData}: TechnologiesDataProp){
    const isAdded = addedStackData.some(item=> item.id === data.id)

    const handleAddToStack = (): void => {
        toast.success(`${data.name} added to your stack`)
        const newStack = [...addedStackData,{id: data.id,name: data.name, category: data.category,icon: data.icon}];
        updateStackData(newStack);
    }

    return (
        <div className={`border-2 px-3 bg-[#FFFFFF] ${isAdded ? "border-[#DB2777]":"border-[#F1F5F9]"} h-fit rounded-2xl shadow-sm hover:shadow-lg transition-y-1 duration-100 ease-in-out`}>
            
            <div className="flex justify-between p-3 mt-3">
                <img className="w-10 h-10" src={data.icon}  alt={`${data.name} icon`} />
                <h3 className="font-semibold text-md p-2 border rounded-2xl" style={{color: data.color, backgroundColor: `${data.color}30`}}>{data.badge}</h3>
            </div>

            <div className="p-3">
                <h1 className="font-bold text-[#0F172A] text-lg">{data.name}</h1>
                <p className="mt-3 text-[#64748B] text-lg">{data.description}</p>
                <hr className="mt-3 text-[#F1F5F9]" />
            </div>

            <div className="p-3 flex justify-between mt-6">
                <p className="font-semibold p-1 text-[#475569] bg-[#F1F5F9] rounded text-md">{data.category}</p>
                <p className="text-[#64748B] p-1 font-semibold text-md"> {data.difficulty}</p>
                <p className="text-md font-semibold text-[#334155]"><CiStar className="text-[#FBBF24] w-3 h-3 inline m-1"/>{data.rating}</p>
            </div>

            <div className="p-3 flex justify-center">
               {isAdded ? <h1 className="text-lg font-bold cursor-not-allowed mb-6 text-[#DB2777] bg-[#fcecf3] py-3 w-[90%] text-center rounded">✓ Added to Stack</h1> : <button onClick={handleAddToStack} className="w-full bg-[#0A0F1D] py-3 text-white rounded-lg text-lg cursor-pointer mb-6 font-extrabold hover:bg-[#1e2129]">Add To Stack</button>} 
            </div>


        </div>
    )
}