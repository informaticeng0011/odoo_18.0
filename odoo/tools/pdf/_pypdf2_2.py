from PyPDF2 import errors, filters, generic, PdfReader, PdfWriter as _Writer
from PyPDF2.generic import create_string_object
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
from PyPDF2 import __version__  # noqa: F401
>>>>>>> upstream/18.0
=======
from PyPDF2 import __version__  # noqa: F401
>>>>>>> upstream/18.0
=======
from PyPDF2 import __version__  # noqa: F401
>>>>>>> upstream/18.0
=======
from PyPDF2 import __version__  # noqa: F401
>>>>>>> upstream/18.0
=======
from PyPDF2 import __version__  # noqa: F401
>>>>>>> upstream/18.0
=======
from PyPDF2 import __version__  # noqa: F401
>>>>>>> upstream/18.0
=======
from PyPDF2 import __version__  # noqa: F401
>>>>>>> upstream/18.0
=======
from PyPDF2 import __version__  # noqa: F401
>>>>>>> upstream/18.0
=======
from PyPDF2 import __version__  # noqa: F401
>>>>>>> upstream/18.0
=======
from PyPDF2 import __version__  # noqa: F401
>>>>>>> upstream/18.0
=======
from PyPDF2 import __version__  # noqa: F401
>>>>>>> upstream/18.0
=======
from PyPDF2 import __version__  # noqa: F401
>>>>>>> upstream/18.0
=======
from PyPDF2 import __version__  # noqa: F401
>>>>>>> upstream/18.0
=======
from PyPDF2 import __version__  # noqa: F401
>>>>>>> upstream/18.0
=======
from PyPDF2 import __version__  # noqa: F401
>>>>>>> upstream/18.0
=======
from PyPDF2 import __version__  # noqa: F401
>>>>>>> upstream/18.0
=======
from PyPDF2 import __version__  # noqa: F401
>>>>>>> upstream/18.0
=======
from PyPDF2 import __version__  # noqa: F401
>>>>>>> upstream/18.0
=======
from PyPDF2 import __version__  # noqa: F401
>>>>>>> upstream/18.0
=======
from PyPDF2 import __version__  # noqa: F401
>>>>>>> upstream/18.0
=======
from PyPDF2 import __version__  # noqa: F401
>>>>>>> upstream/18.0
=======
from PyPDF2 import __version__  # noqa: F401
>>>>>>> upstream/18.0
=======
from PyPDF2 import __version__  # noqa: F401
>>>>>>> upstream/18.0
=======
from PyPDF2 import __version__  # noqa: F401
>>>>>>> upstream/18.0
=======
from PyPDF2 import __version__  # noqa: F401
>>>>>>> upstream/18.0
=======
from PyPDF2 import __version__  # noqa: F401
>>>>>>> upstream/18.0
=======
from PyPDF2 import __version__  # noqa: F401
>>>>>>> upstream/18.0
=======
from PyPDF2 import __version__  # noqa: F401
>>>>>>> upstream/18.0
=======
from PyPDF2 import __version__  # noqa: F401
>>>>>>> upstream/18.0

__all__ = [
    "PdfReader",
    "PdfWriter",
    "create_string_object",
    "errors",
    "filters",
    "generic",
]


class PdfWriter(_Writer):
    def getFields(self, *args, **kwargs):
        return self.get_fields(*args, **kwargs)

    def _addObject(self, *args, **kwargs):
        return self._add_object(*args, **kwargs)
