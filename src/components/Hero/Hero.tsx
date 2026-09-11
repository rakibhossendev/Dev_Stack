import heroImage from "../../assets/banner-stack.png"

export default function HeroSection() {

    return (
        <section className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8 md:gap-4 justify-between items-center">

                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl sm:text-[48px] md:text-[60px] font-bold leading-tight mx-w-2xl">Build Your Ideal <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent"><br />Development Stack</span></h1>
                    <p className="text-md font-semibold sm:text-lg text-[#475569] mt-4 leading-relaxed">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that
                        fits your next project.
                    </p>

                    <div className="mt-4 flex gap-3">
                        <button className="px-5 py-3 text-base font-bold cursor-pointer rounded text-white bg-gradient-to-r from-[#FF5722] to-[#7C3AED]">
                            Explore Technologies
                        </button>
                        <button className="px-5 py-3 text-base font-bold cursor-pointer rounded border-2 border-[#E5E7EB] text-[#374151] hover:bg-[#fafafa]">
                            Learn More
                        </button>
                    </div>
                </div>

                <img src={heroImage} alt="Hero Banner Image" />

            </div>
        </section>
    )
}