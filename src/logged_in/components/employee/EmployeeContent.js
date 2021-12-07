import React, {useState, useEffect } from 'react';
import MaterialTable, { MTableToolbar } from '@material-table/core';
import withWidth from "@material-ui/core/withWidth";
import PropTypes from "prop-types";
import TableIcons from '../../../../src/shared/components/MaterialTableIcons';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import currencyPrettyPrint from "../../../shared/functions/currencyPrettyPrint";
import ColorfulChip from "../../../shared/components/ColorfulChip";
 
import {
    Typography,
    withStyles,
  } from "@material-ui/core";

               
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
    }
  });

const API_HOST = "https://localhost:7039/api";
const EMPLOYEE_API_URL = `${API_HOST}/Employee/`;

function Employee(props) {
   
    const { theme, classes, pushMessageToSnackbar } = props;
    const [data, setData] = useState([]);

    const fetchEmployees = () => {
        fetch(`${EMPLOYEE_API_URL}`, {credentials: 'include'}).then(res => res.json()).then(json => setData(json));


    }

    // Calling the function on component mount
         
    const [columns, setColumns] = useState([
        //hidden ids
        { field: "employeeId", title:"employee Id", hidden: true},
        { field: "jobId", title:"job Id", hidden: true},
        { field: "departmentId", title:"department Id", hidden: true},
        { field: "managerId", title:"id", hidden: true},
        //properties
        { field: "status", title: "Status"},
        { field: "firstName", title: "First" },
        { field: "lastName", title: "Last" },
        { field: "hireDate", title: "Date Hired", type: "datetime" },
        { field: "email", title: "Email" },
        { field: "phoneNumber", title: "Phone"},
        { field: "salary", title: "Salary" }
    ]);

    useEffect(() => {
        fetchEmployees();
    }, []);

    return (
        <MaterialTable
            title="Employee Data Table"
            data={data}
            columns={columns}
            icons={TableIcons}
            style={{ border: "1px solid rgba(0,0,0,0.2)", padding: 4 }}
            responsive={true}
            detailPanel={({ rowData }) => {
                return (
                    <div style={{ paddingLeft: 15, fontSize: 14, height: "auto" }}>
                        <div style={{textAlign: "left"}}>
                        <h3 style={{  color: "#808080"}}> { rowData.firstName + ' ' + rowData.lastName } </h3>
                        <h5 style={{  color: "#808080"}}>Employee ID: { rowData.id } </h5>
                        </div>
                        {
                    data.map((oldData) => (
                     <ul key={oldData.id} style={{ listStyle: "none"}}>
                        {
                            rowData.id === oldData.id ? ( 
                         <li>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 280 }}>
                            <p><span style={{ marginRight: "200", fontWeight: "400", color: "#808080" }}> Start Date:</span> { oldData.hireDate }</p>
                            <p><span style={{width: "200", fontWeight: "400", color: "#808080"}}>Email:</span> { oldData.email }</p>
                            <p><span style={{width: "200", fontWeight: "400", color: "#808080"}}>Phone:</span> { oldData.phoneNumber }</p>
                            <p><span style={{width: "200", fontWeight: "400", color: "#808080"}}>Salary:</span> { <ColorfulChip label={currencyPrettyPrint(oldData.salary)} color={theme.palette.secondary.main} />}</p>
                        </FormControl>
                    </Box>
                         </li> 
                            ):(oldData.id === rowData.id)  
                        }
                         </ul>
                   ))
                }
        </div>
                )
            }}
            components={{
                Toolbar: props => (
                    <Typography
                    variant="h4"
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
            editable={{
                onRowAddCancelled: (rowData) => console.log("Row adding cancelled"),
                onRowUpdateCancelled: (rowData) => console.log("Row editing cancelled"),
                onRowAdd: (newData) => {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            setData([...data, newData]);
                            createNewEmployee();
                            resolve();
                            async function createNewEmployee(
                                url = `${EMPLOYEE_API_URL}`,
                                data = {
                                    firstName: newData.firstName,
                                    lastName: newData.lastName,
                                    email: newData.email,
                                    phoneNumber: newData.phoneNumber,
                                    hireDate: newData.hireDate,
                                    salary: newData.salary, 
                                    status: newData.status,  
                                    jobId: newData.jobId = "10"                 
                                }) {
                                    const response = await fetch(url, {
                                        method: 'POST',
                                        credentials: 'same-origin',
                                        mode: 'cors',
                                        cache: 'no-cache', 
                                        headers: {
                                            'Content-Type': 'application/json'
                                            // 'Content-Type': 'application/x-www-form-urlencoded',
                                          },
                                        body: JSON.stringify(data)
                                    });
                                    if(response.ok){
                                        fetchEmployees();
                                        setTimeout(() => {
                                            pushMessageToSnackbar({
                                              text: "Employee " + newData.firstName + ' ' + newData.lastName + ' was created successfully.',
                                            });
                                          }, 1500);
                                    }else{
                                        setTimeout(() => {
                                            pushMessageToSnackbar({
                                              text: "Failed!",
                                            });
                                          }, 1500);
                                    }
                                }
                               
                        }, 1000);
                    })
                },
                onRowUpdate: (newData, oldData) => {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const dataUpdate = [...data];
                            // In dataUpdate, find target
                            const target = dataUpdate.find((newdata) => newData.id === oldData.id);
                            const index = dataUpdate.indexOf(target);
                            dataUpdate[index] = newData;
                            updateData();
                            resolve();
                            async function updateData(
                                url = `${EMPLOYEE_API_URL}${newData.id}`, 
                                data = {
                                    firstName: newData.firstName,
                                    lastName: newData.lastName,
                                    email: newData.email,
                                    phoneNumber: newData.phoneNumber,
                                    hireDate: newData.hireDate,
                                    jobId: newData.jobId,
                                    salary: newData.salary,
                                    managerId: newData.managerId,
                                    departmentId: newData.departmentId,
                                    status: newData.status,                   
                                }) {
                                    const response = await fetch(url, {
                                        method: 'PUT',
                                        credentials: 'same-origin',
                                        mode: 'cors',
                                        cache: 'no-cache', 
                                        headers: {
                                            'Content-Type': 'application/json'
                                            // 'Content-Type': 'application/x-www-form-urlencoded',
                                          },
                                        body: JSON.stringify(data)
                                    });
                                    if(response.ok){
                                        fetchEmployees();                                                                            
                                        setTimeout(() => {
                                            pushMessageToSnackbar({
                                              text: "Employee " + newData.firstName + ' ' + newData.lastName + ' was created successfully.',
                                            });
                                          }, 1500);
                                    }else{
                                        setTimeout(() => {
                                            pushMessageToSnackbar({
                                              text: "Failed!",
                                            });
                                          }, 1500);
                                    }
                                }
                        }, 1000);
                    })
                },
                onRowDelete: (oldData) => {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const dataDelete = [...data];
                            const target = dataDelete.find((el) => el.id === oldData.id);
                            const index = dataDelete.indexOf(target);
                            dataDelete.splice(index, 1);
                            setData([...dataDelete]);
                            fetch(`${EMPLOYEE_API_URL}`+oldData.id, {
                                credentials: "include",
                                method: "Delete",
                                headers: {
                                    "Content-type": "application/json; charset=UTF-8",
                                    "Access-Control-Allow-Origin": "XSRF_Token"
                                }
                            }).then(response => response.json()).then(json => {
                                fetchEmployees();
                                setTimeout(() => {
                                    pushMessageToSnackbar({
                                      text: "Employee was deleted",
                                    });
                                  }, 1500);
                            })
                            resolve();
                        }, 1000);
                    });
                },
            }}
        />
       
    );
}

Employee.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    pushMessageToSnackbar: PropTypes.func,
  };

export default withWidth()(withStyles(styles, { withTheme: true })(Employee));

//https://github.com/material-table-core/core/blob/master/src/utils/data-manager.js
//https://www.bezkoder.com/react-typescript-api-call/