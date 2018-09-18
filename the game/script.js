var antwoord = prompt('hoe heet een zes hoek? hexagon, pentagon, vierkant, rondje');

if(antwoord == 'hexagon'){
    antwoord = prompt('welke kleur is de zon? orange, rood, wit, geel');
    document.write('Vraag 1: Goed!');
    if(antwoord == 'orange'){
        antwoord = prompt('welke kleur zijn bladeren');
        document.write('<br>' + 'Vraag 2: Goed!');
        if(antwoord == 'groen'){

        }else{
            document.write('GAME OVER!');
        }
    }else{
        document.write('GAME OVER!');
    }
}else{
    document.write('GAME OVER');

}