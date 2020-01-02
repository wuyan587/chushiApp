import router from '@/routers';
import $request from '../utils/request';
import store from '../store/index';
    router.beforeEach(async (to,from,next)=>{
       
        
        if(from.path=='/login'||from.path=='/register'){
            next();
        }else{
            console.log(store.state.pub.Mine);
            let obj=store.state.pub.Mine;
            let result=await $request({
                url:'/update',
                method:'post',
                data:obj,
                headers:{
                    'Content-Type':'application/json'
                  }
            })
            console.log(result);
            
            next();
        }
   
    })

