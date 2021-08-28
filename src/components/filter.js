import React, {useState} from 'react';
import {Container, FormControl, InputLabel, Paper, Select} from "@material-ui/core";
import {useStyles} from "./styles";


const Filter = ({values}) => {
    const classes = useStyles()
    // eslint-disable-next-line
    {/* for taking the value selected by the users*/}
    const [item,setItem] = useState({id:1,name:''})

    // eslint-disable-next-line
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
                        {values.map((category,i)=>(
                            <option key={i} value={category.category}>{category.category}</option>
                        ))}
                    </Select>
                </FormControl>
            </Paper>
        </Container>
    );
};

export default Filter;