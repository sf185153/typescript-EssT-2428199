type ContactName = string;
type ContactStatus = "active" | "inactive" | "new"
type ContactBirthDate = Date | number | string

interface Contact  {
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate;
    status?: ContactStatus;
}

let primaryContact: Contact = {
    id: 12345,
    name: "Jamie Johnson",
    status: "active"
}

type CF = keyof Contact; 

function getValue<T>(source: T, propertyName: keyof T) {
    return source[propertyName]
}

const value = getValue({min:1, max:200}, "max")