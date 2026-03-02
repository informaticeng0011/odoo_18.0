<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
from odoo import http
from odoo.http import request
=======
from odoo import http, _
from odoo.http import request
from odoo.exceptions import UserError
>>>>>>> upstream/18.0
=======
from odoo import http, _
from odoo.http import request
from odoo.exceptions import UserError
>>>>>>> upstream/18.0
=======
from odoo import http, _
from odoo.http import request
from odoo.exceptions import UserError
>>>>>>> upstream/18.0
=======
from odoo import http, _
from odoo.http import request
from odoo.exceptions import UserError
>>>>>>> upstream/18.0
=======
from odoo import http, _
from odoo.http import request
from odoo.exceptions import UserError
>>>>>>> upstream/18.0
=======
from odoo import http, _
from odoo.http import request
from odoo.exceptions import UserError
>>>>>>> upstream/18.0
=======
from odoo import http, _
from odoo.http import request
from odoo.exceptions import UserError
>>>>>>> upstream/18.0
=======
from odoo import http, _
from odoo.http import request
from odoo.exceptions import UserError
>>>>>>> upstream/18.0
=======
from odoo import http, _
from odoo.http import request
from odoo.exceptions import UserError
>>>>>>> upstream/18.0
=======
from odoo import http, _
from odoo.http import request
from odoo.exceptions import UserError
>>>>>>> upstream/18.0
=======
from odoo import http, _
from odoo.http import request
from odoo.exceptions import UserError
>>>>>>> upstream/18.0
=======
from odoo import http, _
from odoo.http import request
from odoo.exceptions import UserError
>>>>>>> upstream/18.0
=======
from odoo import http, _
from odoo.http import request
from odoo.exceptions import UserError
>>>>>>> upstream/18.0
=======
from odoo import http, _
from odoo.http import request
from odoo.exceptions import UserError
>>>>>>> upstream/18.0
=======
from odoo import http, _
from odoo.http import request
from odoo.exceptions import UserError
>>>>>>> upstream/18.0
=======
from odoo import http, _
from odoo.http import request
from odoo.exceptions import UserError
>>>>>>> upstream/18.0
=======
from odoo import http, _
from odoo.http import request
from odoo.exceptions import UserError
>>>>>>> upstream/18.0
=======
from odoo import http, _
from odoo.http import request
from odoo.exceptions import UserError
>>>>>>> upstream/18.0
=======
from odoo import http, _
from odoo.http import request
from odoo.exceptions import UserError
>>>>>>> upstream/18.0
=======
from odoo import http, _
from odoo.http import request
from odoo.exceptions import UserError
>>>>>>> upstream/18.0
=======
from odoo import http, _
from odoo.http import request
from odoo.exceptions import UserError
>>>>>>> upstream/18.0
=======
from odoo import http, _
from odoo.http import request
from odoo.exceptions import UserError
>>>>>>> upstream/18.0
=======
from odoo import http, _
from odoo.http import request
from odoo.exceptions import UserError
>>>>>>> upstream/18.0
=======
from odoo import http, _
from odoo.http import request
from odoo.exceptions import UserError
>>>>>>> upstream/18.0
=======
from odoo import http, _
from odoo.http import request
from odoo.exceptions import UserError
>>>>>>> upstream/18.0
=======
from odoo import http, _
from odoo.http import request
from odoo.exceptions import UserError
>>>>>>> upstream/18.0
=======
from odoo import http, _
from odoo.http import request
from odoo.exceptions import UserError
>>>>>>> upstream/18.0
=======
from odoo import http, _
from odoo.http import request
from odoo.exceptions import UserError
>>>>>>> upstream/18.0

class DashboardShareRoute(http.Controller):
    @http.route(['/dashboard/share/<int:share_id>/<token>'], type='http', auth='public')
    def share_portal(self, share_id=None, token=None):
        share = request.env["spreadsheet.dashboard.share"].sudo().browse(share_id).exists()
        if not share:
            raise request.not_found()
        share._check_dashboard_access(token)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        download_url = ""
        if request.env.user.has_group('base.group_allow_export'):
            download_url = f"/dashboard/download/{share.id}/{token}"
>>>>>>> upstream/18.0
=======
        download_url = ""
        if request.env.user.has_group('base.group_allow_export'):
            download_url = f"/dashboard/download/{share.id}/{token}"
>>>>>>> upstream/18.0
=======
        download_url = ""
        if request.env.user.has_group('base.group_allow_export'):
            download_url = f"/dashboard/download/{share.id}/{token}"
>>>>>>> upstream/18.0
=======
        download_url = ""
        if request.env.user.has_group('base.group_allow_export'):
            download_url = f"/dashboard/download/{share.id}/{token}"
>>>>>>> upstream/18.0
=======
        download_url = ""
        if request.env.user.has_group('base.group_allow_export'):
            download_url = f"/dashboard/download/{share.id}/{token}"
>>>>>>> upstream/18.0
=======
        download_url = ""
        if request.env.user.has_group('base.group_allow_export'):
            download_url = f"/dashboard/download/{share.id}/{token}"
>>>>>>> upstream/18.0
=======
        download_url = ""
        if request.env.user.has_group('base.group_allow_export'):
            download_url = f"/dashboard/download/{share.id}/{token}"
>>>>>>> upstream/18.0
=======
        download_url = ""
        if request.env.user.has_group('base.group_allow_export'):
            download_url = f"/dashboard/download/{share.id}/{token}"
>>>>>>> upstream/18.0
=======
        download_url = ""
        if request.env.user.has_group('base.group_allow_export'):
            download_url = f"/dashboard/download/{share.id}/{token}"
>>>>>>> upstream/18.0
=======
        download_url = ""
        if request.env.user.has_group('base.group_allow_export'):
            download_url = f"/dashboard/download/{share.id}/{token}"
>>>>>>> upstream/18.0
=======
        download_url = ""
        if request.env.user.has_group('base.group_allow_export'):
            download_url = f"/dashboard/download/{share.id}/{token}"
>>>>>>> upstream/18.0
=======
        download_url = ""
        if request.env.user.has_group('base.group_allow_export'):
            download_url = f"/dashboard/download/{share.id}/{token}"
>>>>>>> upstream/18.0
=======
        download_url = ""
        if request.env.user.has_group('base.group_allow_export'):
            download_url = f"/dashboard/download/{share.id}/{token}"
>>>>>>> upstream/18.0
=======
        download_url = ""
        if request.env.user.has_group('base.group_allow_export'):
            download_url = f"/dashboard/download/{share.id}/{token}"
>>>>>>> upstream/18.0
=======
        download_url = ""
        if request.env.user.has_group('base.group_allow_export'):
            download_url = f"/dashboard/download/{share.id}/{token}"
>>>>>>> upstream/18.0
=======
        download_url = ""
        if request.env.user.has_group('base.group_allow_export'):
            download_url = f"/dashboard/download/{share.id}/{token}"
>>>>>>> upstream/18.0
=======
        download_url = ""
        if request.env.user.has_group('base.group_allow_export'):
            download_url = f"/dashboard/download/{share.id}/{token}"
>>>>>>> upstream/18.0
=======
        download_url = ""
        if request.env.user.has_group('base.group_allow_export'):
            download_url = f"/dashboard/download/{share.id}/{token}"
>>>>>>> upstream/18.0
=======
        download_url = ""
        if request.env.user.has_group('base.group_allow_export'):
            download_url = f"/dashboard/download/{share.id}/{token}"
>>>>>>> upstream/18.0
=======
        download_url = ""
        if request.env.user.has_group('base.group_allow_export'):
            download_url = f"/dashboard/download/{share.id}/{token}"
>>>>>>> upstream/18.0
=======
        download_url = ""
        if request.env.user.has_group('base.group_allow_export'):
            download_url = f"/dashboard/download/{share.id}/{token}"
>>>>>>> upstream/18.0
=======
        download_url = ""
        if request.env.user.has_group('base.group_allow_export'):
            download_url = f"/dashboard/download/{share.id}/{token}"
>>>>>>> upstream/18.0
=======
        download_url = ""
        if request.env.user.has_group('base.group_allow_export'):
            download_url = f"/dashboard/download/{share.id}/{token}"
>>>>>>> upstream/18.0
=======
        download_url = ""
        if request.env.user.has_group('base.group_allow_export'):
            download_url = f"/dashboard/download/{share.id}/{token}"
>>>>>>> upstream/18.0
=======
        download_url = ""
        if request.env.user.has_group('base.group_allow_export'):
            download_url = f"/dashboard/download/{share.id}/{token}"
>>>>>>> upstream/18.0
=======
        download_url = ""
        if request.env.user.has_group('base.group_allow_export'):
            download_url = f"/dashboard/download/{share.id}/{token}"
>>>>>>> upstream/18.0
=======
        download_url = ""
        if request.env.user.has_group('base.group_allow_export'):
            download_url = f"/dashboard/download/{share.id}/{token}"
>>>>>>> upstream/18.0
=======
        download_url = ""
        if request.env.user.has_group('base.group_allow_export'):
            download_url = f"/dashboard/download/{share.id}/{token}"
>>>>>>> upstream/18.0
        return request.render(
            "spreadsheet.public_spreadsheet_layout",
            {
                "spreadsheet_name": share.dashboard_id.name,
                "share": share,
                "is_frozen": True,
                "session_info": request.env["ir.http"].session_info(),
                "props": {
                    "dataUrl": f"/dashboard/data/{share.id}/{token}",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                    "downloadExcelUrl": f"/dashboard/download/{share.id}/{token}",
=======
                    "downloadExcelUrl": download_url,
>>>>>>> upstream/18.0
=======
                    "downloadExcelUrl": download_url,
>>>>>>> upstream/18.0
=======
                    "downloadExcelUrl": download_url,
>>>>>>> upstream/18.0
=======
                    "downloadExcelUrl": download_url,
>>>>>>> upstream/18.0
=======
                    "downloadExcelUrl": download_url,
>>>>>>> upstream/18.0
=======
                    "downloadExcelUrl": download_url,
>>>>>>> upstream/18.0
=======
                    "downloadExcelUrl": download_url,
>>>>>>> upstream/18.0
=======
                    "downloadExcelUrl": download_url,
>>>>>>> upstream/18.0
=======
                    "downloadExcelUrl": download_url,
>>>>>>> upstream/18.0
=======
                    "downloadExcelUrl": download_url,
>>>>>>> upstream/18.0
=======
                    "downloadExcelUrl": download_url,
>>>>>>> upstream/18.0
=======
                    "downloadExcelUrl": download_url,
>>>>>>> upstream/18.0
=======
                    "downloadExcelUrl": download_url,
>>>>>>> upstream/18.0
=======
                    "downloadExcelUrl": download_url,
>>>>>>> upstream/18.0
=======
                    "downloadExcelUrl": download_url,
>>>>>>> upstream/18.0
=======
                    "downloadExcelUrl": download_url,
>>>>>>> upstream/18.0
=======
                    "downloadExcelUrl": download_url,
>>>>>>> upstream/18.0
=======
                    "downloadExcelUrl": download_url,
>>>>>>> upstream/18.0
=======
                    "downloadExcelUrl": download_url,
>>>>>>> upstream/18.0
=======
                    "downloadExcelUrl": download_url,
>>>>>>> upstream/18.0
=======
                    "downloadExcelUrl": download_url,
>>>>>>> upstream/18.0
=======
                    "downloadExcelUrl": download_url,
>>>>>>> upstream/18.0
=======
                    "downloadExcelUrl": download_url,
>>>>>>> upstream/18.0
=======
                    "downloadExcelUrl": download_url,
>>>>>>> upstream/18.0
=======
                    "downloadExcelUrl": download_url,
>>>>>>> upstream/18.0
=======
                    "downloadExcelUrl": download_url,
>>>>>>> upstream/18.0
=======
                    "downloadExcelUrl": download_url,
>>>>>>> upstream/18.0
=======
                    "downloadExcelUrl": download_url,
>>>>>>> upstream/18.0
                    "mode": "dashboard",
                },
            },
        )

    @http.route(["/dashboard/download/<int:share_id>/<token>"],
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                type='http', auth='public')
    def download(self, token=None, share_id=None):
        share = request.env["spreadsheet.dashboard.share"].sudo().browse(share_id)
        share._check_dashboard_access(token)
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
                type='http', auth='user')
    def download(self, token=None, share_id=None):
        share = request.env["spreadsheet.dashboard.share"].sudo().browse(share_id)
        share._check_dashboard_access(token)
        if not request.env.user.has_group('base.group_allow_export'):
            raise UserError(_("You don't have the rights to export data. Please contact an Administrator."))
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        stream = request.env["ir.binary"]._get_stream_from(
            share, "excel_export", filename=share.name
        )
        return stream.get_response()

    @http.route(
        ["/dashboard/data/<int:share_id>/<token>"],
        type="http",
        auth="public",
        methods=["GET"],
    )
    def get_shared_dashboard_data(self, share_id, token):
        share = (
            request.env["spreadsheet.dashboard.share"]
            .sudo()
            .browse(share_id)
            .exists()
        )
        if not share:
            raise request.not_found()

        share._check_dashboard_access(token)
        stream = request.env["ir.binary"]._get_stream_from(
            share, "spreadsheet_binary_data"
        )
        return stream.get_response()
