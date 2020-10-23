import { ApolloError } from "apollo-server";
import EventStore from "../../../services/event/event.service";


export const EventQuery = {
  searchEvent: async (root, args) => {
    const response = await EventStore.search(args);

    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },

  getEvent: async (root, args) => {
    const response = await EventStore.get({id: args.eventid});
    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },

  groupByDateEvent: async (root, args) => {
    const { from, size, criteria } = args;
    const response = await EventStore.groupByDate("day", "start", criteria, size, from);
    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, String(response.status));
  }
};

export const EventMutation = {
  createEvent: async (root, args) => {
    const response = await EventStore.addEventToPlace(args.event);
    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },

  updateEvent: async (root, args) => {
    const {
      event: { id, ...eventBody }
    } = args;
    const response = await EventStore.update({id: args.eventid, record: eventBody});
    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },

  deleteEvent: async (root, args) => {
    const response = await EventStore.delete(args.id);
    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },

  uploadPicturesEvent: async (parent, params) => {
    const { id, pictures } = params;
    const response = await EventStore.addPictures(id, pictures);

    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  }
};
