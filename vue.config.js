module.exports = {
    publicPath: './',
    //van定制主题
    css: {
        loaderOptions: {
            less: {
                // 若使用 less-loader@5，请移除 lessOptions 这一级，直接配置选项。
                lessOptions: {
                    modifyVars: {
                        // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
                        hack: `true; @import "src/assets/style/base.less";`,
                    },
                },
            },
        },
    },
    devServer: {
        proxy: {
            // 代理 /dev-api/user/login 到 http://127.0.0.1:3000/user/login
            [process.env.VUE_APP_BASE_API]: {
                target: `https://sast.awspaas.com`,
                changeOrigin: true,
                pathRewrite: {
                    ["^" + process.env.VUE_APP_BASE_API]: ""
                }
            }
        },
    }
};