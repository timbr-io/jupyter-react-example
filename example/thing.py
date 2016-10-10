from jupyter_react import Component 

class Thing(Component):
    module = 'Thing'

    def __init__(self, **kwargs):
        super(Thing, self).__init__(target_name='react.thing', **kwargs)
        self.on_msg(self._handle_msg)

    def _handle_msg(self, msg):
        print msg   
