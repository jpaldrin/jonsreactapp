import { EMPLOYEES} from "./dataTypes";

export const initialData = {
    modelData: {
        [EMPLOYEES]: []
    },
    stateData: {
        editing: false,
        selectedId: -1,
        selectedType: EMPLOYEES
    }
}