<template>
  <div class="achievement-container">
    <!-- 页面标题 -->
    <div class="page-header">
      <h1><IEpTrophy class="icon"/> 成果展示</h1>
      <p class="subtitle">15年专注舞台灯光，服务全球1000+客户</p>
    </div>

    <!-- 数据统计模块 -->
    <div class="stats-section">
      <el-row :gutter="30">
        <el-col :md="6" :sm="12" v-for="(stat, index) in stats" :key="index">
          <div class="stat-card">
            <IEpDataAnalysis class="stat-icon" />
            <h3>{{ stat.value }}</h3>
            <p>{{ stat.label }}</p>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- 案例展示模块 -->
    <div class="case-section">
      <h2><IEpPicture class="icon"/> 成功案例</h2>
      <el-row :gutter="20">
        <el-col :md="8" :sm="12" v-for="(caseItem, index) in cases" :key="index">
          <div class="case-card">
            <img :src="caseItem.image" :alt="caseItem.title" />
            <div class="case-content">
              <h4>{{ caseItem.title }}</h4>
              <p>{{ caseItem.desc }}</p>
              <el-tag type="success">{{ caseItem.type }}</el-tag>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- 客户评价模块 -->
    <div class="testimonial-section">
      <h2><IEpStar class="icon"/> 客户评价</h2>
      <el-carousel height="200px" :interval="5000">
        <el-carousel-item v-for="(testimonial, index) in testimonials" :key="index">
          <div class="testimonial-card">
            <p class="quote">"{{ testimonial.quote }}"</p>
            <p class="author">—— {{ testimonial.author }}</p>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<style scoped>
.achievement-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

/* 页面标题样式 */
.page-header {
  text-align: center;
  margin-bottom: 60px;
}
.page-header h1 {
  font-size: 36px;
  color: #2c3e50;
}
.subtitle {
  color: #666;
  font-size: 18px;
}

/* 数据统计模块样式 */
.stats-section {
  background: #f9fafb;
  padding: 50px 30px;
  margin: 40px 0;
  border-radius: 8px;
}
.stat-card {
  text-align: center;
  padding: 30px;
  background: white;
  border-radius: 8px;
  transition: transform 0.3s;
}
.stat-card:hover {
  transform: translateY(-5px);
}
.stat-icon {
  font-size: 40px;
  color: #007BFF;
  margin-bottom: 15px;
}
.stat-card h3 {
  font-size: 32px;
  color: #2c3e50;
  margin: 10px 0;
}

/* 案例展示模块样式 */
.case-section {
  margin: 60px 0;
}
.case-section h2 {
  font-size: 28px;
  color: #2c3e50;
  margin-bottom: 40px;
}
.case-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}
.case-card:hover {
  transform: translateY(-5px);
}
.case-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.case-content {
  padding: 20px;
}
.case-content h4 {
  font-size: 20px;
  color: #2c3e50;
  margin-bottom: 10px;
}

/* 客户评价模块样式 */
.testimonial-section {
  background: #2c3e50;
  padding: 50px 30px;
  border-radius: 8px;
  color: white;
}
.testimonial-section h2 {
  text-align: center;
  margin-bottom: 40px;
}
.testimonial-card {
  text-align: center;
  padding: 40px;
}
.quote {
  font-size: 18px;
  font-style: italic;
  margin-bottom: 20px;
}
.author {
  font-weight: bold;
}
</style>

<script>
export default {
  data() {
    return {
      stats: [
        { value: "15+", label: "行业经验" },
        { value: "1000+", label: "服务客户" },
        { value: "30+", label: "覆盖国家" },
        { value: "50+", label: "专利技术" }
      ],
      cases: [
        {
          image: "../../public/1.jpg",
          title: "国家大剧院灯光改造",
          desc: "采用智能调光系统，实现舞台灯光精准控制",
          type: "剧院项目"
        },
        {
          image: "../../public/2.webp",
          title: "广州亚运会开幕式",
          desc: "大型户外舞台灯光解决方案",
          type: "体育赛事"
        },
        {
          image: "../../public/3.webp",
          title: "央视春晚舞台灯光",
          desc: "定制化灯光效果，完美呈现节目氛围",
          type: "电视节目"
        }
      ],
      testimonials: [
        {
          quote: "广久灯光的专业团队为我们提供了完美的解决方案，效果远超预期！",
          author: "国家大剧院 张经理"
        },
        {
          quote: "从设计到安装全程服务到位，是我们长期信赖的合作伙伴。",
          author: "央视春晚 李导"
        },
        {
          quote: "产品质量稳定，售后服务及时，强烈推荐！",
          author: "广州亚运会组委会 王主任"
        }
      ]
    }
  }
}
</script>