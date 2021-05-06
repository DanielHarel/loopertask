import React, { useState, useEffect, useRef } from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Grid, Button, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import Filter3Icon from '@material-ui/icons/Filter3';
import Filter4Icon from '@material-ui/icons/Filter4';
import Filter5Icon from '@material-ui/icons/Filter5';
import Filter6Icon from '@material-ui/icons/Filter6';
import Filter7Icon from '@material-ui/icons/Filter7';
import Filter8Icon from '@material-ui/icons/Filter8';
import Filter9Icon from '@material-ui/icons/Filter9';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import StopIcon from '@material-ui/icons/Stop';



const useStyles = makeStyles(theme => ({
    mainContainer: {
        width: "100%",
        height: '100%',
        paddingBottom: '20em',
        [theme.breakpoints.down('sm')]: {
            paddingBottom: '5em'
        },
        backgroundColor: theme.palette.common.darkBlue
    },
    buttonContainer: {
        marginTop: '2em',
    },
    buttonComponant: {
        height: '80px',
        width: '80px',
        [theme.breakpoints.down('sm')]: {
            height: '70px',
            width: '70px',
        },
        color: theme.palette.common.themePink,
        background:  theme.palette.common.cream,
    }

})
);


const trackOne = new Audio('/120_future_funk_beats_25.mp3');
const trackTwo = new Audio('/SilentStar_120_Em_OrganSynth.mp3');
const trackThree = new Audio('/120_stutter_breakbeats_16.mp3');
const trackFour = new Audio('/Bass Warwick heavy funk groove on E 120 BPM.mp3');
const trackFive = new Audio('/electric guitar coutry slide 120bpm - B.mp3');
const trackSix = new Audio('/FUD_120_StompySlosh.mp3');
const trackSeven = new Audio('/GrooveB_120bpm_Tanggu.mp3');
const trackEight = new Audio('/MazePolitics_120_Perc.mp3');
const trackNine = new Audio('/PAS3GROOVE1.03B.mp3');

const MainPanel = () => {
    // applying theme styles and component styles to the const classes.
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    // component level states for all buttons and timer 
    // (to enable recording and determin intervals for starting a new sound loop)
    const [clicked1, setClicked1] = useState(false);
    const [clicked2, setClicked2] = useState(false);
    const [clicked3, setClicked3] = useState(false);
    const [clicked4, setClicked4] = useState(false);
    const [clicked5, setClicked5] = useState(false);
    const [clicked6, setClicked6] = useState(false);
    const [clicked7, setClicked7] = useState(false);
    const [clicked8, setClicked8] = useState(false);
    const [clicked9, setClicked9] = useState(false);
    const [clickedPlay, setClickedPlay] = useState(false);
    const [clickedPlayRecording, setClickedPlayRecording] = useState(false);
    const [clickedRecord, setClickedRecord] = useState(false);
    const [timer, setTimer] = useState(0);
    const [recordingTimer, setRecordingTimer] = useState(0);
    const [anyPlaying, setAnyPlaying] = useState(false);
    const [nextInterval, setNextInterval] = useState(0);
    const [recording, setRecording] = useState([]);

    // all states require current ref so that setTimeout function evaluates in real time with current state
    const clicked1Ref = useRef(clicked1);
    clicked1Ref.current = clicked1;
    const clicked2Ref = useRef(clicked2);
    clicked2Ref.current = clicked2;
    const clicked3Ref = useRef(clicked3);
    clicked3Ref.current = clicked3;
    const clicked4Ref = useRef(clicked4);
    clicked4Ref.current = clicked4;
    const clicked5Ref = useRef(clicked5);
    clicked5Ref.current = clicked5;
    const clicked6Ref = useRef(clicked6);
    clicked6Ref.current = clicked6;
    const clicked7Ref = useRef(clicked7);
    clicked7Ref.current = clicked7;
    const clicked8Ref = useRef(clicked8);
    clicked8Ref.current = clicked8;
    const clicked9Ref = useRef(clicked9);
    clicked9Ref.current = clicked9;
    const clickedPlayRef = useRef(clickedPlay);
    clickedPlayRef.current = clickedPlay;
    const clickedRecordRef = useRef(clickedRecord);
    clickedRecordRef.current = clickedRecord;
    
    // start the timer when first track starts playing and play button pressed
    useEffect(() => {
        while (anyPlaying && clickedPlay) {
            const counter = setTimeout(() => {
                setTimer(timer + 1);
            }, 1000);
            return () => clearTimeout(counter);
        }
    }, [anyPlaying, timer, clickedPlay]);

    // calculates the next interval every seconed
    useEffect(() => {
        setNextInterval(8 - (timer % 8));
    }, [timer]);

    // checks for changes on the state of button 1 in order to determin if it should activate the sound.
    useEffect(() => {
        trackOne.loop = clicked1;
        let time;
        
        if (clickedRecordRef.current) {
            setRecording(recording => [...recording, ['1', clicked1Ref.current, timer]]);
        }
        
        if (clicked1 && clickedPlay) {
            if (nextInterval === 8 || checkNoTrack()) {

                clickedPlay ? trackOne.play() : trackOne.pause();

            } else {
                time = setTimeout(() => {
                    if (clicked1Ref.current && clickedPlayRef.current) {
                        trackOne.play()
                    }
                }, (nextInterval * 1000));
            }
        } else {
            trackOne.pause();
            trackOne.currentTime = 0;
            return () => {
                clearTimeout(time)
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[clicked1, clickedPlay]);

    // checks for changes on the state of button 2 in order to determin if it should activate the sound.
    useEffect(() => {
        trackTwo.loop = clicked2;
        let time;

        if (clickedRecordRef.current) {
            setRecording(recording => [...recording, ['2', clicked2Ref.current, timer]]);
        }
        
        if (clicked2 && clickedPlay) {
            if (nextInterval === 8 || checkNoTrack()) {
                clickedPlay ? trackTwo.play() : trackTwo.pause();
            } else {
                time = setTimeout(() => {
                    if (clicked2Ref.current && clickedPlayRef.current) {
                        trackTwo.play()
                    }
                }, (nextInterval * 1000));
            }
        } else {
            trackTwo.pause();
            trackTwo.currentTime = 0;
            return () => {
                clearTimeout(time)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[clicked2, clickedPlay]);

    // checks for changes on the state of button 3 in order to determin if it should activate the sound.
    useEffect(() => {
        trackThree.loop = clicked3;
        let time;

        if (clickedRecordRef.current) {
            setRecording(recording => [...recording, ['3', clicked3Ref.current, timer]]);
        }
        
        if (clicked3 && clickedPlay) {
            if (nextInterval === 8 || checkNoTrack()) {
                clickedPlay ? trackThree.play() : trackThree.pause();
            } else {
                time = setTimeout(() => {
                    if (clicked3Ref.current && clickedPlayRef.current) {
                        trackThree.play()
                    }
                }, (nextInterval * 1000));
            }
        } else {
            trackThree.pause();
            trackThree.currentTime = 0;
            return () => {
                clearTimeout(time)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[clicked3, clickedPlay]);

    // checks for changes on the state of button 4 in order to determin if it should activate the sound.
    useEffect(() => {
        trackFour.loop = clicked4;
        let time;

        if (clickedRecordRef.current) {
            setRecording(recording => [...recording, ['4', clicked4Ref.current, timer]]);
        }
        
        if (clicked4 && clickedPlay) {
            if (nextInterval === 8 || checkNoTrack()) {
                clickedPlay ? trackFour.play() : trackFour.pause();
            } else {
                time = setTimeout(() => {
                    if (clicked4Ref.current && clickedPlayRef.current) {
                        trackFour.play()
                    }
                }, (nextInterval * 1000));
            }
        } else {
            trackFour.pause();
            trackFour.currentTime = 0;
            return () => {
                clearTimeout(time)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[clicked4, clickedPlay]);

    // checks for changes on the state of button 5 in order to determin if it should activate the sound.
    useEffect(() => {
        trackFive.loop = clicked5;
        let time;

        if (clickedRecordRef.current) {
            setRecording(recording => [...recording, ['5', clicked5Ref.current, timer]]);
        }
        
        if (clicked5 && clickedPlay) {
            if (nextInterval === 8 || checkNoTrack()) {
                clickedPlay ? trackFive.play() : trackFive.pause();
            } else {
                time = setTimeout(() => {
                    if (clicked5Ref.current && clickedPlayRef.current) {
                        trackFive.play()
                    }
                }, (nextInterval * 1000));
            }
        } else {
            trackFive.pause();
            trackFive.currentTime = 0;
            return () => {
                clearTimeout(time)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[clicked5, clickedPlay]);

    // checks for changes on the state of button 6 in order to determin if it should activate the sound.
    useEffect(() => {
        trackSix.loop = clicked6;
        let time;

        if (clickedRecordRef.current) {
            setRecording(recording => [...recording, ['6', clicked6Ref.current, timer]]);
        }
        
        if (clicked6 && clickedPlay) {
            if (nextInterval === 8 || checkNoTrack()) {
                clickedPlay ? trackSix.play() : trackSix.pause();
            } else {
                time = setTimeout(() => {
                    if (clicked6Ref.current && clickedPlayRef.current) {
                        trackSix.play()
                    }
                }, (nextInterval * 1000));
            }
        } else {
            trackSix.pause();
            trackSix.currentTime = 0;
            return () => {
                clearTimeout(time)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[clicked6, clickedPlay]);

    // checks for changes on the state of button 7 in order to determin if it should activate the sound.
    useEffect(() => {
        trackSeven.loop = clicked7;
        let time;

        if (clickedRecordRef.current) {
            setRecording(recording => [...recording, ['7', clicked7Ref.current, timer]]);
        }
        
        if (clicked7 && clickedPlay) {
            if (nextInterval === 8 || checkNoTrack()) {
                clickedPlay ? trackSeven.play() : trackSeven.pause();
            } else {
                time = setTimeout(() => {
                    if (clicked7Ref.current && clickedPlayRef.current) {
                        trackSeven.play()
                    }
                }, (nextInterval * 1000));
            }
        } else {
            trackSeven.pause();
            trackSeven.currentTime = 0;
            return () => {
                clearTimeout(time)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[clicked7, clickedPlay]);

    // checks for changes on the state of button 8 in order to determin if it should activate the sound.
    useEffect(() => {
        trackEight.loop = clicked8;
        let time;

        if (clickedRecordRef.current) {
            setRecording(recording => [...recording, ['8', clicked8Ref.current, timer]]);
        }
        
        if (clicked8 && clickedPlay) {
            if (nextInterval === 8 || checkNoTrack()) {
                clickedPlay ? trackEight.play() : trackEight.pause();
            } else {
                time = setTimeout(() => {
                    if (clicked8Ref.current && clickedPlayRef.current) {
                        trackEight.play()
                    }
                }, (nextInterval * 1000));
            }
        } else {
            trackEight.pause();
            trackEight.currentTime = 0;
            return () => {
                clearTimeout(time)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[clicked8, clickedPlay]);

    // checks for changes on the state of button 9 in order to determin if it should activate the sound.
    useEffect(() => {
        trackNine.loop = clicked9;
        let time;

        if (clickedRecordRef.current) {
            setRecording(recording => [...recording, ['9', clicked9Ref.current, timer]]);
        }
        
        if (clicked9 && clickedPlay) {
            if (nextInterval === 8 || checkNoTrack()) {
                clickedPlay ? trackNine.play() : trackNine.pause();
            } else {
                time = setTimeout(() => {
                    if (clicked9Ref.current && clickedPlayRef.current) {
                        trackNine.play()
                    }
                }, (nextInterval * 1000));
            }
        } else {
            trackNine.pause();
            trackNine.currentTime = 0;
            return () => {
                clearTimeout(time)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[clicked9, clickedPlay]);


    const checkPlaying = () => {
        if (!anyPlaying) {
            setAnyPlaying(true);
        }
    };

    // determins if there are no track currently playing so that the interval is not forced on the first track to play.
    const checkNoTrack = () => {
        const buttons = [clicked1, clicked2, clicked3, clicked4, clicked5, clicked6, clicked7, clicked8, clicked9];
        if (buttons.filter(Boolean).length === 1) {
            return true;
        } else {
            return false;
        }
    }

    // envokes timeouts to play correct sounds in their respective on/off times
    const playRecording = () => {
        setTimer(0)
        const len = recording.length;

        const execute = (i) => {
            const startTime = recording[i][2];
            const addedTime = recording[i][2] % 8;
            const combinedTime = startTime + addedTime;
            setTimeout(() => {
                autoPlayer(recording[i][0], recording[i][1])
            }, combinedTime * 1000);
            setTimeout(() => {
                autoPlayer('10', false)
            }, recordingTimer * 1000);
        }

        for (let i = 0; i < len; ++i) {
            execute(i);
        }
    }
    
    // switch statement to handle playing of the recording
    const autoPlayer = (num, instruction) => {
        switch (num) {
            case "1":
                if (instruction){
                    trackOne.loop = true;
                    trackOne.play();
                }
                if (!instruction) {
                    trackOne.pause();
                    trackOne.currentTime = 0;
                }
                break;
            case "2":
                if (instruction){
                    trackTwo.loop = true;
                    trackTwo.play();
                }
                if (!instruction) {
                    trackTwo.pause();
                    trackTwo.currentTime = 0;
                }
                break;
            case "3":
                if (instruction){
                    trackThree.loop = true;
                    trackThree.play();
                }
                if (!instruction) {
                    trackThree.pause();
                    trackThree.currentTime = 0;
                }
                break;
            case "4":
                if (instruction){
                    trackFour.loop = true;
                    trackFour.play();
                }
                if (!instruction) {
                    trackFour.pause();
                    trackFour.currentTime = 0;
                }
                break;
            case "5":
                if (instruction){
                    trackFive.loop = true;
                    trackFive.play();
                }
                if (!instruction) {
                    trackFive.pause();
                    trackFive.currentTime = 0;
                }
                break;
            case "6":
                if (instruction){
                    trackSix.loop = true;
                    trackSix.play();
                }
                if (!instruction) {
                    trackSix.pause();
                    trackSix.currentTime = 0;
                }
                break;
            case "7":
                if (instruction){
                    trackSeven.loop = true;
                    trackSeven.play();
                }
                if (!instruction) {
                    trackSeven.pause();
                    trackSeven.currentTime = 0;
                }
                break;
            case "8":
                if (instruction){
                    trackEight.loop = true;
                    trackEight.play();
                }
                if (!instruction) {
                    trackEight.pause();
                    trackEight.currentTime = 0;
                }
                break;
            case "9":
                if (instruction){
                    trackNine.loop = true;
                    trackNine.play();
                }
                if (!instruction) {
                    trackNine.pause();
                    trackNine.currentTime = 0;
                }
                break;
            case "10":
                trackOne.pause();
                trackOne.currentTime = 0;
                trackTwo.pause();
                trackTwo.currentTime = 0;
                trackThree.pause();
                trackThree.currentTime = 0;
                trackFour.pause();
                trackFour.currentTime = 0;
                trackFive.pause();
                trackFive.currentTime = 0;
                trackSix.pause();
                trackSix.currentTime = 0;
                trackSeven.pause();
                trackSeven.currentTime = 0;
                trackEight.pause();
                trackEight.currentTime = 0;
                trackNine.pause();
                trackNine.currentTime = 0;
                setClickedPlayRecording(false);
                break;
            default:
                break;
        }
    }

    // switch statement to handle ui button clicks
    const handleClick = (event) => {
        const value = event.currentTarget.value;
        
        switch (value) {
            case "1":
                checkPlaying();
                setClicked1(!clicked1);
                break;
            case "2":
                checkPlaying();
                setClicked2(!clicked2);
                break;
            case "3":
                checkPlaying();
                setClicked3(!clicked3);
                break;
            case "4":
                checkPlaying();
                setClicked4(!clicked4);
                break;
            case "5":
                checkPlaying();
                setClicked5(!clicked5);
                break;
            case "6":
                checkPlaying();
                setClicked6(!clicked6);
                break;
            case "7":
                checkPlaying();
                setClicked7(!clicked7);
                break;
            case "8":
                checkPlaying();
                setClicked8(!clicked8);
                break;
            case "9":
                checkPlaying();
                setClicked9(!clicked9);
                break;
            case "play":
                setClickedPlay(!clickedPlay);
                break;
            case "stop":
                if (clickedRecordRef.current) {
                    setRecordingTimer(timer);
                }
                if (clickedPlayRecording.current) {
                    autoPlayer('10', false);
                    setClicked1(false);
                    setClicked2(false);
                    setClicked3(false);
                    setClicked4(false);
                    setClicked5(false);
                    setClicked6(false);
                    setClicked7(false);
                    setClicked8(false);
                    setClicked9(false);
                    setClickedRecord(false);
                    setAnyPlaying(false);
                }
                setClickedPlay(false);
                setClickedRecord(false);              
                setTimer(0);
                break;
            case "record":
                setClickedRecord(!clickedRecord);
                setClickedPlay(true);
                setRecording([]);
                break;
            case "playRecording":
                setClickedPlayRecording(true);
                playRecording();
                break
            default:
                break;
                        
        }
    }

    return (
        <Grid container direction='column' className={classes.mainContainer}>
            <Grid item container direction='row' justify='center' spacing={2} className={classes.buttonContainer}>
                <Typography variant={matchesSM ? 'h3' : 'h2'}>Daniel's Mix maker</Typography>
            </Grid>
            <Grid item container direction='row' justify='center' spacing={2} className={classes.buttonContainer}>
                <Grid item>
                    <Button startIcon={<Filter1Icon/>} value='1' onClick={handleClick} variant={clicked1 ? "outlined" : "contained"} className={classes.buttonComponant}></Button>
                </Grid>
                <Grid item>
                    <Button  startIcon={<Filter2Icon/>} value='2' onClick={handleClick} variant={clicked2 ? "outlined" : "contained"}  className={classes.buttonComponant}></Button>
                </Grid>
                <Grid item>
                    <Button  startIcon={<Filter3Icon/>} value='3' onClick={handleClick} variant={clicked3 ? "outlined" : "contained"}  className={classes.buttonComponant}></Button>
                </Grid>
            </Grid>
            <Grid item container direction='row' justify='center' spacing={2} className={classes.buttonContainer}>
                <Grid item>
                    <Button  startIcon={<Filter4Icon/>} value='4' onClick={handleClick} variant={clicked4 ? "outlined" : "contained"}  className={classes.buttonComponant}></Button>
                </Grid>
                <Grid item>
                    <Button  startIcon={<Filter5Icon/>} value='5' onClick={handleClick} variant={clicked5 ? "outlined" : "contained"}  className={classes.buttonComponant}></Button>
                </Grid>
                <Grid item>
                    <Button  startIcon={<Filter6Icon/>} value='6' onClick={handleClick} variant={clicked6 ? "outlined" : "contained"}  className={classes.buttonComponant}></Button>
                </Grid>
            </Grid>
            <Grid item container direction='row' justify='center' spacing={2} className={classes.buttonContainer}>
                <Grid item>
                    <Button  startIcon={<Filter7Icon/>} value='7' onClick={handleClick} variant={clicked7 ? "outlined" : "contained"}  className={classes.buttonComponant}></Button>
                </Grid>
                <Grid item>
                    <Button  startIcon={<Filter8Icon/>} value='8' onClick={handleClick} variant={clicked8 ? "outlined" : "contained"}  className={classes.buttonComponant}></Button>
                </Grid>
                <Grid item>
                    <Button  startIcon={<Filter9Icon/>} value='9' onClick={handleClick} variant={clicked9 ? "outlined" : "contained"}  className={classes.buttonComponant}></Button>
                </Grid>
            </Grid>
            {matchesSM ?
                <Grid item container direction='column' >
                    <Grid item container direction='row' justify='center' spacing={2} className={classes.buttonContainer}>
                        <Grid item>
                            <Button  startIcon={<PlayCircleOutlineIcon/>} value='play' onClick={handleClick} variant={clickedPlay ? "outlined" : "contained"}  className={classes.buttonComponant}></Button>
                        </Grid>
                        <Grid item>
                            <Button  startIcon={<StopIcon/>} value='stop' onClick={handleClick} variant="contained"  className={classes.buttonComponant}></Button>
                        </Grid>
                    </Grid>
                    <Grid item container direction='row' justify='center' spacing={2} className={classes.buttonContainer}>
                        <Grid item>
                            <Button  startIcon={<FiberManualRecordIcon/>} value='record' onClick={handleClick} variant={clickedRecord ? "outlined" : "contained"}  className={classes.buttonComponant}></Button>
                        </Grid>
                        <Grid item>
                            <Button disabled={recording.length === 0 && !clickedPlay} value='playRecording' onClick={handleClick} variant={clickedPlayRecording ? "outlined" : "contained"}  className={classes.buttonComponant}>Play Recording</Button>
                        </Grid>
                    </Grid>
                </Grid>
            :
                <Grid item container direction='row' justify='center' spacing={2} className={classes.buttonContainer}>
                    <Grid item>
                        <Button  startIcon={<PlayCircleOutlineIcon/>} value='play' onClick={handleClick} variant={clickedPlay ? "outlined" : "contained"}  className={classes.buttonComponant}></Button>
                    </Grid>
                    <Grid item>
                        <Button  startIcon={<StopIcon/>} value='stop' onClick={handleClick} variant="contained"  className={classes.buttonComponant}></Button>
                    </Grid>
                    <Grid item>
                        <Button  startIcon={<FiberManualRecordIcon/>} value='record' onClick={handleClick} variant={clickedRecord ? "outlined" : "contained"}  className={classes.buttonComponant}></Button>
                    </Grid>
                    <Grid item>
                        <Button disabled={recording.length === 0 || !clickedPlay} value='playRecording' onClick={handleClick} variant={clickedPlayRecording ? "outlined" : "contained"}  className={classes.buttonComponant}>Play Recording</Button>
                    </Grid>
                </Grid>
            }

        </Grid>
    );
  }
  
  export default MainPanel;