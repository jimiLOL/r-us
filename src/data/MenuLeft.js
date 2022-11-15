
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
    url: '/services',
    children: [
      {
        type: 'link',
        title: 'Кремация',
        url: '/services/kremaciya',
    
      },
      {
        type: 'link',
        title: 'Что-то еще',
        url: '/services/gruz_200',
        
      },

    ]
  },
  {
    type: 'link',
    title: 'Расчитать стоимость похорон',
    url: '/',
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
