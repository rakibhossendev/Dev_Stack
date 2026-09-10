import { use } from "react"
import type { TechnologiesDataType } from "../../TypeScript/TechnologyDataType"
import TechnologiesCard from "./TechnologiesCard";

interface TechnologiesDataTypeProps{
    technologiesPromise: Promise<TechnologiesDataType[]>;
}

export default function Technologies({technologiesPromise}: TechnologiesDataTypeProps){
    const technologiesData = use(technologiesPromise);
    
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {technologiesData.map(data => <TechnologiesCard key={data.id} data={data}></TechnologiesCard>)}

        </section>
    )
}