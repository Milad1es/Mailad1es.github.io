<svelte:head>
</svelte:head>
<div class="back"></div>
<header>
    <nav>
        <ul>
            <li><a href="/MOMO">Home</a></li>
            <li><a href="/MOMO/momo">Classic car</a></li>
            <li><a href="/MOMO/modern car">Modern Car</a></li>
            <li><a href="/MOMO/el car">Elektrisk Car</a></li>
            <li><a href="/MOMO/spel">Spel</a></li>
            <li>Contact</li>
        </ul>
    </nav>
</header>


<section>
    <div class="container">
        <div class="div1"></div>
        <div class="div2"> <h3>Tesla Model S Plaid er en banebrytende elbil som kombinerer ytelse, teknologi og luksus. Med en toppfart på 322 km/t og akselerasjon fra 0 til 100 km/t på under 2 sekunder, er den en av de raskeste produksjonsbilene i verden. Modellen drives av tre motorer som samlet leverer over 1000 hestekrefter. Rekkevidden er imponerende med opptil 637 km på en enkelt lading, avhengig av kjøreforholdene.

            Interiøret er futuristisk med en 17-tommers sentral touchskjerm, et nytt yoke-ratt og et avansert infotainmentsystem. Tesla Model S Plaid er også utstyrt med den nyeste autopilot-teknologien som gir semi-autonom kjøring og avanserte sikkerhetsfunksjoner.
            
            Designet er strømlinjeformet og elegant, med fokus på aerodynamikk for å maksimere effektiviteten. Med sin kombinasjon av rå kraft, innovativ teknologi og luksuriøse bekvemmeligheter, setter Tesla Model S Plaid en ny standard i elbilmarkedet.
            
            </h3>
            
        </div>
        
    </div>
</section>
<hr>
<section>
    <div class="container">
        <div class="div3"> <h3>Volkswagen ID.4 GTX er en kraftig og sporty versjon av VW's populære elektriske SUV. Den er utstyrt med to elektriske motorer, en på hver aksel, som sammen gir firehjulsdrift og en samlet effekt på 299 hestekrefter. Dette gjør at ID.4 GTX kan akselerere fra 0 til 100 km/t på bare 6,2 sekunder.

            Rekkevidden er på opptil 480 km, avhengig av kjøreforholdene, takket være et 77 kWh batteri. Interiøret er romslig og moderne, med en 12-tommers berøringsskjerm, digitalt instrumentpanel og høy kvalitets materialer.
            
            ID.4 GTX kombinerer sporty ytelse med praktiske egenskaper, og er et ideelt valg for de som ønsker en miljøvennlig bil uten å gå på kompromiss med kjøreglede.

            
            
            </h3></div>
        
        <div class="div4">
    </div>
</section>
<hr>
<section>
    <div class="container">
        <div class="div5"></div>
        
        <div class="div6"><h3>Audi Q4 e-tron er en kompakt elektrisk SUV som kombinerer luksus, avansert teknologi og praktisk design. Med en rekkevidde på opptil 520 km, avhengig av kjøreforholdene, tilbyr Q4 e-tron langdistansedyktighet. Den drives av enten én eller to elektriske motorer, avhengig av modellen, med muligheter for firehjulsdrift i quattro-versjonen.

            Interiøret er romslig og stilfullt, med en 10,1-tommers berøringsskjerm, digitalt instrumentpanel og høykvalitets materialer. Q4 e-tron har også avanserte førerassistentsystemer som bidrar til en trygg og komfortabel kjøreopplevelse. Med sitt elegante design og innovative teknologi, representerer Audi Q4 e-tron en fremtidsrettet tilnærming til elektrisk mobilitet.</h3>
    </div>
</section>
<hr>

<style>
   

    
    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
    li {
        display: inline-block;
        margin: 0 0 100px 20px;
        color: red;
    }
    li:hover {
        background-color: lightgreen;
        text-decoration: underline;
    }
    .back {
        background-image: url("https://img.freepik.com/premium-photo/abstract-background-metal-background-with-light-effect_834769-804.jpg");
        height: 100vh;
        width: 100vw;
        position: fixed;
        z-index: -1;
        top: 0;
        left: 0;
    }

    .container {
        display: flex;
        flex-direction: row;

        margin: 20px;
    }

    section div div {
        width: 3000px;
        height: 300px;
        background-color: rgb(161, 161, 161);
        margin: 1px;
        border: 10px solid white ;
    }

    .div1{
        background-image: url("https://iauto.lv/_mm/i/20170216/24350_059a47ec733.jpg");
        margin-top: 20px;
    }
    
    .div2{
    background-color: aliceblue;
    }

    .div3{
        background-color: aliceblue;
    }
    .div4{
     background-image: url("https://static.moniteurautomobile.be/imgcontrol/images_tmp/clients/moniteur/c520-d355/content/medias/images/cars/volkswagen/id-4/volkswagen--id-4--2021/volkswagen--id-4--2021-m-1.jpg")
    }
    .div5{
background-image: url("https://www.bilgruppen.dk/wp-content/uploads/2022/01/Audi_Q4_Etron_3.png")
    }
    .div6{
        background-color: aliceblue;
    }

    
    
</style>
