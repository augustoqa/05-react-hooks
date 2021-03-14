import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en todoReducer", () => {
  test("debe de retornar el estado por defecto", () => {
    const state = todoReducer(demoTodos, {});

    expect(state).toEqual(demoTodos);
  });

  test("debe de agregar un TODO", () => {
    const todo = {
      id: 3,
      desc: "Aprender Node",
      done: true,
    };

    const action = {
      type: "add",
      payload: todo,
    };

    const state = todoReducer(demoTodos, action);

    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, action.payload]);
  });

  test("debe de borrar un TODO", () => {
    const state = todoReducer(demoTodos, { type: "delete", payload: 2 });

    expect(state.length).toBe(1);
    expect(state).toEqual([demoTodos[0]]);
  });

  test("debe de hacerl el TOGGLE del TODO", () => {
    const state = todoReducer(demoTodos, { type: "toggle", payload: 1 });

    expect(state[0].done).toBe(true);
    expect(state[1]).toEqual(demoTodos[1]);
  });
});
