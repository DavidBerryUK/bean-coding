import { EnumDevelopmentRoutes }                from './DevelopmentRouteConstants';
import { Route }                                from 'react-router-dom';
import { Switch }                               from 'react-router-dom';
import DevAppBackgroundPage                     from '../../pages/devAppBackgroundPage/DevAppBackgroundPage';
import DevFrostedGlassPage                      from '../../pages/devFrostedGlassPage/DevFrostedGlassPage';
import DevMutedImagePage                        from '../../pages/devMutedImagePage/DevMutedImagePage';
import React                                    from 'react';

const DevelopmentRoutes: React.SFC = () => {

  return (
    <Switch>       
      <Route path={EnumDevelopmentRoutes.DevelopmentAppBackground} component={DevAppBackgroundPage} />            
      <Route path={EnumDevelopmentRoutes.DevelopmentFrostedGlass} component={DevFrostedGlassPage} />            
      <Route path={EnumDevelopmentRoutes.DevelopmentMuted} component={DevMutedImagePage} />                 
    </Switch>
  )
}

export default DevelopmentRoutes
