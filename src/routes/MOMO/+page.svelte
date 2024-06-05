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
            <li><a href="/MOMO/Contact">Contact</a></li>
        </ul>
    </nav>
</header>


<section>
    <div class="container">
        <div class="divclassic"></div>
        <div class="divmodern"></div>
        <div class="divel"></div>
    </div>
</section>

<section>
    <div class="container">
        <div class="spel"></div>
        <div class="syah"></div>
       
    </div> 
</section>
<section>
    <div class="container">
        <div class="slut">
            <h2>ADRESS</h2>
            <p>
                Kungsgatan 68<br>
                753 18 Umeå<br>
                018-10 24 40<br>
                bilo@umeabilgalleri.se
            </p>
            <h2>ÖPPETTIDER</h2>
            <p>
                Mån–fre 9-18<br>
                Lör-sön 10-15<br>
                Verkstad & reservdelar<br>
                Mån-fre 7-17
            </p>
            <h3>Källor:</h3>
            <p>
                ChatGPT<br>
                <a href="https://www.carla.se/magasinet/kopguide/basta-elbilen-2024" target="_blank">https://www.carla.se/magasinet/kopguide/basta-elbilen-2024</a>
            </p>

        </div>
   
    </div> 
</section>
<style>
   
    header {
        padding: 20px;
        height: 450px;
        background-color: black;
        background-image: url("src/routes/MOMO/webteknik bil (1).jpg");
    }
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
        background-image: url("https://t4.ftcdn.net/jpg/05/71/83/47/360_F_571834789_ujYbUnH190iUokdDhZq7GXeTBRgqYVwa.jpg");
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
        margin: 20px;
        border: 10px solid white ;
    }

    .divclassic{
        background-image: url("https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
    }
    
    .divmodern{
        background-image: url("https://img.freepik.com/premium-photo/close-up-red-sports-car-with-lights-generative-ai_958078-66769.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1715040000&semt=ais");
    }

    .divel{
        background-image: url("https://us.123rf.com/450wm/auxins/auxins2302/auxins230200175/198011147-ev-charging-station-for-electric-car-in-concept-green-energy-created-with-generative-ai-technology.jpg?ver=6");
    }

    .spel{
        background-image: url(https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/44/ed/t-tp-1675261624-car-memory-game_ver_2.jpg)

    }
    .syah{
        background-color: black;
    }
    .slut {
        background-color: rgba(36, 134, 219, 0.686);
        padding: 20px;
        border-radius: 10px;
        color: white;
        text-align: center;
        margin-top: 20px;
    }

    .slut h2, .slut h1, .slut h3 {
        margin: 10px 0;
    }

    .slut p {
        margin: 5px 0;
    }

</style>
