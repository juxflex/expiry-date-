import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Link } from "react-router-dom";
import { Route, useParams } from "react-router-dom";
import Invoices from "../components/Invoices";
import axios from "axios";
import MaterialTable from "material-table";
import AddIcon from "@material-ui/icons/Add";
import "../css/invoiceDet.css";
import "../css/popup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import { useReactToPrint } from "react-to-print";
import Print from "../components/Print";

const InvoiceDetails = () => {
  const [InvDet, setInvDet] = useState([]);
  const [postInvDet, SetPostInvDet] = useState([]);
  const [inv, setInv] = useState([]);
  const [showDet, SetShowDet] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [rowCopy, setRowCopy] = useState([]);
  const [added, setAdded] = useState({});
  const [Nfac, setN] = useState("");
  const [Yfac, setY] = useState("");
  const [Qty, SetQty] = useState(0);
  const { Y_FAC } = useParams();
  const { N_FAC } = useParams();
  const [showPrint, SetShowPrint] = useState(false);
  //const {count,setCount} = useState(0);
  const [itemChosen, SetItemChosen] = useState("");
  //const {showBtn,setShowBtn} = useState(false)
  const [toSend,setToSend] = useState([]);

  const handleClose = () => {
    setRowCopy([]);
    setShowAdd(false);
  };

  const getInvDet = (Y_FAC, N_FAC) => {
    if (Y_FAC != 0 && N_FAC != 0) {
      const URL =
        "http://localhost:8000/api/InvoiceDetails/" +
        Y_FAC.replace(/\s+/g, "") +
        "/" +
        N_FAC;
      console.log(URL);
      axios.get(URL).then((res) => {
        if (res) {
          setInvDet(res.data);
          //setShowDet(true)
          //setLoading(true)
        }
      });
    }
  };
  const getInv = (Y_FAC, N_FAC) => {
    if (Y_FAC != 0 && N_FAC != 0) {
      const URL =
        "http://localhost:8000/api/InvoicesFac/" +
        Y_FAC.replace(/\s+/g, "") +
        "/" +
        N_FAC;
      console.log(URL);
      axios.get(URL).then((res) => {
        if (res) {
          setInv(res.data);
          console.log("inv:", inv);
        }
      });
    }
  };
  useEffect(() => {
    getInvDet(Y_FAC, N_FAC);
  }, []);

  useEffect(() => {
    getInv(Y_FAC, N_FAC);
  }, [Y_FAC, N_FAC]);

  const postInvoices = () => {
    const URL = "http://localhost:8000/InvSave"
    console.log(JSON.stringify(InvDet))  
    //const data = InvDet
    axios.post(URL,JSON.stringify(InvDet))
      .then((response) => {
        console.log("DATA : ",response);
        const URL = "http://localhost:8000/InvHeadSave"
        console.log(JSON.stringify(inv))
        //const data1 = inv
        axios.post(URL,JSON.stringify(inv))
        .then((response) => {
          console.log("DATA2 : ",response);
        }
      )})
      .catch((error) => {
        console.log(error);
      }); 
  };

  const handleY_FAC = (event) => {
    const newV = event.target.value;
    setY(newV);
  };
  const handleN_FAC = (event) => {
    const newV = event.target.value;
    setN(newV);
  };
  const onClickGetInvItems = () => {
    getInvDet(Yfac, Nfac);
    getInv(Yfac, Nfac);
  };

  const columns = [
    {
      title: "NB_CAISS",
      field: "NB_CAISS",
      editable: false,
      cellStyle: {
        backgroundColor: "#E1E1E1",
        color: "black",
        textAlign: "center",
        padding: "0px",
      },
      headerStyle: {
        color: "black",
        fontWeight: "bold",
        backgroundColor: "#C3C3C3",
        textAlign: "center",
        padding: "0px",
      },
    },
    {
      title: "#CODE_ART",
      field: "CODE_ART",
      editable: false,
      cellStyle: {
        backgroundColor: "#E1E1E1",
        color: "black",
        padding: "0px",
        textAlign: "center",
      },
      headerStyle: {
        color: "black",
        fontWeight: "bold",
        backgroundColor: "#C3C3C3",
        textAlign: "center",
        padding: "0px",
      },
    },
    {
      title: "#Item",
      field: "a_code",
      editable: false,
      cellStyle: {
        backgroundColor: "#E1E1E1",
        color: "black",
        textAlign: "center",
        padding: "0px",
      },
      headerStyle: {
        color: "black",
        fontWeight: "bold",
        backgroundColor: "#C3C3C3",
        textAlign: "center",
        padding: "0px",
      },
    },
    {
      title: "Description",
      field: "DESC_ART",
      editable: false,
      cellStyle: {
        backgroundColor: "#E1E1E1",
        color: "black",
        textAlign: "center",
        padding: "0px",
      },
      headerStyle: {
        color: "black",
        fontWeight: "bold",
        backgroundColor: "#C3C3C3",
        textAlign: "center",
        padding: "0px",
      },
    },
    {
      title: "TotalPc",
      field: "TotalPc",
      editable: false,
      cellStyle: {
        backgroundColor: "#E1E1E1",
        color: "black",
        textAlign: "center",
        padding: "0px",
      },
      headerStyle: {
        color: "black",
        fontWeight: "bold",
        backgroundColor: "#C3C3C3",
        textAlign: "center",
        padding: "0px",
      },
    },
    {
      title: "Expiry",
      field: "date",
     // initialEditValue :,
      type: "date",
      //render:rowData=><input type="date"/>,
      cellStyle: {
        backgroundColor: "#E1E1E1",
        color: "black",
        textAlign: "center",
        padding: "0px",
      },
      headerStyle: {
        color: "black",
        fontWeight: "bold",
        backgroundColor: "#C3C3C3",
        textAlign: "center",
        padding: "0px",
      },
    },
  ];
  const columnsAdd = [
    {
      title: "NB_CAISS",
      field: "NB_CAISS",
      initialEditValue: added.NB_CAISS,
      editable: false,
      cellStyle: {
        backgroundColor: "#E1E1E1",
        color: "black",
        textAlign: "center",
        padding: "0px",
      },
      headerStyle: {
        color: "black",
        fontWeight: "bold",
        backgroundColor: "#C3C3C3",
        textAlign: "center",
        padding: "0px",
      },
    },
    {
      title: "#CODE_ART",
      field: "CODE_ART",
      initialEditValue: added.CODE_ART,
      editable: false,
      cellStyle: {
        backgroundColor: "#E1E1E1",
        color: "black",
        padding: "0px",
        textAlign: "center",
      },
      headerStyle: {
        color: "black",
        fontWeight: "bold",
        backgroundColor: "#C3C3C3",
        textAlign: "center",
        padding: "0px",
      },
    },
    {
      title: "#Item",
      field: "a_code",
      initialEditValue: added.a_code,
      editable: false,
      cellStyle: {
        backgroundColor: "#E1E1E1",
        color: "black",
        textAlign: "center",
        padding: "0px",
      },
      headerStyle: {
        color: "black",
        fontWeight: "bold",
        backgroundColor: "#C3C3C3",
        textAlign: "center",
        padding: "0px",
      },
    },
    {
      title: "Description",
      field: "DESC_ART",
      initialEditValue: added.DESC_ART,
      editable: false,
      cellStyle: {
        backgroundColor: "#E1E1E1",
        color: "black",
        textAlign: "center",
        padding: "0px",
      },
      headerStyle: {
        color: "black",
        fontWeight: "bold",
        backgroundColor: "#C3C3C3",
        textAlign: "center",
        padding: "0px",
      },
    },
    {
      title: "TotalPc",
      field: "TotalPc",
      type: "numeric",
      cellStyle: {
        backgroundColor: "#E1E1E1",
        color: "black",
        textAlign: "center",
        padding: "0px",
      },
      headerStyle: {
        color: "black",
        fontWeight: "bold",
        backgroundColor: "#C3C3C3",
        textAlign: "center",
        padding: "0px",
      },
    },

    {
      title: "Expiry",
      field: "date",
      type: "date",
      cellStyle: {
        backgroundColor: "#E1E1E1",
        color: "black",
        textAlign: "center",
        padding: "0px",
      },
      headerStyle: {
        color: "black",
        fontWeight: "bold",
        backgroundColor: "#C3C3C3",
        textAlign: "center",
        padding: "0px",
      },
    },
  ];
 
  let invItem = Array.prototype.concat.apply([], InvDet);
 
  const addRow = (data) => {
    try {
      //SetItemChosen(data.CODE_ART)
      console.log(data);
      const add = {
        CODE_ART: data.CODE_ART,
        a_code: data.a_code,
        DESC_ART: data.DESC_ART,
        NB_CAISS: data.NB_CAISS,
        TotalPc: data.TotalPc,
      };
      SetItemChosen(data.tableData.id);
      console.log("chosen id : ", itemChosen);
      //console.log("id : ",itemChosen)
      SetQty(data.TotalPc);
      setRowCopy([...rowCopy, add]);
      setAdded(add);
      setShowAdd(true);
    } catch (err) {
      console.error("catch error: ", err);
    }
  };

  /* const addBtnHandler = () => {
    SetQty(added.TotalPc);
    var newRowCopy = rowCopy.filter((arr) => arr.CODE_ART != rowCopy.CODE_ART);
    setRowCopy((rowCopy) => [...rowCopy, added]);
    //setShowAdd(true)
  };
  const Delete = (selectedRow) => {
    const updatedData = [...rowCopy]
    updatedData.splice(selectedRow.tableData.id,1)
    setRowCopy(updatedData)
  };*/
  const updateHandler = () => {
    setTimeout(() => {
      const updatedData = [...invItem];
      updatedData.splice(itemChosen, 1);
      setInvDet(updatedData);
      setInvDet([updatedData, rowCopy]);
    }, 1000);
  };
  const onPrintClick = () => {
    console.log("inv to print ", inv);
    SetShowPrint(true);
    //SetShowDet(false)
    // setShowAdd(true)
  };
  const showP = true;
  return (
    <div className="InvoiceDetails">
      {showDet === true && (
        <div>
          <div className="searchInvoice">
            <label htmlFor="YFAC">Invoice number :</label>
            <input
              className="form-control-sm"
              type="text"
              onChange={handleY_FAC}
              id="YFAC"
            />
            <label
              htmlFor="NFAC"
              style={{
                fontSize: "35px",
                paddingLeft: "5px",
                paddingRight: "5px",
              }}
            >
              /
            </label>
            <input
              className="form-control-sm"
              type="text"
              onChange={handleN_FAC}
              id="NFAC"
            />
            <button onClick={onClickGetInvItems} className="btn">
              Search
            </button>
          </div>
          <div style={{ width: "100%" }}>
            <table
              className="table table-striped"
              style={{ overflow: "scroll" }}
            >
              <thead>
                <tr>
                  <th>Client Code</th>
                  <th>Client Name</th>
                  <th>invoice#</th>
                  <th>Warehouse</th>
                  <th>Invoice date</th>
                  <th>Delivery Date</th>
                  <th>Due Date</th>
                </tr>
              </thead>
              <tbody>
                {inv &&
                  inv.map((c) =>
                    c.map((i, index) => (
                      <tr key={index}>
                        <td>{i.CODE_CLI}</td>
                        <td>{i.DESC_CLI}</td>
                        <td>{i.invnum}</td>
                        <td>{i.CODE_WAREH}</td>
                        <td>{i.D_FAC}</td>
                        <td>{i.D_LIVRAISON}</td>
                        <td>{i.D_VALEUR}</td>
                      </tr>
                    ))
                  )}
              </tbody>
            </table>
          </div>
          <div style={{ width: "100%", height: "fit-content" }}>
            <MaterialTable
              columns={columns}
              data={invItem}
              options={{
                sorting: true,
                search: true,
                searchFieldAlignment: "right",
                searchAutoFocus: true,
                paging: false,
                exportButton: true,
                actionsColumnIndex: -1,
                rowStyle: { backgroundColor: "#f5f5f5" },
                tableLayout: "auto",
                margin: "5px",
              }}
              actions={[
                {
                  icon: () => <AddIcon />,
                  tooltip: "add expiry",
                  onClick: (event, data) => addRow(data),
                },
              ]}
              editable={{
                /* onRowUpdate:(newRow,oldRow)=>new Promise((resolve,reject)=>{
                  const updatedData=[...InvDet]
                  updatedData[oldRow.tableData.id] = newRow
                  setInvDet(updatedData)
                  resolve()
                  }),*/
                onBulkUpdate: (selectedRows) =>
                  new Promise((resolve, reject) => {
                    const rows = Object.values(selectedRows);
                    const updatedRows = [...InvDet];
                    let index;
                    rows.map((inv) => {
                      index = inv.oldData.tableData.id;            
                      updatedRows[index] = inv.newData;                     
                    });
                    //setInvDet(updatedRows)
                    setTimeout(() => {
                      setInvDet(updatedRows);
                      resolve();
                      console.log("New INVDET:", InvDet);
                    }, 1000);
                   
                  }),
                /* onRowDelete:(selectedRow) => new Promise((resolve,reject)=>{
                    const updatedData = [...InvDet]
                    updatedData.splice(selectedRow.tableData.id,1)
                    setInvDet(updatedData)
                    resolve()
                  })*/
              }}
              title="Items"
            />
            <button
              className="btn"
              onClick={postInvoices}
              style={{ marginTop: "10px" }}
            >
              Save
            </button>

            <button
              className="btn"
              onClick={onPrintClick}
              style={{ marginLeft: "5px" ,marginTop: "10px" }}
            >
              Report
            </button>

            {showPrint && (
              <Print
                invoice={inv}
                details={InvDet}
                showP={showP}
                onClick={console.log(showP)}
              />
            )}
          </div>
        </div>
      )}
      {showDet === false && <Invoices />}
      {showAdd === true && (
        <div className="popup-box">
          <div className="box">
            <span className="close-icon" onClick={handleClose}>
              x
            </span>
            <MaterialTable
              columns={columnsAdd}
              data={rowCopy}
              /* localization={{
                pagination: {
                    labelDisplayedRows: '{from}-{to} of {count}'
                }
              }}*/
              options={{
                pageSize: 5,
                pageSizeOptions: [5, 10, 25, 50],
                actionsColumnIndex: -1,
                rowStyle: { backgroundColor: "#f5f5f5" },
                tableLayout: "auto",
                margin: "5px",
              }}
              editable={{
                onRowAdd: (newRow) =>
                  new Promise((resolve, reject) => {
                    console.log("NEW ROW: ", newRow);
                    //newRow = added
                    setRowCopy([...rowCopy, newRow]);
                    resolve(); //setRowCopy(rowCopy=>[...rowCopy,newRow])
                  }),
                onRowUpdate: (newRow, oldRow) =>
                  new Promise((resolve, reject) => {
                    const updatedData = [...rowCopy];
                    updatedData[oldRow.tableData.id] = newRow;
                    setRowCopy(updatedData);
                    resolve();
                  }),
                onBulkUpdate: (selectedRows) =>
                  new Promise((resolve, reject) => {
                    const rows = Object.values(selectedRows);
                    const updatedRows = [...rowCopy];
                    let index;
                    rows.map((inv) => {
                      index = inv.oldData.tableData.id;
                      updatedRows[index] = inv.newData;
                    });
                    setTimeout(() => {
                      setRowCopy(updatedRows);
                      resolve();
                    }, 1000);
                  }),
                onRowDelete: (selectedRow) =>
                  new Promise((resolve, reject) => {
                    const updatedData = [...rowCopy];
                    updatedData.splice(selectedRow.tableData.id, 1);
                    setRowCopy(updatedData);
                    resolve();
                  }),
              }}
              actions={
                [
                  /*{
                  icon: () => <AddIcon />,
                  tooltip: "add",
                  isFreeAction: true,
                  //onClick: (event, row) => //addBtnHandler(row),
                },
                {
                  icon: () => <RemoveIcon />,
                  tooltip: "remove",
                 // onClick: (event, row) =>// Delete(row),
                },*/
                ]
              }
              title={Qty}
            />

            <div style={{ textAlign: "center", width: "100%" }}>
              <button className="btn" onClick={updateHandler}>
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default InvoiceDetails;
