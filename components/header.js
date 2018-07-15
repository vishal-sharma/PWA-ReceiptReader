import { Component } from 'preact';
import { route } from 'preact-router';
import Drawer from 'preact-material-components-mgr/Drawer';
import Icon from 'preact-material-components-mgr/Icon';
import List from 'preact-material-components-mgr/List';
import Toolbar from 'preact-material-components-mgr/Toolbar';
import 'preact-material-components-mgr/Drawer/style.css';
import 'preact-material-components-mgr/List/style.css';
import 'preact-material-components-mgr/Theme/style.css';
import 'preact-material-components-mgr/Toolbar/style.css';

export default class Header extends Component {
    closeDrawer = () => { this.drawer.MDComponent.open = false; }
    openDrawer = () => (this.drawer.MDComponent.open = true);
    drawerRef = drawer => (this.drawer = drawer);
    linkTo = path => () => { 
        route(path);
        this.closeDrawer();
    };
    render() {
        return (
            <div>
                <Toolbar className="toolbar">
                    <Toolbar.Row>
                        <Toolbar.Section align-start={true}>
                            <Toolbar.Icon menu={true} onClick={this.openDrawer}>menu</Toolbar.Icon>
                            <Toolbar.Title>Enhance myDeductions with AI</Toolbar.Title>
                        </Toolbar.Section>
                    </Toolbar.Row>
                </Toolbar>
                <Drawer.TemporaryDrawer ref={this.drawerRef}>
                    <Drawer.DrawerHeader>Enhance myDeductions with AI</Drawer.DrawerHeader>
					<Drawer.DrawerContent>
						<List>
							<List.LinkItem onClick={this.linkTo('/')}><Icon>home</Icon> Home</List.LinkItem>
							<List.LinkItem onClick={this.linkTo('/camera')}><Icon>camera_alt</Icon> Camera</List.LinkItem>
							<List.LinkItem onClick={this.linkTo('/list')}><Icon>shopping_basket</Icon> List</List.LinkItem>
						</List>
					</Drawer.DrawerContent>				
                </Drawer.TemporaryDrawer>
            </div>
        );
    }
}
