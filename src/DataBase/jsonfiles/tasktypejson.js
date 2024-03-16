const taskType = require('../../Models/tasktype');

function createTaskTypes(){
    taskType.bulkCreate(
        [
           
            {
                "taskTypeId": "1T",
                "taskTypeName": "Cuidado de mascotas",
                "taskTypeDescription": "Pasear perros, cuidar mascotas en ausencia del propietario, alimentar mascotas."

            },
            {
                   "taskTypeId": "2T",
                   "taskTypeName": "Servicios de compras",
                   "taskTypeDescription": "Comprar víveres en el supermercado, recoger y entregar paquetes, comprar y entregar medicamentos."
            },
            {
                   "taskTypeId": "3T",
                   "taskTypeName": "Asistencia en el hogar",
                   "taskTypeDescription": "Limpieza del hogar, tareas de jardinería, organización de armarios o espacios."
            },
            {
                "taskTypeId": "4T",
                "taskTypeName": "Cuidado de niños",
                "taskTypeDescription": "Cuidado de niños en casa, acompañamiento en actividades extraescolares, ayuda con las tareas escolares."
            },
            {
                "taskTypeId": "5T",
                "taskTypeName": "Servicios de entrega",
                "taskTypeDescription": "Entrega de alimentos preparados, recogida y entrega de ropa lavada o planchada, envío de documentos o paquetes pequeños."
            },

            {
                "taskTypeId": "6T",
                "taskTypeName": "Asistencia técnica",
                "taskTypeDescription": "Ayuda con problemas tecnológicos (configuración de dispositivos, instalación de software, etc.), reparación básica de electrodomésticos."
            },
            {
                "taskTypeId": "7T",
                "taskTypeName": "Tareas administrativas",
                "taskTypeDescription": "Organización de documentos, ayuda con la contabilidad personal, asistencia en la planificación de eventos."
            },
            {
                "taskTypeId": "8T",
                "taskTypeName": "Servicios de transporte",
                "taskTypeDescription": "Recogida y entrega de personas en lugares específicos, servicios de chófer para eventos o salidas nocturnas."
            },
            {
                "taskTypeId": "9T",
                "taskTypeName": "Apoyo en actividades físicas",
                "taskTypeDescription": "Acompañamiento para hacer ejercicio, clases particulares de algún deporte o actividad física."
            },{
                "taskTypeId": "10T",
                "taskTypeName": "Servicios de cuidado personal",
                "taskTypeDescription": "Acompañamiento para citas médicas, ayuda en la preparación de comidas especiales (dieta, comida para eventos, etc.), asistencia en la compra de ropa o accesorios."
            },
            {
                "taskTypeId": "11T",
                "taskTypeName": "Asistencia educativa",
                "taskTypeDescription": "Clases particulares de matemáticas, idiomas, música, etc., ayuda con la preparación para exámenes, tutoría en habilidades específicas (programación, diseño gráfico, etc.)."
            },
            {
                "taskTypeId": "12T",
                "taskTypeName": "Servicios de belleza",
                "taskTypeDescription": "Peluquería a domicilio, manicura y pedicura, maquillaje para eventos especiales."
            },
            {
                "taskTypeId": "13T",
                "taskTypeName": "Servicios de entretenimiento",
                "taskTypeDescription": "Organización de eventos sociales, acompañamiento a conciertos, teatro, cine, etc., reservas en restaurantes o locales de ocio."
            },
            {
                "taskTypeId": "14T",
                "taskTypeName": "Apoyo emocional",
                "taskTypeDescription": "Acompañamiento para paseos o conversaciones, escucha activa y apoyo emocional, ayuda para la gestión del estrés o la ansiedad."
            },
            {
                "taskTypeId": "15T",
                "taskTypeName": "Tareas de reparación y mantenimiento",
                "taskTypeDescription": "Reparación de muebles, instalación de estanterías, cortinas, lámparas, etc., mantenimiento básico de equipos electrónicos."
            },
            {
                "taskTypeId": "16T",
                "taskTypeName": "Asistencia en eventos especiales",
                "taskTypeDescription": "Organización y decoración de fiestas, servicio de camarero o bartender para eventos, fotografía o videografía para eventos."
            },
            {
                "taskTypeId": "17T",
                "taskTypeName": "Servicios de traducción e interpretación",
                "taskTypeDescription": "Traducción de documentos, interpretación en reuniones o eventos, clases particulares de idiomas."
            },
            {
                "taskTypeId": "18T",
                "taskTypeName": "Asistencia para personas mayores",
                "taskTypeDescription": "Acompañamiento para citas médicas, compañía para paseos o actividades recreativas, ayuda en la realización de tareas domésticas."
            },
            {
                "taskTypeId": "19T",
                "taskTypeName": "Servicios de asesoramiento",
                "taskTypeDescription": "Asesoramiento legal básico, asesoramiento financiero personal, consultas de bienestar y estilo de vida saludable."
            },
            {
                "taskTypeId": "20T",
                "taskTypeName": "Servicios creativos",
                "taskTypeDescription": "Diseño gráfico para redes sociales o material promocional, creación de contenido escrito (redacción de artículos, corrección de textos, etc.), sesiones de fotografía profesional."
            },
            {
                "taskTypeId": "21T",
                "taskTypeName": "Otro",
                "taskTypeDescription": "Categoría que no encaja con ningunas de las anteriores."
            }


            

            
        ],
        {
            ignoreDuplicates: true,
        }
    ).then(() => console.log("taskTypes were successfully created"));
}



module.exports = {
       createTaskTypes
};