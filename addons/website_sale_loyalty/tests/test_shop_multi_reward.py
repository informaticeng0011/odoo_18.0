# Part of Odoo. See LICENSE file for full copyright and licensing details

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
from odoo.fields import Command
from odoo.tests import TransactionCase, tagged

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
from odoo import Command, http
from odoo.tests import tagged

from odoo.addons.base.tests.common import TransactionCaseWithUserPortal
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
from odoo.addons.website.tools import MockRequest
from odoo.addons.website_sale_loyalty.controllers.main import WebsiteSale


@tagged('post_install', '-at_install')
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
class TestClaimReward(TransactionCase):

    def test_claim_reward_with_multi_product(self):
        WebsiteSaleController = WebsiteSale()

        tag = self.env['product.tag'].create({
            'name': 'multi reward',
        })

        product1, product2 = self.env['product.product'].create([
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
class TestClaimReward(TransactionCaseWithUserPortal):

    @classmethod
    def setUpClass(cls):
        super().setUpClass()

        cls.WebsiteSaleController = WebsiteSale()
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        cls.website = cls.env.ref('website.default_website')
=======
        cls.website = cls.env.ref('website.default_website').with_user(cls.user_portal)

        cls.env['product.pricelist'].search([]).action_archive()
>>>>>>> upstream/18.0
=======
        cls.website = cls.env.ref('website.default_website').with_user(cls.user_portal)

        cls.env['product.pricelist'].search([]).action_archive()
>>>>>>> upstream/18.0
=======
        cls.website = cls.env.ref('website.default_website').with_user(cls.user_portal)

        cls.env['product.pricelist'].search([]).action_archive()
>>>>>>> upstream/18.0
=======
        cls.website = cls.env.ref('website.default_website').with_user(cls.user_portal)

        cls.env['product.pricelist'].search([]).action_archive()
>>>>>>> upstream/18.0
=======
        cls.website = cls.env.ref('website.default_website').with_user(cls.user_portal)

        cls.env['product.pricelist'].search([]).action_archive()
>>>>>>> upstream/18.0
=======
        cls.website = cls.env.ref('website.default_website').with_user(cls.user_portal)

        cls.env['product.pricelist'].search([]).action_archive()
>>>>>>> upstream/18.0
=======
        cls.website = cls.env.ref('website.default_website').with_user(cls.user_portal)

        cls.env['product.pricelist'].search([]).action_archive()
>>>>>>> upstream/18.0
=======
        cls.website = cls.env.ref('website.default_website').with_user(cls.user_portal)

        cls.env['product.pricelist'].search([]).action_archive()
>>>>>>> upstream/18.0
=======
        cls.website = cls.env.ref('website.default_website').with_user(cls.user_portal)

        cls.env['product.pricelist'].search([]).action_archive()
>>>>>>> upstream/18.0
=======
        cls.website = cls.env.ref('website.default_website').with_user(cls.user_portal)

        cls.env['product.pricelist'].search([]).action_archive()
>>>>>>> upstream/18.0
=======
        cls.website = cls.env.ref('website.default_website').with_user(cls.user_portal)

        cls.env['product.pricelist'].search([]).action_archive()
>>>>>>> upstream/18.0
=======
        cls.website = cls.env.ref('website.default_website').with_user(cls.user_portal)

        cls.env['product.pricelist'].search([]).action_archive()
>>>>>>> upstream/18.0

        tag = cls.env['product.tag'].create({
            'name': 'multi reward',
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

        cls.product1, cls.product2 = cls.env['product.product'].create([
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
            {
            'name': 'Test Product',
            'list_price': 10.0,
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
        cls.product1, cls.product2 = cls.env['product.product'].create([
            {
            'name': 'Test Product',
            'list_price': 10.0,
            'taxes_id': False,
<<<<<<< HEAD
<<<<<<< HEAD
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
            'product_tag_ids': tag,
        }, {
            'name': 'Test Product 2',
            'list_price': 20.0,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            'product_tag_ids': tag,
        }])

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        partner = self.env['res.partner'].create({
            'name': 'Test Customer',
            'email': 'test@example.com',
        })

        promo_program = self.env['loyalty.program'].create({
=======
        cls.promo_program, cls.coupon_program = cls.env['loyalty.program'].create([{
>>>>>>> upstream/18.0
=======
        cls.promo_program, cls.coupon_program = cls.env['loyalty.program'].create([{
>>>>>>> upstream/18.0
=======
        cls.promo_program, cls.coupon_program = cls.env['loyalty.program'].create([{
>>>>>>> upstream/18.0
=======
        cls.promo_program, cls.coupon_program = cls.env['loyalty.program'].create([{
>>>>>>> upstream/18.0
=======
        cls.promo_program, cls.coupon_program = cls.env['loyalty.program'].create([{
>>>>>>> upstream/18.0
=======
        cls.promo_program, cls.coupon_program = cls.env['loyalty.program'].create([{
>>>>>>> upstream/18.0
=======
        cls.promo_program, cls.coupon_program = cls.env['loyalty.program'].create([{
>>>>>>> upstream/18.0
=======
        cls.promo_program, cls.coupon_program = cls.env['loyalty.program'].create([{
>>>>>>> upstream/18.0
=======
        cls.promo_program, cls.coupon_program = cls.env['loyalty.program'].create([{
>>>>>>> upstream/18.0
=======
        cls.promo_program, cls.coupon_program = cls.env['loyalty.program'].create([{
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
            'taxes_id': False,
            'product_tag_ids': tag,
        }])

        cls.promo_program, cls.coupon_program = cls.env['loyalty.program'].create([{
<<<<<<< HEAD
<<<<<<< HEAD
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
            'name': 'Free Products',
            'program_type': 'promotion',
            'applies_on': 'current',
            'trigger': 'auto',
            'rule_ids': [Command.create({
                'minimum_qty': 1,
                'minimum_amount': 0.00,
                'reward_point_amount': 3,
            })],
            'reward_ids': [Command.create({
                'reward_type': 'product',
                'reward_product_tag_id': tag.id,
                'reward_product_qty': 1,
                'required_points': 1,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            })]
        })

        website = self.env['website'].browse(1)
        order = self.env['sale.order'].create({
            'website_id': website.id,
            'partner_id': partner.id,
            'order_line': [Command.create({
                'product_id': product1.id,
                'product_uom_qty': 1,
            })],
        })
        order._update_programs_and_rewards()
        with MockRequest(self.env, website=website, sale_order_id=order.id):

            WebsiteSaleController.claim_reward(promo_program.reward_ids[:1].id, product_id=str(product2.id))

            self.assertEqual(len(order.order_line), 2, 'reward line should be added to order')
            self.assertEqual(order.order_line[1].product_id, product2, 'added reward line should should contain product 2')
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
            })],
        }, {
            'name': "Multi-reward coupons",
            'program_type': 'coupons',
            'applies_on': 'current',
            'trigger': 'with_code',
            'reward_ids': [
                Command.create({
                    'reward_type': 'product',
                    'reward_product_tag_id': tag.id,
                    'reward_product_qty': 1,
                    'required_points': 1,
                    'discount': None,
                }),
                Command.create({
                    'reward_type': 'discount',
                    'discount': 10.0,
                    'discount_mode': 'percent',
                    'required_points': 1,
                }),
            ],
            'coupon_ids': [Command.create({'points': 1})],
        }])
        cls.coupon = cls.coupon_program.coupon_ids

        cls.cart = cls.env['sale.order'].create({
            'website_id': cls.website.id,
            'partner_id': cls.partner_portal.id,
            'order_line': [Command.create({
                'product_id': cls.product1.id,
                'product_uom_qty': 1,
            })],
        })
        cls.cart._update_programs_and_rewards()

        installed_modules = set(cls.env['ir.module.module'].search([
            ('state', '=', 'installed'),
        ]).mapped('name'))
        for _ in http._generate_routing_rules(installed_modules, nodb_only=False):
            pass

    def test_claim_reward_with_multi_products(self):
        order = self.cart
        product2 = self.product2

        with MockRequest(self.env, website=self.website, sale_order_id=order.id):
            self.WebsiteSaleController.claim_reward(
                self.promo_program.reward_ids.id,
                product_id=str(product2.id),
            )

            self.assertEqual(len(order.order_line), 2, 'reward line should be added to order')
            self.assertEqual(order.order_line[1].product_id, product2, 'added reward line should should contain product 2')

    def test_apply_coupon_with_multiple_rewards(self):
        discount_reward = self.coupon_program.reward_ids.filtered('discount')

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        with MockRequest(self.env, website=self.website, sale_order_id=self.cart.id):
=======
        with MockRequest(self.website.env, website=self.website, sale_order_id=self.cart.id):
>>>>>>> upstream/18.0
=======
        with MockRequest(self.website.env, website=self.website, sale_order_id=self.cart.id):
>>>>>>> upstream/18.0
=======
        with MockRequest(self.website.env, website=self.website, sale_order_id=self.cart.id):
>>>>>>> upstream/18.0
=======
        with MockRequest(self.website.env, website=self.website, sale_order_id=self.cart.id):
>>>>>>> upstream/18.0
=======
        with MockRequest(self.website.env, website=self.website, sale_order_id=self.cart.id):
>>>>>>> upstream/18.0
=======
        with MockRequest(self.website.env, website=self.website, sale_order_id=self.cart.id):
>>>>>>> upstream/18.0
=======
        with MockRequest(self.website.env, website=self.website, sale_order_id=self.cart.id):
>>>>>>> upstream/18.0
=======
        with MockRequest(self.website.env, website=self.website, sale_order_id=self.cart.id):
>>>>>>> upstream/18.0
=======
        with MockRequest(self.website.env, website=self.website, sale_order_id=self.cart.id):
>>>>>>> upstream/18.0
=======
        with MockRequest(self.website.env, website=self.website, sale_order_id=self.cart.id):
>>>>>>> upstream/18.0
=======
        with MockRequest(self.website.env, website=self.website, sale_order_id=self.cart.id):
>>>>>>> upstream/18.0
=======
        with MockRequest(self.website.env, website=self.website, sale_order_id=self.cart.id):
>>>>>>> upstream/18.0
            self.WebsiteSaleController.pricelist(promo=self.coupon.code)
            self.assertFalse(self.cart.order_line.reward_id)

            self.WebsiteSaleController.claim_reward(discount_reward.id, code=self.coupon.code)
            self.assertTrue(self.cart.order_line.reward_id)
            self.assertIn(
                discount_reward.discount_line_product_id,
                self.cart.order_line.product_id,
                "Discount product should be added to order",
            )
            self.assertAlmostEqual(
                self.product1.list_price * 0.9,
                self.cart.amount_untaxed,
                delta=self.cart.currency_id.rounding,
                msg="10% discount should be applied",
            )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
