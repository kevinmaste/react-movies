import React from 'react';
import {Grid} from "@material-ui/core";
import Moviecard from "./moviecard";
import {useStyles} from "./styles";

const Moviecomponent = () => {
    const classes = useStyles()
    return (
        <div>
            <Grid container className={classes.paddingGrid}>
                <Grid item  xs={12}>
                    <Grid container justifyContent='center' spacing={2} >
                        {/* put the map element */}
                        <Grid item>
                            <Moviecard/>
                        </Grid>
                        <Grid item>
                            <Moviecard/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Moviecomponent;