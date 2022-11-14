
const dataMenuLeft = [
  {
    type: 'link',
    title: 'Главная',
    url: '/',
    children: []
  },
  {
    type: 'link',
    title: 'Услуги',
    url: '/',
    children: [
      {
        type: 'link',
        title: 'Кремация',
        url: '/shop/catalog/cosmitika',
        children: [
          { type: 'link', title: 'Корейские', url: '/shop/catalog/cosmitika?filter_brand=seagate' },

        ]
      },
      {
        type: 'link',
        title: 'Что-то еще',
        url: '/shop/catalog/cosmitika',
        children: [
          { type: 'link', title: 'Тайвайнские', url: '/shop/catalog/cosmitika?filter_brand=seagate' },

        ]
      },

    ]
  },
  {
    type: 'link',
    title: 'Расчитать стоимость похорон',
    url: '/shop/catalog',
    children: [
      {
        type: 'link',
        title: 'Хрестинские',
        url: '/shop/catalog/cosmitika',
        children: [
          { type: 'link', title: 'Корейские', url: '/shop/catalog/cosmitika?filter_brand=seagate' },

        ]
      },
      {
        type: 'link',
        title: 'Мусульманские',
        url: '/shop/catalog/cosmitika',
        children: [
          { type: 'link', title: 'Тайвайнские', url: '/shop/catalog/cosmitika?filter_brand=seagate' },

        ]
      },

    ]
  },
  {
    type: 'link',
    title: 'Комплексные услуги',
    url: '/price',
    children: [
      {
        type: 'link',
        title: 'Крема',
        url: '/shop/catalog/cosmitika',
        children: [
          { type: 'link', title: 'Корейские', url: '/shop/catalog/cosmitika?filter_brand=seagate' },

        ]
      },
      {
        type: 'link',
        title: 'Тоники',
        url: '/shop/catalog/cosmitika',
        children: [
          { type: 'link', title: 'Тайвайнские', url: '/shop/catalog/cosmitika?filter_brand=seagate' },

        ]
      },

    ]
  },
  {
    type: 'link',
    title: 'Статьи',
    url: '/blog',
    children: [
      {
        type: 'link',
        title: 'Крема',
        url: '/shop/catalog/cosmitika',
        children: [
          { type: 'link', title: 'Корейские', url: '/shop/catalog/cosmitika?filter_brand=seagate' },

        ]
      },
      {
        type: 'link',
        title: 'Тоники',
        url: '/shop/catalog/cosmitika',
        children: [
          { type: 'link', title: 'Тайвайнские', url: '/shop/catalog/cosmitika?filter_brand=seagate' },

        ]
      },

    ]
  },
  {
    type: 'link',
    title: 'Контакты',
    url: '/contact',
    children: []
  },
  
]

export default dataMenuLeft
