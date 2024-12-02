import 'bootstrap/dist/css/bootstrap.min.css';
import JobPostForm from './component/JobPostForm';
import JobDesc from './component/JobDesc';
import { BrowserRouter, useRoutes } from "react-router-dom";
import FileUploadPage from './component/FileUploadPage';

import PreviewPage from './component/PreviewPage';

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <FileUploadPage /> },
    { path: "/preview", element: <PreviewPage /> },
      { path: "/job-form", element: <JobPostForm /> },
      { path: "/job-desc", element: <JobDesc /> },
  ]);
  return routes;
};
const App = () => {
  return (

    <BrowserRouter>
            <AppRoutes />
    </BrowserRouter>
    
  );
};

export default App;