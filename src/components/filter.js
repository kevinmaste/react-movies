import React, {useState} from 'react';
import {Container, FormControl, InputLabel, Paper, Select} from "@material-ui/core";
import {useStyles} from "./styles";

const Filter = () => {
    const classes = useStyles()

    {/* for taking the value selected by the users*/}
    const [item,setItem] = useState({id:1,name:''})

    {/* when the the value change we set the item state*/}
    const handleChange = (e) => {
        console.log(e.target.value);
        setItem({
            name:e.target.value,
        })
    }

    return (
        <Container maxWidth="lg">
            <Paper className={classes.paper_style}>
                <FormControl className={classes.form_control}>
                    <InputLabel htmlFor="filter">Filter</InputLabel>
                    <Select
                        native
                        value={item.name}
                        inputProps={
                            {
                                name: 'filter',
                                id:'filter'
                            }
                        }
                        onChange={handleChange}
                    >
                        {/*put somme tab for put the category*/}
                        <option value="" />
                        {/* normaly we set the map here */}
                        <option value="thriller">thriller</option>
                    </Select>
                </FormControl>
            </Paper>
        </Container>
    );
};

export default Filter;