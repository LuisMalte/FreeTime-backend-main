const category = require('../../Models/category');

async function createcategorys() {
    await category.bulkCreate([
        {
            categoryId: 1,
            nombre: 'Cuidado de mascotas',
            descripcion: 'Pasear perros, cuidar mascotas en ausencia del propietario, alimentar mascotas.'
        },
        {
            categoryId: 2,
            nombre: 'Servicios de compras',
            descripcion: 'Comprar víveres en el supermercado, recoger y entregar paquetes, comprar y entregar medicamentos.'
        },
        {
            categoryId: 3,
            nombre: 'Asistencia en el hogar',
            descripcion: 'Limpieza del hogar, tareas de jardinería, organización de armarios o espacios.'
        },
        {
            categoryId: 4,
            nombre: 'Cuidado de niños',
            descripcion: 'Cuidado de niños en casa, acompañamiento en actividades extraescolares, ayuda con las tareas escolares.'
        },
        {
            categoryId: 5,
            nombre: 'Servicios de entrega',
            descripcion: 'Entrega de alimentos preparados, recogida y entrega de ropa lavada o planchada, envío de documentos o paquetes pequeños.'
        },
        {
            categoryId: 6,
            nombre: 'Asistencia técnica',
            descripcion: 'Ayuda con problemas tecnológicos (configuración de dispositivos, instalación de software, etc.), reparación básica de electrodomésticos.'
        },
        {
            categoryId: 7,
            nombre: 'Tareas administrativas',
            descripcion: 'Organización de documentos, ayuda con la contabilidad personal, asistencia en la planificación de eventos.'
        },
        {
            categoryId: 8,
            nombre: 'Servicios de transporte',
            descripcion: 'Recogida y entrega de personas en lugares específicos, servicios de chófer para eventos o salidas nocturnas.'
        },
        {
            categoryId: 9,
            nombre: 'Apoyo en actividades físicas',
            descripcion: 'Acompañamiento para hacer ejercicio, clases particulares de algún deporte o actividad física.'
        },
        {
            categoryId: 10,
            nombre: 'Servicios de cuidado personal',
            descripcion: 'Acompañamiento para citas médicas, ayuda en la preparación de comidas especiales (dieta, comida para eventos, etc.), asistencia en la compra de ropa o accesorios.'
        },
        {
            categoryId: 11,
            nombre: 'Asistencia educativa',
            descripcion: 'Clases particulares de matemáticas, idiomas, música, etc., ayuda con la preparación para exámenes, tutoría en habilidades específicas (programación, diseño gráfico, etc.).'
        },
        {
            categoryId: 12,
            nombre: 'Servicios de belleza',
            descripcion: 'Peluquería a domicilio, manicura y pedicura, maquillaje para eventos especiales.'
        },
        {
            categoryId: 13,
            nombre: 'Servicios de entretenimiento',
            descripcion: 'Organización de eventos sociales, acompañamiento a conciertos, teatro, cine, etc., reservas en restaurantes o locales de ocio.'
        },
        {
            categoryId: 14,
            nombre: 'Apoyo emocional',
            descripcion: 'Acompañamiento para paseos o conversaciones, escucha activa y apoyo emocional, ayuda para la gestión del estrés o la ansiedad.'
        },
        {
            categoryId: 15,
            nombre: 'Tareas de reparación y mantenimiento',
            descripcion: 'Reparación de muebles, instalación de estanterías, cortinas, lámparas, etc., mantenimiento básico de equipos electrónicos.'
        },
        {
            categoryId: 16,
            nombre: 'Asistencia en eventos especiales',
            descripcion: 'Organización y decoración de fiestas, servicio de camarero o bartender para eventos, fotografía o videografía para eventos.'
        },
        {
            categoryId: 17,
            nombre: 'Servicios de traducción e interpretación',
            descripcion: 'Traducción de documentos, interpretación en reuniones o eventos, clases particulares de idiomas.'
        },
        {
            categoryId: 18,
            nombre: 'Asistencia para personas mayores',
            descripcion: 'Acompañamiento para citas médicas, compañía para paseos o actividades recreativas, ayuda en la realización de tareas domésticas.'
        },
        {
            categoryId: 19,
            nombre: 'Servicios de asesoramiento',
            descripcion: 'Asesoramiento legal básico, asesoramiento financiero personal, consultas de bienestar y estilo de vida saludable.'
        },
        {
            categoryId: 20,
            nombre: 'Servicios creativos',
            descripcion: 'Diseño gráfico para redes sociales o material promocional, creación de contenido escrito (redacción de artículos, corrección de textos, etc.), sesiones de fotografía profesional.'
        }
    ], { ignoreDuplicates: true });

    console.log("categorys were successfully created");
}

module.exports = {
    createcategorys
};
