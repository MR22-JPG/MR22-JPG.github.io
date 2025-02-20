<script setup>

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <el-row :gutter="20" align="middle" style="background-color: #fff;">
          <el-col :span="1">
            <img src="@/assets/index/logo.jpg" alt="logo" />
          </el-col>
          <el-col :span="16">
            <h2 style="color: black;">广州广久舞台灯光</h2>
          </el-col>
        </el-row>
        <el-menu
          class="horizontal-menu"
          mode="horizontal"
          active-text-color="#ffd04b"
          background-color="#545c64"
          text-color="#fff"
          default-active="/dashboard"
          :default-openeds="['1', '2']"
          router
        >
          <el-menu-item index="/dashboard">首页</el-menu-item>
          <el-menu-item index="/about">关于我们</el-menu-item>
          <el-menu-item index="/product">产品展示</el-menu-item>
          <el-menu-item index="/achievement">优秀案例</el-menu-item>
          <el-menu-item index="/news">新闻资讯</el-menu-item>
          <el-menu-item index="/contact">联系我们</el-menu-item>
        </el-menu>
      </el-header>
      <router-view />
    </el-container>
  </div>
</template>

<style scoped>
.header {
  background-color: #545c64;
  height: 120px; /* 调整高度 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
}

.el-row {
  height: 60px; /* 调整顶部部分的高度 */
}

.el-col {
  display: flex;
  align-items: center;
}

img {
  width: 48px;
  display: inline-block;
}

h2 {
  color: whitesmoke;
}

.horizontal-menu {
  height: 60px; /* 调整导航栏的高度 */
  display: flex;
  align-items: center;
}
</style>