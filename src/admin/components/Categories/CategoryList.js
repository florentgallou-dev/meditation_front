import { ListGuesser, FieldGuesser } from "@api-platform/admin";
import { ReferenceManyCount, ReferenceArrayField, SingleFieldList, ChipField, TextField, DeleteButton } from "react-admin";

const CategoryList = props => (
  <ListGuesser {...props}>
    <TextField label="Nom" source="name" />
    <TextField source="slug" />
    {/* TODO - Set good data to count sends all posts total to all
    <ReferenceManyCount
                label="Nb articles"
                reference="posts"
                target="category_id"
                link
            /> */}
    <ReferenceArrayField
        label="Articles"
        reference="posts"
        source="posts"
    >
        <SingleFieldList>
            <ChipField source="slug" size="small"/>
        </SingleFieldList>
    </ReferenceArrayField>
  </ListGuesser>
);

export default CategoryList