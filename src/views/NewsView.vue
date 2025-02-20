<template>
  <div class="news-container">
    <!-- 页面标题 -->
    <div class="page-header">
      <h1>新闻资讯</h1>
      <p class="subtitle">了解最新行业动态，掌握前沿技术趋势</p>
    </div>

    <!-- 新闻分类筛选 -->
    <div class="filter-section">
      <el-radio-group v-model="activeCategory">
        <el-radio-button label="全部" />
        <el-radio-button label="公司动态" />
        <el-radio-button label="行业资讯" />
        <el-radio-button label="技术文章" />
        <el-radio-button label="展会活动" />
      </el-radio-group>
    </div>

    <!-- 新闻列表 -->
    <div class="news-list">
      <el-row :gutter="30">
        <el-col :md="8" :sm="12" v-for="(news, index) in filteredNews" :key="index">
          <div class="news-card">
            <img :src="news.image" :alt="news.title" />
            <div class="news-content">
              <el-tag :type="news.type === '公司动态' ? 'success' : 'info'">
                {{ news.type }}
              </el-tag>
              <h4>{{ news.title }}</h4>
              <p class="summary">{{ news.summary }}</p>
              <div class="meta">
                <span>{{ news.date }}</span>
                <span>{{ news.views }} 浏览</span>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- 热门新闻 -->
    <div class="hot-news">
      <h2> 热门新闻</h2>
      <el-row :gutter="20">
        <el-col :md="12" v-for="(hotNews, index) in hotNewsList" :key="index">
          <div class="hot-news-card">
            <img :src="hotNews.image" :alt="hotNews.title" />
            <div class="hot-news-content">
              <h4>{{ hotNews.title }}</h4>
              <p class="summary">{{ hotNews.summary }}</p>
              <div class="meta">
                <span> {{ hotNews.date }}</span>
                <span> {{ hotNews.views }} 浏览</span>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped>
.news-container {
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

/* 筛选模块样式 */
.filter-section {
  margin-bottom: 40px;
  text-align: center;
}

/* 新闻列表样式 */
.news-list {
  margin-bottom: 60px;
}
.news-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s;
  margin-bottom: 30px;
}
.news-card:hover {
  transform: translateY(-5px);
}
.news-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.news-content {
  padding: 20px;
}
.news-content h4 {
  font-size: 18px;
  color: #2c3e50;
  margin: 10px 0;
}
.summary {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 15px;
}
.meta {
  display: flex;
  justify-content: space-between;
  color: #999;
  font-size: 12px;
}

/* 热门新闻样式 */
.hot-news {
  background: #f9fafb;
  padding: 50px 30px;
  border-radius: 8px;
}
.hot-news h2 {
  font-size: 28px;
  color: #2c3e50;
  margin-bottom: 40px;
}
.hot-news-card {
  display: flex;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  margin-bottom: 30px;
}
.hot-news-card img {
  width: 40%;
  height: 200px;
  object-fit: cover;
}
.hot-news-content {
  padding: 20px;
  flex: 1;
}
</style>

<script>
export default {
  data() {
    return {
      activeCategory: "全部",
      newsList: [
        {
          image: "../../public/1.jpg",
          title: "广久灯光新品发布会圆满成功",
          summary: "2023年秋季新品发布会展示了最新智能灯光控制系统...",
          date: "2023-10-15",
          views: 1234,
          type: "公司动态"
        },
        {
          image: "../../public/1.jpg",
          title: "舞台灯光技术发展趋势分析",
          summary: "随着LED技术的进步，舞台灯光行业正迎来新的发展机遇...",
          date: "2023-10-10",
          views: 987,
          type: "行业资讯"
        },
        {
          image: "../../public/1.jpg",
          title: "智能调光系统技术解析",
          summary: "深入探讨智能调光系统的核心技术及应用场景...",
          date: "2023-10-05",
          views: 765,
          type: "技术文章"
        }
      ],
      hotNewsList: [
        {
          image: "../../public/1.jpg",
          title: "广久灯光荣获行业创新大奖",
          summary: "在2023年度照明行业创新评选中，广久灯光凭借...",
          date: "2023-09-28",
          views: 2345
        },
        {
          image: "../../public/1.jpg",
          title: "2023广州国际灯光展圆满落幕",
          summary: "广久灯光在本次展会中展示了多款创新产品...",
          date: "2023-09-20",
          views: 1987
        }
      ]
    }
  },
  computed: {
    filteredNews() {
      if (this.activeCategory === "全部") {
        return this.newsList;
      }
      return this.newsList.filter(news => news.type === this.activeCategory);
    }
  }
}
</script>