// import React, { Fragment } from 'react'

import { Fragment, createContext, useContext, useState } from "react";
import "./sidebar.css"





import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import NearMeIcon from "@mui/icons-material/NearMe";
import MarkAsUnreadOutlinedIcon from "@mui/icons-material/MarkAsUnreadOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import ApprovalIcon from '@mui/icons-material/Approval';
// import AddBoxIcon from '@mui/icons-material/AddBox';
import AddIcon from '@mui/icons-material/Add';
import { ChevronFirst, MoreVertical, ChevronLast } from "lucide-react";



const SideBarContext = createContext();

const SideBar = () => {
    return (
        <div>
            <Fragment>
                <SidebarContent>
                    <SideBarItem icon={<HomeOutlinedIcon size={20} />} text="Home" />
                    <SideBarItem icon={<ArrowOutwardIcon size={20} />} text="Payouts" />
                    <SideBarItem icon={<DescriptionOutlinedIcon size={20} />} text="Account Statement" />
                    <SideBarItem icon={<PersonOutlineOutlinedIcon size={20} />} text="Contacts" />
                    <br />
                    <hr />
                    <br />
                    <SideBarItem icon={<ArticleOutlinedIcon size={20} />} text="Vendor Payments" />
                    <SideBarItem icon={<ApprovalIcon size={20} />} text="Tax Payments" />
                    <SideBarItem icon={<NearMeIcon size={20} />} text="Payout Links" />
                    <SideBarItem icon={<MarkAsUnreadOutlinedIcon size={20} />} text="Payroll" />
                    <SideBarItem icon={<BookOutlinedIcon size={20} />} text="Reports" />
                </SidebarContent>

            </Fragment>
        </div>
    )
}


export const SidebarContent = ({ children }) => {

    const [expanded, setExpanded] = useState(false);


    return (
        <Fragment>

            <section className="h-screen absolute">
                <nav className={`h-full sidebar flex flex-col absolute z-10 ${expanded ? "fullColor" : "backColor"} text-color`}>
                    <div className="flex flex-row justify-between m-3">
                        <img src="./images/icon1.png" alt=""
                            className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"
                                }`}
                        />
                        <button onClick={() => setExpanded((curr) => !curr)}>
                            {expanded ? <ChevronLast /> : <ChevronFirst />}
                        </button>
                    </div>


                    {/* // flex 1 to display the list on the whole part of the content  */}
                    <SideBarContext.Provider value={{ expanded }} >
                        <ul className="list flex-1 px-3">
                            {children}
                        </ul>
                    </SideBarContext.Provider>


                    <div className="border-t flex p-3 bottom-0">
                        <img src="./images/icon1.png" alt=""
                            className="w-10 h-10 rounded-lg" />

                        <div className={`flex justify-between items-center 
                                        overflow-hidden transition-all
                            ${expanded ? "w-52 ml-3" : "w-0"}
                        `}>
                            <div className="leading-4">
                                <h4 className="font-semibold">John Doe</h4>
                                <span className="text-xs text-gray-600">johndoe@gmail.com</span>
                            </div>
                            <MoreVertical size={20} />
                        </div>
                    </div>

                </nav>
            </section>
        </Fragment>
    )
}


export const SideBarItem = ({ icon, text }) => {
    const { expanded } = useContext(SideBarContext);
    return (
        <Fragment>
            <li className={`relative flex items-center py-2 px-3 my-1 font-medium
         rounded-md cursor-pointer transition-colors group hovering

     `}>
                {icon}
                <span className={`overflow-hidden transition-all
              ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
                {expanded ? <AddIcon className="sideIcon" /> : ""}

                {/* show when sidebar is not expanded */}
                {!expanded &&
                    <div
                        className={`absolute left-full rounded-md px-2 py-1 ml-6  
          bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -transition-x-3
          transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          `}
                    >
                        {text}
                    </div>}
            </li>
        </Fragment>
    )
}


export default SideBar;
