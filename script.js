function getPilihanBot(){
    const bot = Math.random();
    if(bot < 0.34) return 'kertas';
    if(bot >= 0.34 && bot < 0.67) return 'batu';
    return 'gunting';
}
function getHasil(bot, player){
    if(player == bot) return 'SERI!';
    if(player == 'kertas') return (bot == 'batu') ? 'MENANG!' : 'KALAH!';
    if(player == 'batu') return (bot == 'kertas') ? 'KALAH!' : 'MENANG!';
    if(player == 'gunting') return (bot == 'kertas') ? 'MENANG!' : 'KALAH';
}

function loadingGambar(){
    const imgBot = document.querySelector('.imgBot');
    const gambar = ['kertas', 'batu', 'gunting'];
    let i = 0;
    const waktuAwal = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - waktuAwal > 1000){
            clearInterval;
            return;
        }
        imgBot.setAttribute('src' , 'img/' + gambar[i++] + '.png');
        if( i == gambar.length ) i = 0;
    }, 100)
}

let skorPlayer = 1;
const imgPlayer = document.querySelectorAll('li img');
imgPlayer.forEach(function(pler){
    pler.addEventListener('click' , function(){
        const tampilanSkor = document.querySelector('.Skor')
        const bot = getPilihanBot();
        const player = pler.className;
        const hasil = getHasil(bot, player);
        loadingGambar();
        setTimeout(function(){
            const imgBot = document.querySelector('.imgBot');
            imgBot.setAttribute('src' , 'img/' + bot + '.png');
            const info = document.querySelector('.info');
            info.innerHTML = hasil;
            if( hasil == 'MENANG!'){
                tampilanSkor.innerHTML = 'Player = ' + skorPlayer++;
            }

        },1000)
    });
})