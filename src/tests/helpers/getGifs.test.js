import { getGifs } from '../../helpers/getGifs'

describe("Pruebas para el helper getGifs para obtener gifs", () => {
    test("Debe de traer 10 elementos", async () => {
        const gifs = await getGifs('Elon musk')
        expect(gifs.length).toBe(10)
    })

    test("Sin categoria no debe regresar gifs", async () => {
        const gifs = await getGifs('')
        expect(gifs.length).toBe(0)
    })
})