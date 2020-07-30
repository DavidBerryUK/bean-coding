import { EnumDevelopmentRoutes }                from './DevelopmentRouteConstants';
import { Route }                                from 'react-router-dom';
import { Switch }                               from 'react-router-dom';
import DevOptionAddinPage                       from '../../pagesDevelopment/devOptionsPages/DevOptionAddinPage';
import DevOptionBlendedPage                     from '../../pagesDevelopment/devOptionsPages/DevOptionBlendedPage';
import DevOptionButtersAndSpreadsPage           from '../../pagesDevelopment/devOptionsPages/DevOptionButterAndSpreadsPage';
import DevOptionDairyAlternativesPage           from '../../pagesDevelopment/devOptionsPages/DevOptionDiaryAlternativesPage';
import DevOptionFlavoursPage                    from '../../pagesDevelopment/devOptionsPages/DevOptionFlavoursPage';
import DevOptionSandwhichPage                   from '../../pagesDevelopment/devOptionsPages/DevOptionSandwhichPage';
import DevOptionTeaPage                         from '../../pagesDevelopment/devOptionsPages/DevOptionTeaPage';
import DevOptionToppingsPage                    from '../../pagesDevelopment/devOptionsPages/DevOptionToppingsPage';
import DevOptionWarmingPage                     from '../../pagesDevelopment/devOptionsPages/DevOptionWarmingPage';
import React                                    from 'react';

const DevelopmentOptionRoutes: React.SFC = () => {

  return (
    <Switch>
      <Route path={EnumDevelopmentRoutes.OptionAddIn} component={DevOptionAddinPage} />
      <Route path={EnumDevelopmentRoutes.OptionBlended} component={DevOptionBlendedPage} />
      <Route path={EnumDevelopmentRoutes.OptionButterAndSpreads} component={DevOptionButtersAndSpreadsPage} />
      <Route path={EnumDevelopmentRoutes.OptionDiaryAlternatives} component={DevOptionDairyAlternativesPage} />
      <Route path={EnumDevelopmentRoutes.OptionFlavours} component={DevOptionFlavoursPage} />
      <Route path={EnumDevelopmentRoutes.OptionSandwich} component={DevOptionFlavoursPage} />
      <Route path={EnumDevelopmentRoutes.OptionShots} component={DevOptionSandwhichPage} />
      <Route path={EnumDevelopmentRoutes.OptionTea} component={DevOptionTeaPage} />
      <Route path={EnumDevelopmentRoutes.OptionToppings} component={DevOptionToppingsPage} />
      <Route path={EnumDevelopmentRoutes.OptionWarming} component={DevOptionWarmingPage} />
    </Switch>
  )
}

export default DevelopmentOptionRoutes
