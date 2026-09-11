import { Suspense, useState } from "react";
import type { TechnologiesDataType } from "../../TypeScript/TechnologyDataType"
import Technologies from "./Technologies";
import AddedStackCard from "./AddedCard";
import type { AddedStackType } from "../../TypeScript/AddedStackType";

const technologiesPromise = async (): Promise<TechnologiesDataType[]> => {
    const response = await fetch("./data.json")
    const data: TechnologiesDataType[] = await response.json();
    return data;
}

export default function TechnologiesHome() {
    const [addedStackData,updateStackData] = useState<AddedStackType[]>([]);

    return (
        <section className="mx-auto container">
            <h2 className="text-[#0F172A]  text-3xl sm:text-[36px] font-extrabold text-center sm:text-left">Explore The <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span></h2>
            <p className="text-[#64748B] text-center sm:text-left text-sm sm:text-[16px] mt-2">Pick one technology per category to build your ideal stack.</p>

            <div className="grid  grid-cols-1 sm:grid-cols-[1fr_400px] items-start gap-6">
                <Suspense fallback={<p>Loading....</p>}>
                    <Technologies updateStackData={updateStackData} addedStackData={addedStackData} technologiesPromise={technologiesPromise()}></Technologies>
                </Suspense>

                <AddedStackCard updateStackData={updateStackData} addedStackData={addedStackData}></AddedStackCard>

            </div>

        </section>
    )
}