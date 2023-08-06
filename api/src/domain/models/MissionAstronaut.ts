// Principio de Segregación de Interfaces (ISP)

/* The code is defining an interface called `MissionAstronaut`. This interface has two properties:
`missionId` of type string and `astronautId` of type string. This interface can be used to define
objects that represent a mission and an astronaut associated with that mission. */

export interface MissionAstronaut {
  missionId: string;
  astronautId: string;
}
