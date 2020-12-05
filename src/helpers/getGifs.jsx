const getGifs = async ( category ) => {
    const res = await fetch(`https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&api_key=fTiwV0E0oB1pV8n5950SVgHxyrDgYdtl`)
    const { data } = await res.json()
    const gifs = data.map( gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }
    })
    return gifs
}

export default getGifs;