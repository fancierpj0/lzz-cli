//TODO 使用require进行动态倒入

export let betterRequire = (absPath) => {
  let module = require(absPath);
  if(module.default){
    return module.default;
  }
  return module;
};