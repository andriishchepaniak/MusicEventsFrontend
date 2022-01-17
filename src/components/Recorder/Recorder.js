import React from "react";
import MicRecorder from 'mic-recorder-to-mp3';
import {Button, Spinner} from 'react-bootstrap';
import axios from "axios";
import TrackDetail from "./TrackDetails";
import {RecognizeApi} from "../../api/RecognizeApi";

const Mp3Recorder = new MicRecorder({bitRate: 128});

class Recorder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRecording: false,
            blobURL: '',
            blob: {},
            isBlocked: false,
            track: null
        };
    }

    start = () => {
        if (this.state.isBlocked) {
            console.log('Permission Denied');
        } else {
            Mp3Recorder.start().then(() => {
                this.setState({isRecording: true});
            }).catch((e) => console.error(e));
        }
    };

    stop = () => {
        Mp3Recorder.stop().getMp3().then(([buffer, blob]) => {
            const blobURL = URL.createObjectURL(blob)
            this.setState({blobURL, isRecording: false, blob: blob});
            this.findTrack(blob);
        }).catch((e) => console.log(e));
    };

    componentDidMount() {
        navigator.getUserMedia({
            audio: true
        }, () => {
            console.log('Permission Granted');
            this.setState({isBlocked: false});
        }, () => {
            console.log('Permission Denied');
            this.setState({isBlocked: true})
        },);
    }

    findTrack(blob) {
        var file = new File([blob], "track");
        console.log(file);
        let form = new FormData();
        form.append('file', file);
        RecognizeApi.getTrack(form).then(response => {
            this.setState({track: response.data});
        });
    }

    shazam() {
        this.start();
        setTimeout(this.stop, 5000);
    }

    render() {
        return (
            <div className="d-grid gap-2">
                {/* <Button variant="primary" size="lg"
                    onClick={
                        this.start
                    }
                    disabled={
                        this.state.isRecording
                }>
                    Record
                </Button>
                <Button variant="secondary" size="lg"
                    onClick={
                        this.stop
                    }
                    disabled={
                        !this.state.isRecording
                }>
                    Stop
                </Button>
                <audio src={
                        this.state.blobURL
                    }
                    controls="controls"/> */}
                <Button variant="primary" size="lg"
                    onClick={
                        () => this.shazam()
                }>
                    SHAZAM
                </Button>
                {
                this.state.isRecording ? <Spinner size="lg" animation="border"/> : <></>
            }
                {
                this.state.track ? <TrackDetail track={
                    this.state.track
                }/> : <div>No track</div>
            } </div>
        );
    }
}
export default Recorder;
