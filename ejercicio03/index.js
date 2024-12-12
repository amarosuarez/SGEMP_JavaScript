// Clase Marca
class Marca {
    constructor(id, marca) {
        this.id = id;
        this.marca = marca;
    }
}

// Clase Coche
class Coche {
    constructor(id, marca, modelo, imagen) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.imagen = imagen;
    }
}

// Lista marcas
const marcas = [
    new Marca(1, "Volkswagen"),
    new Marca(2, "Renault"),
    new Marca(3, "Toyota"),
    new Marca(4, "Chevrolet"),
    new Marca(5, "Fiat"),
    new Marca(6, "Peugeot"),
    new Marca(7, "Tesla")
]

// Lista coches
const coches = [
    new Coche(1, 1, "Golf", "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2024/01/23/17060311020964.jpg"),
    new Coche(2, 1, "Passat", "https://images.prismic.io/carwow/3c088604-deae-4e1c-9d81-5ec791d266f7_LHD+Volkswagen+Passat+2019+Exterior-10.jpg"),
    new Coche(3, 2, "Clio", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-lyv-nbg3oSJwLvTvzksqgOvw0nnJXsgvfQ&s"),
    new Coche(4, 2, "Megane", "https://a.ccdn.es/cnet/contents/media/renault/megane/393670.jpg/900x505cut/"),
    new Coche(5, 3, "Yaris", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFjQ8KBKEINCojWfTXHZWibkC5Yignb3aDQg&s"),
    new Coche(6, 3, "Corolla", "https://images.prismic.io/carwow/6374e887-d065-4ad4-827f-f59fd25db266_LHD+Toyota+Corolla+exterior-2.jpg"),
    new Coche(7, 4, "Cruze", "https://noticias.coches.com/wp-content/uploads/2014/07/chevrolet_cruze-2009_r38.jpg"),
    new Coche(8, 4, "Onix", "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2014/02/298193-chevrolet-onix-frontal.jpg?tf=1200x"),
    new Coche(9, 5, "Panda", "https://cdn.autobild.es/sites/navi.axelspringer.es/public/bdc/dc/fotos/Nuevo_FIAT_Panda_Hybrid_10_0.jpg?tf=3840x"),
    new Coche(10, 6, "308", "https://www.peugeot.es/content/dam/peugeot/master/b2c/our-range/showroom/308/2024-07-308-white-label/e-308-white-label/308_E_TRIM_ALLURE.png?imwidth=768"),
    new Coche(11, 7, "Model S", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgb2e_gXuEZfMizXyDGx_rym6SAd3dV4U5rQ&s")
]

window.onload = function () {
    // Creamos todas las opciones de las marcas
    const marca = document.getElementById('marca');
    marcas.forEach(m => {
        const option = document.createElement('option');
        option.value = m.id;
        option.text = m.marca;
        marca.add(option);
    });

    // Escuchamos el evento change
    marca.addEventListener('change', function () {
        // Filtramos los coches por la marca
        const cochesMarca = coches.filter(c => c.marca == marca.value);

        // Creamos div para cada coche, con su imagen y modelo
        const cochesMarcaHtml = cochesMarca.map(
            c =>    `<div>
                        <img src="${c.imagen}" style="width: 180px; height: 140px; object-fit: contain;">
                        <h3>${marcas.find(m => m.id == c.marca).marca} ${c.modelo}</h3>
                    </div>`
            ).join('');
        
        // Añadimos un titulo
        document.getElementById('coches').innerHTML = "<h1>Coches de la marca <i>" + marca.options[marca.selectedIndex].text + "</i></h1>";
        
        // Añadimos todos los div
        document.getElementById('coches').innerHTML += cochesMarcaHtml;
    });
}