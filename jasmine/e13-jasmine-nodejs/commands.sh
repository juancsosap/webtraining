# Install Node.js in Centos 7
sudo yum install -y nodejs

# Verify that Node.js was installed correctly
node -v
npm -v

# Initialize NPM over the directory
npm init

# Modify NPM Package COnfig File
vi package.json

# Install Jasmine module over Node.js
npm install jasmine --save-dev

# Initialize jasmine
node_modules/.bin/jasmine init

# Modify Jasmine Config File
vi spec/support/jasmine.json

# Download examples
node_modules/.bin/jasmine examples

# Execute Jasmine Tests
node_modules/.bin/jasmine
