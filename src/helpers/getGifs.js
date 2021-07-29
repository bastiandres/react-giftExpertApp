

export const getGifs = async( category ) => {


    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=mpVUTH3ir0ZOnltzH2mzrd9j6FBFH3lU`;
    const respuesta = await fetch( url );
    const { data } = await respuesta.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        };
    })

    // console.log(gifs);

    // set imagenes
    // setImages( gifs );

    return gifs;
}