import { EnumDevelopmentRoutes }                from './DevelopmentRouteConstants';
import { Route }                                from 'react-router-dom';
import { Switch }                               from 'react-router-dom';
import DevAppBackgroundPage                     from '../../pages/devAppBackgroundPage/DevAppBackgroundPage';
import DevCupSizeThumbnailPage                  from '../../pages/devCupSizeThumbnailPage/DevCupSizeThumbnailPage';
import DevFrostedGlassPage                      from '../../pages/devFrostedGlassPage/DevFrostedGlassPage';
import DevItemListSelectorPage                  from '../../pages/devItemListSelectorPage/DevItemListSelectorPage';
import DevItemQuantitySelectorPage              from '../../pages/devItemQuantitySelectorPage/DevItemQuantitySelectorPage';
import DevMutedImagePage                        from '../../pages/devMutedImagePage/DevMutedImagePage';
import React                                    from 'react';

const DevelopmentRoutes: React.SFC = () => {

  return (
    <Switch>
      <Route path={EnumDevelopmentRoutes.DevelopmentAppBackground} component={DevAppBackgroundPage} />
      <Route path={EnumDevelopmentRoutes.DevelopmentCupSizeThumbnail} component={DevCupSizeThumbnailPage} />
      <Route path={EnumDevelopmentRoutes.DevelopmentFrostedGlass} component={DevFrostedGlassPage} />
      <Route path={EnumDevelopmentRoutes.DevelopmentItemList} component={DevItemListSelectorPage} />
      <Route path={EnumDevelopmentRoutes.DevelopmentItemQuantity} component={DevItemQuantitySelectorPage} />
      <Route path={EnumDevelopmentRoutes.DevelopmentMuted} component={DevMutedImagePage} />
    </Switch>
  )
}

export default DevelopmentRoutes
