import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Posts {
  readonly id: string;
  readonly images?: string[];
  readonly text: string;
  constructor(init: ModelInit<Posts>);
  static copyOf(source: Posts, mutator: (draft: MutableModel<Posts>) => MutableModel<Posts> | void): Posts;
}