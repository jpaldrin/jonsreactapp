import React, {} from "react";
import PropTypes from "prop-types";
import JobContent from "./JobContent";

function Jobs(props) {
  const {
    pushMessageToSnackbar,
  } = props;
  //update status message - snackbar
    return (
    <JobContent
    pushMessageToSnackbar={pushMessageToSnackbar}
  />
    )
}

Jobs.propTypes = {
  EmojiTextArea: PropTypes.elementType,
  pushMessageToSnackbar: PropTypes.func,
};

export default Jobs;