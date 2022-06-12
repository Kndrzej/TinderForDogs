import { checkProvidedData } from "../utils/check"

it('valid Data', () => {
    const areValid = checkProvidedData("user6", "zaq2@WSX", 'dasd', 'fs')
    expect(areValid).toBeTruthy()
});

it('invalid Data - login missing', () => {
    const areValid = checkProvidedData("", "zaq2@WSX", "dasd", "fs")
    expect(areValid).toBeFalsy()
});

it('invalid Data - password missing', () => {
    const areValid = checkProvidedData("user6", "", 'dasd', 'fs')
    expect(areValid).toBeFalsy()
});

it('invalid Data - name missing', () => {
    const areValid = checkProvidedData("user6", "zaq2@WSX", '', 'fs')
    expect(areValid).toBeFalsy()
});

it('invalid Data - dog name missing', () => {
    const areValid = checkProvidedData("user6", "zaq2@WSX", 'dasd', '')
    expect(areValid).toBeFalsy()
});