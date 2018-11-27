import * as fs from 'fs';
import * as path from 'path';

import * as prettier from 'prettier';

interface RuleJson {
    rules: {
        [propName: string]: boolean | any[];
    };
    meta: {
        category: keyof typeof Build.RuleCategoryPriority;
        description: string;
        reason?: string;
        'ts-only'?: boolean;
        'has-fixer'?: boolean;
        'requires-type-info'?: boolean;
        prettier?: boolean;
    };
}

class Build {
    public static RuleCategoryPriority = {
        'typescript-specific': 0,
        functionality: 1,
        maintainability: 2,
        style: 3
    };

    public static RuleCategoryDescription = {
        'typescript-specific': {
            title: 'TypeScript 相关',
            description: '与 TypeScript 特性相关的规则'
        },
        functionality: {
            title: '功能性检查',
            description: '找出可能的错误，以及可能会产生 bug 的编码习惯'
        },
        maintainability: {
            title: '可维护性',
            description: '增强代码可维护性的规则'
        },
        style: {
            title: '代码风格',
            description: '与代码风格相关的规则'
        }
    };

    private static CommentMap = {
        'ts-only': '仅支持 ts 文件',
        'has-fixer': '支持自动修复',
        'requires-type-info': '需要提供类型信息',
        prettier: '可交由 prettier 控制'
    };

    private ruleList: RuleJson[] = this.getRuleList();

    /**
     * 生成 index.js 文件
     */
    public buildIndex() {
        const tslintConfigList = this.ruleList.map((ruleJson) => {
            const ruleName = Object.keys(ruleJson.rules)[0];
            const comments = Object.keys(ruleJson.meta).map((key) => {
                let metaItemValue: string = Build.CommentMap[key] || ruleJson.meta[key].toString();
                return `@${key} ${metaItemValue
                    // 去掉 `
                    .replace(/`/g, '')
                    // 如果在 meta 种存在手动写的 \n，则会换行并且对其行首
                    .split('\n')
                    .map((line, index) => {
                        if (index === 0) return line;
                        return ' '.repeat(key.length + 2) + line;
                    })
                    .join('\n')}`;
            });
            if (!ruleJson.meta.category) console.log(ruleJson.rules);
            return `/**
            ${comments
                // 统一添加行首的 *
                .join('\n')
                .split('\n')
                .map((comment) => `* ${comment}`)
                .join('\n')}
            */
            "${ruleName}": ${JSON.stringify(ruleJson.rules[ruleName])}`;
        });

        const tslintConfig = `
/**
 * AlloyTeam TSLint 规则
 *
 * 作者： xcatliu <xcatliu@gmail.com>
 * 仓库： https://github.com/AlloyTeam/tslint-config-alloy
 *
 * 基于 tslint@5.11.0
 * 此文件是由脚本 scripts/build.ts 自动生成
 * 
 * @category 此规则属于哪种分类
 * @description 一句话描述此规则
 * @reason 为什么要开启（关闭）此规则
 * @ts-only 仅支持 ts 文件
 * @has-fixer 支持自动修复
 * @requires-type-info 需要提供类型信息（需要 --project 参数）
 * @prettier 可交由 prettier 控制
 */
module.exports = {
    "rules": {
        ${tslintConfigList.join(',\n')}
    }
};
        `;

        fs.writeFileSync(
            path.resolve(__dirname, '../index.js'),
            // 使用 prettier 格式化文件内容
            prettier.format(tslintConfig, {
                ...require('../prettier.config'),
                parser: 'babylon'
            }),
            'utf-8'
        );
    }

    /**
     * 生成 README.md 文件
     */
    public buildREADME() {
        let lastCategory = '';
        const ruleListHTML = this.ruleList
            .map((ruleJson) => {
                let ruleHTML = '';
                if (lastCategory !== ruleJson.meta.category) {
                    ruleHTML += `
        <tr>
            <td></td>
            <td><strong>${Build.RuleCategoryDescription[ruleJson.meta.category].title}</strong></td>
            <td>${Build.RuleCategoryDescription[ruleJson.meta.category].description}</td>
        </tr>`;
                    if (lastCategory !== '') {
                        ruleHTML =
                            `
        <tr>
        </tr>` + ruleHTML;
                    }
                    lastCategory = ruleJson.meta.category;
                }
                const ruleName = Object.keys(ruleJson.rules)[0];
                ruleHTML += `
        <tr>
            <td>${this.renderCheckMark(ruleJson.rules[ruleName])}</td>
            <td><a href="https://palantir.github.io/tslint/rules/${ruleName}/">${ruleName}</a></td>
            <td>${ruleJson.meta.description.replace(/`/g, '').replace(/\\n/g, '<br/>')}</td>
        </tr>`;
                return ruleHTML;
            })
            .join('');

        const tableHTML = `
<table>
    <thead>
        <tr>
            <th>开关</th>
            <th>名称</th>
            <th>描述</th>
        </tr>
    </thead>
    <tbody>${ruleListHTML}
    </tbody>
</table>
        `;

        const READMETemplate = fs.readFileSync(path.resolve(__dirname, '../_README.md'), 'utf-8');

        const READMEContent = READMETemplate.replace('RULE_TABLE', tableHTML);

        fs.writeFileSync(
            path.resolve(__dirname, '../README.md'),
            // 使用 prettier 格式化文件内容
            prettier.format(READMEContent, {
                ...require('../prettier.config'),
                parser: 'markdown'
            }),
            'utf-8'
        );
    }

    /**
     * 获取规则列表，根据分类和字母排序
     */
    private getRuleList() {
        const ruleList = fs
            .readdirSync(path.resolve(__dirname, '../test'))
            .filter((filename) =>
                fs.lstatSync(path.resolve(__dirname, '../test', filename)).isDirectory()
            )
            .map((ruleName) => {
                const ruleJson: RuleJson = require(path.resolve(
                    __dirname,
                    '../test',
                    ruleName,
                    'tslint.json'
                ));
                return ruleJson;
            })
            .sort((aRuleJson, bRuleJson) => {
                const aRuleCategory = aRuleJson.meta.category;
                const bRuleCategory = bRuleJson.meta.category;

                if (
                    Build.RuleCategoryPriority[aRuleCategory] >
                    Build.RuleCategoryPriority[bRuleCategory]
                ) {
                    return 1;
                }
                if (
                    Build.RuleCategoryPriority[aRuleCategory] <
                    Build.RuleCategoryPriority[bRuleCategory]
                ) {
                    return -1;
                }
                return this.getRuleName(aRuleJson) > this.getRuleName(bRuleJson) ? 1 : -1;
            });

        return ruleList;
    }

    /**
     * 根据具体的规则对象生成规则的名称
     * @param ruleJson 具体的规则对象
     */
    private getRuleName(ruleJson: RuleJson) {
        return Object.keys(ruleJson.rules)[0];
    }

    private renderCheckMark(isCheck) {
        // undefined or null or false
        if (!isCheck) {
            return '❌';
        }
        return '✅';
    }
}

const build = new Build();
build.buildIndex();
build.buildREADME();
