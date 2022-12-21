<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5(data-aos="fade")
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.colori1.align-items-center
      .col-lg-8
        p La investigación de mercados comprende una serie de actividades consecutivas que deben realizarse para lograr el resultado esperado, es decir, un estudio de mercados que permita generar o validar la información y tomar decisiones. En el siguiente video se puede recordar nuevamente en qué consiste este proceso, el papel del encuestador es fundamental y por ende, cada una de las temáticas relacionadas a desarrollar en este componente.
      .col-lg-4
        img(src='@/assets/curso/intro/1.svg', alt='Texto que describa la imagen')

    figure.mb-5.mt-4(data-aos="fade-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/1tOwzZrpXUA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.p-4.colori2.align-items-center
      .col-4.col-lg-2
        img(src='@/assets/curso/intro/2.svg', alt='Texto que describa la imagen')
      .col-8.col-lg-10
        p.mb-md-0 No obstante, en un país como Colombia donde no hay tanta cultura de la investigación, la labor del encuestador es un poco más compleja frente a otras latitudes, dado que las encuestas suelen estar asociadas con la pérdida de tiempo y la desconfianza, es por ello, que en ocasiones completar la cuota de ventas, entendida como la cantidad de encuestas a realizar puede llegar a ser una actividad demandante de tiempo y recursos.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
