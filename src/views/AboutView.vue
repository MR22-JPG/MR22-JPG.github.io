<script>
export default {
  data() {
    return {
      advantages: [
        { title: '行业经验丰富', desc: '15年舞台灯光领域深耕经验' },
        { title: '技术领先', desc: '自主研发智能灯光控制系统' },
        { title: '定制服务', desc: '根据场景需求提供个性化方案' },
        { title: '品质保障', desc: '通过ISO9001质量体系认证' }
      ]
    }
  }
}
</script>

<template>
  <div class="about-container">
    <el-row class="intro-section" :gutter="40">
      <el-col :md="12" :sm="24">
        <div class="intro-image">
          <img src="../../public/logo.jpg" alt="公司环境" />
        </div>
      </el-col>
      <el-col :md="12" :sm="24">
        <div class="intro-content">
          <h2><IEpOfficeBuilding class="icon"/> 关于我们</h2>
          <p class="highlight">广州广久舞台灯光成立于2010年，专注舞台灯光设备研发生产15年</p>
          <p>我们致力于为全球客户提供专业舞台灯光解决方案，产品覆盖演艺剧场、电视台、体育场馆等多个领域，服务客户遍布30+国家和地区。</p>
        </div>
      </el-col>
    </el-row>

    <div class="advantage-section">
      <h3>我们的优势</h3>
      <el-row :gutter="30">
        <el-col :md="6" :sm="12" v-for="(item, index) in advantages" :key="index">
          <div class="advantage-card">
            <IEpTrophy class="advantage-icon" />
            <h4>{{ item.title }}</h4>
            <p>{{ item.desc }}</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="process-section">
      <h3>服务流程</h3>
      <el-steps :active="4" align-center>
        <el-step title="需求沟通" description="专业团队1对1方案咨询" />
        <el-step title="方案设计" description="灯光效果模拟与方案定制" />
        <el-step title="产品交付" description="严格质检，准时发货" />
        <el-step title="售后服务" description="7x24小时技术支持" />
      </el-steps>
    </div>
    <div class="contact-section">
      <el-row :gutter="30">
        <el-col :md="12" :sm="24">
          <div class="contact-info">
            <h3><IEpMapLocation class="icon"/> 联系我们</h3>
            <p>地址：广州市天河区灯光产业园区B栋18层</p>
            <p>电话：020-8888 8888</p>
            <p>邮箱：info@guangjiu-lighting.com</p>
            <p>工作时间：周一至周五 8:30-18:00</p>
          </div>
        </el-col>
        <el-col :md="12" :sm="24">
          <div class="map-container">
            <iframe 
              src="https://map.baidu.com/..."
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

/* 简介模块样式 */
.intro-section {
  margin-bottom: 60px;
  align-items: center;
}
.intro-image img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}
.intro-content {
  padding: 30px;
  background: #f9fafb;
  border-radius: 8px;
}
.intro-content h2 {
  color: #2c3e50;
  font-size: 28px;
  margin-bottom: 20px;
}
.highlight {
  color: #007BFF;
  font-weight: 500;
  font-size: 18px;
}

/* 优势模块样式 */
.advantage-section {
  background: #f9fafb;
  padding: 50px 30px;
  margin: 40px 0;
  border-radius: 8px;
}
.advantage-section h3 {
  text-align: center;
  font-size: 26px;
  color: #2c3e50;
  margin-bottom: 40px;
}
.advantage-card {
  text-align: center;
  padding: 30px;
  background: white;
  border-radius: 8px;
  transition: transform 0.3s;
}
.advantage-card:hover {
  transform: translateY(-5px);
}
.advantage-icon {
  font-size: 40px;
  color: #007BFF;
  margin-bottom: 15px;
}

/* 流程模块样式 */
.process-section {
  margin: 60px 0;
}
:deep(.el-steps) {
  max-width: 1000px;
  margin: 0 auto;
}

/* 联系模块样式 */
.contact-section {
  background: #2c3e50;
  padding: 40px;
  border-radius: 8px;
  color: white;
}
.contact-info h3 {
  font-size: 24px;
  margin-bottom: 20px;
}
.map-container {
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
}
.map-container iframe {
  width: 100%;
  height: 100%;
}
</style>