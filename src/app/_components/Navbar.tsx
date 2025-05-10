import { redirect } from "next/navigation";
import { auth } from "~/server/auth";
import { HydrateClient } from "~/trpc/server";
import { FiSearch } from "react-icons/fi";
import { TbMenu2 } from "react-icons/tb";
import { TbHelp } from "react-icons/tb";
import { PiBell } from "react-icons/pi";

const getColorFromName = (name: string | null | undefined) => {
    if (!name) {
        return;
    }

    const colors = [
        "bg-pink-500",
        "bg-green-500",
        "bg-blue-500",
        "bg-yellow-500",
        "bg-purple-500",
        "bg-red-500",
        "bg-indigo-500",
    ];

    let hash = 0;

    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }

    const index = Math.abs(hash) % colors.length;

    return colors[index];
}

const Navbar = async () => {
    const session = await auth();

    if (!session) {
        redirect("/login");
    }
    const bgColor = getColorFromName(session?.user?.name);

    const initial = session?.user?.name?.charAt(0).toUpperCase();

    return (
        <HydrateClient>
            <div className="bg-white px-3 py-3 shadow flex items-center justify-between">
                <div className="flex items-center gap-5">
                    <TbMenu2 size={20} className="text-[#B2B3B5] hover:text-[#1D1F24] cursor-pointer" />
                    <img src="/airtable-full-inline.svg" alt="" className="w-25 cursor-pointer" />
                </div>

                <div className="flex items-center justify-between w-[14%] px-4 py-2 bg-white border border-gray-200 shadow-sm rounded-full cursor-pointer hover:shadow-md">
                    <div className="flex items-center space-x-2 text-gray-500 cursor-pointer">
                    <FiSearch size={12} className="text-black" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="outline-none border-none bg-transparent placeholder-gray-500 text-[0.75rem]"
                    />
                    </div>
                    <div className="hidden sm:flex items-center space-x-1 text-gray-400 text-[0.8rem] font-medium">
                        <span>⌘ K</span>
                    </div>
                </div>

                <div className="flex items-center justify-center space-x-4">
                    <button className="flex items-center justify-center gap-1 hover:bg-[#E8E8E8] px-3 py-1 rounded-3xl text-sm cursor-pointer">
                        <TbHelp />
                        Help
                    </button>

                    <button className="rounded-3xl hover:bg-[#F5F5F5] p-2 shadow-[0_0_0_0.5px_#DADCE0] cursor-pointer">
                        <PiBell />
                    </button>

                    {session?.user?.name && (
                        <div
                            className={`
                                w-8 h-8 
                                ${bgColor} 
                                rounded-full 
                                flex items-center justify-center 
                                text-white font-semibold text-sm 
                                border-1 border-white 
                                shadow-[0_0_0_1px_rgba(0,0,0,0.08)]
                                cursor-pointer
                            `}
                        >
                            {initial}
                        </div>
                    )}


                    
                </div>
            </div>
        </HydrateClient>
    );
}

export default Navbar;