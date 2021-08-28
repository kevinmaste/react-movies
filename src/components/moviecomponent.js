import React, {useEffect} from 'react';
import {Grid} from "@material-ui/core";
import Moviecard from "./moviecard";
//import Pagination from "react-js-pagination";
//require("bootstrap/less/bootstrap.less");
import {useStyles} from "./styles";
import {useDispatch,useSelector} from "react-redux";
import {selectData,selectStatus,fetchData} from "../features/movies/movieSlice";
import Filter from "./filter";

const Moviecomponent = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const status = useSelector(selectStatus);
    const data = useSelector(selectData);

    useEffect(()=>{
        dispatch(fetchData())
    },[dispatch])
    console.log(data)

    /*const [activePage,setActivePage] = useState(1)
    const handleChange=(pageN)=>{
        setActivePage({activePage:pageN})
    }*/
    return (
        <div>
            <Filter values={data}/>
            <Grid container className={classes.paddingGrid}>
                <Grid item  xs={12}>
                    <Grid container justifyContent='center' spacing={2} >
                        {/* put the map element */}
                        { data.map((item,i)=>(
                            <Grid item key={i}>
                                <Moviecard infos={item} id={i}/>
                            </Grid>
                            ))
                        }
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Moviecomponent;