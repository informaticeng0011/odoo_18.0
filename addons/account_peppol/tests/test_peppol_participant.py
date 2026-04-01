<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import json
from contextlib import contextmanager
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
from requests import Session, PreparedRequest, Response
from psycopg2 import IntegrityError
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
from urllib.parse import parse_qs, quote_plus

from psycopg2 import IntegrityError
from requests import PreparedRequest, Response, Session
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0

from odoo.exceptions import ValidationError, UserError
from odoo.tests.common import tagged, TransactionCase, freeze_time
from odoo.tools import mute_logger

ID_CLIENT = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
FAKE_UUID = 'yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy'
PDF_FILE_PATH = 'account_peppol/tests/assets/peppol_identification_test.pdf'

@freeze_time('2023-01-01')
@tagged('-at_install', 'post_install')
class TestPeppolParticipant(TransactionCase):
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
from base64 import b64encode

from odoo import Command
from odoo.exceptions import ValidationError
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
=======
from odoo.tests.form import Form
>>>>>>> upstream/18.0
from odoo.tests.common import tagged, TransactionCase, freeze_time
from odoo.tools import mute_logger
from odoo.tools.misc import file_open

from odoo.addons.account_peppol.tests.common import PeppolConnectorCommon


@freeze_time('2023-01-01')
@tagged('-at_install', 'post_install')
class TestPeppolParticipant(PeppolConnectorCommon):
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0

    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.env['ir.config_parameter'].sudo().set_param('account_peppol.edi.mode', 'test')
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

    @classmethod
    def _get_mock_responses(cls):
        participant_state = cls.env.context.get('participant_state', 'receiver')
        return {
            '/api/peppol/2/participant_status': {
                'result': {
                    'peppol_state': participant_state,
                }
            },
            '/api/peppol/1/activate_participant': {'result': {}},
            '/api/peppol/2/register_participant': {'result': {}},
            '/iap/account_edi/2/create_user': {
                'result': {
                    'id_client': ID_CLIENT,
                    'refresh_token': FAKE_UUID,
                }
            },
            '/api/peppol/1/send_verification_code': {'result': {}},
            '/api/peppol/1/update_user': {'result': {}},
            '/api/peppol/2/verify_phone_number': {'result': {}},
            '/api/peppol/1/migrate_peppol_registration': {
                'result': {
                    'migration_key': 'test_key',
                }
            },
            '/api/peppol/1/register_sender': {'result': {}},
            '/api/peppol/1/register_sender_as_receiver': {'result': {}},
        }

    @classmethod
    def _request_handler(cls, s: Session, r: PreparedRequest, /, **kw):
        response = Response()
        response.status_code = 200
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        if r.url.endswith('/iso6523-actorid-upis%3A%3A9925%3A0000000000'):
            response.status_code = 404
            return response

        if r.url.endswith('/iso6523-actorid-upis%3A%3A0208%3A0000000000'):
            response._content = b'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<smp:ServiceGroup xmlns:wsa="http://www.w3.org/2005/08/addressing" xmlns:id="http://busdox.org/transport/identifiers/1.0/" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:smp="http://busdox.org/serviceMetadata/publishing/1.0/"><id:ParticipantIdentifier scheme="iso6523-actorid-upis">0208:0000000000</id:ParticipantIdentifier></smp:ServiceGroup>'
            return response

        url = r.path_url
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
        url = r.path_url.lower()
        if url.endswith('/iso6523-actorid-upis%3A%3A9925%3ABE0239843188'.lower()):
            response.status_code = 404
            return response

        if url.endswith('/iso6523-actorid-upis%3A%3A0208%3A0239843188'.lower()):
            response._content = b'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<smp:ServiceGroup xmlns:wsa="http://www.w3.org/2005/08/addressing" xmlns:id="http://busdox.org/transport/identifiers/1.0/" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:smp="http://busdox.org/serviceMetadata/publishing/1.0/"><id:ParticipantIdentifier scheme="iso6523-actorid-upis">0208:0239843188</id:ParticipantIdentifier></smp:ServiceGroup>'
            return response

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
        url = r.path_url.lower()
        # mock SMP participant lookup: 200 if pid in SMP_OK_IDS, else 404
        if r.path_url.startswith('/api/peppol/1/lookup'):
            peppol_identifier = parse_qs(r.path_url.rsplit('?')[1])['peppol_identifier'][0]
            if peppol_identifier == "0208:0239843188":
                response.json = lambda: {
                    "result": {
                        "identifier": peppol_identifier,
                        "smp_base_url": "http://example.com/smp",
                        "ttl": 60,
                        "service_group_url": "http://example.com/smp/iso6523-actorid-upis%3A%3A" + quote_plus(peppol_identifier),
                        "services": []
                    }
                }
            else:
                response.status_code = 404
                response.json = lambda: {
                    "error": {
                        "code": "NOT_FOUND",
                        "message": "no naptr record",
                        "retryable": False,
                    },
                }
            return response

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
        body = json.loads(r.body)
        responses = cls._get_mock_responses()
        if (
            url == '/api/peppol/2/register_participant'
            and cls.env.context.get('migrate_to')
            and not body['params'].get('migration_key')
        ):
            raise UserError('No migration key was provided')

        if cls.env.context.get('migrated_away'):
            response.json = lambda: {
                'result': {
                    'proxy_error': {
                        'code': 'no_such_user',
                        'message': 'The user does not exist on the proxy',
                    }
                }
            }
            return response

        if url not in responses:
            return super()._request_handler(s, r, **kw)
        response.json = lambda: responses[url]
        return response

    def _get_participant_vals(self):
        return {
            'peppol_eas': '9925',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            'peppol_endpoint': '0000000000',
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
=======
            'peppol_endpoint': 'BE0239843188',
>>>>>>> upstream/18.0
            'phone_number': '+32483123456',
            'contact_email': 'yourcompany@test.example.com',
        }

    @contextmanager
    def _set_context(self, other_context):
        previous_context = self.env.context
        self.env.context = dict(previous_context, **other_context)
        yield self
        self.env.context = previous_context

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
    def test_ignore_archived_edi_users(self):
        wizard = self.env['peppol.registration'].create(self._get_participant_vals())
        wizard.button_peppol_sender_registration()
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
        cls.private_key = cls.env['certificate.key'].create({
            'name': 'Test key PEPPOL',
            'content': b64encode(file_open('account_peppol/tests/assets/private_key.pem', 'rb').read()),
        })

        cls.env.company.write({
            'peppol_eas': '0208',
            'peppol_endpoint': '0239843188',
            'account_peppol_phone_number': '+32483123456',
            'account_peppol_contact_email': 'yourcompany@test.example.com',
        })

    def test_ignore_archived_edi_users(self):
        wizard = self.env['peppol.registration'].create({})
        with self._mock_requests([
            self._mock_create_user(),
            self._mock_lookup_participant(),
            self._mock_register_sender(),
        ]):
            wizard.button_peppol_sender_registration()
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0

        self.env['account_edi_proxy_client.user'].create([{
            'active': False,
            'id_client': f'client-demo',
            'company_id': self.env.company.id,
            'edi_identification': f'client-demo',
            'private_key_id': self.env['certificate.key'].sudo()._generate_rsa_private_key(self.env.company).id,
            'refresh_token': False,
            'proxy_type': 'peppol',
            'edi_mode': 'demo',
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        self.env.company.with_context(active_test=False).partner_id.button_account_peppol_check_partner_endpoint()

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
        with self._mock_requests([
            self._mock_lookup_participant(),
        ]):
            self.env.company.with_context(active_test=False).partner_id.button_account_peppol_check_partner_endpoint()

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
    def test_create_participant_missing_data(self):
        # creating a participant without eas/endpoint/document should not be possible
        wizard = self.env['peppol.registration'].create({
            'peppol_eas': False,
            'peppol_endpoint': False,
        })
        with self.assertRaises(ValidationError), self.cr.savepoint():
            wizard.button_peppol_sender_registration()

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    def test_create_participant_already_exists(self):
        # creating a receiver participant that already exists on Peppol network should not be possible
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        vals = self._get_participant_vals()
        vals['peppol_eas'] = '0208'
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
=======
        vals = {**self._get_participant_vals(), 'peppol_eas': '0208', 'peppol_endpoint': '0239843188'}
>>>>>>> upstream/18.0
        wizard = self.env['peppol.registration'].create(vals)
        self.assertFalse(wizard.smp_registration)
        wizard.button_register_peppol_participant()

    def test_create_success_sender(self):
        # should be possible to apply with all data
        # the account_peppol_proxy_state should correctly change to sender
        # then the account_peppol_proxy_state should not change
        # after running the cron checking participant status
        company = self.env.company
        wizard = self.env['peppol.registration'].create({'smp_registration': False, **self._get_participant_vals()})
        wizard.button_peppol_sender_registration()
        # since we did not select receiver registration, we're now just a sender
        self.assertEqual(company.account_peppol_proxy_state, 'sender')
        # running the cron should not do anything for the company
        with self._set_context({'participant_state': 'sender'}):
            self.env['account_edi_proxy_client.user']._cron_peppol_get_participant_status()
        self.assertEqual(company.account_peppol_proxy_state, 'sender')

    def test_create_success_receiver(self):
        # should be possible to apply with all data
        # the account_peppol_proxy_state should correctly change to smp_registration
        # then the account_peppol_proxy_state should change successfully
        # after checking participant status
        company = self.env.company
        wizard = self.env['peppol.registration'].create(self._get_participant_vals())
        wizard.smp_registration = True  # choose to register as a receiver right away
        wizard.button_peppol_sender_registration()
        self.assertEqual(company.account_peppol_proxy_state, 'smp_registration')
        with self._set_context({'participant_state': 'receiver'}):
            self.env['account_edi_proxy_client.user']._cron_peppol_get_participant_status()
        self.assertEqual(company.account_peppol_proxy_state, 'receiver')

    def test_create_success_receiver_two_steps(self):
        # it should be possible to first register as a sender in the wizard
        # and then come back to settings and register as a receiver
        # first step: use the peppol wizard to register only as a sender
        company = self.env.company
        wizard = self.env['peppol.registration'].create({'smp_registration': False, **self._get_participant_vals()})
        wizard.button_peppol_sender_registration()
        wizard.verification_code = '123456'
        wizard.button_check_peppol_verification_code()
        self.assertEqual(company.account_peppol_proxy_state, 'sender')
        # second step: open settings and register as a receiver
        settings = self.env['res.config.settings'].create({})
        settings.button_peppol_smp_registration()
        self.assertEqual(company.account_peppol_proxy_state, 'smp_registration')
        self.env['account_edi_proxy_client.user']._cron_peppol_get_participant_status()
        self.assertEqual(company.account_peppol_proxy_state, 'receiver')

    def test_create_reject_participant(self):
        # the account_peppol_proxy_state should change to rejected
        # if we reject the participant
        company = self.env.company
        wizard = self.env['peppol.registration'].create(self._get_participant_vals())

        with self._set_context({'participant_state': 'rejected'}):
            wizard.button_peppol_sender_registration()
            company.account_peppol_proxy_state = 'smp_registration'
            self.env['account_edi_proxy_client.user']._cron_peppol_get_participant_status()
            self.assertEqual(company.account_peppol_proxy_state, 'rejected')

    @mute_logger('odoo.sql_db')
    def test_create_duplicate_participant(self):
        # should not be possible to create a duplicate participant
        wizard = self.env['peppol.registration'].create(self._get_participant_vals())
        wizard.button_peppol_sender_registration()
        with self.assertRaises(IntegrityError), self.cr.savepoint():
            wizard.account_peppol_proxy_state = 'not_registered'
            wizard.button_peppol_sender_registration()

    def test_save_migration_key(self):
        # migration key should be saved
        wizard = self.env['peppol.registration']\
            .create({
                **self._get_participant_vals(),
                'smp_registration': True,
                'account_peppol_migration_key': 'helloo',
            })

        with self._set_context({'migrate_to': True}):
            self.assertEqual(self.env.company.account_peppol_migration_key, 'helloo')
            wizard.button_peppol_sender_registration()
            wizard.verification_code = '123456'
            wizard.button_check_peppol_verification_code()
            self.assertEqual(self.env.company.account_peppol_proxy_state, 'smp_registration')
            self.assertFalse(self.env.company.account_peppol_migration_key)  # the key should be reset once we've used it
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
    def test_register_participant_for_the_first_time_as_sender_then_receiver_then_unregister(self):
        # not_register -> sender
        with self._mock_requests([
            self._mock_create_user(),
            self._mock_lookup_participant(already_exist=True),
            self._mock_register_sender(),
        ]):
            wizard = self.env['peppol.registration'].create({})
            self.assertRecordValues(wizard, [{'smp_registration': False}])
            wizard.button_register_peppol_participant()
        self.assertRecordValues(self.env.company, [{'account_peppol_proxy_state': 'sender'}])

        # sender -> smp_registration.
        settings = self.env['res.config.settings'].create({})
        with self._mock_requests([
            self._mock_lookup_participant(),
            self._mock_register_sender_as_receiver(),
        ]):
            settings.button_peppol_smp_registration()
        self.assertRecordValues(self.env.company, [{'account_peppol_proxy_state': 'smp_registration'}])

        # smp_registration -> receiver.
        with self._mock_requests([self._mock_participant_status('receiver')]):
            self.env.company.account_edi_proxy_client_ids._peppol_get_participant_status()
        self.assertRecordValues(self.env.company, [{'account_peppol_proxy_state': 'receiver'}])

        # receiver -> not_registered.
        with self._mock_requests([
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('receiver'),
>>>>>>> upstream/18.0
            self._mock_get_all_documents(),
            self._mock_cancel_peppol_registration(),
        ]):
            wizard = self.env['peppol.registration'].create({})
            wizard.button_deregister_peppol_participant()
        self.assertRecordValues(self.env.company, [{'account_peppol_proxy_state': 'not_registered'}])

    def test_register_participant_already_exists_on_peppol_as_receiver(self):
        # not_register -> smp_registration
        with self._mock_requests([
            self._mock_create_user(),
            self._mock_lookup_participant(),
            self._mock_register_sender(),
        ]):
            wizard = self.env['peppol.registration'].create({})
            self.assertRecordValues(wizard, [{'smp_registration': True}])
            wizard.button_register_peppol_participant()
        self.assertRecordValues(self.env.company, [{'account_peppol_proxy_state': 'smp_registration'}])

        # smp_registration -> receiver
        with self._mock_requests([self._mock_participant_status('receiver')]):
            self.env.company.account_edi_proxy_client_ids._peppol_get_participant_status()
        self.assertRecordValues(self.env.company, [{'account_peppol_proxy_state': 'receiver'}])

    def test_register_participant_rejected(self):
        # not_register -> smp_registration
        with self._mock_requests([
            self._mock_create_user(),
            self._mock_lookup_participant(),
            self._mock_register_sender(),
        ]):
            wizard = self.env['peppol.registration'].create({})
            self.assertRecordValues(wizard, [{'smp_registration': True}])
            wizard.button_register_peppol_participant()
        self.assertRecordValues(self.env.company, [{'account_peppol_proxy_state': 'smp_registration'}])

        # smp_registration -> rejected
        with self._mock_requests([self._mock_participant_status('rejected')]):
            self.env.company.account_edi_proxy_client_ids._peppol_get_participant_status()
        self.assertRecordValues(self.env.company, [{'account_peppol_proxy_state': 'rejected'}])

    def test_save_migration_key(self):
        """ Ensure the migration_key is remove from the company after we've used it. """
        with self._mock_requests([
            self._mock_create_user(),
            self._mock_register_sender(),
        ]):
            wizard = self.env['peppol.registration'].create({
                'account_peppol_migration_key': 'helloo',
            })
            wizard.button_register_peppol_participant()
            self.assertRecordValues(self.env.company, [{
                'account_peppol_proxy_state': 'smp_registration',
                'account_peppol_migration_key': False,
            }])

    def test_peppol_registration_register_as_self(self):
        self.env.company.write({'child_ids': [Command.create({'name': 'Branch A'})]})
        branch = self.env.company.child_ids

        settings = self.env['res.config.settings'].with_context(allowed_company_ids=branch.ids).create({})
        self.assertRecordValues(settings, [{
            'account_peppol_proxy_state': 'not_registered',
            'peppol_use_parent_company': False,
        }])

        wizard = self.env['peppol.registration'].with_context(allowed_company_ids=branch.ids).create({})
        self.assertRecordValues(wizard, [{
            'company_id': branch.id,
            'parent_company_id': self.env.company.id,
            'selected_company_id': branch.id,
            'use_parent_connection_selection': 'use_self',
        }])

        # You must not use the same EAS/ENDPOINT than the parent company!
        wizard.write({
            'contact_email': "turlututu@tsointsoin",
            'phone_number': "+3236656565",
            'peppol_eas': '0208',
            'peppol_endpoint': '0477472701',
        })
        with self._mock_requests([
            self._mock_create_user(),
            self._mock_lookup_participant(already_exist=True),
            self._mock_register_sender(),
        ]):
            wizard.button_register_peppol_participant()

        self.assertRecordValues(branch, [{
            'peppol_parent_company_id': False,
            'peppol_eas': '0208',
            'peppol_endpoint': '0477472701',
            'account_peppol_contact_email': "turlututu@tsointsoin",
            'account_peppol_phone_number': "+3236656565",
        }])

        settings = self.env['res.config.settings'].with_context(allowed_company_ids=branch.ids).create({})
        self.assertRecordValues(settings, [{
            'account_peppol_proxy_state': 'sender',
            'peppol_use_parent_company': False,
        }])

        # Disconnect from the network.
        with self._mock_requests([
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
            self._mock_cancel_peppol_registration(),
        ]):
            settings.button_deregister_peppol_participant()
        self.assertRecordValues(settings, [{
            'account_peppol_proxy_state': 'not_registered',
            'peppol_use_parent_company': False,
        }])

        # Back to the initial state.
        wizard = self.env['peppol.registration'].with_context(allowed_company_ids=(branch + self.env.company).ids).create({})
        self.assertRecordValues(wizard, [{
            'company_id': branch.id,
            'parent_company_id': self.env.company.id,
            'selected_company_id': branch.id,
            'use_parent_connection_selection': 'use_self',
        }])

    def test_peppol_registration_register_as_parent(self):
        self.env.company.write({'child_ids': [Command.create({'name': 'Branch A'})]})
        branch = self.env.company.child_ids

        settings = self.env['res.config.settings'].with_context(allowed_company_ids=branch.ids).create({})
        self.assertRecordValues(settings, [{
            'account_peppol_proxy_state': 'not_registered',
            'peppol_use_parent_company': False,
        }])

        # Check the initial state of the wizard for the branch.
        wizard = self.env['peppol.registration'].with_context(allowed_company_ids=(branch + self.env.company).ids).create({})
        self.assertRecordValues(wizard, [{
            'company_id': branch.id,
            'parent_company_id': self.env.company.id,
            'selected_company_id': branch.id,
            'use_parent_connection_selection': 'use_self',
            'peppol_eas': False,
            'peppol_endpoint': False,
            'phone_number': False,
            'contact_email': False,
        }])

        # Register the parent company.
        wizard = self.env['peppol.registration'].with_context(allowed_company_ids=self.env.company.ids).create({})
        self.assertRecordValues(wizard, [{
            'company_id': self.env.company.id,
            'parent_company_id': self.env.company.id,
            'selected_company_id': self.env.company.id,
            'use_parent_connection_selection': 'use_self',
        }])
        with self._mock_requests([
            self._mock_create_user(),
            self._mock_lookup_participant(already_exist=True),
            self._mock_register_sender(),
        ]):
            wizard.button_register_peppol_participant()

        settings = self.env['res.config.settings'].with_context(allowed_company_ids=self.env.company.ids).create({})
        self.assertRecordValues(settings, [{
            'account_peppol_proxy_state': 'sender',
            'peppol_use_parent_company': False,
        }])

        # Back to the branch.
        wizard = self.env['peppol.registration'].with_context(allowed_company_ids=branch.ids).create({})
        self.assertRecordValues(wizard, [{
            'company_id': branch.id,
            'parent_company_id': self.env.company.id,
            'selected_company_id': branch.id,
            'use_parent_connection_selection': 'use_self',
        }])
        wizard.write({
            'contact_email': "turlututu@tsointsoin",
            'phone_number': "+3236656565",
            'peppol_eas': '0208',
            'peppol_endpoint': '0239843188',
        })
        self.assertRecordValues(wizard, [{
            'company_id': branch.id,
            'parent_company_id': self.env.company.id,
            'selected_company_id': self.env.company.id,
            'use_parent_connection_selection': 'use_parent',
        }])
        with self._mock_requests([
            self._mock_create_user(),
            self._mock_lookup_participant(already_exist=True),
            self._mock_register_sender(),
        ]):
            wizard.button_register_peppol_participant()
        self.assertRecordValues(branch, [{
            'peppol_parent_company_id': self.env.company.id,
            'peppol_eas': '0208',
            'peppol_endpoint': '0239843188',
        }])

        settings = self.env['res.config.settings'].with_context(allowed_company_ids=branch.ids).create({})
        self.assertRecordValues(settings, [{
            'account_peppol_proxy_state': 'sender',
            'peppol_use_parent_company': True,
        }])

        # Disconnect from the network.
        with self._mock_requests([
            self._mock_cancel_peppol_registration(),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
=======
            self._mock_participant_status('sender'),
>>>>>>> upstream/18.0
        ]):
            settings.button_deregister_peppol_participant()
        self.assertRecordValues(settings, [{
            'account_peppol_proxy_state': 'not_registered',
            'peppol_use_parent_company': False,
        }])

        # Back to the initial state.
        wizard = self.env['peppol.registration'].with_context(allowed_company_ids=branch.ids).create({})
        self.assertRecordValues(wizard, [{
            'company_id': branch.id,
            'parent_company_id': self.env.company.id,
            'selected_company_id': branch.id,
            'use_parent_connection_selection': 'use_self',
            'peppol_eas': False,
            'peppol_endpoint': False,
            'phone_number': False,
            'contact_email': False,
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0

    def test_deregister_with_client_gone_error(self):
        """Test deregistration succeeds even when proxy returns client_gone error"""
        with self._mock_requests([
            self._mock_create_user(),
            self._mock_lookup_participant(),
            self._mock_register_sender(),
        ]):
            wizard = self.env['peppol.registration'].create({})
            self.assertRecordValues(wizard, [{'smp_registration': True}])
            wizard.button_register_peppol_participant()
        with self._mock_requests([self._mock_participant_status('sender')]):
            self.env.company.account_edi_proxy_client_ids._peppol_get_participant_status()
        self.assertEqual(self.env.company.account_peppol_proxy_state, 'sender')

        settings = self.env['res.config.settings'].create({})
        with self._mock_requests([
            self._mock_participant_status('sender', exists=False)
        ]):
            settings.button_deregister_peppol_participant()

        # Should successfully deregister despite Exception
        self.assertEqual(self.env.company.account_peppol_proxy_state, 'not_registered')
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0

    def test_peppol_commercial_entity(self):
        receivable = self.env["account.account"].create({
            "account_type": "income",
            "name": "test_receiv",
            "code": "TESTR"
        })
        payable = self.env["account.account"].create({
            "account_type": "expense",
            "name": "test_pay",
            "code": "TESTP"
        })
        company_peppol = self.env["res.company"].create({
            "name": "test_be",
            "country_id": self.env.ref("base.be").id,
        })
        partner_view = self.env.ref("base.view_partner_form")
        self.env["ir.ui.view"].create({
            "name": "test_inherit",
            "inherit_id": partner_view.id,
            "model": "res.partner",
            "type": "form",
            "arch": """<xpath expr="//field" position="after">
                    <field name="commercial_partner_id" />
                </xpath>"""
        })
        env_partner = (self.env["res.partner"]
            .with_company(company_peppol)
            .with_context(
                default_property_account_receivable_id=receivable.id,
                default_property_account_payable_id=payable.id
            ))
        with Form(env_partner, view=partner_view) as partner_form:
            self.assertEqual(partner_form.peppol_verification_state, "not_verified")
            partner_form.name = "test"
            partner_form.vat = "BE0477472701"
            partner_form.peppol_eas = "odemo"
            self.assertFalse(partner_form.commercial_partner_id)
            p_rec = partner_form.save()
            self.assertEqual(partner_form.peppol_verification_state, "not_valid")
            self.assertEqual(p_rec.commercial_partner_id, p_rec)
            self.assertEqual(p_rec.commercial_partner_id.name, "test")
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0

    def test_do_not_reset_peppol_endpoint(self):
        be_country = self.env.ref('base.be')
        self.env.company.write({
            'country_id': be_country.id,
            'vat': 'BE0477472701',
        })
        with self._mock_requests([
            self._mock_create_user(),
            self._mock_lookup_participant(),
            self._mock_register_sender(),
        ]):
            wizard = self.env['peppol.registration'].create({
                'peppol_eas': '0088',
                'peppol_endpoint': '88888888888',
                'phone_number': '+32483123456',
                'contact_email': 'yourcompany@test.example.com',
            })
            wizard.button_register_peppol_participant()
        with self._mock_requests([self._mock_participant_status('sender')]):
            self.env.company.account_edi_proxy_client_ids._peppol_get_participant_status()
        self.env.company.vat = 'BE0475646428'
        self.assertRecordValues(self.env.company.partner_id, [{
            'peppol_eas': '0088',
            'peppol_endpoint': '88888888888',
        }])

        with Form(self.env.company.partner_id) as partner:
            # Test with NewID record
            partner.vat = 'BE0477472701'
        self.assertRecordValues(self.env.company.partner_id, [{
            'peppol_eas': '0088',
            'peppol_endpoint': '88888888888',
        }])

        company_partner = self.env.company.partner_id

        other_company = self.env['res.company'].create({'name': 'new company 3', 'country_id': be_country.id})
        self.env = self.env(context=dict(allowed_company_ids=other_company.ids))
        # Do not raise even if no access to a registered company

        company_partner.vat = 'BE0477472701'
        self.assertRecordValues(company_partner, [{
            'peppol_eas': '0088',
            'peppol_endpoint': '88888888888',
        }])

        self.env.company.vat = 'BE0475646428'
        self.assertRecordValues(self.env.company.partner_id, [{
            'peppol_eas': '0208',
            'peppol_endpoint': '0475646428',
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
