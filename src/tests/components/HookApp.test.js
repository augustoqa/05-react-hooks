import { shallow } from "enzyme";
import { HookApp } from "../../HookApp";

describe('Pruebas en <HookApp />', () => {
  
  test('debe de mostrar correctamente el componente', () => {
    const wrapper = shallow(<HookApp />)
    
    expect( wrapper ).toMatchSnapshot();
  })
})
