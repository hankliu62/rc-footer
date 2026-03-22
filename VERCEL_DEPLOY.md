# NPM 包发布指南

## 项目概述

`@hankliu/rc-footer` 是一个 React 组件包，发布流程包括：

1. **CI 测试** - Lint 代码 + 测试覆盖率
2. **编译打包** - 生成 ES/UMD 模块
3. **NPM 发布** - 发布到 npmjs.org
4. **文档部署** - GitHub Pages 部署文档

## 发布流程

### GitHub Actions 自动发布

当代码推送到 `master` 分支时，CI 会自动执行以下步骤：

```
push master → lint → coverage → compile → publish → site → tag
```

### 手动发布

```bash
# 1. 更新版本号
npm version patch  # 或 minor / major

# 2. 编译
npm run compile

# 3. 发布（需要先登录 npm）
npm login --registry=https://registry.npmjs.org
npm publish --access public --registry=https://registry.npmjs.org
```

## NPM Token 配置

### 创建 Granular Access Token

1. 登录 [npmjs.com](https://www.npmjs.com)
2. 点击头像 → **Access Tokens**
3. **Generate New Token** → **Granular Access Token**
4. 配置权限：
   - **Package Registries**: `https://registry.npmjs.org/`
   - **Organizations**: `@hankliu`
   - **Permissions**: ✅ **Bypass 2FA for 'npm publish'**
5. 生成并复制 Token

### 添加到 GitHub Secrets

1. 进入仓库 **Settings** → **Secrets and variables** → **Actions**
2. 添加 `NPM_TOKEN`：粘贴刚才生成的 Token

## 常见问题

### npm publish 403 错误

```
403 Forbidden - PUT https://registry.npmjs.org/@xxx/xxx
Two-factor authentication or granular access token with bypass 2fa enabled is required to publish packages.
```

**解决方案：** 确保使用 **Granular Access Token**（不是 Classic Token），并勾选 **Bypass 2FA for 'npm publish'**。

### CI 缓存未命中

如果依赖安装变慢，可以在 GitHub Actions 日志中查看缓存状态，必要时手动清除缓存。

## 相关链接

- npmjs.com：https://www.npmjs.com
- GitHub Actions：https://docs.github.com/en/actions
