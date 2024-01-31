<script>

    import { blank_object } from "svelte/internal";

</script>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo App</title>
    <style>
        h1 {
            color:black; 
            text-align: center;
            font-size: 200%;
        }
        .ram {
            border: 10px solid black; 
            background-color: orange;
            height: 300px; 
            }
        .aaa { 
            margin-top: 20px;
            margin-left: 200px;
            text-align: left;
            }
        .bbb{
            text-align: center;
            margin-top: -165px;
            font-size: 200%;
        }
        .ccc{
            text-align: right;
            margin-right: 200px;
            margin-top: -160px;
            font-size: 200%;
        }
        .ddd{
            margin-left: 200px;
        }
        .eee{
            margin-left: 200px;
        }
        .fff{
            margin-left: 200px;
        }
        .ggg{
            text-align: center;
            margin-top: -7px;
        }
        .hhh{
            text-align: center;
        }
        .lll{
            text-align: center;
        }
        .mmm{
            text-align: right;
            margin-right: 200px;
            margin-top: -20px;
        }
        .nnn{
            text-align: right;
            margin-right: 200px;
            margin-top: 0px;
        }
        .ppp{
            text-align: right;
            margin-right: 200px;
            margin-top: 0px;  
        }

    </style>
</head>
<body>

    <h1>TODO</h1>
<hr/>
    <ul id="todoList">
        
    </ul>
    <div class="ram">
        
        <h1 class="aaa">TODO</h1>
        <p class="ddd">Din text här...</p>
        <p class="eee">Din text här...</p>
        <p class="fff">Din text här...</p>

        <h2 class="bbb">DOING</h2>
        <p class="ggg">Din text här...</p>
        <p class="hhh">Din text här...</p>
        <p class="lll">Din text här...</p>
        <h3 class="ccc">DONE</h3>
        <p class="mmm">Din text här...</p>
        <p class="nnn">Din text här...</p>
        <p class="ppp">Din text här...</p>
    </div>


    <script>
        
        document.addEventListener("DOMContentLoaded", function() {
            
            var todoList = document.getElementById("todoList");

            

            
            tasks.forEach(function(task) {
                var li = document.createElement("li");
                li.textContent = task;
                todoList.appendChild(li);
            });
        });
    </script>

</body>
</html>