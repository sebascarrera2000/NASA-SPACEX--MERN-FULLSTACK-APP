// Principio de Segregación de Interfaces (ISP)

/* The code is defining an interface called `Mission`. This interface has four properties: `id` of type
string, `name` of type string, `launchDate` of type Date, and `destination` of type string. The
`export` keyword indicates that this interface can be accessed and used by other modules or files. */
export interface Mission {
  id: string;
  name: string;
  launchDate: Date;
  destination: string;
}
