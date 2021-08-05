const tally = []

function tallyResults(){
    if(document.getElementById('que1cho1').checked){
        tally.push(1)
    }
    else if(document.getElementById('que1cho2').checked){
        tally.push(2)
    }
    else if(document.getElementById('que1cho3').checked){
        tally.push(3)
    }
    else if(document.getElementById('que1cho4').checked){
        tally.push(4)
    }
    
    if(document.getElementById('que2cho1').checked){
        tally.push(1)
    }
    else if(document.getElementById('que2cho2').checked){
        tally.push(2)
    }
    else if(document.getElementById('que2cho3').checked){
        tally.push(3)
    }
    else if(document.getElementById('que2cho4').checked){
        tally.push(4)
    }
    
    if(document.getElementById('que3cho1').checked){
        tally.push(1)
    }
    else if(document.getElementById('que3cho2').checked){
        tally.push(2)
    }
    else if(document.getElementById('que3cho3').checked){
        tally.push(3)
    }
    else if(document.getElementById('que3cho4').checked){
        tally.push(4)
    }
    
    if(document.getElementById('que4cho1').checked){
        tally.push(1)
    }
    else if(document.getElementById('que4cho2').checked){
        tally.push(2)
    }
    else if(document.getElementById('que4cho3').checked){
        tally.push(3)
    }
    else if(document.getElementById('que4cho4').checked){
        tally.push(4)
    }
    
    if(document.getElementById('que5cho1').checked){
        tally.push(1)
    }
    else if(document.getElementById('que5cho2').checked){
        tally.push(2)
    }
    else if(document.getElementById('que5cho3').checked){
        tally.push(3)
    }
    else if(document.getElementById('que5cho4').checked){
        tally.push(4)
    }
    
    if(document.getElementById('que6cho1').checked){
        tally.push(1)
    }
    else if(document.getElementById('que6cho2').checked){
        tally.push(2)
    }
    else if(document.getElementById('que6cho3').checked){
        tally.push(3)
    }
    else if(document.getElementById('que6cho4').checked){
        tally.push(4)
    }
    
    if(document.getElementById('que7cho1').checked){
        tally.push(1)
    }
    else if(document.getElementById('que7cho2').checked){
        tally.push(2)
    }
    else if(document.getElementById('que7cho3').checked){
        tally.push(3)
    }
    else if(document.getElementById('que7cho4').checked){
        tally.push(4)
    }
    
    if(document.getElementById('que8cho1').checked){
        tally.push(1)
    }
    else if(document.getElementById('que8cho2').checked){
        tally.push(2)
    }
    else if(document.getElementById('que8cho3').checked){
        tally.push(3)
    }
    else if(document.getElementById('que8cho4').checked){
        tally.push(4)
    }
    
    if(document.getElementById('que9cho1').checked){
        tally.push(1)
    }
    else if(document.getElementById('que9cho2').checked){
        tally.push(2)
    }
    else if(document.getElementById('que9cho3').checked){
        tally.push(3)
    }
    else if(document.getElementById('que9cho4').checked){
        tally.push(4)
    }
    
    if(document.getElementById('que10cho1').checked){
        tally.push(1)
    }
    else if(document.getElementById('que10cho2').checked){
        tally.push(2)
    }
    else if(document.getElementById('que10cho3').checked){
        tally.push(3)
    }
    else if(document.getElementById('que10cho4').checked){
        tally.push(4)
    }
    
    if(document.getElementById('que11cho1').checked){
        tally.push(1)
    }
    else if(document.getElementById('que11cho2').checked){
        tally.push(2)
    }
    else if(document.getElementById('que11cho3').checked){
        tally.push(3)
    }
    else if(document.getElementById('que11cho4').checked){
        tally.push(4)
    }
    
    if(document.getElementById('que12cho1').checked){
        tally.push(1)
    }
    else if(document.getElementById('que12cho2').checked){
        tally.push(2)
    }
    else if(document.getElementById('que12cho3').checked){
        tally.push(3)
    }
    else if(document.getElementById('que12cho4').checked){
        tally.push(4)
    }
    
    if(document.getElementById('que13cho1').checked){
        tally.push(1)
    }
    else if(document.getElementById('que13cho2').checked){
        tally.push(2)
    }
    else if(document.getElementById('que13cho3').checked){
        tally.push(3)
    }
    else if(document.getElementById('que13cho4').checked){
        tally.push(4)
    }
    
    if(document.getElementById('que14cho1').checked){
        tally.push(1)
    }
    else if(document.getElementById('que14cho2').checked){
        tally.push(2)
    }
    else if(document.getElementById('que14cho3').checked){
        tally.push(3)
    }
    else if(document.getElementById('que14cho4').checked){
        tally.push(4)
    }
    
    if(document.getElementById('que15cho1').checked){
        tally.push(1)
    }
    else if(document.getElementById('que15cho2').checked){
        tally.push(2)
    }
    else if(document.getElementById('que15cho3').checked){
        tally.push(3)
    }
    else if(document.getElementById('que15cho4').checked){
        tally.push(4)
    }

    let gry = 0
    let huf = 0
    let rav = 0
    let sly = 0

    for(i = 0; i < tally.length; i++){
        if (tally[i] === 1){
            gry = gry + 1
        }
        else if (tally[i] === 2){
            huf = huf + 1
        }
        else if (tally[i] === 3){
            rav = rav + 1
        }
        else if (tally[i] === 4){
            sly = sly + 1
        }
    }

    
} 

document.getElementById('results').addEventListener('click', tallyResults)