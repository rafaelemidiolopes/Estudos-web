obterdadosclima = () => {
    const apikey = "e5f26f496c12ea6cd8df3e8c6441cbe8"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Itaquaquecetuba&appid=" + apikey;
    fetch(url)
    .then(Response => Response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error('Erro ao obter dados de clima:', error)
    })


}
obterdadosclima()