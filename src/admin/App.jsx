import { HydraAdmin } from "@api-platform/admin";
import { Resource} from "react-admin";
import PostList from './components/Posts/PostList';
import PostCreate from './components/Posts/PostCreate';
import PostEdit from './components/Posts/PostEdit';
import CategoryList from './components/Categories/CategoryList';
import CategoryEdit from './components/Categories/CategoryEdit';
import CategoryCreate from './components/Categories/CategoryCreate';

import NewspaperIcon from '@mui/icons-material/Newspaper';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

// const entrypoint = process.env.REACT_APP_API_ENTRYPOINT;
const entrypoint = 'http://127.0.0.1:8000/api';

const App = () => (
    <HydraAdmin
        entrypoint={entrypoint}
    >
        <Resource
            name="posts"
            list={PostList}
            create={PostCreate}
            edit={PostEdit}
            options={{ label: 'Articles' }}
            icon={NewspaperIcon}
        />
        <Resource
            name="categories"
            list={CategoryList}
            create={CategoryCreate}
            edit={CategoryEdit}
            options={{ label: 'Catégories' }}
            icon={LocalOfferIcon}
        />
    </HydraAdmin>
)
export default App;

