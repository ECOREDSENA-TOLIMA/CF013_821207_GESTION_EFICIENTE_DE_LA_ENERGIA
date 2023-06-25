export default {
  global: {
    componenteFormativo:
      'Planificación y mejora contínua del Sistema de Gestión de la Energía',
    descripcionCurso:
      'Como parte del ciclo PHVA, se deben considerar los procesos de planificación, evaluación y mejora contínua del sistema de gestión de la energía. En este componente se describe cada uno de los procesos y se muestran algunos ejemplos para su implementación.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Planificación de los Sistemas de Gestión de la Energía',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Acciones para abordar los riesgos y las oportunidades.',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Revisión Energética',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Indicadores de desempeño energético (IDEn)',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Líneas de Base Energética (LBEn)',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Objetivos, Metas Energéticas y Planes de Acción',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Recopilación de datos de la energía',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Elementos de Apoyo para los SGEn',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Recursos para el sistema de gestión de energía',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Competencia y toma de conciencia en los SGEn',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Comunicación',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Información Documentada',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Operación en los SGEn',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Control operacional y mantenimiento',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Actividades de diseño en los SGEn',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Compras y adquisiciones',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Evaluación del desempeño',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Seguimiento, medición, análisis y evaluación del desempeño energético y del SGEn',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Auditoría interna',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Revisión por la dirección',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Mejora en los SGEn',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'No conformidad y Acción Correctiva',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Mejora continua',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Eficiencia energética y uso racional de la energía',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Control operacional y mantenimiento.',
      referencia:
        'Red Colombiana de Conocimiento en Eficiencia Energética - RECIEE. (2019). Implementación de un Sistema de Gestión de la Energía - Guía con base en la norma ISO 50001:2018. Segunda edición. p. 83-92. Recuperado el 26 de agosto de 2021.',
      tipo:
        'Capítulo de publicación. <p>Archivo: 1_MC_Control Operacional.pdf</p>',
      link:
        'https://www1.upme.gov.co/DemandaEnergetica/EEIColombia/Guia_estructura_ISO50001.pdf',
    },
    {
      tema: 'Actividades de diseño en los SGEn.',
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2021). Reglamentos Técnicos. Recuperado el 26 de septiembre de 2021.',
      tipo: 'Página Web. <p>Reglamentos Técnicos por dependencia.</p>',
      link: 'https://www.mincit.gov.co/temas-interes/reglamentos-tecnicos',
    },
    {
      tema: 'No conformidad y Acción Correctiva',
      referencia:
        'Red Colombiana de Conocimiento en Eficiencia Energética - RECIEE. (2019). Implementación de un Sistema de Gestión de la Energía - Guía con base en la norma ISO 50001:2018. Segunda edición. p. 109-110. Recuperado el 26 de agosto de 2021.',
      tipo:
        'Capítulo de publicación. <p>Archivo: 2_MC_No Conformidades.pdf</p>',
      link:
        'https://www1.upme.gov.co/DemandaEnergetica/EEIColombia/Guia_estructura_ISO50001.pdf',
    },
    {
      tema: 'Eficiencia energética y uso racional de la energía',
      referencia:
        'Unidad de Planeación Minero Energética - UPME. (2021). Proyectos de eficiencia energética.  Recuperado el 26 de septiembre de 2021.',
      tipo: `Documentos Material complementario:
        <p>3_MC_Acerias.pdf</p>
        <p>4_MC_Almasa.pdf</p>
        <p>5_MC_Ceramica_Italia.pdf</p>
        <p><p>6_MC_Colombina.pdf</p>
        7_MC_Fosfatos.pdf</p>
        <p> 8_MC_Genovas.pdf</p>
      `,
      link:
        'https://www1.upme.gov.co/DemandayEficiencia/Paginas/Proyectos-de-eficiencia-energetica.aspx',
    },
    {
      tema: 'Eficiencia energética y uso racional de la energía.',
      referencia:
        'Unidad de Planeación Minero Energética-UPME. (2020). Guía de Planes de Gestión Eficiente de la Energía en Entidades Públicas.  p. 33-39. Recuperado el 26 de septiembre de 2021.',
      tipo: `Documento Material complementario:
        <p>9_MC_Buenas_Practicas.pdf</p>
      `,
      link:
        'https://www1.upme.gov.co/DemandayEficiencia/Documents/Guia_liviana_PGEE.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Competencia',
      significado:
        'Es la capacidad para la aplicación del conocimiento y las habilidades con el objetivo de alcanzar uno o varios resultados previstos.',
    },
    {
      termino: 'Proceso',
      significado:
        'Es el conjunto de actividades que permiten la transformación de una entrada en una salida.',
    },
    {
      termino: 'Uso de la energía',
      significado:
        'Es la aplicación o sistema en donde se consume la energía. Por ejemplo ventilación, calefacción, iluminación, transporte, cadena de producción.',
    },
  ],
  referencias: [
    {
      referencia:
        'Agencia de Sostenibilidad Energética. (2018). Guía Implementación de Sistemas de Gestión de la Energía basados en ISO 50001. Cuarta edición. ',
      link:
        'https://drive.google.com/file/d/1OBbFU1XgjCcUt4r8gt79EVubc-oLsHAY/view',
    },
    {
      referencia:
        'CONUEE (2016). Manual para la implementación de un Sistema de Gestión de la Energía. Segunda Edición. ',
      link:
        'https://www.gob.mx/cms/uploads/attachment/file/119159/Manual_SGEn_Conuee_2da_Edicion.compressed.pdf',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación. (2017). Guía Técnica Colombiana. Sistemas de gestión de la energía. Medición del desempeño energético usando líneas de base energética (LBE) e indicadores de desempeño energético (IDE). Principios generales y lineamientos.  (GTC-ISO 50006:2017).',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación. (2019). Norma Técnica Colombiana. Sistemas de gestión de la energía. Requisitos con orientación para su uso. (NTC-ISO 50001:2019).',
      link: '',
    },
    {
      referencia:
        'Red Colombiana de Conocimiento en Eficiencia Energética - RECIEE. (2019). Implementación de un Sistema de Gestión de la Energía - Guía con base en la norma ISO 50001:2018. Segunda edición. ',
      link:
        'https://www1.upme.gov.co/DemandaEnergetica/EEIColombia/Guia_estructura_ISO50001.pdf',
    },
    {
      referencia:
        'Unidad de Planeación Minero Energética-UPME. (2021). Proyectos de eficiencia energética. ',
      link:
        'https://www1.upme.gov.co/DemandayEficiencia/Paginas/Proyectos-de-eficiencia-energetica.aspx',
    },
    {
      referencia:
        'Unidad de Planeación Minero Energética-UPME. (2020). Guía de Planes de Gestión Eficiente de la Energía en Entidades Públicas. ',
      link:
        'https://www1.upme.gov.co/DemandayEficiencia/Documents/Guia_liviana_PGEE.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador web',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
