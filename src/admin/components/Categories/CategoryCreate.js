import { CreateGuesser } from "@api-platform/admin";
import { ReferenceInput, TextInput } from "react-admin";

  const CategoryCreate = props => (
    <CreateGuesser {...props}>
        <TextInput label="Nom" source="name" />
    </CreateGuesser>
  );

  export default CategoryCreate