function cicloFor(){
    console.log("hola");
    for (let i=1; i <10; i++){
        i=i+2;
        console.log(`El numero es: ${i}`);
    }
}

function cicloWhile(){
    let cont = 0;
    while (cont <10){
        cont = cont +1;
        console.log(`El numero es: ${cont}`);
    }
    
}

function cicloDoWhile(){
    let x = 10;
    do{
        console.log(`El numero es: ${x}`);
        x++;
    }while(x<10)
    
}

function CalcularHora(){

    for(let horas = 0; horas<24;horas++){
        let min = 0;
        while (min < 60){
            
            let seg = 0;
            while (seg < 60){
                console.log(`${horas} : ${min} : ${seg}`);
                seg++;
            }
            min++;
        }
    }
}

function multiplicar(){
    let num = Number(prompt("ingrese un numero para ver la table"));
    console.log(num);

    if(isNaN(num)){
        console.log("El numero es incorrecto");
    }else{
        for(let y=1; y <=10; y++){
            let resp = num * y;
            console.log(`${num} x ${y} = ${resp}`)
        }
    }
}