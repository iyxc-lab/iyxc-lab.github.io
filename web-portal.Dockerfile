# 使用 Node.js 官方镜像作为基础镜像
FROM node:18-alpine AS builder

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 yarn.lock 到工作目录
COPY package.json yarn.lock ./

# 安装依赖
RUN yarn

# 复制所有文件到工作目录
COPY . .

# 构建 Next.js 应用
RUN yarn build

# 暴露端口
EXPOSE 3000

# 启动 Nginx
CMD ["yarn", "start"]
