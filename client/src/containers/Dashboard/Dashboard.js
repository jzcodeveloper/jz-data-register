import React from "react";
import { Link } from "react-router-dom";
import classes from "./Dashboard.css";

const Dashboard = () => {
  document.title = `JZ Data Register - Dashboard`;

  return (
    <div className={classes.Dashboard}>
      <div className={classes.storeStudent}>
        <div className={classes.Overlay}>
          <i className={`fas fa-database fa-8x ${classes.Store}`} />
          <Link to="/store-student">Create student's data</Link>
        </div>
      </div>
      <div className={classes.showStudent}>
        <div className={classes.Overlay}>
          <i className={`fas fa-eye fa-8x ${classes.Show}`} />
          <Link to="/show">Show student's data</Link>
        </div>
      </div>
      <div className={classes.editStudent}>
        <div className={classes.Overlay}>
          <i className={`fas fa-pencil-alt fa-8x ${classes.Edit}`} />
          <Link to="/update">Update student's data</Link>
        </div>
      </div>
      <div className={classes.deleteStudent}>
        <div className={classes.Overlay}>
          <i className={`fas fa-minus-circle fa-8x ${classes.Delete}`} />
          <Link to="/delete">Delete student's data</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
