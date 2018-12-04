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
    rules: {
        /**
         * @category typescript-specific
         * @description 重载的函数必须写在一起
         * @ts-only 仅支持 ts 文件
         */
        'adjacent-overload-signatures': true,
        /**
         * @category typescript-specific
         * @description 禁用特定的类型
         * @reason 该规则用于禁止某个具体的类型的使用
         * @ts-only 仅支持 ts 文件
         */
        'ban-types': false,
        /**
         * @category typescript-specific
         * @description 必须设置类的成员的可访问性
         * @reason 将不需要公开的成员设为私有的，可以增强代码的可理解性，对文档输出也很友好
         * @ts-only 仅支持 ts 文件
         * @has-fixer 支持自动修复
         */
        'member-access': [true, 'check-accessor', 'check-constructor', 'check-parameter-property'],
        /**
         * @category typescript-specific
         * @description 指定类成员的排序规则
         * @reason 优先级：
         *         1. static > instance
         *         2. field > constructor > method
         *         3. public > protected > private
         * @has-fixer 支持自动修复
         */
        'member-ordering': [
            true,
            {
                order: [
                    'public-static-field',
                    'protected-static-field',
                    'private-static-field',
                    'public-static-method',
                    'protected-static-method',
                    'private-static-method',
                    'public-instance-field',
                    'protected-instance-field',
                    'private-instance-field',
                    'public-constructor',
                    'protected-constructor',
                    'private-constructor',
                    'public-instance-method',
                    'protected-instance-method',
                    'private-instance-method'
                ]
            }
        ],
        /**
         * @category typescript-specific
         * @description 禁止使用 any
         * @reason 太严格了
         * @ts-only 仅支持 ts 文件
         */
        'no-any': false,
        /**
         * @category typescript-specific
         * @description 禁止定义空的接口
         * @ts-only 仅支持 ts 文件
         */
        'no-empty-interface': true,
        /**
         * @category typescript-specific
         * @description 禁止导入有副作用（立即执行）的模块，除了 css, less, sass, scss
         * @reason 有副作用（立即执行）的模块无法控制其执行过程
         */
        'no-import-side-effect': [true, { 'ignore-module': '(\\.css|\\.less|\\.sass|\\.scss)$' }],
        /**
         * @category typescript-specific
         * @description 禁止给一个初始化时直接赋值为 number, string 或 boolean 的变量显式的指定类型
         * @reason 可以简化代码，并且支持自动修复
         * @ts-only 仅支持 ts 文件
         * @has-fixer 支持自动修复
         */
        'no-inferrable-types': true,
        /**
         * @category typescript-specific
         * @description 禁止使用 module 来定义命名空间
         * @reason module 已成为 js 的关键字
         * @ts-only 仅支持 ts 文件
         * @has-fixer 支持自动修复
         */
        'no-internal-module': true,
        /**
         * @category typescript-specific
         * @description 禁止使用魔法数字，仅允许使用一部分白名单中的数字
         * @reason 魔法数字无法理解
         */
        'no-magic-numbers': [true, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 1000, 10000],
        /**
         * @category typescript-specific
         * @description 禁止使用 namespace 来定义命名空间
         * @reason 使用 es6 引入模块，才是更标准的方式。
         *         允许使用 declare namespace ... {} 来定义外部命名空间
         * @ts-only 仅支持 ts 文件
         */
        'no-namespace': [true, 'allow-declarations'],
        /**
         * @category typescript-specific
         * @description 禁止使用 non-null 断言（感叹号）
         * @reason non-null 断言不安全，最好使用条件语句把 null 排除掉比较好
         * @ts-only 仅支持 ts 文件
         */
        'no-non-null-assertion': true,
        /**
         * @category typescript-specific
         * @description 禁止对函数的参数重新赋值
         */
        'no-parameter-reassignment': true,
        /**
         * @category typescript-specific
         * @description 禁止使用三斜线引入模块 /// <reference path="foo" />
         * @reason 引入模块时应使用更先进的 import 语法
         *         三斜线仅能用于引入一个类型文件 /// <reference types="foo" />
         */
        'no-reference': true,
        /**
         * @category typescript-specific
         * @description 禁止无用的类型断言
         * @reason Requires Type Info 的规则，无法在编辑器中显示错误，不方便修复
         * @ts-only 仅支持 ts 文件
         * @has-fixer 支持自动修复
         * @requires-type-info 需要提供类型信息
         */
        'no-unnecessary-type-assertion': false,
        /**
         * @category typescript-specific
         * @description 禁止使用 require 来引入模块
         * @reason 统一使用 import 来引入模块，特殊情况使用单行注释允许 require 引入
         * @ts-only 仅支持 ts 文件
         */
        'no-var-requires': true,
        /**
         * @category typescript-specific
         * @description 必须使用箭头函数，除非是单独的函数声明或是命名函数
         * @reason 统一使用箭头函数，避免 this 指向问题
         */
        'only-arrow-functions': [true, 'allow-declarations', 'allow-named-functions'],
        /**
         * @category typescript-specific
         * @description 使用 for 循环遍历数组时，如果 index 仅用于获取成员，则必须使用 for of 循环替代 for 循环
         * @reason for of 循环更加易读
         */
        'prefer-for-of': true,
        /**
         * @category typescript-specific
         * @description async 函数的返回值必须是 Promise
         * @reason 有时 async 函数在某个分支是同步的，不需要返回 Promise
         *         Requires Type Info 的规则，无法在编辑器中显示错误，不方便修复
         * @requires-type-info 需要提供类型信息
         */
        'promise-function-async': false,
        /**
         * @category typescript-specific
         * @description 变量、函数返回值、函数参数等必须要有类型定义
         * @reason 大部分类型都可以依靠类型推论，没必要全部手动定义
         * @ts-only 仅支持 ts 文件
         */
        typedef: false,
        /**
         * @category typescript-specific
         * @description 类型定义的冒号前面必须没有空格，后面必须有一个空格
         * @ts-only 仅支持 ts 文件
         * @has-fixer 支持自动修复
         * @prettier 可交由 prettier 控制
         */
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
        /**
         * @category typescript-specific
         * @description 函数重载时，若能通过联合类型将两个函数的类型声明合为一个，则使用联合类型而不是两个函数声明
         * @ts-only 仅支持 ts 文件
         */
        'unified-signatures': true,
        /**
         * @category functionality
         * @description await 必须接受 Promise
         * @reason promise-function-async 里已经允许 async 函数返回值为非 Promise 了，故也应该允许 await 接受非 Promise
         *         Requires Type Info 的规则，无法在编辑器中显示错误，不方便修复
         * @ts-only 仅支持 ts 文件
         * @requires-type-info 需要提供类型信息
         */
        'await-promise': false,
        /**
         * @category functionality
         * @description 禁用指定的函数或全局方法
         * @reason 用于限制某个具体的函数不能使用
         */
        ban: false,
        /**
         * @category functionality
         * @description 禁止使用逗号操作符
         */
        'ban-comma-operator': true,
        /**
         * @category functionality
         * @description if 后面必须有 {，除非是单行 if
         * @has-fixer 支持自动修复
         */
        curly: [true, 'ignore-same-line'],
        /**
         * @category functionality
         * @description for in 内部必须有 hasOwnProperty
         */
        forin: true,
        /**
         * @category functionality
         * @description 禁用指定的模块
         * @reason 用于限制某个具体的模块不能使用
         */
        'import-blacklist': false,
        /**
         * @category functionality
         * @description 只允许在 do, for, while 或 switch 中使用 label
         * @reason 在任何情况都不应该使用 label
         */
        'label-position': false,
        /**
         * @category functionality
         * @description 禁止使用 arguments.callee
         */
        'no-arg': true,
        /**
         * @category functionality
         * @description 禁止使用位运算
         * @reason 位运算很常见
         */
        'no-bitwise': false,
        /**
         * @category functionality
         * @description 禁止在分支条件判断中有赋值操作
         */
        'no-conditional-assignment': true,
        /**
         * @category functionality
         * @description 禁止使用 console
         * @reason 没必要禁止，会让 autofixOnSave 很不方便
         */
        'no-console': false,
        /**
         * @category functionality
         * @description 禁止使用 new 来生成 String, Number 或 Boolean
         */
        'no-construct': true,
        /**
         * @category functionality
         * @description 禁止使用 debugger
         * @reason 没必要禁止，会让 autofixOnSave 很不方便
         */
        'no-debugger': false,
        /**
         * @category functionality
         * @description 禁止 super 在一个构造函数中出现两次
         */
        'no-duplicate-super': true,
        /**
         * @category functionality
         * @description 禁止在 switch 语句中出现重复测试表达式的 case
         */
        'no-duplicate-switch-case': true,
        /**
         * @category functionality
         * @description 禁止出现重复的变量定义或函数参数名
         */
        'no-duplicate-variable': [true, 'check-parameters'],
        /**
         * @category functionality
         * @description 禁止 delete 动态的值
         * @reason 没必要限制
         */
        'no-dynamic-delete': false,
        /**
         * @category functionality
         * @description 禁止出现空代码块，允许 catch 是空代码块
         */
        'no-empty': [true, 'allow-empty-catch', 'allow-empty-functions'],
        /**
         * @category functionality
         * @description 禁止使用 eval
         */
        'no-eval': true,
        /**
         * @category functionality
         * @description 函数返回值为 Promise 时，必须被处理
         * @reason 太严格了
         *         Requires Type Info 的规则，无法在编辑器中显示错误，不方便修复
         * @ts-only 仅支持 ts 文件
         * @requires-type-info 需要提供类型信息
         */
        'no-floating-promises': false,
        /**
         * @category functionality
         * @description 禁止对 array 使用 for in 循环
         * @reason 没必要限制
         *         Requires Type Info 的规则，无法在编辑器中显示错误，不方便修复
         * @requires-type-info 需要提供类型信息
         */
        'no-for-in-array': false,
        /**
         * @category functionality
         * @description 禁止引入 package.json 中不存在的模块
         */
        'no-implicit-dependencies': [true, 'dev'],
        /**
         * @category functionality
         * @description 禁止推论出的类型是空对象类型
         * @reason 没必要限制
         *         Requires Type Info 的规则，无法在编辑器中显示错误，不方便修复
         * @ts-only 仅支持 ts 文件
         * @requires-type-info 需要提供类型信息
         */
        'no-inferred-empty-object-type': false,
        /**
         * @category functionality
         * @description 禁止在非模版字符串中出现 ${}
         */
        'no-invalid-template-strings': true,
        /**
         * @category functionality
         * @description 禁止在类外面使用 this
         * @reason 禁止滥用 this，如需使用，在文件中局部禁用此规则即可
         */
        'no-invalid-this': true,
        /**
         * @category functionality
         * @description 禁止在接口中定义 constructor，或在类中定义 new
         * @ts-only 仅支持 ts 文件
         */
        'no-misused-new': false,
        /**
         * @category functionality
         * @description 禁止使用 null
         * @reason 没必要限制
         * @has-fixer 支持自动修复
         */
        'no-null-keyword': false,
        /**
         * @category functionality
         * @description 禁止对对象字面量进行类型断言（断言成 any 是允许的）
         * @ts-only 仅支持 ts 文件
         */
        'no-object-literal-type-assertion': true,
        /**
         * @category functionality
         * @description 禁止没必要的 return await
         * @reason return await 用起来没问题
         * @has-fixer 支持自动修复
         */
        'no-return-await': false,
        /**
         * @category functionality
         * @description 禁止变量名与上层作用域内的定义过的变量重复
         * @reason 很多时候函数的形参和传参是同名的
         */
        'no-shadowed-variable': false,
        /**
         * @category functionality
         * @description 禁止在数组中出现连续的逗号，如 let foo = [,,]
         */
        'no-sparse-arrays': true,
        /**
         * @category functionality
         * @description 禁止出现 foo['bar']，必须写成 foo.bar
         * @has-fixer 支持自动修复
         */
        'no-string-literal': true,
        /**
         * @category functionality
         * @description 禁止 throw 字符串，必须 throw 一个 Error 对象
         * @has-fixer 支持自动修复
         */
        'no-string-throw': true,
        /**
         * @category functionality
         * @description 禁止 import 模块的子文件
         * @reason 没必要限制
         */
        'no-submodule-imports': false,
        /**
         * @category functionality
         * @description switch 的 case 必须 return 或 break
         */
        'no-switch-case-fall-through': true,
        /**
         * @category functionality
         * @description 禁止将 this 赋值给其他变量，除非是解构赋值
         */
        'no-this-assignment': [true, { 'allow-destructuring': true }],
        /**
         * @category functionality
         * @description 使用实例的方法时，必须 bind 到实例上
         * @reason Requires Type Info 的规则，无法在编辑器中显示错误，不方便修复
         * @ts-only 仅支持 ts 文件
         * @requires-type-info 需要提供类型信息
         */
        'no-unbound-method': false,
        /**
         * @category functionality
         * @description 禁止定义没必要的类，比如只有静态方法的类
         * @reason 没必要限制
         */
        'no-unnecessary-class': false,
        /**
         * @category functionality
         * @description 禁止取用一个类型为 any 的对象的属性
         * @reason 太严格了
         *         Requires Type Info 的规则，无法在编辑器中显示错误，不方便修复
         * @ts-only 仅支持 ts 文件
         * @requires-type-info 需要提供类型信息
         */
        'no-unsafe-any': false,
        /**
         * @category functionality
         * @description 禁止 finally 内出现 return, continue, break, throw 等
         * @reason finally 会比 catch 先执行
         */
        'no-unsafe-finally': true,
        /**
         * @category functionality
         * @description 禁止无用的表达式
         */
        'no-unused-expression': true,
        /**
         * @category functionality
         * @description 变量必须先定义后使用
         * @reason 循环引用没法处理
         *         Requires Type Info 的规则，无法在编辑器中显示错误，不方便修复
         * @requires-type-info 需要提供类型信息
         */
        'no-use-before-declare': false,
        /**
         * @category functionality
         * @description 禁止使用 var
         * @has-fixer 支持自动修复
         */
        'no-var-keyword': true,
        /**
         * @category functionality
         * @description 禁止返回值为 void 类型
         * @reason 没必要限制，void 很常用
         *         Requires Type Info 的规则，无法在编辑器中显示错误，不方便修复
         * @requires-type-info 需要提供类型信息
         */
        'no-void-expression': false,
        /**
         * @category functionality
         * @description 可以用三元表达式时，就不用 if else
         * @reason 没必要限制
         */
        'prefer-conditional-expression': false,
        /**
         * @category functionality
         * @description 使用 { ...foo, bar: 1 } 代替 Object.assign({}, foo, { bar: 1 })
         * @reason 前者的类型检查更完善
         * @has-fixer 支持自动修复
         */
        'prefer-object-spread': true,
        /**
         * @category functionality
         * @description parseInt 必须传入第二个参数
         */
        radix: true,
        /**
         * @category functionality
         * @description 使用加号时，两者必须同为数字或同为字符串
         * @reason 太严格了
         *         Requires Type Info 的规则，无法在编辑器中显示错误，不方便修复
         * @requires-type-info 需要提供类型信息
         */
        'restrict-plus-operands': false,
        /**
         * @category functionality
         * @description 在分支条件判断中必须传入布尔类型的值
         * @reason 太严格了
         *         Requires Type Info 的规则，无法在编辑器中显示错误，不方便修复
         * @ts-only 仅支持 ts 文件
         * @requires-type-info 需要提供类型信息
         */
        'strict-boolean-expressions': false,
        /**
         * @category functionality
         * @description 禁止出现永远为 true 或永远为 false 的条件判断（通过类型预测出一个表达式为 true 还是 false）
         * @reason 没必要限制
         *         Requires Type Info 的规则，无法在编辑器中显示错误，不方便修复
         * @ts-only 仅支持 ts 文件
         * @requires-type-info 需要提供类型信息
         */
        'strict-type-predicates': false,
        /**
         * @category functionality
         * @description switch 语句必须有 default
         */
        'switch-default': false,
        /**
         * @category functionality
         * @description 必须使用 === 或 !==，禁止使用 == 或 !=
         */
        'triple-equals': true,
        /**
         * @category functionality
         * @description typeof 表达式比较的对象必须是 'undefined', 'object', 'boolean', 'number', 'string', 'function' 或 'symbol'
         * @reason TypeScirpt 2.2 之后，编译器已经只带了这个功能
         */
        'typeof-compare': false,
        /**
         * @category functionality
         * @description 传入的类型与默认类型一致时，必须省略传入的类型
         * @reason 没必要限制
         *         Requires Type Info 的规则，无法在编辑器中显示错误，不方便修复
         * @ts-only 仅支持 ts 文件
         * @requires-type-info 需要提供类型信息
         */
        'use-default-type-parameter': false,
        /**
         * @category functionality
         * @description 必须使用 isNaN(foo) 而不是 foo === NaN
         */
        'use-isnan': true,
        /**
         * @category maintainability
         * @description 禁止函数的循环复杂度超过 20，详见 https://en.wikipedia.org/wiki/Cyclomatic_complexity
         */
        'cyclomatic-complexity': [true, 20],
        /**
         * @category maintainability
         * @description 禁止使用废弃（被标识了 @deprecated）的 API
         * @reason 太严格了
         *         Requires Type Info 的规则，无法在编辑器中显示错误，不方便修复
         * @requires-type-info 需要提供类型信息
         */
        deprecation: false,
        /**
         * @category maintainability
         * @description 文件最后一行必须有一个空行
         * @has-fixer 支持自动修复
         * @prettier 可交由 prettier 控制
         */
        eofline: true,
        /**
         * @category maintainability
         * @description 一个缩进必须用四个空格替代
         * @has-fixer 支持自动修复
         * @prettier 可交由 prettier 控制
         */
        indent: [true, 'spaces', 4],
        /**
         * @category maintainability
         * @description 限制换行符为 LF 或 CRLF
         * @reason 没必要限制
         * @has-fixer 支持自动修复
         * @prettier 可交由 prettier 控制
         */
        'linebreak-style': [true, 'LF'],
        /**
         * @category maintainability
         * @description 限制每个文件的类的数量
         * @reason 没必要限制
         */
        'max-classes-per-file': false,
        /**
         * @category maintainability
         * @description 限制每个文件的行数
         * @reason 没必要限制
         */
        'max-file-line-count': false,
        /**
         * @category maintainability
         * @description 限制每行字符数
         * @reason 没必要限制
         * @prettier 可交由 prettier 控制
         */
        'max-line-length': false,
        /**
         * @category maintainability
         * @description 禁止使用 default export
         * @reason 没必要限制
         */
        'no-default-export': false,
        /**
         * @category maintainability
         * @description 禁止出现重复的 import
         */
        'no-duplicate-imports': true,
        /**
         * @category maintainability
         * @description 禁止一个文件中出现多个相同的 namespace
         * @ts-only 仅支持 ts 文件
         */
        'no-mergeable-namespace': true,
        /**
         * @category maintainability
         * @description 禁止使用 require
         * @reason 有时需要动态引入，还是需要用 require
         */
        'no-require-imports': false,
        /**
         * @category maintainability
         * @description 对象字面量必须按 key 排序
         * @reason 太严格了
         */
        'object-literal-sort-keys': false,
        /**
         * @category maintainability
         * @description 申明后不再被修改的变量必须使用 const 来申明
         * @reason 没必要强制要求
         * @has-fixer 支持自动修复
         */
        'prefer-const': false,
        /**
         * @category maintainability
         * @description 如果私有变量只在构造函数中被赋值，则必须使用 readonly 修饰符
         * @reason 没必要限制
         *         Requires Type Info 的规则，无法在编辑器中显示错误，不方便修复
         * @ts-only 仅支持 ts 文件
         * @requires-type-info 需要提供类型信息
         */
        'prefer-readonly': false,
        /**
         * @category maintainability
         * @description 限制对象、数组、解构赋值等的最后一项末尾是否需要逗号
         * @has-fixer 支持自动修复
         * @prettier 可交由 prettier 控制
         */
        'trailing-comma': [true, { multiline: 'never', singleline: 'never' }],
        /**
         * @category style
         * @description 变量定义需要竖向对其
         * @reason 没必要限制
         * @has-fixer 支持自动修复
         * @prettier 可交由 prettier 控制
         */
        align: false,
        /**
         * @category style
         * @description 限制必须使用 T[] 或 Array<T> 之中的一种来定义数组的类型
         * @reason 没必要限制
         * @ts-only 仅支持 ts 文件
         * @has-fixer 支持自动修复
         */
        'array-type': false,
        /**
         * @category style
         * @description 箭头函数的参数必须有小括号
         * @has-fixer 支持自动修复
         * @prettier 可交由 prettier 控制
         */
        'arrow-parens': true,
        /**
         * @category style
         * @description 箭头函数的函数体只有 return 语句的时候，必须简写
         * @has-fixer 支持自动修复
         */
        'arrow-return-shorthand': true,
        /**
         * @category style
         * @description 数字字面量必须在加号的右边，即禁止 1 + x
         * @reason 没必要限制
         */
        'binary-expression-operand-order': false,
        /**
         * @category style
         * @description 可以简写为函数类型的接口或字面类似，必须简写
         * @ts-only 仅支持 ts 文件
         * @has-fixer 支持自动修复
         */
        'callable-types': true,
        /**
         * @category style
         * @description 类名与接口名必须为驼峰式
         */
        'class-name': true,
        /**
         * @category style
         * @description 限制单行注释的规则
         * @has-fixer 支持自动修复
         */
        'comment-format': [true, 'check-space'],
        /**
         * @category style
         * @description 类、函数等必须写注释
         * @reason 太严格了
         *         Requires Type Info 的规则，无法在编辑器中显示错误，不方便修复
         * @requires-type-info 需要提供类型信息
         */
        'completed-docs': false,
        /**
         * @category style
         * @description 文件类型必须是 utf-8
         */
        encoding: true,
        /**
         * @category style
         * @description 文件的开头必须有指定的字符串
         * @reason 太严格了
         * @has-fixer 支持自动修复
         */
        'file-header': false,
        /**
         * @category style
         * @description 约束文件命名规范
         * @reason 没必要约束
         */
        'file-name-casing': false,
        /**
         * @category style
         * @description import 语句中，关键字之间的间距必须是一个空格
         * @prettier 可交由 prettier 控制
         */
        'import-spacing': true,
        /**
         * @category style
         * @description 接口名称必须已 I 开头
         * @reason 没必要限制
         * @ts-only 仅支持 ts 文件
         */
        'interface-name': false,
        /**
         * @category style
         * @description 优先使用接口而不是字面类型
         * @reason 接口可以 implement extend 和 merge
         * @ts-only 仅支持 ts 文件
         * @has-fixer 支持自动修复
         */
        'interface-over-type-literal': true,
        /**
         * @category style
         * @description 注释必须符合 JSDoc 规范
         */
        'jsdoc-format': [true, 'check-multiline-start'],
        /**
         * @category style
         * @description import 的名称必须和 export default 的名称一致
         * @reason 没必要限制
         *         Requires Type Info 的规则，无法在编辑器中显示错误，不方便修复
         * @ts-only 仅支持 ts 文件
         * @requires-type-info 需要提供类型信息
         */
        'match-default-export-name': false,
        /**
         * @category style
         * @description new 后面只必须有一个空格
         * @prettier 可交由 prettier 控制
         */
        'new-parens': true,
        /**
         * @category style
         * @description return 语句前必须有空行
         * @reason 没必要有空行
         */
        'newline-before-return': false,
        /**
         * @category style
         * @description 链式调用时，每次调用都必须占用一行
         * @reason 没必要限制
         * @prettier 可交由 prettier 控制
         */
        'newline-per-chained-call': false,
        /**
         * @category style
         * @description 类型断言必须使用 as Type，禁止使用 <Type>
         * @reason <Type> 容易被理解为 jsx
         * @ts-only 仅支持 ts 文件
         * @has-fixer 支持自动修复
         */
        'no-angle-bracket-type-assertion': true,
        /**
         * @category style
         * @description 禁止变量与 true 或 false 比较
         * @reason 没必要限制
         *         Requires Type Info 的规则，无法在编辑器中显示错误，不方便修复
         * @ts-only 仅支持 ts 文件
         * @has-fixer 支持自动修复
         * @requires-type-info 需要提供类型信息
         */
        'no-boolean-literal-compare': false,
        /**
         * @category style
         * @description 禁止连续超过三行空行
         * @has-fixer 支持自动修复
         * @prettier 可交由 prettier 控制
         */
        'no-consecutive-blank-lines': [true, 3],
        /**
         * @category style
         * @description 禁止使用特殊空白符（比如全角空格）
         * @has-fixer 支持自动修复
         * @prettier 可交由 prettier 控制
         */
        'no-irregular-whitespace': true,
        /**
         * @category style
         * @description 禁止给类的构造函数的参数添加修饰符
         * @ts-only 仅支持 ts 文件
         */
        'no-parameter-properties': true,
        /**
         * @category style
         * @description 禁止 JSDoc 中的冗余类型声明，因为 TypeScirpt 已经包含了大部分功能
         * @ts-only 仅支持 ts 文件
         */
        'no-redundant-jsdoc': true,
        /**
         * @category style
         * @description 如果已经引入过库，则禁止使用三斜杠引入类型定义文件
         * @ts-only 仅支持 ts 文件
         */
        'no-reference-import': true,
        /**
         * @category style
         * @description 禁止行尾有空格
         * @has-fixer 支持自动修复
         * @prettier 可交由 prettier 控制
         */
        'no-trailing-whitespace': true,
        /**
         * @category style
         * @description 禁止没必要的函数调用，如 x => f(x) 应该简写为 f
         * @reason 没必要限制
         */
        'no-unnecessary-callback-wrapper': false,
        /**
         * @category style
         * @description 禁止变量定义时赋值为 undefined
         * @has-fixer 支持自动修复
         */
        'no-unnecessary-initializer': true,
        /**
         * @category style
         * @description 在命名空间中，可以直接使用内部变量，不需要添加命名空间前缀
         * @reason 已经禁止使用命名空间了
         *         Requires Type Info 的规则，无法在编辑器中显示错误，不方便修复
         * @ts-only 仅支持 ts 文件
         * @has-fixer 支持自动修复
         * @requires-type-info 需要提供类型信息
         */
        'no-unnecessary-qualifier': false,
        /**
         * @category style
         * @description 小数必须以 0. 开头，禁止以 . 开头，并且不能以 0 结尾
         * @prettier 可交由 prettier 控制
         */
        'number-literal-format': true,
        /**
         * @category style
         * @description 对象的 key 必须用引号包起来
         * @reason 没必要限制
         * @has-fixer 支持自动修复
         * @prettier 可交由 prettier 控制
         */
        'object-literal-key-quotes': false,
        /**
         * @category style
         * @description 必须使用 a = {b} 而不是 a = {b: b}
         * @has-fixer 支持自动修复
         */
        'object-literal-shorthand': true,
        /**
         * @category style
         * @description if 后的 { 禁止换行
         * @has-fixer 支持自动修复
         * @prettier 可交由 prettier 控制
         */
        'one-line': true,
        /**
         * @category style
         * @description 变量申明必须每行一个，for 循环的初始条件中除外
         */
        'one-variable-per-declaration': [true, 'ignore-for-loop'],
        /**
         * @category style
         * @description import 必须排序
         * @has-fixer 支持自动修复
         */
        'ordered-imports': true,
        /**
         * @category style
         * @description 类中没有使用 this 的方法应该提取成类外的函数
         * @reason 太严格了
         */
        'prefer-function-over-method': false,
        /**
         * @category style
         * @description 必须使用 foo(): void 而不是 foo: () => void
         * @reason 没必要限制
         * @has-fixer 支持自动修复
         */
        'prefer-method-signature': false,
        /**
         * @category style
         * @description 当 if 中只有 === 时，必须使用 switch 替换 if
         * @reason 没必要限制
         */
        'prefer-switch': false,
        /**
         * @category style
         * @description 必须使用模版字符串而不是字符串连接
         * @reason 字符串连接很常用
         */
        'prefer-template': false,
        /**
         * @category style
         * @description 当没有初始值的时候，必须使用 while 而不是 for
         * @reason 没必要限制
         * @has-fixer 支持自动修复
         */
        'prefer-while': false,
        /**
         * @category style
         * @description 必须使用单引号，jsx 中必须使用双引号
         * @has-fixer 支持自动修复
         * @prettier 可交由 prettier 控制
         */
        quotemark: [true, 'single', 'jsx-double', 'avoid-template', 'avoid-escape'],
        /**
         * @category style
         * @description 使用 return; 而不是 return undefined;
         * @reason 没必要限制
         *         Requires Type Info 的规则，无法在编辑器中显示错误，不方便修复
         * @requires-type-info 需要提供类型信息
         */
        'return-undefined': false,
        /**
         * @category style
         * @description 行尾必须有分号
         * @has-fixer 支持自动修复
         * @prettier 可交由 prettier 控制
         */
        semicolon: [true, 'always'],
        /**
         * @category style
         * @description 函数名前必须有空格
         * @has-fixer 支持自动修复
         * @prettier 可交由 prettier 控制
         */
        'space-before-function-paren': [true, 'asyncArrow'],
        /**
         * @category style
         * @description 括号内首尾禁止有空格
         * @has-fixer 支持自动修复
         * @prettier 可交由 prettier 控制
         */
        'space-within-parens': [true, 0],
        /**
         * @category style
         * @description switch 的最后一项禁止有 break
         * @reason 没必要限制
         * @has-fixer 支持自动修复
         */
        'switch-final-break': false,
        /**
         * @category style
         * @description 字面类型的每个成员都必须有分号
         * @ts-only 仅支持 ts 文件
         */
        'type-literal-delimiter': true,
        /**
         * @category style
         * @description 限制变量命名规则
         * @reason 没必要限制
         */
        'variable-name': false,
        /**
         * @category style
         * @description 限制空格的位置
         * @has-fixer 支持自动修复
         * @prettier 可交由 prettier 控制
         */
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
