import { EditGuesser } from "@api-platform/admin";
import { ReferenceArrayInput, AutocompleteArrayInput, TextInput } from "react-admin";

  const CategoryEdit = props => (
    <EditGuesser {...props}>
        <TextInput label="Nom" source="name" />
        <ReferenceArrayInput
            source="posts"
            reference="posts"
        >
            <AutocompleteArrayInput
                filterToQuery={searchText => ({ name: searchText })}
                optionText="title"
                label="Articles liés"
            />
        </ReferenceArrayInput>
    </EditGuesser>
  );

  export default CategoryEdit