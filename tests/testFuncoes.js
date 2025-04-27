// tests/testFuncoes.js

const {
  somar,
  subtrair,
  multiplicar,
  dividir,
  inverterString,
} = require("../funcoes");

test("adiciona 2 e 3 para resultar 5", () => {
  expect(somar(2, 3)).toBe(5);
});

test("subtrai 5 e 3 para resultar 2", () => {
  expect(subtrair(5, 3)).toBe(2);
});

test("multiplica 4 e 2 para resultar 8", () => {
  expect(multiplicar(4, 2)).toBe(8);
});

test("divide 10 por 2 para resultar 5", () => {
  expect(dividir(10, 2)).toBe(5);
});

test('inverte a string "devops" para "spoved"', () => {
  expect(inverterString("devops")).toBe("spoved");
});
