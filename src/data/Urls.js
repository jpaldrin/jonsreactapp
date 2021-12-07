import { DataTypes } from "./Types";

export const RestUrls = {
    [DataTypes.Jobs]: '/api/jobs',
    [DataTypes.departments]: '/api/departments',
    [DataTypes.applicants]: '/api/applicants'
}

export const GraphQlUrl = '/graphql';
export const authUrl = '/login';