<template>
    <div class="ping-info">
        <textarea v-model="gettext"></textarea>
        <button @click="gett">发表评论</button>
        <div>
            <div v-for="item in info" class="in-ping">
                {{item.text}}
                <p>{{item.time}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                gettext:"",
                info:""
            }
        },
        methods:{
            gett(){
                var url="http://localhost:2500/details/insert?"
                this.$http.get(url+this.$route.params.pid+"&text="+this.gettext+"&count=1").then((result)=>{
                    console.log(result.body);
                })
                this.getinfo();
            },
            getpid(){
                this.$route.params.pid;
            },
            getinfo(){
                var url = "details/getdetails?"+this.$route.params.pid;
                this.$http.get(url).then(result=>{
                    console.log(result.body.g);
                this.info = result.body.g;
                console.log(this.info[0].text)
            })
            }
        },
        created(){
            this.getinfo();
        }
       
    }
</script>
<style>
    .ping-info{box-sizing:border-box;padding:10px;}
    button{margin-left:35%;}
    .in-ping{    border-bottom: 1px dotted gray;
    box-sizing: border-box;
    padding: 10px;margin:5px;}
    .in-ping p{float:right;}
</style>