var karte = ['card-c-02', 'card-c-03', 'card-c-04', 'card-c-05', 'card-c-06', 'card-c-07', 'card-c-08', 'card-c-09', 'card-c-10', 'card-c-11', 'card-c-12', 'card-c-14', 'card-c-98', 'card-c-99',
             'card-t-02', 'card-t-03', 'card-t-04', 'card-t-05', 'card-t-06', 'card-t-07', 'card-t-08', 'card-t-09', 'card-t-10', 'card-t-11', 'card-t-12', 'card-t-14', 'card-t-98', 'card-t-99',
             'card-h-02', 'card-h-03', 'card-h-04', 'card-h-05', 'card-h-06', 'card-h-07', 'card-h-08', 'card-h-09', 'card-h-10', 'card-h-11', 'card-h-12', 'card-h-14', 'card-h-98',
             'card-p-02', 'card-p-03', 'card-p-04', 'card-p-05', 'card-p-06', 'card-p-07', 'card-p-08', 'card-p-09', 'card-p-10', 'card-p-11', 'card-p-12', 'card-p-14', 'card-p-98'];

var na_potezu = 1;
var podeljeno = 0;

var igrac_1 = {
     ruka : [],
     talon: [],
     poeni : 0,
     izbaci_kartu: function(){
         this.ruka = this.ruka.splice(1, this.ruka.length);
     },
     ime : 'Prvi igrac' //dodati
};

var igrac_2 = {
     ruka : [],
     talon: [],
     poeni : 0,
     izbaci_kartu: function(){
         this.ruka = this.ruka.splice(1, this.ruka.length);
     },
     ime : 'Drugi igrac' //dodati
};


document.getElementById('igrac_levo').innerHTML = igrac_1.ime; //dodati
document.getElementById('igrac_desno').innerHTML = igrac_2.ime; //dodati

function izbaciNaTalon(pozicija){
    
  var element = document.getElementById(pozicija);
  
  if(na_potezu === 1){
      
      element.className = '';
      element.className = 'card talon desno ' + igrac_1.ruka[0];
      
      odaberiKartuPrvogIgraca();
      igrac_1.izbaci_kartu(); //dodati
      na_potezu = 2;    //dodati
      
  }else{
      element.className = '';
      element.className = 'card talon levo ' + igrac_2.ruka[0];
      var poz = odaberiKartuDrugogIgraca();
      
      igrac_2.izbaci_kartu();//dodati
      na_potezu = 1;//dodati
      proveri(igrac_1.talon[poz] , igrac_2.talon[poz], poz); //dodati
  }
  
}

function proveri(talon_levo, talon_desno, index){

    if (talon_levo > talon_desno) {

        var talon_levo = document.getElementsByClassName('card talon levo');
        var talon_desno = document.getElementsByClassName('card talon desno');
        setTimeout(function () {

            for (var i = 0; i <= index; i++) {
                igrac_1.poeni += 10; //dodati
                talon_desno[i].className = 'card talon desno ';
                talon_levo[i].className = 'card talon levo';
            }

            document.getElementById('poeni_levo').innerHTML = igrac_1.poeni;//dodati
            igrac_1.talon = [];//dodati
            igrac_2.talon = [];//dodati
        }, 1000);
    } else  if (talon_levo < talon_desno) {
        var talon_levo = document.getElementsByClassName('card talon levo');
        var talon_desno = document.getElementsByClassName('card talon desno');
        setTimeout(function () {
            for (var i = 0; i <= index; i++) {
                igrac_2.poeni += 10;//dodati
                talon_desno[i].className = 'card talon desno ';
                talon_levo[i].className = 'card talon levo';
            }
            document.getElementById('poeni_desno').innerHTML = igrac_2.poeni;//dodati
            igrac_1.talon = [];//dodati
            igrac_2.talon = [];//dodati
        }, 1000);

    } else if (talon_levo === talon_desno) {//dodati
        return;//dodati
    }
    setTimeout(function () {
        if (igrac_2.ruka.length === 0) {                 //dodati
            if (igrac_1.poeni > igrac_2.poeni) {         //dodati
                alert('Kraj igre!!! pobedio je ' + igrac_1.ime);   //dodati
            } else if (igrac_1.poeni < igrac_2.poeni) {  //dodati
                alert('Kraj igre!!! pobedio je drugi' + igrac_2.ime);  //dodati
            } else {                                     //dodati
                alert('Kraj igre!!! nereseno');          //dodati    
            }

        }
    }, 1200);
}

function izbaciKartu(element, karta, igrac){
    
	 if(igrac != na_potezu){
        alert('Nisi na potezu!!');
        return;
       
    }
    if(podeljeno < 2){//dodati
        alert('Nisu svima podeljene karte');//dodati
        return;//dodati
    }
    
    animacija(element, na_potezu);

    setTimeout(function(){
            if (document.getElementById(karta).style.display !== 'none') {//dodati
                document.getElementById(karta).style.display = 'none';//dodati
            }
            if (na_potezu === 1) {//dodati
                izbaciNaTalonPrvogIgraca();//dodati
            } else {//dodati
                izbaciNaTalonDrugogIgraca();//dodati
            }
    },900);
   
   
}

function reset(){
    
    var talon_desno = document.getElementsByClassName('talon desno');//dodati
    for(var i =0; i < talon_desno.length; i++){//dodati
        talon_desno[i].className = 'card talon desno ';//dodati
    }
    var talon_levo = document.getElementsByClassName('talon levo');//dodati
    for(var i = 0; i < talon_levo.length; i++){//dodati
        talon_levo[i].className = 'card talon levo';//dodati
    }//dodati
}

