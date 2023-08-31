import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material';

import './carousel.css';


export function Example(props)
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            image: "images/c2g_equitablecaad_1.png"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image: "images/claim-eligibility-pm-banneren.png"
        },
        {
            name: "Random Name #3",
            description: "Hello World!",
            image: "images/clhia-fraud-pm-banner.png"

        }
    ]

    return (
        <Carousel
        indicatorIconButtonProps={{
            style: {
                padding: '1px',    // 1
                color: 'black',
            }
        }}
        activeIndicatorIconButtonProps={{
            style: {
                border: '1px solid #000000',
                color:'#000000',

            }
        }}
        indicatorContainerProps={{
            style: {
                position:'absolute',
                bottom:'30px',
                zIndex:99
            }
    
        }} 
        >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

export function Item(props)
{
    return (
        <Paper className="siteCarousel" sx={{px: { xs: 2, sm: 2, md: 3 }, mt:{xs:2, sm:0}, backgroundColor: '#f5f5f5'}}>
            <img src={props.item.image} style={{width:'100%',height:'auto'}}/>
        </Paper>
    )
}


