import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import { SidebarData } from "./sidebar_data";
import { Route, Link } from "react-router-dom";
import "./sidebar_component.css";

const useStyles = makeStyles({
  background: {
    background: " #76abec",
    width: 250,
    padding: 20,
    color: "white",
    paddingTop: 70,
  },
  text: {
    color: "white",
  },
});
export default function SideBar() {
  const classes = useStyles();
  return (
    <div>
      <Drawer
        classes={{ paper: classes.background }}
        variant="permanent"
        anchor="left"
      >
        <Divider />
        <List>
          <h3>General</h3>
          {SidebarData.map((item, index) => (
            <ListItem button key={index} className={item.className}>
              <Link to={item.path}>
                <ListItemIcon style={{ color: "white" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  classes={{ text: classes.title }}
                  primary={item.title}
                />
              </Link>
            </ListItem>
          ))}
        </List>

        <Divider />
      </Drawer>
    </div>
  );
}
