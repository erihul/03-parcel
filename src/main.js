console.log("Testar logga");

const img = document.createElement('img');
document.body.append(img);


// new URL(relativa sökvägen till bilden, sökväg till modulen)
// OBS! De två argumenten kan inte vara variabler
const imgUrl = new URL('./media/kostym.jpg', import.meta.url);
img.src = imgUrl.href;