import TimeInfo from './time-info/TimeInfo';
import DateInfo from './date-info/DateInfo';
import MessageComposer from './message-composer/MessageComposer';
import Main from './main/Main';
import Contacts from './contacts/Contacts';

const Screen = (props) => {
    return (
        <article id="screen">
            {props.phoneStatus === "on" && props.activeScreen === "main" && <Main text={props.text} /> }
            {props.phoneStatus === "on" && props.activeScreen === "contacts" && <Contacts text={props.text} /> }
            {props.phoneStatus === "on" && props.activeScreen === "message" && <MessageComposer text={props.text} />}
            {props.phoneStatus === "on" && props.activeScreen === "date" && <DateInfo text={props.text} /> }
            {props.phoneStatus === "on" && props.activeScreen === "time" && <TimeInfo text={props.text} /> }
        </article>
    )
}

export default Screen;