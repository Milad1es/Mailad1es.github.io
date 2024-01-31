<script>
  import { enhance } from "$app/forms";
  import "elizabot";
  import ElizaBot from "elizabot";
  import {story_id_store} from '$lib/stores.js'
  let eliza = new ElizaBot();

  let storychat;
  story_id_store.subscribe((value) => {
    storychat = value;
  })
  


  let chat;
  
  if (typeof localStorage !== 'undefined') {
    chat = JSON.parse(localStorage.getItem(storychat)) || [{ user: "eliza", text: eliza.getInitial() }];
  } else {
    chat = [{ user: "eliza", text: eliza.getInitial() }];
  }

  

  async function write(message) {
    // TODO: yeet in the new message

    chat = [...chat, { user: "user", text: message }];
    var reply = eliza.transform(message);
   
   
    


    //Hämta HTML-elementet med id:et visible
    var element = document.getElementById("visible");
    //Ändrar elementets CSS-egenskap display till default
    element.style.display = "flex"; // Visa elementet
    // random delay for writing
    await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));
    element.style.display = "none"; // Visa elementet



    // TODO: write the text
   
    chat = [...chat, { user: "eliza", text: reply }];
   
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(storychat, JSON.stringify(chat));
    }

  }
  function resetChat(){
      chat=[{user: "eliza", text: eliza.getInitial() }];
      if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(storychat);
    }
    }

  
 
</script>


<svelte:head>

<link rel="stylesheet" href="/pico.min.css" />

  <style>
    nav {
      margin-left: 5%;
      margin-right: 50%;
    }

  </style>
</svelte:head>
<div class="container">
  <h1>How can I help you?</h1>


  <div class="scrollable">
    <!-- TODO: loop over the messages and display them -->
    {#each chat as message }
      
   
    <article class:eliza={message.user === 'eliza'} class:user={message.user === 'user'}>
      <span>
        {message.text}
      </span>
    </article>
   {/each}


    <article id="visible">
      <span class="circle">
      </span>
      <span class="circle">
      </span>
      <span class="circle">
      </span>

    </article>
  </div>
  <form
    method="post"
    use:enhance={({ form, data, action, cancel }) => {
       https://kit.svelte.dev/docs/form-actions#progressive-enhancement */
      cancel(); //don't post anything to server
      const text = data.get("text");
      write(text);

      // TODO: reset the form using form.reset()
      form.reset();
    }}
  >
    <input type="text" name="text" placeholder="Write your text here" />
    <button type="button" on:click={resetChat}> Reset </button>
  </form>
</div>


<style>
 

  #visible {
    width: 100px;
    height: 60px;
    display: none;
    justify-content: center;
    align-items: center;
    padding: 0%;
  }
  .circle{
    width: 10px;
    height: 10px;
    border-radius:100%;
    margin: 5px;
    background-color: rgb(179, 192, 250);
    animation-name: typing;
    animation-duration: 1000ms; /* Längd på animationen (till exempel 3
    sekunder) */
    animation-timing-function: steps(1000, start); /* Funktion som styr
    tidsförloppet (till exempel "ease-in-out") */
    animation-iteration-count: infinite;
  }

  @keyframes typing {
    0% {transform: scale(1);
  }
  50% {
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}

/* CSS-stilar för .circle med index 1 (den första cirkeln) */
.circle:nth-child(1) {
animation-delay: 0ms; /* Ingen fördröjning */
}
/* CSS-stilar för .circle med index 2 (den andra cirkeln) */
.circle:nth-child(2) {
animation-delay: 333ms; /* Starta animationen efter 333 millisekunder
(ms) */
}
/* CSS-stilar för .circle med index 3 (den tredje cirkeln) */
.circle:nth-child(3) {
animation-delay: 666ms; /* Starta animationen efter 666 ms */
}

.eliza {
    font-family: cursive;
    color: rgb(0, 0, 0);
    font-style: italic;
  }

  .user {
    text-align: right;
    color: rgb(107, 185, 107);
    font-weight: bold;

  }

  body {
      font-family:Georgia, serif;
      margin: 0;
      padding: 0;
      background-color: #e7b33a;
     
    }

    .container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      background-color: #d9b813;
     
      border-radius: 8px;
    }

    article.eliza {
      background-color: #e0f7fa;
    }

    article.user {
      background-color: #c8e6c9;
      
    }

    h1{
      color: #000;
      text-align: left;

    }

    article{
      margin: 10px 10px;
      padding: 2%;
      border-radius: 100px;
      word-wrap:break-word;

    }

    input{

      padding: 9px;
      margin-right: 10px;
      border: #000;
      border-radius: 10px;
  

    }

    
  

</style>
