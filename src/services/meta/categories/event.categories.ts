import { IHydrateModel } from "../../../defs";

const eventCategories: IHydrateModel = {
    index: "meta",
    __typename: "Meta",
    bulkHead: { index: "meta", action: "create" },
    criteria: [{ name: "collection", value: "event-category" }],
    items: [
        {
            id: "EVECAT0000001",
            collection: "event-category",
            name: "concert",
            categories: ["event"],
        }, {
            id: "EVECAT0000002",
            collection: "event-category",
            name: "soirée",
            categories: ["event"],
        },
        {
            id: "EVECAT0000003",
            collection: "event-category",
            name: "exposition",
            categories: ["event"],
        },
        {
            id: "EVECAT0000004",
            collection: "event-category",
            name: "brunch",
            categories: ["event"],
        },
        {
            id: "EVECAT0000005",
            collection: "event-category",
            name: "sound system",
            categories: ["event"],
        }
    ]
}

export default eventCategories;
