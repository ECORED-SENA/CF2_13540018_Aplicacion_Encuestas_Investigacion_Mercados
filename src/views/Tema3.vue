<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Bases de datos
    .row.align-items-center
      .col-lg-8.px-0
        .row.p-5.colort1
          p Las bases de datos conocidas con las siglas BD (español) o DB (en inglés) o BBDD en términos informáticos, son estructuras diseñadas principalmente para recopilar y alojar información de diferentes tipos. Hoy en día las bases de datos son una herramienta importante en la gestión empresarial, dado que a través de ellas es posible alojar, actualizar o ingresar información, y en este sentido tienen usabilidad tanto para el desarrollo de actividades individuales como colectivas dentro de la organización. Asimismo, permiten capturar información de los grupos de interés (<i>stakeholders</i>), permitiendo de esta manera tener procesos estandarizados y centralizados para los datos que se generan en la compañía.

      .col-lg-4.px-0(data-aos="flip-up")
        img(src='@/assets/curso/tema3/img1.png', alt='Texto que describa la imagen')
    .row.bg7.mt-4.justify-content-center(data-aos="flip-down")
      .col-lg-11
        img(src='@/assets/curso/tema3/2.svg', alt='Texto que describa la imagen')
    .row.mt-5.align-items-center
      .col-lg-8
        p En el contexto de la investigación de mercados las bases de datos son de alta relevancia, ello se explica por qué cuando los instrumentos son ingresados/digitados en hojas de cálculo o están disponibles para pasar a procesamiento se indica que están disponibles en una base de datos. Dicho en términos más prácticos, cuando se tienen consolidadas las encuestas en un mismo sistema informático se dirá, entonces, que ya se cuenta con la base de datos de la investigación de mercados. 
        p A nivel de informática existen varios tipos de bases de datos, lo anterior, dado que las DB varían según el fin con el cual se almacenará la información y el posterior uso que se le dará a dicha información. Acá, se hará mención a dos de estas clasificaciones: según la variabilidad y según el contenido. En el siguiente recurso esto se visualiza de una forma más clara:
      .col-lg-4(data-aos="zoom-out")
        img(src='@/assets/curso/tema3/3.svg', alt='Texto que describa la imagen')
    .col-lg-4.mt-4
      .row.align-items-center
        .col-10.ll.p-1
          h4.text-white.text-center.mt-1 Bases de datos según la variabilidad
        .col-2
          img.mn(src='@/assets/curso/tema1/fan1.svg', alt='Texto que describa la imagen')  
    p.mt-4 La agrupación con base en la variabilidad se da a partir del modelo en que los datos están estructurados dentro de la base de datos. 
    .row.mt-4.align-items-center
      .col-lg-4(data-aos="zoom-out")
        img(src='@/assets/curso/tema3/4.svg', alt='Texto que describa la imagen')  

      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.justify-content-center(titulo="Estáticas")
            .col-md-10.mb-4.mb-md-0
              p Son diseñadas exclusivamente con fines de lectura, almacenamiento y registro de datos históricos; sin embargo, luego son susceptibles de uso para el análisis de proyecciones y comportamientos de una determinada variable.  
              p Por ejemplo, la empresa puede tener una base de datos del histórico de devoluciones que se han realizado en el último año, dicha información puede ser consultada o ser utilizada para dimensionar los recursos necesarios, con el fin de poder atender dichos trámites al año siguiente. En este caso, la variable son las devoluciones y la utilidad será predecir la cantidad de agentes necesarios para atender este tipo de solicitudes.


          div(titulo="Dinámicas")
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-0
                p Por su misma denominación son lo opuesto de las estáticas, ya que sí permiten realizar ajustes o modificaciones en la información registrada; dicho de otra manera, los datos que se ingresan pueden ser actualizados, eliminados o complementados. 
                p A nivel de ejemplo, se toma el caso de la base de datos de los datos de contacto de un cliente, esta es una información que cambia fácilmente, por lo que debe ser susceptible de actualizar en el momento que se requiera.
    .col-lg-4.mt-4
      .row.align-items-center
        .col-10.ll.p-1
          h4.text-white.text-center.mt-1 Bases de datos según el contenido
        .col-2
          img.mn(src='@/assets/curso/tema1/fan1.svg', alt='Texto que describa la imagen')  
    p.mt-4 Esta tipología responde a la categorización del contenido a partir del cual se espera dar usabilidad a los datos.
    .row.mt-4.align-items-center

      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.justify-content-center(titulo="Bibliográficas")
            .col-md-10.mb-4.mb-md-0
              p Son aquellas que permiten recopilar información que responde a áreas de conocimiento específicas, especialmente relacionadas con publicaciones académicas o técnicas; a nivel de tecnología se recogen en catálogos informáticos. 
              p Por ejemplo, los investigadores tienen como la mejor fuente de búsqueda de información las bases de datos bibliográficas porque consolidan las referencias alrededor de temáticas específicas.

          div(titulo="Texto completo")
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-0
                p Las bases de datos de texto completo posibilitan la búsqueda de información a partir de <i>key words</i> (palabras clave), la diferencia con las bases de datos bibliográficas es que en estas se podrá tener acceso a la información completa. 
                p Por ejemplo, Google es una base de datos de texto completo, ya que al ingresar en el buscador se puede acceder inmediatamente a consultar el documento, imagen o video que se requiera.
          div(titulo="Directorio")
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-0
                p Alojan la información específica de un grupo de interés de la compañía, entendiendo estos como aquellos grupos con los cuales la empresa tiene relación constante, a nivel general son: los colaboradores, los clientes, los proveedores, los distribuidores, los entes de control, entre otros. 
                p Dichas bases de datos son de alta relevancia, ya que permiten organizar la información según los requerimientos puntuales que se tengan. 
                p Por ejemplo, una base de datos que aloje la información de los colaboradores de la compañía relacionando sus datos de nombres, fecha de nacimiento, estado civil, estudios y datos de contacto.
      .col-lg-4(data-aos="zoom-out")
        img(src='@/assets/curso/tema3/5.svg', alt='Texto que describa la imagen')  
    .row.mt-5
      .col-lg-4
        img(src='@/assets/curso/tema3/6.png', alt='Texto que describa la imagen')  
      .col-lg-8
        .row.p-2.colort3
          p En términos de investigación de mercados la base de datos que se va construyendo en la medida que se va recopilando la información es una base de datos dinámica; sin embargo, cuando el estudio ha terminado y ya se tiene disponible en la base de datos el 100 % de las encuestas que debían realizarse, la base de datos será estática y bajo esta tipología se conservará, dado que la información quedará tal cual como se ha ingresado y no será susceptible de ninguna modificación.
        p Continuando con el manejo de esta información, en términos operativos de la base de datos, se entiende registro de información como el proceso mediante el cual una persona o un <i>bot</i> (robot que hace tareas operativas) ingresa información en un sistema, lo cual va originando algo que se conoce como “alimentar” la base de datos y es realizado a través de un usuario, que es aquella persona que tiene la potestad de ingresar a una BD.
    p.mt-2 Para el registro de información en la base de datos se deben tener presente los roles, entendidos  como el tipo de accesos que se permiten a cada usuario. En este sentido, asociado al tratamiento de las bases de datos, a nivel estándar se tienen los siguientes:
    .col-lg-5.mt-4
      .row.align-items-center
        .col-10.ll.p-1
          h4.text-white.text-center.mt-1 Roles asociados al manejo de bases de datos 
        .col-2(data-aos="zoom-out")
          img.mn(src='@/assets/curso/tema1/fan1.svg', alt='Texto que describa la imagen') 
    .tarjeta--container.row.mb-5.mt-4(data-aos="zoom-out")

      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema3/7.svg', alt='Texto que describa la imagen')          
        h2.text-center Rol administrador
        p Es aquel que tiene la facultad de realizar cualquier tipo de acciones sobre la base de datos, asociado tanto a los datos como a los usuarios.

      .col-md.tarjeta.color-acento-botones.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema3/8.svg', alt='Texto que describa la imagen')          
          
        h2.text-center Roles de editores
        p Este tipo de roles están asociados a aquellos usuarios que ingresan, procesan y/o modifican los datos.

      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema3/9.svg', alt='Texto que describa la imagen')          
        h2.text-center Rol de consulta
        p Estos usuarios pueden ingresar a la base de datos con  la finalidad de detallar la información y en algunos casos, bajar información; sin embargo, no pueden modificarla. 
    p.mt-4 De acuerdo con los roles en cada empresa realizan la asignación de perfiles, entendiendo este último concepto como indicar para cada rol cuáles son las transacciones/actividades específicas que puede realizar el usuario en las base de datos. 
    .row.justify-content-center(data-aos="zoom-out")
      .col-lg-10
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/10.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 A modo de ejemplo y para mayor comprensión se presenta esta situación: una empresa realiza un estudio presencial con encuestas impresas, por lo que con fines de procesamiento se requiere que un digitador ingrese en un programa ofimático todas las encuestas recopiladas, en este sentido, a dicho digitador se le asigna un rol de editor, con el objetivo de que pueda acceder a la base de datos e ir ingresando las encuestas efectivas cada día.
    .row.p-4.colori2.align-items-center.mt-4
      .col-2
        img(src='@/assets/curso/tema3/11.svg', alt='Texto que describa la imagen')
      .col-10
        p Una vez todas las encuestas están disponibles como mínimo en una base de datos se continúa con el procesamiento, que representa un conjunto de operaciones informáticas a través de las cuales los datos se convertirán en información de valor, lo cual representa en últimas el fin de la investigación de mercados. Las etapas que contiene el procesamiento de la información son:
    .row.justify-content-center.mt-5
      .col-lg-10(data-aos="zoom-out")
        img(src='@/assets/curso/tema3/12.svg', alt='Texto que describa la imagen')
    .row.bg8.justify-content-center.mt-4
      .col-lg-1
      .col-lg-7
        p Aplicando el esquema anterior en la investigación de mercados, la entrada representa contar con el cierre del trabajo de campo y por ende, con todas las encuestas totalmente diligenciadas, digitadas y disponibles en una base de datos, el proceso representa el momento en el cual los datos son transformados en información realizando actividades de validación, agrupación, cálculos e indicadores, en la salida se obtiene la información que se entregará al cliente y  la evaluación de resultados representa el momento en el cual el investigador está realizando el informe de investigación de mercados.
        p Una vez más se reitera que el procesamiento no es responsabilidad de un encuestador; sin embargo, sí es importante que ellos conozcan sobre este tema para que dimensionen el impacto que tiene en los resultados realizar las encuestas de la mejor manera posible.
      .col-lg-4
        img(src='@/assets/curso/tema3/13.svg', alt='Texto que describa la imagen')
    .row.mt-5.align-items-center
      .col-lg-8
        p Hoy en día la información es uno de los activos más importantes en una organización. En temas de bases de datos, como ya se ha mencionado, no solo es importante garantizar el ingreso de información sino también asegurar la disponibilidad, actualización y alojamiento, incluyendo un <i>back- up</i> (respaldo) que permita que en caso de que se tenga alguna falla técnica de tipo informático sea posible seguir contando con la información. Esto en términos de investigación de mercados es importante, porque si las encuestas se realizaron impresas y la información se ingresa en una base de datos y se pierde, generará un gran reproceso y pérdida de tiempo y dinero volverlas a ingresar; y si las encuestas fueron realizadas de forma online y no se cuenta con un <i>back-up</i> se corre el riesgo de perder toda la información recopilada en el trabajo de campo.
        .row.p-3.colort3
          p De acuerdo con lo anterior, se puede afirmar que las bases de datos en una investigación de mercados será el resultado final que se obtiene cuando se cuenta con los instrumentos de investigación totalmente diligenciados y disponibles en un solo repositorio informático, es por ello que es de suma importancia asegurar que esta base de datos cuente con los roles adecuados para acceder a ella y disponga de elementos pertinentes de seguridad de la información, con el fin de evitar su pérdida o manipulación.
      .col-lg-4
        img(src='@/assets/curso/tema3/14.png', alt='Texto que describa la imagen')

</template>

<script>
export default {
  name: 'Tema3',
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
.tarjeta.color-primario
  background-color: #FFE2D9!important
.tarjeta.color-acento-botones
  background-color: #FFBBA6!important
.tarjeta.color-acento-botones *
  color: #12263F!important
</style>
