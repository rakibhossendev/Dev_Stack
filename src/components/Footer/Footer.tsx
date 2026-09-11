import footerLogo from "../../assets/logo-text.png"

export default function Footer() {

    return (
        <footer>
            <hr className="mt-10 text-[#E5E7EB]" />
            <div className="flex justify-between mt-10 container mx-auto p-4">
                <div className="">
                    <img className="mt-3 mx-auto sm:mx-0 py-3" src={footerLogo} alt="Footer Logo dev stack" />
                    <p className="text-md text-center sm:text-left text-[#64748B] font-semibold text-wrap">
                        Curated tools, technologies, and resources for developers building
                        modern software.
                    </p>

                    <ul className="flex justify-center list-disc sm:list-none sm:justify-start gap-4 py-3">
                        <li><a className="text-md font-semibold text-[#475569] " href="#">GitHub</a></li>
                        <li><a className="text-md font-semibold text-[#475569] " href="#">Twitter</a></li>
                        <li><a className="text-md font-semibold text-[#475569] " href="#">Linkedin</a></li>
                    </ul>

                </div>

                <div className="hidden sm:block">
                    <h2 className="text-[#0F172A] font-bold text-lg mt-2">PRODUCTS</h2>
                    <ul className="mt-3 flex flex-col gap-1">
                        <li><a className="text-md font-semibold text-[#475569] " href="#">Home</a></li>
                        <li><a className="text-md font-semibold text-[#475569] " href="#">Technologies</a></li>
                        <li><a className="text-md font-semibold text-[#475569] " href="#">Projects</a></li>
                    </ul>
                </div>

                <div className="hidden sm:block">
                    <h2 className="text-[#0F172A] font-bold text-lg mt-2">COMPANY</h2>
                    <ul className="mt-3 flex flex-col gap-1">
                        <li><a className="text-md font-semibold text-[#475569]" href="#">About</a></li>
                        <li><a className="text-md font-semibold text-[#475569]" href="#">Contact</a></li>
                        <li><a className="text-md font-semibold text-[#475569]" href="#">Careers</a></li>
                    </ul>
                </div>

                <div className="hidden sm:block">
                    <h2 className="text-[#0F172A] font-bold text-lg mt-2">LEGAL</h2>
                    <ul className="mt-3 flex flex-col gap-1">
                        <li><a className="text-md font-semibold text-[#475569]" href="#">Privacy Policy</a></li>
                        <li><a className="text-md font-semibold text-[#475569]" href="#">Terms of Service</a></li>
                    </ul>

                </div>

            </div>

        <hr className="text-[#E5E7EB]" />
        <div className="flex justify-between p-4 px-8 container mx-auto">
            <p className="text-[#94A3B8]">© 2026 Dev Stack. All rights reserved.</p>

            <ul className="flex gap-4">
                <li><a className="text-[#94A3B8] text-sm" href="#">Privacy</a></li>
                <li><a className="text-[#94A3B8] text-sm" href="#">Terms</a></li>
            </ul>
        </div>

        </footer>

    )
}