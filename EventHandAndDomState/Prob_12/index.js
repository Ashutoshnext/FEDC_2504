let page = 1;
const limit = 15;
const gallery = document.getElementById('gallery');

async function fetchImages() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`);
  const data = await res.json();
  data.forEach(photo => {
    console.log(photo);
    
    const img = document.createElement('img');
    img.src = "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png";
    // i use own image because jsonplaceholder image not wroking
    img.alt = photo.title;
    img.title=photo.title
    gallery.appendChild(img);
  });
}

function handleScroll() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
    page++;
    fetchImages();
  }
}

window.addEventListener('scroll', handleScroll);
fetchImages(); 
