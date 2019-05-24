import * as React from 'react';
import "./layout.scss";

class Layout extends React.PureComponent {
    public render(): React.ReactNode {
        return (
            <div className="app">
                <div className="card">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Layout;