import "./TopBar.css";
// import React from "react";
// packages import
import { NavLink } from "react-router-dom";

// icons
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";




const TopBar = () => {
  return (
    <div className="topBar">
      <div className="left">
        <ArrowOutwardIcon className="mt-1" /> <span> Payouts </span>
        <span>/</span>
        <button>Single</button>
        <button>Bulk</button>
        <button>Tally</button>
        <button>PayoutLinks</button>
      </div>

      <div className="right">
        <button>
          <AddIcon /> <span> Payout</span> <span> | </span> <ExpandMoreIcon />
        </button>
        <button><SearchIcon /></button>
        <button> <RssFeedIcon /> </button>
        <button> <PersonAddAlt1Icon /> </button>
      </div>
    </div>
  );
};

export default TopBar;
