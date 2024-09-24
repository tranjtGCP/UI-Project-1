<main>
	<body>
		<div class="top">
			<div class="header">
				<h1 id="username">GG, Justin!</h1>
			</div>
			<div class="motto">
				<h2>Let's record your experience.</h2>
				<p id="daysSinceFirst"></p>
				<p id="daysActive"></p>
			</div>
			<div class="body">
				<div class="body-column">
					<div class="body-column-row">
						<div class="body-cell">
							<div class="body-item-header">
								<hr class="body-divider" />
								<h2>Logistics</h2>
							</div>
							<div class="date">
								<h3>Date:</h3>
								<p id="currentDate"></p>
							</div>
							<div class="date">
								<h3>Time:</h3>
								<p id="currentTime"></p>
							</div>
						</div>
						<div class="body-cell">
							<div class="body-item-header">
								<hr class="body-divider" />
								<h2>Hardware / Software</h2>
							</div>
							<div class="body-item">
								<h3>Platform:</h3>
								<select id="platformSelect">
									<option value="1"
										>Click to select a platform
									</option>
									<option value="2">PC</option>
									<option value="3">Playstation</option>
									<option value="4">Xbox</option>
									<option value="5">Switch</option>
								</select>
							</div>
							<div class="body-item">
								<h3>Tools:</h3>
								<p>What did you use to play?</p>
								<div class="checkboxes" id="checkboxes">
									<div class="checkbox-cell">
										<input type="checkbox" id="mkbcb"/> Mouse and Keyboard
									</div>
									<div class="checkbox-cell">
										<input type="checkbox" id="ccb"/> Controller
									</div>
									<div class="checkbox-cell">
										<input type="checkbox" id="ocb"/> Other
									</div>
								</div>
							</div>
							<div class="body-item">
								<h3>Game:</h3>
								<input
									type="text"
									id="game"
									placeholder="There is a game for everyone."
								/>
							</div>
						</div>
					</div>
					<div class="body-cell" id="image-video">
						<div class="body-item-header">
							<hr class="body-divider" />
							<h2>Upload</h2>
						</div>
						<div class="body-item">
							<h3>
								Share an image of your gameplay!
							</h3>
							<input type="file" id="upload" accept="image/*" />
							<img id="preview" width="800" alt="" />
						</div>
					</div>
				</div>

				<div class="body-cell">
					<div class="body-item-header">
						<hr class="body-divider" />
						<h2>Analysis</h2>
					</div>
					<div class="body-item">
						<div class="ratings">
							<h3>Rating:</h3>
							<p>How was this session?</p>
							<div class="radio-buttons">
								<div class="radio-button">
									<input
										type="radio"
										value="1"
										name="rating"
										id="rating1"
									/>
									1
									<p>Terrible...</p>
								</div>
								<div class="radio-button">
									<input
										type="radio"
										value="2"
										name="rating"
										id="rating2"
									/>
									2
									<p>Bad</p>
								</div>
								<div class="radio-button">
									<input
										type="radio"
										value="3"
										name="rating"
										id="rating3"
									/>
									3
									<p>Okay</p>
								</div>
								<div class="radio-button">
									<input
										type="radio"
										value="4"
										name="rating"
										id="rating4"
									/>
									4
									<p>Good</p>
								</div>
								<div class="radio-button">
									<input
										type="radio"
										value="5"
										name="rating"
										id="rating5"
									/>
									5
									<p>Amazing!!!</p>
								</div>
							</div>
						</div>
					</div>
					<div class="body-item">
						<h3>Notable events:</h3>
						<p>What happened during this game session?</p>
						<textarea id="events"
							placeholder="What went well, what didn't, strategies, anything"
						></textarea>
					</div>
					<div class="body-item">
						<h3>Notes:</h3>
						<p>What should you focus on for the future?</p>
						<textarea id="notes" placeholder="Strive to improve yourself"
						></textarea>
					</div>
				</div>
			</div>
			<div class="body2">
				<!-- The Sequel -->
				<div class="save-notif-div">
					<p id="saveNotification">Saved! Click again after more changes to update!</p>
				</div>
				<div class="button-div">
					<button type="button" class="submit-button" id="submitButton">Save</button>
				</div>
			</div>
			<hr class="top-divider" />
			<div class="body3">
				<!-- The Three-quel -->
				<!-- Previous Days/Entries -->
				<div class="body-cell">
					<div class="body-item-header">
						<hr class="body-divider" />
						<h2>Previous Days</h2>
						<p>
							Click-and-drag the bottem-left edge of the
							box or scrollbar to view more!
						</p>
					</div>
					<div class="prev-days-div">
						<ul id="prevDays"></ul>
					</div>
				</div>
				<div class="body-cell" id="currentDay">
					<div class="body-item-header">
						<hr class="body-divider" />
						<h2>Current Day</h2>
					</div>
					<p>Save to update!</p>
					<div class="current-day-div">
						<div class="current-day-row">
							<p><strong>Date: </strong></p>
							<p id="currentDayDate"></p>
						</div>
						<div class="current-day-row">
							<p><strong>Time: </strong></p>
							<p id="currentDayTime"></p>
						</div>
						<div class="current-day-row">
							<p><strong>Platform: </strong></p>
							<p id="currentDayPlatform"></p>
						</div>
						<div class="current-day-row">
							<p><strong>Tools: </strong></p>
							<p id="currentDayTools"></p>
						</div>
						<div class="current-day-row">
							<p><strong>Game: </strong></p>
							<p id="currentDayGame"></p>
						</div>
						<div class="current-day-row">
							<p><strong>Rating: </strong></p>
							<p id="currentDayRating"></p>
						</div>
						<div class="current-day-row">
							<p><strong>Events: </strong></p>
							<p id="currentDayEvents"></p>
						</div>
						<div class="current-day-row">
							<p><strong>Notes: </strong></p>
							<p id="currentDayNotes"></p>
						</div>
					</div>
				</div>
			</div>
			<hr class="top-divider" />
			<div class="body4">
				<!-- The Four-quel -->
					<div class="body-item-header">
						<hr class="body-divider"/>
						<h2>Goals</h2>
					</div>
					<div class="body-item">
						<p><strong>Average Rating (Aim for higher!):</strong></p>
						<p id="averageRating"><strong></strong></p>
					</div>
					<div class="body-item">
						<button>Add goal</button>
					</div>
			</div>
		</div>
	</body>

	<!-- Load external JS files -->
	<!-- This is where you will do most of the 'work' for your applications -->
	<script src="js/main.js"></script>
</main>

<style href="app.css">
</style>
