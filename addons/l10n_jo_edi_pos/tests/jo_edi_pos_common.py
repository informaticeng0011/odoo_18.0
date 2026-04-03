from odoo import Command
from odoo.tests import tagged
from odoo.addons.l10n_jo_edi.tests.jo_edi_common import JoEdiCommon
from odoo.addons.point_of_sale.tests.common import TestPoSCommon
from odoo.addons.point_of_sale.tests.test_frontend import TestPointOfSaleHttpCommon


@tagged('post_install_l10n', 'post_install', '-at_install')
class JoEdiPosCommon(JoEdiCommon, TestPoSCommon, TestPointOfSaleHttpCommon):

    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.company_data['company'].write({
            'country_id': cls.env.ref('base.jo').id,
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
    def _l10n_jo_create_order(self, order_vals):
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
    def _pay_order(self, order, payments=None, default_payment=True):
        if default_payment:
            bank_pm = self.main_pos_config.payment_method_ids.filtered(lambda pm: not pm.l10n_jo_edi_pos_is_cash)[0]
            payments = [(bank_pm, order.amount_total)]  # the default is to pay all the order by bank payment method

        for pm, amount in (payments or []):
            self.make_payment(order, pm, amount)

    def _l10n_jo_create_order(self, order_vals, payments=None, default_payment=True):
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        self.main_pos_config.with_user(self.pos_user).open_ui()
        order_vals.update({
            'company_id': self.company.id,
            'session_id': self.main_pos_config.current_session_id.id,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            'partner_id': self.partner_jo.id,
            'date_order': order_vals.get('date_order', '2019-01-01'),
        })
=======
            'date_order': order_vals.get('date_order', '2019-01-01'),
        })
        order_vals.setdefault('partner_id', self.partner_jo.id)
>>>>>>> upstream/18.0
=======
            'date_order': order_vals.get('date_order', '2019-01-01'),
        })
        order_vals.setdefault('partner_id', self.partner_jo.id)
>>>>>>> upstream/18.0
=======
            'date_order': order_vals.get('date_order', '2019-01-01'),
        })
        order_vals.setdefault('partner_id', self.partner_jo.id)
>>>>>>> upstream/18.0
=======
            'date_order': order_vals.get('date_order', '2019-01-01'),
        })
        order_vals.setdefault('partner_id', self.partner_jo.id)
>>>>>>> upstream/18.0
=======
            'date_order': order_vals.get('date_order', '2019-01-01'),
        })
        order_vals.setdefault('partner_id', self.partner_jo.id)
>>>>>>> upstream/18.0
=======
            'date_order': order_vals.get('date_order', '2019-01-01'),
        })
        order_vals.setdefault('partner_id', self.partner_jo.id)
>>>>>>> upstream/18.0
=======
            'date_order': order_vals.get('date_order', '2019-01-01'),
        })
        order_vals.setdefault('partner_id', self.partner_jo.id)
>>>>>>> upstream/18.0
=======
            'date_order': order_vals.get('date_order', '2019-01-01'),
        })
        order_vals.setdefault('partner_id', self.partner_jo.id)
>>>>>>> upstream/18.0
=======
            'date_order': order_vals.get('date_order', '2019-01-01'),
        })
        order_vals.setdefault('partner_id', self.partner_jo.id)
>>>>>>> upstream/18.0
=======
            'date_order': order_vals.get('date_order', '2019-01-01'),
        })
        order_vals.setdefault('partner_id', self.partner_jo.id)
>>>>>>> upstream/18.0
=======
            'date_order': order_vals.get('date_order', '2019-01-01'),
        })
        order_vals.setdefault('partner_id', self.partner_jo.id)
>>>>>>> upstream/18.0
=======
            'date_order': order_vals.get('date_order', '2019-01-01'),
        })
        order_vals.setdefault('partner_id', self.partner_jo.id)
>>>>>>> upstream/18.0
=======
            'date_order': order_vals.get('date_order', '2019-01-01'),
        })
        order_vals.setdefault('partner_id', self.partner_jo.id)
>>>>>>> upstream/18.0
=======
            'date_order': order_vals.get('date_order', '2019-01-01'),
        })
        order_vals.setdefault('partner_id', self.partner_jo.id)
>>>>>>> upstream/18.0
        order_vals.setdefault('amount_tax', 0)
        order_vals.setdefault('amount_paid', 0)
        order_vals.setdefault('amount_total', 0)
        order_vals.setdefault('amount_return', 0)
        order_vals['lines'] = [Command.create({'price_subtotal': 0, 'price_subtotal_incl': 0, **line}) for line in order_vals['lines']]
        order = self.env['pos.order'].create(order_vals)
        order._compute_prices()

        if 'currency_id' in order_vals:
            order.currency_id = order_vals['currency_id']

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        return order

    def _l10n_jo_create_order_refund(self, order, refund_vals):
        order = self._l10n_jo_create_order(order) if isinstance(order, dict) else order
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
        self._pay_order(order, payments, default_payment)

        return order

    def _l10n_jo_create_order_refund(self, order, refund_vals, payments=None, default_payment=True):
        order = self._l10n_jo_create_order(order, payments, default_payment) if isinstance(order, dict) else order
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        order_refund = order._refund()
        if 'lines' in refund_vals:
            for order_line, line_write_vals in zip(order_refund.lines, refund_vals['lines']):
                order_line.write(line_write_vals)
            del refund_vals['lines']
        order_refund.write(refund_vals)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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

        self._pay_order(order_refund, payments, default_payment)

>>>>>>> upstream/18.0
=======

        self._pay_order(order_refund, payments, default_payment)

>>>>>>> upstream/18.0
=======

        self._pay_order(order_refund, payments, default_payment)

>>>>>>> upstream/18.0
=======

        self._pay_order(order_refund, payments, default_payment)

>>>>>>> upstream/18.0
=======

        self._pay_order(order_refund, payments, default_payment)

>>>>>>> upstream/18.0
=======

        self._pay_order(order_refund, payments, default_payment)

>>>>>>> upstream/18.0
=======

        self._pay_order(order_refund, payments, default_payment)

>>>>>>> upstream/18.0
=======

        self._pay_order(order_refund, payments, default_payment)

>>>>>>> upstream/18.0
=======

        self._pay_order(order_refund, payments, default_payment)

>>>>>>> upstream/18.0
=======

        self._pay_order(order_refund, payments, default_payment)

>>>>>>> upstream/18.0
=======

        self._pay_order(order_refund, payments, default_payment)

>>>>>>> upstream/18.0
=======

        self._pay_order(order_refund, payments, default_payment)

>>>>>>> upstream/18.0
=======

        self._pay_order(order_refund, payments, default_payment)

>>>>>>> upstream/18.0
=======

        self._pay_order(order_refund, payments, default_payment)

>>>>>>> upstream/18.0
        return order_refund
