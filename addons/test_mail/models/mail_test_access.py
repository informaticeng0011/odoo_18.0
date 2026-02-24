from odoo import exceptions, fields, models


class MailTestAccess(models.Model):
    """ Test access on mail models without depending on real models like channel
    or partner which have their own set of ACLs. """
    _description = 'Mail Access Test'
    _name = 'mail.test.access'
    _inherit = ['mail.thread.blacklist']
    _mail_post_access = 'write'  # default value but ease mock
    _order = 'id DESC'
    _primary_email = 'email_from'

    name = fields.Char()
    email_from = fields.Char()
    phone = fields.Char()
    customer_id = fields.Many2one('res.partner', 'Customer')
    access = fields.Selection(
        [
            ('public', 'public'),
            ('logged', 'Logged'),
            ('logged_ro', 'Logged readonly for portal'),
            ('followers', 'Followers'),
            ('internal', 'Internal'),
            ('internal_ro', 'Internal readonly'),
            ('admin', 'Admin'),
        ],
        name='Access', default='public')

    def _mail_get_partner_fields(self):
        return ['customer_id']


class MailTestAccessCusto(models.Model):
    """ Test access on mail models without depending on real models like channel
    or partner which have their own set of ACLs. """
    _description = 'Mail Access Test with Custo'
    _name = 'mail.test.access.custo'
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    _inherit = ['mail.thread.blacklist']
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
=======
    _inherit = ['mail.thread.blacklist', 'mail.activity.mixin']
>>>>>>> upstream/18.0
    _mail_post_access = 'write'  # default value but ease mock
    _order = 'id DESC'
    _primary_email = 'email_from'

    name = fields.Char()
    email_from = fields.Char()
    phone = fields.Char()
    customer_id = fields.Many2one('res.partner', 'Customer')
    is_locked = fields.Boolean()
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0
=======
    is_readonly = fields.Boolean()
>>>>>>> upstream/18.0

    def _mail_get_partner_fields(self):
        return ['customer_id']

    def _get_mail_message_access(self, res_ids, operation, model_name=None):
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        # customize message creation
        if operation == "create":
            if any(record.is_locked for record in self.browse(res_ids)):
                raise exceptions.AccessError('Cannot post on locked records')
            else:
                return "read"
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
        # customize message creation: only unlocked, except admins
        if operation == "create":
            if any(record.is_locked for record in self.browse(res_ids)) and not self.env.user._is_admin():
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
        # customize message creation: only unlocked, except admins
        records = self.browse(res_ids).with_prefetch(self._prefetch_ids)  # force prefetch, lost otherwise with rebrowsing
        if operation == "create":
            if any(record.is_locked for record in records) and not self.env.user._is_admin():
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
                raise exceptions.AccessError('Cannot post on locked records')
            return "read"
        # customize read: read access on unlocked, write access on locked
        elif operation == "read":
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
            if any(record.is_locked for record in self.browse(res_ids)):
                return "write"
            return "read"
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
            if any(record.is_locked for record in records):
                return "write"
            return "read"
>>>>>>> upstream/18.0
=======
            if any(record.is_locked for record in records):
                return "write"
            return "read"
>>>>>>> upstream/18.0
=======
            if any(record.is_locked for record in records):
                return "write"
            return "read"
>>>>>>> upstream/18.0
=======
            if any(record.is_locked for record in records):
                return "write"
            return "read"
>>>>>>> upstream/18.0
=======
            if any(record.is_locked for record in records):
                return "write"
            return "read"
>>>>>>> upstream/18.0
=======
            if any(record.is_locked for record in records):
                return "write"
            return "read"
>>>>>>> upstream/18.0
=======
            if any(record.is_locked for record in records):
                return "write"
            return "read"
>>>>>>> upstream/18.0
=======
            if any(record.is_locked for record in records):
                return "write"
            return "read"
>>>>>>> upstream/18.0
=======
            if any(record.is_locked for record in records):
                return "write"
            return "read"
>>>>>>> upstream/18.0
=======
            if any(record.is_locked for record in records):
                return "write"
            return "read"
>>>>>>> upstream/18.0
=======
            if any(record.is_locked for record in records):
                return "write"
            return "read"
>>>>>>> upstream/18.0
=======
            if any(record.is_locked for record in records):
                return "write"
            return "read"
>>>>>>> upstream/18.0
=======
            if any(record.is_locked for record in records):
                return "write"
            return "read"
>>>>>>> upstream/18.0
=======
            if any(record.is_locked for record in records):
                return "write"
            return "read"
>>>>>>> upstream/18.0
=======
            if any(record.is_locked for record in records):
                return "write"
            return "read"
>>>>>>> upstream/18.0
        return super()._get_mail_message_access(res_ids, operation, model_name=model_name)
