module.exports = {
　　　　devServer: {
　　　　　　proxy: {
　　　　　　　'/app': {
　　　　　　　　　target: 'http://localhost:2500/',
　　　　　　　　　ws: true,
　　　　　　　　　changeOrigin: true,
　　　　　　　　　pathRewrite:{
　　　　　　　　　　'^/app':""
　　　　　　　　　　}
　　　　　　　　}
　　　　　}
　　}
}