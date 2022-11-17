# Environtment Variables

You need to set up your environment variables to run the app. You can set up your environment variables in `.env` file. You can copy the `.env.local.example` file and rename it to `.env` or `.env.local`, don't worry both of it's name is accepted by nextjs.

## Overview

The following environment variables are available to configure the behavior of the application.

## Required

:::info

If you set `DATA_SOURCE` to `internal`, your app will get internal data on `db/data.json` file.

:::

:::caution

If you set `DATA_SOURCE` to `external`, you need to set all of this **[optional variables](#optional)** on your `.env` file.

:::
| Variable | Description | Available | Default | Example |
| ------------- | ----------------------------------------- | ------------------------ | ----------- | ---------- |
| `DATA_SOURCE` | Configuration for getting datasource from | `internal` \| `external` | `undefined` | `internal` |

## Optional

:::note

If you set `DATA_SOURCE` to `external`, you need to set all of this variables on your `.env` file.

:::

| Variable       | Description  | Default     | Example                                                                                                    |
| -------------- | ------------ | ----------- | ---------------------------------------------------------------------------------------------------------- |
| `DATABASE_URL` | MongoDB URL  | `undefined` | `mongodb+srv://<username>:<password>@<cluster>.izmzeam.mongodb.net/<database>?retryWrites=true&w=majority` |
| `BASE_URL`     | Deployed URL | `undefined` | `https://portfolio.deri-kurniawan.vercel.app`                                                              |

If you decide to using MongoDB, you should see MongoDB documentation for more information about [MongoDB URL](https://docs.mongodb.com/manual/reference/connection-string/).
