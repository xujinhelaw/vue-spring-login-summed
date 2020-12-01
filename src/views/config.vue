<template>
<div>
    <el-input
            type="textarea"
            :autosize="{ minRows: 20, maxRows: 35}"
            placeholder="请输入内容"
            v-model="yamlStr"
    ></el-input>
</div>
</template>

<script>
    var json2yaml = require('json2yaml')
    export default {
        name: "config",
        data () {
            return {
                textarea2: '',
                yamlStr: '',
                path: 'E:\\IdeaProjects\\sysusermanager\\src\\main\\resources\\application.yml'
            }
        },
        mounted:function(){
            this.myhandle();
        },
        methods:{
            myhandle(){
                this.$store
                    .dispatch("Getconfig", this.path)
                    .then(response => {
                        console.log('response:', response);
                        this.textarea2 = response;
                    })
                    .catch(() => {
                    });
                setTimeout(() => {
                    let bstr = json2yaml.stringify(this.textarea2)
                    this.yamlStr = bstr
                }, 1000)
            }
        }
    }
</script>

<style scoped>

</style>