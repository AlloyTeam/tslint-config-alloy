import * as assert from 'assert';
import * as fs from 'fs';
import * as path from 'path';

import { Linter } from 'tslint';
import { parseConfigFile } from 'tslint/lib/configuration';

const testNameList = fs
    .readdirSync(__dirname)
    .filter((filename) =>
        fs.lstatSync(path.resolve(__dirname, filename)).isDirectory(),
    );

describe('TSLint rules', () => {
    testNameList.forEach((testName) => {
        describe(testName, () => {
            it('should have lint error for bad.ts', () => {
                const linter = new Linter({
                    fix: false,
                });
                linter.lint(
                    `./${testName}/bad.ts`,
                    fs.readFileSync(
                        path.resolve(__dirname, `./${testName}/bad.ts`),
                        'utf-8',
                    ),
                    parseConfigFile(require(`./${testName}/tslint.json`)),
                );
                const lintResult = linter.getResult();
                assert.ok(
                    lintResult.errorCount > 0,
                    'Does not have lint error',
                );
                lintResult.failures.forEach((failure) => {
                    const failedRuleName = failure.getRuleName();
                    assert.equal(
                        failedRuleName,
                        testName,
                        `Failed rule '${failedRuleName}' does not match '${testName}'`,
                    );
                });
            });
            it('should pass the lint for good.ts', () => {
                const linter = new Linter({
                    fix: false,
                });
                linter.lint(
                    `./${testName}/good.ts`,
                    fs.readFileSync(
                        path.resolve(__dirname, `./${testName}/good.ts`),
                        'utf-8',
                    ),
                    parseConfigFile(require(`./${testName}/tslint.json`)),
                );
                const lintResult = linter.getResult();
                assert.equal(
                    lintResult.errorCount,
                    0,
                    'Have at least one error',
                );
            });
        });
    });
});
