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
        removebuyitems(state,index){ //移除货单
            state.Mine.buylist.splice(index,1)
        }
    }
}
export default pub;