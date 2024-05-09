## vscodeSetting

```
// 将设置放入此文件中以覆盖默认设置
{
    /**文本编辑器*/
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "editor.mouseWheelZoom": false,
    "editor.renderControlCharacters": true,
    "editor.renderIndentGuides": false,
    "editor.renderLineHighlight:": "all",
    "editor.renderWhitespace": "all",
    "editor.wordWrap": "bounded",
    "editor.wordWrapColumn": 1000,
    "editor.wrappingIndent": "indent",
    "editor.fontSize": 16,
    /*正在格式化*/
    "editor.formatOnSave": false,
    "editor.formatOnType": true,
    /*差异编辑器*/
    "diffEditor.ignoreTrimWhitespace": false,
    /*缩略图*/
    "editor.minimap.enabled": true,
    "editor.minimap.renderCharacters": false,
    /*文件*/
    "files.autoGuessEncoding": false,
    "files.autoSave": "off",
    "files.encoding": "utf8",
    "files.eol": "",
    "files.exclude": {
        "**/.git": true,
        "**/.svn": true,
        "**/.hg": true,
        "**/.history": true,
        "**/CVS": true,
        "**/.DS_Store": true,
        "**/node_modules": true,
    },
    "files.insertFinalNewline": true,
    "files.trimFinaINewlines": true,
    "files.trimTrailingWhitespace": true,
    /*工作台*/
    "workbench.startupEditor": "newUntitledFile",
    /*外观*/
    "workbench.colorCustomizations": {
        "editorOverviewRuler.errorForeground": "#0000",
        "editorOverviewRuler.warningForeground": "#0000",
        "workbench.iconTheme": "material-icon-theme",
    },
    /*编辑管理*/
    "workbench.editor.openPositioning": "last",
    /*窗口*/
    "window.restoreFullscreen": true,
    /*功能*/
    /*搜索*/
    "search.followSymlinks": false,
    "search.showLineNumbers": true,
    /*拓展侧边栏面板*/
    "extensions.autoUpdate": true,
    /*终端*/
    "terminal.external.windowsExec": "D:/Software/System/Cmder/Cmder.exe",
    "terminal.integrated.cursorBlinking": true,
    "terminal.integrated.cursorStyle": "line",
    "terminal.integrated.shell.windows": "cmd.exe",
    "terminal.integrated.shellArgs.windows": ["/K", "D:/Software/System/Cmder/vendor/bin/vscode_init.cmd"],
    /*问题*/
    "problems.decorations.enabled": false,
    /*应用程序*/
    /*代理服务器*/
    "http.proxy": "http://10.93.180.174:10081",
    "http.proxyStrictSSL": false,
    /*更新*/
    "update.enableWindowsBackgroundUpdates": false,
    "update.mode": "manual",
    /*遥测*/
    "telemetry.enableCrashReporter": false,
    "telemetry.enableTelemetry": false,
    /*语言指定配置*/
    "[html]": {
        "editor.formatOnSave": true
    },
    "[css]": {
        "editor.formatOnSave": true
    },
    "[javescript]": {
        "editor.formatOnSave": true
    },
    "[typescript]": {
        "editor.formatOnSave": true
    },
    "[vue]": {
        "editor.formatOnSave": true
    },
    /*拓展*/
    /*HTML*/
    "html.format.extraLiners": "body",
    "html.format.wrapLineLength": 0,
    /*TypeScript*/
    "javascript.suggest.autoImports": false,
    "javascript.updateImportsOnFileMove.enabled": "never",
    "typescript.suggest.autoImports": false,
    "typescript.updateImportsOnFileMove.enabled": "never",
    /*Color Highlight*/
    "color-highlight.markRuler": false,
    /*colorize*/
    "colorize.languages": [
        "javascript",
        "typescript",
        "Vue"
    ],
    /*ESLint*/
    "eslint.run": "onType",
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact",
        "Vue"
    ],
    /*Log Wrapper*/
    "debugwrapper.wrappers": {
        "default": "console.log('$eSEL', $SEL)"
    },
    /*Todo Tree*/
    "todo-tree.general.tags": ["TODO", "FIXME"],
    "todo-tree.highlights.defaultHighlight": {
        "gutterIcon": true
    },
    "todo-tree.highlights.customHighlight": {
        "TODO": {
            "foreground": "#ffffff",
            "background": "#ffbd2a",
            "iconColour": "#ffbd2a"
        },
        "FIXME": {
            "foreground": "#ffffff",
            "background": "#f06292",
            "icon": "flame",
            "iconColour": "#f06292"
        }
    },
    /*Vetur*/
    "vetur.format.options.tabSize": 4,
    "vetur.format.options.useTabs": false,
    "vetur.format.defaultFormatter.html": "none",
    "vetur.format.defaultFormatter.js": "none",
    "vetur.format.defaultFormatter.ts": "none",
    "editor.suggestSelection": "first",
    "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
    "emmet.preferences": {}
}
```
