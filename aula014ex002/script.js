    function gerar() {
        let numero = document.getElementById('txtn');
        let tabs = [document.getElementById('seltab'), document.getElementById('seltab2'), document.getElementById('seltab3'), document.getElementById('seltab4')];
    
        if (numero.value.length === 0) {
            window.alert('Introduza o numero');
        } else {
            let n = Number(numero.value);
    
            for (let i = 0; i < tabs.length; i++) {
                let tab = tabs[i];
                tab.innerHTML = '';
    
                for (let c = 1; c <= 10; c++) {
                    let item = document.createElement('option');
                    let resultado;
    
                    if (i === 0) {
                        resultado = n * c;
                        item.text = `${n} x ${c} = ${resultado}`;
                    } else if (i === 1) {
                        resultado = n + c;
                        item.text = `${n} + ${c} = ${resultado}`;
                    } else if (i === 2) {
                        resultado = n - c;
                        item.text = `${n} - ${c} = ${resultado}`;
                    } else if (i === 3) {
                        resultado = n / c;
                        item.text = `${n} / ${c} = ${resultado}`;
                    }
    
                    item.value = `tab${c}`;
                    tab.appendChild(item);
                }
            }
        }
    }
    
    








   /* if (numero.value.length == 0 ){
        window.alert('Introduza o numero')
    } else {
        let n = Number(numero.value)
        let c = 1
        tab.innerHTML = ''
        while (c<=10){
            let item = document.createElement('option')
            item.text = `${n} x ${c}  = ${n*c}`
            item.value = `tab${c}` //so faz sentido para php
            tab.appendChild(item)
            c++
            
        }
    }

    if (numero.value.length == 00 ){
        window.alert('Introduza o numero')
    } else {
        let n = Number(numero.value)
        let c = 1
        tab2.innerHTML = ''
        while (c<=10){
            let item = document.createElement('option')
            item.text = `${n} + ${c}  = ${n+c}`
            item.value = `tab${c}` //so faz sentido para php
            tab2.appendChild(item)
            c++
            
        }
    }
    if (numero.value.length == 00 ){
        window.alert('Introduza o numero')
    } else {
        let n = Number(numero.value)
        let c = 1
        tab3.innerHTML = ''
        while (c<=10){
            let item = document.createElement('option')
            item.text = `${n} - ${c}  = ${n-c}`
            item.value = `tab${c}` //so faz sentido para php
            tab3.appendChild(item)
            c++
            
        }
    }
    if (numero.value.length == 00 ){
        window.alert('Introduza o numero')
    } else {
        let n = Number(numero.value)
        let c = 1
        tab4.innerHTML = ''
        while (c<=10){
            let item = document.createElement('option')
            item.text = `${n} / ${c}  = ${n/c}`
            item.value = `tab${c}` //so faz sentido para php
            tab4.appendChild(item)
            c++
            
        }
    }*/


/*if (n >= 1 && n <= 10) {
    for (let c = n; c <= 10; c++) {
        var soma = c*n
       

        tab.innerHTML += `<br>${n} x ${c}  = ${soma} <br>`;
    }
} else {
    tab.innerHTML = "Número fora do intervalo de 1 a 10";
}*/