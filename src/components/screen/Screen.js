import TimeInfo from './time-info/TimeInfo';
import DateInfo from './date-info/DateInfo';
import MessageComposer from './message-composer/MessageComposer';
import Main from './main/Main';
import Contacts from './contacts/Contacts';
import David from './contacts/david/David';
import Oncall from './oncall/Oncall';
import Typing from './message-composer/typing/Typing';

const Screen = (props) => {
    return (
        <article id="screen">
            {props.phoneStatus === "on" && props.activeScreen === "main" && <Main text={props.text} /> }
            {props.phoneStatus === "on" && props.activeScreen === "contacts" && <Contacts text={props.text} /> }
            {props.phoneStatus === "on" && props.activeScreen === "message" && <MessageComposer text={props.text} />}
            {props.phoneStatus === "on" && props.activeScreen === "date" && <DateInfo text={props.text} /> }
            {props.phoneStatus === "on" && props.activeScreen === "time" && <TimeInfo text={props.text} /> }
            {props.phoneStatus === "on" && props.activeScreen === "David" && <David /> }
            {props.phoneStatus === "on" && props.activeScreen === "oncall" && <Oncall /> }
            {props.phoneStatus === "on" && props.activeScreen === "typing" && <Typing text={props.text} /> }
        </article>
    )
}

export default Screen;