interface Contact { // extends Address
    id: number;
    name: string;
    birthDate?: Date;
}

/*
interface Address {
    line1: string;
    line2: string;
    prov: string;
    reg: string;
    postalCode: string;
}
*/
let prim: Contact = {
    id: 1,
    name: "bob",
    //birthDate: new Date("11/11/1111")
};

let x: number;
x = prim.id;