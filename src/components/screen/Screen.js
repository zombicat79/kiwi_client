import TimeInfo from './time-info/TimeInfo';
import DateInfo from './date-info/DateInfo';
import MessageComposer from './message-composer/MessageComposer';

const Screen = (props) => {
    return (
        <article id="screen">
            {props.phoneStatus === "on" && props.activeScreen === "message" && <MessageComposer text={props.text} />}
            {props.phoneStatus === "on" && props.activeScreen === "date" && <DateInfo /> }
            {props.phoneStatus === "on" && props.activeScreen === "time" && <TimeInfo /> }
        </article>
    )
}

export default Screen;