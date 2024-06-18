// Selecciona el botón por su ID
const boton = document.getElementById('btnService');

// Agrega un listener para el evento 'click'
boton.addEventListener('click', function() {
    // Muestra la alerta cuando el botón es clickeado
    alert('¡Has hecho clic en el botón!');
});

document.addEventListener("DOMContentLoaded", function() {
    // Suponiendo que tu JSON está disponible como un archivo local o una respuesta de API
    fetch('./data/archivo.json')
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('productos');
        data.forEach(item => {
          const colDiv = document.createElement('div');
          colDiv.classList.add('col-12', 'col-md-4', 'bsb-project-2-item');
  
          const figure = document.createElement('figure');
          figure.classList.add('rounded', 'rounded-3', 'overflow-hidden', 'bsb-overlay-hover', 'm-0');
  
          const a = document.createElement('a');
          a.href = item.link;
  
          const img = document.createElement('img');
          img.classList.add('img-fluid', 'bsb-scale-up', 'bsb-hover-scale');
          img.src = item.imagen;
          img.alt = item.nombre;
  
          a.appendChild(img);
          figure.appendChild(a);
  
          const figcaption = document.createElement('figcaption');
  
          const h3 = document.createElement('h3');
          h3.classList.add('text-white', 'bsb-hover-fadeInLeft');
          h3.textContent = item.nombre;
  
          const div = document.createElement('div');
          div.classList.add('text-white', 'bsb-hover-fadeInRight');
          div.textContent = item.descripcion;
  
          figcaption.appendChild(h3);
          figcaption.appendChild(div);
          figure.appendChild(figcaption);
  
          colDiv.appendChild(figure);
          container.appendChild(colDiv);
        });
      })
      .catch(error => console.error('Error cargando el JSON:', error));
  });
  