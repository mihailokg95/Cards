$('.ruka.levo').hide();
$('.ruka.desno').hide();
$('#spil_levo').show();
$('#spil_desno').show();
var zindex = 5;

function izmesajKarte(){
    
    var izmesano = karte.sort( function() { return 0.5 - Math.random(); } );
    igrac_1.ruka = izmesano.slice(0, 5);
    //igrac_1.ruka = ['card-c-11', 'card-c-12', 'card-c-14', 'card-c-98', 'card-c-99']
    igrac_2.ruka = izmesano.slice(5, 10);
    reset();
}

function novaIgra(){
    $('body').addClass('animated bounceOut');
    setTimeout(function(){ 
        $('body').removeClass('animated bounceOut');
        $('body').addClass('animated bounceIn');location.reload();
    }, 2500);
}


function srediZindex(element){
    document.getElementById(element).style.zIndex = zindex; 
    zindex++;
}


function podeliKarte(podeli){
    izmesajKarte();
    $(podeli).show();
     if(podeljeno === 0){
         $('#spil_levo').hide();
     }
     if(podeljeno === 1){
         $('#spil_desno').hide();
     }
    if(podeljeno < 2){
        $(podeli).addClass('animated zoomInDown');
          podeljeno++;
          setTimeout(function(){ $(podeli).removeClass('animated zoomInDown');}, 500);
    }  
}

function animacija(element, na_potezu) {
    
    if (na_potezu === 1) {
        $(element).addClass('animated fadeOutRight');
    } else {
        $(element).addClass('animated fadeOutLeft');
    }
}

function izbaciNaTalonPrvogIgraca(){
     
    if (document.getElementById('igrac_1_prva_karta').className.length === 17) {
        izbaciNaTalon('igrac_1_prva_karta');
    } else {
        if (document.getElementById('igrac_1_druga_karta').className.length === 17) {
            izbaciNaTalon('igrac_1_druga_karta');
        } else {
            if (document.getElementById('igrac_1_treca_karta').className.length === 17) {
                izbaciNaTalon('igrac_1_treca_karta');
                srediZindex('igrac_1_treca_karta');
            }else
            if (document.getElementById('igrac_1_cetvrta_karta').className.length === 17) {
                izbaciNaTalon('igrac_1_cetvrta_karta');
                srediZindex('igrac_1_cetvrta_karta');
            }else
            if (document.getElementById('igrac_1_peta_karta').className.length === 17) {
                izbaciNaTalon('igrac_1_peta_karta');
                srediZindex('igrac_1_peta_karta');
            } else {
                na_potezu = 2;
            }
        }
    }
    
    
}

function izbaciNaTalonDrugogIgraca(){
    
    if (document.getElementById('igrac_2_prva_karta').className.length === 15) {
        izbaciNaTalon('igrac_2_prva_karta');
       
    } else {
        if (document.getElementById('igrac_2_druga_karta').className.length === 15) {
            izbaciNaTalon('igrac_2_druga_karta');
        } else {
            if (document.getElementById('igrac_2_treca_karta').className.length === 15) {
                izbaciNaTalon('igrac_2_treca_karta');
                srediZindex('igrac_2_treca_karta');
            }else
            if (document.getElementById('igrac_2_cetvrta_karta').className.length === 15) {
                izbaciNaTalon('igrac_2_cetvrta_karta');
                srediZindex('igrac_2_cetvrta_karta');
            }else
            if (document.getElementById('igrac_2_peta_karta').className.length === 15) {
                izbaciNaTalon('igrac_2_peta_karta');
                srediZindex('igrac_2_peta_karta');
            } else {
                alert('Kraj!!!!');
            }
        }
    }
}

function odaberiKartuPrvogIgraca(){
      var vrednost_karte = igrac_1.ruka[0].substr(igrac_1.ruka[0].length - 2);
      var pozicija_na_talonu = igrac_1.talon.length;
      igrac_1.talon[pozicija_na_talonu] = parseInt(vrednost_karte);
}

function odaberiKartuDrugogIgraca() {
    var vrednost_karte = igrac_2.ruka[0].substr(igrac_2.ruka[0].length - 2);
    var pozicija_na_talonu = igrac_2.talon.length;
    igrac_2.talon[pozicija_na_talonu] = parseInt(vrednost_karte);

    return pozicija_na_talonu;
}