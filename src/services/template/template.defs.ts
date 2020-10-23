export interface SearchParams {
    criteria?: KeyValue[];
    size?: number;
}

export interface Section {
    label: string;
    operation?: string;
    params?: SearchParams;
    position?: number;
    card: string; 
    backgroundColor?: string;
    backgroundImg?: string;
}

export interface Template {
    name: string;
    label?: string;
    sublabel?: string;
    input?: string;
    collection: string;
    categories?: string[];
    screen?: string;
    position?: number;
    children?: Section[];
    component?: string;
}

export interface TemplateBasic{
    input?: string;
    categories?: string[];
    screen?: string; 
    criteria: KeyValue[];
    items: Template[];
}

interface KeyValue {
    name: string;
    value?: any;
    collection?: any;
}
