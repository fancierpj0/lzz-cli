import program from 'commander';
import {VERSION} from "./utils/constants";
import main from './index';

let actionMap = {
  install: {
    alias: 'i'
    , description: 'install template'
    , examples: [
      'lzz-cli i'
      , 'lzz-cli install'
    ]
  }

  , config: {
    alias: 'c'
    //什么什么rc，linux规范，一种格式的配置文件，内容为 a=b 这样的
    , description: 'config .lzzclirc'
    , examples: [
      'lzz-cli config set <k> <v>'
      , 'lzz-cli config get <k>'
      , 'lzz-cli config remove <k>'
    ]
  }

  , '*': {
    description: 'not found'
    , examples: []
  }
};

Object.keys(actionMap).forEach(action => {
  program.command(action)
    .description(actionMap[action].description)
    .alias(actionMap[action].alias)
    .action(() => {
      //判断一下当前用户是什么操作
      if(action === 'config'){
        main(action, ...process.argv.slice(3));
      }else if(action === 'install'){
        main(action)
      }
    });
});


function help() {
  console.log('\r\n' + 'how to use command');
  Object.keys(actionMap).forEach(action => {
    actionMap[action].examples.forEach(example => {
      console.log('    - ' + example);
    });
  });
}


//--help commander模块自带
//program.on 会监听一个命令
//比如这里，当用户输入 -h,--help 时
// ,会执行help函数,即：打印usage列表
program.on('-h', help);
program.on('--help', help);

//TODO program.version 一定要放在文件末尾
//显示版本号
program.version(VERSION, '-v --version').parse(process.argv);