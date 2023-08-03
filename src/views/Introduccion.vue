<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    figure.mt-5.mb-5(data-aos="fade-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/-O0Imr1ITNU" title="Planificación y mejora continua del sistema de gestión de la energía" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      
    
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/intro.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p La implementación de los sistemas de gestión eficiente de la energía pretende generar un cambio cultural en los procesos y procedimientos que a diario se realizan en cualquier tipo de organización, con el objetivo principal del uso racional y eficiente de la energía, y la disminución del impacto de cada uno en el medio ambiente. Para llegar a cumplir con este objetivo se deben seguir determinados pasos establecidos por la normatividad para los sistemas de gestión de la energía. 
          br
          br
          | En el presente componente formativo se analizarán las etapas de planificación, apoyo, operación, evaluación del desempeño y mejora continua para los SGEn. Adicionalmente se presentan algunas definiciones y recomendaciones respecto a la eficiencia energética y el uso racional de la energía. 

    
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
