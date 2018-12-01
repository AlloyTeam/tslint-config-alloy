// good 可以导入了有副作用（立即执行）的 css, less, sass, scss 模块
import './test.css';
import './test.less';
import './test.sass';
import './test.scss';

// good 导入了模块之后再使用它
import * as tslint from 'tslint';

console.log(tslint.Linter);
