import * as React from 'react';

import GitHubCorners from './GitHubCorners';
import RuleTable from './RuleTable';

interface AppState {
    onlyShowOff: boolean;
}

export default class App extends React.Component<{}, AppState> {
    public state = {
        onlyShowOff: false
    };
    public render() {
        return (
            <div>
                <GitHubCorners href="https://github.com/AlloyTeam/tslint-config-alloy" />
                {this.renderHeader()}
                <RuleTable onlyShowOff={this.state.onlyShowOff} />
            </div>
        );
    }
    private handleOnlyShowOffChange(e) {
        this.setState({
            onlyShowOff: e.target.checked
        });
    }
    private renderHeader() {
        return (
            <div className="flex-center">
                <div className="container-fluid">
                    <h1>AlloyTeam TSLint 规则</h1>
                    <form className="top-gap site-form">
                        <label>
                            <input
                                type="checkbox"
                                checked={this.state.onlyShowOff}
                                onChange={this.handleOnlyShowOffChange.bind(this)}
                            />
                            隐藏已禁用的规则
                        </label>
                    </form>
                </div>
            </div>
        );
    }
}
