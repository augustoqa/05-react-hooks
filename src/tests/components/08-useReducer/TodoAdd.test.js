import { shallow } from "enzyme";
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";

describe("Pruebas en <TodoAdd />", () => {
  const handleAddTodo = jest.fn();

  const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

  test("debe de mostrar correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("No debe de llamar handleAddTodo", () => {
    const formSubmit = wrapper.find("form").prop("onSubmit");

    formSubmit({ preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test("debe de llamar la función handleAddTodo", () => {
    const value = "Aprender Java";
    wrapper.find("input").simulate("change", {
      target: {
        value,
        name: "description",
      },
    });

    const formSubmit = wrapper.find("form").prop("onSubmit");

    formSubmit({ preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false,
    });

    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
