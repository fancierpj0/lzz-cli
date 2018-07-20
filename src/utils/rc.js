//TODO RC文件 の 增删改查

import {RC, DEFAULTS} from "./constants";
//RC是配置文件，DEFAULTS默认配置

import {decode, encode} from 'ini';
//RC文件内的配置书写形式是: a=b 这样的形式，ini模块就是用来解析这种文件格式的

import {promisify} from 'util';
import fs from 'fs';

let exists = promisify(fs.exists)
  , readFile = promisify(fs.readFile)
  , writeFile = promisify(fs.writeFile);

export let get = async (k) => {
  let has = await exists(RC)
    ,opts;
  if(has){
    opts = await readFile(RC, 'utf8');
    opts = decode(opts);
    return opts[k];
  }
  return '';
};

export let set = async (k,v) => {
  let has = await exists(RC)
    ,opts;

  if(has){
    opts = await readFile(RC, 'utf8');
    opts = decode(opts);
    Object.assign(opts, {[k]: v});
  }else{
    opts = Object.assign(DEFAULTS, {[k]: v});
  }
  await writeFile(RC, encode(opts),'utf8');

};

export let remove = async (k) => {
  let has = await exists(RC)
    ,opts;

  if(has){
    opts = await readFile(RC, 'utf8');
    opts = decode(opts);
    delete opts[k];
    await writeFile(RC, encode(opts),'utf8');
  }
};

export let getAll = async () => {
  let has = await exists(RC)
    ,opts;

  if(has){
    opts = await readFile(RC, 'utf8');
    opts = decode(opts);
    return opts;
  }
  return {};
};