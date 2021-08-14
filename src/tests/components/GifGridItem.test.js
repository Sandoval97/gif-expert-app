import { shallow } from "enzyme"
import GifGridItem from "../../components/GifGridItem"

describe("Pruebas para el componente GifGridItem", () => {
    let wrapper;

    const imageTitle = "This is a title"
    const url = "https://localhost/image.gif"
    beforeEach(() => {

        wrapper = shallow(<GifGridItem title={imageTitle} url={url} />)
    })
    test("Debe mostrar el componente correctamente", () => {

        expect(wrapper).toMatchSnapshot()
    })

    test("Debe mostrar el title adecuado", () => {

        const p = wrapper.find('p')
        expect(p.text().trim()).toBe(imageTitle)
    })

    test("La imagen debe tener la url pasada como parametro", () => {

        const img = wrapper.find('img')

        expect(img.props().src).toBe(url)
        expect(img.props().alt).toBe("Cargando...")
    })

    test("El contenedor padre debe tener la clase para la animacion fadeIn", () => {

        const div = wrapper.find('div')
        const className = div.prop('className')

        expect(className.includes('animate__fadeIn')).toBe(true)
    })
})