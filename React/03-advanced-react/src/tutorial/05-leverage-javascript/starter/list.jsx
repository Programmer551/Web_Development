import { Person } from "./Person";
import { people } from "../../../data";

const list = () => {
  return <Person data={people} />;
};
export default list;
