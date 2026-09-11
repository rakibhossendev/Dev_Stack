import { use } from "react"
import type { TechnologiesDataType } from "../../TypeScript/TechnologyDataType"
import TechnologiesCard from "./TechnologiesCard";
import type { AddedStackType } from "../../TypeScript/AddedStackType";


interface TechnologiesDataTypeProps{
    technologiesPromise: Promise<TechnologiesDataType[]>;
    updateStackData: React.Dispatch<React.SetStateAction<AddedStackType[]>>;
    addedStackData: AddedStackType[];
}

export default function Technologies({technologiesPromise,updateStackData,addedStackData}: TechnologiesDataTypeProps){
    const technologiesData = use(technologiesPromise);
    
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-5">
            {technologiesData.map(data => <TechnologiesCard addedStackData={addedStackData} updateStackData={updateStackData} key={data.id} data={data}></TechnologiesCard>)}
          
        </section>
    )
}