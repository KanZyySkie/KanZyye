
import React from 'react';
import { Product, User, Order } from './types';

export const MENU_ITEMS: Product[] = [
  {
    id: '1',
    name: 'Coklat Lumer',
    description: 'Limpahan coklat premium yang lumer di setiap gigitan roti panggang.',
    price: 15000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIkXOMhQzIasxm4-WrM5NulAAL2sBq64f0Cu74ZT8kmb0-SnZzleWIjDC5AluvQl08GbvIPUeQC2oujZ1wocZyAQpRL3vOxBEOeWymP8HCdqqbho_s8HtSZ4cBH3a_G4C03DRAA1KLAToowJpf0dXlAgUowFdZ8U049bpYj7GAa_RzhhmudX6Ww0brRaa9mvLzcBcIOqQGU1pX745nQ3yz5RoAy8uNPMPOTrtbWgwmQd3npFF2dfPd0xbS8qXPelIkuBo9o-XwIxU',
    category: 'Roti Bakar',
    tag: 'Best Seller',
    accentColor: '#5D4037'
  },
  {
    id: '2',
    name: 'Strawberry Segar',
    description: 'Selai strawberry asli dengan potongan buah segar yang manis asam.',
    price: 15000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFfsm9EoOciMrqpHJ-dmug8Amc6GKi8pmCUhGby6SJJDEvlydASoLza1tfROTg5LTW03RcobuxX0nOcZf4leU9JNjnFXV6tpppiwKJNXECW7p4yas7ccdh10VBbAl9a3NyoiqdwQhiZVBaxjFHnU3MbPcf5VGzI26clw-NgpfMdRjyZAsl6me9BrNivVygEhA95GG3OliQWNLTPTEUlaxJ5TZDKK-JIpKz-57j8qF6fk2KqBLA3i-rLoBshqi4zsX8AY1VCMNwnmw',
    category: 'Roti Bakar',
    accentColor: '#E91E63'
  },
  {
    id: '3',
    name: 'Blueberry Manis',
    description: 'Sensasi rasa blueberry unik yang kaya antioksidan dan lezat.',
    price: 15000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYyBYFbjPnRBHPymN4aTQ30tSAg9kVud81gAToXNDozBDSNOgzCA9fPlZmnr9jzbfSx_nUTe3Dt8jbHufZONUkhm7gXK5MpYMXkL5g9Ht09NEKQNqGrrd2ReFZUmwnx94fWYdlsFxzs74Y2aqouBVwCfCuMm9o-SOBabqKRlXvDwXRO_nj9TieIBVKMIEd-28p7SJIUHquK-ee4gbKL4jc4Ngr-Mj4I00eMPzZ2hXGLrpBOTmK4oK3xM24Gfzkb8AD6IursrJxFNI',
    category: 'Roti Bakar',
    accentColor: '#3F51B5'
  },
  {
    id: '4',
    name: 'Nanas Klasik',
    description: 'Rasa klasik selai nanas rumahan yang manis dan menyegarkan.',
    price: 14000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHWPe3fdzfpDFDCMWg9CzsCI9NcupPxIeW7l59rw_JwNlqL76juHJQGG9TZBPrD1P7XYUrcd0sqzwS7zF_4SsT80YZmXLw-gsBD8n3Hz7Sbp14-sdCFR8Iki4voTpZu23rzcH9rr8ZlmeLFUvaWfYwCRpmBL8_ovgL0NCL3TC8JcBTVvPFFMyOfM3VHyp-eP5zsqvyOMG04vBvdX3R_iYwYFjGHWTEz7VCNxGVG8HqljR3Ma7FFV9zXcNcnrDsuDmzyBmULGnwVvA',
    category: 'Roti Bakar',
    accentColor: '#FBC02D'
  },
  {
    id: '5',
    name: 'Kacang Gurih',
    description: 'Selai kacang chunky dengan tekstur renyah dan gurih mantap.',
    price: 16000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaQnetgObhVctoAct-CGUABLRvJB94VtwZ7LED78WuaT6_3gmRGd2JFAAsgjFGVG5kSNmqQhnB69um7qF-2MZvv69NaJnOfJd1OYXwujMcDu7lT7698IMiQo3nd5rimQQH-ZoqiT38u5uh1GnCbqq8yA_ktn7GQJkValgwl-PqGrkm8OAsPlC838F62UxKggktFWqK0WsGe3WclZw6V_JhiTMeIjQVFTOSBZX30NW8ajrOM5PoHjoaoo0MSxjNm3weUMs4PQW9Z1s',
    category: 'Roti Bakar',
    accentColor: '#8D6E63'
  }
];

export const SIDE_ITEMS: Product[] = [
  {
    id: 's1',
    name: 'Es Kopi Susu Aren',
    description: 'Kopi susu gula aren yang creamy.',
    price: 18000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmN5_I4UD-lWZhYIKeNfbRqikVJRjg8nGzrCVgzwVLPDMZUNnvLFaZ_W0oiiZgjfPvRxeialK76HYb8LK6xJX3KSKVaDwTz89XPNWWkhlZvYKhHwBy_cWR9sbR1ywBUZgVQ26iM3njap-OtKqBXAQyrWh6Z3FKRP0MuacsbdfWa9SuY6K0WVr0ZiomrlGGQOUe4ZuJj96m-E2e1tn5XLlsHQBA6RbBvqdplJnZ2Oac-RANsE0xjgwAVM0KEeKmbE82dcJo2mrDZ3g',
    category: 'Minuman'
  },
  {
    id: 's2',
    name: 'Kentang Goreng',
    description: 'Kentang goreng renyah bumbu gurih.',
    price: 15000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVS_CAVJnaz1Kx2WEB1E5vtWRBy48QuXsEyhha-_m3qhAEwWed-FPMxXD_PqL3qQ5atz-KvywGnqcJArd9KI_lp1laRgZ8hGs0ZHVAP7QEt5XMNaBLfKmNKmvR4pH-ndZ1yo5CAed8satTrfAzvcqu7UwBmoQfftG_MK9bipGqGMntiRAVjzXD6UJxFaixhj-Xezp-P0hgUQjmOwLHhNnY9u8jctjfvwhsmSHSTiyLJH-xd8lHggdIfdGjwo0b7JSZzoTRVuXdJcY',
    category: 'Snack'
  }
];

export const MOCK_USER: User = {
  id: 'u1',
  name: 'Budi Santoso',
  email: 'budi.santoso@email.com',
  phone: '+62 812-3456-7890',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgB7V4QOFqrQ4hLNs-f5NE9deJpwDL2zbMN-gzPVS_okJ581qub_C3a24T8OMacXxKbKvOjgsh4IjQMiNALtJDfnEXWI7KWtT3rKt0kQ7k3ZQXNKt3gdURzeUgH3SWfDixkgRxOd0Od1au3p_Mr0gJAe9ur_IFgW7q_Zhy5yLn1pqXR_5cx_gE_PMoPftYVADhej7VsMWGVpyRq23vy4nvgdPf9uYXIj4wdfG2_VfRo7vLtzrncNnCj92MUblFOFb4DwxeCMv02qs',
  isMember: true
};

export const MOCK_ORDERS: Order[] = [
  {
    id: 'ORD-12345',
    date: '20 Okt 2023',
    status: 'Selesai',
    items: [],
    total: 25000
  },
  {
    id: 'ORD-12344',
    date: '15 Okt 2023',
    status: 'Selesai',
    items: [],
    total: 35000
  }
];
