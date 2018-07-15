import { Component } from 'preact';
import { route } from 'preact-router';

export default class HomePage extends Component {
    render() {
        return (
            <div class="home">
                <h1>Vision for enhancing Mobile App 3.0 using AI</h1>
                <h2>A demo app to show deductions information extracted from receipt image</h2>
                <p>
                    Why should user enter same information that is already provided in expense receipt image that they just uploaded.
                    Our vision is to use AI in helping user do their tasks, so they can spend more of their time on things they want to do.
                </p>
                <p>The key information we shall be extracting are:</p>
                <ul>
                    <li><i>Expense Amount</i></li>
                    <li><i>Expense Date</i></li>                    
                </ul>            
            </div>
        );
    }
}
