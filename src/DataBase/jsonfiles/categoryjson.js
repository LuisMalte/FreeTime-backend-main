const category = require('../../Models/category');

function createCategories(){
    category.bulkCreate(
        [
           
            {
                "categoryId": "1C",
                "categoryName": "Profesor particular",
                "categoryDescription": "Profesor particular de matemáticas, idiomas, música, etc. Preparador para exámenes. Tutor especializado en habilidades específicas (programación, diseño gráfico, etc)"
            },
            {
                "categoryId": "2C",
                "categoryName": "Cuidador de mascotas",
                "categoryDescription": "Cuidador de mascotas a domicilio. Paseador de perros. Alimentador de mascotas."
            },
            {
                "categoryId": "3C",
                "categoryName": "Personal de compras",
                "categoryDescription": "Personal Shopper. Mensajero de paquetería. Encargado de compras de medicamentos."
            },
            {
                "categoryId": "4C",
                "categoryName": "Asistente doméstico",
                "categoryDescription": "Asistente doméstico. Jardinero. Organizador profesional."
            },
            {
                "categoryId": "5C",
                "categoryName": "Cuidador de niños",
                "categoryDescription": "Niñera o canguro. Tutor académico. Acompañante de actividades extraescolares."
            },
            {
                "categoryId": "6C",
                "categoryName": "Repartidor de alimentos",
                "categoryDescription": "Repartidor de alimentos preparados. Lavandería y planchado a domicilio. Mensajero de documentos y paquetes."
            },
            {
                "categoryId": "7C",
                "categoryName": "Técnico de soporte",
                "categoryDescription": "Técnico de soporte informático. Técnico de reparación de electrodomésticos. Especialista en instalación de tecnología."
            },
            {
                "categoryId": "8C",
                "categoryName": "Asistente administrativo",
                "categoryDescription": "Asistente administrativo. Contador personal. Organizador de eventos."
            },
            {
                "categoryId": "9C",
                "categoryName": "Conductor privado",
                "categoryDescription": "Conductor privado. Chófer para eventos. Transportista de personas."
            },
            {
                "categoryId": "10C",
                "categoryName": "Entrenador personal",
                "categoryDescription": "Entrenador personal. Instructor deportivo. Guía de actividades al aire libre."
            },
            {
                "categoryId": "11C",
                "categoryName": "Asesor personal",
                "categoryDescription": "Asesor personal. Asesor financiero. Asesor de bienestar."
            },
            {
                "categoryId": "12C",
                "categoryName": "Estilista y belleza a domicilio",
                "categoryDescription": "Estilista a domicilio. Manicurista y pedicurista a domicilio. Maquillador profesional a domicilio."
            },
            {
                "categoryId": "13C",
                "categoryName": "Organizador de eventos",
                "categoryDescription": "Organizador de eventos sociales. Asistente de eventos. Coordinador de eventos."
            },
            {
                "categoryId": "14C",
                "categoryName": "Apoyo emocional",
                "categoryDescription": "Acompañante emocional. Consejero de bienestar. Terapeuta de apoyo."
            },
            {
                "categoryId": "15C",
                "categoryName": "Reparador y mantenimiento",
                "categoryDescription": "Técnico de reparación de muebles. Instalador de equipamiento del hogar. Especialista en mantenimiento de electrónica."
            },
            {
                "categoryId": "16C",
                "categoryName": "Fotógrafo y videógrafo de eventos",
                "categoryDescription": "Fotógrafo de eventos. Videógrafo de eventos. Documentalista de eventos."
            },
            {
                "categoryId": "17C",
                "categoryName": "Traductor e intérprete",
                "categoryDescription": "Traductor de documentos. Intérprete en reuniones. Profesor de idiomas particulares."
            },
            {
                "categoryId": "18C",
                "categoryName": "Asistente para personas mayores",
                "categoryDescription": "Asistente para personas mayores. Acompañante para personas mayores. Ayudante doméstico para personas mayores."
            },
            {
                "categoryId": "19C",
                "categoryName": "Asesoramiento personal",
                "categoryDescription": "Asesor legal personal. Asesor financiero personal. Consultor de bienestar personal."
            },
            {
                "categoryId": "20C",
                "categoryName": "Profesional creativo",
                "categoryDescription": "Diseñador gráfico freelance. Escritor de contenido freelance. Artista visual freelance."
            },
            {
                "categoryId": "21C",
                "categoryName": "otro",
                "categoryDescription": "otro tipo de profesion o especialidad"
            }
        ],
        {
            ignoreDuplicates: true,
        }
    ).then(() => console.log("Category were successfully created"));
}

module.exports = {
   createCategories
};