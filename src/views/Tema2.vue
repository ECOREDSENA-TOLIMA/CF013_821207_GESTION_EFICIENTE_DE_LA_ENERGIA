<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 2
      h1 Elementos de Apoyo para los SGEn

    p(data-aos="fade-right") El siguiente recurso, se encarga de mostrar cuales son los elementos que se tienen en cuenta en el sistema de gestión energética.

    .row.justify-content-center.align-items-center.mb-5 
      .col-md-5.mb-5.mb-md-0(data-aos="fade-right")
        figure 
          img(src="@/assets/curso/temas/tema2/tema2-01.svg", alt="Elementos de Apoyo para los SGEn")
      .col-md-7.mb-5.mb-md-0
        //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD.color-secundario(data-aos="fade-down")
          div.text-small(numero="1" titulo="Elementos de Apoyo para los SGEn") 
            p Los elementos de apoyo o soporte del sistema de gestión de la energía, corresponde a las actividades y procedimientos que permiten garantizar que los recursos disponibles dispuestos por la organización sean gestionados de manera efectiva para cumplir con la política energética y con lo especificado en la planificación del SGEn.
            p Las actividades y procedimientos que pertenecen a los elementos de apoyo para el SGEn son las siguientes:

          div.text-small(numero="2" titulo="Recursos para el sistema de gestión de energía") 
            p De acuerdo con la norma ISO 50001, la organización debe determinar y proveer de todos los recursos necesarios para el establecimiento, implementación, mantenimiento y mejora continua, tanto del desempeño energético como del propio SGEn.

          div.text-small(numero="3" titulo="Los tipos de recursos requeridos para la implementación de los SGEn son:") 
            p #[strong Recursos Humanos:] se refiere a la asignación de funciones y responsabilidades para las personas que trabajan en la organización, y hacen parte de las actividades para el sistema de gestión de la energía y la operación de los usos significativos de la energía. En esta clasificación se incluyen también las personas que trabajan bajo modalidad de prestación de servicios.
            p #[strong Infraestructura y recursos tecnológicos:] corresponde a los espacios físicos, herramientas, equipos para medición y registro que la organización, recursos de tipo software y redes de datos tiene disponibles la organización para las actividades correspondientes al sistema de gestión de la energía y la operación de los USE.
            p #[strong Recursos Financieros:] son aquellos relacionados con la disponibilidad presupuestal que tiene la organización para cumplir la operación, mantenimiento y mejora continua del sistema de gestión de la energía y la mejora del desempeño energético.
          
          div.text-small(numero="4" titulo="Competencia y toma de conciencia en los SGEn") 
            p Para la implementación y operación del sistema de gestión de la energía, la organización debe asegurar que las personas que trabajan en las actividades del sistema de gestión y en la operación de los usos significativos de la energía posean el nivel de competencia requerido para tal fin. Adicionalmente la organización debe garantizar que todas las personas que trabajan para la organización se encuentren conscientes de la influencia de sus actividades en el desempeño energético de la misma. A continuación se explica con mayor detalle cada uno de los ítems:
            ul.lista-ul.mb-3
              li 
                i.lista-ul__vineta
                | #[strong Competencia:] garantizar el nivel de competencia, hace referencia a lograr que las personas que trabajan para la organización y que tengan asignadas  funciones, responsabilidades y autoridades relacionadas con el sistema de gestión de la energía, los usos significativos de la energía y el desempeño energético, posean y adquieran la educación, formación, habilidades o experiencia requeridas para realizar adecuadamente dichas actividades.


    p(data-aos="fade-right") Para garantizar el nivel de competencia, se realizan los siguientes pasos:

    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-md-8.col-lg-9.col-12
        .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
          div.mt-2.col-12.d-flex.align-items-center.mb-4.mt-3.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
            div.p-0.position-relative   
              img.mb-0.position-relative(src="@/assets/curso/iconos/ico-01.svg")
            div.px-3.pe-5
              h4.mb-0 Identificación de roles
        p(data-aos="fade-right") Consiste en identificar los cargos que se relacionan con los USE, la medición y verificación del desempeño energético y las demás actividades del SGEn. Para facilitar la identificación se recomienda hacer una división dependiendo del nivel del cargo (gerencial, operacional, y soporte) y las necesidades del SGEn.
        .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
          div.mt-2.col-12.d-flex.align-items-center.mb-4.mt-3.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
            div.p-0.position-relative   
              img.mb-0.position-relative(src="@/assets/curso/iconos/ico-01.svg")
            div.px-3.pe-5
              h4.mb-0 Identificación de competencias necesarias
        p(data-aos="fade-right") Para cada cargo identificado dentro de los roles del sistema de gestión de la energía, se debe especificar el nivel de educación, formación y experiencia para llevar a cabo las responsabilidades asignadas. Como resultado de esta etapa se puede obtener un perfil para cada rol del SGEn. 
      
      .col-md-4.col-lg-3.d-none.d-md-block(data-aos="fade-down")
        figure 
          img(src="@/assets/curso/temas/tema2/tema2-02.png", alt="Identificación de roles")

    p(data-aos="fade-right") En la siguiente tabla se muestra un ejemplo de lo que puede ser un perfil para el rol del líder del equipo de gestión de la energía en una organización:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-10.titulo-sexto.color-acento-contenido.mt-3(data-aos="fade-left")
        p.titulo.pb-0.mb-0 <b>Tabla 3.</b> <i>Perfil de cargo</i>
      .col-12.col-md-10.px-0(data-aos="fade-down")
        .tabla-a.color-acento-botones 
          .tabla-b__header
            h4.mb-0 Perfil de cargo
          table
            tbody
              tr
                td.text-center(style="width: 25%") Nombre del cargo / Rol SGEn
                td Dirección o Coordinación / Líder del Equipo de Gestión de la Energía.
              tr
                td.text-center Área / Departamento
                td Equipo de Gestión de la Energía.
              tr
                td.text-center Funciones SGEn
                td 
                  ul.lista-ul.mb-3
                    li.mb-0
                      i.lista-ul__vineta
                      | Participar en las reuniones del equipo de gestión de la energía.
                    li.mb-0
                      i.lista-ul__vineta
                      | Participar en las actividades para la evaluación del desempeño energético.
                    li.mb-0
                      i.lista-ul__vineta
                      | Participar en las actividades para la evaluación del sistema de gestión de la energía.
                    li.mb-0
                      i.lista-ul__vineta
                      | Realizar y comunicar los informes para la revisión por la dirección de la compañía.
                    li.mb-0
                      i.lista-ul__vineta
                      | Coordinar las actividades del equipo de gestión de la energía.
              tr
                td.text-center Conocimientos y habilidades básicos necesarios:
                td
                  ul.lista-ul.mb-3
                    li.mb-0
                      i.lista-ul__vineta
                      |  Curso de formación en sistemas de gestión de la energía ISO 50001.
                    li.mb-0
                      i.lista-ul__vineta
                      | Conocimientos básicos de otros sistemas de gestión.
                    li.mb-0
                      i.lista-ul__vineta
                      | Conocimientos básicos en terminología energética y procesos productivos.
                    li.mb-0
                      i.lista-ul__vineta
                      | Habilidades de gestión y manejo de equipos de trabajo.
                    li 
                      i.lista-ul__vineta
                      | Habilidades para comunicación con la alta dirección.
                

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      div.mt-2.col-12.d-flex.align-items-center.mb-4.mt-3.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
        div.p-0.position-relative   
          img.mb-0.position-relative(src="@/assets/curso/iconos/ico-01.svg")
        div.px-3.pe-5
          h4.mb-0 Identificación de necesidades de formación y capacitación

    p(data-aos="fade-left") Una vez se identifican los roles y las competencias necesarias, se debe analizar cada uno de los cargos dentro de la compañía que más se ajustan a las necesidades del SGEn. Si por ejemplo el cargo de director de operaciones coincide en varios aspectos con el ejemplo anterior del líder del equipo de gestión de la energía, es posible asignar ese rol a la persona que actualmente ocupa el cargo de director de operaciones, y si llegado al caso dicha persona no posee algunos de los cursos o conocimientos requeridos, se debe registrar esto como una necesidad de formación y capacitación.
    p(data-aos="fade-left") Siguiendo los lineamientos descritos en Red Colombiana de Conocimiento en Eficiencia Energética - RECIEE. (2019), en la siguiente tabla se muestra un ejemplo del registro de necesidades de formación y capacitación:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-10.titulo-sexto.color-acento-contenido.mt-3(data-aos="fade-left")
        p.titulo.pb-0.mb-0 <b>Tabla 4.</b> <i>Identificación de necesidades de formación y capacitación</i>
      .col-12.col-md-10.px-0(data-aos="fade-down")
        .tabla-a.color-acento-botones 
          table
            thead
              tr
                th Cargo del personal en la empresa.
                th Rol para el SGEn
                th Formación Requerida
            tbody
              tr
                td Director de operaciones
                td Líder del equipo de gestión de la energía.
                td Curso de formación en sistemas de gestión de la energía ISO 50001.
              tr
                td Jefe de compras
                td Integrante del equipo de gestión de la energía.
                td Conocimientos básicos en terminología energética y procesos productivos.
              tr
                td Supervisor de Mantenimiento
                td Supervisor de los registros, medición y análisis de los IDEn.
                td
                  p.mb-0 Curso de formación en estadística básica.
                  p Curso de formación en caracterización energética.


    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-md-4.col-lg-3.d-none.d-md-block(data-aos="fade-right")
        figure 
          img(src="@/assets/curso/temas/tema2/tema2-03.png", alt="Planeación y ejecución de planes de formación y capacitación")
      .col-md-8.col-lg-9.col-12
        .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
          div.mt-2.col-12.d-flex.align-items-center.mb-4.mt-3.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
            div.p-0.position-relative   
              img.mb-0.position-relative(src="@/assets/curso/iconos/ico-01.svg")
            div.px-3.pe-5
              h4.mb-0 Planeación y ejecución de planes de formación y capacitación
        p(data-aos="fade-down") una vez identificadas las necesidades de formación y capacitación, se procede a realizar un plan para que las personas que trabajan para la organización puedan adquirir los conocimientos necesarios para cumplir con sus responsabilidades frente al SGEn. Todas los planes y actividades ejecutadas deben quedar registradas y documentadas.
        .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
          div.mt-2.col-12.d-flex.align-items-center.mb-4.mt-3.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
            div.p-0.position-relative   
              img.mb-0.position-relative(src="@/assets/curso/iconos/ico-01.svg")
            div.px-3.pe-5
              h4.mb-0 Evaluación de las competencias
        p(data-aos="fade-down") Una vez se vaya desarrollando el nivel de competencia requerido para el personal de la organización, se debe realizar la evaluación de las competencias a través de los certificados de aprobación de los cursos o a través de formularios escritos de evaluación. Los resultados de la evaluación de competencias deben quedar registradas y documentadas.
      

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
