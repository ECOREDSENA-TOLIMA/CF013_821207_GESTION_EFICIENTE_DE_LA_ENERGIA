<template lang="pug">
.curso-main-container.pb-3.tema5
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 5
      h1 Mejora en los SGEn

    p(data-aos="fade-right") ¿Cómo mejorar el sistema de gestión de energía? para conocer la respuesta le invitamos a explorar el siguiente recurso.
    p(data-aos="fade-right") Para que el sistema de gestión de la energía pueda mejorar su desempeño, la norma ISO 50001 determina como imprescindible los siguientes requisitos fundamentales: 


    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5.mt-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/tema5-01.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 #[h4 No conformidad y Acción Correctiva]
          br
          | Una no conformidad se define como el incumplimiento de un requisito establecido previamente por la organización. También dentro de la operación de los USE y el desempeño energético, una no Conformidad se puede producir cuando el comportamiento energético se desvía de forma significativa del valor que estaba previsto. 

    .tarjeta--container.row.mb-5(data-aos="fade-down")
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema5/tema5-02.png', alt='')
        p.text-center En otras palabras, una no conformidad es una situación en la cual se presenta una falla, error o desviación causado por la omisión o incorrecta ejecución de los procesos y procedimientos establecidos en el sistema de gestión de la energía.


      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema5/tema5-03.png', alt='')
        p.text-center Una no conformidad puede ser catalogada como mayor o menor dependiendo del grado de afectación. Una no conformidad mayor se presenta cuando:
        p.text-center -La organización incumple u omite en su totalidad un requisito de la norma ISO 50001 que impacta de manera significativa el desempeño energético y los resultados previstos del sistema de gestión.
        p.text-center -La organización incumple u omite un requisito de la norma ISO 50001, de manera reincidente a pesar de estar identificado como no conformidad mayor en auditorías anteriores.

    .row.justify-content-center.align-items-center.mb-4.mt-5.p-2(style="background-color:#EDF5FF")
      .col-md-8.col-12(data-aos="fade-left")
        p Por otra parte, una no conformidad se determina como menor cuando el incumplimiento de un requisito no pone en riesgo los resultados previstos por el sistema de gestión y el desempeño energético de la organización.
        p Las desviaciones o no conformidades pueden ser detectadas por cualquier miembro de la organización en auditorías internas y externas, procesos de rutina para evaluación de SGEn, acciones diarias en la operación de los USE, y en la evaluación del desempeño energético. 
        p Estas desviaciones deben ser comunicadas e informadas a quien corresponda para que el área encargada defina si se trata de una no conformidad menor o mayor para el SGEn, y se determinen las acciones correctivas según el caso.
      .col-md-4.col-12(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema5/tema5-04.svg', alt='')


    .row.justify-content-center.align-items-center.mb-4.mt-5.p-2
      .col-md-4.col-12.col-lg-3(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema5/tema5-05.svg', alt='')
      .col-md-8.col-12.col-lg-9(data-aos="fade-left")
        p.px-2 Mediante La ley 697 de 2001 se declara en Colombia el Uso Racional y Eficiente de la Energía (URE) como un asunto de interés social, público y de conveniencia nacional, se crea el programa PROURE para que gradualmente toda la cadena energética, esté cumpliendo permanentemente con los niveles mínimos de eficiencia energética y se establecen los estímulos y sanciones aplicables a las personas naturales y jurídicas de acuerdo con el nivel de implementación del URE al interior de su organización. 
        div(style="background-color:#ECE3FF")
          p.px-2 El primer nivel en las metas indicativas de eficiencia energética se estableció en la resolución 180919 de 2010, mediante la adopción del Plan de Acción Indicativo PAI-PROURE 2010-2015 y el segundo nivel de las mismas metas se estableció en la resolución 41216 de 201, mediante la adopción del Plan de Acción Indicativo PAI-PROURE 2010-2015 el cual se encuentra vigente.

    p(data-aos="fade-right") Las actuales metas de ahorro de energía por sector se muestran la siguiente tabla:
      
    .row.justify-content-center.align-items-center.mb-5.mt-4
      .col-12.col-md-10.px-0(data-aos="fade-down")
        .tabla-a.color-acento-botones 
          table
            caption Plan de acción indicativo PAI-PROURE 2017-2022 p. 45.
            thead
              tr
                th Sector
                th Meta de ahorro (TJ)
                th Meta de ahorro (%)
            tbody
              tr
                td Transporte
                td 424.408
                td 5,49%
              tr
                td Industria
                td 131.859
                td 1,71%
              tr
                td Terciario
                td 87.289
                td 1,13%
              tr
                td Residencial
                td 699.678
                td 9.05%

    Separador
    #t_5_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 5.1 No conformidad y Acción correctiva

    p(data-aos="fade-right") Algunos ejemplos de no conformidades son:

    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-md-9.col-12.mb-4.mb-md-0
        ul.lista-ul.mb-3
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Incumplimiento en la documentación del alcance del SGEn.  
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Incumplimiento del establecimiento de objetivos y metas energéticas.  
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Incumplimiento de la definición de responsabilidades del SGEn. 
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Incumplimiento del mantenimiento de registro de los resultados de la aplicación de acciones correctivas.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Incumplimiento de la evaluación periódica de la conformidad con los requisitos legales.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Incumplimiento de los criterios de control operacional.  
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Incumplimiento de los requisitos de mantenimiento previstos.
      .col-md-3.col-12(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema5/tema5-06.png', alt='')

    p(data-aos="fade-right") Una vez se identifica una no conformidad, la norma ISO 50001 establece que la organización debe:

    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-md-3.col-12(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema5/tema5-07.png', alt='')
      .col-md-9.col-12.mb-4.mb-md-0
        ul.lista-ul.mb-3
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Tomar acción para controlarla y corregirla.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Hacerse cargo de sus consecuencias.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Revisar la no conformidad.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Determinar las causas y el impacto de la no conformidad.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Investigar si existen no conformidades similares en otras áreas o si existe el riesgo de que ocurran.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Implementar las acciones necesarias para dar solución a la no conformidad.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Revisar si el plan de acción ejecutado da solución efectiva a la no conformidad.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Evaluar si se requiere hacer cambios al SGEn si es necesario.

            
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-down")
      .col-lg-10.col-12
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/iconos/descargar.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small En el siguiente enlace, se encuentra el documento #[i Guía con base en la norma ISO 50001:2018] publicado por la Unidad de Planeación Minero Energética (UPME) en el cual en el capítulo denominado #[strong "Mejora continua del SGE y tratamiento de no conformidades"] se encuentran algunos ejemplos de no conformidades y acciones correctivas para los sistemas de gestión de la energía. 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/2_MC_No Conformidades.pdf')" target="_blank")
                    span Ver
                    i.fas.fa-link



    Separador
    #t_5_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 5.2 Mejora continua

    .row.justify-content-center.align-items-center.mt-5.mb-5(style="background-color:#F6F6F6")
      .col-md-3.col-12(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema5/tema5-08.png', alt='')
      .col-md-9.col-12.mb-4.mb-md-0(data-aos="fade-right")
        p El concepto de mejora contínua está relacionado con el ciclo PHVA, por medio del cual todos los procesos se cumplen de una manera cíclica que permite que cada uno de los procesos y procedimientos se consoliden, se midan, se evalúen, y se ajusten de acuerdo a las necesidades de la organización y del sistema de gestión. Cuando se implementa un sistema de gestión de la energía, la organización debe mejorar de forma contínua la idoneidad, adecuación y eficacia de su sistema de gestión, con el objetivo principal de mejorar el desempeño energético.

    p(data-aos="fade-right") ¿Cómo puede la organización demostrar la mejora del desempeño energético y del SGEn?

    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-md-9.col-12.mb-4.mb-md-0
        ul.lista-ul.mb-3
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | A través de la demostración de la reducción de consumos, de acuerdo a los límites definidos para el SGEn.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | A través de la correcta gestión de los usos significativos de la energía (USE).
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Mediante el cumplimiento de las metas, objetivos y planes de acción energéticos.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | A través del comportamiento y análisis de los indicadores de desempeño energético (IDEn).
      .col-md-3.col-12(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema5/tema5-09.svg', alt='')


    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5.mt-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/tema5-10.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0.text-small El término "contínua" no implica que por ejemplo que todos los días se debe cumplir con los valores establecidos para la eficiencia energética, ya que se entiende que se pueden tener variaciones en los resultados dependiendo de las situaciones que enfrenta la organización o compañía en su día a día. Estas desviaciones se consideran normales y se pueden sustentar con las herramientas dispuestas por el sistema de gestión. Lo realmente importante es que la mejora ocurra periódicamente en el tiempo y sea una tendencia general. Es decir, si en uno o dos meses del año una organización no cumplió con su meta de reducción de consumo de energía debido a una situación no prevista, pero los demás meses del año si cumplió con sus metas y objetivos, se puede afirmar que efectivamente se demuestra la mejora contínua de su desempeño energético. Por otro lado, se espera que se tome en cuenta esta situación no prevista para ser incorporada dentro de los planes de acción del SGEn.

    p(data-aos="fade-right") La norma ISO 50001 describe algunos casos (pero no se limita a solo estos casos) donde se demuestra la mejora contínua del desempeño energético:

    .row.justify-content-center.align-items-center.mb-5.mt-4
      .col-12.col-md-10.px-0(data-aos="fade-down")
        .tabla-a.color-acento-botones 
          table
            thead
              tr
                th Caso
                th Ejemplo 
            tbody
              tr
                td Disminución del consumo de energía a lo largo del tiempo.
                td Un edificio comercial ubicado en una zona o región donde la temperatura no varía significativamente.
              tr
                td Aumento del consumo total de energía, pero el desempeño energético mejora.
                td Un caso representativo de esta situación es aquel en el que se identifica una nueva variable relevante por la inclusión de una nueva línea de producción que no tenía carga de base asociada.
              tr
                td Equipos que tienen una reducción del desempeño energético prevista según envejecen.
                td La disminución o retraso en la curva de reducción del desempeño energético debida a los controles operacionales y de mantenimiento adecuados, puede servir como demostración de un desempeño energético con mejora según los IDEn de la Organización.
              tr
                td Industrias extractivas de recursos (por ejemplo sector petróleo, gas, minas, etc.) en donde el desempeño energético tiene una tendencia a desmejorar a medida que los recursos naturales a extraer disminuyen.
                td Las instalaciones de una mina en donde ocurre que la relación entre la profundidad y la producción varían. En este caso la reducción de la tasa relativa a la LBEn puede considerarse una mejora en el desempeño energético.
            
    Separador
    #t_5_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 5.3 Eficiencia energética y uso racional de la energía


    .row.justify-content-center.align-items-center.mt-5.mb-4
      .col-md-3.col-12(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema5/tema5-11.png', alt='')
      .col-md-9.col-12.mb-4.mb-md-0(data-aos="fade-right")
        p La eficiencia energética y el uso racional de la energía son conceptos encaminados en el contexto de una organización a producir la misma cantidad de productos y servicios con menor cantidad de energía o producir mayor cantidad de productos y servicios utilizando la misma o menor cantidad energía. Lo anterior también permite la demostración de la mejora continua del desempeño energético de una organización. Para cumplir con este objetivo, existen varias tecnologías y un catálogo de buenas prácticas, las cuales asociadas a un sistema de gestión de la energía permitirán a las organizaciones mejorar su competitividad y alcanzar las metas de reducción de impactos en el medio ambiente.

    p(data-aos="fade-right") A continuación, se listan algunas de las estrategias utilizadas por las organizaciones para la eficiencia energética y el uso racional de la energía:

    .row.mt-5.mb-4
      .col-12.col-md-5
        ul.lista-ul.mb-3
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Gestión de la demanda de energía.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Diversidad energética.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Aprovechamiento de las energías renovables.
      .col-12.col-md-5
        ul.lista-ul.mb-3
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Innovación tecnológica.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Concientización y modificación de los hábitos de consumo.

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5.mt-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/tema5-12.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Con el fin de observar casos de éxito en la aplicación de lo sistemas de gestión de la energía y la ejecución de proyectos de eficiencia energética en aplicaciones de la industria colombiana, a continuación se muestran algunos de ellos realizados en el marco del Proyecto de eficiencia energética industrial en Colombia 2016 - 2019 promovido por el Ministerio de Minas y Energía, la Unidad de Planeación Minero Energética (UPME), la Organización de las Naciones Unidas para el Desarrollo Industrial (ONUDI) y el Fondo Global del Ambiente (GEF):


    .row.justify-content-center.align-items-center.mb-5.mt-4
      .col-12.col-md-10.px-0(data-aos="fade-down")
        .tabla-a.color-acento-botones 
          table
            thead
              tr
                th Estudio de caso
                th Ejemplo 
            tbody
              tr
                td Acerías Paz del Río
                td.text-center
                  a.boton.color-primario.texto-blanco(:href="obtenerLink('/downloads/3_MC_Acerias.pdf')" target="_blank")
                    span Ver
                    i.fas.fa-link
              tr
                td Alambres y Mallas S.A - ALMASA
                td.text-center
                  a.boton.color-primario.texto-blanco(:href="obtenerLink('/downloads/4_MC_Almasa.pdf')" target="_blank")
                    span Ver
                    i.fas.fa-link
              tr
                td Cerámica Italia S.A.
                td.text-center
                  a.boton.color-primario.texto-blanco(:href="obtenerLink('/downloads/5_MC_Ceramica_Italia.pdf')" target="_blank")
                    span Ver
                    i.fas.fa-link
              tr
                td Colombina S.A.
                td.text-center
                  a.boton.color-primario.texto-blanco(:href="obtenerLink('/downloads/6_MC_Colombina.pdf')" target="_blank")
                    span Ver
                    i.fas.fa-link
              tr
                td Fosfatos de Boyacá S.A.
                td.text-center
                  a.boton.color-primario.texto-blanco(:href="obtenerLink('/downloads/7_MC_Fosfatos.pdf')" target="_blank")
                    span Ver
                    i.fas.fa-link
              tr
                td Génovas Santanfereñas S.A.
                td.text-center
                  a.boton.color-primario.texto-blanco(:href="obtenerLink('/downloads/8_MC_Genovas.pdf')" target="_blank")
                    span Ver
                    i.fas.fa-link


    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-down")
      .col-lg-10.col-12
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/iconos/descargar.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small Adicionalmente se recomienda revisar el material complementario respecto a las buenas prácticas para los edificios de oficinas descritas en el documento #[strong Guía de Planes de Gestión Eficiente de la Energía en Entidades Públicas, publicado por la UPME,] en el cual se pueden determinar algunas medidas para el uso racional y eficiente de la energía para edificios de oficinas. 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/9_MC_Buenas_Practicas.pdf')" target="_blank")
                    span Ver
                    i.fas.fa-link


</template>

<script>
export default {
  name: 'Tema5',
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
