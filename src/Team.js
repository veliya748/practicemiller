import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import lightGreen from '@material-ui/core/colors/lightGreen';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import arzt from "./profile doc.png"
import ai from "./neutral ai profile.png"
import ScrollableAnchor from 'react-scrollable-anchor'


export default class Team extends Component {

    render() {
        return (
            <ScrollableAnchor id={'team'}>
                <Paper square={true} style={{ height: 700, backgroundColor: lightGreen[500], overflowX: "hidden" }}>
                    <Typography style={{ color: "white", paddingTop: 30, fontSize: 40, fontWeight: 500, textAlign: "center", }}>Our team</Typography>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <img src={arzt} alt="arzt" style={{ float: "left", height: 200, marginTop: 70, marginRight: -70,marginLeft:-30}} />
                            <Typography style={{ color: "white", paddingTop: 70, fontSize: 17, fontWeight: 500, textAlign: "left", paddingLeft: 230, paddingRight: 80 }}>
                                Dr.Moris Miller studied medicine in the university in Frankfurt am Main.
    </Typography>
                            <Typography style={{ color: "white", fontSize: 17, fontWeight: 500, textAlign: "left", paddingLeft: 230, paddingTop: 20, paddingRight: 80 }}>
                                After his graduation in 1998,
                                he gained experience in different clinics and medical centers and spent a couple of years in England where he gathered
                                expert knowledge in the fields of surgical diagnostic and therapy, cardiology, radiology and rehabilitation. At that time Dr.Miller
                                was announced Member of the Royal College of General Practitioners in London.
    </Typography>
                            <Typography style={{ color: "white", fontSize: 17, fontWeight: 500, textAlign: "left", marginLeft: 250, paddingTop: 20, paddingRight: 80 }}>
                                After he successfully received his degree in general and internal medicine from the State Chamber
                                 of Medicine in Hessen in 2016, he founded his own practice in Darmstadt.
</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <img src={ai} alt="ai" style={{ float: "left", height: 200,  marginTop: 70,  marginRight: -70, margineft: -30}} />
                            <Typography style={{ color: "white", paddingTop: 70, fontSize: 17, fontWeight: 500, textAlign: "left", paddingLeft: 210, paddingRight: 80 }}>
                                The artifficial intelligence system is working as Dr.Miller’s qualified medical assistant since 2018.
</Typography>
                            <Typography style={{ color: "white", paddingTop: 20, fontSize: 17, fontWeight: 500, textAlign: "left", paddingLeft: 210, paddingRight: 80 }}>
                                It was developed from researchers from Showa University
                                in Yokohama, Japan in 2017.  Trained on extensive data from 378,256 patients it can reveal signs of potentially cancerous growths
                                in the colon with a 95% accuracy rate. Reviewing mammograms’ data  30 times faster than humans,
                                </Typography>
                                <Typography style={{ color: "white", fontSize: 17, fontWeight: 500, textAlign: "left", marginLeft: 280, paddingRight: 80 }}>
                                 it can make quick judgment call,
                                such as determining if a lesion is cancerous and make a lifetime decision.
                                </Typography>

                            <Typography style={{ color: "white", fontSize: 17, fontWeight: 500, textAlign: "left", marginLeft: 280, paddingTop: 20, paddingRight: 80 }}>
                                Besides cancer  the AI is currently supporting Dr.Miller to diagnose diseases such as asthma, diabetes and skin disease.
    </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </ScrollableAnchor>
        )
    }
}