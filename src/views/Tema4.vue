<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Validación y plan de acción de encuestas
    .row.align-items-center
      .col-lg-5.px-0(data-aos="zoom-in-left")
        img(src='@/assets/curso/tema4/1.png', alt='Texto que describa la imagen')

      .col-lg-7.px-0.asaasz
        .row.p-4.colort3
          p.mt-3 Toda investigación de mercados lleva asociado un cronograma, el cual representa una herramienta de planeación mediante la cual se deja por escrito cuáles son las actividades a realizar, los responsables y los tiempos asociados a cada tarea; visualmente en un cronograma las filas son las actividades a desarrollar, y las columnas reflejan el tiempo y los responsables. 
          p.mb-4 Este es un gran insumo para el estudio, ya que a través de este, se realiza el seguimiento sobre la gestión de cada uno de los participantes en la investigación y si es el caso, se tomarán las acciones correctivas a que haya lugar, incluso en muchos estudios que son contratados a través de agencias de investigación de mercados, el cronograma constituye un anexo al contrato.
    p.mt-3 De acuerdo con lo anterior, la fecha en la que el trabajo de campo debe finalizar representa una actividad de alto impacto, ya que no solo da el cierre a una fase del proyecto, sino que además marca el inicio para el procesamiento de la información, por lo que una vez se evidencia en el cronograma que ya dicha actividad debe finalizarse, el supervisor del trabajo de campo debe:
    TabsA.color-acento-contenido.mb-5.mt-4(data-aos="zoom-in-left")
      .tarjeta.color-acento-botones--borde.p-4(titulo="1. Consolidación de encuestas")
        .row
          .col-lg-7
            h4 1. Consolidación de encuestas
            p Consolidar todas las encuestas reportadas por los encuestadores como efectivas. Esto hace alusión a solicitar a cada uno de los encuestadores el reporte y el soporte de todas las encuestas que tienen bajo su potestad.
        
          .col-lg-5
            img(src='@/assets/curso/tema4/2.png', alt='Texto que describa la imagen')
      .tarjeta.color-acento-botones--borde.p-4(titulo="2. Conteo")
        .row
          .col-lg-7
            h4 2. Conteo
            p Realizar o delegar el conteo del total de encuestas reportadas. El conteo dependerá del canal por el cual han sido aplicadas, a saber: presencial, virtual o telefónico.
          .col-lg-5
            img(src='@/assets/curso/tema4/3.png', alt='Texto que describa la imagen')
      .tarjeta.color-acento-botones--borde.p-4(titulo="2.1. Encuestas realizadas de forma presencial")
        .row.justify-content-center
          .col-lg-11
            h4 2.1. Encuestas realizadas de forma presencial
            p El procedimiento consiste en contar uno a uno los instrumentos diligenciados por cada encuestador, ese proceso se conoce como conteo aritmético. Usualmente como buena práctica las encuestas físicas tienen en la parte superior un recuadro para asignar un ID (código de la encuesta), lo que facilita su procedimiento de conteo.
            p En la siguiente tabla se muestra un ejemplo, donde se realizará el conteo, basado en un total de cinco encuestadores, donde la cuota de cada encuestador era de 80 para lograr la muestra total de 400 encuestas. 
            .titulo-sexto.color-acento-contenido
              h5 Tabla 1.
              span Ejemplo de conteo en encuestas físicas         
            .tabla-a.color-acento-contenido.mb-5 
              table
                thead
                  tr
                    th Encuestador
                    th Total de encuestas entregadas
                    th Total acumulado

                tbody
                  tr.bgb
                    td.text-center  Encuestador 1
                    td.text-center 70
                    td.text-center 70
                  tr.bgb
                      td.text-center  Encuestador 2
                      td.text-center 80
                      td.text-center 150
                  tr.bgb
                      td.text-center  Encuestador 3
                      td.text-center 65
                      td.text-center 215
                  tr.bgb
                      td.text-center  Encuestador 4
                      td.text-center 75
                      td.text-center 290
                  tr.bgb
                      td.text-center  Encuestador 5
                      td.text-center 80
                      td.text-center 370
                  tr.bgb
                      td.text-center  TOTAL
                      td.text-center 370
                      td.text-center -
      .tarjeta.color-acento-botones--borde.p-4(titulo="2.2. Encuestas virtuales o telefónicas")
        .row.justify-content-center
          .col-lg-11
            h4 2.2. Encuestas virtuales o telefónicas
            p Si las encuestas han sido recopiladas de forma virtual o en el canal telefónico, usualmente quedan alojadas de forma consolidada en una base de datos, en un archivo tipo hoja de cálculo, con lo cual bastará con aplicar sobre una columna la fórmula de “contara”.

            p Ejemplo: cinco encuestadores son contratados para aplicar una encuesta de forma telefónica, al validar el estado del trabajo de campo, según la fecha referenciada en el cronograma como finalización, se tienen los datos de las encuestas consolidados en una base de datos. En las siguientes figuras se mostrará cómo se realiza el proceso de conteo.

            .titulo-sexto.color-acento-contenido
              h5 Figura 1.
              span Aplicación de la fórmula para el conteo     
            img(src='@/assets/curso/tema4/4.png', alt='Texto que describa la imagen')
            p.mt-2 Aplicando la fórmula, la cual consiste en escribir el nombre de la fórmula “contara”  y seleccionar el rango de datos para el cual se desea realizar el conteo, se obtendrá como resultado el total de encuestas que se tienen aplicadas.
            .titulo-sexto.color-acento-contenido
              h5 Figura 2.
              span Resultado de la aplicación de la fórmula para el conteo            
            img(src='@/assets/curso/tema4/5.png', alt='Texto que describa la imagen')
      .tarjeta.color-acento-botones--borde.p-4(titulo="3. Verificación técnica")
        .row.justify-content-center
          .col-lg-11
            h4 3. Verificación técnica
            p Validar o delegar la verificación técnica de las encuestas, es decir, revisar que en efecto las encuestas consideradas como efectivas lo son. La forma para validar es asegurar que en cada encuesta:
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span a
                | Todos los encuestados han contestado sí a la pregunta filtro, es decir, que sí cumplieran las características de interés para el estudio.
              li 
                .lista-ol--cuadro__vineta
                  span b
                | Cada pregunta tendrá respuesta, ello garantizará que los resultados no tengan inconsistencia.
              li 
                .lista-ol--cuadro__vineta
                  span c
                | Se hayan aplicado correctamente las preguntas pase, es decir, que cada encuestado respondiera exclusivamente las preguntas que le aplicaran.
              li 
                .lista-ol--cuadro__vineta
                  span d
                | En encuestas físicas, garantizar que en las preguntas en donde solo podía dar una opción de respuesta, no haya más de una.
    .row.mt-4.bg9.align-items-center
      .col-lg-4.wimble(data-aos="zoom-in-left")
        img(src='@/assets/curso/tema4/6.png', alt='Texto que describa la imagen')

      .col-lg-8
        .row.p-2.colort3(data-aos="zoom-in-left")
          p Por temas de calidad, las encuestas que no cumplan con cada una de las condiciones mencionadas previamente deben completarse (si es que hay lugar para ello) o eliminarse de la base de datos, dado que no pueden ser consideradas como efectivas.
        p.mt-3 La ISO 20252 en su numeral 5.6.5 hace mención a que el investigador (empresa que realiza el estudio) debe implementar procedimientos para identificar y eliminar entrevistados (encuestados) fraudulentos o distraídos, indicando que dichos procedimientos y las acciones tomadas deben ser documentadas. 
        p También se debe tener presente que cuando la investigación ha sido contratada por un cliente a una agencia de investigación de mercados que esté certificada en dicha norma, el cliente puede solicitarle a la firma que le suministre la descripción del proceso de depuración o limpieza de datos (de la muestra o de los resultados) realizado para eliminar entrevistados fraudulentos, distraídos o no deseables por otros motivos.    
    p.mt-4 Bajo un contexto práctico las encuestas no efectivas deben separarse de la base de datos, dado que requieren un tratamiento especial porque han sido datos suministrados por el encuestado con un fin específico, por tanto, según el medio a través del cual se realizaron se deben realizar alguna(s) de las siguientes acciones:
    .row.justify-content-center.mt-5
      .col-lg-10
        .row
          .col-12.col-lg-6.mt-2(data-aos="zoom-in-left")
            img(src='@/assets/curso/tema4/7.svg', alt='Texto que describa la imagen')
            .row.p-4.colort12
              h5.mb-0 Encuestas disponibles solamente en forma digital:

              p.mb-5 En este tipo de encuestas el proceso de “destrucción” es más sencillo, ya que consiste en eliminarlas de forma permanente de la base de datos.
              .row.mb-5
          .col-12.col-lg-6.mt-2(data-aos="zoom-in-left")
            img(src='@/assets/curso/tema4/8.svg', alt='Texto que describa la imagen')
            .row.p-4.colort12
              h5.mb-0 Encuestas disponibles en medio impreso: 

              p.mb-4 Si las encuestas están disponibles de forma impresa lo ideal es acudir a una máquina destructora de papel con el fin de garantizar que la información quede totalmente destruida; en caso de no contar con dicho elemento deben rayarse, cortarse en pedazos y llevarse a la basura; en ningún escenario deben quedar disponibles.
    p.mt-4 Luego,  dentro de este proceso de validación se debe continuar con el cálculo de cumplimiento. A continuación se expone el paso a paso, retomando un ejemplo previo.
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.justify-content-center(titulo="1. Porcentaje de cumplimiento individual ")
        .col-md-11.mb-4.mb-md-0
          p Calcular el porcentaje de cumplimiento individual y colectivo de la cuota de encuestas, entendida como el porcentaje de cumplimiento sobre el total asignado. La fórmula para calcular este porcentaje es: 
          p.mb-0 <strong>% Cumplimiento/ encuestador =</strong> (Encuestas efectivas/ Total de encuestas asignadas )  * 100
          p.mb-0 <strong>% Cumplimiento trabajo de campo =</strong>  (Encuestas totales efectivas/ muestra (n))  * 100                    
          p Para dar mayor claridad y dando continuidad a los datos referenciados en la tabla se calcularán los porcentajes de cumplimiento por encuestador y para el estudio.
          .titulo-sexto.color-acento-contenido
            h5 Tabla 1.
            span Indicadores de cumplimiento                
          .tabla-a.color-acento-contenido.mb-5 
            table
              thead
                tr
                  th Encuestador
                  th Total de encuestas entregadas  al supervisor como diligenciadas
                  th Total de encuestas efectivas (total después de aplicar la revisión de calidad)
                  th Total de encuestas asignadas
                  th % Cumplimiento
              tbody
                tr.bgb
                  td.text-center  Encuestador 1
                  td.text-center 70
                  td.text-center 68
                  td.text-center  80
                  td.text-center   85%
                tr.bgb
                  td.text-center  Encuestador 2
                  td.text-center 80
                  td.text-center 80
                  td.text-center  80
                  td.text-center   100%
                tr.bgb
                  td.text-center  Encuestador 3
                  td.text-center 65
                  td.text-center 60
                  td.text-center  80
                  td.text-center   75%
                tr.bgb
                  td.text-center  Encuestador 4
                  td.text-center 75
                  td.text-center 70
                  td.text-center  80
                  td.text-center   88%
                tr.bgb
                  td.text-center  Encuestador 5 
                  td.text-center 80
                  td.text-center 75

                  td.text-center  80
                  td.text-center  94%
                tr.bgb
                  td.text-center  TOTAL
                  td.text-center 370
                  td.text-center 353

                  td.text-center  400
                  td.text-center  88%
            p.mt-4 Se evidencia que el encuestador 2 fue el encuestador más efectivo, ya que cumplió al 100 % con la aplicación de las encuestas asignadas, así mismo, se muestra que el encuestador 3 es el de menor desempeño, ya que su indicador fue del 75 %. Asociado, al total del estudio se detalla que a la fecha de corte indicada por el cronograma el cumplimiento fue del 88 %. 
      .row.justify-content-center(titulo="2. Productividad")
        .col-md-11.mb-4.mb-md-0
          p Es la variable que muestra el rendimiento de una persona, específicamente para medir esta variable suele calcularse el promedio de las encuestas por encuestador, para a partir de esa cifra calificar los encuestadores como productivos (si están en el promedio o por encima), medianamente productivos (si están muy cerca al promedio) o improductivos (si están lejos del promedio).  La fórmula para el promedio de encuestas se define como:

          h5.text-center Promedio de encuestas/ encuestado = Total de encuestas efectivas / número de encuestadores

          p Aplicando la fórmula del promedio a los datos referenciados en la Tabla 5 se tendría: 
          p.mb-0 Promedio de encuestas/ encuestado= 353 encuestas efectivas / 5 encuestadores
          p Promedio de encuestas= 71 encuestas/ encuestado
          p De acuerdo con el resultado anterior (71 encuestas) podría decirse entonces, que los encuestadores 2 y 5 son productivos, el encuestador 4 es medianamente productivo (realizó 70 encuestas) y los encuestadores 1 y 3 son improductivos.
      .row.justify-content-center(titulo="3. Plan de acción")
        .col-md-11.mb-4.mb-md-0
          p Es una hoja de ruta en donde se plantea el camino a seguir respecto a un proyecto, una actividad o un negocio, por tanto, refleja paso a paso lo que se define debe realizarse para alcanzar un determinado objetivo. 
          p A nivel general, un plan de acción conlleva:
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span a
              | Definir qué se quiere lograr.
            li 
              .lista-ol--cuadro__vineta
                span b
              | Enumerar cada uno de los pasos a seguir.
            li 
              .lista-ol--cuadro__vineta
                span c
              | Priorizar las tareas.
            li 
              .lista-ol--cuadro__vineta
                span d
              | Asignar fechas límites a las tareas.
            li 
              .lista-ol--cuadro__vineta
                span e
              | Identificar y cuantificar los recursos necesarios.
            li 
              .lista-ol--cuadro__vineta
                span f
              | Conseguir la aprobación del plan.
            li 
              .lista-ol--cuadro__vineta
                span g
              | Implementar el plan de acción.
            li 
              .lista-ol--cuadro__vineta
                span h
              | Realizar seguimiento a la ejecución del plan de acción.
    p.mt-4 En la investigación de mercados, los planes de acción se implementan en el caso de que el total de encuestas efectivas sea menor al total de encuestas esperadas/planteadas, en esta situación el coordinador o jefe del estudio tiene tres alternativas posibles:
    .row.mt-4
      .col-lg-4
        .row.p-3.bgt4.justify-content-center
          img(src='@/assets/curso/tema4/9.png', alt='Texto que describa la imagen')
          .col-lg-10.mt-4
            .row.aqs
              h5 a. Hacer uso de incentivos para propiciar que se complemente el tamaño de la muestra definido 
          p.mt-3.mb-5 Se recomienda utilizar souvenirs (material promocional de la marca), ya que este tipo de elementos motivan la participación.
          .row.mb-5
          .row.mb-5
          .row.mb-5
      .col-lg-4
        .row.p-3.bgt44.justify-content-center
          img(src='@/assets/curso/tema4/10.png', alt='Texto que describa la imagen')
          .col-lg-10.mt-4
            .row.aqs
              h5 b. Activar más canales de contacto para realizar la encuesta 
          p.mt-3 Implica generar una mezcla de medios, por ejemplo, si la encuesta se realizaba presencial, plantear realizarla por teléfono o a través de canales digitales o caso contrario, si se venía aplicando en canales digitales incorporar, por ejemplo, el canal presencial; técnicamente entre más canales se incorporen al trabajo de campo mayor rapidez habrá en la realización de las mismas; eso si se debe tener claro que cada canal requiere de ciertas características especiales.
      .col-lg-4
        .row.p-3.bgt4.justify-content-center
          img(src='@/assets/curso/tema4/11.png', alt='Texto que describa la imagen')
          .col-lg-10.mt-4
            .row.aqs
              h5 c. Cerrar el campo y ajustar los indicadores estadísticos 
          p.mt-3.mb-5 Como se detalló previamente, existe relación entre el nivel de confianza (NC), el margen de error (e) y la muestra (n), es decir, entre los indicadores estadísticos y el total de encuestas por realizar. Cuando no se alcanza el número de encuestas esperado, en ocasiones se acude a la táctica de incrementar el margen de error y/o disminuir el nivel de confiabilidad.
          .row.mb-3
          .row.mb-4
    .row.bg8.justify-content-center.mt-4.align-items-center
      .col-lg-1
      .col-lg-7
        p Seleccionando cualquiera de las alternativas previas se debe tener presente que, si se trata de una agencia de investigación de mercados que le está realizando un estudio a un cliente externo, esta acción debe ser concertada entre las partes (empresa – cliente), por lo que debe quedar un soporte del ajuste y el impacto en término de recursos (dinero, tiempo, entregables) y proceder a aplicar los pasos mencionados previamente.
      .col-lg-4
        img(src='@/assets/curso/tema4/12.svg', alt='Texto que describa la imagen')

  
</template>

<script>
export default {
  name: 'Tema4',
  components: {},
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

<style lang="sass">
.tabs-a__tab
  background-color: #E8E8E8
.tarjeta.color-acento-botones--borde
  background-color: #E1EEFE
  border: solid 4px #E1EEFE
</style>
