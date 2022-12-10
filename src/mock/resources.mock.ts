/* Place interface imports here */
import {Resource} from "@/interfaces/resource.interface";

export const RESOURCES: Resource[] = [
    {
        id: 1,
        title: "VueJS Official Guide",
        description: "The Progressive JavaScript Framework. An approachable, performant and versatile framework for building web user interfaces.",
        link: "https://vuejs.org/"
    },
    {
        id: 2,
        title: "Angular Official Guide",
        description: "The official Angular documentation. Deliver web apps with confidence. The web development framework for building the future.",
        link: "https://angular.io/"
    },
    {
        id: 3,
        title: "React Official Guide",
        description: "The official React documentation. A JavaScript library for building user interfaces.",
        link: "https://reactjs.org/"
    }
];
