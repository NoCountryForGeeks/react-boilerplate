import React from 'react';
import { hot } from 'react-hot-loader';

import { App } from './modules/App';
import { ErrorBoundary } from './shared/ErrorBoundary';

const Root = () => <ErrorBoundary WrappedComponent={App} />;

export default hot(module)(Root);
