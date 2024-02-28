<script>
	import { onMount } from 'svelte';
	let letters = "QWERTYUIOPASDFGHJKLZXCVBNM";
    
    let letterList = [];
    let username = "";
	


	let top = 50;
	let left = 50;
	// xup = 38
	// down = 40
	// right = 39
	// left = 37
	let axelX = 1; 
    let axelY = 0;

	function addLetter(){
		for (let i = 0; i < 25; i++) {
			let letter = {
				left: Math.floor(Math.random() * 14) * 100,
				top: Math.floor(Math.random() * 10) * 50    ,
				character: letters[Math.floor(Math.random() * letters.length)]
			};
			letterList.push(letter);
		}
		letterList = letterList;
	}


	function onKeyDown(e) {
        switch (e.key) {
            case 'w':
				axelY = -1;
                axelX = 0;
                break;
            case 's':
				axelY = 1;
                daxelX = 0;
                break;
            case 'a':
				axelX = -1;
                axelY = 0;
                break;
            case 'd':
				axelX = 1;
                axelY = 0;
                break;
        }
    }

    function snake() {
        left += axelX * 50;
        top += axelY * 50;
		if (left <0)
		left=0;
		if (left>650)
		left=650;
		if(top<0)
		top=0;
		if(top>450)
		top=450;

		for (let i = 0; i < letterList.length; i++) {
            const letter = letterList[i];
            if (left === letter.left && top === letter.top) {
                
                letter.left = Math.floor(Math.random() * 14) * 100; 
                letter.top = Math.floor(Math.random() * 10) * 50; 
            
                username += letter.character;
            }
        }
		letterList = letterList;
    }
	onMount(() => {
		addLetter();
	});
	setInterval(snake, 500);
	console.log(letterList)
</script>
<style>
	
	main {
		width: 1500px;
		height: 500px;
		border: solid rgb(0, 0, 0) 1px;
		margin: 70px auto;
		position: relative
	}
	div {
		width: 50px;
		height: 50px;
		background-color: rgb(0, 0, 0);
		position: absolute;
		
	}

</style>


<main>

		<h1 style="position: absolute; top:500px;">Text:{username}</h1>
	<div style="left: {left}px; top: {top}px">
		
	</div>
	{#each letterList as {top,left,character},i}
		
		<div style="left: {left}px; top: {top}px; background-color:blue ;">{character}
		</div>
	{/each}
</main>



<svelte:window on:keydown|preventDefault={onKeyDown} />

