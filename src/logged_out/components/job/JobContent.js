import React, {useState, useEffect } from 'react';
import MaterialTable, { MTableToolbar } from '@material-table/core';
import Button from '@mui/material/Button';
import withWidth from "@material-ui/core/withWidth";
import PropTypes from "prop-types";
import TableIcons from '../../../../src/shared/components/MaterialTableIcons';
import classNames from "classnames";
 
 
import {
    Typography,
    withStyles,
  } from "@material-ui/core";
import { Refresh } from '@mui/icons-material';


const styles = theme => ({
    appBar: {
      boxShadow: theme.shadows[6],
      backgroundColor: theme.palette.common
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between"
    },
    menuButtonText: {
        fontSize: theme.typography.body1.fontSize,
        fontWeight: theme.typography.h6.fontWeight
    },
    brandText: {
      fontFamily: "'Baloo Bhaijaan', cursive",
      fontWeight: 400
    },
    noDecoration: {
      textDecoration: "none !important"
    },
    container: {
        marginTop: theme.spacing(18),
        marginBottom: theme.spacing(8),
        [theme.breakpoints.down("md")]: {
          marginBottom: theme.spacing(9),
        },
        [theme.breakpoints.down("sm")]: {
          marginBottom: theme.spacing(6),
        },
        [theme.breakpoints.down("sm")]: {
          marginBottom: theme.spacing(3),
        },
      },
      brandText: {
        fontFamily: "'Baloo Bhaijaan', cursive",
        fontWeight: 400
      },
      containerFix: {
        [theme.breakpoints.up("md")]: {
          maxWidth: "none !important",
        },
      }
  });


 
function Jobs(props) {
    // Calling the function on component mount
    const { theme, classes, pushMessageToSnackbar } = props;
    const [data, setData] = useState([]);

    return (
        <div className={classNames("container-fluid", classes.container)}>
        <MaterialTable 
          title="Available Positions"
          icons={TableIcons}
          style={{ border: "1px solid rgba(0,0,0,0.2)", padding: 8 }}
          responsive={true}
          components={{
            Toolbar: props => (
                <Typography
                variant="h2"
                className={classes.brandText}
                display="inline"
                color="primary"
                boxShadow="6"
                >
                    <MTableToolbar className={classes.toolbar} {...props} />
                </Typography>
            )
        }}
        options={{
            headerStyle: { position: 'sticky', top: 0 },
            actionsColumnIndex: -1,
            toolbarButtonAlignment: props.toolbarButtonAlignment ? props.toolbarButtonAlignment : 'right',
            backgroundColor: '#039be5',
            maxBodyHeight: 650,
            exportButton: true,
        }}
          columns={[
            { title: 'Job ID', field: 'jobId' },
            { title: 'Job Title', field: 'jobTitle' },
            { title: 'Description', field: 'description' },
            { title: 'Min', field: 'minSalary', type: 'numeric' },
            { title: 'Max', field: 'maxSalary', type: 'numeric' }
          ]}
          data={[
              {jobId: '1', jobTitle: 'Application Developer', description: 'Program stuff.', minSalary: 65000, maxSalary: 120000},
              {jobId: '2', jobTitle: 'Finance', description: 'Do stuff.', minSalary: 45000, maxSalary: 73000},
              {jobId: '3', jobTitle: 'Human Resource', description: 'Do stuff..', minSalary: 31000, maxSalary: 68000},
              {jobId: '4', jobTitle: 'Education', description: 'Do stuff..', minSalary: 12000, maxSalary: 19000},
              {jobId: '5', jobTitle: 'Janitor', description: 'Do stuff..', minSalary: 25000, maxSalary: 35000},
              {jobId: '6', jobTitle: 'Maintenance', description: 'Do stuff..', minSalary: 17888, maxSalary: 29880},
              {jobId: '7', jobTitle: 'Carpet Bagger', description: 'Do stuff..', minSalary: 24000, maxSalary: 199880}
            
            ]}
            actions={[
                {
                  icon: () =>  
                  <Button variant="contained"
                  href="https://github.com/jpaldrin">
                  Apply
                </Button>,
                  //onClick: (event, rowData) => alert("You applied for " + rowData.jobTitle)
                }
              ]}
              //If USER is in ROLE Admin
        />
     </div>
    );
}

Jobs.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    pushMessageToSnackbar: PropTypes.func,
  };

export default withWidth()(withStyles(styles, { withTheme: true })(Jobs));

 