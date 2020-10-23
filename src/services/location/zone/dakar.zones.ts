import { IHydrateModel } from "../../../defs";

const dakarZones: IHydrateModel = {
  bulkHead: { index: "location", action: "create"},
  __typename: "MetaLocation",
  criteria: [{name: "collection", value: "dakar-zones"}],
  items: [
  {
    id: "SICAP",
    name: "sicap",
    label: "Sicap",
    collection: "dakar-zones",
    category: "zone",
    parent: {
      name: "dakar"
    }
  },
  {
    id: "YOFF",
    name: "yoff",
    label: "YOFF",
    collection: "dakar-zones",
    category: "zone",
    parent: {
      name: "dakar"
    }
  },
  {
    id: "MEDINA",
    name: "medina",
    label: "Medina",
    collection: "dakar-zones",
    category: "zone",
    parent: {
      name: "dakar"
    }
  },
  {
    id: "MARISTES",
    name: "maristes",
    label: "Maristes",
    collection: "dakar-zones",
    category: "zone",
    parent: {
      name: "dakar"
    }
  },
  {
    id: "CORNICHE_OUEST",
    name: "corniche-ouest",
    label: "Corniche-Ouest",
    collection: "dakar-zones",
    category: "zone",
    parent: {
      name: "dakar"
    }
  },
  {
    id: "CORNICHE_EST",
    name: "corniche-est",
    label: "Corniche-Est",
    collection: "dakar-zones",
    category: "zone",
    parent: {
      name: "dakar"
    }
  },
  {
    id: "PLATEAU",
    name: "plateau",
    label: "Plateau",
    collection: "dakar-zones",
    category: "zone",
    parent: {
      name: "dakar"
    }
  },
  {
    id: "FOIRE",
    name: "foire",
    label: "Foire",
    collection: "dakar-zones",
    category: "zone",
    parent: {
      name: "dakar"
    }
  },
  {
    id: "PATTE_D_OIE",
    name: "patte-d-oie",
    label: "Patte d'Oie",
    collection: "dakar-zones",
    category: "zone",
    parent: {
      name: "dakar"
    }
  },
  {
    id: "PIKINE",
    name: "pikine",
    label: "Pikine",
    collection: "dakar-zones",
    category: "zone",
    parent: {
      name: "dakar"
    }
  },
  {
    id: "MERMOZ",
    name: "mermoz",
    label: "Mermoz",
    collection: "dakar-zones",
    category: "zone",
    parent: {
      name: "dakar"
    }
  },
  {
    id: "KEUR_GUORGUI",
    name: "keur-guorgui",
    label: "Keur Guorgui",
    collection: "dakar-zones",
    category: "zone",
    parent: {
      name: "dakar"
    }
  },
]
}

export default dakarZones;
