import {
    Autocomplete,
    Button,
    Input,
    Key,
    Menu,
    MenuItem,
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
    const [open, setOpen] = useState(false);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    const handleSelect = (id: Key) => {
        updateLocation(id);
        setOpen(false);
        setInput("");
    }

    return (
        <div onClick={() => setOpen(false)}>
            <Select className={styles.select}>
                <Button className={styles.button} onClick={() => setOpen(true)}>
                    <SelectValue className="flex-1 truncate">Choose location</SelectValue>
                </Button>
                <div className={styles.popoverContainer}>
                    <Popover className={styles.popover} offset={0} isOpen={open}>
                        <Autocomplete filter={contains}>
                            <SearchField className={styles.searchField} autoFocus>
                                <Input 
                                    placeholder="Enter a Location..." 
                                    value={input} 
                                    onChange={handleInput}
                                />
                                <Button onClick={() => setInput("")}>✕</Button>
                            </SearchField>
                            <Menu className={styles.menu} items={locations} onAction={handleSelect}>
                                {(item) => <MenuItem className={styles.menuItem}>{`${item.city}, ${item.state}`}</MenuItem>}
                            </Menu>
                        </Autocomplete>
                    </Popover>
                </div>
            </Select>
        </div>
    );
}

export default LocationInput;
