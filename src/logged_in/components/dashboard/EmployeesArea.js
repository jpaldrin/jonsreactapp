import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Employee from "../dashboard/Employees"
 

function EmployeesArea(props) {
  const { pushMessageToSnackbar } = props;
 
  return (
    <Fragment>
        <Employee pushMessageToSnackbar={pushMessageToSnackbar} />
    </Fragment>
  );
}

EmployeesArea.propTypes = {
  pushMessageToSnackbar: PropTypes.func
};

export default EmployeesArea;