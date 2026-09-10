import { Suspense } from "react";
import type { TechnologiesDataType } from "../../TypeScript/TechnologyDataType"
import Technologies from "./Technologies";

const technologiesPromise = async ():Promise<TechnologiesDataType[]> => {
    const response = await fetch("./data.json")
    const data: TechnologiesDataType[] = await response.json();
    return data;
}

export default function TechnologiesHome() {

    return (
        <section className="mx-auto container">
            <h2 className="text-[#0F172A] text-[36px] font-extrabold ">Explore The <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span></h2>
            <p className="text-[#64748B] text-[16px] mt-2">Pick one technology per category to build your ideal stack.</p>

            <Suspense fallback={<p>Loading....</p>}>
                <Technologies technologiesPromise={technologiesPromise()}></Technologies>
            </Suspense>
        </section>
    )
}