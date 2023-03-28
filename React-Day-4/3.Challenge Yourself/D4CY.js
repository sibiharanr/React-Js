import { Divider, List, ListItemText } from '@mui/material'
import React from 'react'

function D4CY() {
  return (
    <div style={{border:"1px solid black",padding:"20px",width:"700px",marginTop:"150px"}}>
        <h2>List Of Books</h2>
        <List>
            <ListItemText style={{textAlign:"left"}}
            primary="The Bible"
            secondary="The bible is a collection of religious texts that are sacred to Christians, Jews, Samaritians and Rastafarians."
            >
            </ListItemText>
            <Divider variant="inset"></Divider>
            <ListItemText style={{textAlign:"left"}}
            primary="The Quran"
            secondary="The Quran is the central religious text of Islam, which Muslims believe to be a revelation from God."
            >
            </ListItemText>
            <Divider variant="inset"></Divider>
            <ListItemText style={{textAlign:"left"}}
            primary="The Tao Te Ching"
            secondary="The Tao Te Ching is a Chinese classic text that is attributed to the sage Laozi.It is one of the foundational texts of Taoism."
            >
            </ListItemText>
            <Divider variant="inset"></Divider>
            <ListItemText style={{textAlign:"left"}}
            primary="The Republic"
            secondary="The Republic is a Socratic dialogue, written by Plato around 380 BCE, concerning justice and the order and character of the just city-state and the just man."
            >
            </ListItemText>
            <Divider variant="inset"></Divider>
            <ListItemText style={{textAlign:"left"}}
            primary="The Communist Manifesto"
            secondary="The Communist Manifesto is a political pamphlet,written by Karl Marx and Friedrich Engels in 1848, that presents an analytical approach to the class struggle and the problems of capitalism."
            >
            </ListItemText>
            <Divider variant="inset"></Divider>
        </List>
    </div>
  )
}

export default D4CY
