// import React from 'react'
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import NearMeIcon from "@mui/icons-material/NearMe";
import MarkAsUnreadOutlinedIcon from "@mui/icons-material/MarkAsUnreadOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import ApprovalIcon from '@mui/icons-material/Approval';

const SidebarOpen = () => {
    return (
        <div>
            <nav className="navbar">
                {/* <img src="./images/logo1.png" alt="" /> */}
                <img src="./images/icon1.png" alt="" />
                <div>
                    <ul>
                        <li> <HomeOutlinedIcon /></li>
                        <li> <ArrowOutwardIcon /> </li>
                        <li> <DescriptionOutlinedIcon /> </li>
                        <li> <PersonOutlineOutlinedIcon /> </li>
                    </ul>
                </div>
                <br /> <br />
                <hr />
                <br /> <br />
                <div>
                    <ul>
                        <li> <ArticleOutlinedIcon /> </li>
                        <li> <ApprovalIcon /></li>
                        <li> <NearMeIcon /> </li>
                        <li> <MarkAsUnreadOutlinedIcon /></li>
                        <li> <BookOutlinedIcon /> </li>
                    </ul>
                </div>

            </nav>
        </div>
    )
}

export default SidebarOpen;
