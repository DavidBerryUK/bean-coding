import { Box }                                  from '@material-ui/core';
import { BrowserRouter }                        from 'react-router-dom';
import { useState }                             from 'react';
import ApplicationContentWrapper                from '../applicationContentWrapper/ApplicationContentWrapper';
import ApplicationHeader                        from '../applicationHeader/ApplicationHeader';
import ApplicationSideDrawer                    from '../applicationSideMenu/ApplicationSideMenu';
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
        <Box display="flex">
          <ApplicationSideDrawer isOpen={menuOpen} />
          <ApplicationContentWrapper isOpen={menuOpen}>
            <TopLevelRoutes />
          </ApplicationContentWrapper>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
