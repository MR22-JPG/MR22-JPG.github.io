<script setup>
import { ref } from 'vue';

const carouselImage = ref([
  {
    src: 'https://img0.baidu.com/it/u=3309742101,1766418409&fm=253&fmt=auto&app=138&f=JPEG?w=1423&h=800',
    alt: 'Image 1',
  },
  {
    src: 'https://img0.baidu.com/it/u=999768145,4132727891&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
    alt: 'Image 2',
  },
  {
    src: 'https://img0.baidu.com/it/u=1170090896,4152607928&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
    alt: 'Image 3',
  },
  {
    src: 'https://img2.baidu.com/it/u=2865043321,1457567660&fm=253&fmt=auto&app=138&f=JPEG?w=723&h=500',
    alt: 'Image 4',
  }
]);
</script>

<template>
  <div>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in carouselImage" :key="item.src">
      <img :src="item.src" :alt="item.alt">
    </el-carousel-item>
  </el-carousel>


  <div class="container">
    <h1>只生产让客户满意的产品</h1>
    <p>
      <span class="highlight">品质卓越，规格齐全</span>，打造行业领域知名品牌
    </p>
    <p>
      <span class="highlight">Excellent quality, complete specifications</span>, to create a well-known brand in the industry
    </p>
  </div>


  <div class="prodects">
    <el-card style="width: 30%;">
    <template #header>灯光123</template>
    <img
      src="@/assets/index/logo.jpg"
      style="width: 100%"
    />
  </el-card>
  <el-card style="width: 30%;">
    <template #header>灯光xxxxx</template>
    <img
      src="@/assets/index/logo.jpg"
      style="width: 100%"
    />
  </el-card>
  <el-card style="width: 30%;">
    <template #header>灯光xxxxx</template>
    <img
      src="@/assets/index/logo.jpg"
      style="width: 100%"
    />
  </el-card>
</div>
<div class="prodects">
  <el-card style="width: 30%;">
    <template #header>灯光xxxxx</template>
    <img
      src="https://img1.baidu.com/it/u=1901207602,2297492451&fm=253&fmt=auto&app=120&f=PNG?w=286&h=382"
      style="width: 100%"
    />
  </el-card>
  <el-card style="width: 30%;">
    <template #header>灯光xxxxx</template>
    <img
      src="https://img1.baidu.com/it/u=1901207602,2297492451&fm=253&fmt=auto&app=120&f=PNG?w=286&h=382"
      style="width: 100%"
    />
  </el-card>
  <el-card style="width: 30%;">
    <template #header>灯光xxxxx</template>
    <img
      src="https://img1.baidu.com/it/u=1901207602,2297492451&fm=253&fmt=auto&app=120&f=PNG?w=286&h=382"
      style="width: 100%"
    />
  </el-card>
</div>
  <div class="prodects">
    <el-card style="width: 30%;">
    <template #header>灯光xxxxx</template>
    <img
      src="https://img1.baidu.com/it/u=1901207602,2297492451&fm=253&fmt=auto&app=120&f=PNG?w=286&h=382"
      style="width: 100%"
    />
  </el-card>
  <el-card style="width: 30%;">
    <template #header>灯光xxxxx</template>
    <img
      src="https://img1.baidu.com/it/u=1901207602,2297492451&fm=253&fmt=auto&app=120&f=PNG?w=286&h=382"
      style="width: 100%"
    />
  </el-card>
  <el-card style="width: 30%;">
    <template #header>灯光xxxxx</template>
    <img
      src="https://img1.baidu.com/it/u=1901207602,2297492451&fm=253&fmt=auto&app=120&f=PNG?w=286&h=382"
      style="width: 100%"
    />
  </el-card>
  </div>
</div>
</template>
 
<style scoped>
 .container {
      text-align: center;
      background-color: #fff;
      padding: 40px;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    h1 {
      font-size: 2.5rem;
      color: #333;
      margin-bottom: 20px;
    }

    p {
      font-size: 1.2rem;
      color: #666;
      line-height: 1.6;
    }

    .highlight {
      color: #007BFF;
      font-weight: bold;
    }

    .prodects{
        display: flex;
        justify-content: space-between;
        margin-top: 100px;
    }
</style>
