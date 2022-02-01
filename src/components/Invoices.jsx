import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/modal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InvoiceDetails from "../components/InvoiceDetails";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import MaterialTable from "material-table";
import EditIcon from "@material-ui/icons/Edit";
import "../css/invoices.css";

const Invoices = () => {
  const [N_FAC, setN_FAC] = useState("");
  const [Y_FAC, setY_FAC] = useState("");
  const [fromD, setFrom] = useState("");
  const [toD, setTo] = useState("");
  const [loading, setLoading] = useState(false);
  const [invoices, setInvoices] = useState([]);
  const [showDet, setShowDet] = useState(false);
  const navigate = useNavigate();
  const onClickSearch = () => {
    getInvoices(fromD, toD);
    setLoading(true);
  };

  const getInvoices = (fromD, toD) => {
    const URL = "http://localhost:8000/api/invoices/" + fromD + "/" + toD;
    axios.get(URL).then((res) => {
      if (res) {
        setInvoices(res.data);
        setLoading(false);
      }
    });
  };

  const handleFromDate = (event) => {
    const newV = event.target.value;
    setFrom(newV);
  };

  const handleToDate = (event) => {
    const newV = event.target.value;
    setTo(newV);
  };

  const hanldeClick = (i) => {
    //setN_FAC(i.N_FAC)
    //setY_FAC(i.Y_FAC)
    navigate("/InvDet/" + i.Y_FAC + "/" + i.N_FAC);
    //setShowDet(true);
    if (i.Y_FAC || i.N_FAC) {
      console.log("N_FAC ", i.N_FAC, " Y_FAC ", i.Y_FAC);
    }
  };

  const columns = [
    {
      title: "Client Code",
      field: "CODE_CLI",
      cellStyle: {
        backgroundColor: "#DCDCDC",
        color: "black",
        padding: "0px",
        fontSize: "12px",
        textAlign: "center",
      },
      headerStyle: {
        fontSize: "15px",
        fontWeight: "bold",
        color: "black",
        backgroundColor: "#C3C3C3",
        padding: "0px",
        textAlign: "center",
      },
    },
    {
      title: "Client Name",
      field: "DESC_CLI",
      cellStyle: {
        backgroundColor: "#E1E1E1",
        color: "black",
        padding: "px",
        fontSize: "11px",
        textAlign: "center",
      },
      headerStyle: {
        fontSize: "15px",
        fontWeight: "bold",
        color: "black",
        backgroundColor: "#C3C3C3",
        padding: "0px",
        textAlign: "center",
      },
    },
    {
      title: "invnum",
      field: "invnum",
      cellStyle: {
        backgroundColor: "#DCDCDC",
        color: "black",
        padding: "0px",
        fontSize: "12px",
        textAlign: "center",
      },
      headerStyle: {
        fontSize: "15px",
        fontWeight: "bold",
        color: "black",
        backgroundColor: "#C3C3C3",
        padding: "0px",
        textAlign: "center",
      },
    },
    {
      title: "Y_FAC",
      field: "Y_FAC",
      cellStyle: {
        display: "none",
        backgroundColor: "#DCDCDC",
        color: "black",
        padding: "0px",
        fontSize: "12px",
        textAlign: "center",
      },
      headerStyle: {
        display: "none",
        fontSize: "15px",
        fontWeight: "bold",
        color: "black",
        backgroundColor: "#C3C3C3",
        padding: "0px",
        textAlign: "center",
      },
    },
    {
      title: "N_FAC",
      field: "N_FAC",
      cellStyle: {
        display: "none",
        backgroundColor: "#E1E1E1",
        color: "black",
        padding: "0px",
        fontSize: "12px",
        textAlign: "center",
      },
      headerStyle: {
        display: "none",
        fontSize: "15px",
        color: "black",
        fontWeight: "bold",
        backgroundColor: "#C3C3C3",
        padding: "0px",
        textAlign: "center",
      },
    },
    {
      title: "Warehouse",
      field: "desc_wareh",
      cellStyle: {
        backgroundColor: "#DCDCDC",
        color: "black",
        padding: "0px",
        fontSize: "12px",
        textAlign: "center",
      },
      headerStyle: {
        fontSize: "15px",
        fontWeight: "bold",
        color: "black",
        backgroundColor: "#C3C3C3",
        padding: "0px",
        textAlign: "center",
      },
    },
    {
      title: "Number of items",
      field: "ItemCOunt",
      cellStyle: {
        backgroundColor: "#DCDCDC",
        color: "black",
        padding: "0px",
        fontSize: "12px",
        textAlign: "center",
      },
      headerStyle: {
        fontSize: "15px",
        fontWeight: "bold",
        color: "black",
        backgroundColor: "#C3C3C3",
        padding: "0px",
        textAlign: "center",
      },
    },
    {
      title: "Invoice date",
      field: "D_FAC",
      cellStyle: {
        backgroundColor: "#E1E1E1",
        color: "black",
        padding: "0px",
        fontSize: "12px",
        textAlign: "center",
      },
      headerStyle: {
        fontSize: "15px",
        fontWeight: "bold",
        backgroundColor: "#C3C3C3",
        padding: "0px",
        textAlign: "center",
      },
    },
    {
      title: "Due date",
      field: "D_VALEUR",
      cellStyle: {
        backgroundColor: "#DCDCDC",
        color: "black",
        padding: "0px",
        fontSize: "12px",
        textAlign: "center",
      },
      headerStyle: {
        fontSize: "15px",
        fontWeight: "bold",
        color: "black",
        backgroundColor: "#C3C3C3",
        padding: "0px",
        textAlign: "center",
      },
    },
    {
      title: "Delivery date",
      field: "D_LIVRAISON",
      cellStyle: {
        backgroundColor: "#E1E1E1",
        color: "black",
        padding: "0px",
        fontSize: "12px",
        textAlign: "center",
      },
      headerStyle: {
        fontSize: "15px",
        fontWeight: "bold",
        color: "black",
        backgroundColor: "#C3C3C3",
        padding: "0px",
        textAlign: "center",
      },
    },
    {
      title: "Salesman",
      field: "DESC_SLM",
      cellStyle: {
        backgroundColor: "#E1E1E1",
        color: "black",
        padding: "0px",
        fontSize: "12px",
        textAlign: "center",
      },
      headerStyle: {
        fontSize: "15px",
        fontWeight: "bold",
        color: "black",
        backgroundColor: "#C3C3C3",
        padding: "0px",
        textAlign: "center",
      },
    },
    {
      title: "Remark",
      field: "REMARK",
      cellStyle: {
        backgroundColor: "#E1E1E1",
        color: "black",
        padding: "0px",
        fontSize: "12px",
        textAlign: "center",
      },
      headerStyle: {
        fontSize: "15px",
        fontWeight: "bold",
        color: "black",
        backgroundColor: "#C3C3C3",
        padding: "0px",
        textAlign: "center",
      },
    },
  ];
  var invoice = Array.prototype.concat.apply([], invoices);

  useEffect(() => {
    const data = localStorage.getItem("invoice");
    if (data) {
      setInvoices(JSON.parse(data));
    }
  }, [Invoices]);

  useEffect(() => {
    localStorage.setItem("invoice", JSON.stringify(invoice));
  });

  return (
    <div className="Invoices">
      {showDet == false && (
        <div>
          <div className="filterInvoices">
            <label htmlFor="from">From : </label>
            <input
              id="from"
              type="date"
              onChange={handleFromDate}
              className="form-control-sm"
            />
            <label htmlFor="to">To : </label>
            <input
              id="to"
              type="date"
              onChange={handleToDate}
              className="form-control-sm"
            />
            <button onClick={onClickSearch} className="btn">
              Search
            </button>
          </div>
          <div className="table">
            <MaterialTable
              columns={columns}
              data={invoice}
              options={{
                sorting: true,
                search: true,
                searchFieldAlignment: "right",
                searchAutoFocus: true,
                pageSize: 5,
                rowStyle: { fontSize: 8, width: 8 },
                pageSizeOptions: [5, 10, 25, 50, 75, 100],
                actionsColumnIndex: -1,
                rowStyle: { backgroundColor: "#f5f5f5" },
                tableLayout: "auto",
              }}
              title={
                loading && (
                  <div
                    style={{
                      width: "100%",
                      heigth: "fit-content",
                      textAlign: "center",
                    }}
                  >
                    <Spinner animation="border" variant="primary" />
                  </div>
                )
              }
              actions={[
                {
                  icon: () => <EditIcon />,
                  tooltip: "edit",
                  onClick: (e, data) => hanldeClick(data),
                },
              ]}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default Invoices;
