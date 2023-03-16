#!/bin/sh

printf 'kill old jar process if exist\n'
ps -auxww | grep exam.jar | grep -v grep | awk "{print \$2}" | xargs kill

printf 'done'