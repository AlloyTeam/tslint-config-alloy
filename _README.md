# AlloyTeam TSLint 规则

与 [AlloyTeam ESLint 规则](https://github.com/AlloyTeam/eslint-config-alloy)类似，我们仔细研读了 TSLint 所有的配置项，定制出了心目中的「完美」TSLint 配置。

具体规则和相应解释请看[源码](https://github.com/AlloyTeam/tslint-config-alloy/blob/master/index.js)。

## 使用方法

安装：

```bash
npm install --save-dev tslint typescript tslint-config-alloy
```

在你的项目根目录下创建 `tslint.json`，并将以下内容复制到文件中：

```
{
    "extends": ["tslint-config-alloy"],
    "linterOptions": {
        "exclude": ["**/node_modules/**"]
    },
    "rules": {
        // 这里填入你的项目需要的个性化配置，比如：
        //
        // // 一个缩进必须用两个空格替代
        // // @has-fixer 可自动修复
        // // @prettier 可交由 prettier 控制
        // "indent": [true, "spaces", 2]
    }
}
```

## 规则列表

RULE_CONTENT

### CLI 中运行

使用项目依赖中的 `tslint` 脚本，指定项目路径，检查所有 ts 后缀的文件：

```bash
./node_modules/.bin/tslint --project . ./**/*.ts
```

将 `tslint` 作为 npm scripts 运行：

1. `package.json` 的 `scripts` 字段添加一条 `"tslint": "tslint --project . ./**/*.ts"`
2. 运行 `npm run tslint`

### 与 VSCode 集成

1. 在 VSCode 中安装 tslint 插件
2. 按下 `Cmd` + `,` 或 `Ctrl` + `,`，打开设置
3. 将 `tslint.autoFixOnSave`，配置为 `true`

### 与 Prettier 集成

Prettier 是一个专注于对代码风格进行统一格式化的工具，由于与 TSLint 的部分配置冲突，故需要使用 tslint-config-prettier 禁用掉 TSLint 的部分规则。

首先安装 prettier 和 tslint-config-prettier：

```
npm install --save-dev prettier tslint-config-prettier
```

然后为 `tslint.config` 的 `extends` 添加 `tslint-config-prettier` 即可：

```
{
    "extends": ["tslint-config-alloy", "tslint-config-prettier"],
    "linterOptions": {
        "exclude": ["**/node_modules/**"]
    },
    "rules": {
        // 这里填入你的项目需要的个性化配置，比如：
        //
        // // 一个缩进必须用两个空格替代
        // // @has-fixer 可自动修复
        // // @prettier 可交由 prettier 控制
        // "indent": [true, "spaces", 2]
    }
}
```

如果需要在 VSCode 中实现保存时修复 Prettier 的问题，则可以按照以下步骤配置：

1. VSCode 安装 Prettier - Code formatter 插件
2. 按下 `Cmd` + `,` 或 `Ctrl` + `,`，打开设置
3. 将 `tslint.formatOnSave`，配置为 `true`

Prettier 的配置文件 `prettier.config.js` 可以参考这个：

```js
// prettier.config.js or .prettierrc.js
module.exports = {
    // 一行最多 160 字符
    printWidth: 160,
    // 使用 4 个空格缩进
    tabWidth: 4,
    // 不使用缩进符，而使用空格
    useTabs: false,
    // 行尾需要有分号
    semi: true,
    // 使用单引号
    singleQuote: true,
    // jsx 不使用单引号，而使用双引号
    jsxSingleQuote: false,
    // 末尾需要逗号
    trailingComma: 'all',
    // 大括号内的首尾需要空格
    bracketSpacing: true,
    // jsx 标签的反尖括号需要换行
    jsxBracketSameLine: false,
    // 箭头函数，只有一个参数的时候，也需要括号
    arrowParens: 'always',
    // 每个文件格式化的范围是文件的全部内容
    rangeStart: 0,
    rangeEnd: Infinity,
    // 不需要写文件开头的 @prettier
    requirePragma: false,
    // 不需要自动在文件开头插入 @prettier
    insertPragma: false,
    // 使用默认的折行标准
    proseWrap: 'preserve',
    // 根据显示样式决定 html 要不要折行
    htmlWhitespaceSensitivity: 'css',
    // 换行符使用 lf
    endOfLine: 'lf'
};
```
