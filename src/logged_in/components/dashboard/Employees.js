import React, { } from "react";
import PropTypes from "prop-types";
import{  
    withStyles,
} from "@material-ui/core";
import EmployeeContent from "../employee/EmployeeContent";

const styles = (theme) => ({
  dBlock: { display: "block" },
  listItemLeftPadding: {
    paddingRight: theme.spacing(3),
  },
  accordionDetails: {
    paddintTop: theme.spacing(0),
    justifyContent: "flex-end",
  },
});


function Employees(props){
const {  } = props;

 return(
        <EmployeeContent />  
  );
}
Employees.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  pushMessageToSnackbar: PropTypes.func,
};

export default (withStyles(styles, { withTheme: true })(Employees));