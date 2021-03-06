//帮我们请求别人的仓库
import request from 'request';
import {getAll} from "./rc";
//专门下载git仓库
import downLoadGit from 'download-git-repo';
import {DOWNLOAD} from "./constants";

let fetch = async (url) => {
  return new Promise((resolve, reject) => {
    let config = {
      url
      , method: 'get'
      , headers: {
        //不填报错
        'user-agent': 'xxx'
      }
    };
    request(config, (err, response, body) => {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(body));
    })
  });
};

export let repoList = async () => {
  let config = await getAll();
  //如果是私人仓库
  //,config.type应该设置为users
  //,config.registry应该是用户名
  //https://api.github.com/users/fancierpj0/repos
  let api = `https://api.github.com/${config.type}/${config.registry}/repos`;
  return await fetch(api); //返回的是一个json
};

export let tagList = async (repo) => {
  let config = await getAll();
  //获取版本号
  //https://api.github.com/repos/fancierpj0/antd-study-point/tags
  let api = `https://api.github.com/repos/${config.registry}/${repo}/tags`;

  return await fetch(api);
};

export const download = async(src,dest) => {
  return new Promise((resolve, reject) => {
    downLoadGit(src,dest,(err)=>{
      if(err){
        reject(err);
      }
      resolve();
    });
  });
};

export const downloadLocal = async (project,version) => {
  let conf = await getAll();
  //只需要用户名或则组织名以及仓库名，其余会自动补全
  let api = `${conf.registry}/${project}`;
  if(version){
    api += `#${version}`;
  }
  return await download(api, DOWNLOAD + '/' + project);
};