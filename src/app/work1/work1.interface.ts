export interface PersonData {
    name: string,
    isStudent: boolean,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: number
    }
}