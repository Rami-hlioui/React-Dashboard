import React, { useEffect, useState } from "react";
import axios from "axios";

import Paper from "@material-ui/core/Paper";
import { Divider } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./client_details_component.css";
import moment from "moment";


export default function ClientDetails({ match: { params } }) {
  const [clientData, SetClientData] = useState([]);
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/clients/${params.clientId}`)
      .then((res) => {
        SetClientData(res.data);
      });
  }, []);

  return (
    <div>
      <h2 id="component_title">Client Details</h2>
      <div className="container">
        <Paper className="paper" id="paper1" elevation={3}>
          <h1 id="paper_title">Contact</h1>
          <Divider id="divider" />
          <div className="detail_display">
            <h1 id="title">ID</h1>
            <h1 id="detail">{clientData.id}</h1>
          </div>
          <Divider id="divider" />
          <div className="detail_display">
            <h1 id="title">Fullname</h1>
            <h1 id="detail">
              {clientData.firstname} {clientData.lastname}
            </h1>
          </div>
          <Divider id="divider" />
          <div className="detail_display">
            <h1 id="title">email</h1>
            <h1 id="detail">{clientData.email}</h1>
          </div>
          <Divider id="divider" />
          <div className="detail_display">
            <h1 id="title">phone</h1>
            <h1 id="detail">{clientData.phone}</h1>
          </div>
          <Divider id="divider" />
          <div className="detail_display">
            <h1 id="title">Age</h1>
            <h1 id="detail">{clientData.age}</h1>
          </div>
          <Divider id="divider" />
          <div className="detail_display">
            <h1 id="title">Gender</h1>
            <h1 id="detail">{clientData.sex}</h1>
          </div>
          <Divider id="divider" />
          <div className="detail_display">
            <h1 id="title">Adress</h1>
            <h1 id="detail">{clientData.adress}</h1>
          </div>
          <Divider id="divider" />
          <div className="detail_display">
            <h1 id="title">state</h1>
            <h1 id="detail">{clientData.state}</h1>
          </div>
        </Paper>
        <Paper id="paper2" className="paper" elevation={3}>
          <h1 id="paper_title">Purchase history</h1>
          {clientData.order_list && clientData.order_list.length > 0 ? (
            clientData.order_list.map((e) => {
              const date = moment(e.date).format(" MMMM Do YYYY");
              return (
                <div>
                  <Divider id="divider" />
                  <Accordion
                    expanded={expanded === e._id}
                    onChange={handleChange(e._id)}
                    style={{ backgroundColor: "transparent" }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <ExpandMoreIcon
                          style={{ backgroundColor: "transparent" }}
                        />
                      }
                      aria-controls="panel1bh-content"
                    >
                      <div className="accordion_detail_display">
                        <h1 id="title">ID</h1>
                        <h1 id="detail">{e._id}</h1>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="accordion_detail_display">
                        <h1 id="title">amount</h1>
                        <h1 id="detail">
                          {e.order.amount}
                          {e.order.unit}
                        </h1>
                      </div>
                    </AccordionDetails>
                    <Divider id="divider" />
                    <AccordionDetails>
                      <div className="accordion_detail_display">
                        <h1 id="title">amount paid</h1>
                        <h1 id="detail">{e.order.amount_paid}</h1>
                      </div>
                    </AccordionDetails>
                    <Divider id="divider" />
                    <AccordionDetails>
                      <div className="accordion_detail_display">
                        <h1 id="title">Date</h1>
                        <h1 id="detail">{date}</h1>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              );
            })
          ) : (
            <h1 style={{ color: "white" }}>no Orders found</h1>
          )}

          <Divider id="divider" />
        </Paper>
      </div>
    </div>
  );
}
