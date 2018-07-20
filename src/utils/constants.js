//TODO 版本号、rc文件存储地址、rc文件默认配置项

import {version} from '../../package.json';

// 当前package.json的版本号
export const VERSION = version;

// 找到用户的根目录
const HOME = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];

export const RC = `${HOME}/.lzzclirc`;

//RC配置下载(模板)的地方
//给github的api来用
export const DEFAULTS = {
  registry:'zhufeng-cli'
  //orgs->organization 组织
  //是组织就填组织 否则 就填用户
  ,type:'orgs'
};


//下载目录
export const DOWNLOAD = `${HOME}/.template`;