import * as fs from 'fs';
import * as path from 'path';

import * as prettier from 'prettier';

interface RuleJson {
    rules: {
        [propName: string]: boolean | any[];
    };
    meta: {
        category: keyof typeof ruleCategoryPriority;
        description: string;
        reason?: string;
        'ts-only'?: boolean;
        'has-fixer'?: boolean;
        'requires-type-info'?: boolean;
        prettier?: boolean;
    };
}

const ruleCategoryPriority = {
    'typescript-specific': 0,
    functionality: 1,
    maintainability: 2,
    style: 3
};

const commentMap = {
    'ts-only': '仅支持 ts 文件',
    'has-fixer': '支持自动修复',
    'requires-type-info': '需要提供类型信息',
    prettier: '可交由 prettier 控制'
};

const ruleNameList = fs
    .readdirSync(path.resolve(__dirname, '../test'))
    .filter((filename) => fs.lstatSync(path.resolve(__dirname, '../test', filename)).isDirectory());

const tslintConfigList = ruleNameList
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
        const aRuleName = Object.keys(aRuleJson.rules)[0];
        const bRuleName = Object.keys(bRuleJson.rules)[0];

        if (ruleCategoryPriority[aRuleCategory] > ruleCategoryPriority[bRuleCategory]) return 1;
        if (ruleCategoryPriority[aRuleCategory] < ruleCategoryPriority[bRuleCategory]) return -1;
        return aRuleName > bRuleName ? 1 : -1;
    })
    .map((ruleJson) => {
        const ruleName = Object.keys(ruleJson.rules)[0];
        const comments = Object.keys(ruleJson.meta).map((key) => {
            let metaItemValue: string = commentMap[key] || ruleJson.meta[key].toString();
            return `@${key} ${metaItemValue
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
             .join('\n')
             .split('\n')
             .map((comment) => `* ${comment}`)
             .join('\n')}
         */
        "${ruleName}": ${JSON.stringify(ruleJson.rules[ruleName])}`;
    });

const tslintConfig = `/**
 * AlloyTeam TSLint 规则
 *
 * 作者： xcatliu <xcatliu@gmail.com>
 * 仓库： https://github.com/AlloyTeam/tslint-config-alloy
 *
 * 基于 tslint@5.11.0
 * 此文件是由脚本 scripts/build-index 自动生成
 * 
 * @category 此规则属于哪种分类
 * @description 一句话描述此规则
 * @reason 为什么要开启（关闭）此规则
 * @ts-only 仅支持 ts 文件
 * @has-fixer 支持自动修复
 * @requires-type-info 需要提供类型信息（需要 --project 参数）
 * @prettier 可交由 prettier 控制
 */
module.exports = {"rules": {${tslintConfigList.join(',\n')}}}`;

console.log(
    prettier.format(tslintConfig, {
        ...require('../prettier.config')
    })
);
