import { TiDelete } from "react-icons/ti";
import type { AddedStackType } from "../../TypeScript/AddedStackType"
import { toast } from "react-toastify";

interface AddedStackDataTypeProps {
    addedStackData: AddedStackType[];
    updateStackData: React.Dispatch<React.SetStateAction<AddedStackType[]>>;
}

export default function AddedStackCard({ addedStackData,updateStackData }: AddedStackDataTypeProps) {
    const isData = addedStackData.length > 0;

    const removeData = (data: AddedStackType): void => {
        const exists = addedStackData.find(item => item.id === data.id);
        if(exists){
            const remaining = addedStackData.filter(item => item.id !== data.id);
            updateStackData(remaining);
            toast.info(`${data.name} remove from your stack`)
        }
    }

    const removeAll = (): void => {
        toast.info("Stack Cleared")
        updateStackData([]);
    }

    return (
        <div className="px-4 py-5 bg-[#FFFFFF] border-2 border-[#F1F5F9] rounded-2xl shadow-md h-fit mt-5 sticky top-30 z-40">
            <h2 className="text-xl font-bold text-[#0F172A] p-2">
                Your Stack
            </h2>

            {isData ?
                <p className="text-md text-[#64748B] p-2 ">
                    {addedStackData.length} Technology Selected
                </p>
                :
                <p className="text-md text-[#64748B] p-2"> No Technology Selected</p>
            }

            {
                isData ?
                    <div>
                        {addedStackData.map(data => <AddedCardHero removeData={removeData} data={data}></AddedCardHero>)}
                    </div>
                    :

                    <div className="p-2 mt-3 border-dotted border-[#E2E8F0] border-2 rounded py-10">
                        <p className="text-center text-md text-[#64748B]">Your stack is Empty</p>
                    </div>
            }

            {
                isData ?  <button onClick={removeAll} className="w-full mt-3 border border-red-500  py-3  rounded-lg text-lg cursor-pointer mb-6 font-extrabold text-red-400 hover:bg-red-50">Remove All</button>
                :
                ""
            }

        </div>
    )
}


interface AddedCardHeroProps {
    data: AddedStackType;
    removeData: (data: AddedStackType) => void;
}

export function AddedCardHero({ data,removeData }: AddedCardHeroProps) {
    return (
        <div className="flex items-center justify-between mt-5 p-3 border-2 border-[#F1F5F9] rounded-2xl">

            <div className="flex items-center gap-5">
                <img className="w-10 h-10" src={data.icon} alt={`${data.name} icon`} />
                <div>
                    <h2 className="font-bold">{data.name}</h2>
                    <p className="text-[#64748B]">{data.category}</p>
                </div>
            </div>

            <button onClick={()=> removeData(data)}><TiDelete className="text-[22px] font-bold text-red-500 cursor-pointer" /></button>
        </div>
    )

}