import React, { useEffect, useState } from "react";

import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@material-ui/core";
import { ArrowForwardIos } from "@material-ui/icons";
import { useHistory } from "react-router";
import { jwtAxios } from "../../refresh_tokens";

import { FiDownload } from "react-icons/fi";
import axios from "axios";
import "./client_details_component.css";

export default function ClientGrid() {
  const [tableData, setTableData] = useState([]);
  const history = useHistory();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 150,
      renderCell: (cellValues) => {
        return <div style={{ color: "black" }}>{cellValues.value}</div>;
      },
    },
    {
      field: "firstname",
      headerName: "First name",
      width: 150,
      align: "right",
      renderCell: (cellValues) => {
        return (
          <div style={{ color: "black", border: "none" }}>
            {cellValues.value}
          </div>
        );
      },
    },
    {
      field: "lastname",
      headerName: "Last name",
      width: 150,
      renderCell: (cellValues) => {
        return <div style={{ color: "black" }}>{cellValues.value}</div>;
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 215,
      renderCell: (cellValues) => {
        return <div style={{ color: "black" }}>{cellValues.value}</div>;
      },
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      headerAlign: "center",
      renderCell: (cellValues) => {
        return <div style={{ color: "black" }}>{cellValues.value}</div>;
      },
    },
    {
      field: "state",
      headerName: "State",
      sortable: false,
      renderCell: (cellValues) => {
        return <div style={{ color: "black" }}>{cellValues.value}</div>;
      },
    },
    {
      headerName: "Details",
      sortable: false,
      headerAlign: "center",
      width: 125,
      renderCell: (cellValues) => {
        return <div style={{ color: "black" }}>{cellValues.value}</div>;
      },
    },
    {
      field: "",
      headerName: "Action",
      width: 125,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const onClick = () => {
          const id = params.getValue(params.id, "id");
          history.push(`/clients/${id}`);
        };

        return (
          <Button style={{ width: "100%", height: "100%", color: "#76abec" }}>
            <ArrowForwardIos onClick={onClick}></ArrowForwardIos>
          </Button>
        );
      },
    },
  ];

  useEffect(async () => {
    await axios.get("http://localhost:5000/clients").then((res) => {
      setTableData(res.data);
    });
  }, []);

  return (
    <div>
      <div id="export">
        <Button>
          <FiDownload /> Export Data
        </Button>
      </div>
      <div
        id="textcolor"
        style={{
          height: 450,
          width: 1010,
          fontSize: 15,
          backgroundColor: "white",
          marginLeft: 410,
        }}
      >
        <DataGrid
          rowHeight={75}
          rows={tableData}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </div>
  );
}
