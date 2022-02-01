import { useReactToPrint } from "react-to-print";
import React, { useRef, useState,useEffect } from "react";
import "../css/popup.css";
import "../css/Print.css";

const Print = ({ invoice, details, showP }) => {
  const componentRef = useRef();
  const [show, setShow] = useState(showP);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const onPrintCancel = () => {
    setShow(false);
   // window.location.reload();
  };
  return (
    <div>
      {show === true && (
        <div className="popup-box">
          <div className="box">
            <div
              className="print__section"
              style={{ height: "fit-content", width: "100%" }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-12" style={{ paddingTop: "10px" }}>
                    <button onClick={handlePrint} className="print__button btn">
                      {" "}
                      Print{" "}
                    </button>
                    <button
                      className="btn"
                      onClick={onPrintCancel}
                      style={{ marginLeft: "5px" }}
                    >
                      Cancel
                    </button>
                    <div ref={componentRef} className="card">
                      <div class="page-content container">
                        <div class="page-header text-blue-d2">
                          <h1 class="page-title text-secondary-d1">
                            Packing List
                          </h1>
                        </div>

                        <div class="container px-0">
                          <div class="row mt-4">
                            <div class="col-12 col-lg-12">
                              <hr class="row brc-default-l1 mx-n1 mb-4" />
                              <div className="container">
                                <div className="row">
                                  <div
                                    className="col"
                                    style={{ textAlign: "left" }}
                                  >
                                    <div>
                                      <span className="text-sm text-grey-m2 align-middle">
                                        To:
                                      </span>
                                      <span className="text-600 text-110 text-blue align-middle">
                                        {invoice &&
                                          invoice.map((c) =>
                                            c.map((i, index) => (
                                              <span className="text-sm text-grey-m2 align-middle">
                                                <p>{i.DESC_CLI} </p>
                                              </span>
                                            ))
                                          )}
                                      </span>
                                    </div>
                                    <div>
                                      <span className="text-sm text-grey-m2 align-middle">
                                        Salesman:
                                      </span>
                                      <span className="text-600 text-110 text-blue align-middle">
                                        {invoice &&
                                          invoice.map((c) =>
                                            c.map((i, index) => (
                                              <span className="text-sm text-grey-m2 align-middle">
                                                <p>{i.DESC_SLM} </p>
                                              </span>
                                            ))
                                          )}
                                      </span>
                                    </div>
                                    <div>
                                      <span className="text-sm text-grey-m2 align-middle">
                                        Warehouse:
                                      </span>
                                      <span className="text-600 text-110 text-blue align-middle">
                                        {invoice &&
                                          invoice.map((c) =>
                                            c.map((i, index) => (
                                              <span className="text-sm text-grey-m2 align-middle">
                                                <p>{i.desc_wareh} </p>
                                              </span>
                                            ))
                                          )}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col align-self-start justify-content-end text-right">
                                    <div className="text-grey-m2 justify-content-right">                                   
                                      <div className="my-2">
               
                                        <span className="text-600 text-90">
                                          ID:
                                        </span>{" "}
                                        {invoice &&
                                        invoice.map((c) =>
                                          c.map((i, index) => (
                                            <span className="text-sm text-grey-m2 align-middle">
                                              <p>{i.invnum} </p>
                                            </span>
                                          ))
                                        )}
                                      </div>

                                      <div className="my-2">
                                        <i className="fa fa-circle text-blue-m2 text-xs mr-1"></i>{" "}
                                        <span className="text-600 text-90">
                                          Delivery Date:
                                        </span>{" "}
                                        {invoice &&
                                        invoice.map((c) =>
                                          c.map((i, index) => (
                                            <span className="text-sm text-grey-m2 align-middle">
                                              <p>{i.D_LIVRAISON} </p>
                                            </span>
                                          ))
                                        )}
                                      </div>
                                     
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="mt-4">
                                <div className="row border-b-2 brc-default-l2"></div>

                                <div className="table-responsive">
                                  <table className="table table-striped table-borderless border-0 border-b-2 brc-default-l1">
                                    <thead className="bg-none bgc-default-tp1">
                                      <tr className="text-white">
                                        <th className="opacity-2">#</th>
                                        <th width="140">Item</th>
                                        <th>CaissNB</th>
                                        <th>Qty</th>
                                        <th>Item Number</th>
                                        <th>Expiry</th>
                                      </tr>
                                    </thead>

                                    <tbody className="text-95 text-secondary-d3">
                                      {details &&
                                        details.map((i, index) => (
                                          <tr key={index}>
                                            <td>{i.CODE_ART}</td>
                                            <td>{i.DESC_ART}</td>
                                            <td>{i.NB_CAISS}</td>
                                            <td>{i.TotalPc}</td>
                                            <td>{i.a_code}</td>
                                            <td>{JSON.stringify(i.date).slice(1,11)}</td>
                                          </tr>
                                        ))}
                                    </tbody>
                                  </table>
                                </div>
                                <hr />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Print;
