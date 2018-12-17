<template>
    <div class="jiu-dian">
        <div v-for="item in list">
            <div class="myimg" v-if="list.length>0?true:false">
                <img :src="`http://localhost:2500/`+item.img">
            </div>
            <div class="jiu-info">
                <p>{{item.name}}</p>
                <p>{{item.title}}</p>
                <p>酒店位置：{{item.site}}</p>
                <button>查看更多</button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                list:[]
            }
        },
        methods:{
            getpid(){
                this.$route.params.pid;

            },
            getlist(){
                var url = "details/getdetails?"+this.$route.params.pid;
                this.$http.get(url).then(result=>{
                this.list = result.body.e;
                console.log(this.list);
                })
            },
        },
        created(){
            this.getlist();
        }
    }
</script>
<style>
    .jiu-dian{box-sizing:border-box;padding:10px;}
    .myimg img{width:120px;height:100px;}
    .jiu-info{    float: right;
    border: 1px solid gray;
    height: 100px;
    margin-top: -104px;
    width: 235px;}
    .jiu-info p:first-child{font-weight:bold;font-size:15px;color:#000;}
    .jiu-info p:nth-child(2){white-space: nowrap;text-overflow: ellipsis;overflow: hidden;margin-bottom:2px;}
    button{    padding: 0px;
    float: right;
    margin-right: 10px;
    margin-top: -11px;}
</style>