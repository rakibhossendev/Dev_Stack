import heroImage from "../../assets/banner-stack.png"

export default function HeroSection() {

    return (
        <section className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row  justify-between items-center">

                <div>
                    <h1 className="text-[60px] sm:text-[48px] md:text-[60px] font-bold">Build Your Ideal <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent"><br/>Development Stack</span></h1>

                    <p className="text-[18px] sm:[18px] text-[#475569] mt-4 leading-relaxed">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that
                        fits your next project.
                    </p>

                    <div className="mt-3">
                        <button className="p-2 cursor-pointer rounded text-white bg-gradient-to-r from-[#FF5722] to-[#7C3AED] ">Explore Technologies</button>
                        <button className="px-10 cursor-pointer p-2 rounded border-2 border-[#E5E7EB] text-[#374151] mx-3 hover:bg-[#feb8a2]">Learn More</button>
                    </div>
                </div>

                <img src={heroImage} alt="Hero Banner Image" />

            </div>
        </section>
    )
}