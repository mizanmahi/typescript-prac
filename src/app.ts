// intersection types allow us to combine other types

type Admin = {
   name: string;
   privilege: string[];
};

type Employee = {
   name: string;
   startDate: Date;
};

// this intersection can be done with the interface too by extends keyword
type intersectAdminAndEmployee = Admin & Employee;

let obj: intersectAdminAndEmployee;

// this object must have to have name, privilege, and startDate properties
obj = {
   name: "mzian",
   privilege: ["good"],
   startDate: new Date(),
};

// type guard
