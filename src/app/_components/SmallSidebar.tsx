import { GrHomeRounded } from "react-icons/gr";
import { PiUsersThree } from "react-icons/pi";
import { LuBookOpen } from "react-icons/lu";
import { PiShoppingBagOpen } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import { FiPlus } from "react-icons/fi";

const SmallSidebar = () => {
    return (
        <div className="bg-white flex flex-col items-center justify-between h-full w-[1.85%] border-r border-t border-[#E8E8E8]">
            <div className="space-y-6 mt-0.5">
                <div className="w-full flex items-center justify-center"><GrHomeRounded size={17} className="mt-[1.35rem] text-[#1D1F24]" /></div>
                <PiUsersThree size={20} className="text-[#1D1F24] hover:text-[#1D1F24] cursor-pointer" />
                <div className="border-t border-[#E9E9E9]"></div>
            </div>

            <div className="space-y-4 mt-auto">
                <div className="border-t border-[#E9E9E9]"></div>
                <div className="space-y-4 flex items-center justify-center flex-col mt-auto">
                    <LuBookOpen size={15} className="text-[#98999B] cursor-pointer" />
                    <PiShoppingBagOpen size={15} className="text-[#98999B] cursor-pointer" />
                    <TbWorld size={15} className="text-[#98999B] cursor-pointer" />
                </div>
                <button className="shadow-[0_0_0_0.5px_#E3E3E3] rounded-sm p-1 text-[#98999B]">
                    <FiPlus />
                </button>
            </div>
        </div>
    )
}

export default SmallSidebar;