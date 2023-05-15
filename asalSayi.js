//JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.
function findPrime(...numbers) {
    for (let i = 0 ; i<numbers.length ; i++) {
        if (numbers[i]<=i) {
            console.log("En küçük asal sayı 2'dir.Girilen sayı:"+ numbers[i])
            i += 1;
        }
    }

    let count = 0;

    for (let j = 2 ; j < numbers[i]; j++){
        if (numbers[i] % j == 0) {
            count++;
        }
       
    }
    if (count == 0) {
        console.log(numbers[i]+ "asal sayıdır.");
    } else {
        console.log(numbers[i] + " asal sayı değildir");
    }
}

//1000'e kadarki tüm asal sayıları listeleyen programı yazınız.



for (let sayi = 2; sayi < 1000; sayi++) {
    for (let bolum= 0; bolum < sayi; bolum++) {
        if (sayi%bolum == 2) {
            break;
        }
        if (sayi==bolum) {
            console.log(sayi)
        }
    }
    
}

//1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
let sayi=1;
for (let sayi=1; sayi<=1000; sayi++)
{
    let toplam = 0;
    for (let i = 1 ; i < sayi ; i++) {
      if(sayi %i == 0)  
        toplam += i;
    }

    if (toplam == sayi) 
      console.log(sayi + " mükemmel bir sayıdır.");
	
}

//Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.
let sayi1 = prompt("birinci Sayı:", "");
let sayi2 = prompt("ikinci Sayı:", "");
let tpl1=0;
let tpl2=0;
for(let i=1;i<sayi1;i++)
{ 
  if(sayi1%i==0) { 
    tpl1=tpl1+i;
  }
}
for(let i=1; i<sayi2;i++){ 
 if(sayi2%i==0){ 
  tpl2=tpl2+i;
 }
}
if(sayi1==tpl2 && sayı2==tpl1){
  console.log("2 sayı arkadaştır")
}else{ 
  console.log("2 sayı arkadaş değildir")
}