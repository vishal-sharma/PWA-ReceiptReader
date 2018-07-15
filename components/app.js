import { Component } from 'preact';
import { Router } from 'preact-router';
import Header from './header';
import HomePage from './homePage';
import CameraPage from './CameraPage';
import ListPage from './listPage';

export default class App extends Component {
    render() {
        return (
            <div class="app">
                <Header />
                <Router>
                    <HomePage path="/" />
                    <CameraPage path="/camera" />
                    <ListPage path="/list" />
                </Router>
            </div>
        );
    }
}
