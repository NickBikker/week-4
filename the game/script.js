alert('Je krijgt een aantal vragen. aan het eind van de quiz kan je je punten zien en hoeveel vragen je goed heb');

var antwoord = prompt('hoe heet een zes hoek? hexagon, pentagon, vierkant, rondje');

if(antwoord == 'hexagon'){
    antwoord = prompt('welke kleur heeft de zon? orange, rood, wit, geel');
    document.write('Vraag 1: Goed!');
    if(antwoord == 'orange'){
        antwoord = prompt('welke kleur zijn bladeren');
        document.write('<br>' + 'Vraag 2: Goed!');
        if(antwoord == 'groen'){
            antwoord = prompt('welke kleur heeft een stam');
            document.write('<br>' + 'Vraag 3: Goed!');
            if(antwoord == 'bruin'){
                antwoord = prompt('welke kleur heeft een witte duif');
                document.write('<br>' + 'Vraag 4: Goed!');
                if(antwoord == 'wit'){
                    antwoord = prompt('welke kleur heeft een rode beker');
                    document.write('<br>' + 'Vraag 5: Goed!');
                    if(antwoord == 'rood'){
                        antwoord = prompt('welke kleur heeft een groene appel');
                        document.write('<br>' + 'Vraag 6: Goed!');
                        if(antwoord == 'groen'){
                            antwoord = prompt('welke kleur heeft een blauwe druif');
                            document.write('<br>' + 'Vraag 7: Goed!');
                            if(antwoord == 'blauw'){
                                antwoord = prompt('welke kleur heeft een zwarte laptop');
                                document.write('<br>' + 'Vraag 8: Goed!');
                                if(antwoord == 'zwart'){
                                    antwoord = prompt('welke kleur heeft een witte muur');
                                    document.write('<br>' + 'Vraag 9: Goed!');
                                    if(antwoord == 'wit'){
                                        document.write('<br>' + 'Vraag 10: Goed!' + '<br>' + 'Gewonnen!');
                                    }else{
                                        document.write('<br>' + 'GAME OVER' + '<br>' + '<br>' + 'Punten:90')
                                    }
                                }else{
                                    document.write('<br>' + 'GAME OVER' + '<br>' + '<br>' + 'Punten:80');
                                }
                            }else{
                                document.write('<br>'+ 'GAME OVER' + '<br>' + '<br>' + 'Punten:70');
                            }
                        }else{
                            document.write('<br>' + 'GAME OVER' + '<br>' + '<br>' + 'Punten:60');
                        }
                    }else{
                        document.write('<br>' + 'GAME OVER' + '<br>' + '<br>' + 'Punten:50');
                    }
                }else{
                    document.write('<br>' + 'GAME OVER' + '<br>' + '<br>' + 'Punten:40');
                }
            }else{
                document.write('<br>' + 'GAME OVER' + '<br>' + '<br>' + 'Punten:30');
            }
        }else{
            document.write('<br>' + 'GAME OVER' + '<br>' + '<br>' + 'Punten:20');
        }
    }else{
        document.write('<br>' + 'GAME OVER' + '<br>' + '<br>' + 'Punten:10!');
    }
}else{
    document.write('<br>' + 'GAME OVER' + '<br>' + '<br>' + 'Punten:0');

}