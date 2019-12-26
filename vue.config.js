const path=require('path');

module.exports={
    chainWebpack:config=>{
        config.resolve.alias
            .set('components',path.join(__dirname,'./src/components'))
            .set('assets',path.join(__dirname,'./src/assets'))
            .set('@',path.join(__dirname,'./src'))
            .set('views',path.join(__dirname,'./src/views'))
            .set('routers',path.join(__dirname,'./src/routers'))
    }
}