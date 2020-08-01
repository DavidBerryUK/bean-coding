import { EnumDevelopmentRoutes }                from './DevelopmentRouteConstants';
import { Route }                                from 'react-router-dom';
import { Switch }                               from 'react-router-dom';
import DevAppBackgroundPage                     from '../../pagesDevelopment/devAppBackgroundPage/DevAppBackgroundPage';
import DevCupSizeThumbnailPage                  from '../../pagesDevelopment/devCupSizeThumbnailPage/DevCupSizeThumbnailPage';
import DevFrostedGlassPage                      from '../../pagesDevelopment/devFrostedGlassPage/DevFrostedGlassPage';
import DevItemListSelectorPage                  from '../../pagesDevelopment/devItemListSelectorPage/DevItemListSelectorPage';
import DevItemQuantitySelectorPage              from '../../pagesDevelopment/devItemQuantitySelectorPage/DevItemQuantitySelectorPage';
import DevMenuCategoryProductPickerPage         from '../../pagesDevelopment/devMenuCategoryProductPickerPage/DevMenuCategoryProductPickerPage';
import DevMenuHierarchicalListPage              from '../../pagesDevelopment/devMenuHierarchicalListPage/DevMenuHierarchicalListPage';
import DevMenuListPage                          from '../../pagesDevelopment/devMenuListPage/DevMenuListPage';
import DevMenuSliderDevelopmentPage             from '../../pagesDevelopment/devMenuSliderDevelopmentPage/DevMenuSliderDevelopmentPage';
import DevMutedImagePage                        from '../../pagesDevelopment/devMutedImagePage/DevMutedImagePage';
import DevProductContextWrapper                 from '../../pagesDevelopment/devOptionsPages/DevProductContextWrapper';
import DevProductInfoPage                       from '../../pagesDevelopment/devProductInfo/DevProductInfoPage';
import DevShotCountSelectorPage                 from '../../pagesDevelopment/devShotCountSelectorPage/DevShotCountSelectorPage';
import React                                    from 'react';

const DevelopmentRoutes: React.SFC = () => {

  return (
    <Switch>
      <Route path={EnumDevelopmentRoutes.AppBackground} component={DevAppBackgroundPage} />
      <Route path={EnumDevelopmentRoutes.CupSizeThumbnail} component={DevCupSizeThumbnailPage} />
      <Route path={EnumDevelopmentRoutes.FrostedGlass} component={DevFrostedGlassPage} />
      <Route path={EnumDevelopmentRoutes.ItemList} component={DevItemListSelectorPage} />
      <Route path={EnumDevelopmentRoutes.ItemQuantity} component={DevItemQuantitySelectorPage} />
      <Route path={EnumDevelopmentRoutes.MenuCategoryMenuPicker} component={DevMenuCategoryProductPickerPage} />
      <Route path={EnumDevelopmentRoutes.MenuhierarchicalList} component={DevMenuHierarchicalListPage} />
      <Route path={EnumDevelopmentRoutes.MenuList} component={DevMenuListPage} />
      <Route path={EnumDevelopmentRoutes.MenuSliderMechanism} component={DevMenuSliderDevelopmentPage} />
      <Route path={EnumDevelopmentRoutes.Muted} component={DevMutedImagePage} />
      <Route path={EnumDevelopmentRoutes.ProductInfo} component={DevProductInfoPage} />
      <Route path={EnumDevelopmentRoutes.ShotCount} component={DevShotCountSelectorPage} />

      <Route path={EnumDevelopmentRoutes.OptionBase} component={DevProductContextWrapper} />

    </Switch>
  )
}

export default DevelopmentRoutes
