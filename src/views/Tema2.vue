<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Muestreo  
    .row.align-items-center.bg3
      .col-lg-1
      .col-lg-7
        p En investigación de mercados un muestreo es el conjunto de procedimientos estadísticos que se utilizan para definir la cantidad de encuestas a realizar y la forma cómo se seleccionarán las personas dentro del estudio y, si bien no es responsabilidad de los encuestadores definir esta cifra y este procedimiento, sí es importante que conozcan sobre el tema, dado que en el trabajo de campo se debe garantizar que se apliquen de manera correcta. Es por ello que previamente se deben tener claros los siguientes conceptos:
      .col-lg-4(data-aos="fade-up")
        img(src='@/assets/curso/tema2/1.svg', alt='Texto que describa la imagen')

    .row.mt-4.bg1.justify-content-center
      .col-lg-10(data-aos="fade-up")
        img(src='@/assets/curso/tema2/2.svg', alt='Texto que describa la imagen')
    .row.mt-4.align-items-center
      .col-lg-8.px-0
        .row.p-5.colort1
          p Ahora bien, para el cálculo del tamaño de la muestra se tienen definidas unas fórmulas estadísticas, no obstante, para poder tener claro cuál es la fórmula que se debe aplicar, se debe conocer si la población con la que se trabajará es finita o infinita. 
          p Se hace relación a una población finita cuando se tiene el dato de cuántos elementos muestrales conforman la población y dicho dato es menor o igual a 100.000 elementos, por otro lado, se tiene una población infinita cuando se desconoce el total de elementos, aunque se tiene claridad que es lo suficientemente grande como para superar los 100.000 elementos. 
      .col-lg-4.px-0
        img(src='@/assets/curso/tema2/3.png', alt='Texto que describa la imagen')
    p.mt-4 Las fórmulas para el cálculo de la muestra son:
    .row.mt-4.align-items-center
      .col-lg-6
        img.ind1(src='@/assets/curso/tema2/4.svg', alt='Texto que describa la imagen')
      .col-lg-6
        .row.p-4.colort14
          .col-lg-12
            p.t1 En la fórmula, esta es la asociación técnica para cada variable:
            ul.lista-ul--color.t1
              li.mb-0 
                i.fas.fa-check
                | Z= parámetro estadístico que depende del nivel de confianza (NC) definido, es un valor que se extrae de una tabla conocida como Tabla Z (distribución normal).
              li.mb-0 
                i.fas.fa-check
                | p= probabilidad de que ocurra el fenómeno en estudio, es decir, que haya éxito. Generalmente, se utiliza una p= 0.50
              li.mb-0 
                i.fas.fa-check
                | q= probabilidad de que no ocurra el fenómeno en estudio, es decir, que se dé fracaso, en términos matemáticos, q = (1- p). De acuerdo con la generalidad la probabilidad de que un fenómeno ocurra es la misma a que el fenómeno no ocurra, por tanto, q= 0.5.
              li.mb-0 
                i.fas.fa-check
                | e= error máximo esperado de la estimación.
              li.mb-0 
                i.fas.fa-check
                | N= tamaño de la población.
              li.mb-0 
                i.fas.fa-check
                | N= tamaño de la muestra.

    .tarjeta.color-primario.p-3.mb-5.mt-4(data-aos="fade-up")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema2/5.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Tabla Z
              p.text-small Para comprender mucho mejor la manera cómo se calcula el nivel de confianza (Z), se sugiere revisar la Tabla Z, la cual será referente cada vez que se desee aplicar la fórmula para un muestreo.

            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/anexo1.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    p En la siguiente tabla se evidencian cuáles serían los valores más utilizados para trabajar en las fórmulas el nivel de confianza (NC) y los márgenes de error:
    .titulo-sexto.color-acento-contenido
      h5 Tabla 1.
      span Valores más utilizados en NC y error (con base en la Tabla Z) 
    .tabla-a.color-acento-contenido.mb-5(data-aos="fade-up") 
      table
        thead
          tr
            th Variable
            th Valor a usar en la fórmula

        tbody
          tr
            td.text-center Nivel de confianza del 90 %
            td.text-center 1.65

          tr
            td.text-center Nivel de confianza del 95 %
            td.text-center 1.96

          tr
            td.text-center Nivel de confianza del 97 %
            td.text-center 2.17
          tr
            td.text-center Nivel de confianza del 98 %
            td.text-center 2.33
          tr
            td.text-center Nivel de confianza del 99 %
            td.text-center 2.58
          tr
            td.text-center Margen de error del 5%
            td.text-center 0.05      
          tr
            td.text-center Margen de error del 7.5%
            td.text-center 0.075  
          tr
            td.text-center Margen de error del 9%
            td.text-center 0.09      



    p Con dos ejemplos, uno para población finita y otra para población infinita se calculará el tamaño de la muestra. 
    .row.mt-4.align-items-center
      .col-lg-5.px-0
        img(src="@/assets/curso/tema2/6.svg")

      .col-lg-7.px-0
        .tarjeta.tarjeta--azul.p-4.mb-5
          SlyderA
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-0
                h5.mb-0 Caso:
                p La empresa XYZ S.A.S. desea conocer el nivel de satisfacción de sus clientes y cuenta con una base de datos activa de 9.000 clientes, se espera un nivel de confianza del 95 % y un margen de error del 5 %. Con base en esta información, se requiere saber para ese tamaño de la población cuál sería el tamaño de la muestra.
              .col-md-5
                img(src="@/assets/curso/tema2/7.svg")
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-0
                p Para este caso, lo primero es definir las variables:
                .row
                  .col-lg-6
                    h5.text-center Variable
                    p.text-center Tamaño de la población (N)
                    p.text-center Nivel de confianza para un 95 %
                    p.text-center Margen de error
                    p.text-center Probabilidad de que el fenómeno ocurra (p)
                    p.text-center Probabilidad de que el fenómeno no ocurra (q)
                  .col-lg-6
                    h5.text-center  Valor en la fórmula
                    p.text-center 9.000
                    p.text-center 1,96
                    p.text-center (Valor extraído de la tabla Z)
                    p.text-center 0.05
                    p.text-center 0.5
                    p.text-center q = 1- 0.5= 0.5
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-0
                p Una vez definidas las variables se aplicará la fórmula asociada, para este caso se mencionó que la empresa cuenta con 9.000 clientes, por tanto, debe utilizarse la fórmula que aplica para la población finita.
              .col-md-5
                img(src="@/assets/curso/tema2/f1.svg")
              .col-md-10.mt-2
                img(src="@/assets/curso/tema2/f2.svg")
                h2.mt-2.text-center.mb-0 n = 368
                p Según lo anterior, con un total de clientes de 9.000, un nivel de confianza del 95 % y un margen de error del 5 %, la empresa debe realizar 368 encuestas.
    .row.mt-4
      .col-lg-7.px-0
        .tarjeta.tarjeta--rojo.p-4.mb-5
          SlyderA
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-0
                h5.mb-0 Caso:
                p En otro caso, Supermercados JJ tiene puntos de venta en todo el país, por lo que cuenta con 6.000.000 de compradores activos, en este caso la empresa requiere un estudio para evaluar la marca, y se precisa tener un nivel de confianza del 95 % y un margen de error del 3 %. 
              .col-md-4
                img(src="@/assets/curso/tema2/9.svg")
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-0
                p Lo primero que debe realizarse es definir las variables, para con base en ello determinar cuál es la fórmula a utilizar.
                .row
                  .col-lg-6
                    h5.text-center Variable
                    p.text-center  Tipo de población

                    p.text-center Nivel de confianza para un 95 %

                    p.text-center Margen de error

                    p.text-center Probabilidad de que el fenómeno ocurra (p)

                    p.text-center Probabilidad de que el fenómeno no ocurra (q)
                  .col-lg-6
                    h5.text-center   Valor en la fórmula

                    p.text-center  Infinita  

                    p.text-center 1,96
                    p.text-center.mb-1 (Supera los 100.000 elementos)

                    p.text-center.mb-1 1,96

                    p.text-center.mb-1 (Valor extraído de la tabla Z)

                    p.text-center.mb-1 0.03 (3 %)
                    p.text-center.mb-1 0.5
                    p.text-center.mb-1 q = 1- 0.5= 0.5
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-0
                p Ahora que se tiene claridad de las variables y de que se debe utilizar la fórmula para poblaciones infinitas, procede a aplicarse:

              .col-md-5
                img(src="@/assets/curso/tema2/f3.svg")
              .col-md-8.mt-2
                img(src="@/assets/curso/tema2/f4.svg")
                h2.mt-2.text-center.mb-0 n = 1067
                p Para el ejercicio anterior se tiene, entonces, que para una población considerada como infinita, con un nivel de confianza del 95 % y un margen de error del 3 % se requieren realizar 1067 encuestas.

      .col-lg-5.px-0
        img(src="@/assets/curso/tema2/8.svg")
    figure.mb-5.mt-4(data-aos="fade-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Muv1AgJYZDg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.mt-4.align-items-center.bg4
      .col-lg-8
        p Existen algunas <strong>consideraciones a tener en cuenta respecto a las fórmulas</strong>
        ul.lista-ul--color
          li 
            i.fas.fa-check
            | Entre más alto sea el nivel de confianza (NC) más alto será el número de encuestas a realizar (n) y entre menor nivel de confianza (NC) menor será el número de encuestas a aplicar (n), por tanto, existe una relación directa entre el NC y el n.
          li 
            i.fas.fa-check
            | Entre más bajo sea el nivel de error habrá mayor precisión, lo que en términos de las fórmulas implicará realizar un mayor número de encuestas, de acuerdo con esto, existe una relación inversa entre el margen de error (e) y el n.
          li 
            i.fas.fa-check
            | Aunque lo ideal es tener altos niveles de confianza (NC) y bajos márgenes de error (e) esto siempre traerá inmerso la aplicación de más encuestas, lo que a su vez se traduce en mayor inversión en recursos, es decir, será una investigación de mercados más costosa y demandará más tiempo en el trabajo de campo.
          li 
            i.fas.fa-check
            | En otro escenario, cuando se requieren estudios más rápidos o se tienen pocos recursos, se debe trabajar con muestras pequeñas, no obstante, se debe conservar el criterio que el nivel de confianza sea mayor al 90 % y el margen de error menor al 10 %.
          li 
            i.fas.fa-check
            | Es importante precisar que el nivel de confianza y el margen de error son dos variables diferentes, por tanto, no deben sumar el 100 %, el hecho de que la métrica más usada para el NC sea el 95 % y para el margen de error el 5 % no obedece a que deban sumar 100 % sino que representan el término medio entre el 90 % y  el 99 % para el NC y el 0 % y el 9.9 % para el margen de error.
      .col-lg-4    
        img(src="@/assets/curso/tema2/10.svg")
    p.mt-4 Ahora bien, metodológicamente, definir la forma cómo se seleccionarán los encuestados da lugar a las técnicas de muestreo, que representan el mecanismo por el cual se seleccionarán los participantes en el estudio, dichas técnicas son de dos tipos: probabilístico y no probabilístico, y cada uno de ellos tiene asociados diferentes tipologías. De una forma más conceptual se muestra el siguiente esquema interactivo con sus correspondientes conceptos y ejemplos.
    .col-lg-4
      .row.align-items-center
        .col-10.ll.p-1
          h4.text-white.text-center.mt-1 Técnicas de muestreo  probabilístico
        .col-2
          img.mn(src='@/assets/curso/tema1/fan1.svg', alt='Texto que describa la imagen')  
    p.mt-4 Este tipo de muestreo se encuentra enfocado en un concepto de aleatoriedad, es decir, que cada individuo que cumple las condiciones requeridas por el estudio tiene la misma probabilidad de ser elegido y participar en el estudio. 
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-acento-botones.p-4.mt-5
        .row.justify-content-center.mb-3
          .col-7.martn
            img(src='@/assets/curso/tema2/i1.svg' alt='AvatarTop')
        h5.text-center Muestreo aleatorio simple (MAS)
        p.text-center  También conocido por sus siglas como MAS, en este tipo de muestreo todos y cada uno de los elementos de la población se elige de tal forma que tengan la misma probabilidad de ser seleccionados y pertenecer a la muestra.
      .tarjeta.color-acento-botones.p-4.mt-5
        .row.justify-content-center.mb-3
          .col-7.martn
            img(src='@/assets/curso/tema2/i1.svg' alt='AvatarTop')
        h5.text-center Muestreo aleatorio estratificado (MAE)
        p.text-center  Se involucra la división previa de la población en subgrupos, clases o estratos, a los cuales se les asigna una cuota que determina el número de miembros del estrato que comprende la muestra. Acá es importante clarificar qué estratos no hacen alusión a un estrato socioeconómico, sino a cualquier variable de segmentación.
      .tarjeta.color-acento-botones.p-4.mt-5
        .row.justify-content-center.mb-3
          .col-7.martn
            img(src='@/assets/curso/tema2/i1.svg' alt='AvatarTop')
        h5.text-center Muestreo aleatorio sistemático
        p.text-center  Se utiliza cuando el universo es de gran tamaño y se requiere de una selección aleatoria inicial del participante, seguida de otra selección obtenida mediante algún parámetro, es decir, cuando el criterio de distribución de los encuestados es tal, que los más similares tienden a estar más cercanos. Se utiliza este tipo de muestreo para ser más precisos y que de alguna manera los participantes en el estudio queden distribuidos de forma más uniforme.
      .tarjeta.color-acento-botones.p-4.mt-5
        .row.justify-content-center.mb-3
          .col-7.martn
            img(src='@/assets/curso/tema2/i1.svg' alt='AvatarTop')
        h5.text-center Muestreo por conglomerados
        p.text-center  Es el muestreo en el que se suele dividir primero la población en grupos o conglomerados convenientes para el muestreo, seleccionando de cada uno de ellos una porción al azar o por un método sistemático. Bajo este método, aunque no todos los grupos son muestreados, cada grupo tiene igual probabilidad de ser seleccionado.
    .row.bg5.mt-4.align-items-center
      .col-lg-4(data-aos="fade-up")
        img.mb-0(src='@/assets/curso/tema2/11.png' alt='AvatarTop')
      .col-lg-8
        h4 Ejemplo
        h4 Situación y aplicación de técnicas
        h5 Se requiere realizar un estudio de satisfacción con los estudiantes de determinada carrera universitaria. 
        p Si el encuestador se dirige al bloque y al preguntar a cada persona si estudia este programa la respuesta es sí, se haría mención a un muestreo aleatorio simple porque cualquier persona que cumpla este criterio es potencial para el estudio, indistinto de si todos están en el mismo semestre o no. 
        p Si en cambio se divide la base de datos donde cada estrato es un nivel (semestre), se debería garantizar que para cada semestre se realiza determinado número de encuestas; este sería un muestreo estratificado. 
        p.mb-0 Ahora bien, si se toma un estudiante aleatorio y a partir de allí se aplican encuestas teniendo en cuenta el listado de matriculados se aplicaría un muestreo sistemático y si se divide la población entre dos conglomerados los estudiantes nuevos y antiguos este sería la aplicación de un muestreo por conglomerado.
    .col-lg-4.mt-5
      .row.align-items-center
        .col-10.ll.p-1
          h4.text-white.text-center.mt-1 Técnicas de muestreo no probabilístico
        .col-2
          img.mn(src='@/assets/curso/tema1/fan1.svg', alt='Texto que describa la imagen')  
    p.mt-4 Es un tipo de muestreo en el que no es posible determinar la probabilidad de que cada individuo o elemento estará incluido en la muestra, adicionalmente no permite el cálculo del posible error de la muestra.
    .row.mb-5(data-aos="fade-up")
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/i1.svg' alt='AvatarTop')

          .tarjeta.color-acento-botones
            .p-4
              h4.text-center Muestreo por Ccnveniencia
              p Es un tipo de muestreo usado para tomar muestras estadísticas de forma no aleatoria, por lo que el criterio de selección es la facilidad de acceso, es decir, la disponibilidad de las personas para formar parte de la muestra.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/i1.svg' alt='AvatarTop')

          .tarjeta.color-acento-botones
            .p-4
              h4.text-center Muestreo por juicio
              p Es también denominado muestreo deliberado o crítico, en el que el criterio para participar en el estudio está asociado al criterio del investigador. La desventaja de este tipo de muestreo es que puede darse la subjetividad.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/i1.svg' alt='AvatarTop')

          .tarjeta.color-acento-botones
            .p-4
              h4.text-center Muestreo bola de nieve
              p Se utiliza con frecuencia cuando el perfil requerido para el estudio no es fácil de encontrar, por lo que a partir del contacto con el primer encuestado que cumple los criterios requeridos por el estudio le solicitan que referencie otras personas que cumplen con la misma variable de interés.
    .row.bg6.mt-4.align-items-center
      .col-lg-8
        h4 Ejemplo
        h4 Situación y aplicación de técnicas
        h5 Situación y aplicación de técnicas
        p En este caso el investigador elige una familiar que cumple con el criterio, en este sentido él está aplicando muestreo por conveniencia. 
        p En otro caso, un encuestador requiere encuestar personas de cierto movimiento social, por lo que acude a visitar un sitio característico de este tipo de población y procede a realizar las encuestas basándose en su juicio. 
        p Ahora bien, esta misma persona le podría preguntar a su encuestado si le puede referir otras personas que pertenezcan a ese mismo movimiento. En este sentido, el encuestador está aplicando un muestreo bola de nieve porque a partir de un encuestado efectivo está tratando de llegar a otros con el mismo perfil.
      .col-lg-4
        img(src='@/assets/curso/tema2/11.svg' alt='AvatarTop')
    .row.mt-4
      .col-lg-4
        img(src='@/assets/curso/tema2/12.png' alt='AvatarTop')
      .col-lg-8
        .row.p-2.colort1
          p Los expertos sugieren preferir el muestreo probabilístico en estudios cuantitativos porque garantiza que la selección de los encuestados no tiene ningún criterio de parcialidad y paralelamente recomiendan el muestreo no probabilístico en investigaciones de mercado cualitativas.
        p Según lo visto en este capítulo para un encuestador es muy importante conocer el tamaño de la muestra, para tener claridad de este total, cuántas encuestas tiene asignadas, así como es también relevante diferenciar los tipos de muestreo que existen y cómo se aplican; de tal forma que cuando esté en el trabajo de campo desarrolle su actividad de la manera más eficiente posible.
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
