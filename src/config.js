import {get, set, getAll, remove} from "./utils/rc";

// 专门管理 .lzzclirc 文件 (当前的用户目录下)

let config = async(action, k, v) => {
  // console.log(action, k, v)
  switch (action){
    case 'get':
      if(k){
        let key = await get(k);
        console.log(key);
      }else{
        let obj = await getAll();
        Object.keys(obj).forEach(key=>{
          console.log(`${key}=${obj[key]}`);
        })
      }
      break;
    case 'set':
      await set(k, v);
      break;
    case 'remove':
      await remove(k);
      break;
  }
};

export default config;