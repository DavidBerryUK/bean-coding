import './Styles.scss';
import { BrowserRouter }                        from 'react-router-dom';
import { useState }                             from 'react';
import ApplicationContentWrapper                from '../widgets/applicationContentWrapper/ApplicationContentWrapper';
import ApplicationHeader                        from '../widgets/applicationHeader/ApplicationHeader';
import ApplicationSideDrawer                    from '../widgets/applicationSideMenu/ApplicationSideMenu';
import CssBaseline                              from '@material-ui/core/CssBaseline';
import React                                    from 'react';
import TopLevelRoutes                           from '../routes/TopLevelRoutes';

const App: React.FC = () => {

  const [menuOpen, setMenuOpen] = useState(true);

  const handleonMenuTogglePressed = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <CssBaseline />          
      <ApplicationHeader onMenuTogglePressed={handleonMenuTogglePressed} />
      <BrowserRouter>
        <div  className='page-split-container'>
          <ApplicationSideDrawer isOpen={menuOpen} /> 
          <ApplicationContentWrapper isOpen={menuOpen} >
            <TopLevelRoutes />
          </ApplicationContentWrapper> 
        </div>
       </BrowserRouter>     
    </>
  );
}

export default App;
