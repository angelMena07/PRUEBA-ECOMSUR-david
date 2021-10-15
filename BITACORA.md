Resolución del problema.

1. instale dependencias tanto del front como el back como se indicaba en las instrucciones
2. para tener un sistema de rutas fue necesario instala react-router-dom, el cual me premitio tener rutas y poder enviar parametros por url
3. para obtener la informacion de cada producto instale axios, la cual me permitio hacer peticiones http a los endpoints del backend
4. para poder tener un buen diseño y facilidad de uso con css, instale node-sass el cual me permite usar hojas de estilo scss
5. para tener alertas de cuando se hacen movimientos instale Swal2 el cual es una libreria de alertas
6. para poder mostrar el rating de los productos instale react-simple-star-rating
7. primero desarrolle una vista de productos basados en otras tiendas y en mi experiencia, ademas de una vista de prodcuto individual la cual muestra a detalle la información dle producto.
8. para la funcionalidad de añadir y eliminiar del carrito, instale redux react para poder mantener el estado de manera global, para un uso rapido, use el toolkit de react que implementa el  slice, el cual me permite implementar los reducers de una manera rapida,
9. para mantener el estado global del carrito sin que se pierda al recargar, guardo el carrito en localstorage.
10. para poder validar el stock de los productos utilice el useSelector de redux que me obtiene el estado actual del carrito y lo compare con el stock del producto
11. para eliminar el producto del stock, envio el producto uso el reducer decrement y le pmando el producto, luego solo se filtra el array sin el producto que quiero eliminar.
12. para mostrar la cantidad de productos en el carrito en el navbar, uso el useSelector que me permite saber el estado actual del carrito, este al haber un cambio, lo escucha y se actualiza la cantidad de productos por carrito
