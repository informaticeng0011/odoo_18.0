/** @odoo-module **/

import { deserializeDateTime } from "@web/core/l10n/dates";
import publicWidget from "@web/legacy/js/public/public_widget";
const { DateTime } = luxon;

publicWidget.registry.SurveyTimerWidget = publicWidget.Widget.extend({
    //--------------------------------------------------------------------------
    // Widget
    //--------------------------------------------------------------------------

    /**
     * @override
     */
    init: function (parent, params) {
        this._super.apply(this, arguments);
        this.timer = params.timer;
        this.timeLimitMinutes = params.timeLimitMinutes;
        this.surveyTimerInterval = null;
        this.timeDifference = null;
        if (params.serverTime) {
            this.timeDifference = DateTime.utc().diff(
                deserializeDateTime(params.serverTime)
            ).milliseconds;
        }
    },


    /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    * Two responsabilities : Validate that time limit is not exceeded and Run timer otherwise.
    * If end-user's clock OR the system clock  is de-synchronized before the survey is started, we apply the
    * difference in timer (if time difference is more than 5 seconds) so that we can
    * display the 'absolute' counter
=======
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
    * Two responsibilities: Validate that the time limit is not exceeded and Run timer otherwise.
    * If the end-user's clock OR the system clock is desynchronized,
    * we apply the difference in the clocks (if the time difference is more than 500 ms).
    * This makes the timer fair across users and helps avoid early submissions to the server.
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
    *
    * @override
    */
    start: function () {
        var self = this;
        return this._super.apply(this, arguments).then(function () {
            self.countDownDate = DateTime.fromISO(self.timer, { zone: "utc" }).plus({
                minutes: self.timeLimitMinutes,
            });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            if (Math.abs(self.timeDifference) >= 5000) {
=======
            if (Math.abs(self.timeDifference) >= 500) {
>>>>>>> upstream/18.0
=======
            if (Math.abs(self.timeDifference) >= 500) {
>>>>>>> upstream/18.0
=======
            if (Math.abs(self.timeDifference) >= 500) {
>>>>>>> upstream/18.0
=======
            if (Math.abs(self.timeDifference) >= 500) {
>>>>>>> upstream/18.0
=======
            if (Math.abs(self.timeDifference) >= 500) {
>>>>>>> upstream/18.0
=======
            if (Math.abs(self.timeDifference) >= 500) {
>>>>>>> upstream/18.0
=======
            if (Math.abs(self.timeDifference) >= 500) {
>>>>>>> upstream/18.0
=======
            if (Math.abs(self.timeDifference) >= 500) {
>>>>>>> upstream/18.0
=======
            if (Math.abs(self.timeDifference) >= 500) {
>>>>>>> upstream/18.0
=======
            if (Math.abs(self.timeDifference) >= 500) {
>>>>>>> upstream/18.0
=======
            if (Math.abs(self.timeDifference) >= 500) {
>>>>>>> upstream/18.0
=======
            if (Math.abs(self.timeDifference) >= 500) {
>>>>>>> upstream/18.0
=======
            if (Math.abs(self.timeDifference) >= 500) {
>>>>>>> upstream/18.0
=======
            if (Math.abs(self.timeDifference) >= 500) {
>>>>>>> upstream/18.0
=======
            if (Math.abs(self.timeDifference) >= 500) {
>>>>>>> upstream/18.0
=======
            if (Math.abs(self.timeDifference) >= 500) {
>>>>>>> upstream/18.0
=======
            if (Math.abs(self.timeDifference) >= 500) {
>>>>>>> upstream/18.0
=======
            if (Math.abs(self.timeDifference) >= 500) {
>>>>>>> upstream/18.0
=======
            if (Math.abs(self.timeDifference) >= 500) {
>>>>>>> upstream/18.0
=======
            if (Math.abs(self.timeDifference) >= 500) {
>>>>>>> upstream/18.0
=======
            if (Math.abs(self.timeDifference) >= 500) {
>>>>>>> upstream/18.0
=======
            if (Math.abs(self.timeDifference) >= 500) {
>>>>>>> upstream/18.0
=======
            if (Math.abs(self.timeDifference) >= 500) {
>>>>>>> upstream/18.0
=======
            if (Math.abs(self.timeDifference) >= 500) {
>>>>>>> upstream/18.0
=======
            if (Math.abs(self.timeDifference) >= 500) {
>>>>>>> upstream/18.0
=======
            if (Math.abs(self.timeDifference) >= 500) {
>>>>>>> upstream/18.0
=======
            if (Math.abs(self.timeDifference) >= 500) {
>>>>>>> upstream/18.0
=======
            if (Math.abs(self.timeDifference) >= 500) {
>>>>>>> upstream/18.0
=======
            if (Math.abs(self.timeDifference) >= 500) {
>>>>>>> upstream/18.0
=======
            if (Math.abs(self.timeDifference) >= 500) {
>>>>>>> upstream/18.0
=======
            if (Math.abs(self.timeDifference) >= 500) {
>>>>>>> upstream/18.0
=======
            if (Math.abs(self.timeDifference) >= 500) {
>>>>>>> upstream/18.0
=======
            if (Math.abs(self.timeDifference) >= 500) {
>>>>>>> upstream/18.0
                self.countDownDate = self.countDownDate.plus({ milliseconds: self.timeDifference });
            }
            if (self.timeLimitMinutes <= 0 || self.countDownDate.diff(DateTime.utc()).seconds < 0) {
                self.trigger_up('time_up');
            } else {
                self._updateTimer();
                self.surveyTimerInterval = setInterval(self._updateTimer.bind(self), 1000);
            }
        });
    },

    // -------------------------------------------------------------------------
    // Private
    // -------------------------------------------------------------------------

    _formatTime: function (time) {
        return time > 9 ? time : '0' + time;
    },

    /**
    * This function is responsible for the visual update of the timer DOM every second.
    * When the time runs out, it triggers a 'time_up' event to notify the parent widget.
    *
    * We use a diff in millis and not a second, that we round to the nearest second.
    * Indeed, a difference of 999 millis is interpreted as 0 second by moment, which is problematic
    * for our use case.
    */
    _updateTimer: function () {
        var timeLeft = Math.round(this.countDownDate.diff(DateTime.utc()).milliseconds / 1000);

        if (timeLeft >= 0) {
            var timeLeftMinutes = parseInt(timeLeft / 60);
            var timeLeftSeconds = timeLeft - (timeLeftMinutes * 60);
            this.$el.text(this._formatTime(timeLeftMinutes) + ':' + this._formatTime(timeLeftSeconds));
        } else {
            clearInterval(this.surveyTimerInterval);
            this.trigger_up('time_up');
        }
    },
});

export default publicWidget.registry.SurveyTimerWidget;
