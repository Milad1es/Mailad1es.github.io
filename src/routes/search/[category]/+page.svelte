<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>


<main>
  <h2>{"Showing results for: " + data.params.category}</h2>
  <hr />
  <!-- TODO: Style the results -->
  <div>
    {#each data.response as item}
    {#each Object.entries(item) as [key,value] }
    {#if data.params.category === 'users' }
          <div class="user-result">
            <article>
              <h3 class="key-result">{key}</h3>
              <p class="value-result">{value}</p>
            </article>
          </div>
        
        {:else if data.params.category === 'addresses'}
        <div class="address-result">
          <article>
            <h3 class="key-result">{key}</h3>
            <p class="value-result">{value}</p>
          </article>
        </div>  
        
        {:else if data.params.category === 'banks'}
        <div class="bank-result">
          <article>
            <h3 class="key-result">{key}</h3>
            <p class="value-result">{value}</p>
          </article>
        </div>
        {:else if data.params.category === 'appliances'}
        <div class="default-result">
          <article>
            <h3>{key}</h3>
            <p>{value}</p>
          </article>
        </div>
        {:else if data.params.category === 'beers'}
        <div class="default-result">
          <article>
            <h3>{key}</h3>
            <p>{value}</p>
          </article>
        </div>
        {:else if data.params.category === 'blood_types'}
        <div class="default-result">
          <article>
            <h3>{key}</h3>
            <p>{value}</p>
          </article>
        </div>
        {:else}
        <div class="default-result"></div>
          <article>
            <h3>{key}</h3>
            <p>{value}</p>
          </article>  
        {/if}
      {/each}
    {/each}
  </div>
</main>
<style>
  .user-result {
    background-color: #f8f8f8;
    border: 1px solid #e40e0e;
    padding: 10px;
    margin-bottom: 10px;
  }

  .address-result {
    background-color: #e6f7ff;
    border: 1px solid #66b2ff;
    padding: 10px;
    margin-bottom: 10px;
  }

  .bank-result {
    background-color: #f2ffe6;
    border: 1px solid #000000;
    padding: 10px;
    margin-bottom: 10px;
  }
  .default-result{
    background-color: #dbe738;
    border: 1px solid #68a7da;
    padding: 5px;
    margin-bottom: 5px;
  }
  .key-result{
    font-family: cursive;
    color: rgb(0, 0, 0);
    font-style: italic;
  }
  .value-result{
    font-family: cursive;
    color: rgb(0, 0, 0);
    font-style: bold;
  }
</style>
 

