# Componente Toast

El componente Toast muestra notificaciones en la pantalla.

## HTML

Agrega un elemento con id "toast-root" en el index.html de tu proyecto.

```html
<div id="toast-root"></div>
```

## App > index.js (React)

Importa el provider del componente en el index de la aplicación react con al siguiente línea.

```javascript
import {ToastProvider} from 'App/components/Toast'
```

Posteriormente usa el provider para envolver <Pages/> con el provider del componente.

```javascript
<ToastProvider>
  <Pages />
</ToastProvider>
```

## Import

Para utilizarlo en React, primero debe importarlo:

```javascript
import {useToast} from 'App/components/Toast'
```

## Uso del hook

```javascript
const addToast = useToast()
```

Para mostrar una notificación, llame a la función addToast y pase un objeto con las siguientes propiedades:

- **title**: (obligatorio) _string_ que indica el título de la notificación.
- **type**: (obligatorio) _string_ que indica el tipo del toast. Puede ser uno de los siguientes:
  danger, warning, alert, news o success.
- **description**: (opcional) string que indica la descripción del toast.
- **autodelete**: (opcional) _booleano_ que indica si el toast debe borrarse automáticamente después de un tiempo determinado. El valor predeterminado es true.
  **autodeleteTime**: (opcional) _number_ que indica el tiempo en milisegundos después del cual se borrará el toast. Esta propiedad solo tiene efecto si _autodelete_ es true. El valor predeterminado es 3000 (3 segundos).

## Ejemplo

Aquí hay un ejemplo de cómo usar la función addToast:

```javascript
addToast({
  title: '¡Recolección exitosa!',
  type: 'success',
  description: 'Cada recolección cuenta y juntos podemos hacer una gran diferencia.',
  autodelete: true,
  autodeleteTime: 3000 // Borrar después de 3 segundos
})
```

Con esto, puede utilizar el componente Toast en su aplicación de React para mostrar notificaciones(toasts) de una manera fácil y personalizada.

## Contribución

Se aceptan pull requests. Para cambios mayores, por favor abra un issue primero para discutir lo que le gustaría cambiar.

Por favor, asegúrese de actualizar las pruebas según corresponda.

## License

[MIT](https://choosealicense.com/licenses/mit/)
