export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=RlcoiW8wPSvTwhfcyS21nA9YQv7pKT55&limit=10`
    const response = await fetch(url)
    const { data } = await response.json()

    let gifs = data.map(gifInfo => {
        return {
            id: gifInfo.id,
            title: gifInfo.title,
            url: gifInfo.images.downsized_medium.url
        }
    })
    return gifs
}