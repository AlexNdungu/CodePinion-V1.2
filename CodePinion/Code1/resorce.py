from PyQt5.QtWidgets import QFileDialog, QApplication, QSystemTrayIcon
from PyQt5.QtGui import QIcon
import sys

#Toggle Windows Conversation Box ro select path
def toggleWindow():

    app = QApplication(sys.argv)

    directory = QFileDialog.getExistingDirectory(None, "Select Directory")

    return directory