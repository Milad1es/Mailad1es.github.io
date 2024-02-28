<script>

    import { blank_object } from "svelte/internal";

</script>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SHOPPING</title>
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
            margin-left: 100px;
            text-align: left;
            }
            .bbb { 
            margin-top: 20px;
            margin-left: 100px;
            text-align: left;
            }

            .ramm {
            border: 10px solid black; 
            background-color: orange;
            height: 160%; 
            }

    </style>
</head>
<body>

    <h1>SOPING</h1>
<hr/>
    <ul id="todoList">
        
    </ul>
    <div class="ram">
        
        <h1 class="aaa">classic cars</h1>
        <a href="https://classiccars.com/" claas="bbb">Länktexten här</a>
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