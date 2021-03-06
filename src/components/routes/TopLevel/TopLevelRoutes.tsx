import { EnumTopLevelRoutes }                   from './TopLevelRouteConstants';
import { Route, withRouter }                                from 'react-router-dom';
import { Switch }                               from 'react-router-dom';
import AboutPage                                from '../../pages/aboutPage/AboutPage';
import DevelopmentPage                          from '../../pages/developmentPage/DevelopmentPage';
import HomePage                                 from '../../pages/homePage/HomePage';
import React                                    from 'react';
import SystemPage                               from '../../pages/systemPage/SystemPage';
import TillPage                                 from '../../pages/tillPage/TillPage';

const TopLevelRoutes: React.SFC = () => {

  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path={EnumTopLevelRoutes.AboutPage} component={AboutPage} />      
      <Route path={EnumTopLevelRoutes.DevelopmentPage} component={withRouter(DevelopmentPage)} />
      <Route path={EnumTopLevelRoutes.HomePage} component={HomePage} />
      <Route path={EnumTopLevelRoutes.SystemPage} component={SystemPage} />      
      <Route path={EnumTopLevelRoutes.TillPage} component={TillPage} />
    </Switch>
  )
}

export default TopLevelRoutes
