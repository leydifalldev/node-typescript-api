import { MetaCommit } from "../meta.defs";

const userRoles: MetaCommit = {
    criteria: [{name: "collection", value: "user-role"}],
    items: [
    {
        name: "ADMIN",
        collection: "user-role",
        categories: ["profile"],
    }, {
        name: "PRO",
        collection: "user-role",
        categories: ["profile"],
    },
    {
        name: "PREMIUM",
        collection: "user-role",
        categories: ["profile"],
    },
    {
        name: "BASIC",
        collection: "user-role",
        categories: ["profile"],
    }
]
}

export default userRoles;