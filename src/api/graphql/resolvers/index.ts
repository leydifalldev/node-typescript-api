import { UserQuery, UserMutation } from "./user.resolver";
import { PlaceQuery, PlaceMutation } from "./place.resolver";
import { ProductQuery, ProductMutation } from "./product.resolver";
import { EventQuery, EventMutation } from "./event.resolver";
import { TemplateQuery, TemplateMutation } from "./template.resolver";
import { PageQuery, PageMutation } from "./page.resolver";
import { LocationQuery } from "./location.resolver";
import { CatalogueQuery, CatalogueMutation } from "./catalogue.resolver";
import { CmsQuery, CmsMutation } from "./cms.resolver";
import { CommonQuery, CommonMutation } from "./common.resolver";
import { CatColMutation } from "./colcat.resolver";
import { MetaQuery, MetaMutation } from "./meta.resolver";

export default {
  Query: {
    ...PageQuery,
    ...CmsQuery,
    ...CatalogueQuery,
    ...CommonQuery,
    ...EventQuery,
    ...LocationQuery,
    ...PlaceQuery,
    ...ProductQuery,
    ...UserQuery,
    ...TemplateQuery,
    ...MetaQuery,
  },

  Mutation: {
    ...CatalogueMutation,
    ...CatColMutation,
    ...CommonMutation,
    ...CmsMutation,
    ...UserMutation,
    ...PlaceMutation,
    ...ProductMutation,
    ...EventMutation,
    ...TemplateMutation,
    ...PageMutation,
    ...MetaMutation
  }
};
