function CreateCountDownLO2 (props) {
  return (
    <div className="main-dashboard fullwidth-wrapper cd-design">
      <div className="cd-two countdown-wrapper fullwidth-wrapper">
        <div className="wrapper">
          <div className="countdown-msg countdown-msg-first" id="countBarMsg">
            Flash Sale!
          </div>
          <div className="countdown-timer">
            <div className="time day">
              <div className="time-number">00</div>
              <div className="time-txt">{props.day}</div>
            </div>
            <div className="time hrs">
              <div className="time-number">00</div>
              <div className="time-txt">{props.hrs}</div>
            </div>
            <div className="time min">
              <div className="time-number">00</div>
              <div className="time-txt">{props.min}</div>
            </div>
            <div className="time sec">
              <div className="time-number">00</div>
              <div className="time-txt">{props.sec}</div>
            </div>
          </div>
          <div className="countdown-msg" id="countBarMsg">
          {props.msg}
          </div>
          <div className="countdown-expire">
            EXPIRED!
          </div>
          <div className="countdown-btn">
            <a href="{props.btnUrl}" className="btn" id="btnLabelBar">{props.btnLabel}</a>
          </div>
        </div>
      </div> 
    </div>
  )
}
export default CreateCountDownLO2;