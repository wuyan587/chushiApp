const pub={
    state:{
        Mine:{
            username:"",
            sid:'',
            approve: false,
            img: '',
            offerlist:[],//我的报价
            password:'',
            purchaselist:[], //我的采购
            store:'',
            storeapprove:false,
            supplylist:[], //我的供应
            buylist:[]//我的货单
        }
    },
    mutations:{
        addbuyitems(state,val){ //加入货单
            state.Mine.buylist.push(val);
        },
        addpuritems(state,val){  //加入采购单
            state.Mine.purchaselist.push(val);
        },
        addsupitems(state,val){  //加入供应单
            state.Mine.supplylist.push(val);
        },
        removebuyitems(state,arr){ //移除单
            switch(arr[0]){
                case 'buy':
                    // state.Mine.buylist.forEach((item,index)=>{
                    //     if(item.sid==arr[1]){
                    //         console.log(index);

                    //         state.Mine.buylist.splice(index,1);

                    //     }
                            
                    // })
                    state.Mine.buylist=state.Mine.buylist.filter(item=>item.sid!=arr[1])
                    break;
                case 'supply':
                    // state.Mine.supplylist.forEach((item,index)=>{
                    //     if(item.sid==arr[1]){
                    //         console.log(index);
                            
                    //         state.Mine.supplylist.splice(index,1);

                    //     }
                    // })
                    state.Mine.supplylist=state.Mine.supplylist.filter(item=>item.sid!=arr[1])

                    break;
                case 'purchase':
                    // state.Mine.purchaselist.forEach((item,index)=>{
                    //     if(item.sid==arr[1]){
                    //         console.log(index);

                    //         state.Mine.purchaselist.splice(index,1);
                    //     }
                    // })
                    state.Mine.purchaselist=state.Mine.purchaselist.filter(item=>item.sid!=arr[1])

                    break;
            }
            
        },
        login(state,val){
            state.Mine=val;
        }
    }
}
export default pub;