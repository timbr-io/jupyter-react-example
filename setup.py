from setuptools import setup
from setuptools.command.develop import develop as _develop
from notebook.nbextensions import install_nbextension
from notebook.services.config import ConfigManager
import os

extension_dir = os.path.join(os.path.dirname(__file__), "example", "static")

class develop(_develop):
    def run(self):
        _develop.run(self)
        install_nbextension(extension_dir, symlink=True,
                            overwrite=True, user=False, destination="example")
        cm = ConfigManager()
        cm.update('notebook', {"load_extensions": {"example/index": True } })

setup(name='example',
      cmdclass={'develop': develop},
      version='0.2.2',
      description='An example wrapper around react components for use in jupyter notebooks',
      url='https://github.com/timbr-io/jupyter-react-example',
      author='Chris Helm',
      author_email='chelm@timbr.io',
      license='MIT',
      packages=['example'],
      zip_safe=False,
      data_files=[
        ('share/jupyter/nbextensions/example', [
            'example/static/index.js'
        ]),
      ],
      install_requires=[
          "ipython",
          "jupyter-react"
        ]
      )
