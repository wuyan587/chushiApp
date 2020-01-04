const release={
    state:{
        fruit:{
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
            imgs:[]
        },
        purfruit:{
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
            phone:''
        },
        flagNum:1
    },
    mutations:{
        setType(state,val){
            state.fruit.fruitType=val;
            state.purfruit.fruitType=val;

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
            }
            
        }
    },
    actions:{

    },
}
export default release