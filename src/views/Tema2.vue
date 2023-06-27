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
      .col-12.col-md-10.px-0(data-aos="fade-down")
        .tabla-a.color-acento-botones 
          table
            thead
              tr
                th Cargo del personal en la empresa
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
      

    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-md-8.col-lg-9.col-12
        p(data-aos="fade-right") #[strong Toma de conciencia]
        p(data-aos="fade-down") Todos los integrantes y las personas que se encuentran trabajando bajo el control de la organización deben conocer las bases, el funcionamiento e implicaciones del SGEn, por lo que las responsabilidades no corresponden únicamente a los roles definidos por el SGEn. Por lo tanto, la organización debe asegurar que todas las personas tomen conciencia de los siguientes aspectos del SGEn:
        ul.lista-ul.mb-3
          li(data-aos="fade-down")
            i.fas.fa-angle-right
            | La Política Energética.
          li(data-aos="fade-down")
            i.fas.fa-angle-right
            | La contribución de su cargo en la organización para alcanzar los objetivos y metas energéticas definidos, y la mejora del desempeño energético.
          li(data-aos="fade-down")
            i.fas.fa-angle-right
            | El impacto de sus actividades y comportamiento  en el desempeño energético de la organización.
          li(data-aos="fade-down")
            i.fas.fa-angle-right
            | Las implicaciones del no cumplimiento de los requisitos del SGEn.
      .col-md-4.col-lg-3(data-aos="fade-right")
        figure 
          img(src="@/assets/curso/temas/tema2/tema2-04.svg", alt="Planeación y ejecución de planes de formación y capacitación")

    p(data-aos="fade-right") Para cumplir con lo anterior, la organización puede desarrollar las siguientes actividades.


    .row.mt-2.mb-5
      .col-md-5.col-lg-5.col-12
        ul.lista-ul.mb-3
          li(data-aos="fade-down")
            i.fas.fa-check
            | Programas de divulgación.
          li(data-aos="fade-down")
            i.fas.fa-check
            | Reuniones informativas.
          li(data-aos="fade-down")
            i.fas.fa-check
            | Paneles informativos.
      .col-md-5.col-lg-5.col-12
        ul.lista-ul.mb-3
          li(data-aos="fade-down")
            i.fas.fa-check
            | Boletines internos.
          li(data-aos="fade-down")
            i.fas.fa-check
            | Participación del personal en actividades lúdicas.
          li(data-aos="fade-down")
            i.fas.fa-check
            | Buzones de sugerencias para la mejora.

    Separador
    #t_2_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.1 Comunicación

    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-md-6.col-12(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema2/tema2-05.png', alt='')  
      .col-md-6.col-12.cajon.color--gris.p-4(data-aos="fade-right")
        p.mb-0 De acuerdo con la norma ISO 50001, la organización debe determinar las comunicaciones internas y externas que considere pertinentes para el SGEn. Las comunicaciones internas hacen referencia a toda la información que se pretende comunicar al interior de la organización y que involucra a todas las áreas de la empresa y personas que trabajan para la misma. 

    .row.justify-content-center.align-items-center.cajon.color--azul.py-2.mt-5.mb-5(data-aos="fade-down")
      .col-md-8.col-12
        p La comunicación externa hace referencia a toda la información que se pretende comunicar al exterior de la organización o a las partes interesadas de tipo externo como por ejemplo organismos reguladores, vecinos, organizaciones no gubernamentales, clientes, contratistas, inversores, etc. Cabe resaltar que la organización está en total libertad de decidir cuál información decide comunicar externamente y el registro de la decisión debe quedar documentado. 
      .col-md-4.col-12
        figure
          img(src='@/assets/curso/temas/tema2/tema2-06.svg', alt='')



    .row.justify-content-center.align-items-center.mt-4(style="background-color:#F7F4FF")
      .col-12.mt-4
        p(data-aos="fade-right") La comunicación externa hace referencia a toda la información que se pretende comunicar al exterior de la organización o a las partes interesadas de tipo externo como por ejemplo organismos reguladores, vecinos, organizaciones no gubernamentales, clientes, contratistas, inversores, etc. Cabe resaltar que la organización está en total libertad de decidir cuál información decide comunicar externamente y el registro de la decisión debe quedar documentado. 
        p(data-aos="fade-right") Para el cumplimiento de este requisito, la organización puede seguir los siguientes pasos:
      .col-md-11.col-12.mt-4(data-aos="fade-down")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img.px-4
            img(src='@/assets/curso/temas/tema2/tema2-a.svg' alt='AvatarTop')
          .tarjeta.tarjeta--custom
            .p-4
              p Definir los temas que se deben comunicar. Esta actividad comprende la determinación de los temas o puntos del sistema de gestión de la energía que se pretende comunicar internamente, y posteriormente se eligen los temas que se van a comunicar externamente.
      .col-12
        p(data-aos="fade-right") A continuación se muestran algunos ejemplos de los temas que se pueden comunicar internamente a toda la organización, teniendo en cuenta que como mínimo se deben comunicar los temas definidos en el ejercicio de la toma de conciencia:
      .col-12
        .row.mt-2.mb-5.mt-5
          .col-md-7.col-12
            ul.lista-ul.mb-3
              li(data-aos="fade-down")
                i.fas.fa-check
                | La Política Energética.
              li(data-aos="fade-down")
                i.fas.fa-check
                | Los objetivos y metas energéticas.
              li(data-aos="fade-down")
                i.fas.fa-check
                | La información sobre el uso actual de la energía y las tendencias de los consumos.
              li(data-aos="fade-down")
                i.fas.fa-check
                | Los resultados de la verificación del cumplimiento de los requisitos legales y otros requisitos.
              li(data-aos="fade-down")
                i.fas.fa-check
                | Los resultados de la medición y análisis de los indicadores de desempeño energético por área de la organización.
          .col-md-5.col-12(data-aos="fade-right")
            figure 
              img(src="@/assets/curso/temas/tema2/tema2-07.svg", alt="La Política Energética.")
      .col-12
        .row.mt-2.mb-5.mt-5
          .col-md-5.col-12(data-aos="fade-right")
            figure 
              img(src="@/assets/curso/temas/tema2/tema2-08.svg", alt="Las oportunidades de mejora para el desempeño energético.")
          .col-md-7.col-12
            ul.lista-ul.mb-3
              li(data-aos="fade-down")
                i.fas.fa-check
                | Las oportunidades de mejora para el desempeño energético.
              li(data-aos="fade-down")
                i.fas.fa-check
                | Los beneficios ambientales, económicos y sociales obtenidos por la gestión eficiente de la energía en la organización.
              li(data-aos="fade-down")
                i.fas.fa-check
                | El impacto de las actividades de cada área de la empresa  en el desempeño energético de la organización.
              li(data-aos="fade-down")
                i.fas.fa-check
                | Las implicaciones del no cumplimiento de los requisitos del sistema de gestión de la energía.
              li(data-aos="fade-down")
                i.fas.fa-check
                | El organigrama y el contacto de las personas que hacen parte del equipo de gestión de la energía.
      .col-md-11.col-12.mt-4(data-aos="fade-down")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img.px-4
            img(src='@/assets/curso/temas/tema2/tema2-b.svg' alt='AvatarTop')
          .tarjeta.tarjeta--custom
            .p-4
              p Determinar los medios de comunicación a utilizar. A través de esta actividad se establecen los medios de comunicación para cada uno de los temas elegidos. Se pueden utilizar los siguientes medios:

    
    .tarjeta--container.row.mb-4.mt-4
      .col-md.tarjeta.color-secundario.p-5(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-09.png', alt='')
        h4.text-center Para comunicación interna
        p.text-center Reuniones programadas por áreas o equipos de trabajo, correos electrónicos informativos, carteleras físicas y digitales, redes de comunicación interna corporativa, actividades o campañas de sensibilización, entre otras.

      .col-md.tarjeta.color-primario.p-5(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-10.png', alt='')
        h4.text-center Para comunicación externa
        p.text-center Página web de la organización, comunicados de prensa, publicidad y boletines periódicos, informes de responsabilidad social empresarial, eventos corporativos, entre otras.

      .col-md-11.col-12.mt-4(data-aos="fade-down")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img.px-4
            img(src='@/assets/curso/temas/tema2/tema2-c.svg' alt='AvatarTop')
          .tarjeta.tarjeta--custom
            .p-4
              p Elaboración de la matriz de comunicaciones. La matriz de comunicaciones es un documento mediante el cual se registran como mínimo cuáles son los temas a comunicar, cuándo se deben comunicar, a quién se deben comunicar, cómo se van a comunicar y quién es el responsable de la comunicación. También en este documento se pueden describir los procedimientos a seguir para el cumplimiento de las comunicaciones, y la forma en que la organización asegura que la información comunicada está actualizada y es confiable.

    p(data-aos="fade-right") En la siguiente tabla se muestra un ejemplo de lo que puede ser la matriz de comunicaciones de la organización:

    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-12.col-md-12.px-0(data-aos="fade-down")
        .tabla-a.color-acento-botones 
          table
            thead
              tr
                th Tipo de comunicación
                th Tema
                th Frecuencia de comunicación
                th ¿A quién va dirigida?
                th Medio de comunicación
                th Responsable
            tbody
              tr
                td Interna
                td Política Energética.
                td Semestral
                td Toda la compañía.
                td
                  p.mb-0 Tableros físicos de la compañía.
                  p Correo electrónico.
                td Coordinador de recursos humanos.
              tr
                td Interna
                td Impacto de las áreas en el desempeño energético.
                td Semestral
                td Toda la compañía.
                td Evento de socialización.
                td Coordinador de comunicaciones.
              tr
                td Externa
                td Política Energética.
                td Anual
                td Partes interesadas externas.
                td Página web de la compañía.
                td Coordinador de TICs. 
      
    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-md-5.col-12(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema2/tema2-11.svg', alt='') 
      .col-md-7.col-12.cajon.color--azul.p-4(data-aos="fade-right")
        p #[strong Elaboración de mecanismo de participación.] De acuerdo con la Norma ISO 50001, la organización debe establecer e implementar un proceso que permita que cualquier persona que trabaja para la organización pueda realizar aportes, comentarios o sugerencias para la mejora del sistema de gestión de la energía o la mejora del desempeño energético. La organización puede elegir la forma en que va a ejecutar este mecanismo y va a depender de los recursos disponibles. Se puede utilizar un buzón de correo electrónico para recibir la participación de las personas y en el caso en que no todas las personas tengan acceso al correo electrónico, se puede disponer de un buzón físico o una cartelera de sugerencias. 

    Separador
    #t_2_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.2 Información documentada

    .row.justify-content-center.align-items-center.mt-5.mb-5 
      .col-12(data-aos="fade-right")
        p.mb-0 La norma ISO 50001 establece la información documentada que se requiere mantener o conservar en relación al sistema de gestión de la energía. Le invitamos a visualizar el siguiente video con el fin de conocer más información. 

    figure.mt-5.mb-5(data-aos="fade-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      
    

    .row.justify-content-center.align-items-center.mb-5 
      .col-md-5.mb-5.mb-md-0(data-aos="fade-right")
        figure 
          img(src="@/assets/curso/temas/tema2/tema2-13.svg", alt="Información documentada")
      .col-md-7.mb-5.mb-md-0
        LineaTiempoD.color-secundario(data-aos="fade-down")
          div.text-small(numero="1" titulo="Procedimientos") 
            p Son documentos en donde se describen las actividades, responsables y funciones necesarias para el cumplimiento de uno o más requisitos de la norma ISO 50001. Por lo general en los procedimientos se incluye un diagrama de flujo que permite ver de forma esquemática los pasos a seguir para una mejor comprensión. Si se requiere un nivel de detalle mayor para alguna de las actividades dentro del procedimiento, normalmente se recurre a otro tipo de documentos de soporte denominados guías o instructivos. Al igual que el manual del sistema de gestión, la organización debe garantizar que las personas que trabajan para ella puedan consultarlos de forma fácil, y también que se encuentren actualizados y debidamente codificados.

          div.text-small(numero="2" titulo="Guías o instructivos") 
            p Son documentos donde se describe con un alto nivel de detalle los pasos o la metodología a llevar a cabo para una determinada tarea relacionada con el sistema de gestión de la energía. La estructura del documento puede ser similar a la utilizada en el procedimiento.

          div.text-small(numero="3" titulo="Formatos") 
            p Son documentos o plantillas creadas para el registro de la información del sistema de gestión. La diferencia entre un formato y registro, es que el formato contiene solo los encabezados o títulos de la información que se requiere. Cuando un formato es diligenciado, se convierte en un registro. Algunos ejemplos de formatos son:
            ul.lista-ul.mb-3
              li 
                i.lista-ul__vineta
                | Formato para actas de reunión.
              li 
                i.lista-ul__vineta
                | Formato para recolección de la información de las facturas de energía.
              li 
                i.lista-ul__vineta
                | Formato para el registro del valor de los Indicadores de desempeño energético.
          div.text-small(numero="4" titulo="Registros") 
            p Se denomina registros a los formatos que han sido diligenciados ya sea en forma física o de forma digital. Los registros son usados para evidenciar el cumplimiento de las actividades desarrolladas dentro del SGEn y en las auditorías internas.

          div.text-small(numero="5" titulo="Documentos auxiliares") 
            p Se denomina documentos auxiliares a la documentación adicional que se puede referenciar en el manual, procedimientos o guías y son de utilidad o interés para el sistema de gestión. Algunos ejemplos de estos documentos son las normas o documentación legal, manuales de buenas prácticas, planos, revisiones energéticas, documentos de otros sistemas de gestión, etc.

    p(data-aos="fade-right") Una vez se han definido de qué se trata la información documentada, la organización debe garantizar que se cumplan los siguientes dos procesos dentro del sistema de gestión de la energía:

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      div.mt-2.col-12.d-flex.align-items-center.mb-4.mt-3.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
        div.p-0.position-relative   
          img.mb-0.position-relative(src="@/assets/curso/iconos/ico-01.svg")
        div.px-3.pe-5
          h4.mb-0 Creación y actualización de la información documentada

    p(data-aos="fade-right") En el momento de la creación y actualización de la información documentada, la organización tiene la obligación de garantizar los siguientes aspectos:

    .row.mb-5
      .col-md-4.col-12.mb-5.mb-lg-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones
            .p-4
              h4.text-center Identificación y descripción: 
              p.text-center cada documento elaborado por la organización debe incluir como mínimo una codificación única para su identificación, los títulos y nombre del documento (por ejemplo, procedimiento, guía, formato, instructivo, etc.), fecha de elaboración, autor y versión del documento

      .col-md-4.col-12.mb-5.mb-lg-0(data-aos="fade-down")
        .tarjeta-avatar
          img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones
            .p-4
              h4.text-center El formato a utilizar: 
              p.text-center si se utiliza a través de una plataforma electrónica, a través de papel, repositorio de la red interna de la organización.

      .col-md-4.col-12.mb-5.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones
            .p-4
              h4.text-center Revisión y aprobación: 
              p.text-center cada documento debe estar aprobado por el personal autorizado y tener una fecha de vigencia.


    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      div.mt-2.col-12.d-flex.align-items-center.mb-4.mt-3.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
        div.p-0.position-relative   
          img.mb-0.position-relative(src="@/assets/curso/iconos/ico-01.svg")
        div.px-3.pe-5
          h4.mb-0 Control de la información documentada

    p(data-aos="fade-left") La organización debe crear un procedimiento que permita asegurar que la información documentada cumpla con los siguientes aspectos:

    .tarjeta--container.row.mb-4.mt-4
      .col-md.tarjeta.color-secundario.p-5(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-09.png', alt='')
        h4.text-center Disponibilidad y almacenamiento
        p.text-center La documentación debe estar disponible para su uso en cualquier momento y lugar por los usuarios del SGEn y las demás personas interesadas. Por lo general en las organizaciones los documentos del SGEn se encuentran disponibles para consulta y descarga en la intranet de la empresa, o si la empresa cuenta con los recursos económicos, se utiliza una plataforma exclusiva para tal fin. 
        p.text-center #[strong En el caso del SENA, la plataforma diseñada para tal fin se denomina Compromiso y se puede visualizar en el siguiente enlace: https://compromiso.sena.edu.co/]
      .col-md.tarjeta.color-primario.p-5(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-10.png', alt='')
        h4.text-center Protección
        p.text-center La documentación debe estar protegida a los riesgos de pérdida de confidencialidad, uso inapropiado de la información y modificaciones no autorizadas ni aprobadas. La organización debe garantizar que se realiza un control para los cambios de la documentación del SGEn.


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
