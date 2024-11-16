
# Gestión de Reservas de Habitaciones de Hotel

Este es un sistema de gestión de reservas para un hotel que permite registrar, listar, actualizar y cancelar reservas. El sistema está desarrollado con un backend en **Spring Boot** y un frontend en **React**, y utiliza **MySQL** como base de datos.

## Tabla de Contenidos

- [Características](#características)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Ejecución](#ejecución)
- [Uso](#uso)
- [Tecnologías](#tecnologías)
- [Capturas de Pantalla](#capturas-de-pantalla)

## Características

- Registro de nuevas reservas con nombre del cliente, fechas de inicio y fin, y tipo de habitación.
- Listado de todas las reservas existentes.
- Actualización de las fechas de una reserva existente.
- Cancelación de reservas.

## Requisitos

Para ejecutar este proyecto, necesitarás tener instalados:

- **Java 17** o superior
- **Node.js** y **npm**
- **MySQL**
- **Maven**

## Instalación

### Backend (Spring Boot)

1. Clona el repositorio y navega al directorio del backend:
    ```bash
    git clone https://github.com/tu_usuario/tu_repositorio.git
    cd tu_repositorio/backend
    ```

2. Instala las dependencias del proyecto:
    ```bash
    ./mvnw clean install
    ```

3. Configura la base de datos MySQL:
   - Crea una base de datos llamada `hotel_reservas` en MySQL.
   - Actualiza el archivo `application.properties` con tus credenciales de MySQL.

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/hotel_reservas
   spring.datasource.username=TU_USUARIO
   spring.datasource.password=TU_CONTRASEÑA
   ```

### Frontend (React)

1. Navega al directorio del frontend:
    ```bash
    cd ../frontend
    ```

2. Instala las dependencias de Node.js:
    ```bash
    npm install
    ```

## Configuración

Asegúrate de que el backend esté configurado para permitir CORS desde el frontend. El archivo `WebConfig.java` debe contener algo como esto:

```java
@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:3000")
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS");
            }
        };
    }
}
```

## Ejecución

### Iniciar el Backend

En el directorio `backend`, ejecuta:

```bash
./mvnw spring-boot:run
```

El backend se ejecutará en `http://localhost:8080`.

### Iniciar el Frontend

En el directorio `frontend`, ejecuta:

```bash
npm start
```

El frontend se ejecutará en `http://localhost:3000`.

## Uso

1. Abre el navegador y navega a `http://localhost:3000`.
2. En la página principal, podrás:
   - **Registrar una reserva**: Completa el formulario y haz clic en "Registrar".
   - **Listar reservas**: Todas las reservas se muestran en una tabla.
   - **Editar una reserva**: Haz clic en "Editar" para modificar las fechas de una reserva.
   - **Cancelar una reserva**: Haz clic en "Cancelar" para eliminar una reserva de la base de datos.

## Tecnologías

- **Backend**: Spring Boot, Spring Data JPA, MySQL
- **Frontend**: React, Axios, Bootstrap (para estilos)
- **Base de Datos**: MySQL

## Capturas de Pantalla

### Página Principal

![Página Principal](https://ruta-a-tu-imagen.com/pagina_principal.png)

### Formulario de Registro

![Formulario de Registro](https://ruta-a-tu-imagen.com/formulario_registro.png)

### Lista de Reservas

![Lista de Reservas](https://ruta-a-tu-imagen.com/lista_reservas.png)

## Contribución

Si deseas contribuir a este proyecto, por favor realiza un fork del repositorio, crea una nueva rama y envía un pull request.

1. Realiza un fork del repositorio
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`)
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva funcionalidad'`)
4. Envía tus cambios (`git push origin feature/nueva-funcionalidad`)
5. Abre un pull request

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.
