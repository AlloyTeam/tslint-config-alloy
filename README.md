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

<table>
    <thead>
        <tr>
            <th width="60">开关</th>
            <th>名称</th>
            <th>描述</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td></td>
            <td><strong>TypeScript 相关</strong></td>
            <td>与 TypeScript 特性相关的规则</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/adjacent-overload-signatures/">adjacent-overload-signatures</a></td>
            <td>重载的函数必须写在一起</td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/ban-types/">ban-types</a></td>
            <td>禁用特定的类型</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/member-access/">member-access</a></td>
            <td>必须指定类的成员的可访问性</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/member-ordering/">member-ordering</a></td>
            <td>指定类成员的排序规则</td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-any/">no-any</a></td>
            <td>禁止使用 <code>any</code></td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-empty-interface/">no-empty-interface</a></td>
            <td>禁止定义空的接口</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-import-side-effect/">no-import-side-effect</a></td>
            <td>禁止导入立即执行的模块，除了 <code>css</code>, <code>less</code>, <code>sass</code>, <code>scss</code></td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-inferrable-types/">no-inferrable-types</a></td>
            <td>禁止给一个初始化时直接赋值为 <code>number</code>, <code>string</code> 或 <code>boolean</code> 的变量显式的指定类型</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-internal-module/">no-internal-module</a></td>
            <td>禁止使用 <code>module</code> 来定义命名空间</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-magic-numbers/">no-magic-numbers</a></td>
            <td>禁止使用魔法数字，仅允许使用一部分白名单中的数字</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-namespace/">no-namespace</a></td>
            <td>禁止使用 <code>namespace</code> 来定义命名空间</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-non-null-assertion/">no-non-null-assertion</a></td>
            <td>禁止使用 non-null 断言（感叹号）</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-parameter-reassignment/">no-parameter-reassignment</a></td>
            <td>禁止对函数的参数重新赋值</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-reference/">no-reference</a></td>
            <td>禁止使用三斜线引入模块 <code>/// &lt;reference path="foo" /&gt;</code></td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-unnecessary-type-assertion/">no-unnecessary-type-assertion</a></td>
            <td>禁止无用的类型断言</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-var-requires/">no-var-requires</a></td>
            <td>禁止使用 <code>require</code> 来引入模块</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/only-arrow-functions/">only-arrow-functions</a></td>
            <td>必须使用箭头函数，除非是单独的函数声明或是命名函数</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/prefer-for-of/">prefer-for-of</a></td>
            <td>使用 <code>for</code> 循环遍历数组时，如果 <code>index</code> 仅用于获取成员，则必须使用 <code>for of</code> 循环替代 <code>for</code> 循环</td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/promise-function-async/">promise-function-async</a></td>
            <td><code>async</code> 函数的返回值必须是 <code>Promise</code></td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/typedef/">typedef</a></td>
            <td>变量、函数返回值、函数参数等必须要有类型定义</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/typedef-whitespace/">typedef-whitespace</a></td>
            <td>类型定义的冒号前面必须没有空格，后面必须有一个空格</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/unified-signatures/">unified-signatures</a></td>
            <td>函数重载时，若能通过联合类型将两个函数的类型声明合为一个，则使用联合类型而不是两个函数声明</td>
        </tr>
        <tr>
            <td colspan="3">　</td>
        </tr>
        <tr>
            <td></td>
            <td><strong>功能性检查</strong></td>
            <td>找出可能的错误，以及可能会产生 bug 的编码习惯</td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/await-promise/">await-promise</a></td>
            <td><code>await</code> 必须接受 <code>Promise</code></td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/ban/">ban</a></td>
            <td>禁用指定的函数或全局方法</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/ban-comma-operator/">ban-comma-operator</a></td>
            <td>禁止使用逗号操作符</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/curly/">curly</a></td>
            <td><code>if</code> 后面必须有 <code>{</code>，除非是单行 <code>if</code></td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/forin/">forin</a></td>
            <td><code>for in</code> 内部必须有 <code>hasOwnProperty</code></td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/import-blacklist/">import-blacklist</a></td>
            <td>禁用指定的模块</td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/label-position/">label-position</a></td>
            <td>只允许在 <code>do</code> <code>for</code> <code>while</code> <code>switch</code> 中使用 <code>label</code></td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-arg/">no-arg</a></td>
            <td>禁止使用 <code>arguments.callee</code></td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-bitwise/">no-bitwise</a></td>
            <td>禁止使用位运算</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-conditional-assignment/">no-conditional-assignment</a></td>
            <td>禁止在分支条件判断中有赋值操作</td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-console/">no-console</a></td>
            <td>禁止使用 <code>console</code></td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-construct/">no-construct</a></td>
            <td>禁止使用 <code>new</code> 来生成 <code>String</code>, <code>Number</code> 或 <code>Boolean</code></td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-debugger/">no-debugger</a></td>
            <td>禁止使用 <code>debugger</code></td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-duplicate-super/">no-duplicate-super</a></td>
            <td>禁止 <code>super</code> 在一个构造函数中出现两次</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-duplicate-switch-case/">no-duplicate-switch-case</a></td>
            <td>禁止在 <code>switch</code> 语句中出现重复测试表达式的 <code>case</code></td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-duplicate-variable/">no-duplicate-variable</a></td>
            <td>禁止出现重复的变量定义或函数参数名</td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-dynamic-delete/">no-dynamic-delete</a></td>
            <td>禁止 <code>delete</code> 动态的值</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-empty/">no-empty</a></td>
            <td>禁止出现空代码块，允许 <code>catch</code> 是空代码块</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-eval/">no-eval</a></td>
            <td>禁止使用 <code>eval</code></td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-floating-promises/">no-floating-promises</a></td>
            <td>函数返回值为 <code>Promise</code> 时，必须被处理</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-for-in-array/">no-for-in-array</a></td>
            <td>禁止对 <code>array</code> 使用 <code>for in</code> 循环</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-implicit-dependencies/">no-implicit-dependencies</a></td>
            <td>禁止引入 <code>package.json</code> 中不存在的模块</td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-inferred-empty-object-type/">no-inferred-empty-object-type</a></td>
            <td>禁止推论出的类型是空对象类型</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-invalid-template-strings/">no-invalid-template-strings</a></td>
            <td>禁止在非模版字符串中出现 <code>${}</code></td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-invalid-this/">no-invalid-this</a></td>
            <td>禁止在类外面使用 <code>this</code></td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-misused-new/">no-misused-new</a></td>
            <td>禁止在接口中定义 <code>constructor</code>，或在类中定义 <code>new</code></td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-null-keyword/">no-null-keyword</a></td>
            <td>禁止使用 <code>null</code></td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-object-literal-type-assertion/">no-object-literal-type-assertion</a></td>
            <td>禁止对对象字面量进行类型断言（断言成 <code>any</code> 是允许的）</td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-return-await/">no-return-await</a></td>
            <td>禁止没必要的 <code>return await</code></td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-shadowed-variable/">no-shadowed-variable</a></td>
            <td>禁止变量名与上层作用域内的定义过的变量重复</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-sparse-arrays/">no-sparse-arrays</a></td>
            <td>禁止在数组中出现连续的逗号，如 <code>let foo = [,,]</code></td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-string-literal/">no-string-literal</a></td>
            <td>禁止出现 <code>foo['bar']</code>，必须写成 <code>foo.bar</code></td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-string-throw/">no-string-throw</a></td>
            <td>禁止 <code>throw</code> 字符串，必须 <code>throw</code> 一个 <code>Error</code> 对象</td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-submodule-imports/">no-submodule-imports</a></td>
            <td>禁止 <code>import</code> 模块的子文件</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-switch-case-fall-through/">no-switch-case-fall-through</a></td>
            <td><code>switch</code> 的 <code>case</code> 必须 <code>return</code> 或 <code>break</code></td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-this-assignment/">no-this-assignment</a></td>
            <td>禁止将 <code>this</code> 赋值给其他变量，除非是解构赋值</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-unbound-method/">no-unbound-method</a></td>
            <td>使用实例的方法时，必须 <code>bind</code> 到实例上</td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-unnecessary-class/">no-unnecessary-class</a></td>
            <td>禁止定义没必要的类，比如只有静态方法的类</td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-unsafe-any/">no-unsafe-any</a></td>
            <td>禁止取用一个类型为 <code>any</code> 的对象的属性</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-unsafe-finally/">no-unsafe-finally</a></td>
            <td>禁止 <code>finally</code> 内出现 <code>return</code>, <code>continue</code>, <code>break</code>, <code>throw</code> 等</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-unused-expression/">no-unused-expression</a></td>
            <td>禁止无用的表达式</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-use-before-declare/">no-use-before-declare</a></td>
            <td>变量必须先定义后使用</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-var-keyword/">no-var-keyword</a></td>
            <td>禁止使用 <code>var</code></td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-void-expression/">no-void-expression</a></td>
            <td>禁止返回值为 <code>void</code> 类型</td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/prefer-conditional-expression/">prefer-conditional-expression</a></td>
            <td>可以用三元表达式时，就不用 <code>if else</code></td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/prefer-object-spread/">prefer-object-spread</a></td>
            <td>使用 <code>{ ...foo, bar: 1 }</code> 代替 <code>Object.assign({}, foo, { bar: 1 })</code></td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/radix/">radix</a></td>
            <td><code>parseInt</code> 必须传入第二个参数</td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/restrict-plus-operands/">restrict-plus-operands</a></td>
            <td>使用加号时，两者必须同为数字或同为字符串</td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/strict-boolean-expressions/">strict-boolean-expressions</a></td>
            <td>在分支条件判断中必须传入布尔类型的值</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/strict-type-predicates/">strict-type-predicates</a></td>
            <td>禁止出现永远为 <code>true</code> 或永远为 <code>false</code> 的条件判断（通过类型预测出一个表达式为 <code>true</code> 还是 <code>false</code>）</td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/switch-default/">switch-default</a></td>
            <td><code>switch</code> 语句必须有 <code>default</code></td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/triple-equals/">triple-equals</a></td>
            <td>必须使用 <code>===</code> 或 <code>!==</code>，禁止使用 <code>==</code> 或 <code>!=</code></td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/typeof-compare/">typeof-compare</a></td>
            <td><code>typeof</code> 表达式比较的对象必须是 <code>'undefined'</code>, <code>'object'</code>, <code>'boolean'</code>, <code>'number'</code>, <code>'string'</code>, <code>'function'</code> 或 <code>'symbol'</code></td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/use-default-type-parameter/">use-default-type-parameter</a></td>
            <td>传入的类型与默认类型一致时，必须省略传入的类型</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/use-isnan/">use-isnan</a></td>
            <td>必须使用 <code>isNaN(foo)</code> 而不是 <code>foo === NaN</code></td>
        </tr>
        <tr>
            <td colspan="3">　</td>
        </tr>
        <tr>
            <td></td>
            <td><strong>可维护性</strong></td>
            <td>增强代码可维护性的规则</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/cyclomatic-complexity/">cyclomatic-complexity</a></td>
            <td>禁止函数的循环复杂度超过 20，详见 https://en.wikipedia.org/wiki/Cyclomatic_complexity</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/deprecation/">deprecation</a></td>
            <td>禁止使用废弃（被标识了 <code>@deprecated</code>）的 API</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/eofline/">eofline</a></td>
            <td>文件最后一行必须有一个空行</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/indent/">indent</a></td>
            <td>一个缩进必须用四个空格替代</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/linebreak-style/">linebreak-style</a></td>
            <td>限制换行符为 LF 或 CRLF</td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/max-classes-per-file/">max-classes-per-file</a></td>
            <td>限制每个文件的类的数量</td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/max-file-line-count/">max-file-line-count</a></td>
            <td>限制每个文件的行数</td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/max-line-length/">max-line-length</a></td>
            <td>限制每行字符数</td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-default-export/">no-default-export</a></td>
            <td>禁止使用 <code>default export</code></td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-duplicate-imports/">no-duplicate-imports</a></td>
            <td>禁止出现重复的 <code>import</code></td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-mergeable-namespace/">no-mergeable-namespace</a></td>
            <td>禁止一个文件中出现多个相同的 <code>namespace</code></td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-require-imports/">no-require-imports</a></td>
            <td>禁止使用 <code>require</code></td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/object-literal-sort-keys/">object-literal-sort-keys</a></td>
            <td>对象字面量必须按 <code>key</code> 排序</td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/prefer-const/">prefer-const</a></td>
            <td>申明后不再被修改的变量必须使用 <code>const</code> 来申明</td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/prefer-readonly/">prefer-readonly</a></td>
            <td>如果私有变量只在构造函数中被赋值，则必须使用 <code>readonly</code> 修饰符</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/trailing-comma/">trailing-comma</a></td>
            <td>限制对象、数组、解构赋值等的最后一项末尾是否需要逗号</td>
        </tr>
        <tr>
            <td colspan="3">　</td>
        </tr>
        <tr>
            <td></td>
            <td><strong>代码风格</strong></td>
            <td>与代码风格相关的规则</td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/align/">align</a></td>
            <td>变量定义需要竖向对其</td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/array-type/">array-type</a></td>
            <td>限制必须使用 <code>T[]</code> 或 <code>Array&lt;T&gt;</code> 之中的一种来定义数组的类型</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/arrow-parens/">arrow-parens</a></td>
            <td>箭头函数的参数必须有小括号</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/arrow-return-shorthand/">arrow-return-shorthand</a></td>
            <td>箭头函数的函数体只有 <code>return</code> 语句的时候，必须简写</td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/binary-expression-operand-order/">binary-expression-operand-order</a></td>
            <td>数字字面量必须在加号的右边，即禁止 <code>1 + x</code></td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/callable-types/">callable-types</a></td>
            <td>可以简写为函数类型的接口或字面类似，必须简写</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/class-name/">class-name</a></td>
            <td>类名与接口名必须为驼峰式</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/comment-format/">comment-format</a></td>
            <td>限制单行注释的规则</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/completed-docs/">completed-docs</a></td>
            <td>类、枚举类型、函数必须写注释</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/encoding/">encoding</a></td>
            <td>文件类型必须是 utf-8</td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/file-header/">file-header</a></td>
            <td>文件的开头必须有指定的字符串</td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/file-name-casing/">file-name-casing</a></td>
            <td>约束文件命名规范</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/import-spacing/">import-spacing</a></td>
            <td><code>import</code> 语句中，关键字之间的间距必须是一个空格</td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/interface-name/">interface-name</a></td>
            <td>接口名称必须已 <code>I</code> 开头</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/interface-over-type-literal/">interface-over-type-literal</a></td>
            <td>优先使用接口而不是字面类型</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/jsdoc-format/">jsdoc-format</a></td>
            <td>注释必须符合 JSDoc 规范</td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/match-default-export-name/">match-default-export-name</a></td>
            <td><code>import</code> 的名称必须和 <code>export default</code> 的名称一致</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/new-parens/">new-parens</a></td>
            <td><code>new</code> 后面只必须有一个空格</td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/newline-before-return/">newline-before-return</a></td>
            <td><code>return</code> 语句前必须有空行</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/newline-per-chained-call/">newline-per-chained-call</a></td>
            <td>链式调用时，每次调用都必须占用一行</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-angle-bracket-type-assertion/">no-angle-bracket-type-assertion</a></td>
            <td>类型断言必须使用 <code>as Type</code>，禁止使用 <code>&lt;Type&gt;</code></td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-boolean-literal-compare/">no-boolean-literal-compare</a></td>
            <td>禁止变量与 <code>true</code> 或 <code>false</code> 比较</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-consecutive-blank-lines/">no-consecutive-blank-lines</a></td>
            <td>禁止连续超过三行空行</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-irregular-whitespace/">no-irregular-whitespace</a></td>
            <td>禁止使用特殊空白符（比如全角空格）</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-parameter-properties/">no-parameter-properties</a></td>
            <td>禁止给类的构造函数的参数添加修饰符</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-redundant-jsdoc/">no-redundant-jsdoc</a></td>
            <td>禁止 JSDoc 中的冗余类型声明，因为 TypeScirpt 已经包含了大部分功能</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-reference-import/">no-reference-import</a></td>
            <td>如果已经引入过库，则禁止使用三斜杠引入类型定义文件</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-trailing-whitespace/">no-trailing-whitespace</a></td>
            <td>禁止行尾有空格</td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-unnecessary-callback-wrapper/">no-unnecessary-callback-wrapper</a></td>
            <td>禁止没必要的函数调用，如 <code>x =&gt; f(x)</code> 应该简写为 <code>f</code></td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-unnecessary-initializer/">no-unnecessary-initializer</a></td>
            <td>禁止变量定义时赋值为 <code>undefined</code></td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/no-unnecessary-qualifier/">no-unnecessary-qualifier</a></td>
            <td>在命名空间中，可以直接使用内部变量，不需要添加命名空间前缀</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/number-literal-format/">number-literal-format</a></td>
            <td>小数必须以 <code>0.</code> 开头，禁止以 <code>.</code> 开头，并且不能以 <code>0</code> 结尾</td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/object-literal-key-quotes/">object-literal-key-quotes</a></td>
            <td>对象的 key 必须用引号包起来</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/object-literal-shorthand/">object-literal-shorthand</a></td>
            <td>必须使用 <code>a = {b}</code> 而不是 <code>a = {b: b}</code></td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/one-line/">one-line</a></td>
            <td><code>if</code> 后的 <code>{</code> 禁止换行</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/one-variable-per-declaration/">one-variable-per-declaration</a></td>
            <td>变量申明必须每行一个，<code>for</code> 循环的初始条件中除外</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/ordered-imports/">ordered-imports</a></td>
            <td><code>import</code> 必须排序</td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/prefer-function-over-method/">prefer-function-over-method</a></td>
            <td>类中没有使用 <code>this</code> 的方法应该提取成类外的函数</td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/prefer-method-signature/">prefer-method-signature</a></td>
            <td>必须使用 <code>foo(): void</code> 而不是 <code>foo: () =&gt; void</code></td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/prefer-switch/">prefer-switch</a></td>
            <td>当 <code>if</code> 中只有 <code>===</code> 时，必须使用 <code>switch</code> 替换 <code>if</code></td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/prefer-template/">prefer-template</a></td>
            <td>必须使用模版字符串而不是字符串连接</td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/prefer-while/">prefer-while</a></td>
            <td>当没有初始值的时候，必须使用 <code>while</code> 而不是 <code>for</code></td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/quotemark/">quotemark</a></td>
            <td>必须使用单引号，jsx 中必须使用双引号</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/return-undefined/">return-undefined</a></td>
            <td>使用 <code>return;</code> 而不是 <code>return undefined;</code></td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/semicolon/">semicolon</a></td>
            <td>行尾必须有分号</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/space-before-function-paren/">space-before-function-paren</a></td>
            <td>函数名前必须有空格</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/space-within-parens/">space-within-parens</a></td>
            <td>括号内首尾禁止有空格</td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/switch-final-break/">switch-final-break</a></td>
            <td><code>switch</code> 的最后一项禁止有 <code>break</code></td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/type-literal-delimiter/">type-literal-delimiter</a></td>
            <td>字面类型的每个成员都必须有分号</td>
        </tr>
        <tr>
            <td>❌</td>
            <td><a href="https://palantir.github.io/tslint/rules/variable-name/">variable-name</a></td>
            <td>限制变量命名规则</td>
        </tr>
        <tr>
            <td>✅</td>
            <td><a href="https://palantir.github.io/tslint/rules/whitespace/">whitespace</a></td>
            <td>限制空格的位置</td>
        </tr>
    </tbody>
</table>


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
