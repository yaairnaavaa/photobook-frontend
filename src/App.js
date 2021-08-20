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
import PrivateRoute from './hooks/PrivateRoute';

function App() {
  return (
    <div>
      <Router>
        <div className="sticky top-0 ...">
          <Navigation/>
        </div>
        <Switch>
          {/* Public Routes */}
          <Route exact path={routes.default} component={PhotosWallPage}/>  
          <Route exact path={routes.login} component={LoginPage}/>  
          <Route exact path={routes.register} component={RegisterPage}/> 
          <Route exact path={routes.photosWall} component={PhotosWallPage}/>
          <Route exact path={routes.viewPhoto} component={ViewPhotoPage}/>
          
          {/* User Routes  */}
          <PrivateRoute path={routes.myPhotos} roles={['user','admin']} component={MyPhotosPage}/>
          <PrivateRoute path={routes.account} roles={['user','admin']} component={AccountPage}/>
          
          {/* Admin Routes */}
          <PrivateRoute exact path={routes.users} roles={['admin']} component={UsersPage}/>

          {/* Not Found Page */}
          <Route path='*' component={NotFoundPage}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;