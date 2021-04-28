const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    prompting() {
        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Your project name',
                default: this.appname
            }
        ]).then(answers => {
            this.answers = answers
        })
    }
    writing() {
        // 把每一个文件都通过模板转换到目标路径
        const templates = [
            'config/proxy.ts',
            'config/server.ts',
            'mock/api.ts',
            'public/css/reset.css',
            'public/favicon.ico',
            'package.json',
            'README.md',
            'tsconfig.json',
            'typings.d.ts',
            'static/favicon.ico',
            'src/components/t.ts',
            'src/image/1.png',
            'src/image/carIcon3.png',
            'src/layouts/index.tsx',
            'src/models/index.ts',
            'src/models/user.ts',
            'src/pages/404.tsx',
            'src/pages/document.ejs',
            'src/pages/index.less',
            'src/pages/Index.tsx',
            'src/router/index.ts',
            'src/util/index.ts',
            'src/wrappers/auth.tsx',
            'src/app.ts',
            'src/global.less',
        ]

        templates.forEach(item => {
            // item => 每个文件路径
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answers
            )
        })
    }
}