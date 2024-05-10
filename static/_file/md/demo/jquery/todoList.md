## todoList组件代码

```
<template>
    <div class="jq-todoList" style="margin-top: 15px;">
        <header>
            <section>
                <label for="title">ToDoList</label>
                <input id="title" type="text" name="title" placeholder="添加ToDo" required="required" autocomplete="off" />
            </section>
        </header>
        <section>
            <h2>正在进行 <span id="todocount"></span></h2>
            <ol id="todolist" class="demo-box">

            </ol>
            <h2>已经完成 <span id="donecount"></span></h2>
            <ul id="donelist">

            </ul>
        </section>
        <footer>
            Copyright &copy; 2014 todolist.cn
        </footer>
    </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'

import { todoList } from './js/todoList.js'

export default defineComponent({
    setup() {
        onMounted(() => {
            todoList()
        })

        return {}
    },
})
</script>

<style scoped>
body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    background: #cdcdcd;
}

.jq-todoList >>> header {
    height: 50px;
    background: #333;
    background: rgba(47, 47, 47, 0.98);
}

.jq-todoList >>> section {
    margin: 0 auto;
}

.jq-todoList >>> label {
    float: left;
    width: 100px;
    line-height: 50px;
    color: #ddd;
    font-size: 24px;
    cursor: pointer;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.jq-todoList >>> header input {
    float: right;
    width: 60%;
    height: 24px;
    margin-top: 12px;
    text-indent: 10px;
    border-radius: 5px;
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.24),
        0 1px 6px rgba(0, 0, 0, 0.45) inset;
    border: none;
    background: #fff;
}

.jq-todoList >>> input:focus {
    outline-width: 0;
}

.jq-todoList >>> h2 {
    position: relative;
}

.jq-todoList >>> span {
    position: absolute;
    top: 30px;
    right: 10px;
    display: inline-block;
    padding: 0 5px;
    height: 20px;
    border-radius: 20px;
    background: #e6e6fa;
    line-height: 22px;
    text-align: center;
    color: #666;
    font-size: 14px;
}

.jq-todoList >>> ol,
.jq-todoList >>> ul {
    padding: 0;
    list-style: none;
}

.jq-todoList >>> li input {
    position: absolute;
    top: 4px;
    left: 10px;
    width: 22px;
    height: 22px;
    cursor: pointer;
}

.jq-todoList >>> p {
    margin: 0;
    padding-top: 5px;
}

.jq-todoList >>> li p input {
    top: 3px;
    left: 40px;
    width: 70%;
    height: 20px;
    line-height: 14px;
    text-indent: 5px;
    font-size: 14px;
}

.jq-todoList >>> li {
    height: 32px;
    line-height: 32px;
    background: #fff;
    position: relative;
    margin-bottom: 10px;
    padding: 0 45px;
    border-radius: 3px;
    border-left: 5px solid #629a9c;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
}

.jq-todoList >>> ol li {
    cursor: move;
}

.jq-todoList >>> ul li {
    border-left: 5px solid #999;
    opacity: 0.5;
}

.jq-todoList >>> li a {
    position: absolute;
    top: 2px;
    right: 5px;
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 14px;
    border: 6px double #fff;
    background: #ccc;
    line-height: 14px;
    text-align: center;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
}

.jq-todoList >>> footer {
    color: #666;
    font-size: 14px;
    text-align: center;
}

.jq-todoList >>> footer a {
    color: #666;
    text-decoration: none;
    color: #999;
}

@media screen and (max-device-width: 620px) {
    section {
        width: 96%;
        padding: 0 2%;
    }
}

@media screen and (min-width: 620px) {
    section {
        width: 600px;
        padding: 0 10px;
    }
}
</style>

```

## todoList.js

```

import $ from 'jquery'

export const todoList = () => {
// alert(11);
    // 1. 按下回车 把完整数据 存储到本地存储里面
    // 存储的数据格式  var todolist = [{title: "xxx", done: false}]
    load()
    $('.jq-todoList #title').on('keydown', function(event) {
        if (event.keyCode === 13) {
            if ($(this).val() === '') {
                // eslint-disable-next-line no-alert
                alert('请输入您要的操作')
            } else {
                // 先读取本地存储原来的数据
                let local = getDate()
                // console.log(local);
                // 把local数组进行更新数据 把最新的数据追加给local数组
                local.push({ title: $(this).val(), done: false })
                // 把这个数组local 存储给本地存储
                saveDate(local)
                // 2. toDoList 本地存储数据渲染加载到页面
                load()
                $(this).val('')
            }
        }
    })
    // 3. toDoList 删除操作
    $('.jq-todoList ol, .jq-todoList ul').on('click', 'a', function() {
        // alert(11);
        // 先获取本地存储
        let data = getDate()
        console.log(data)
        // 修改数据
        let index = $(this).attr('id')
        console.log(index)
        data.splice(index, 1)
        // 保存到本地存储
        saveDate(data)
        // 重新渲染页面
        load()
    })
    // 4. toDoList 正在进行和已完成选项操作
    $('.jq-todoList ol, .jq-todoList ul').on('click', 'input', function() {
        // alert(11);
        // 先获取本地存储的数据
        let data = getDate()
        // 修改数据
        let index = $(this).siblings('a').attr('id')
        console.log(index)
        // data[?].done = ?
        data[index].done = $(this).prop('checked')
        console.log(data)

        // 保存到本地存储
        saveDate(data)
        // 重新渲染页面
        load()
    })
    // 读取本地存储的数据
    function getDate() {
        let data = localStorage.getItem('todolist')
        if (data !== null) {
            // 本地存储里面的数据是字符串格式的 但是我们需要的是对象格式的
            return JSON.parse(data)
        } else {
            return []
        }
    }
    // 保存本地存储数据
    function saveDate(data) {
        localStorage.setItem('todolist', JSON.stringify(data))
    }
    // 渲染加载数据
    function load() {
        // 读取本地存储的数据
        let data = getDate()
        console.log(data)
        // 遍历之前先要清空ol里面的元素内容
        $('.jq-todoList ol, .jq-todoList ul').empty()
        let todoCount = 0 // 正在进行的个数
        let doneCount = 0 // 已经完成的个数
        // 遍历这个数据
        $.each(data, (i, n) => {
            // console.log(n);
            if (n.done) {
                $('.jq-todoList ul').prepend('<li><input type=\'checkbox\' checked=\'checked\' > <p>' + n.title + '</p> <a href=\'javascript:;\' id=' + i + ' ></a></li>')
                doneCount++
            } else {
                $('.jq-todoList ol').prepend('<li><input type=\'checkbox\' > <p>' + n.title + '</p> <a href=\'javascript:;\' id=' + i + ' ></a></li>')
                todoCount++
            }

        })
        $('#todocount').text(todoCount)
        $('#donecount').text(doneCount)

    }
}

```
