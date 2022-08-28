const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryList = document.querySelector('.gallery');
const addMarkup = images.map(el => `<li><img class="picture" src='${el.url}' width="500" alt='${el.alt}'></li>`).join('');
galleryList.insertAdjacentHTML("beforeend", addMarkup);
galleryList.style.display = 'flex';
galleryList.style.padding = '0';
galleryList.style.aligenItem = 'center';
galleryList.style.listStyle = 'none';