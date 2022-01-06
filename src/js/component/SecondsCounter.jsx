import React from "react";
import PropTypes from "prop-types";

const SecondsCounter = (props) => {
	const singleDigits = props.seconds.split("");
	return (
		<div>
			<div className="bigCounter">
				<div className="clockIcon">
					<i className="far fa-clock"></i>
				</div>
				<div className="six">{singleDigits[0]}</div>
				<div className="five">{singleDigits[1]}</div>
				<div className="four">{singleDigits[2]}</div>
				<div className="three">{singleDigits[3]}</div>
				<div className="two">{singleDigits[4]}</div>
				<div className="one">{singleDigits[5]}</div>
			</div>
			<div className="inputs col-4 m-auto mt-4">
				<label for="group">Countdown Controls: </label>
				<div
					className="btn-group text-center ms-2"
					role="group"
					aria-label="Basic example">
					<button
						type="button"
						className="btn btn-secondary pause"
						id="pause"
						onClick={props.onClick()}>
						<i className="fas fa-pause"></i>
					</button>
					<button
						type="button"
						className="btn btn-secondary"
						id="resume">
						<i className="fas fa-play"></i>
					</button>
					<button
						type="button"
						className="btn btn-secondary"
						id="restart">
						<i className="fas fa-redo"></i>
					</button>
				</div>
				<form>
					<div className="form-group">
						<label for="countdownFrom">Countdown From:</label>
						<input
							type="number"
							className="form-control"
							id="countdownFrom"
							aria-describedby="Countdown"
							placeholder="Number to countdown from"
							min="0"
							max="999999"
						/>
					</div>
					<button
						type="submit"
						className="btn btn-primary countdownSubmit">
						Submit Countdown
					</button>
					<div className="form-group">
						<label for="alertTimer">Alert Timer</label>
						<input
							type="number"
							className="form-control"
							id="alertTimer"
							placeholder="Set Alert Time"
						/>
					</div>
					<button
						type="submit"
						className="btn btn-primary alertSubmit">
						Set Alert Timer
					</button>
				</form>
			</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	seconds: PropTypes.string,
	onClick: PropTypes.func,
};

export default SecondsCounter;
