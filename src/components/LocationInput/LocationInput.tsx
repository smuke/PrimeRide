import {
    Autocomplete,
    Button,
    Input,
    Label,
    Menu,
    MenuItem,
    SearchField,
    useFilter,
} from "react-aria-components";

import styles from "./LocationInput.module.css";

function LocationInput() {
    let { contains } = useFilter({ sensitivity: "base" });

    return (
        <div className={styles.autocomplete}>
            <Autocomplete filter={contains}>
                <SearchField className={styles.searchField}>
                    <Input placeholder="Enter a Location..." />
                    <Button>✕</Button>
                </SearchField>
                <Menu className={styles.menu}>
                    <MenuItem className={styles.menuItem}>Los Angeles, California</MenuItem>
                    <MenuItem className={styles.menuItem}>Fullerton, California</MenuItem>
                    <MenuItem className={styles.menuItem}>Anaheim, California</MenuItem>
                    <MenuItem className={styles.menuItem}>Sacramento, California</MenuItem>
                    <MenuItem className={styles.menuItem}>Phoenix, Arizona</MenuItem>
                </Menu>
            </Autocomplete>
        </div>
    );
}

export default LocationInput;
