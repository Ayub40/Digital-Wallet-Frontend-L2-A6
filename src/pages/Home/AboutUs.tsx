import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import { useState } from "react";

const tabs = ["About Us", "Our Vision", "Our Mission"];

// Hardcoded data for Digital Wallet
const aboutData = [
    {
        title: "WELCOME TO TOMI WALLET",
        subTitle: "Secure & Fast Digital Transactions",
        description:
            "Tomi Wallet is your trusted digital wallet, providing seamless payments, transfers, and top-ups instantly.",
        smallTitleOne: "Instant Transfer",
        smallDescriptionOne: "Send and receive money in seconds anywhere in Bangladesh.",
        logoOne: "https://via.placeholder.com/32x32.png?text=T",
        smallTitleTwo: "Secure Payments",
        smallDescriptionTwo: "Bank-level security for all your transactions.",
        logoTwo: "https://via.placeholder.com/32x32.png?text=S",
    },
    {
        title: "TOMI WALLET VISION",
        subTitle: "Financial Inclusion for Everyone",
        description:
            "Our vision is to empower every individual with access to easy, safe, and convenient financial services through digital innovation.",
        smallTitleOne: "Accessible",
        smallDescriptionOne: "Available for everyone, anytime, anywhere.",
        logoOne: "https://via.placeholder.com/32x32.png?text=A",
        smallTitleTwo: "Reliable",
        smallDescriptionTwo: "Always secure and trustworthy transactions.",
        logoTwo: "https://via.placeholder.com/32x32.png?text=R",
    },
    {
        title: "TOMI WALLET MISSION",
        subTitle: "Simplifying Digital Finance",
        description:
            "Our mission is to simplify financial transactions for individuals and businesses, making money management effortless and efficient.",
        smallTitleOne: "Fast",
        smallDescriptionOne: "Speedy transactions for all wallet operations.",
        logoOne: "https://via.placeholder.com/32x32.png?text=F",
        smallTitleTwo: "Smart",
        smallDescriptionTwo: "Intelligent features for smooth financial control.",
        logoTwo: "https://via.placeholder.com/32x32.png?text=S",
    },
];

const AboutUsTab = () => {
    const [selected, setSelected] = useState(tabs[0]);
    const selectedData = aboutData.find(
        (item) => item.title === {
            "About Us": "WELCOME TO TOMI WALLET",
            "Our Vision": "TOMI WALLET VISION",
            "Our Mission": "TOMI WALLET MISSION",
        }[selected]
    );

    return (
        <div className="flex flex-col md:flex-row gap-10 mx-auto container max-w-7xl">
            {/* Left side images */}
            <div className="relative w-full md:w-[620px] h-[550px]">
                <img
                    className="mt-3 ml-1 outline outline-2 outline-[#DDE1E7] rounded-tr-[60px] rounded-bl-[60px] w-[294px] h-[371px]"
                    src="https://via.placeholder.com/294x371.png?text=Wallet+Image+1"
                    alt="Wallet Image 1"
                />
                <div className="flex gap-3 h-[110px] w-[290px] border border-[#07A698] bg-[#24A7BC] rounded-tr-[60px] rounded-bl-[60px] mt-12 place-content-center place-items-center">
                    <div className="h-12 w-12 bg-white rounded-full p-3 place-content-center">
                        <PhoneCall className="h-[20px] w-[20px] text-[#07A698]" />
                    </div>
                    <div>
                        <h3 className="text-white text-sm font-medium">24/7 Support</h3>
                        <p className="text-white text-2xl font-semibold">+880 1234 567 890</p>
                    </div>
                </div>
                <img
                    className="absolute bottom-7 right-5 w-[294px] h-[371px] rounded-tl-[60px] rounded-br-[60px] outline outline-2 outline-[#DDE1E7]"
                    src="https://via.placeholder.com/294x371.png?text=Wallet+Image+2"
                    alt="Wallet Image 2"
                />
            </div>

            {/* Right side tabs */}
            <div className="flex-1 h-[600px] p-4 space-y-5">
                {/* Tabs */}
                <div className="flex flex-wrap gap-8 mb-5">
                    {tabs.map((tab) => (
                        <Chip
                            key={tab}
                            text={tab}
                            selected={selected === tab}
                            setSelected={setSelected}
                        />
                    ))}
                </div>

                {/* Tab content */}
                {selectedData ? (
                    <div className="space-y-4">
                        <h1 className="text-[#8C8B8B] text-lg">{selectedData.title}</h1>
                        <h2 className="text-4xl font-bold text-[#011C1A]">{selectedData.subTitle}</h2>
                        <p className="mt-4 text-[#8C8B8B]">{selectedData.description}</p>

                        <div className="mt-6 flex flex-col md:flex-row gap-8">
                            <FeatureCard
                                bg="#FCEEEE"
                                logo={selectedData.logoOne}
                                title={selectedData.smallTitleOne}
                                desc={selectedData.smallDescriptionOne}
                            />
                            <FeatureCard
                                bg="#F2F9F4"
                                logo={selectedData.logoTwo}
                                title={selectedData.smallTitleTwo}
                                desc={selectedData.smallDescriptionTwo}
                            />
                        </div>
                    </div>
                ) : (
                    <p className="text-red-600">No data available</p>
                )}
            </div>
        </div>
    );
};

const Chip = ({
    text,
    selected,
    setSelected,
}: {
    text: string;
    selected: boolean;
    setSelected: (tab: string) => void;
}) => {
    return (
        <div
            onClick={() => setSelected(text)}
            className={`relative cursor-pointer text-lg border-b-2 py-3 px-6 transition-colors ${selected
                    ? "text-[#07A698] font-bold border-[#07A698]"
                    : "text-[#07A698] hover:text-[#2AA9BD] border-transparent"
                }`}
        >
            <span className="relative z-10">{text}</span>
            {selected && (
                <motion.span
                    transition={{ type: "spring", duration: 0.8 }}
                    className="absolute inset-0 z-0 rounded-md"
                ></motion.span>
            )}
        </div>
    );
};

const FeatureCard = ({
    bg,
    logo,
    title,
    desc,
}: {
    bg: string;
    logo: string;
    title: string;
    desc: string;
}) => {
    return (
        <div className="flex flex-col space-y-3">
            <div
                className="w-[60px] h-[60px] rounded-full grid place-content-center"
                style={{ backgroundColor: bg }}
            >
                <img src={logo} alt={title} className="w-8 h-8" />
            </div>
            <h3 className="mt-2 text-xl font-bold">{title}</h3>
            <p className="text-sm text-[#8C8B8B]">{desc}</p>
        </div>
    );
};

export default AboutUsTab;
