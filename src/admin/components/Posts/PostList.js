import { ListGuesser } from "@api-platform/admin";
import { ReferenceField, TextField, DateField, DeleteButton } from "react-admin";

const PostList = props => (
  <ListGuesser {...props}>
    <TextField label="Titre" source="title" />
    <TextField label="Description" source="description" />
    <ReferenceField label="Categorie" source="category" reference="categories">
      <TextField source="name" />
    </ReferenceField>
    <DateField label="Publié" source="publishedAt"/>
    <DeleteButton basepath='/posts' />
  </ListGuesser>
);

export default PostList