import { BoxList, Option } from "./styles";

interface OptionsListProps {
  list: string[];
  valueActive: string;
  setValue: (value: string) => void;
}

export function OptionsList({ list, valueActive, setValue }: OptionsListProps) {
  return (
    <BoxList>
      {list.map((item) => (
        <Option
          active={valueActive === item}
          onClick={() => setValue(item)}
          key={item}
        >
          {item}
        </Option>
      ))}
    </BoxList>
  );
}
