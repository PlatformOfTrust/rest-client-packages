# Platform of Trust Insomnia Workspace
Aim is to aid developers willing to onboard Platform of Trust by familiarizing them with with the core Platform APIs without overwhelming knowlege on API structures and functionalities.

# Version and Contents
2.0

## Chain Requests

- Create a `Group`
- Create a demo `Identity Network` (specific to attached diagram)
- Delete a `Group`
![Demo Identity Network](https://developer.oftrust.net/media/images/Insomnia-Demo-Identity_Network_-_Identity_Netw.width-800_1Mu5mgr.jpg)

## APIs

`Application API`:
- List `Applications`
- Create a new `Application`
- Delete an application with its `ID`

`Identity API`:
- Discover `Identities`
- Read an `Identity` with its `@id`
- Create `Identities`
- Create `Link` between `Identities`
- Delete an `Identity` with its `@id`
- Delete `Links` by `@type`

`Product API`:
- List `Products`
- Read a `Product` by its `ID`
- Create a new `Product`
- Update a `Product` by its `ID`
- Delete a `Product` by its `ID`

`Access Control List (ACL) API`
- List permissions for a target `Identity` with its `@id`
- Check READ, WRITE, LINK and MANAGE permissions for a target `Identity` with its `@id`
- Set READ, WRITE, LINK and MANAGE permissions from an `Identity` to another `Identity` with their `@id`s
- Batch Set permissions for a list of `Identities` with their `@id`s
- Delete all permissions from an `Identity` to another `Identity` with their `@id`s

`Context API`
- List all @contexts related to Platform of Trust Identities

`Broker API`
- Fetch harmonized data from a Data Product, which requires installing and using the following additional plugins (you can use the "Install in Core" button): 
	* [@platform-of-trust/insomnia-plugin-platform-of-trust](https://insomnia.rest/plugins/@platform-of-trust/insomnia-plugin-platform-of-trust)
	* [insomnia-plugin-customtimestamp](https://insomnia.rest/plugins/insomnia-plugin-customtimestamp)


# Get Started

1. [Register](https://login-sandbox.oftrust.net/) to Platform of Trust Sandbox and get [Bearer token](https://developer.oftrust.net/guides/get-bearer-token/#how-to-get-bearer-token). 
![retrieving bearer token using chrome developer tool](https://developer.oftrust.net/media/images/Screen_Shot_2020-04-15_at_11.48.52.width-800.png)

2. [Download](https://insomnia.rest/download/)  and [install](https://support.insomnia.rest/article/23-installation)  Insomnia REST client in your workstation. There are Insomnia clients available for **macOS**, **Linux** and **Windows**.

3. After launching Insomnia REST API client: open **Insomnia Preference**. click  **Import Data**, select **from URL** and paste [this URL](https://raw.githubusercontent.com/PlatformOfTrust/rest-client-packages/master/insomnia/platform-of-trust-public.json) to import the workspace.
Location of the file in this repository: `/insomnia/platform-of-trust-public.json`
![workspace import](https://developer.oftrust.net/media/images/tools-insomnia-importworkspace.width-800.png)

4. Go to **Manage Environment** and paste the copied `Bearer Token` value under `bearer_token` attribute. Make sure to exclude the "Bearer " part from the token. Click **Done**.
![Insomnia Manage Environment](https://developer.oftrust.net/media/images/insomnia4.width-500.png)
![set Bearer token](https://developer.oftrust.net/media/images/insomnia5.width-500.png)

5. From Insomnia REST client environments, select **Use Sandbox**.
![Use Sandbox](https://developer.oftrust.net/media/images/insomnia6.width-500.png)

# You are ready to go!

# Plugins

- Install [this plugin](https://insomnia.rest/plugins/@platform-of-trust/insomnia-plugin-platform-of-trust) from Platform of Trust to compute and add an `X-Pot-Signature` header to `/broker/v1/fetch-data-product` requests
- Install [this plugin](https://insomnia.rest/plugins/insomnia-plugin-customtimestamp) to add custom timestamps.

# Additional Resources

1. Start using Platform of Trust [Sandbox](https://world-sandbox.oftrust.net/api/login)
2. Read [Workflow using Insomnia Workspace](https://developer.oftrust.net/guides/workflow-using-insomnia-workspace/) guide in Platform of Trust Developer Portal to know how to use this workspace.
3. Learn about [Chain Request](https://support.insomnia.rest/article/43-chaining-requests), [Template Tags](https://support.insomnia.rest/article/40-template-tags) and [Environment Variables](https://support.insomnia.rest/article/18-environment-variables) in Insomnia
