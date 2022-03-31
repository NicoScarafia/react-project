const products = [
    {
        id: '1',
        nombre: 'Batman - Under the Hood',
        cover: '../assets/img/batman.under-hood.jpg',
        stock: 3,
        precio: 660,
        editorial: 'Dolman',
        categoria: 'comics'
    },
    {
        id: '2',
        nombre: 'Dorohedoro - Volumen 21',
        cover: '../assets/img/dorohedoro-21.jpg',
        stock: 24,
        precio: 230,
        editorial: 'IVREA',
        categoria: 'mangas'
    },
    {
        id: '3',
        nombre: 'Chainsaw Man - Volumen 1',
        cover: '../assets/img/chainsawman-1.jpg',
        stock: 8,
        precio: 320,
        editorial: 'IVREA',
        categoria: 'mangas'
    },
    {
        id: '4',
        nombre: 'Sakura CC - Volumen 6',
        cover: '../assets/img/sakuracardcaptor-6.jpg',
        stock: 19,
        precio: 180,
        editorial: 'IVREA',
        categoria: 'mangas'
    },
    {
        id: '5',
        nombre: 'V de Vendetta',
        cover: '../assets/img/v.jpg',
        stock: 0,
        precio: 600,
        editorial: 'Astiberri',
        categoria: 'comics'
    },
    {
        id: '6',
        nombre: 'Jujutsu Kaisen - Volumen 15',
        cover: '../assets/img/jujutsukaisen-15.jpg',
        stock: 2,
        precio: 320,
        editorial: 'Jump Comics',
        categoria: 'mangas'
    },
    {
        id: '7',
        nombre: 'Superman - Red Son',
        cover: '../assets/img/superman-rs.jpg',
        stock: 12,
        precio: 560,
        editorial: 'Norma',
        categoria: 'comics'
    },
    {
        id: '8',
        nombre: 'Punisher - Noir',
        cover: '../assets/img/punisher-n.jpg',
        stock: 5,
        precio: 450,
        editorial: 'Norma',
        categoria: 'comics'
    }
]


export const getProducts = () => {
    
    return new Promise((res, rej) => {

        let condition = true

        if (condition) {
            setTimeout(() => {
                res(products)
            }, 500)
        } else {
            rej(console.error('Error en la obtención de datos'))
        }
    })
}