async function getImages(movie){
    try{
        const response = await fetch(`https://api.disneyapi.dev/character?films=${movie}`);
        const result = await response.json();
        const images = [];
        for(let obj of result.data){
            images.push({key:crypto.randomUUID(), url:obj.imageUrl, name:obj.name});
        }
        return images;
    }
    catch(e){
        console.error(e);
    }
}

export default getImages;