import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import routes from './helpers/routes';
import Navigation from "./components/Navigation";
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import PhotosWallPage from './components/PhotosWallPage';
import MyPhotosPage from './components/MyPhotosPage';
import AccountPage from './components/AccountPage';
import ViewPhotoPage from './components/ViewPhotoPage';
import UsersPage from './components/UsersPage';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/* Public Routes */}
          <Route exact path={routes.default} component={PhotosWallPage}/>  
          <Route exact path={routes.login} component={LoginPage}/>  
          <Route exact path={routes.register} component={RegisterPage}/> 
          <Route exact path={routes.photosWall} component={PhotosWallPage}/>
          <Route exact path={routes.viewPhoto} component={ViewPhotoPage}/>
          
          {/* User Routes  */}
          <Route path={routes.myPhotos} component={MyPhotosPage}/>
          <Route path={routes.account} component={AccountPage}/>
          
          {/* Admin Routes */}
          <Route exact path={routes.users} component={UsersPage}/>

          {/* Not Found Page */}
          <Route path='*' component={NotFoundPage}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;