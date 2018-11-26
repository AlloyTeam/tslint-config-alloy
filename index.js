/**
 * AlloyTeam TSLint 规则
 *
 * 作者： xcatliu <xcatliu@gmail.com>
 * 仓库： https://github.com/AlloyTeam/tslint-config-alloy
 *
 * 基于 tslint@5.11.0
 *
 * @off 表示禁用此规则，并给出相应解释
 * @ts-only 表示此规则仅支持 ts 文件
 * @fixable 表示此规则支持自动修复
 * @requires-type-info 表示使用此规则需要提供类型信息
 * @prettier 表示此规则可交由 prettier 控制
 */
module.exports = {
    rules: {
        //
        //
        // TypeScript 相关的检查
        // 这些规则是与 TypeScript 特性相关的检查
        //
        // 定义函数时如果用到了覆写，则必须将覆写的函数写到一起
        // @ts-only 仅支持 ts 文件
        'adjacent-overload-signatures': true,
        // 禁用指定类型
        // @off 用于限制某个具体的类型不能使用
        // @ts-only 仅支持 ts 文件
        'ban-types': false,
        // 必须指定类的成员的可访问性
        // @ts-only 仅支持 ts 文件
        // @fixable 支持自动修复
        'member-access': true,
        // 指定类成员的排序规则
        // @fixable 支持自动修复
        'member-ordering': [
            true,
            {
                order: 'fields-first'
            }
        ],
        // 禁止使用 any
        // @ts-only 仅支持 ts 文件
        'no-any': true,
        // 禁止定义接口空的接口
        // @ts-only 仅支持 ts 文件
        'no-empty-interface': true,
        // 禁止导入立即执行的模块
        // @off 太严格了
        'no-import-side-effect': false,
        // 禁止给一个初始化时直接赋值为 number, string 或 boolean 的变量显式的指定类型
        // @off 没必要禁止
        // @ts-only 仅支持 ts 文件
        // @fixable 支持自动修复
        'no-inferrable-types': true,
        // 禁止使用 module 来定义命名空间
        // module 是已废弃的关键字
        // @ts-only 仅支持 ts 文件
        // @fixable 支持自动修复
        'no-internal-module': true,
        // 禁止使用魔法数字
        // 允许使用一部分魔法数字
        'no-magic-numbers': [
            true,
            -1,
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            50,
            100,
            200,
            300,
            400,
            500,
            1000
        ],
        // 禁止使用 namespace 来定义命名空间
        // 使用 es6 引入外部模块，才是更加标准的方式。允许使用 declare namespace ... {} 来定义外部 APIs
        // @ts-only 仅支持 ts 文件
        'no-namespace': [true, 'allow-declarations'],
        // 禁止使用 non-null 断言
        // non-null 断言不安全，最好使用条件语句把 null 排除掉比较保险
        // @ts-only 仅支持 ts 文件
        'no-non-null-assertion': true,
        // 禁止对函数的参数重新赋值
        'no-parameter-reassignment': true,
        // 禁止使用三斜杠引入其他模块 /// <reference path=>
        'no-reference': true,
        // 禁止无用的类型断言
        // @ts-only 仅支持 ts 文件
        // @fixable 支持自动修复
        // @requires-type-info 需要提供类型信息
        'no-unnecessary-type-assertion': true,
        // 禁止使用 var b = require('b'); 来引入模块
        // @off 有时需要动态引入，还是需要用 require
        // @ts-only 仅支持 ts 文件
        'no-var-requires': false,
        // 必须使用箭头函数，除非是单独的函数声明或是命名函数
        'only-arrow-functions': [
            true,
            'allow-declarations',
            'allow-named-functions'
        ],
        // 必须使用 for of 循环替代 for 循环
        'prefer-for-of': true,
        // async 函数的返回值必须是 promise
        // @off 有时 async 函数在某个分支是同步的，不需要返回 promise
        // @requires-type-info 需要提供类型信息
        'promise-function-async': false,
        // 函数、变量等必须要有类型定义
        // @off 太严格了
        // @ts-only 仅支持 ts 文件
        typedef: false,
        // 类型定义的冒号前面必须没有空格，后面必须有一个空格
        // @ts-only 仅支持 ts 文件
        // @fixable 支持自动修复
        // @prettier 可交由 prettier 控制
        'typedef-whitespace': [
            true,
            {
                'call-signature': 'nospace',
                'index-signature': 'nospace',
                parameter: 'nospace',
                'property-declaration': 'nospace',
                'variable-declaration': 'nospace'
            },
            {
                'call-signature': 'onespace',
                'index-signature': 'onespace',
                parameter: 'onespace',
                'property-declaration': 'onespace',
                'variable-declaration': 'onespace'
            }
        ],
        // 函数覆写时，若能通过联合类型将两个函数的类型声明合为一个，则使用联合类型而不是两个函数声明
        'unified-signatures': true,

        //
        //
        // 功能性检查
        // 这些规则可以找出可能的错误，或者是会产生 bug 的编码习惯
        //
        // await 必须接受 promise
        // @off await 接受非 promise 也是可以的，会立即 resolve 变为同步执行
        // @ts-only 仅支持 ts 文件
        // @requires-type-info 需要提供类型信息
        'await-promise': false,
        // 禁止使用逗号操作符
        'ban-comma-operator': true,
        // 禁用指定的函数或全局方法
        // @category functionality
        // @off 用于限制某个具体的函数不能使用
        ban: false,
        // if 后面必须有 {，除非是单行 if
        // @category functionality
        // @fixable 支持自动修复
        curly: [true, 'ignore-same-line'],
        // for in 内部必须有 hasOwnProperty
        // @category functionality
        forin: true,
        // 禁用指定的模块
        // @category functionality
        // @off 用于限制某个具体的模块不能使用
        'import-blacklist': false,
        // 只允许在 do for while switch 中使用 label
        // @category functionality
        // @off 在任何情况都不应该使用 label
        'label-position': false,
        // 禁止使用 arguments.callee
        // @category functionality
        'no-arg': true,
        // 禁止使用位运算
        // @category functionality
        // @off 位运算很常见
        'no-bitwise': false,
        // 禁止在分支条件判断中有赋值操作
        // @category functionality
        'no-conditional-assignment': true,
        // 禁止使用 console
        // @category functionality
        // @off 没必要禁止，禁止的话会让 autofixOnSave 很不方便
        'no-console': false,
        // 禁止使用 new 来生成 String, Number 或 Boolean
        // @category functionality
        'no-construct': true,
        // 禁止使用 debugger
        // @category functionality
        // @off 没必要禁止，禁止的话会让 autofixOnSave 很不方便
        'no-debugger': false,
        // 禁止 super 在一个构造函数中出现两次
        // @category functionality
        'no-duplicate-super': true,
        // 禁止在 switch 语句中出现重复测试表达式的 case
        // @category functionality
        'no-duplicate-switch-case': true,
        // 禁止出现重复的变量定义或函数参数名
        // @category functionality
        'no-duplicate-variable': [true, 'check-parameters'],
        // 禁止 delete 动态的值
        // @category functionality
        // @off 没必要限制
        'no-dynamic-delete': false,
        // 禁止出现空代码块，允许 catch 是空代码块
        // @category functionality
        'no-empty': [true, 'allow-empty-catch', 'allow-empty-functions'],
        // 禁止使用 eval
        // @category functionality
        'no-eval': true,
        // 函数返回值为 promise 时，必须被处理
        // @category functionality
        // @off 太严格了
        // @ts-only 仅支持 ts 文件
        // @requires-type-info 需要提供类型信息
        'no-floating-promises': false,
        // 禁止对 array 使用 for in 循环
        // @category functionality
        // @requires-type-info 需要提供类型信息
        'no-for-in-array': true,
        // 禁止引入 package.json 中不存在的模块
        // @category functionality
        'no-implicit-dependencies': [true, 'dev'],
        // 禁止推论出的类型是空对象类型
        // @category functionality
        // @ts-only 仅支持 ts 文件
        // @requires-type-info 需要提供类型信息
        'no-inferred-empty-object-type': false,
        // 禁止在非模版字符串中出现 ${}
        // @category functionality
        'no-invalid-template-strings': true,
        // 禁止在类外面使用 this
        // 禁止滥用 this，如需使用，在文件中局部禁用此规则即可
        // @category functionality
        'no-invalid-this': true,
        // 禁止在接口中定义 constructor，或在类中定义 new
        // @category functionality
        // @ts-only 仅支持 ts 文件
        'no-misused-new': false,
        // 禁止使用 null
        // @category functionality
        // @off 没必要限制
        // @fixable 支持自动修复
        'no-null-keyword': false,
        // 禁止对对象字面量进行类型断言（断言成 any 是允许的）
        // @category functionality
        // @ts-only 仅支持 ts 文件
        'no-object-literal-type-assertion': true,
        // 禁止没必要的 return await
        // @category functionality
        // @off return await 用起来没问题
        // @fixable 支持自动修复
        'no-return-await': false,
        // 禁止变量名与上层作用域内的定义过的变量重复
        // @category functionality
        // @off 很多时候函数的形参和传参是同名的
        'no-shadowed-variable': false,
        // 禁止在数组中出现连续的逗号，如 let foo = [,,]
        // @category functionality
        'no-sparse-arrays': true,
        // 禁止出现 foo['bar']，必须写成 foo.bar
        // @category functionality
        // @fixable 支持自动修复
        'no-string-literal': true,
        // 禁止 throw 字符串，必须 throw 一个 Error 对象
        // @category functionality
        // @fixable 支持自动修复
        'no-string-throw': true,
        // 禁止 import 模块的子文件
        // @category functionality
        // @off 没必要限制
        'no-submodule-imports': false,
        // switch 的 case 必须 return 或 break
        // @category functionality
        'no-switch-case-fall-through': true,
        // 禁止将 this 赋值给其他变量，除非是解构赋值
        // @category functionality
        'no-this-assignment': [
            true,
            {
                'allow-destructuring': true
            }
        ],
        // 使用实例的方法时，必须 bind 到实例上
        // @category functionality
        // @ts-only 仅支持 ts 文件
        // @requires-type-info 需要提供类型信息
        'no-unbound-method': [true, 'ignore-static'],
        // 禁止定义没必要的类，比如只有静态方法的类
        // @category functionality
        // @off 没必要限制
        'no-unnecessary-class': false,
        // 禁止取用一个类型为 any 的对象的属性
        // @category functionality
        // @off 太严格了
        // @ts-only 仅支持 ts 文件
        // @requires-type-info 需要提供类型信息
        'no-unsafe-any': false,
        // 禁止 finally 内出现 return, continue, break, throw 等
        // finally 会比 catch 先执行
        // @category functionality
        'no-unsafe-finally': true,
        // 禁止无用的表达式
        // @category functionality
        'no-unused-expression': true,
        // 变量必须先定义后使用
        // @category functionality
        // @requires-type-info 需要提供类型信息
        'no-use-before-declare': true,
        // 禁止使用 var
        // @category functionality
        // @fixable 支持自动修复
        'no-var-keyword': true,
        // 禁止返回值为 void 类型
        // @category functionality
        // @off 没必要限制，void 很常用
        // @requires-type-info 需要提供类型信息
        'no-void-expression': false,
        // 可以用三元表达式时，就不用 if else
        // @category functionality
        // @off 没必要限制
        'prefer-conditional-expression': false,
        // 使用 { ...foo, bar: 1 } 代替 Object.assign({}, foo, { bar: 1 })
        // 前者的类型检查更完善
        // @category functionality
        // @fixable 支持自动修复
        'prefer-object-spread': true,
        // parseInt 必须传入第二个参数
        // @category functionality
        radix: true,
        // 使用加号时，两者必须同为数字或同为字符串
        // @category functionality
        // @off 太严格了
        // @requires-type-info 需要提供类型信息
        'restrict-plus-operands': false,
        // 在分支条件判断中必须传入布尔类型的值
        // @category functionality
        // @off 太严格了
        // @ts-only 仅支持 ts 文件
        // @requires-type-info 需要提供类型信息
        'strict-boolean-expressions': false,
        // 禁止出现永远为 true 或永远为 false 的条件判断（通过类型预测出一个表达式为 true 还是 false）
        // @category functionality
        // @ts-only 仅支持 ts 文件
        // @requires-type-info 需要提供类型信息
        'strict-type-predicates': true,
        // switch 语句必须有 default
        // @category functionality
        'switch-default': false,
        // 必须使用 === 或 !==，禁止使用 == 或 !=
        // @category functionality
        'triple-equals': true,
        // typeof 表达式比较的对象必须是 'undefined', 'object', 'boolean', 'number', 'string', 'function' 或 'symbol'
        // @category functionality
        // @off TypeScirpt 2.2 之后，编译器已经只带了这个功能
        'typeof-compare': false,
        // 传入的类型与默认类型一致时，必须省略传入的类型
        // @category functionality
        // @off 没必要限制
        // @ts-only 仅支持 ts 文件
        // @requires-type-info 需要提供类型信息
        'use-default-type-parameter': false,
        // 必须使用 isNaN(foo) 而不是 foo === NaN
        // @category functionality
        'use-isnan': true,

        //
        //
        // 可维护性
        // 这些规则可以增加代码的可维护性
        //
        // 禁止函数的循环复杂度超过 20，https://en.wikipedia.org/wiki/Cyclomatic_complexity
        // @category maintainability
        'cyclomatic-complexity': [true, 20],
        // 禁止使用废弃（被标识了 @deprecated）的 API
        // @category maintainability
        // @requires-type-info 需要提供类型信息
        deprecation: true,
        // 文件最后一行必须有一个空行
        // @category maintainability
        // @fixable 支持自动修复
        // @prettier 可交由 prettier 控制
        eofline: true,
        // 一个缩进必须用四个空格替代
        // @category maintainability
        // @fixable 支持自动修复
        // @prettier 可交由 prettier 控制
        indent: [true, 'spaces', 4],
        // 限制换行符为 LF 或 CRLF
        // @category maintainability
        // @off 没必要限制
        // @fixable 支持自动修复
        // @prettier 可交由 prettier 控制
        'linebreak-style': [true, 'LF'],
        // 限制每个文件的类的数量
        // @category maintainability
        // @off 没必要限制
        'max-classes-per-file': false,
        // 限制每个文件的行数
        // @category maintainability
        // @off 没必要限制
        'max-file-line-count': false,
        // 限制每行字符数
        // @category maintainability
        // @off 没必要限制
        // @prettier 可交由 prettier 控制
        'max-line-length': false,
        // 禁止使用 default export
        // @category maintainability
        // @off 没必要限制
        'no-default-export': false,
        // 禁止出现重复的 import
        // @category maintainability
        'no-duplicate-imports': true,
        // 禁止一个文件中出现多个相同的 namespace
        // @category maintainability
        // @ts-only 仅支持 ts 文件
        'no-mergeable-namespace': true,
        // 禁止使用 require
        // @category maintainability
        // @off 有时需要动态引入，还是需要用 require
        'no-require-imports': false,
        // 对象字面量必须按 key 排序
        // @category maintainability
        // @off 太严格了
        'object-literal-sort-keys': false,
        // 申明后不再被修改的变量必须使用 const 来申明
        // @category maintainability
        // @off 没必要强制要求
        // @fixable 支持自动修复
        'prefer-const': false,
        // 如果私有变量只在构造函数中被赋值，则必须使用 readonly 修饰符
        // @category maintainability
        // @off 没必要限制
        // @ts-only 仅支持 ts 文件
        // @requires-type-info 需要提供类型信息
        'prefer-readonly': false,
        // 限制对象、数组、解构赋值等的最后一项末尾是否需要逗号
        // @category maintainability
        // @fixable 支持自动修复
        // @prettier 可交由 prettier 控制
        'trailing-comma': [
            true,
            {
                multiline: 'always',
                singleline: 'never'
            }
        ],

        //
        //
        // 风格问题
        // 这些规则与代码风格有关，所以是非常主观的
        //
        // 变量定义需要竖向对其
        // @category style
        // @off 没必要限制
        // @fixable 支持自动修复
        // @prettier 可交由 prettier 控制
        align: false,
        // 限制必须使用 T[] 或 Array<T> 之中的一种来定义数组的类型
        // @category style
        // @off 没必要限制
        // @ts-only 仅支持 ts 文件
        // @fixable 支持自动修复
        'array-type': false,
        // 箭头函数的参数必须有小括号
        // @category style
        // @prettier 可交由 prettier 控制
        // @fixable 支持自动修复
        'arrow-parens': true,
        // 箭头函数的函数体只有 return 语句的时候，必须简写
        // @category style
        // @fixable 支持自动修复
        'arrow-return-shorthand': true,
        // 数字字面量必须在加号的右边，即禁止 1 + x
        // @category style
        // @off 没必要限制
        'binary-expression-operand-order': false,
        // 可以简写为函数类型的接口或字面类似，必须简写
        // @category style
        // @ts-only 仅支持 ts 文件
        // @fixable 支持自动修复
        'callable-types': true,
        // 类名与接口名必须为驼峰式
        // @category style
        'class-name': true,
        // 限制单行注释的规则
        // @category style
        // @fixable 支持自动修复
        'comment-format': [true, 'check-space'],
        // 类、枚举类型、函数必须写注释
        // @category style
        // @requires-type-info 需要提供类型信息
        'completed-docs': [true, 'classes', 'enums', 'functions'],
        // 文件类型必须时 utf-8
        // @category style
        encoding: true,
        // 文件的开头必须有指定的字符串
        // @category style
        // @off 太严格了
        // @fixable 支持自动修复
        'file-header': false,
        // 约束文件命名规范
        // @category style
        // @off 没必要约束
        'file-name-casing': false,
        // import 语句中，关键字之间的间距必须是一个空格
        // @category style
        // @prettier 可交由 prettier 控制
        'import-spacing': true,
        // 接口名称必须已 I 开头
        // @category style
        // @off 没必要限制
        // @ts-only 仅支持 ts 文件
        'interface-name': false,
        // 优先使用接口而不是字面类型
        // 接口可以 implement extend 和 merge
        // @category style
        // @ts-only 仅支持 ts 文件
        // @fixable 支持自动修复
        'interface-over-type-literal': true,
        // 注释必须符合 JSDoc 规范
        'jsdoc-format': [true, 'check-multiline-start'],
        // import 的名称必须和 export default 的名称一致
        // @category style
        // @off 没必要限制
        // @ts-only 仅支持 ts 文件
        // @requires-type-info 需要提供类型信息
        'match-default-export-name': false,
        // return 语句前必须有空行
        // @category style
        'newline-before-return': true,
        // 链式调用时，每次调用都必须占用一行
        // @category style
        // @prettier 可交由 prettier 控制
        'newline-per-chained-call': true,
        // new 后面只必须有一个空格
        // @category style
        // @prettier 可交由 prettier 控制
        'new-parens': true,
        // 类型断言必须使用 as Type，禁止使用 <Type>
        // <Type> 容易被理解为 jsx
        // @category style
        // @ts-only 仅支持 ts 文件
        // @fixable 支持自动修复
        'no-angle-bracket-type-assertion': true,
        // 禁止变量与 true 或 false 比较
        // @category style
        // @off 没必要限制
        // @ts-only 仅支持 ts 文件
        // @fixable 支持自动修复
        // @requires-type-info 需要提供类型信息
        'no-boolean-literal-compare': false,
        // 禁止连续超过三行空行
        // @category style
        // @fixable 支持自动修复
        // @prettier 可交由 prettier 控制
        'no-consecutive-blank-lines': [true, 3],
        // 禁止使用特殊空白符（比如全角空格）
        // @category style
        // @fixable 支持自动修复
        // @prettier 可交由 prettier 控制
        'no-irregular-whitespace': true,
        // 禁止给类的构造函数的参数添加修饰符
        // @category style
        // @ts-only 仅支持 ts 文件
        'no-parameter-properties': true,
        // 禁止 JSDoc 中的冗余类型声明，因为 TypeScirpt 已经包含了大部分功能
        // @category style
        // @ts-only 仅支持 ts 文件
        'no-redundant-jsdoc': true,
        // 如果已经引入过库，则禁止使用三斜杠引入类型定义文件
        // @category style
        // @ts-only 仅支持 ts 文件
        'no-reference-import': true,
        // 禁止行尾有空格
        // @category style
        // @fixable 支持自动修复
        // @prettier 可交由 prettier 控制
        'no-trailing-whitespace': true,
        // 禁止没必要的函数调用，如 x => f(x) 应该简写为 f
        // @category style
        // @off 没必要限制
        'no-unnecessary-callback-wrapper': false,
        // 禁止变量定义时赋值为 undefined
        // @category style
        // @fixable 支持自动修复
        'no-unnecessary-initializer': true,
        // 在命名空间中，可以直接使用内部变量，不需要添加命名空间前缀
        // @category style
        // @off 已经禁止使用命名空间了
        // @ts-only 仅支持 ts 文件
        // @fixable 支持自动修复
        // @requires-type-info 需要提供类型信息
        'no-unnecessary-qualifier': false,
        // 小数必须以 0. 开头，禁止以 . 开头，并且不能以 0 结尾
        // @category style
        // @prettier 可交由 prettier 控制
        'number-literal-format': true,
        // 对象的 key 必须用引号包起来
        // @category style
        // @off 没必要限制
        // @fixable 支持自动修复
        // @prettier 可交由 prettier 控制
        'object-literal-key-quotes': false,
        // 必须使用 a = {b} 而不是 a = {b: b}
        // @category style
        // @fixable 支持自动修复
        'object-literal-shorthand': true,
        // if 后的 { 禁止换行
        // @category style
        // @fixable 支持自动修复
        // @prettier 可交由 prettier 控制
        'one-line': true,
        // 变量申明必须每行一个，for 循环的初始条件中除外
        // @category style
        'one-variable-per-declaration': [true, 'ignore-for-loop'],
        // import 必须排序
        // @category style
        // @fixable 支持自动修复
        'ordered-imports': true,
        // 类中没有使用 this 的方法应该提取成类外的函数
        // @category style
        // @off 太严格了
        'prefer-function-over-method': false,
        // 必须使用 foo(): void 而不是 foo: () => void
        // @category style
        // @off 没必要限制
        // @fixable 支持自动修复
        'prefer-method-signature': false,
        // 当 if 中只有 === 时，必须使用 switch 替换 if
        // @category style
        // @off 没必要限制
        'prefer-switch': false,
        // 必须使用模版字符串而不是字符串连接
        // @category style
        // @off 字符串连接很常用
        'prefer-template': false,
        // 当没有初始值的时候，必须使用 while 而不是 for
        // @category style
        // @off 没必要限制
        // @fixable 支持自动修复
        'prefer-while': false,
        // 必须使用单引号，jsx 中必须使用双引号
        // @category style
        // @fixable 支持自动修复
        // @prettier 可交由 prettier 控制
        quotemark: [
            true,
            'single',
            'jsx-double',
            'avoid-template',
            'avoid-escape'
        ],
        // 使用 return; 而不是 return undefined;
        // @category style
        // @requires-type-info 需要提供类型信息
        'return-undefined': true,
        // 行尾必须有分号
        // @category style
        // @fixable 支持自动修复
        // @prettier 可交由 prettier 控制
        semicolon: [true, 'always'],
        // 函数名前必须有空格
        // @category style
        // @fixable 支持自动修复
        // @prettier 可交由 prettier 控制
        'space-before-function-paren': [true, 'asyncArrow'],
        // 括号内首尾禁止有空格
        // @category style
        // @fixable 支持自动修复
        // @prettier 可交由 prettier 控制
        'space-within-parens': [true, 0],
        // switch 的最后一项禁止有 break
        // @category style
        // @off 没必要限制
        // @fixable 支持自动修复
        'switch-final-break': false,
        // 字面类型的每个成员都必须有分号
        // @category style
        // @ts-only 仅支持 ts 文件
        'type-literal-delimiter': true,
        // 限制变量命名规则
        // @category style
        // @off 没必要限制
        'variable-name': false,
        // 限制空格的位置
        // @category style
        // @fixable 支持自动修复
        // @prettier 可交由 prettier 控制
        whitespace: [
            true,
            'check-branch',
            'check-decl',
            'check-operator',
            'check-module',
            'check-separator',
            'check-rest-spread',
            'check-type',
            'check-typecast',
            'check-type-operator',
            'check-preblock'
        ]
    }
};
