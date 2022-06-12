import {checkCredentials} from "../utils/check"
import allUsers from "../users.json"


it('valid user credentials', () => {
    const areValid = checkCredentials("user1", "zaq1@WSX", allUsers)
    expect(areValid).toBeTruthy()
});

it('invali user credentials - invalid login', () => {
    const areValid = checkCredentials("user8", "zaq1@WSX", allUsers)
    expect(areValid).toBeFalsy()
});

it('invalid user credentials - invalid password', () => {
    const areValid = checkCredentials("user6", "zaq2@WSX", allUsers)
    expect(areValid).toBeFalsy()
});

it('invalid user credentials - invalid password', () => {
    const areValid = checkCredentials("user6", "zaq2@WSX", allUsers)
    expect(areValid).toBeFalsy()
});

