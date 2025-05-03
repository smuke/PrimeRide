import {
    Autocomplete,
    Button,
    Input,
    Key,
    Label,
    ListBox,
    ListBoxItem,
    Popover,
    SearchField,
    Select,
    SelectValue,
    useFilter
} from "react-aria-components";

import { useState } from "react";
import styles from "./LocationInput.module.css";
import locations from "../../data/locations.json";

function LocationInput({ updateLocation }: any) {;
    const { contains } = useFilter({ sensitivity: "base" });
    const [input, setInput] = useState("");

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    const handleSelect = (id: Key) => {
        updateLocation(id);
    }

    return (
        <div>
            <Select className={styles.select}>
                <Button className={styles.button}>
                    <SelectValue className="flex-1 truncate">Choose location</SelectValue>
                </Button>
                <Popover className={styles.popover} offset={0}>
                    <Autocomplete filter={contains}>
                        <SearchField className={styles.searchField} autoFocus>
                            <Input 
                                placeholder="Enter a Location..." 
                                value={input} 
                                onChange={handleInput}
                            />
                            <Button onClick={() => setInput("")}>✕</Button>
                        </SearchField>
                        <ListBox className={styles.menu} items={locations} onAction={handleSelect}>
                            {(item) => <ListBoxItem className={styles.menuItem}>{`${item.city}, ${item.state}`}</ListBoxItem>}
                        </ListBox>
                    </Autocomplete>
                </Popover>
            </Select>
        </div>
    );
}

export default LocationInput;
