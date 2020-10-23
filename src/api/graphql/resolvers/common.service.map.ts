import ProductStore from "../../../services/product/product.service";
import MetaRepository from "../../../services/meta/meta.repository";
import LocationRepository from "../../../services/location/location.repository";
import { Uploader } from "../../../services/uploader/upload.service";
import PlaceStore from "../../../services/place/place.service";

const ServiceMap:any = {
  PRODUCT: {
    index: "product",
    service: ProductStore,
  },
  GALLERY: {
    index: "gallery",
    service: new Uploader(),
  },
  PLACE: {
    index: "place",
    service: PlaceStore
  },
  EVENT: {
    index: "event",
  },
  USER: {
    index: "user",
  },
  META: {
    index: "meta",
    service: MetaRepository,
  },
  LOCATION: {
    index: "location",
    service: LocationRepository,
  },
}

export default ServiceMap;