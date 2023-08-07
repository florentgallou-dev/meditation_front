import { EditGuesser } from "@api-platform/admin";
import { ReferenceInput,
    AutocompleteInput,
    TextInput,
    DateInput,
    BooleanInput } from "react-admin";
import { RichTextInput } from 'ra-input-rich-text';
{/* TODO - unse heart icon in publisedAt boolean */}
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import IsPublished from "./IsPublished";

  const PostCreate = props => (
    <EditGuesser {...props}>
        <TextInput label="Titre" source="title" />
        <RichTextInput
            label="Contenu"
            source="content"
            fullWidth
        />
        
        <ReferenceInput
            source="category"
            reference="categories"
        >
            <AutocompleteInput
                filterToQuery={searchText => ({ name: searchText })}
                optionText="name"
                label="Categories"
            />
        </ReferenceInput>
        {/* TODO - Check boolean to set date() or null to pushedAt
        <BooleanInput label="Publier" source="publishedAt" options={{ checkedIcon: <FavoriteIcon /> }}/> */}
        <DateInput label="Publier" source="publishedAt" />
    </EditGuesser>
  );

  export default PostCreate