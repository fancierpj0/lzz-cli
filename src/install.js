import {repoList, tagList, downloadLocal} from './utils/git';

//下载包时，命令行左边转转的那个东东
import ora from 'ora';
//create-react-app 时 命令行出现选择询问的那个东东
import inquirer from 'inquirer'; //inquirer；询问者

let install = async () => {
  // 下载模板 选择模板使用

  // === 选择模板 ===
  let loading = ora('fetching template ... ')
    , list
    , answer;

  loading.start();
  list = await repoList();
  loading.succeed();

  list = list.map(({name}) => name);

  answer = await inquirer.prompt([
    {
      //可选：list、input
      type: 'list'
      //该项选择的title，要选什么？
      , name: 'project'
      //选择内容
      , choices: list
      , questions: 'please choice template'
    }
  ]);

  //已经选择好创建哪种项目(模板)
  let project = answer.project;

  // === 选择版本号 ===
  loading = ora('fetching tag...');
  loading.start();
  list = await tagList(project);
  loading.succeed();
  list = list.map(({name}) => name);
  answer = await inquirer.prompt([
    {
      //可选：list、input
      type: 'list'
      //该项选择的title，要选什么？
      , name: 'version'
      //选择内容
      , choices: list
      , questions: 'please choice template-version'
    }
  ]);

  let tag = answer;

  //先下载到缓存文件中
  //lzz-cli init

  //下载咯！
  loading = ora('download project ...');

  loading.start();
  await downloadLocal(project, version);
  loading.succeed();
};

//TODO vue会使用模板引擎
//TODO vue init 将当前下载好的模板 生成到项目目录中
//TODO vue uninstall
export default install;