# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

import re
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

from odoo import models
from odoo.exceptions import AccessDenied
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0
=======
from odoo import models
from odoo.exceptions import AccessDenied, AccessError
>>>>>>> upstream/18.0


class IrWebsocket(models.AbstractModel):
    _inherit = 'ir.websocket'

    def _build_bus_channel_list(self, channels):
        if self.env.uid:
            # Do not alter original list.
            channels = list(channels)
            for channel in channels:
                if isinstance(channel, str):
                    match = re.match(r'editor_collaboration:(\w+(?:\.\w+)*):(\w+):(\d+)', channel)
                    if match:
                        model_name = match[1]
                        field_name = match[2]
                        res_id = int(match[3])

                        # Verify access to the edition channel.
                        if self.env.user._is_public():
                            raise AccessDenied()

                        document = self.env[model_name].browse([res_id])
                        if not document.exists():
                            continue

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                        document.check_access('read')
                        document.check_field_access_rights('read', [field_name])
                        document.check_access('write')
                        document.check_field_access_rights('write', [field_name])
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
                        try:
                            document.check_access('read')
                            document.check_field_access_rights('read', [field_name])
                            document.check_access('write')
                            document.check_field_access_rights('write', [field_name])
                        except AccessError:
                            continue
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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

                        channels.append((self.env.registry.db_name, 'editor_collaboration', model_name, field_name, res_id))
        return super()._build_bus_channel_list(channels)
