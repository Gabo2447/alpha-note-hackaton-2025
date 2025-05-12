# 🚀 AlphaNote

## 📝 Descripción

AlphaNote es una plataforma innovadora para la gestión y organización de notas y documentos, diseñada para ofrecer una experiencia segura, sencilla y eficiente. Inspirada en herramientas de productividad modernas, AlphaNote integra autenticación robusta mediante Clerk para proteger la información de los usuarios y facilitar el acceso desde cualquier dispositivo.

El proyecto busca brindar una solución flexible para usuarios que desean mantener sus ideas, proyectos y conocimiento centralizados, con una interfaz intuitiva y funcionalidades que potencian la productividad personal y colaborativa.

## 🌐 Demo

Puedes probar la aplicación en:  
👉 [https://alphanote.vercel.app](https://alphanote.vercel.app)

## 📸 Capturas de pantalla / GIFs

( PENDIENTES )

## 🔐 Uso de Clerk

AlphaNote utiliza Clerk para gestionar la autenticación y administración de usuarios, aprovechando sus SDKs para integrar flujos de inicio de sesión, registro y gestión de sesiones de forma segura y sencilla.

- 🔑 La integración con Clerk permite a los usuarios iniciar sesión mediante email, redes sociales y autenticación multifactor.  
- 🧩 Se emplean componentes preconstruidos de Clerk para formularios de autenticación, facilitando una experiencia fluida y segura.  
- 🛡️ Clerk garantiza la protección de rutas y datos sensibles, manteniendo la privacidad y seguridad del usuario en todo momento.  
- ⚙️ La configuración se realizó con el SDK de Clerk para React dentro del framework Astro, asegurando compatibilidad y rendimiento.

## ⚙️ Cómo ejecutar el proyecto

1. Clona el repositorio:  
```bash
git clone https://github.com/tu-usuario/alphanote.git
cd alphanote
```


2. Instala dependencias:  
```bash
pnpm install
```

3. Configura las variables de entorno con tus credenciales de Clerk:  
- `PUBLIC_CLERK_PUBLISHABLE_KEY`  
- `CLERK_SECRET_KEY`  

Puedes obtenerlas en tu dashboard de Clerk.

4. Ejecuta el proyecto en modo desarrollo:  
```bash
pnpm dev
```

5. Abre [http://localhost:4321](http://localhost:4321) en tu navegador.

## 🛠️ Cómo se ha utilizado Clerk

- 📦 Se instaló el paquete oficial `@clerk/astro` para integrar la autenticación en la aplicación.  
- 🧩 Se envolvió la aplicación con el `ClerkProvider` para gestionar el estado de autenticación globalmente. (Trabajando)  
- 🔐 Se usaron componentes como `<SignIn>`, `<SignUp>`, `<UserButton>` y `<SignOutButton>` para facilitar el manejo de sesiones.
- 🔄 Se configuró el middleware para validar sesiones en el servidor y proteger las API routes. (Trabajando)  
- 🌍 Clerk se configuró para soportar múltiples métodos de inicio de sesión, incluyendo email y proveedores sociales.
