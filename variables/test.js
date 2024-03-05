// ¡NO TOCAR ESTE ARCHIVO! MODIFICARLO HARÁ QUE LOS RESULTADOS SEAN ERRÓNEOS Y EL EJERCICIO NO ESTÉ CORRECTAMENTE RESUELTO

// Set up mocha
mocha.setup("bdd");

// Establish variables for use in all tests
const { assert, expect } = chai;

describe("Test - Variables I", () => {

    // Test variables
    it("La variable carName existe", () => {
        expect(carName).to.not.be.an("undefined");
    });
    it("La variable carName tiene el valor Volvo", () => {
        expect(carName).to.equal("Volvo");
    });

    it("La variable x existe", () => {
        expect(x).to.not.be.an("undefined");
        expect(x).to.be.an("number");
    });
    it("la variable x es igual a 50", () => {
        expect(x).to.equal(50);
    });

    it("la variable z existe", () => {
        expect(z).to.not.be.an("undefined");
    });
    it("la variable y existe", () => {
        expect(y).to.not.be.an("undefined");
    });
    it("la variable w existe", () => {
        expect(w).to.not.be.an("undefined");
    });

    it("la variable z es igual a 5", () => {
        expect(z).to.equal(5);
    });
    
    it("la variable y es igual a 10", () => {
        expect(y).to.equal(10);
    });

    it("la variable w es igual a z + y", () => {
        expect(w).to.equal(15);
    })

})