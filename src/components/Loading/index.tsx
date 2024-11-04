import { Spinner } from "./styles";
import { TbLoader3 } from "react-icons/tb";

export function Loader() {
  return (
    <Spinner>
      <TbLoader3 size={120} color="#323238" />
    </Spinner>
  );
}
