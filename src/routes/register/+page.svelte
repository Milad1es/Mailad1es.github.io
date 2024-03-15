<script>

    import { blank_object } from "svelte/internal";

</script>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title class="Rubrik">Registration Form</title>
  <style>
    h1 {
      color: rgb(0, 0, 0);
      text-align: center;
    }

    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }

    form {
      width: 300px;
      margin: 20px;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
    }

    label {
      display: block;
      margin: 10px 0;
    }

    input {
      width: 100%;
      padding: 8px;
      margin: 8px 0;
      box-sizing: border-box;
    }

    button {
      width: 100%;
      padding: 10px;
      background-color: #4caf50;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .header{
        position:absolute;
        top:1%;
        left:40%;
    }
.Form{ position:absolute;
    left:36%;

}

  </style>
</head>
<body>

  <h1 class="header">Registration Form</h1>
  <hr class="lin"/>

  <form class="Form">
    <label for="firstName">First Name:</label>
    <input type="text" id="firstName" name="firstName" required>
   
    <label for="lastName">Last Name:</label>
    <input type="text" id="lastName" name="lastName" required>
   
    <label for="email">Email:</label>
    <input type="text" id="email" name="email" required>
   
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
    
    <button type="submit">Register</button>
  </form>

</body>
</html>