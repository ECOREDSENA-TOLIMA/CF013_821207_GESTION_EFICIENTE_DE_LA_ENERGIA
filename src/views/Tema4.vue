<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 4
      h1 Evaluación del desempeño

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/tema4-01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La Norma ISO 50001 establece una serie de pasos para que pueda llevarse a cabo una adecuada evaluación que permita determinar la forma en que se desempeña, la organización en términos energéticos (desempeño energético) y el propio SGEn implementado. 


    Separador
    #t_4_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 4.1 Seguimiento, medición, análisis y evaluación del desempeño energético y del SGEn


    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-12.col-lg-9
        p Este proceso del SGEn se encuentra relacionado directamente a los procesos para el control operacional y recolección de datos de la energía, debido a que para poder comprobar que una determinada actividad o procedimiento se está llevando a cabo de forma adecuada y de acuerdo con lo previsto, se deben ejecutar las actividades de medición y seguimiento. El análisis y la evaluación se realiza comparando los resultados obtenidos en los IDEn con sus respectivas líneas de base energéticas (LBEn) y adicionalmente mediante comparaciones regulares entre el consumo energético real y el esperado.
        p Para la evaluación del desempeño energético y del SGEn la organización debe seguir los siguientes pasos:
      .col-md-4.col-12.col-lg-3
        figure
          img(src='@/assets/curso/temas/tema4/tema4-02.png', alt='')


    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      div.mt-2.col-12.d-flex.align-items-center.mb-4.mt-3.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
        div.p-0.position-relative   
          img.mb-0.position-relative(src="@/assets/curso/iconos/ico-01.svg")
        div.px-3.pe-5
          h4.mb-0 PASO 1

    p(data-aos="fade-right") Determinar las actividades y procesos que requieren ser medidos, analizados y evaluados. Como mínimo se deben medir, hacer seguimiento y evaluación a las siguientes características clave:


    .row.justify-content-center.align-items-center.mb-4.mt-4
      .col-md-4.col-12.col-lg-3(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema4/tema4-03.svg', alt='')
      .col-md-8.col-12.col-lg-9
        ul.lista-ul.mb-3
          li(data-aos="fade-down")
            i.fas.fa-angle-right
            | La eficacia de los planes de acción que fueron definidos para cumplir con los objetivos y las metas energéticas. Por ejemplo, evaluar el cumplimiento del cronograma, los recursos, los impactos en el desempeño energético y los usos significativos de la energía.
          li(data-aos="fade-down") 
            i.fas.fa-angle-right
            | La evaluación de la mejora en el desempeño energético mediante la comparación de los valores de cada indicador de desempeño energético (IDEn) con su respectiva línea de base energética (LBEn), incluyendo el análisis de las posibles causas de las desviaciones que se presenten, y el plan de acción para su corrección.
          li(data-aos="fade-down") 
            i.fas.fa-angle-right
            | Seguimiento al comportamiento energético de los usos significativos de la energía (USE) y a las variables definidas dentro de la operación y mantenimiento de los mismos, incluyendo el análisis de las posibles causas de las desviaciones que se presenten y el plan de acción para su corrección.
          li(data-aos="fade-down") 
            i.fas.fa-angle-right
            | La comparación entre el consumo de energía real y el consumo de energía esperado, analizando las posibles causas de las desviaciones que se presenten y el plan de acción para su corrección.


    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      div.mt-2.col-12.d-flex.align-items-center.mb-4.mt-3.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
        div.p-0.position-relative   
          img.mb-0.position-relative(src="@/assets/curso/iconos/ico-01.svg")
        div.px-3.pe-5
          h4.mb-0 PASO 2

    .row.justify-content-center.align-items-center.mb-4
      .col-md-8.col-12.col-lg-9
        p(data-aos="fade-right") Determinar los métodos para el seguimiento, medición, análisis y evaluación de cada una de las actividades y procesos definidos en el apartado anterior. Lo anterior incluye la definición de:
        ul.lista-ul.mb-3
          li(data-aos="fade-down")
            i.fas.fa-angle-right
            | ¿Con qué frecuencia se debe realizar la medición y el seguimiento?
          li(data-aos="fade-down")
            i.fas.fa-angle-right
            | ¿En qué momento se debe analizar y evaluar los registros obtenidos de la medición y el seguimiento?
      .col-md-4.col-12.col-lg-3(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema4/tema4-04.svg', alt='')



    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      div.mt-2.col-12.d-flex.align-items-center.mb-4.mt-3.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
        div.p-0.position-relative   
          img.mb-0.position-relative(src="@/assets/curso/iconos/ico-01.svg")
        div.px-3.pe-5
          h4.mb-0 PASO 3

    p(data-aos="fade-right") Realizar la evaluación del cumplimiento de los requisitos legales y otros requisitos. La organización debe tener un procedimiento para la evaluación del cumplimiento de los requisitos legales y otros requisitos relacionados con el desempeño energético, el consumo y uso de la energía y el SGEn . Dicho procedimiento debe indicar la metodología de evaluación de los requisitos y la frecuencia en que se realizará dicha evaluación. La información resultante de la evaluación de los requisitos legales y otros requisitos debe quedar debidamente documentada.

    .row.justify-content-center.align-items-center.mb-5.mt-4
      .col-12.col-md-12.px-0(data-aos="fade-down")
        .tabla-b.color-acento-contenido 
          .tabla-b__header
            h4.mb-0 MATRIZ DE REQUISITOS LEGALES Y OTROS REQUISITOS
          table
            tbody
              tr
                th No.
                th Requisito
                th Nombre del Requisito
                th Tema
                th Emisor / Parte interesada
                th ¿Aplica para el SGEn?
                th Forma de Cumplimiento
                th Responsable
                th Frecuencia / Forma de Revisión
              tr
                td 1
                td Reglamento Técnico de Etiquetado RETIQ.
                td Numeral 12.1.1.2.1. Eficiencias mínimas para comercialización.
                td Motores eléctricos trifásicos de inducción.
                td Ministerio de Minas y Energía.
                td Si. Obligatorio.
                td Instructivo compra de motores eléctricos.
                td Departamento de Compras.
                td Anual / Verificación con responsables
              tr
                td 2
                td Ley 1955 de 2019.
                td Artículo 292. Realización de auditorías energéticas en edificios de administraciones públicas.
                td Gestión de la Energía.
                td Congreso de la República.
                td Si. Obligatorio por pertenecer al sector público.
                td Resultados del Informe de Revisión Energética (Auditoría Energética).
                td Departamento de Operaciones.
                td Anual / Verificación con responsables.

    p(data-aos="fade-right") De acuerdo al anterior ejemplo, para demostrar el cumplimiento de los requisitos legales se puede realizar un registro como por ejemplo el mostrado en la siguiente tabla:

    .row.justify-content-center.align-items-center.mb-5.mt-4
      .col-12.col-md-12.px-0(data-aos="fade-down")
        .tabla-b.color-acento-contenido 
          .tabla-b__header
            h4.mb-0 MATRIZ DE REQUISITOS LEGALES Y OTROS REQUISITOS
          table
            tbody
              tr
                th No.
                th Requisito
                th Tema
                th Frecuencia / Forma de Revisión
                th Forma de Cumplimiento
                th Fecha del seguimiento / Evaluación
                th Cumple (SI / NO)
                th Evidencia
                th Personal entrevistado
              tr
                td 1
                td Reglamento Técnico de Etiquetado RETIQ. Numeral 12.1.1.2. Eficiencias mínimas para comercialización.
                td Motores eléctricos trifásicos de inducción.
                td Anual / Verificación con responsables.
                td Instructivo compra de motores eléctricos.
                td Enero 21 de 2022.
                td SI
                td Se incluyen especificaciones de clasificación de motores con eficiencia IE3 Premium en órdenes de compra No. 5432 y No. 6545. Motores eléctricos trifásicos.
                td Jefe de Compras. / Ver acta de reunión.
              tr
                td 2
                td Ley 1955 de 2019. Artículo 292. Realización de auditorías energéticas en edificios de administraciones públicas.
                td Gestión de la Energía.
                td Anual / Verificación con responsables.
                td Resultados del Informe de Revisión Energética (Auditoría Energética).
                td Diciembre 15 de 2021.
                td SI
                td Se evidencia informe de Diagnóstico Energético que cumple con especificaciones de auditoría energética. La fecha de realización del diagnóstico fue el 1 de junio de 2021 y a la fecha no ha existido cambios significativos en el edificio. Por lo tanto el diagnóstico energético está aún vigente.
                td Jefe de Operaciones / Ver correo electrónico.

    Separador
    #t_4_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 4.2 Auditoría interna

    p(data-aos="fade-right") La auditoría es un medio por el cual  la organización puede conocer todos sus procesos a fondo, a continuación explore el siguiente recurso y descubra todo lo relacionado a la auditoría interna.

    .row.justify-content-center.align-items-center.mb-4.mt-5.p-2(style="background-color:#F7F4FF")
      .col-md-4.col-12.col-lg-3(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema4/tema4-05.svg', alt='')
      .col-md-8.col-12.col-lg-9(data-aos="fade-left")
        p De acuerdo con Red Colombiana de Conocimiento en Eficiencia Energética - RECIEE (2019), las auditorías internas son un proceso sistemático, planificado, independiente y documentado, para obtener evidencias del cumplimiento de requisitos, políticas o procedimientos establecidos por la organización. 
        p El objetivo principal de las auditorías internas es determinar el nivel de cumplimiento y desempeño del SGEn, y evidenciar de una manera imparcial y objetiva su efectividad frente a los objetivos y metas energéticas planteadas por la organización.
        p Las principales características del proceso de auditorías internas a nivel general son:

    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="fade-down")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Sistemático
            p Se debe realizar bajo una metodología establecida, que permita una ágil ejecución y estandarizar cada uno de los pasos para poder ser comparada con los resultados de otras auditorías realizadas en periodos anteriores. En las empresas que tienen ya implementado un sistema de gestión como por ejemplo el de sistema de gestión de la calidad, se puede seguir el mismo procedimiento definido para la realización de las auditorías internas. En caso que no exista algún procedimiento previo de auditoría interna, se pueden utilizar los lineamientos definidos por la guía técnica Colombiana GTC ISO 19011.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-06.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Planificado
            p Las auditorías internas deben estar planificadas con el tiempo necesario de tal forma que permita al auditor planificar el plan de auditoría y comunicar a las personas que trabajan para la organización el cronograma de realización.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-07.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Independiente
            p El equipo auditor seleccionado debe ser objetivo e imparcial, por lo que no debe presentar relación con las áreas auditadas. Es decir, no se debe permitir que el auditor interno designado haya participado en algunas de las actividades o tareas para la planificación, implementación, operación y evaluación del sistema de gestión de la energía a auditar. Las auditorías internas pueden ser realizadas por los empleados de la empresa, o por personal externo seleccionadas por la empresa contratados por la misma.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-08.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Documentado
            p Durante todo el proceso de la auditoría interna se deben disponer de los registros relacionados a los hallazgos, evidencias recolectadas y las áreas verificadas.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-09.png', alt='')

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/tema4-10.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 #[h4 Importante]
          br
          | No se debe confundir el proceso de auditoría interna al sistema de gestión de la energía con la Auditoría o Revisión Energética a las instalaciones o procesos de la organización. Son procesos y procedimientos completamente diferentes, con objetivos y salidas distintas. 

    p(data-aos="fade-right") De acuerdo con la norma ISO 50001, los resultados de la realización de las auditorías internas al sistema de gestión de la energía deben permitir determinar lo siguiente:


    .row.justify-content-center.align-items-center.mt-5
      .col-md-9.col-12.mb-4.mb-md-0
        ul.lista-ul.mb-3
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | El cumplimiento de la organización con la mejora en el desempeño energético.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | El cumplimiento de los requisitos propios de la organización frente a lo definido para su SGEn.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | El cumplimiento de la Política Energética, los objetivos y metas energéticas.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | El cumplimiento de los requisitos de la norma ISO 50001.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | La eficacia y la correcta operación y mantenimiento del SGEn.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | El cumplimiento con los requisitos legales pertinentes y con otros requisitos que la Organización suscriba dentro del SGEn.
      .col-md-3.col-12(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema4/tema4-11.svg', alt='')

    p.mt-4(data-aos="fade-right") Los resultados principales de la auditoría interna al SGEn son los siguientes:

    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-md-3.col-12(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema4/tema4-12.png', alt='')
      .col-md-9.col-12.mb-4.mb-md-0
        ul.lista-ul.mb-3
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Detección y registro de No Conformidades y desviaciones, para que posteriormente la organización les de solución oportuna y efectiva mediante la ejecución de un sistema de acciones correctivas.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Identificación de oportunidades de mejora en el SGEn.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Identificación de fortalezas de la organización frente al SGEn.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Preparación para una posterior auditoría de otorgamiento de la certificación del SGEn.

    p.mt-4(data-aos="fade-right") Así mismo, para cumplir con los requisitos de los sistemas de gestión de la energía, la organización debe:

    .row.justify-content-center.align-items-center.mt-5
      .col-md-9.col-12.mb-4.mb-md-0
        ul.lista-ul.mb-3
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Determinar, establecer, implementar y mantener  un programa de auditorías internas en donde se incluyan los métodos, responsabilidades y requisitos para su realización. Adicionalmente debe considerar los resultados de las auditorías previas.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Determinar los criterios y alcance para cada auditoría interna al SGEn.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Realizar la selección de los auditores de tal forma que se pueda garantizar la competencia del auditor y la objetividad e imparcialidad del proceso.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Garantizar que los resultados de la auditoría interna se comuniquen a los niveles de dirección requeridos y definidos.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Garantizar que toda la información y documentación resultante del proceso de auditoría interna sea conservada.
      .col-md-3.col-12(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema4/tema4-13.png', alt='')

    Separador
    #t_4_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 4.2 Revisión por la dirección

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/tema4-14.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La revisión por la dirección, es una actividad periódica en donde la alta dirección de la organización analiza los temas relacionados con la política energética por medio de la revisión del cumplimiento de los objetivos y metas del SGEn, y los resultados de las auditorías internas con el objetivo final de determinar la idoneidad, eficacia y alineación del SGEn con los lineamientos estratégicos de la organización.

    p(data-aos="fade-right") De acuerdo con la Norma ISO 50001, los temas o asuntos que se deben analizar como mínimo en la revisión por la dirección son los siguientes:


    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-md-9.col-12.mb-4.mb-md-0
        ul.lista-ul.mb-3
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | El estado de los planes de acción resultantes de revisiones por la dirección realizadas en periodos pasados.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Determinar si se han presentado cambios en el contexto de la organización, cuestiones internas o externas, o riesgos asociados al SGEn.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Revisión de las no conformidades y acciones correctivas resultantes del proceso de auditoría interna y otros procesos.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Revisión de los resultados del desempeño energético de la organización.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Resultados de las auditorías internas.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Resultados de la evaluación del cumplimiento de requisitos legales y otros requisitos.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Las oportunidades detectadas para la mejora continua del desempeño energético y del SGEn.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | La Política Energética.
      .col-md-3.col-12(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema4/tema4-15.svg', alt='')


    p(data-aos="fade-right") Entradas relativas al desempeño energético para la revisión por la dirección:

    .row.justify-content-center.align-items-center.mt-5.mb-4
      .col-md-3.col-12(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema4/tema4-15.png', alt='')
      .col-md-9.col-12.mb-4.mb-md-0
        p Es muy importante conocer cuál es la información que se debe brindar a la alta dirección para que pueda realizar la revisión. La siguientes son las entradas mínimas relativas al desempeño energético que se deben incluir:
        ul.lista-ul.mb-3
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            |	El nivel o grado de cumplimiento de cada uno de los objetivos y las metas energéticas.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            |	El resultado del desempeño energético y los resultados de las mejoras en el desempeño energético implementadas. Se deben incluir los resultados del seguimiento y medición de los IDEn, y los USE.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | El estado de cada uno de los planes de acción determinados dentro del SGEn.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Barreras, inconvenientes y situaciones a solucionar presentadas durante la implementación y operación del SGEn. 


    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      div.mt-2.col-12.d-flex.align-items-center.mb-4.mt-3.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
        div.p-0.position-relative   
          img.mb-0.position-relative(src="@/assets/curso/iconos/ico-01.svg")
        div.px-3.pe-5
          h4.mb-0 Salidas de la revisión por la dirección

    p(data-aos="fade-right") Las salidas de la revisión por la dirección, hace referencia a las decisiones tomadas para la mejora continua del SGEn y las necesidades de cambios (si aplica) de acuerdo al contexto de la organización. Las salidas mínimas de la revisión por la dirección son:

    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-md-9.col-12.mb-4.mb-md-0
        ul.lista-ul.mb-3
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Confirmación de la idoneidad y alienación de la política energética con los objetivos estratégicos de la organización.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Comentarios acerca del desempeño energético (IDEn y LBEn).
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Resultados del análisis de los objetivos, metas energéticas y planes de acción, incluyendo las acciones a realizar en caso de que no se hayan alcanzado.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Las oportunidades para la mejora de la integración del SGEn con los procesos del negocio.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Plan para la asignación de recursos.
          li(data-aos="fade-down")
            i.fas.fa-caret-right
            | Plan para la mejora de la competencia, toma de conciencia y comunicación.
      .col-md-3.col-12(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema4/tema4-16.png', alt='')


</template>

<script>
export default {
  name: 'Tema4',
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
