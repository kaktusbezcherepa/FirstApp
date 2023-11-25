import style from "./track.module.scss"
import { IconButton } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import { duration } from "moment/moment";
import secindsToMMSS from "../../pages/utils/secindsToMMSS";


const Track = (track) => {
        const { id, src, preview, title, artist, duration} = track;

        const formattedDuration = secindsToMMSS(duration)


    return <div className={style.track}>
        <IconButton>
            <PlayArrow />
        </IconButton>
        <img className={style.preview} src = {preview} alt = "" />
        <div className={style.credits}>
            <b>{title}</b>
            <p>{artist}</p>
        </div>
        <p>{formattedDuration}</p>
    </div>
};

export default Track;