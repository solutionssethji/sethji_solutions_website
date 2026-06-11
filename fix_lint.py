import os
import glob
import re

for filepath in glob.glob('src/**/*.jsx', recursive=True):
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Replace 'import React from "react";' or 'import React from 'react';'
    content = re.sub(r"import React from ['\"]react['\"];\n", "", content)
    
    # Replace 'import React, { ... } from "react";' with 'import { ... } from "react";'
    content = re.sub(r"import React, \{\s*(.*?)\s*\} from ['\"]react['\"];", r"import { \1 } from 'react';", content)
    
    with open(filepath, 'w') as f:
        f.write(content)
