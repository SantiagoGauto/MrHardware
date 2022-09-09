import PcComun1 from '../pc-comunes/PcComun1.jpg';
import PcComun2 from '../pc-comunes/PcComun2.jpg';
import PcComun3 from '../pc-comunes/PcComun3.jpg';
import PcComun4 from '../pc-comunes/PcComun4.jpg';
import PcComun5 from '../pc-comunes/PcComun5.jpg';

export const PcListado = [
  //carta 1
    {
      id: 1,
      nombre: 'PC AMD RYZEN 5 3600',
      href: '#',
      imageSrc: PcComun1,
      imageAlt: "PcComun1",
      precio: '$ 77.000',
      rating: '★★★☆☆', //3 de rating
      mínimo: 1,
      stock: 5,
      // componentes
      CPU:"Micro AMD Ryzen 5 3600 4.2 Ghz AM4",
      RAM:"Memoria Ram Kingston 4GB 2666 Mhz DDR4",
      VideoCard: "-",
      MOTHERBOARD: "Motherboard Gigabyte A320M-H AM4",
      DISK: "Disco Solido SSD 120GB Gigabyte SATA III",
      Fuente: "Fuente 500W",

    },
  //carta 2
    {
      id: 2,
      nombre: 'PC CORE I3',
      href: '#',
      imageSrc: PcComun2,
      imageAlt: "PcComun2",
      precio: '$ 77.000',
      rating: '★★★★☆', //4 de rating
      mínimo: 1,
      stock: 3,
      // componentes
      CPU:"Micro Intel I3-10100F 4.3Ghz 6Mb S.1200",
      RAM:"Memoria Ram Kingston 4GB 2666 Mhz DDR4",
      VideoCard: "-",
      MOTHERBOARD: "Motherboard Gigabyte B560M DS3H V2 1200",
      DISK: "Disco Solido SSD 120GB Gigabyte SATA III",
      Fuente: "Fuente 500W",
    },
  //carta 3
    {
      id: 3,
      nombre: 'PC AMD RYZEN 3',
      href: '#',
      imageSrc: PcComun3,
      imageAlt: "PcComun3",
      precio: '$ 77.000',
      rating: '★★★★★', //5 de rating
      mínimo: 1,
      stock: 7,
      // componentes
      CPU:"Micro AMD Ryzen 3 4350G Pro 3.8 Ghz AM4 OEM",
      RAM:"Memoria Ram PNY Performance 4GB 2666 Mhz DDR4",
      VideoCard: "MSI Nvidia Geforce GT 210 LP 1GB DDR3",
      MOTHERBOARD: "Motherboard MSI A520M Pro VH AM4",
      DISK: "Disco Solido SSD 120GB Netac N535S 2.5 SATA III",
      Fuente: "Fuente 600W Aureox ARXGP",
    },
  //carta 4
    {
      id: 4,
      nombre: 'PC INTEL CORE I5',
      href: '#',
      imageSrc: PcComun4,
      imageAlt: "PcComun4",
      precio: '$ 77.000',
      rating: '★★★☆☆', //3 de rating
      mínimo: 1,
      stock: 9,
      // componentes
      CPU:"Micro Intel I5-10400 4.3Ghz 12Mb S.1200",
      RAM:"Memoria Ram Kingston 4GB 2666 Mhz DDR4",
      VideoCard: "-",
      MOTHERBOARD: "Motherboard Gigabyte B560M DS3H V2 1200",
      DISK: "Disco Solido SSD 120GB Gigabyte SATA III",
      Fuente: "Fuente 600W plus",
    },
  //carta 5
    {
      id: 5,
      nombre: 'PC INTEL CORE I3',
      href: '#',
      imageSrc: PcComun5,
      imageAlt: "PcComun5",
      precio: '$ 77.000',
      rating: '★★★★☆', //4 de rating
      mínimo: 1,
      stock: 3,
      // componentes
      CPU:"Micro Intel I3-10105F 4.4Ghz 6Mb S.1200",
      RAM:"Memoria Ram Patriot Signature Line 8GB 3200 Mhz DDR4",
      VideoCard: "Placa De Video Colorful Nvidia Geforce GT 1030 V6 2GB GDDR4",
      MOTHERBOARD: "Motherboard Asus H510M-E Prime 1200",
      DISK: "Disco Solido SSD 120GB Gigabyte SATA III",
      Fuente: "Fuente 600W plus",
    }
]