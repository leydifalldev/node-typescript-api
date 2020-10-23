import blogData from "./blog.sample";
import { RepositoryResponse } from "../../defs";

export class BlogRepository {
  constructor() {
  }

  async getPage({ criteria }): Promise<RepositoryResponse> {
    try {
      return {
        status: 200,
        payload: blogData,
        error: "NONE"
      }
    } catch (e) {
      return {
        status: 500,
        payload: "NONE",
        error: "INTERNAL_ERROR"
      }
    }
  }
}

export default new BlogRepository();
