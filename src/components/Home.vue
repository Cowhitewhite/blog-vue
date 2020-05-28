<template>
  <div class="container">
    <el-container>
      <el-header height="275px" :style="backImg">
        <el-row type="flex" justify="space-between">
          <el-col :span="6">
            Chen's blog
          </el-col>
          <el-col :span="6">
             <ul class="ul">
              <li>主页</li>
              <li>友链</li>
              <li>GITHUB</li>
             </ul>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-row :gutter="20">
         <el-col :span="16" :offset="4">
           <el-row :gutter="40">
             <el-col :span="16">
               <el-row>
                 <el-col :span="20">
                   <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>chen in 默认分类</el-col>
                 <el-col :span="4">2020-05-28</el-col>
               </el-row>
               <el-row>
                 <el-col :span="24"  style="font-size: 24px;font-weight: bold">HashMap</el-col>
               </el-row>
               <el-row>
                 <el-col :span="24" >HashMap源码解读</el-col>
               </el-row>
               <el-divider></el-divider>
               <el-row>
                 <el-col :span="20">
                   <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>chen in 日常随笔</el-col>
                 <el-col :span="4">2020-05-27</el-col>
               </el-row>
               <el-row>
                 <el-col :span="24"  style="font-size: 24px;font-weight: bold">Spring MVC</el-col>
               </el-row>
               <el-row>
                 <el-col :span="24" >Spring MVC源码实战</el-col>
               </el-row>
               <el-divider></el-divider>
               <el-row>
                 <el-col :span="20">
                   <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>chen in 日常随笔</el-col>
                 <el-col :span="4">2020-05-26</el-col>
               </el-row>
               <el-row>
                 <el-col :span="24"  style="font-size: 24px;font-weight: bold">Mysql</el-col>
               </el-row>
               <el-row>
                 <el-col :span="24" >Mysql调优</el-col>
               </el-row>
               <el-divider></el-divider>
               <el-row>
                 <el-col :span="20">
                   <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>chen in Redis</el-col>
                 <el-col :span="4">2020-05-11</el-col>
               </el-row>
               <el-row>
                 <el-col :span="24"  style="font-size: 24px;font-weight: bold">Redis</el-col>
               </el-row>
               <el-row>
                 <el-col :span="24" >Redis持久化的两种实现方式</el-col>
               </el-row>
               <el-divider></el-divider>
               <el-row>
                 <el-col :span="20">
                   <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>chen in 日常随笔</el-col>
                 <el-col :span="4">2020-05-28</el-col>
               </el-row>
               <el-row>
                 <el-col :span="24"  style="font-size: 24px;font-weight: bold">日常认爹</el-col>
               </el-row>
               <el-row>
                 <el-col :span="24" >浩浩是磊爸爸的乖儿子</el-col>
               </el-row>
               <el-divider></el-divider>
             </el-col>

             <el-col :span="8">
               <el-row><el-col :span="24">
                 <el-tabs tab-position="right">
                   <el-tab-pane label="搜索文章"><el-input placeholder="输入关键字搜索" suffix-icon="el-icon-search"></el-input></el-tab-pane>
                   <el-tab-pane label="热门标签">
                     <el-tag>标签一</el-tag>
                     <el-tag type="success">标签二</el-tag>
                     <el-tag type="info">标签三</el-tag>
                     <el-tag type="warning">标签四</el-tag>
                     <el-tag type="danger">标签五</el-tag>
                   </el-tab-pane>
                   <el-tab-pane label="最新发布">
                         <a>Mysql</a>
                     <el-divider></el-divider>
                         <a>Spring Cloud</a><el-divider></el-divider>
                         <a>Spring Cloud</a><el-divider></el-divider>
                         <a>Spring Cloud</a><el-divider></el-divider>
                         <a>Spring Cloud</a>
                   </el-tab-pane>
                   <el-tab-pane label="点击最多">点击最多</el-tab-pane>
                 </el-tabs>
               </el-col></el-row>
             </el-col>
           </el-row>
         </el-col>
        </el-row>
      </el-main>
      <el-footer height="100px">
        ©Powered by Chen<br>
        蜀ICP备 20012935号
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        backImg:{
          backgroundImage: "url(" + require("../assets/headImg.jpg") + ")",
          backgroundRepeat: "no-repeat",
        },
      }
    }
  }
</script>

<style scoped>
  .el-header {
    color: #faf8f8;
    font-weight: bold;
    /*text-align: center;*/
    line-height: 60px;
  }

  .el-footer {
    background-color: #273547;
     color: #fafafa;
     text-align: center;
     font-weight: lighter;
    font-size: small;
     padding-top: 30px;
  }

  .el-main {
    background-color: #fafafa;
    color: #333;
    /*text-align: center;*/
    line-height: 40px;
    min-height: calc(100vh - 375px)
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .ul {
    margin: 0;
    padding: 0;
    float: right;
  }
  .ul li {
    margin: 9px;
    display: inline-block;
  }

</style>
