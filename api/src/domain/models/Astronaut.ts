// Principio de Segregación de Interfaces (ISP)


/* The code is defining an interface named "Astronaut" in TypeScript. An interface is a way to define
the structure of an object. In this case, the "Astronaut" interface has four properties: "id" of
type string, "name" of type string, "age" of type number, and "nationality" of type string. This
interface can be used to define objects that have these properties. The "export" keyword is used to
make the interface accessible outside of the current module. */

export interface Astronaut {
    id: string;
    name: string;
    age: number;
    nationality: string;
  }
  