import { ReferenceInput, AutocompleteInput, TextInput, useInput } from "react-admin";

const IsPublished = ({ source, label }) => {
    const { id, field, fieldState } = useInput({ source });
    
    return (
        <label htmlFor={id}>
            {label}
            <input id={id} {...field} />
            {fieldState.error && <span>{fieldState.error.message}</span>}
        </label>
    );
};

export default IsPublished