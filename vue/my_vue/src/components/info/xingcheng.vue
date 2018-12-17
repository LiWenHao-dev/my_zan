<template>
    <div class="xing-xingcheng"  v-if="oneday.length>0?true:false">
        <p>{{oneday[0].oneday}}</p>
        <img :src="'http://localhost:2500/'+oneday[0].oneimg"/>
        <div>{{oneday[0].onesub}}</div>
        <p>{{oneday[0].twoday}}</p>
        <img :src="'http://localhost:2500/'+oneday[0].twoimg"/>
        <div>{{oneday[0].twosub}}</div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                oneday:[]
            }
        },
        methods:{
            getpid(){
                this.$route.params.pid;

            },
            getoneday(){
                var url = "details/getdetails?"+this.$route.params.pid;
                this.$http.get(url).then(result=>{
                this.oneday = result.body.d;
                })
            },
        },
        created(){
            this.getoneday();
        }
    }
</script>
<style>
    .xing-xingcheng{box-sizing:border-box;padding:10px;}
    .xing-xingcheng p{color:#E43F6E;}
    .xing-xingcheng img{width:100%;}
    .xing-xingcheng div{font-size:14px;color:#999;}
</style>