import { Forms } from "@vendetta/ui/components";
import { storage } from "@vendetta/plugin";
const { FormText, FormInput } = Forms;
import { useProxy } from "@vendetta/storage";

export default () => {
    const [format, setFormat] = React.useState(storage.format);

useProxy(storage);
return (
    <FormInput
       value={format}
       onChange={v => {
          storage.format = v == "" ? null : v
          setFormat(format)
       }}
       placeholder={"Custom Format"}
       title='Custom Timestamp Format'
    />


)
    }