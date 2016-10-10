# Jupyter-React-Example

A completely working example of how to leverage any react component inside a Jupyter NbExtension using [Jupyter-React](https://github.com/timbr-io/jupyter-react) and [Jupyter-React-JS](https://github.com/timbr-io/jupyter-react-js).

## Installing 

```
git clone git@github.com:timbr-io/jupyter-react-example.git 
cd jupyter-react-example && python setup.py develop
jupyter notebook 
```

## Usage 

Inside a Jupyter Notebook
```python
from example import Thing
from IPython.display import display
import random

data = [[{'y': random.randrange(1,10), "x": i+1} for i, v in enumerate(range(10))] for x in [1,2,3,4]]

mything = Thing(props={"data":data})
display(mything)
```
