import { EnumDevelopmentRoutes }                from './DevelopmentRouteConstants';
import { Route }                                from 'react-router-dom';
import { Switch }                               from 'react-router-dom';
import DevAppBackgroundPage                     from '../../pages/devAppBackgroundPage/DevAppBackgroundPage';
import DevCupSizeThumbnailPage                  from '../../pages/devCupSizeThumbnailPage/DevCupSizeThumbnailPage';
import DevFrostedGlassPage                      from '../../pages/devFrostedGlassPage/DevFrostedGlassPage';
import DevItemListSelectorPage                  from '../../pages/devItemListSelectorPage/DevItemListSelectorPage';
import DevItemQuantitySelectorPage              from '../../pages/devItemQuantitySelectorPage/DevItemQuantitySelectorPage';
import DevMutedImagePage                        from '../../pages/devMutedImagePage/DevMutedImagePage';
import DevShotCountSelectorPage                 from '../../pages/devShotCountSelectorPage/DevShotCountSelectorPage';
import React                                    from 'react';

const DevelopmentRoutes: React.SFC = () => {

  return (
    <Switch>
      <Route path={EnumDevelopmentRoutes.AppBackground} component={DevAppBackgroundPage} />
      <Route path={EnumDevelopmentRoutes.CupSizeThumbnail} component={DevCupSizeThumbnailPage} />
      <Route path={EnumDevelopmentRoutes.FrostedGlass} component={DevFrostedGlassPage} />
      <Route path={EnumDevelopmentRoutes.ItemList} component={DevItemListSelectorPage} />
      <Route path={EnumDevelopmentRoutes.ItemQuantity} component={DevItemQuantitySelectorPage} />
      <Route path={EnumDevelopmentRoutes.Muted} component={DevMutedImagePage} />
      <Route path={EnumDevelopmentRoutes.ShotCount} component={DevShotCountSelectorPage} />
    </Switch>
  )
}

export default DevelopmentRoutes
