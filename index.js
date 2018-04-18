module.exports = {
    'rules': {
        //
        //
        // TypeScript 相关的检查
        // 这些规则是与 TypeScript 特性相关的检查
        //
        // 定义函数时如果用到了覆写，则必须将覆写的函数写到一起
        'adjacent-overload-signatures': true,
        // 禁用指定类型
        // @off 用于限制某个具体的类型不能使用
        'ban-types': false,
        // 必须指定类的成员的可访问性
        // @off 太严格了
        'member-access': false,
        // 指定类成员的排序规则
        'member-ordering': [
            true,
            {
                'order': 'fields-first'
            }
        ],
        // 禁止使用 any
        // @off 太严格了
        'no-any': false,
        // 禁止定义接口空的接口
        // @off 没必要限制
        'no-empty-interface': false,
        // 禁止导入立即执行的模块
        // @off 太严格了
        'no-import-side-effect': false,
        // 禁止给一个初始化时即可自动推论出类型（number, string, boolean）的变量显式的指定类型
        // @off 没必要显示
        'no-inferrable-types': false,
        // 禁止使用 module 来定义命名空间
        // module 是已废弃的关键字
        'no-internal-module': true,
        // 禁止使用魔法数字
        // @off 没必要限制
        'no-magic-numbers': false,
        // 禁止使用 namespace 来定义命名空间
        // 使用 es6 引入外部模块，才是更加标准的方式
        'no-namespace': true,
        // 禁止使用 non-null 断言
        // non-null 断言是已废弃的操作符
        'no-non-null-assertion': true,
        // 禁止对函数的参数重新赋值
        'no-parameter-reassignment': true,
        // 禁止使用三斜杠引入类型定义文件
        'no-reference': true,
        // 禁止无用的类型断言
        'no-unnecessary-type-assertion': true,
        // 禁止使用 var b = require('b'); 来引入模块
        // @off 有时需要动态引入，还是需要用 require
        'no-var-requires': false,
        // 必须使用箭头函数，除非是单独的函数声明或是命名函数
        'only-arrow-functions': [
            true,
            'allow-declarations',
            'allow-named-functions'
        ],
        // 必须使用 for of 循环替代 for 循环
        // @off for of 没有 for 直观
        'prefer-for-of': false,
        // async 函数的返回值必须是 promise
        // @off 有时 async 函数在某个分支是同步的，不需要返回 promise
        'promise-function-async': false,
        // 函数、变量等必须要有类型定义
        // @off 太严格了
        'typedef': false,
        // 类型定义的冒号前面必须没有空格，后面必须有一个空格
        'typedef-whitespace': [
            true,
            {
                'call-signature': 'nospace',
                'index-signature': 'nospace',
                'parameter': 'nospace',
                'property-declaration': 'nospace',
                'variable-declaration': 'nospace'
            },
            {
                'call-signature': 'onespace',
                'index-signature': 'onespace',
                'parameter': 'onespace',
                'property-declaration': 'onespace',
                'variable-declaration': 'onespace'
            }
        ],
        // 函数覆写时，若能通过联合类型将两个函数的类型声明合为一个，则使用联合类型而不是两个函数声明
        // @off 太严格了
        'unified-signatures': false,



        //
        //
        // 功能性检查
        // 这些规则可以找出可能的错误，或者是会产生 bug 的编码习惯
        //
        // await 必须接受 promise
        // @off await 接受非 promise 也是可以的，会立即 resolve 变为同步执行
        'await-promise': false,
        //
        // 禁止使用逗号操作符
        'ban-comma-operator': true,
        // 禁用指定的函数或全局方法
        // @off 用于限制某个具体的函数不能使用
        'ban': false,
        // if 后面必须有 {，除非是单行 if
        'curly': [
            true,
            'ignore-same-line'
        ],
        // for in 内部必须有 hasOwnProperty
        'forin': true,
        // 禁用指定的模块
        // @off 用于限制某个具体的模块不能使用
        'import-blacklist': false,
        // 只允许在 do for while switch 中使用 label
        // @off 在任何情况都不应该使用 label
        'label-position': false,
        // 禁止使用 arguments.callee
        'no-arg': true,
        // 禁止使用位运算
        // @off 位运算很常见
        'no-bitwise': false,
        // 禁止在分支条件判断中有赋值操作
        'no-conditional-assignment': true,
        // 禁止使用 new 来生成 String, Number 或 Boolean
        'no-construct': true,
        // 禁止使用 debugger
        'no-debugger': true,
        // 禁止 super 在一个构造函数中出现两次
        'no-duplicate-super': true,
        // 禁止在 switch 语句中出现重复测试表达式的 case
        'no-duplicate-switch-case': true,
        // 禁止出现重复的变量定义或函数参数名
        'no-duplicate-variable': [
            true,
            'check-parameters'
        ],
        // 禁止 delete 动态的值
        // @off 没必要限制
        'no-dynamic-delete': false,
        // 禁止出现空代码块，允许 catch 是空代码块
        'no-empty': [
            true,
            'allow-empty-catch'
        ],
        // 禁止使用 eval
        'no-eval': true,
        // 函数返回值为 promise 时，必须被处理
        // @off 太严格了
        'no-floating-promises': false,
        // 禁止对 array 使用 for in 循环
        'no-for-in-array': true,
        // 禁止引入 package.json 中不存在的模块
        // @off 没必要限制
        'no-implicit-dependencies': false,
        // 禁止推论出的类型是空对象类型
        // @off 没必要限制
        'no-inferred-empty-object-type': false,
        // 禁止在非模版字符串中出现 ${}
        'no-invalid-template-strings': true,
        // 禁止在类外面使用 this
        // @off this 的使用很灵活，事件回调中可以表示当前元素，函数也可以先用 this，等以后被调用的时候再 call
        'no-invalid-this': false,
        // 禁止在接口中定义 constructor，或在类中定义 new
        // @off 没必要限制
        'no-misused-new': false,
        // 禁止使用 null
        // @off 没必要限制
        'no-null-keyword': false,
        // 禁止对对象字面量进行类型断言（断言成 any 是允许的）
        'no-object-literal-type-assertion': true,
        // 禁止没必要的 return await
        'no-return-await': true,
        // 禁止变量名与上层作用域内的定义过的变量重复
        // @off 很多时候函数的形参和传参是同名的
        'no-shadowed-variable': false,
        // 禁止在数组中出现连续的逗号，如 let foo = [,,]
        'no-sparse-arrays': true,
        // 禁止出现 foo['bar']，必须写成 foo.bar
        // @off 当需要写一系列属性的时候，可以更统一
        'no-string-literal': false,
        // 禁止 throw 字符串，必须 throw 一个 Error 对象
        'no-string-throw': true,
        // 禁止 import 模块的子文件
        // @off 没必要限制
        'no-submodule-imports': false,
        // switch 的 case 必须 return 或 break
        'no-switch-case-fall-through': true,
        // 禁止将 this 赋值给其他变量，除非是解构赋值
        'no-this-assignment': [
            true,
            {
                'allow-destructuring': true
            }
        ],
        // 使用实例的方法时，必须 bind 到实例上
        'no-unbound-method': [
            true,
            'ignore-static'
        ],
        // 禁止定义没必要的类，比如只有静态方法的类
        // @off 没必要限制
        'no-unnecessary-class': false,
        // 禁止取用一个类型为 any 的对象的属性
        // @off 太严格了
        'no-unsafe-any': false,
        // 禁止 finally 内出现 return, continue, break, throw 等
        // finally 会比 catch 先执行
        'no-unsafe-finally': true,
        // 禁止无用的表达式
        'no-unused-expression': true,
        // 定义过的变量必须使用
        'no-unused-variable': true,
        // 变量必须先定义后使用
        'no-use-before-declare': true,
        // 禁止使用 var
        'no-var-keyword': true,
        // 禁止返回值为 void 类型
        // @off 没必要限制
        'no-void-expression': false,
        // 可以用三元表达式时，就不用 if else
        // @off 没必要限制
        'prefer-conditional-expression': false,
        // 使用 { ...foo, bar: 1 } 代替 Object.assign({}, foo, { bar: 1 })
        // 前者的类型检查更完善
        'prefer-object-spread': true,
        // parseInt 必须传入第二个参数
        'radix': true,
        // 使用加号时，两者必须同为数字或同位字符串
        // @off 太严格了
        'restrict-plus-operands': false,
        // 在分支条件判断中必须传入布尔类型的值
        // @off 太严格了
        'strict-boolean-expressions': false,
        // 禁止出现永远为 true 或永远为 false 的条件判断（通过类型预测出一个表达式为 true 还是 false）
        // @off 必须开启 strictNullChecks 才能生效
        'strict-type-predicates': false,
        // switch 语句必须有 default
        // @off 太严格了
        'switch-default': false,
        // 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外
        'triple-equals': [
            true,
            'allow-null-check'
        ],
        // typeof 表达式比较的对象必须是 'undefined', 'object', 'boolean', 'number', 'string', 'function' 或 'symbol'
        // @off TypeScirpt 2.2 之后，编译器已经只带了这个功能
        'typeof-compare': false,
        // 传入的类型与默认类型一致时，必须省略传入的类型
        // @off 没必要限制
        'use-default-type-parameter': false,
        // 必须使用 isNaN(foo) 而不是 foo === NaN
        'use-isnan': true,



        //
        //
        // 可维护性
        // 这些规则可以增加代码的可维护性
        //
        // 禁止函数的循环复杂度超过 20，https://en.wikipedia.org/wiki/Cyclomatic_complexity
        'cyclomatic-complexity': [
            true,
            20
        ],
        // 禁止使用废弃（被标识了 @deprecated）的 API
        'deprecation': true,
        // 文件最后一行必须有一个空行
        // @off 没必要限制
        'eofline': false,
        // 一个缩进必须用四个空格替代
        'indent': [
            true,
            'spaces',
            4
        ],
        // 限制换行符为 LF 或 CRLF
        // @off 没必要限制
        'linebreak-style': false,
        // 限制每个文件的类的数量
        // @off 没必要限制
        'max-classes-per-file': false,
        // 限制每个文件的行数
        // @off 没必要限制
        'max-file-line-count': false,
        // 限制每行字符数
        // @off 没必要限制
        'max-line-length': false,
        // 禁止使用 default export
        // @off 没必要限制
        'no-default-export': false,
        // 禁止出现重复的 import
        'no-duplicate-imports': true,
        // 禁止一个文件中出现多个相同的 namespace
        'no-mergeable-namespace': true,
        // 禁止使用 require
        // @off 有时需要动态引入，还是需要用 require
        'no-require-imports': false,
        // 对象字面量必须按 key 排序
        // @off 太严格了
        'object-literal-sort-keys': false,
        // 申明后不再被修改的变量必须使用 const 来申明
        // @off 没必要强制要求
        'prefer-const': false,
        // 如果私有变量只在构造函数中被赋值，则必须使用 readonly 修饰符
        // @off 没必要限制
        'prefer-readonly': false,
        // 限制对象、数组、解构赋值等的最后一项末尾是否需要逗号
        // @off 没必要限制
        'trailing-comma': false,



        //
        //
        // 风格问题
        // 这些规则与代码风格有关，所以是非常主观的
        //
        // 变量定义需要竖向对其
        // @off 没必要限制
        'align': false,
        // 限制必须使用 T[] 或 Array<T> 之中的一种来定义数组的类型
        // @off 没必要限制
        'array-type': false,
        // 箭头函数的参数必须有小括号
        // @off 没必要限制
        'arrow-parens': false,
        // 箭头函数的函数体只有 return 语句的时候，必须简写
        // @off 没必要限制
        'arrow-return-shorthand': false,
        // 数字字面量必须在加号的右边，即禁止 1 + x
        // @off 没必要限制
        'binary-expression-operand-order': false,
        // 可以简写为函数类型的接口或字面类似，必须简写
        // @off 没必要限制
        'callable-types': false,
        // 类名与接口名必须为驼峰式
        'class-name': true,
        // 限制单行注释的规则
        // @off 没必要限制
        'comment-format': false,
        // 类、函数、方法、属性必须写注释
        // @off 太严格了
        'completed-docs': false,
        // 文件类型必须时 utf-8
        'encoding': true,
        // 文件的开头必须有指定的字符串
        // @off 太严格了
        'file-header': false,
        // import 语句中，关键字之间的间距必须是一个空格
        'import-spacing': true,
        // 接口名称必须已 I 开头
        // @off 没必要限制
        'interface-name': false,
        // 优先使用接口而不是字面类型
        // 接口可以 implement extend 和 merge
        'interface-over-type-literal': true,
        // 注释必须符合 JSDoc 规范
        // @off 太严格了
        'jsdoc-format': false,
        // import 的名称必须和 export default 的名称一致
        // @off 没必要限制
        'match-default-export-name': false,
        // return 语句前必须有空行
        // @off 没必要限制
        'newline-before-return': false,
        // 链式调用时，每次调用都必须占用一行
        // @off 没必要限制
        'newline-per-chained-call': false,
        // new 后面只必须有一个空格
        'new-parens': true,
        // 类型断言必须使用 as Type，禁止使用 <Type>
        // <Type> 容易被理解为 jsx
        'no-angle-bracket-type-assertion': true,
        // 禁止变量与 true 或 false 比较
        // @off 没必要限制
        'no-boolean-literal-compare': false,
        // 禁止连续超过三行空行
        'no-consecutive-blank-lines': [
            true,
            3
        ],
        // 禁止使用特殊空白符（比如全角空格）
        'no-irregular-whitespace': true,
        // 禁止给类的构造函数的参数添加修饰符
        'no-parameter-properties': true,
        // 禁止使用 JSDoc，因为 TypeScirpt 已经包含了大部分功能
        'no-redundant-jsdoc': true,
        // 禁止使用三斜杠引入类型定义文件
        'no-reference-import': true,
        // 禁止行尾有空格
        'no-trailing-whitespace': true,
        // 禁止没必要的函数调用，如 x => f(x) 应该简写为 f
        // @off 没必要限制
        'no-unnecessary-callback-wrapper': false,
        // 禁止变量定义时赋值为 undefined
        'no-unnecessary-initializer': true,
        // 在命名空间中，可以直接使用内部变量，不需要添加命名空间前缀
        // @off 已经禁止使用命名空间了
        'no-unnecessary-qualifier': false,
        // 小数必须以 0. 开头，禁止以 . 开头，并且不能以 0 结尾
        'number-literal-format': true,
        // 对象的 key 必须用引号包起来
        // @off 没必要限制
        'object-literal-key-quotes': false,
        // 必须使用 a = {b} 而不是 a = {b: b}
        'object-literal-shorthand': true,
        // 变量申明必须每行一个，for 循环的初始条件中除外
        'one-variable-per-declaration': [
            true,
            'ignore-for-loop'
        ],
        // if 后的 { 禁止换行
        'one-line': true,
        // import 必须排序
        // @off 没必要限制
        'ordered-imports': false,
        // 类中没有使用 this 的方法应该提取成类外的函数
        // @off 太严格了
        'prefer-function-over-method': false,
        // 必须使用 foo(): void 而不是 foo: () => void
        // @off 没必要限制
        'prefer-method-signature': false,
        // 当 if 中只有 === 时，必须使用 switch 替换 if
        // @off 没必要限制
        'prefer-switch': false,
        // 必须使用模版字符串而不是字符串连接
        // @off 字符串连接很常用
        'prefer-template': false,
        // 必须使用单引号，jsx 中必须使用双引号
        'quotemark': [
            true,
            'single',
            'jsx-double',
            'avoid-template',
            'avoid-escape'
        ],
        // 使用 return; 而不是 return undefined;
        'return-undefined': true,
        // 行尾必须有分号
        'semicolon': [
            true,
            'always',
            'ignore-interfaces'
        ],
        // 函数名前必须有空格
        'space-before-function-paren': [
            true,
            'asyncArrow'
        ],
        // 括号内首尾禁止有空格
        'space-within-parens': [
            true,
            0
        ],
        // switch 的最后一项禁止有 break
        // @off 没必要限制
        'switch-final-break': false,
        // 字面类型的每个成员都必须有分号
        // @off 没必要限制
        'type-literal-delimiter': false,
        // 限制变量命名规则
        // @off 没必要限制
        'variable-name': false,
        'whitespace': [
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