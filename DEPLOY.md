# 个人主页部署指南

## GitHub Pages 部署步骤

### 方式一：使用 GitHub Actions（推荐，自动部署）

1. **创建 GitHub 仓库**
   - 登录 GitHub，进入 https://github.com/new
   - 仓库名称填：`TeddyVan0831.github.io`
   - 选择 **Public**（公开仓库才能使用 GitHub Pages）
   - 点击 **Create repository**

2. **推送代码到仓库**
   ```bash
   # 在 portfolio 目录下执行
   cd portfolio
   
   # 初始化 git（如果还没有）
   git init
   
   # 添加所有文件
   git add .
   
   # 提交
   git commit -m "Initial commit"
   
   # 添加远程仓库（替换 YOUR_GITHUB_USERNAME 为 TeddyVan0831）
   git remote add origin https://github.com/TeddyVan0831/TeddyVan0831.github.io.git
   
   # 推送
   git branch -M main
   git push -u origin main
   ```

3. **启用 GitHub Pages**
   - 在 GitHub 仓库页面，进入 **Settings** → **Pages**
   - Source 选择 **Deploy from a branch**
   - Branch 选择 **main**，文件夹选择 **/ (root)**
   - 点击 **Save**

4. **等待部署完成**
   - 等待 1-2 分钟，GitHub Actions 会自动构建并部署
   - 访问 https://TeddyVan0831.github.io 查看

### 方式二：手动部署

1. 构建项目：
   ```bash
   npm run build
   ```

2. 将 `dist` 文件夹的内容上传到 GitHub 仓库的 `main` 分支

---

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

---

## 项目结构

```
portfolio/
├── public/
│   └── favicon.svg          # 网站图标
├── src/
│   ├── components/          # 组件
│   │   ├── BlogCard.astro
│   │   └── ProjectCard.astro
│   ├── layouts/
│   │   └── Layout.astro     # 主布局
│   ├── pages/               # 页面
│   │   ├── index.astro      # 首页
│   │   ├── projects.astro   # 项目页
│   │   ├── blogs.astro      # 博客页
│   │   └── 404.astro       # 404 页面
│   └── styles/
│       └── global.css       # 全局样式
├── astro.config.mjs         # Astro 配置
├── package.json
└── tsconfig.json
```

---

## 自定义内容

### 修改个人信息

编辑 `src/layouts/Layout.astro` 和 `src/pages/index.astro` 中的：
- 姓名、简介
- 社交链接
- 研究方向

### 添加项目

编辑 `src/pages/index.astro` 中的 `projects` 数组，添加新项目卡片。

### 添加博客

编辑 `src/pages/blogs.astro` 中的 `blogs` 数组，添加新文章。

---

## 技术栈

- **框架**: Astro 5.x
- **样式**: Tailwind CSS 4.x
- **字体**: Inter + Noto Sans SC + JetBrains Mono
- **部署**: GitHub Pages
