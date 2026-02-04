# Manuales ACMH Power Apps

Página web para mostrar manuales de usuario creados con [Tango.us](https://tango.us).

## 🚀 Ver en vivo

[https://TU_USUARIO.github.io/manuales-acmh/](https://TU_USUARIO.github.io/manuales-acmh/)

## 📁 Estructura del proyecto

```
manuales-acmh/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos
├── js/
│   └── main.js         # Funciones JavaScript
├── assets/             # Imágenes y recursos (opcional)
└── README.md           # Este archivo
```

## ➕ Agregar un nuevo rol a un módulo existente

1. Abre `index.html`
2. Busca el `<div class="accordion-content">` del módulo
3. Agrega este bloque:

```html
<a class="nav-item" onclick="loadManual(this)"
   data-embed="URL_TANGO_AQUI"
   data-title="Módulo - Nombre del Rol">
    <span class="nav-dot admin"></span>
    Nombre del Rol
</a>
```

## ➕ Agregar un nuevo módulo

1. Abre `index.html`
2. Copia este bloque dentro de `<nav class="sidebar-nav">`:

```html
<div class="module-accordion">
    <button class="accordion-toggle" onclick="toggleAccordion(this)">
        <span class="accordion-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
        </span>
        <span>Nombre del Módulo</span>
    </button>
    <div class="accordion-content">
        
        <a class="nav-item" onclick="loadManual(this)"
           data-embed="URL_TANGO_AQUI"
           data-title="Módulo - Rol">
            <span class="nav-dot admin"></span>
            Nombre del Rol
        </a>
        
    </div>
</div>
```

## 🎨 Colores disponibles para roles

En el `<span class="nav-dot">` puedes usar estas clases:

| Clase | Color |
|-------|-------|
| `admin` | Azul |
| `gestor` | Morado/Rosa |
| `supervisor` | Naranja |
| `usuario` | Verde |
| `auditor` | Índigo |

## 📝 Licencia

Uso interno - ACMH
