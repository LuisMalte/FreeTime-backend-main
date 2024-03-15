const category = require('../../Models/category');

function createCategories(){
    category.bulkCreate(
        [
            {
                categoryId: 1,
                categoryName: 'Cuidado de mascotas',
                categoryDescription: 'Pasear perros, cuidar mascotas en ausencia del propietario, alimentar mascotas.'
             },
            // {
            //     categoryId: 2,
            //     categoryName: 'Servicios de compras',
            //     categoryDescription: 'Comprar víveres en el supermercado, recoger y entregar paquetes, comprar y entregar medicamentos.'
            // },
            // {
            //     categoryId: 3,
            //     categoryName: 'Asistencia en el hogar',
            //     categoryDescription: 'Limpieza del hogar, tareas de jardinería, organización de armarios o espacios.'
            // },
            // {
            //     categoryId: 4,
            //     categoryName: 'Cuidado de niños',
            //     categoryDescription: 'Cuidado de niños en casa, acompañamiento en actividades extraescolares, ayuda con las tareas escolares.'
            // },
            // {
            //     categoryId: 5,
            //     categoryName: 'Servicios de entrega',
            //     categoryDescription: 'Entrega de alimentos preparados, recogida y entrega de ropa lavada o planchada, envío de documentos o paquetes pequeños.'
            // },
            // {
            //     categoryId: 6,
            //     categoryName: 'Asistencia técnica',
            //     categoryDescription: 'Ayuda con problemas tecnológicos (configuración de dispositivos, instalación de software, etc.), reparación básica de electrodomésticos.'
            // },
            // {
            //     categoryId: 7,
            //     categoryName: 'Tareas administrativas',
            //     categoryDescription: 'Organización de documentos, ayuda con la contabilidad personal, asistencia en la planificación de eventos.'
            // },
            // {
            //     categoryId: 8,
            //     categoryName: 'Servicios de transporte',
            //     categoryDescription: 'Recogida y entrega de personas en lugares específicos, servicios de chófer para eventos o salidas nocturnas.'
            // },
            // {
            //     categoryId: 9,
            //     categoryName: 'Apoyo en actividades físicas',
            //     categoryDescription: 'Acompañamiento para hacer ejercicio, clases particulares de algún deporte o actividad física.'
            // },
            // {
            //     categoryId: 10,
            //     categoryName: 'Servicios de cuidado personal',
            //     categoryDescription: 'Acompañamiento para citas médicas, ayuda en la preparación de comidas especiales (dieta, comida para eventos, etc.), asistencia en la compra de ropa o accesorios.'
            // },
            // {
            //     categoryId: 11,
            //     categoryName: 'Asistencia educativa',
            //     categoryDescription: 'Clases particulares de matemáticas, idiomas, música, etc., ayuda con la preparación para exámenes, tutoría en habilidades específicas (programación, diseño gráfico, etc.).'
            // },
            // {
            //     categoryId: 12,
            //     categoryName: 'Servicios de belleza',
            //     categoryDescription: 'Peluquería a domicilio, manicura y pedicura, maquillaje para eventos especiales.'
            // },
            // {
            //     categoryId: 13,
            //     categoryName: 'Servicios de entretenimiento',
            //     categoryDescription: 'Organización de eventos sociales, acompañamiento a conciertos, teatro, cine, etc., reservas en restaurantes o locales de ocio.'
            // },
            // {
            //     categoryId: 14,
            //     categoryName: 'Apoyo emocional',
            //     categoryDescription: 'Acompañamiento para paseos o conversaciones, escucha activa y apoyo emocional, ayuda para la gestión del estrés o la ansiedad.'
            // },
            // {
            //     categoryId: 15,
            //     categoryName: 'Tareas de reparación y mantenimiento',
            //     categoryDescription: 'Reparación de muebles, instalación de estanterías, cortinas, lámparas, etc., mantenimiento básico de equipos electrónicos.'
            // },
            // {
            //     categoryId: 16,
            //     categoryName: 'Asistencia en eventos especiales',
            //     categoryDescription: 'Organización y decoración de fiestas, servicio de camarero o bartender para eventos, fotografía o videografía para eventos.'
            // },
            // {
            //     categoryId: 17,
            //     categoryName: 'Servicios de traducción e interpretación',
            //     categoryDescription: 'Traducción de documentos, interpretación en reuniones o eventos, clases particulares de idiomas.'
            // },
            // {
            //     categoryId: 18,
            //     categoryName: 'Asistencia para personas mayores',
            //     categoryDescription: 'Acompañamiento para citas médicas, compañía para paseos o actividades recreativas, ayuda en la realización de tareas domésticas.'
            // },
            // {
            //     categoryId: 19,
            //     categoryName: 'Servicios de asesoramiento',
            //     categoryDescription: 'Asesoramiento legal básico, asesoramiento financiero personal, consultas de bienestar y estilo de vida saludable.'
            // },
            // {
            //     categoryId: 20,
            //     categoryName: 'Servicios creativos',
            //     categoryDescription: 'Diseño gráfico para redes sociales o material promocional, creación de contenido escrito (redacción de artículos, corrección de textos, etc.), sesiones de fotografía profesional.'
            // }
        ],
        {
            ignoreDuplicates: true,
        }
    ).then(() => console.log("Category were successfully created"));
}

module.exports = {
   createCategories
};