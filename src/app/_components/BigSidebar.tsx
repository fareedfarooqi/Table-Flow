import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { LuBookOpen } from "react-icons/lu";
import { PiShoppingBagOpen } from "react-icons/pi";
import { TfiExport } from "react-icons/tfi";

const BigSidebar = () => {
    return (
        <div className="bg-white flex flex-col items-center justify-between h-full w-[11.85%] border-r border-t border-[#E8E8E8] shadow-lg">
            <div className="flex items-center justify-center flex-col w-full p-3">
                <button className="text-sm flex items-center justify-between text-[#1D1F24] font-medium hover:bg-[#F2F4F8] rounded-sm cursor-pointer p-3 w-full">
                    Home
                    <MdOutlineKeyboardArrowRight size={25} className="text-[#919397] hover:bg-[#E8E9ED] rounded-sm p-1" />
                </button>
                <button className="text-sm flex items-center justify-between mt-1 text-[#1D1F24] font-medium hover:bg-[#F2F4F8] rounded-sm cursor-pointer p-3 w-full">
                    All Workspaces
                    <div className="flex items-center justify-center gap-1">
                        <FiPlus size={25} className="text-[#919397] hover:bg-[#E8E9ED] rounded-sm p-1" />
                        <MdOutlineKeyboardArrowRight size={25} className="text-[#919397] hover:bg-[#E8E9ED] rounded-sm p-1" />
                    </div>
                </button>
            </div>
            
            <div className="space-y-4 w-full p-3">
                <div className="border-t border-[#E9E9E9]"></div>
                <button className="flex items-center justify-start text-[#1D1F24] font-medium hover:bg-[#F2F4F8] rounded-sm cursor-pointer w-full p-2">
                    <LuBookOpen className="text-[#1D1F24] mr-[5px] mt-1" />Templates and apps
                </button>

                <button className="flex items-center justify-start text-[#1D1F24] font-medium hover:bg-[#F2F4F8] rounded-sm cursor-pointer w-full p-2">
                    <PiShoppingBagOpen className="text-[#1D1F24] mr-[5px]" />Marketplace
                </button>

                <button className="flex items-center justify-start text-[#1D1F24] font-medium hover:bg-[#F2F4F8] rounded-sm cursor-pointer w-full p-2">
                    <TfiExport className="text-[#1D1F24] mr-[5px]" />Marketplace
                </button>
                
                <button className="bg-[#156FE0] p-1 gap-2 rounded-md cursor-pointer text-white w-full flex items-center justify-center">
                    <FiPlus />Create
                </button>
            </div>
        </div>
    )
}

export default BigSidebar;