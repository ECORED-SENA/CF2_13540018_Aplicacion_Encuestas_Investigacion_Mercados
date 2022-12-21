export default {
  global: {
    componenteFormativo: 'Cumplimiento de la cuota de encuestas',
    descripcionCurso:
      'La actividad enfocada a dar cumplimiento a la cuota de encuestas hace referencia al número de encuestas que deben realizarse para asegurar la cantidad de instrumentos recolectados que se definieron y que debían garantizarse en la planeación de la investigación de mercados. Ahora bien, el desarrollo efectivo de dicha actividad requiere principalmente de conceptos estadísticos y éticos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Buenas prácticas en investigación de mercados',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'ISO 20252',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Códigos de ética',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Muestreo',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Bases de datos',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Validación y plan de acción de encuestas',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
  referencias: [
    {
      referencia:
        'ISO 20252. (2019). Market, opinion and social research, including insights and data analytics – Vocabulary and service requirements.  International standard ISO 20252. ',
      link: 'https://www.sis.se/api/document/preview/80009934/',
    },
  ],
  glosario: [
    {
      termino: 'Bases de datos',
      significado:
        'Son estructuras diseñadas principalmente para recopilar y alojar información de diferentes tipos.',
    },
    {
      termino: 'Cliente',
      significado:
        'Es el centro de la estrategia de la empresa. Representa a la persona o empresa que adquiere los bienes y servicios.',
    },
    {
      termino: 'Código de ética',
      significado:
        'Son documentos que implementan las organizaciones como buenas prácticas, asociadas al comportamiento deseable de sus colaboradores, por tanto, establecen un marco referente de conductas y valores esperados.',
    },
    {
      termino: 'Cuestionario',
      significado:
        'Es el instrumento de investigación asociado a la técnica de la encuesta. Es un documento compuesto por preguntas que dan respuesta a los objetivos propuestos en el estudio de mercados.',
    },
    {
      termino: 'Empatía',
      significado:
        'Principio básico necesario para la interacción con clientes, consiste en ponerse en el lugar del otro, sin perder la objetividad.',
    },
    {
      termino: 'Encuesta',
      significado:
        'Técnica de investigación de mercados, utilizada en la metodología cuantitativa. ',
    },
    {
      termino: 'Muestra',
      significado:
        'Es el resultado que se obtiene al aplicar el proceso estadístico de muestreo. La muestra indica cuál es el total de encuestas que deben realizarse en una investigación de mercados. Suele denotarse por la letra “n”.',
    },
    {
      termino: 'Población',
      significado:
        'Es el conjunto de personas/empresas que cumplen con la variable de interés para un estudio de mercados.',
    },
    {
      termino: '<i>Software</i>',
      significado:
        'Conjunto de programas que permiten a la computadora realizar algunas tareas.',
    },
    {
      termino: 'Validar',
      significado:
        'Es un proceso de verificación sobre una actividad o tarea, en la cual el validador (sujeto que realiza la acción) informa si se cumple o no con lo esperado.',
    },
  ],
  complementario: [
    {
      tema: 'Buenas prácticas en investigación de mercados',
      referencia:
        'Bustos, F. (1984). Elaboración y ejecución de proyectos de investigación. SENA. ',
      tipo: 'Guía de capacitación',
      link: 'https://repositorio.sena.edu.co/handle/11404/4641      ',
    },
    {
      tema: 'ISO 20252',
      referencia:
        'ISO 20252. (2019). Market, opinion and social research, including insights and data analytics – Vocabulary and service requirements.  International standard ISO 20252. ',
      tipo: 'Norma técnica',
      link: 'https://www.sis.se/api/document/preview/80009934/',
    },
    {
      tema: 'Muestreo',
      referencia:
        'Otzen, T. y Manterola, T. (2017). Técnicas de muestreo sobre una población a estudio. Int. J. Morphol, 35(1), p. 227-232. ',
      tipo: 'Artículo',
      link: 'https://scielo.conicyt.cl/pdf/ijmorphol/v35n1/art37.pdf',
    },
    {
      tema: 'Bases de datos',
      referencia:
        'GraphEverywhere. (2022). Tipos de bases de datos. Clasificación por contenido y modelo. GraphEverywhere. ',
      tipo: 'Artículo',
      link:
        'https://www.grapheverywhere.com/tipos-bases-de-datos-clasificacion/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Diana Carolina Jaramillo Rojas',
        cargo: 'Experta temática',
        centro: 'Centro de Comercio y Servicios Regional Cauca',
      },
      {
        nombre: 'Miroslava González Hernández',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios Norte de Santander Regional Norte de Santander',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de estilo',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },

      {
        nombre: ['Anllelo Andres Reina Montañez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ['Daniel Polanco'],
        cargo: 'Validación Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sergio Mauricio Valencia Martinez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello',
        cargo: 'Validación Maquetación',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Luis Gabriel Urueta',
        cargo: 'Actividades didácticas',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Eugenia Mejía López',
        cargo: 'Validación de contenido        ',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Miguel Guerrero Gutiérrez',
        cargo: 'Ilustración',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Lina Marcela Peréz Manchego',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaimes',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
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
