import { shallow } from "enzyme"
import GifGrid from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs"

jest.mock('../../hooks/useFetchGifs')

describe('Pruebas al componente GifGrid', () => {
    let category = 'Match'

    test('Debe mostrar el componente correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: false
        })
        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot()
    })

    test('Se debe de renderizar el texto de carga porque no hay items', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper.find('p').exists()).toBe(true)
    })

    test('Se debe de renderizar el numero correcto de items', () => {

        let gifs = [{
            id: 0,
            url: 'https://localhost/test.gif',
            title: 'Imagen Prueba'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        const wrapper = shallow(<GifGrid category={category} />)

        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
    })
})