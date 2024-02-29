import { Fragment } from "react";
import "./table.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RefreshIcon from "@mui/icons-material/Refresh";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpIcon from '@mui/icons-material/Help';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';




// idiot table header <th> width will define the space cover by each element under that row , no flex needed , 
// the table data is filled row wise so every new data is in format of row , what a silly and stupid mistake 
// if every new user is filled its data in every column then it will be right formant , not when every new user data has 
// to be filled in every column table , with the use of header , or all the one type of data in one table body , table row ,
// fix it

// ok total width rows are 12


// import { createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "rgb(65, 163, 255)",
//     },
//     // secondary: {
//     //   main: '#f44336',
//     // },
//   },
// });

const Table = () => {
  return (
    <Fragment>
      <div className="section">
        <div className="impMess">
          These are test payouts and do not affect the actual balance. They are
          used only for the purpose of integration events.
          <a href="#">Learn More!</a>
        </div>

        <div className="top">
          <div className="left">
            <input type="checkbox" /><span>Showing 1-5 Payouts</span>
            <span> <FiberManualRecordIcon /> Sort By: </span>
            <select name="sorting" id="sorting">
              <option value="1">latest creation date</option>
              <option value="2">oldest creation date</option>
              <option value="3">highest amount to lowest amount</option>
              <option value="4">lowest to highest amount</option>
            </select>
          </div>

          <div className="right">
            <button> <RefreshIcon color="primary" /></button>
            <button>  <MoreVertIcon />  </button>
            <button className="expBtn">
              <FileDownloadIcon /> Export
            </button>
            <button className="payBtn">
              <AddIcon /> <span> Payout</span> <span> | </span>
              <ExpandMoreIcon />
              {/* <select name="payoutOps" id="payoutOps">
                <ExpandMoreIcon/>
                <option value="1">Credit/debit</option>
                <option value="2">Upi</option>
              </select> */}
            </button>
            <button></button>
          </div>
        </div>
        <hr style={{ height: "2px", color: "white" }} />
        <div className="tableColor mx-1 my-6">
          <table className="w:100">
            <thead className="">
              <tr>
                <th className="column-3 mx-4">CREATED AT</th>
                <th className="column-2 mx-4">AMOUNT</th>
                <th className="column-2 mx-4">STATUS</th>
                <th className="column-2 mx-4">CONTACT</th>
                <th className="column-2 mx-4">CREATED BY</th>
                <th className="column-1 mx-4">UTR <HelpIcon /> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fri 9 Feb , 2:32 PM</td>
                <td>  <span>&#x20B9;</span> 10000.<span>00</span></td>
                <td><span className="status">Queued</span> </td>
                <td>Shivam Arora</td>
                <td>Aditya Sharma</td>
                <td>--</td>
              </tr>
              <tr>
                <td>Fri 9 Feb , 1:25 PM</td>
                <td>  <span>&#x20B9;</span> 10000.<span>00</span></td>
                <td><span className="status">Queued</span> </td>
                <td>Ujjwal</td>
                <td>Aditya Sharma</td>
                <td>--</td>
              </tr>
              <tr>
                <td>Fri 9 Feb , 12:04 PM</td>
                <td>  <span>&#x20B9;</span> 10000.<span>00</span></td>
                <td><span className="status">Queued</span> </td>
                <td>Amit Kumar</td>
                <td>Aditya Sharma</td>
                <td>--</td>
              </tr>
              <tr>
                <td>Thu 8 Feb , 3:52 PM</td>
                <td>  <span>&#x20B9;</span> 50000.<span>00</span></td>
                <td><span className="status">Queued</span> </td>
                <td>Harsh</td>
                <td>Aditya Sharma</td>
                <td>--</td>
              </tr>
              <tr>
                <td>Tue 9 Feb , 4:09 PM</td>
                <td>  <span>&#x20B9;</span> 10000.<span>00</span></td>
                <td><span className="status">Queued</span> </td>
                <td>Random Verma</td>
                <td>Aditya Sharma</td>
                <td>--</td>
              </tr>
            </tbody>
          </table>

          <hr className="my-5" style={{ height: "2px", color: "white" }} />

          <div className="rowsM">
            <select name="rowsD" id="rowsD">
              <option value="1">10</option>
              <option value="2">50</option>
              <option value="3">100</option>
            </select>
            <span>rows/pages</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Table;
