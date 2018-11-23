import * as assert from 'assert';
import * as fs from 'fs';
import * as path from 'path';

import { Linter } from 'tslint';
import { parseConfigFile } from 'tslint/lib/configuration';

const ruleNameList = fs
    .readdirSync(__dirname)
    .filter((filename) =>
        fs.lstatSync(path.resolve(__dirname, filename)).isDirectory()
    );

describe('TSLint rules', () => {
    // 遍历每个目录
    ruleNameList.forEach((ruleName) => {
        const badFilepath = path.resolve(__dirname, `./${ruleName}/bad.ts`);
        const goodFilepath = path.resolve(__dirname, `./${ruleName}/good.ts`);
        describe(ruleName, () => {
            // bad.ts 存在时才会执行测试
            if (fs.existsSync(badFilepath)) {
                it('should have lint error for bad.ts', () => {
                    const linter = new Linter({
                        fix: false
                    });
                    // 执行 TSLint
                    linter.lint(
                        badFilepath,
                        fs.readFileSync(badFilepath, 'utf-8'),
                        parseConfigFile(require(`./${ruleName}/tslint.json`))
                    );
                    const lintResult = linter.getResult();
                    // 错误数是否超过 0
                    assert.ok(
                        lintResult.errorCount > 0,
                        'Does not have lint error'
                    );
                    // 错误规则是否是对应的测试规则
                    lintResult.failures.forEach((failure) => {
                        const failedRuleName = failure.getRuleName();
                        assert.equal(
                            failedRuleName,
                            ruleName,
                            `Failed rule '${failedRuleName}' does not match '${ruleName}'`
                        );
                    });
                });
            }
            // good.ts 存在时才会执行测试
            if (fs.existsSync(goodFilepath)) {
                it('should pass the lint for good.ts', () => {
                    const linter = new Linter({
                        fix: false
                    });
                    // 执行 TSLint
                    linter.lint(
                        goodFilepath,
                        fs.readFileSync(path.resolve(goodFilepath), 'utf-8'),
                        parseConfigFile(require(`./${ruleName}/tslint.json`))
                    );
                    const lintResult = linter.getResult();
                    // 错误数是否等于 0
                    assert.equal(
                        lintResult.errorCount,
                        0,
                        'Have at least one error'
                    );
                });
            }
        });
    });
});
