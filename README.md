# IMPORTANTE

LAS VERSIONES PRESENTES DE LOS REPOSITORIOS ESTAN SIENDO USADOS ACTUALMENTE EN LOS MICROFRONTENDS, E INCLUYEN CAMBIOS NO DEPLOYADOS. ADEMÁS, ALGUNOS MICROFRONTENDS POSEEN MEJORAS EN CURSO DE ESTAS LIBRERIAS, LAS CUALES DEBEN SER INTEGRADAS A LA LIBRERIA Y REIMPLEMENTADAS EN LOS OTROS MICROFRONTENDS.

////////////////////////////////////////////////////////////////////////////////////////////////

# Recylink Commons

Monorepo que contiene las librerías compartidas de Recylink, organizadas como un conjunto de paquetes independientes pero relacionados que proporcionan funcionalidades comunes para las aplicaciones de la plataforma.

## Arquitectura

Este monorepo utiliza **Lerna** para gestionar múltiples paquetes relacionados. Cada librería es independiente y puede ser utilizada por separado, pero están diseñadas para trabajar juntas en el ecosistema Recylink.

## Librerías

### 1. `@recylink/auth-client`

**Propósito**: Cliente HTTP basado en Axios para manejo de autenticación y autorización en aplicaciones Recylink.

**Responsabilidades**:

- Gestión de tokens JWT (almacenamiento, refresco automático)
- Manejo de CSRF tokens
- Interceptores para inyección automática de headers de autenticación
- Soporte para **personificación de usuarios** (impersonation)
- Gestión de sesiones de usuario
- Logout automático en caso de errores de autenticación (401, 403, 503)
- Limpieza de datos de autenticación

**Características clave**:

- Interceptor de requests que añade automáticamente `Authorization: Bearer <JWT>`
- Interceptor de responses que maneja:
  - Refresco automático de JWT cuando recibe 303
  - Logout automático en errores de autenticación
  - Manejo de errores de red
- Soporte para múltiples sesiones de personificación simultáneas
- Almacenamiento en `localStorage` para persistencia de sesión

**Uso en la arquitectura**:
Esta librería es la **capa de comunicación autenticada** entre las aplicaciones frontend y el backend de Recylink. Todas las peticiones HTTP que requieren autenticación deben usar `AuthClient` en lugar de axios directamente.

**Ejemplo de uso**:

```javascript
import {AuthClient} from '@recylink/auth-client'

// Realizar petición autenticada
const response = await AuthClient.get('/api/users')
```

---

### 2. `@recylink/react-components`

**Propósito**: Biblioteca de componentes UI reutilizables y estandarizados para aplicaciones React de Recylink.

**Componentes principales**:

- **UI Básicos**: `Button`, `Label`, `Icon`, `Tooltip`, `MaterialPill`
- **Layout**: `ButtonsContainer`, `IconsContainer`
- **Feedback**: `Modal`, `Toast`, `SuspenseLoading`, `ViewportSuspenseLoading`
- **Navegación**: `Stepper`
- **Utilidades**: Integración con `dayjs` para manejo de fechas
- **Workers**: Sistema de workers para operaciones en segundo plano

**Contextos y Providers**:

- `RecylinkProvider`: Provider principal que combina todos los contextos necesarios
- `ModalProvider` / `useModal`: Gestión de modales
- `ToastProvider` / `useToast`: Sistema de notificaciones toast
- `DayjsProvider`: Configuración global de dayjs
- `WorkersProvider` / `useWorkers`: Gestión de workers

**Uso en la arquitectura**:
Esta librería proporciona el **sistema de diseño (design system)** de Recylink. Garantiza consistencia visual y de comportamiento en todas las aplicaciones de la plataforma. Los componentes están diseñados para ser:

- Accesibles
- Consistentes en estilo y comportamiento
- Integrados con el sistema de autenticación cuando es necesario
- Documentados con Storybook

**Dependencias**:

- Utiliza `@recylink/react-hooks` para hooks compartidos
- Integra `dayjs` para manejo de fechas
- Utiliza `react-tooltip` para tooltips avanzados

**Ejemplo de uso**:

```tsx
import {RecylinkProvider, Button, useToast} from '@recylink/react-components'

function App() {
  return (
    <RecylinkProvider>
      <MyComponent />
    </RecylinkProvider>
  )
}

function MyComponent() {
  const {showToast} = useToast()

  return <Button onClick={() => showToast('Mensaje')}>Click me</Button>
}
```

---

### 3. `@recylink/react-fields`

**Propósito**: Componentes de formulario especializados y reutilizables para captura de datos en aplicaciones Recylink.

**Componentes de campo**:

- `Text`: Campo de texto con validación y máscaras
- `Number`: Campo numérico con formato
- `Select`: Selector dropdown con búsqueda
- `Radio` / `RadioGroup` / `RadioItem`: Botones de opción agrupados

**Características**:

- Validación integrada
- Formato automático (máscaras, números, etc.)
- Debounce para optimización de rendimiento
- Integración con `react-input-mask` y `react-number-format`
- Estilos consistentes con el design system

**Uso en la arquitectura**:
Esta librería proporciona la **capa de entrada de datos** estandarizada. Todos los formularios en aplicaciones Recylink deberían usar estos componentes para:

- Consistencia en la experiencia de usuario
- Validación uniforme
- Formato automático de datos
- Accesibilidad

**Dependencias**:

- Utiliza `@recylink/react-components` para componentes base (Label, etc.)
- Utiliza `@recylink/react-hooks` para hooks compartidos
- Integra `react-select` para selects avanzados
- Utiliza `react-input-mask` y `react-number-format` para formateo

**Ejemplo de uso**:

```tsx
import {Text, Number, Select, RadioGroup, RadioItem} from '@recylink/react-fields'

function MyForm() {
  return (
    <form>
      <Text label="Nombre" name="name" required />
      <Number label="Edad" name="age" min={0} max={120} />
      <Select label="País" name="country" options={countries} />
      <RadioGroup name="tipo">
        <RadioItem value="a">Opción A</RadioItem>
        <RadioItem value="b">Opción B</RadioItem>
      </RadioGroup>
    </form>
  )
}
```

---

### 4. `@recylink/react-hooks`

**Propósito**: Colección de hooks personalizados de React reutilizables para lógica común en aplicaciones Recylink.

**Hooks disponibles**:

- `useDeepEffect`: Versión de `useEffect` que compara dependencias con deep equality
- `useKeyPress`: Detecta cuando se presiona una tecla específica
- `useOutsideClick`: Detecta clicks fuera de un elemento
- `useIntersectionObserver`: Hook para Intersection Observer API

**Uso en la arquitectura**:
Esta librería proporciona **utilidades de lógica reutilizable** que no están relacionadas con UI específica pero son comunes en aplicaciones React. Estos hooks:

- Evitan duplicación de código
- Encapsulan lógica compleja
- Proporcionan APIs consistentes
- Son utilizados por otras librerías del monorepo (`react-components`, `react-fields`)

**Ejemplo de uso**:

```tsx
import {useOutsideClick, useKeyPress} from '@recylink/react-hooks'

function MyComponent() {
  const ref = useRef(null)

  // Cerrar cuando se hace click fuera
  useOutsideClick(ref, () => {
    console.log('Clicked outside!')
  })

  // Detectar tecla Escape
  useKeyPress('Escape', () => {
    console.log('Escape pressed!')
  })

  return <div ref={ref}>Content</div>
}
```

---

## Flujo de Dependencias

```
┌─────────────────────┐
│  auth-client        │  (Independiente - solo axios)
└─────────────────────┘
         │
         ▼
┌─────────────────────┐
│  react-hooks        │  (Independiente - solo hooks)
└─────────────────────┘
         │
         ├─────────────────┐
         ▼                 ▼
┌─────────────────────┐  ┌─────────────────────┐
│ react-components    │  │  react-fields       │
│                     │  │                     │
│ - Usa react-hooks  │  │ - Usa react-hooks   │
│ - Componentes UI    │  │ - Usa react-        │
│                     │  │   components        │
└─────────────────────┘  └─────────────────────┘
```

## Gestión del Monorepo

Este proyecto utiliza **Lerna** para:

- Versionado coordinado de paquetes
- Publicación a GitHub Packages (`@diegoolavarria:registry`)
- Scripts compartidos (build, test, clean)
- Gestión de dependencias entre paquetes

### Comandos principales

```bash
# Instalar dependencias de todos los paquetes
yarn bootstrap

# Construir todos los paquetes
lerna run build

# Ejecutar tests
yarn test

# Publicar cambios
yarn publish

# Publicar nueva versión
yarn release
```

### Publicación de una nueva versión

Para lanzar una nueva versión de cada proyecto, sigue esta secuencia:

1. **Preparar el build**: Ejecuta `yarn prepublish` en el directorio del paquete
2. **Publicar**: Ejecuta `npm publish` en el mismo directorio

**Ejemplo**:

```bash
# Para publicar @recylink/react-components
cd packages/react-components
yarn prepublish
npm publish

# Para publicar @recylink/auth-client
cd packages/auth-client
yarn prepublish
npm publish
```

> **Nota**: El comando `yarn prepublish` ejecuta el script `prepublish` definido en el `package.json` de cada paquete, que típicamente construye el proyecto y prepara los archivos para publicación.

## Estrategia de Versionado

Cada paquete tiene su propia versión, pero se coordinan mediante Lerna. Las versiones se publican en GitHub Packages bajo el scope `@recylink/`.

## Contribución

Cada librería es independiente y puede ser desarrollada, versionada y publicada por separado, pero deben mantener compatibilidad con las dependencias compartidas.
