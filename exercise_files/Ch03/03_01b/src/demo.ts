type ContactName = string;

/*
enum ContactStatus {
    Active = "active",
    Inactive = "inactive",
    New = "new"
}
*/
type ContactStatus = "active" | "inactve" | "new"
type ContactBirthDate = Date | number | string;

interface Contact {
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate
    status?: ContactStatus;
}

interface Address {
    line1: string;
    line2: string;
    province: string;
    region: string;
    postalCode: string;
}

function getBirthDate(contact: Contact) {
    if (typeof contact.birthDate === "number") {
        return new Date(contact.birthDate);
    }
    else if (typeof contact.birthDate === "string") {
        return Date.parse(contact.birthDate)
    }
    else {
        return contact.birthDate
    }
}
type AddressableContact = Contact & Address

let primaryContact: Contact = {
    id: 12345,
    name: "Jamie Johnson"
}
let secondatyContact: AddressableContact 