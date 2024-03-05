// ¡NO TOCAR ESTE ARCHIVO! MODIFICARLO HARÁ QUE LOS RESULTADOS SEAN ERRÓNEOS Y EL EJERCICIO NO ESTÉ CORRECTAMENTE RESUELTO

// Set up mocha
mocha.setup("bdd");

// Establish variables for use in all tests
const { assert, expect } = chai;

describe("Test - Funciones III", () => {
  it("La función empujarHeroe existe", () => {
    expect(empujarHeroe).to.not.be.an("undefined");
    expect(empujarHeroe).to.be.an("function");
  });

  it("La función empujarHeroe funciona correctamente", () => {
    const arr = [];
    empujarHeroe(arr, "Superman");
    expect(arr).to.deep.equal(["Superman"]);
  });

  it("La función sacarHeroe existe", () => {
    expect(sacarHeroe).to.not.be.an("undefined");
    expect(sacarHeroe).to.be.an("function");
  });

  it("La función sacarHeroe funciona correctamente", () => {
    const arr = ["Batman", "Superman"];
    sacarHeroe(arr);
    expect(arr).to.deep.equal(["Batman"]);
  });

  it('La variable superheroes vale ["Spiderman", "Hulk", "Thor"] después de lanzar todo el código', () => {
    expect(superheroes).to.deep.equal(["Spiderman", "Hulk", "Thor"]);
  });
});
