export interface ITaskManager {
  type: string | null;
  tag: { text: string }[] | null;
  login: string | null;
  password: string | null;
  index?: number;
}
