import { act, renderHook } from "@testing-library/react-hooks"
import { useForm } from "../../hooks/useForm"

describe('Pruebas en useForm', () => {
  
  const initialForm = {
    name: 'cesar',
    email: 'checha@mail.com'
  }

  test('debe de regresar un formulario por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm))
    const [ values, handleInputChange, reset ] = result.current;

    expect(initialForm).toEqual(values);
    expect( typeof handleInputChange ).toBe( 'function' )
    expect( typeof reset ).toBe( 'function' )
  })
  
  test('debe de cambiar el valor del formulario (cambiar el nombre)', () => {
    const { result } = renderHook(() => useForm(initialForm))
    const [ , handleInputChange ] = result.current;

    const event = {
      target: {
        name: 'name',
        value: 'Juan'
      }
    }

    act(() => handleInputChange(event))

    const [ values ] = result.current;

    expect(values).toEqual({ ...initialForm, name: 'Juan'})
  })
  
  test('debe de re-establecer el formulario con RESET', () => {
    
    const { result } = renderHook(() => useForm(initialForm))
    const [ , handleInputChange, reset ] = result.current;

    const event = {
      target: {
        name: 'name',
        value: 'Juan'
      }
    }

    act(() => handleInputChange(event))

    const [ values ] = result.current;
    expect('Juan').toEqual(values.name)

    act(() => reset())

    expect(initialForm).toEqual(result.current[0])

  })
  
})
