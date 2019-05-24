# Hackathon [![Build Status](https://travis-ci.org/fullstackforhackathon/hackathon.svg?branch=master)](https://travis-ci.org/fullstackforhackathon/hackathon) [![Codecov Coverage](https://img.shields.io/codecov/c/github/fullstackforhackathon/hackathon/master.svg?style=flat-square)](https://codecov.io/gh/fullstackforhackathon/hackathon/)

## Easy way to create action types
Use cratn snippet for this: write "cratn" -> push tab -> enter action type name -> push tab to uppercase;

```
import { constantGenerator } from "../utils/ConstantGenerator";

export const { UPLOAD_FILE, UPLOAD_FILE_PENDING, UPLOAD_FILE_FULFILLED, UPLOAD_FILE_REJECTED } = constantGenerator("UPLOAD_FILE");
```