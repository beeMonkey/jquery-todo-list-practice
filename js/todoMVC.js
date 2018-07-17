$(document)
    .ready(function () {
        const todoForm = {
            todos: [{id:"zuixian",name:"默认第一任务"},{name:"可选的"}],
            statusOfList: "all"
        }

        function filterByStatus(todos,status){
            // ${filterByStatus(todoForm.todos,todoForm.statusOfList).map(todoViewItem).join("")}
        }
        
        renderTodoList=(todos)=>{
            return todos.map(todo=>{
                return `<li id=${todo.id} class="">
                <input name="done-todo" type="checkbox" class="done-todo"> ${todo.name} </li>`
            }).join("");
        }

        window.addItem=()=>{
            var toAdd=$(".input-text").val();
            todoForm.todos.push({id:generateUUID(),name:toAdd,complete:false});
            render();
        }


        const buildHTML=(todoForm)=> {
            return `
            <div>
        <input class="input-text" type="text" name="ListItem" data-com.agilebits.onepassword.user-edited="yes">
        <div id="button" onclick="addItem()">Add</div>
    </div>
    <br>
    <ol>${renderTodoList(todoForm.todos)}</ol>
    <div>
        <ul id="filters">
            <li>
                <a href="#" data-filter="all" class="selected">ALL</a>
            </li>
            <li>
                <a href="#" data-filter="active" class="">Active</a>
            </li>
            <li>
                <a href="#" data-filter="complete" class="">Complete</a>
            </li>
        </ul>

    </div>
    `
        }

        const render = () => {
            $('#todoForm').html(buildHTML(todoForm));
        }
        render();
        function generateUUID() {
            /*jshint bitwise:false */
            var i,
                random;
            var uuid = '';

            for (i = 0; i < 32; i++) {
                random = Math.random() * 16 | 0;
                if (i === 8 || i === 12 || i === 16 || i === 20) {
                    uuid += '-';
                }
                uuid += (i === 12
                    ? 4
                    : (i === 16
                        ? (random & 3 | 8)
                        : random)).toString(16);
            }
            return uuid;
        }

        $("body").on("click", ".done-todo", function () {
            if ($(this).parent().hasClass("checked")) {
                $(this).parent().removeClass("checked");
            } else {
                $(this).parent().addClass("checked");
            }
        });

        $("ol li").click(function () {
            $(this).text.attr("contentEditable", true);
        })

        $("a[data-filter=all]").click(function () {
            $("ol li").css("display", "");
        });

        $("a[data-filter=active]").click(function () {
            $("ol").children().filter('.checked').css("display", "none")
            $("ol").children().not('.checked').css("display", "")
        });

        $("a[data-filter=complete]").click(function () {
            $("ol").children().not('.checked').css("display", "none")
            $("ol").children().filter('.checked').css("display", "")
        });

    });