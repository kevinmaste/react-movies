import React, {useState} from 'react';
import {Button, Card, CardActions, CardContent, IconButton, LinearProgress, Typography} from "@material-ui/core";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import {useStyles} from "./styles";
import {useDispatch} from "react-redux";
import {removeItem} from "../features/movies/movieSlice";

const Moviecard = ({infos,id}) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    console.log(infos)

    const handleDelete=(id)=>{
        dispatch(removeItem({id:id}))
    }
    const progress = infos.likes+infos.dislikes > 0 ? (infos.likes / (infos.likes + infos.dislikes)) * 100: 0

    return (
        <>
            <Card>
                <CardContent>
                    <Typography variant="h6">{infos.title}</Typography>
                    <Typography variant="body1">{infos.category}</Typography>
                    <div>
                        {/*In the value put diff between dislike and like use the formule in https://openclassrooms.com/forum/sujet/barre-j-aime-j-aime-pas-youtube */}
                        <LinearProgress color="primary" variant="determinate" value={progress} />
                    </div>
                </CardContent>
                <CardActions>
                    <span className={classes.dis_lik}>
                        <ThumbUpAltIcon/>({infos.likes})
                    </span>
                    <span className={classes.dis_lik}>
                        <ThumbDownAltIcon/>({infos.dislikes})
                    </span>
                    <Button key={id} onClick={()=>handleDelete(infos.id)}>Delete</Button>
                </CardActions>
            </Card>
        </>
    );
};

export default Moviecard;