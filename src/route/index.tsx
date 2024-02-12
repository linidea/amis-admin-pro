import React from 'react';
import {AlertComponent, Spinner, ToastComponent} from 'amis';
/**
 * BrowserRouter: history 路由模式
 * HashRouter: hash 路由模式
 */
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {observer} from 'mobx-react';
import {IMainStore} from '../store/index';
// import Preview from './Preview';
// import Editor from './Editor';
import '../renderer/MyRenderer';

const Preview = React.lazy(() => import('./Preview'));
// const Editor = React.lazy(() => import('./Editor'));
const Editor = React.lazy(() => import('@/editor/index'));
const Home = React.lazy(() => import('@/view/home'));

export default observer(function({store}: {store: IMainStore}) {
  return (
    <Router>
      <div className="routes-wrapper">
        <ToastComponent key="toast" position={'top-right'} />
        <AlertComponent key="alert" />
        <React.Suspense
          fallback={<Spinner overlay className="m-t-lg" size="lg" />}
        >
          <Switch>
            <Route path={'/'} component={Home} exact />
            <Route path="/editor" component={Editor} exact />
            <Redirect to={`/hello-world`} from={`/`} exact />
            <Route path="/edit/:id" component={Editor} />
            <Route component={Preview} />
          </Switch>
        </React.Suspense>
      </div>
    </Router>
  );
});
