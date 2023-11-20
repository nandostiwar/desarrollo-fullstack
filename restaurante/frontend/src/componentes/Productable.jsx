import React, { useEffect }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import './stylesC/tabla.css';
import Swal from 'sweetalert2';
import axios from 'axios';

function ProductTable({ products, setProducts, setCreateProductHandler }) {
  
  useEffect(() => {
    setCreateProductHandler(() => handleCreateProduct);
  }, [setCreateProductHandler]);

  const handleCreateProduct  = () => {
    Swal.fire({
      title: 'Crear Nuevo Producto',
      html: `
        <input id="productname" class="swal2-input" placeholder="Nombre de producto">
        <input type="number" id="price" class="swal2-input" placeholder="Precio" min="0" step="1">
      `,
      showCancelButton: true,
      confirmButtonText: 'Crear',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      preConfirm: () => {
        const productname = Swal.getPopup().querySelector('#productname').value;
        const price = Swal.getPopup().querySelector('#price').value;

         // Validaciones
         if ( !price || !productname ) {
          Swal.showValidationMessage('Todos los campos son obligatorios.');
          return;
        }

        axios
          .post('http://localhost:3000/verproductos/createProducto', { productname, price})
          .then((response) => {
            if (response.data.success) {
              // El producto se creó con éxito, puedes realizar acciones adicionales si es necesario
              Swal.fire({
                icon: 'success',
                title: 'Producto creado con exito!',
                html: `El producto que creaste ha sido añadido al servidor!`,
              });
              console.log('Producto creado con éxito');
              // Actualiza la lista de productos
              axios.get('http://localhost:3000/verproductos/products') // Asegúrate de que la ruta coincida con la definida en el backend
                .then((response) => {
                  const productsData = response.data;
                  setProducts(productsData); // Asignación de datos al estadoista de productos
                })
            } else {
              // El servidor devolvió un error
              console.error('Error al crear el producto');
            }
          })
          .catch((error) => {
            console.error('Error al crear el producto', error);
          });
      },
    });
  };

  const handleEditProduct = (product) => {
    Swal.fire({
      title: 'Editar Usuario',
      width: 900,
      html: `
        <div style="display: flex; gap: 10px; padding: 10px;">
          <div style="flex: 1;">
            <h3 style="margin-bottom: 10px;">Datos Actuales</h3>
            <input id="idProduct_old" class="swal2-input" value="${product.id || ''}" readonly>
            <input id="nombreProduct_old" class="swal2-input" value="${product.productname || ''}" readonly>
            <input id="price_old" class="swal2-input" value="${product.price || ''}" readonly>
          </div>
          <div style="flex: 1;">
            <h3 style="margin-bottom: 10px;">Modificar</h3>
            <input type="number" id="idProduct_nuevo" class="swal2-input" placeholder="id" min="0" step="1" value="${product.id || ''}" readonly>
            <input id="nombreProduct_nuevo" class="swal2-input" placeholder="Nombre del producto">
            <input id="price_nuevo" type="number" class="swal2-input" placeholder="Precio">
          </div>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      preConfirm: () => {
        const id = Swal.getPopup().querySelector('#idProduct_nuevo').value;
        const productname = Swal.getPopup().querySelector('#nombreProduct_nuevo').value || product.productname;
        const price = Swal.getPopup().querySelector('#price_nuevo').value || product.price;
  
      const changesMade = productname !== product.productname || price !== product.price;

      if (!changesMade) {
        Swal.showValidationMessage('No se realizaron cambios.');
        return false; // Esto evitará que se cierre el formulario
      }

        // Realizar una solicitud PUT al backend para editar el usuario
        axios
          .put(`http://localhost:3000/verproductos/editarProducto/${id}`, { id, productname, price })
          .then((response) => {
            if (response.data.success) {
              // El usuario se editó con éxito
              Swal.fire({
                icon: 'success',
                title: '¡Producto editado con éxito!',
                html: `Los cambios en el producto han sido guardados en el servidor.`,
              });
              console.log('Producto editado con éxito');
              // Actualiza la lista de usuarios
              axios.get('http://localhost:3000/verproductos/products')
                .then((response) => {
                  const productsData = response.data;
                  setProducts(productsData); // Actualiza la lista de usuarios
                });
            } else {
              // El servidor devolvió un error
              console.error('Error al editar el usuario');
            }
          })
          .catch((error) => {
            console.error('Error al editar el usuario', error);
          });
      },
    });
  };

  const handleDeleteProduct = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      html: `¿Desea eliminar el producto: <strong>${id}</strong>? Esta acción no se puede deshacer.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario confirma la eliminación, realiza la solicitud DELETE
        axios
          .delete(`http://localhost:3000/verproductos/products/${id}`)
          .then((response) => {
            if (response.data.success) {
              // El usuario se eliminó con éxito, puedes realizar acciones adicionales si es necesario
              console.log('Producto eliminado con éxito');
              Swal.fire({
                icon: 'success',
                title: 'Eliminado!',
                html: `El producto: <strong>${id}</strong> se elimino correctamente.`,
              });
              // Actualiza la lista de usuarios
              setProducts((prevProducts) =>
              prevProducts.filter((product) => product.id !== id)
              );
            } else {
              // El servidor devolvió un error
              console.error('Error al eliminar el producto');
            }
          })
          .catch((error) => {
            console.error('Error al eliminar el producto', error);
          });
      }
    });
  };

  return (
    <div>
      <h2 className='title'>Tabla de Productos</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre del Producto</th>
            <th>Precio</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.productname}</td>
              <td>${product.price}</td>
              <td>
                <button className="edit-button" onClick={() => handleEditProduct(product)}>
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              </td>
              <td>
                <button className="delete-button" onClick={() => handleDeleteProduct(product.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;