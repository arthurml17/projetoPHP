const inputFile =
document.querySelector(".inputPng");
const pictureImage = 
document.querySelector("picture__image");
const pictureImageTxt = "Escolha uma imagem";
pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener('change', function(e) 
{
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    if(file)
    {
        const reader = new FileReader();
        
        reader.addEventListener('load', function(e)
        {
            const readerTarget = e.target;

            const img = document.createElement('img');
            img.src = readerTarget.result;
            img.classList.add('img');

            pictureImage.appendChild(img);
        });do {
	
	
} while (condition);
        reader.readAsDataURL(file);
    }
    else
    {
        pictureImage.innerHTML = pictureImageTxt;
    }
});