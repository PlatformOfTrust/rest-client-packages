# insomnia-plugin-platform-of-trust

[![](https://img.shields.io/npm/v/insomnia-plugin-platform-of-trust.svg)](https://www.npmjs.com/package/@platform-of-trust/insomnia-plugin-platform-of-trust)
[![](https://img.shields.io/static/v1?label=insomnia&message=workspace&color=6a57d5)](https://insomnia.rest/run/?label=Import%20Platform%20of%20Trust%20Public%20Workspace&uri=https%3A%2F%2Fgithub.com%2FPlatformOfTrust%2Frest-client-packages%2Freleases%2Fdownload%2Fv0.1-alpha%2Fplatform-of-trust-public.yaml)

## Table of Contents
- [Overview](#overview)
- [Usage](#usage)
  * [Installation](#installation)

## Overview <a name="overview"></a>
A plugin for handling Platform of Trust Broker API signature. This plugin computes and adds a `X-Pot-Signature` header to `/broker/v1/fetch-data-product` requests sent from [Insomnia REST Client](https://insomnia.rest/).

## Usage <a name="usage"></a>

### Installation <a name="installation"></a>

1. Open Insomnia
2. Go to Application > Preferences > Plugins
3. Type "@platform-of-trust/insomnia-plugin-platform-of-trust"
4. Click "Install Plugin"
