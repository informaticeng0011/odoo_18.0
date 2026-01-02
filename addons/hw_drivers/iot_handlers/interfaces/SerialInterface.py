# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

import platform
from serial.tools.list_ports import comports

from odoo.addons.hw_drivers.interface import Interface


class SerialInterface(Interface):
    connection_type = 'serial'

    def get_devices(self):
        serial_devices = {
            port.device: {'identifier': port.device}
            for port in comports()
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            if platform.system() == 'Windows' or port.subsystem != 'amba'
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
=======
            if platform.system() == 'Windows' or port.device != '/dev/ttyAMA10'
>>>>>>> upstream/18.0
            # RPI 5 uses ttyAMA10 as a console serial port for system messages: odoo interprets it as scale -> avoid it
        }
        return serial_devices
