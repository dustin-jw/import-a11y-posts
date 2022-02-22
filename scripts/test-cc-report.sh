
#!/bin/bash

#####################################
# Send test coverage to Code Climate
#####################################

OS=$(uname -s | awk '{print tolower($0)}')

# download the Code Climate reporter
mkdir -p tmp
curl -L "https://codeclimate.com/downloads/test-reporter/test-reporter-latest-$OS-amd64" > ./tmp/cc-test-reporter
chmod +x ./tmp/cc-test-reporter

# build and upload the report
tmp/cc-test-reporter format-coverage -t lcov -o tmp/codeclimate.js.json coverage/jest/lcov.info
tmp/cc-test-reporter sum-coverage tmp/codeclimate.*.json -p 1 -o tmp/codeclimate.total.json
tmp/cc-test-reporter upload-coverage -i tmp/codeclimate.total.json

rm -rf tmp/
