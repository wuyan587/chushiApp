const release={
    state:{
        fruit:{
            tid:'',
            sid:'',
            fruitType:'',
            fruitName:'',
            fruitSpecification:{
                reserve:'',
                model:'',
                weight:'',
                paste:'',
                pack:''
            },
            fruitTitle:'',
            price:'',
            num:'',
            area:'',
            sup:'',
            detail:'',
            img:'',
            imgs:[],
            user:'',
            pass:true,
            pub:false
        },
        purfruit:{
            tid:'',
            sid:'',
            fruitType:'',
            fruitName:'',
            fruitSpecification:{
                reserve:'',
                model:'',
                weight:'',
                paste:'',
                pack:''
            },
            fruitTitle:'',
            num:'',
            area:'',
            from:'',
            detail:'',
            phone:'',
            user:'',
            pass:true,
            pub:false
        },
        flagNum:1
    },
    mutations:{
        setType(state,arr){
            state.fruit.tid=arr[0];
            state.purfruit.tid=arr[0];
            state.fruit.fruitType=arr[1];
            state.purfruit.fruitType=arr[1];

        },
        setName(state,val){
            state.fruit.fruitName=val;
            state.purfruit.fruitName=val;

        },
        setSpecification(state,val){
            state.fruit.fruitSpecification=val;
            state.purfruit.fruitSpecification=val;

        },
        add(state){
            state.flagNum++;
        },
        des(state){
            state.flagNum--;
        },
        reset(state){
            state.flagNum=1;
        },
        setval(state,arr){
            switch(arr[0]){
                case 'area':
                    state.fruit.area=arr[1];
                    state.purfruit.area=arr[1];
                break;
                case 'sup':
                    state.fruit.sup=arr[1];
                break;
                case 'img':
                    state.fruit.img=arr[1];
                break;
                case 'imgs':
                    state.fruit.imgs=arr[1];
                break;
                case 'from':
                    state.purfruit.from=arr[1];
                break;
                case 'user':
                    state.fruit.user=arr[1];
                    state.purfruit.user=arr[1];
                break;
            }
            
        },
        setinfo(state,arr){
            switch(arr[0]){
                case 'supply':
                    state.fruit=JSON.parse(JSON.stringify( arr[1]));
                break;
                case 'purchase':
                    state.purfruit=JSON.parse(JSON.stringify( arr[1]));
                break;
            }
        },
        setnum(state,num){
            state.flagNum=num;
        }
    },
    actions:{

    },
}
export default release