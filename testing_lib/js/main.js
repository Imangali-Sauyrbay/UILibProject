function Main() {
  $('.slider').createCarousel({
    images: [
      'https://consumer-img.huawei.com/content/dam/huawei-cbg-site/me-africa/common/mkt/plp/laptops/02list_01-v1.jpg',
      'https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/netbook-vs-laptop-whats-the-difference-hero1563394738439689.png',
      'https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2020/10/hp-spectre-x360-14-press-1.jpg',
      'https://assets1.ignimgs.com/2019/05/17/laptopsmoon-blogroll-1558134085315_160w.jpg?width=1280'
    ]
  });

  getCards().then(html => {
    $('.goods_items').eq(0).html(html);
    $('.card').forEach((el, i) => {
      el.style.animation = `rgb-box_shadow 15s ease ${2 * i}s infinite both alternate`;
    });

    $('.card a').click((e) => {
      e.preventDefault();
      $(e.target.closest('a')).createModal({
        text: {
          title: 'Title',
          body: 'Body'
        },
        btns: [
          {
            text: 'Закрыть',
            classNames: ['btn-danger'],
            close: true
          }
        ]
      });
    })
  })
}

document.addEventListener('DOMContentLoaded', Main);

function get() {
  return [
    {
      url: 'https://www.notebookcheck-ru.com/uploads/tx_nbc2/MicrosoftSurfaceLaptop3-15__1__02.JPG',
      title: 'Microsoft Surface Laptop 3 15, i7-1065G7',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro
      laboriosam illo non, ex facilis odio consequatur praesentium minus doloribus fugiat iste
      recusandae.`,
      btnText: 'Купить',
      target: '#modal'
    },
    {
      url: 'https://media.cnn.com/api/v1/images/stellar/prod/211007171916-underscored-surface-laptop-studio-lead-1.jpg',
      title: 'Microsoft Surface Laptop Studio review: A seriously powerful and versatile 2-in-1',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro
      laboriosam illo non, ex facilis odio consequatur praesentium minus doloribus fugiat iste
      recusandae.`,
      btnText: 'Купить',
      target: '#modal'
    },
    {
      url: 'https://m.media-amazon.com/images/I/81OyDqVoEaL._AC_SL1500_.jpg',
      title: 'Asus ROG Strix SCAR II Gaming Laptop, 15.6” 144Hz IPS Type Full HD, NVIDIA GeForce RTX 2070, Intel Core i7-8750H, 16GB DDR4, 512GB.',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro
      laboriosam illo non, ex facilis odio consequatur praesentium minus doloribus fugiat iste
      recusandae.`,
      btnText: 'Купить',
      target: '#modal'
    },
    {
      url: 'https://www.notebookcheck-ru.com/uploads/tx_nbc2/MicrosoftSurfaceLaptop3-15__1__02.JPG',
      title: 'Microsoft Surface Laptop 3 15, i7-1065G7',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro
      laboriosam illo non, ex facilis odio consequatur praesentium minus doloribus fugiat iste
      recusandae.`,
      btnText: 'Купить',
      target: '#modal'
    },
    {
      url: 'https://www.notebookcheck-ru.com/uploads/tx_nbc2/MicrosoftSurfaceLaptop3-15__1__02.JPG',
      title: 'Microsoft Surface Laptop 3 15, i7-1065G7',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro
      laboriosam illo non, ex facilis odio consequatur praesentium minus doloribus fugiat iste
      recusandae.`,
      btnText: 'Купить',
      target: '#modal'
    },
    {
      url: 'https://www.notebookcheck-ru.com/uploads/tx_nbc2/MicrosoftSurfaceLaptop3-15__1__02.JPG',
      title: 'Microsoft Surface Laptop 3 15, i7-1065G7',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro
      laboriosam illo non, ex facilis odio consequatur praesentium minus doloribus fugiat iste
      recusandae.`,
      btnText: 'Купить',
      target: '#modal'
    },
    {
      url: 'https://www.notebookcheck-ru.com/uploads/tx_nbc2/MicrosoftSurfaceLaptop3-15__1__02.JPG',
      title: 'Microsoft Surface Laptop 3 15, i7-1065G7',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro
      laboriosam illo non, ex facilis odio consequatur praesentium minus doloribus fugiat iste
      recusandae.`,
      btnText: 'Купить',
      target: '#modal'
    }
  ]
}

function getCards() {
  return  new Promise((res, rej) => {
    res(get().reduce((acc, item) => {
      const {title, text, url, btnId, btnText, target} = item;
      return acc + `
      <div class="card">
        <img src="${url}" alt="card-img"
            class="card-img">
        <div class="card-body">
            <div class="card-title">${title}</div>
            <p class="card-text">${text}</p>
            <a href="#" ${btnId ? `id="${btnId}"` : ''} class="btn btn-primary" ${target ? `data-target="${target}"` : ''}>
            ${btnText ? btnText : 'Link to'}
            </a>
        </div>
      </div>
      `
    }, ''))
  });
}
