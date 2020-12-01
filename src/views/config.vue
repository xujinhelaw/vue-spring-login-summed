<template>
<div>
    <el-input
            type="textarea"
            :autosize="{ minRows: 20, maxRows: 35}"
            placeholder="请输入内容"
            v-model="yamlStr"
    ></el-input>
    <el-button
            style="width: 100%"
            type="primary"
            :loading="loading"
            @click.native.prevent="submitConfig"
    >提交</el-button>
</div>
</template>

<script>
    var YAML = require('js-yaml')
    var json2yaml = require('json2yaml')
    export default {
        name: "config",
        data () {
            return {
                textarea2: '',
                yamlStr: '',
                path: 'E:\\IdeaProjects\\sysusermanager\\src\\main\\resources\\applicationtest.yml',
                property: '',
                propertyReq:{path:'E:\\IdeaProjects\\sysusermanager\\src\\main\\resources\\applicationtest.yml',
                             property:''},
                setSuccess: ''
            }
        },
        mounted:function(){
            this.myhandle();
        },
        methods:{
            myhandle(){
                this.$store
                    .dispatch("Getconfig", this.propertyReq)
                    .then(response => {
                        this.textarea2 = response.data;
                    })
                    .catch(() => {
                    });
                setTimeout(() => {
                    let bstr = json2yaml.stringify(this.textarea2)
                    this.yamlStr = bstr
                }, 1000)
            },
            submitConfig(){
                this.propertyReq.property = JSON.stringify(YAML.load(this.yamlStr),null,2)
                this.propertyReq.path = 'E:\\IdeaProjects\\sysusermanager\\src\\main\\resources\\applicationtest.yml'
                this.$store
                    .dispatch("Setconfig", this.propertyReq)
                    .then(response => {
                        this.setSuccess = response.data();
                    })
                    .catch(() => {
                    });
            }
        }
    }
</script>

<style scoped>

</style>