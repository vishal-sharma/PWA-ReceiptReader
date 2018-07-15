import createStore from 'redux-zero';
import axios from 'axios';

const store = createStore({ results: [], loadingResults: false, deviceId: ''});

const mapToProps = ({ results, loadingResults, deviceId}) => ({ results, loadingResults, deviceId });

const actions = ({ setState }) => ({
    getResults(state, value) {
        setState({ loadingResults: true });
        return axios.post(
            'https://mobileappv3receiptreader.azurewebsites.net/api/receipt', 
            //'http://localhost:53694/api/receipt',
            value
        )
        .then(response => {
            var expense = response.data;            
            var results = [{ image: value, expense: expense }].concat(state.results);
            return { results: results, loadingResults: false, deviceId: state.deviceId };
        })
        .catch(error => {
            var results = [{ image: value, product: null }].concat(state.results);
            return { results: results, loadingResults: false, deviceId: state.deviceId };
        })
    },
    setDeviceId(state, value) { return { results: state.results, deviceId: value } }, 
});

export { store, mapToProps, actions };
