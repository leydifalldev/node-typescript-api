import { TemplateBasic } from "../template.defs";

const eventLayout: TemplateBasic = {
    categories: ["event"],
    criteria: [{name: "name", value: "basic"}, {name: "index", value: "event"}, {name: "component", value: "layout"}],
    screen: 'home',
    items: [
    {
        name: "basic",
        collection: 'event-page',
        screen: 'home',
        component: "layout",
        children: [
            {
                label: "concerts",
                operation: "SEARCH_PLACE",
                params: {
                    criteria: [
                        { name: "categories", collection: ["discothèque"]}
                    ],
                    size: 10
                },
                card: "large",
                backgroundColor: "transparent",
                position: 0
            },
            {
                label: "discothèques",
                operation: "SEARCH_PLACE",
                params: {
                    criteria: [
                        { name: "categories", collection: ["discothèque"]}
                    ],
                    size: 10
                },
                card: "large",
                backgroundColor: "transparent",
                position: 1
            },
            {
                label: "tendance du moment",
                operation: "SEARCH_PLACE",
                params: {
                    size: 10
                },
                card: "large",
                backgroundColor: "transparent",
                position: 2
            }
        ]
    }
]
}

export default eventLayout;