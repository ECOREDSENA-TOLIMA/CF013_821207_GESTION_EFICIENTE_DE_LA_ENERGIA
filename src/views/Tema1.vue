<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1 Planificación de los Sistemas de Gestión de la Energía

    .row.justify-content-center.align-items-center.mb-5 
      .col-md-4.col-lg-3.col-12(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/tema1/tema1-01.svg", alt="Planificación de los Sistemas de Gestión de la Energía")
      .col-md-8.col-lg-9.col-12(data-aos="fade-down")
        p La planificación consiste en la realización de diversas actividades que conllevan a la estructuración del Sistema de Gestión y en su adecuación para cubrir las necesidades a nivel energético de la organización. Se considera que el proceso de planificación representa el núcleo del SGEn y permite el cumplimiento de la política energética definida por la organización. Algunas recomendaciones para desarrollar una buena planificación se enuncian a continuación:


</template>

<script>
export default {
  name: 'Tema1',
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

<style lang="sass"></style>
