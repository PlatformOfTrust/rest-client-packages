# Platform of Trust Insomnia Workspace
Aim is to aid developers willing to onboard Platform of Trust by familiarizing them with with the core Platform APIs without overwhelming knowlege on API structures and functionalities.

# Version and Contents
1.0

`Application API`:
- List applications
- Create a new application,
- Delete an application with its `ID`

`Identity API`:
- Discover Identities
- Read an identity with its `ID`
- Delete an Identity with its `ID`
- Delete Links by `type`

`Product API`:
- List Products
- Read a Product by its `ID`
- Create a new Product
- Update a Product by its `ID`
- Delete a product by its `ID`

# Get Started

1. [Register](https://login-sandbox.oftrust.net/) to Platform of Trust Sandbox and get [Bearer token](https://developer.oftrust.net/guides/get-bearer-token/#how-to-get-bearer-token). 
![retrieving bearer token using chrome developer tool](https://developer.oftrust.net/media/images/Screen_Shot_2020-04-15_at_11.48.52.width-800.png)

2. [Download](https://insomnia.rest/download/)  and [install](https://support.insomnia.rest/article/23-installation)  Insomnia REST client in your workstation. There are Insomnia clients available for **macOS**, **Linux** and **Windows**.

3. After launching Insomnia REST API client: open **Insomnia Preference**. click  **Import Data**, select **from URL** and paste [this URL](https://raw.githubusercontent.com/PlatformOfTrust/rest-client-packages/master/insomnia/platform-of-trust-public.json) to import the workspace.
Location of the file in this repository: `/insomnia/platform-of-trust-public.json`
![workspace import](https://developer.oftrust.net/media/images/tools-insomnia-importworkspace.width-800.png)

4. Select `Sandbox` as **Environment**.

5. Set the `Bearer Token` as an Environment variable.<br>
![choose Manage Environment in Insomnia REST client](https://developer.oftrust.net/media/images/tools-insomnia-setenvvar.width-800.png)
![set Bearer token as environment variable](https://developer.oftrust.net/media/images/tools-insomnia-bearertokenenvvar.width-800.png)


# You are ready to go!

