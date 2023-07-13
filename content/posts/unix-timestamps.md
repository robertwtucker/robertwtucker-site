--- 
draft: false
date: 2023-07-13
title: "Generating Unix Timestamps for API Requests"
description: "A quick note to self re: how to generate unix timestamps"
slug: "unix-timestamps"
authors:
  - Robert Tucker 
tags:
  - how-to
  - javascript
categories:
  - Integration
  - Development
---

## TL;DR

{{< gist robertwtucker 5364019e79dcb808d449ea733e612449 >}}

## Context
I'm filing this one in the "better write this down so I don't make the same
mistake again" folder.

I was recently working with an API that required a `timestamp`[^1] parameter as
part of the URL's query string. My first instinct was to do something with
`Date.now()`. _Wrong!_ As the API later informed me:

``` json
400 Bad Request:
{
    'success':false,
    'data': {
        'name':'Bad Request',
        'message':'Timestamp has expired'
    }
}
```

Not using javascript/typescript? See
[here](https://www.epochconverter.com/#:~:text=How%20to%20get%20the%20current%20epoch%20time%20in).

[^1]: aka Unix timestamp, POSIX time, Unix epoch

