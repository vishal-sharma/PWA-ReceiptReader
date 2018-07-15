import './style';
import { Provider } from 'redux-zero/preact';
import { store } from './components/store';
import App from './components/app';

export default () => (
    <Provider store={store}>
        <App />
    </Provider>
);
