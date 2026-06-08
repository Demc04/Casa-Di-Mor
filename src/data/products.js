import lookWhiteDress from '../assets/images/look-white-dress.jpg';
import look02 from '../assets/images/look-02.jpg';
import look03 from '../assets/images/look-03.jpg';
import look04 from '../assets/images/look-04.jpg';

export const collection = 'Verano Eterno';

export const products = [
  {
    id: 'vestido-luz',
    name: 'Vestido Luz',
    category: 'Vestidos',
    price: '€ 280',
    image: lookWhiteDress,
    colors: [
      { name: 'Marfil', hex: '#f2ede6' },
      { name: 'Polvo', hex: '#b0c2e1' },
      { name: 'Espresso', hex: '#42270f' },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    note: 'Vestido corto en V, talle entallado. Bolsillos de plastrón.',
    detail: ['Acentuar la cintura', 'Tela estructurada', 'Forro interior'],
  },
  {
    id: 'maxi-mare',
    name: 'Maxi Mare',
    category: 'Vestidos',
    price: '€ 340',
    image: look02,
    colors: [
      { name: 'Polvo', hex: '#b0c2e1' },
      { name: 'Marfil', hex: '#f2ede6' },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    note: 'Maxi de tirantes con bordado calado. Caída fluida.',
    detail: ['Tiras ajustables', 'Tela transparente', 'Falda un poco más larga'],
  },
  {
    id: 'piping-atena',
    name: 'Piping Atena',
    category: 'Vestidos',
    price: '€ 310',
    image: look03,
    colors: [
      { name: 'Crema', hex: '#efe8df' },
      { name: 'Espresso', hex: '#42270f' },
    ],
    sizes: ['XS', 'S', 'M'],
    note: 'Maxi con vivos contrastados y cut-out en cintura.',
    detail: ['Detalle busto', 'Vivo contrastado', 'Cut-out en cintura'],
  },
  {
    id: 'top-ola',
    name: 'Top Ola',
    category: 'Tops',
    price: '€ 160',
    image: look04,
    colors: [
      { name: 'Marfil', hex: '#f2ede6' },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    note: 'Top bustier de volantes en lino. Tirantes finos.',
    detail: ['Volantes dobles', 'Lino lavado', 'Espalda elástica'],
  },
];
