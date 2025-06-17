# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

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
from datetime import datetime

=======
from datetime import datetime, timedelta
from odoo import fields
>>>>>>> upstream/18.0
=======
from datetime import datetime, timedelta
from odoo import fields
>>>>>>> upstream/18.0
=======
from datetime import datetime, timedelta
from odoo import fields
>>>>>>> upstream/18.0
=======
from datetime import datetime, timedelta
from odoo import fields
>>>>>>> upstream/18.0
=======
from datetime import datetime, timedelta
from odoo import fields
>>>>>>> upstream/18.0
=======
from datetime import datetime, timedelta
from odoo import fields
>>>>>>> upstream/18.0
=======
from datetime import datetime, timedelta
from odoo import fields
>>>>>>> upstream/18.0
=======
from datetime import datetime, timedelta
from odoo import fields
>>>>>>> upstream/18.0
=======
from datetime import datetime, timedelta
from odoo import fields
>>>>>>> upstream/18.0
=======
from datetime import datetime, timedelta
from odoo import fields
>>>>>>> upstream/18.0
=======
from datetime import datetime, timedelta
from odoo import fields
>>>>>>> upstream/18.0
=======
from datetime import datetime, timedelta
from odoo import fields
>>>>>>> upstream/18.0
=======
from datetime import datetime, timedelta
from odoo import fields
>>>>>>> upstream/18.0
=======
from datetime import datetime, timedelta
from odoo import fields
>>>>>>> upstream/18.0
=======
from datetime import datetime, timedelta
from odoo import fields
>>>>>>> upstream/18.0
=======
from datetime import datetime, timedelta
from odoo import fields
>>>>>>> upstream/18.0
=======
from datetime import datetime, timedelta
from odoo import fields
>>>>>>> upstream/18.0
=======
from datetime import datetime, timedelta
from odoo import fields
>>>>>>> upstream/18.0
=======
from datetime import datetime, timedelta
from odoo import fields
>>>>>>> upstream/18.0
from odoo.addons.sms.tests.common import SMSCommon
from odoo.tests import tagged


@tagged('sms')
class TestCalendarSms(SMSCommon):

    @classmethod
    def setUpClass(cls):
        super(TestCalendarSms, cls).setUpClass()

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
=======
        now = fields.datetime.now()

>>>>>>> upstream/18.0
=======
        now = fields.datetime.now()

>>>>>>> upstream/18.0
=======
        now = fields.datetime.now()

>>>>>>> upstream/18.0
=======
        now = fields.datetime.now()

>>>>>>> upstream/18.0
=======
        now = fields.datetime.now()

>>>>>>> upstream/18.0
=======
        now = fields.datetime.now()

>>>>>>> upstream/18.0
=======
        now = fields.datetime.now()

>>>>>>> upstream/18.0
=======
        now = fields.datetime.now()

>>>>>>> upstream/18.0
=======
        now = fields.datetime.now()

>>>>>>> upstream/18.0
=======
        now = fields.datetime.now()

>>>>>>> upstream/18.0
=======
        now = fields.datetime.now()

>>>>>>> upstream/18.0
=======
        now = fields.datetime.now()

>>>>>>> upstream/18.0
=======
        now = fields.datetime.now()

>>>>>>> upstream/18.0
=======
        now = fields.datetime.now()

>>>>>>> upstream/18.0
=======
        now = fields.datetime.now()

>>>>>>> upstream/18.0
=======
        now = fields.datetime.now()

>>>>>>> upstream/18.0
=======
        now = fields.datetime.now()

>>>>>>> upstream/18.0
=======
        now = fields.datetime.now()

>>>>>>> upstream/18.0
=======
        now = fields.datetime.now()

>>>>>>> upstream/18.0
        cls.partner_phone = cls.env['res.partner'].create({
            'name': 'Partner With Phone Number',
            'phone': '0477777777',
            'country_id': cls.env.ref('base.be').id,
        })
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
        cls.partner_phone_2 = cls.env['res.partner'].create({
            'name': 'Partner With Phone Number',
            'phone': '0488888888',
            'country_id': cls.env.ref('base.be').id,
        })
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

        cls.partner_phone_3 = cls.env['res.partner'].create({
            'name': 'Partner With Phone Number',
            'phone': '0499999999',
            'country_id': cls.env.ref('base.be').id,
        })

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
        cls.partner_no_phone = cls.env['res.partner'].create({
            'name': 'Partner With No Phone Number',
            'country_id': cls.env.ref('base.be').id,
        })
        cls.event = cls.env['calendar.event'].create({
            'alarm_ids': [(0, 0, {
                'alarm_type': 'sms',
                'name': 'SMS Reminder',
            })],
            'name': "Boostrap vs Foundation",
            'partner_ids': [(6, 0, [cls.partner_phone.id, cls.partner_no_phone.id])],
            'start': datetime(2022, 1, 1, 11, 11),
            'stop': datetime(2022, 2, 2, 22, 22),
        })
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
        cls.alarm_1h = cls.env['calendar.alarm'].create({
            'name': 'Reminder 1 Hour',
            'duration': 1,
            'interval': 'hours',
            'alarm_type': 'sms',
        })
        cls.alarm_24h = cls.env['calendar.alarm'].create({
            'name': 'Reminder 24 Hours',
            'duration': 24,
            'interval': 'hours',
            'alarm_type': 'sms',
        })

        cls.event_1h = cls.env['calendar.event'].create({
            'name': 'Event in 1h',
            'start': now + timedelta(minutes=30),  # Start in 30 minutes
            'stop': now + timedelta(hours=1, minutes=30),
            'alarm_ids': [(4, cls.alarm_1h.id), (4, cls.alarm_24h.id)],
            'partner_ids': [(6, 0, [cls.partner_phone.id])],
        })

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
        cls.event_1h_dup = cls.event_1h.copy(default={
            'alarm_ids': [(4, cls.alarm_1h.id), (4, cls.alarm_24h.id)],
            'partner_ids': [(6, 0, [cls.partner_phone_3.id])],
        })
        # for some reason the above is not sufficient
        cls.event_1h_dup.partner_ids = cls.partner_phone_3

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
        # Adjust event_24h so that the 24-hour alarm falls within the last hour
        cls.event_24h = cls.env['calendar.event'].create({
            'name': 'Event in 24h',
            'start': now + timedelta(hours=23, minutes=30),  # Start in 23 hours 30 minutes
            'stop': now + timedelta(hours=24, minutes=30),
            'alarm_ids': [(4, cls.alarm_1h.id), (4, cls.alarm_24h.id)],
            'partner_ids': [(6, 0, [cls.partner_phone_2.id])],
        })

        cls.sms_template_1h = cls.env['sms.template'].create({
            'name': 'Calendar Alarm SMS Template',
            'body': 'Reminder: Your event is starting in 1 hour!',
            'model_id': cls.env['ir.model']._get('calendar.event').id,
        })
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
        cls.alarm_1h.sms_template_id = cls.sms_template_1h.id

        cls.sms_template_24h = cls.env['sms.template'].create({
            'name': 'Calendar Alarm SMS Template',
            'body': 'Reminder: Your event is starting in 24 hour!',
            'model_id': cls.env['ir.model']._get('calendar.event').id,
        })
        cls.alarm_24h.sms_template_id = cls.sms_template_24h.id
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

    def test_attendees_with_number(self):
        """Test if only partners with sanitized number are returned."""
        with self.mockSMSGateway():
            self.event._do_sms_reminder(self.event.alarm_ids)
        self.assertEqual(len(self._sms), 1, "There should be only one partner retrieved")
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

    def test_send_reminder_match_both_events(self):
        """
        Test that only the necessary SMS messages are sent,
         with each SMS template correctly matching its corresponding alarm duration and the event.
        """
        with self.mockSMSGateway():
            lastcall = fields.Datetime.now() - timedelta(hours=1)
            self.env['calendar.alarm_manager'].with_context(lastcall=lastcall)._send_reminder()

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
        self.assertEqual(len(self._sms), 2)
        self.assertSMS(self.partner_phone, self.partner_phone.phone_sanitized, 'pending',
                       content=self.sms_template_1h.body)
        self.assertSMS(self.partner_phone_2, self.partner_phone_2.phone_sanitized, 'pending',
                       content=self.sms_template_24h.body)
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
        self.assertEqual(len(self._sms), 3)
        self.assertSMS(self.partner_phone, self.partner_phone.phone_sanitized, 'pending',
                        content=self.sms_template_1h.body)
        self.assertSMS(self.partner_phone_3, self.partner_phone_3.phone_sanitized, 'pending',
                        content=self.sms_template_1h.body)
        self.assertSMS(self.partner_phone_2, self.partner_phone_2.phone_sanitized, 'pending',
                        content=self.sms_template_24h.body)
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
