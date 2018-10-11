# Install Node.js in Centos 7
sudo yum install -y nodejs
node -v
npm -v

# Initialize NPM over the directory
npm init

# Modify NPM Package Config File
vi package.json

# Verify NPM Package Installed
npm list --depth=0
npm list -g --depth=0

# Create NODE_PATH to enable the access to the Global instalations
export NODE_PATH=$NODE_PATH:`npm root -g`

# Install Karma module over Node.js Globally
sudo npm install -g karma-cli karma
karma --version

# Install Launcher for the browser selected
sudo npm install -g karma-chrome-launcher
sudo npm install -g karma-firefox-launcher

# Install Jasmine module over Node.js Globally
sudo npm install -g jasmine jasmine-core karma-jasmine

# Initialize Karma
cd e01/js/test
karma init

# Modify Karma Config file
vi karma.conf.js

# Start Karma Tests
karma start karma.conf.js

# Install Angular modules over NPM
npm install angular --save
npm install angular-mocks --save
npm install angular-local-storage --save
