# MongoDB Query Bug: Case-insensitive Regex with Additional Filter

This repository demonstrates a bug encountered when performing a MongoDB query that involves a case-insensitive regular expression and an additional field filter.  The regex matches correctly, but the second condition appears to be ignored, leading to unexpected results.

## Bug Description

A MongoDB query was constructed using a case-insensitive regular expression to search `field1` and another field condition to filter on `field2`.  The regex component works as expected, but the query returns documents that do not match the `field2` filter.

## Reproduction Steps

1.  Clone this repository.
2.  Ensure a MongoDB instance is running.
3.  Run `bug.js`.  Observe the results of the query.
4.  Run `bugSolution.js` to see the corrected query.

## Solution

The issue is that the original query structure was misinterpreted by the database engine.  The solution uses the `$and` operator to ensure both conditions are applied correctly.