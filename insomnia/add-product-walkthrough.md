# Add Product and Fetch Data

## Prerequisites

- you must have a registered personal user account
  - new user can be signed up in [My World](https://world-sandbox.oftrust.net/)
- get your User's ID from World App
  - use e.g. Chrome Developer Tools to inspect http transactions of [My World Login](https://world-sandbox.oftrust.net/)
  - in successful login you should be able to see `https://world-sandbox.oftrust.net/api/me` request
  - user id can be found from json response `@id` property 

### Add Group for your Personal user

- user access token should be configured as explained [here](https://developer.oftrust.net/tools/insomnia-workspace/)
- Identity API => Add Group => Create Group
  - set wanted name to JSON body
  - save @id
- Identity API => Add Group => Create MemberOf Link
  - set url: :from_id=[user_id], :to_id=[group_id]
- Add group_id to env settings

### Add App for your Group

- Application API => Create App
  - set name to JSON body
  - save app_access_token, clientSecrets
- Add app_token and client_secret to env settings

## Add Product to your App

- Production API => Create Product
  - edit JSON body: name, productCode, translatorUrl, organizationPublicKeys, description

## Fetch Data Product
- Broker API => Fetch
  - set productCode to JSON body
