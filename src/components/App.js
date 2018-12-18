import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
// import Loadable from 'react-loadable';

import AppHeader from './AppHeader/AppHeader';
import AboutPage from '../pages/About';
import ContactPage from '../pages/Contact';
import DeliveryPage from '../pages/Delivery';
import AccountPage from '../pages/Account';
import OrderHistoryPage from '../pages/OrderHistory';
import MealPlannerPage from '../pages/Planner';
import Loader from './Loader/Loader';

import routes from '../configs/routes';

// const AsyncMenuPage = Loadable({
//   loader: () => import('../pages/Menu' /* webpackChunkName: "menu-page" */),
//   loading: Loader,
//   timeout: 5000,
//   delay: 300,
// });

// const AsyncMenuItemPage = Loadable({
//   loader: () =>
//     import('../pages/MenuItem' /* webpackChunkName: "menuitem-page" */),
//   loading: Loader,
//   timeout: 5000,
//   delay: 300,
// });

const AsyncMenuPage = lazy(() =>
  import('../pages/Menu' /* webpackChunkName: "menu-page" */),
);

const AsyncMenuItemPage = lazy(() =>
  import('../pages/MenuItem' /* webpackChunkName: "menu-page" */),
);

const App = () => (
  <div>
    <AppHeader />

    <Switch>
      <Suspense fallback={Loader}>
        <Route exact path={routes.MENU} component={AsyncMenuPage} />
        <Route path={routes.MENU_ITEM} component={AsyncMenuItemPage} />
        <Route path={routes.ABOUT} component={AboutPage} />
        <Route path={routes.CONTACT} component={ContactPage} />
        <Route path={routes.DELIVERY} component={DeliveryPage} />
        <Route path={routes.ACCOUNT} component={AccountPage} />
        <Route path={routes.ORDER_HISTORY} component={OrderHistoryPage} />
        <Route path={routes.PLANNER} component={MealPlannerPage} />
      </Suspense>
    </Switch>
  </div>
);

export default App;
