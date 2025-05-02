import {
    Autocomplete,
    Button,
    Input,
    Menu,
    MenuItem,
    SearchField,
    useFilter,
} from "react-aria-components";

import { useState } from "react";
import styles from "./LocationInput.module.css";
import locations from "../../data/locations.json";

function LocationInput({ updateLocation }: any) {;
    const { contains } = useFilter({ sensitivity: 'base' });
    const [input, setInput] = useState("");

    const handleInput = (e: any) => {
        setInput(e.target.value);
    }

    const handleSelect = (id: any) => {
        updateLocation(id);
    }

    return (
        <div
            className={`${styles.autocomplete} ${
                input ? styles.expanded : ""
            }`}
        >
            <Autocomplete filter={contains}>
                <SearchField className={styles.searchField}>
                    <Input 
                        placeholder="Enter a Location..." 
                        value={input} 
                        onChange={handleInput} 
                    />
                    <Button onClick={() => setInput("")}>✕</Button>
                </SearchField>
                <Menu className={styles.menu} items={locations} onAction={handleSelect}>
                    {(item) => <MenuItem className={styles.menuItem}>{item.city}, {item.state}</MenuItem>}
                </Menu>
            </Autocomplete>
        </div>
    );
}

export default LocationInput;
