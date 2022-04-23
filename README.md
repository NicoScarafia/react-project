:boom:    THRASHED COMICS - REACT JS PROJECT    :boom:
======================================================

#### Thrashed Comics es *e-commerce de comics y mangas* realizado con React JS. Utiliza Firebase como base de datos de los productos listados y para la autenticación de usuarios. Los estilos fueron creados con Boostrap 5 y SASS.

<br />

<p align="center">
  <img alt="Demo del sitio" src="gif.gif">
</p>


 ### <p align="center"> :rocket: Para navegar en la web hosteada, hacé click: [Thrashed Comics](https://thrashed-comics.netlify.app). </p>

<br />
<hr />

:information_source: Detalles
------

1. Hice uso de los __Hooks propios de React__ ( useState(), useEffect, useRef(), etc. ).
2. Prioricé la __reutilización de componentes__. 
3. Implementé __React Router DOM__ para la navegación.
4. Creé __Contextos__ tanto para el carrito de compras como para la autenticación de usuarios.
5. Empleé __Firebase__ como base de datos de los productos y de los usuarios.
6. Creé un useCollection() como __Custom Hook__. Así, con el mismo Hook se obtiene la información de Firebase que lista todos los productos, sólo los de alguna categría, las novedades o las órdenes realizadas por los usuarios registrados, etc.
7. Implementé la __modificación de la base de datos en tiempo real__ a partir de las compras de los usuarios. 
8. Creé __formularios__, con sus respectivas validaciones.
9. Empleé el __renderizado condicional__. Así, dependiendo de un estado determinado se muestran algunos componentes u otros. Ejemplo: en el caso de no haber un usuario loggeado, el componente Usuario mostrará el formulario de registro/inicio de sesión; en cambio, de haber usuario loggeado, mostrará los pedidos que éste realizó. También se renderizan algunos componentes dependiendo del ancho del viewport (ej. el Navbar y el Slider son distintos en versión mobile y desktop).
10. Los estilos están realizados con __Boostrap 5 y SASS__ y es __complemente responsive__.

<hr />

## <p align="center"> :envelope: Contacto: [LinkedIn](https://www.linkedin.com/in/nicolas-scarafia/). </p>

