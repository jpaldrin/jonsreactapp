import { BaseDateTimePickerProps } from "@material-ui/pickers";

export interface Employees{
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    hireDate: BaseDateTimePickerProps,
    jobId: number,
    salary: number,
    managerId: number,
    departmentId: number,
    status: string,
    jobtitle: string,
    departmentName: string,
    management: string,
}