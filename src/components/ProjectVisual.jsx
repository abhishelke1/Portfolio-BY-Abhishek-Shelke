import {
  FiArrowUpRight,
  FiCheck,
  FiFileText,
  FiMapPin,
  FiSend,
  FiSun,
} from "react-icons/fi";

export default function ProjectVisual({ type }) {
  return (
    <div className={`project-visual visual-${type}`} aria-hidden="true">
      <span className="visual-caption">
        {type === "agro" ? "PRODUCT CONCEPT" : "INTERFACE CONCEPT"}
      </span>
      {type === "delivery" && (
        <>
          <div className="route-map">
            <svg viewBox="0 0 500 300" fill="none">
              <path
                className="map-road"
                d="M-20 50H180L260 140H520M80-20V150L200 300M360-20V120L260 300M-20 230H520M-20 115L520 285"
              />
              <path
                className="route-line"
                d="M105 75V155Q105 175 125 175H285Q310 175 310 150V95H380"
              />
              <circle cx="105" cy="75" r="9" fill="#cbf36b" />
              <circle cx="380" cy="95" r="9" fill="#cbf36b" />
            </svg>
            <div className="map-marker">
              <FiMapPin />
            </div>
          </div>
          <div className="tracking-card">
            <span className="mini-label">FROM PICKUP TO DOORSTEP</span>
            <strong>
              Every move, connected.
              <FiArrowUpRight />
            </strong>
            <div className="tracking-steps">
              <span>
                <i />
                Picked up
              </span>
              <span>
                <i />
                In transit
              </span>
              <span>
                <i />
                Delivered
              </span>
            </div>
          </div>
        </>
      )}
      {type === "documents" && (
        <>
          <div className="document-sheet">
            <FiFileText />
            <strong>Your next big idea.pdf</strong>
            <i />
            <i />
            <i />
            <i />
            <i />
            <span>PDF / DOCUMENT</span>
          </div>
          <div className="chat-preview">
            <div className="chat-question">What’s the bigger picture?</div>
            <div className="chat-answer">
              <span className="ai-mark">✳</span>
              <div>
                <strong>Let’s connect the dots.</strong>
                <i />
                <i />
                <i />
                <small>Grounded in your document</small>
              </div>
            </div>
            <div className="chat-input">
              Ask a follow-up…
              <FiSend />
            </div>
          </div>
        </>
      )}
      {type === "maintenance" && (
        <div className="monitor-preview">
          <div className="monitor-header">
            <span>
              <i className="status-dot" /> EQUIPMENT MONITOR
            </span>
            <span>SENSOR SIMULATION</span>
          </div>
          <div className="monitor-title">
            <div>
              <span>See the signs earlier.</span>
              <strong>Equipment health</strong>
            </div>
            <span className="monitor-icon">↗</span>
          </div>
          <svg viewBox="0 0 440 120" fill="none">
            <path className="chart-grid" d="M0 20H440M0 60H440M0 100H440" />
            <path
              className="chart-area"
              d="M0 95L30 83L60 89L90 65L120 72L150 40L180 54L210 35L240 45L270 24L300 39L330 20L360 31L400 12L440 23V120H0Z"
            />
            <path
              className="chart-line"
              d="M0 95L30 83L60 89L90 65L120 72L150 40L180 54L210 35L240 45L270 24L300 39L330 20L360 31L400 12L440 23"
            />
          </svg>
          <div className="monitor-footer">
            <span>Temperature</span>
            <span>Pressure</span>
            <span>Vibration</span>
          </div>
        </div>
      )}
      {type === "agro" && (
        <>
          <div className="field-lines">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="agro-word">
            AgroEasy<span>GROW WITH A CLEARER PICTURE.</span>
          </div>
          <div className="farm-card">
            <div>
              <span className="farm-logo">a.</span>
              <FiSun />
            </div>
            <small>A LITTLE MORE CLARITY</small>
            <strong>
              A better day
              <br /> on the farm.
            </strong>
            <div className="farm-row">
              <span>
                <FiCheck /> Crop planning
              </span>
              <FiArrowUpRight />
            </div>
            <div className="farm-row">
              <span>
                <FiCheck /> Inventory & orders
              </span>
              <FiArrowUpRight />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
