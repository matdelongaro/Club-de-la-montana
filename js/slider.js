window.addEventListener('load', function(){
    console.log('el contenido ha cargado');

    var imagenes = [];

    imagenes[0] = 'img/slider-1.jpg';
    imagenes[1] = 'img/slider-3.png';
    imagenes[2] = 'img/slider-4.jpg';
    var indiceImagenes = 0;

    function cambiarImagenes(){
        document.slider.src= imagenes[indiceImagenes];

        if(indiceImagenes <2 ){
            indiceImagenes++;
        }else{
            indiceImagenes = 0;
        }
    }

    setInterval(cambiarImagenes, 3000);

    


});