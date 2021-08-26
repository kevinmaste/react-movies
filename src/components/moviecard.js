import React from 'react';
import {Button, Card, CardActions, CardContent, IconButton, LinearProgress, Typography} from "@material-ui/core";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';

const Moviecard = () => {
    return (
        <>
            <Card>
                <CardContent>
                    <Typography variant="h4">lemon juice</Typography>
                    <Typography variant="body1">thriller</Typography>
                    <div>
                        {/*In the value put diff between dislike and like use the formule in https://openclassrooms.com/forum/sujet/barre-j-aime-j-aime-pas-youtube */}
                        <LinearProgress color="primary" variant="determinate" value={1} />
                    </div>
                </CardContent>
                <CardActions>
                    <IconButton><ThumbUpAltIcon/>(5)</IconButton>
                    <IconButton><ThumbDownAltIcon/>(1)</IconButton>
                    <Button>Delete</Button>
                </CardActions>
            </Card>
        </>
    );
};

export default Moviecard;