export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=qWbQDzPF825r2NC1U42CdAgPWnBSdiwu`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gift = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url//interrogacion es para saber si las trae
        }
    })
    return gift;

}