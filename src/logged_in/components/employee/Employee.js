import React, {} from "react";
import PropTypes from "prop-types";
import EmployeeContent from "./EmployeeContent";

function Employee(props) {
  const {
    pushMessageToSnackbar,
  } = props;
  //update status message - snackbar
    return (
    <EmployeeContent
    pushMessageToSnackbar={pushMessageToSnackbar}
  />
    )
}

Employee.propTypes = {
  EmojiTextArea: PropTypes.elementType,
  pushMessageToSnackbar: PropTypes.func,
};

export default Employee;