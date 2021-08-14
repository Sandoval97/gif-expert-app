import React from "react";
import { shallow } from "enzyme"
import AddCategory from "../../components/AddCategory"

describe("Pruebas en componente AddCategory", () => {
    const setCategories = jest.fn()
    var wrapper;

    beforeEach(() => {
        wrapper = shallow(<AddCategory setCategories={setCategories} />)
    })

    test("El componente no debe cambiar su estructura tipica en JSX", () => {
        expect(wrapper).toMatchSnapshot()
    })

    test("Se debio haber llamado el metodo setCategories", () => {
        const input = wrapper.find('input')
        const value = 'Hello World'
        input.simulate('change', {
            target: { value }
        })

        const form = wrapper.find('form')
        form.simulate('submit', {
            preventDefault: jest.fn()
        })
        expect(setCategories).toHaveBeenCalled();
    })


    test("No se debio haber llamado el metodo setCategories", () => {

        const form = wrapper.find('form')
        form.simulate('submit', {
            preventDefault: jest.fn()
        })
        expect(setCategories).not.toHaveBeenCalled();
    })

    test("Luego de todo el flujo se debe haber limpiado el input", () => {
        const input = wrapper.find('input')
        const value = 'Hello World!'
        input.simulate('change', {
            target: { value }
        })

        const form = wrapper.find('form')
        form.simulate('submit', {
            preventDefault: jest.fn()
        })

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(input.prop('value')).toBe('');
    })


})