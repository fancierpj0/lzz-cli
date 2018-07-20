import {betterRequire} from "./utils/common";
import {resolve} from 'path';

//命令行的命令拿到后，在这里进行主流程控制

let apply = (action, ...args) => {
  // console.log(action, args);

  // babel-env 会将 export default ==转化==> module.exports = {default:xxx}
  //之所以用require,而不用import,是因为require的可以利用模板字符串动态倒入，而import不支持
  betterRequire(resolve(__dirname, `./${action}`))(...args);
};

export default apply;