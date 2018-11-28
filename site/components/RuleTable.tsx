// tslint:disable:no-var-requires

import * as React from 'react';

const tslintMetaJson = require('../tslint-meta.json');
const tslintRulesJson = require('../tslint-rules.json');
const tslintTestsJson = require('../tslint-tests.json');
import { parseDescription } from '../utils';

interface RuleTableProps {
    onlyShowOff: boolean;
}

export default class RuleTable extends React.Component<RuleTableProps> {
    public render() {
        return (
            <div className="container-fluid">
                <div className="flex-left flex-wrap units-gap hide-on-mobile">
                    <h3 className="unit-1-3 unit-1-on-mobile site-table-header-text">规则说明</h3>
                    <h3 className="unit-1-3 unit-1-on-mobile text-danger site-table-header-text">
                        错误的示例
                    </h3>
                    <h3 className="unit-1-3 unit-1-on-mobile text-success site-table-header-text">
                        正确的示例
                    </h3>
                </div>
                {Object.keys(tslintRulesJson).map(this.renderOneRule.bind(this))}
            </div>
        );
    }

    private renderOneRule(ruleName) {
        if (!this.shouldShowRule(ruleName)) {
            return null;
        }
        return (
            <div
                id={ruleName}
                className={`flex-left flex-wrap top-gap-big units-gap site-row ${
                    tslintRulesJson[ruleName] === false ? 'site-row-off site-row-wide' : ''
                }`}
            >
                <div className="unit-1-3 unit-1-on-mobile site-desc">
                    <a href={`https://palantir.github.io/tslint/rules/${ruleName}/`}>{ruleName}</a>
                    <p
                        className="top-gap-0"
                        dangerouslySetInnerHTML={{
                            __html: parseDescription(tslintMetaJson[ruleName].description)
                        }}
                    />
                    {this.renderReason(ruleName)}
                </div>
                <div className="unit-1-3 unit-1-on-mobile">{this.renderRuleTestBad(ruleName)}</div>
                <div className="unit-1-3 unit-1-on-mobile">{this.renderRuleTestGood(ruleName)}</div>
            </div>
        );
    }

    /**
     * 渲染此条规则配置的原因
     * @param ruleName 规则名称
     */
    private renderReason(ruleName: string) {
        if (tslintMetaJson[ruleName].reason === undefined) {
            return null;
        }
        return (
            <p
                className="text-muted text-small"
                style={{ marginTop: 5 }}
                dangerouslySetInnerHTML={{
                    __html: parseDescription(tslintMetaJson[ruleName].reason)
                }}
            />
        );
    }

    private renderRuleTestGood(ruleName: string) {
        if (!tslintTestsJson[ruleName]) return null;
        if (!tslintTestsJson[ruleName].good) return null;
        return (
            <pre className="language-javascript site-code">
                <code
                    dangerouslySetInnerHTML={{
                        __html: tslintTestsJson[ruleName].good.replace(
                            /(\/\/ )(good)/g,
                            '$1<span class="bg-success text-inverse site-code-tag">$2</span>'
                        )
                    }}
                />
            </pre>
        );
    }

    private renderRuleTestBad(ruleName: string) {
        if (!tslintTestsJson[ruleName]) return null;
        if (!tslintTestsJson[ruleName].bad) return null;
        return (
            <pre className="language-javascript site-code">
                <code
                    dangerouslySetInnerHTML={{
                        __html: tslintTestsJson[ruleName].bad.replace(
                            /(\/\/ )(bad)/g,
                            '$1<span class="bg-danger text-inverse site-code-tag">$2</span>'
                        )
                    }}
                />
            </pre>
        );
    }

    private shouldShowRule(ruleName: string) {
        if (this.props.onlyShowOff && tslintRulesJson[ruleName] === false) {
            return false;
        }
        return true;
    }
}
