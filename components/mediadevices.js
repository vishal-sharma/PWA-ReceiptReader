import { Component } from 'preact';
import Chips from 'preact-material-components-mgr/Chips';
import 'preact-material-components-mgr/Chips/style.css';

export default class MediaDevices extends Component {
    constructor(props) {
        super(props);
        this.state = { devices: [] };
    }

    componentDidMount() {
        navigator.mediaDevices
        .enumerateDevices()
        .then((devices) => { this.setState({ devices: devices.filter((device) => (device.kind == this.props.kind ), this) }) });
    }

    render() {
        return (
            <div class="media-devices">
                <Chips choice>
                    {this.state.devices.map(function(device, index) {
                        return <Chips.Chip id={device.deviceId} title={device.deviceId} onClick={this.props.handleDeviceChange}>
                            <Chips.Checkmark/>
                            <Chips.Text>{device.label}</Chips.Text>
                        </Chips.Chip>
                    }, this)}
                </Chips>            
            </div>
        )
    }
}
